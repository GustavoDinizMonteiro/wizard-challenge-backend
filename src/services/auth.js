const md5 = require('md5')
const jwt = require('jsonwebtoken')

module.exports = app => {
    const {
        models: {
            User,
            Access
        },
        sequelize
    } = app.datasource

    const getUserByCrendentials = async(email, pass) => {
        const user = await User.findOne({
            where: { active: true },
            attributes: ['cpf'],
            include: [{
                model: Access,
                as: 'access',
                attributes: ['id', 'email', 'pass'],
                where: { pass: md5(pass), email }
            }],
            raw: true,
            nest: true
        })

        return user
    }

    const generateToken = async(user) => {
        const token = jwt.sign(user, process.env.KEY)
        await Access.update({ token }, { where: { id: user.access.id } })
        return token
    }

    const createUser = async(userData) => {
        let transaction = await sequelize.transaction()
        const { access, ...user } = userData

        try {            
            const { id: accessId } = await Access.create({
                ...access,
                pass: md5(access.pass)
            }, { transaction })

            const newUser = await User.create({ ...user, accessId }, { transaction })

            transaction.commit()
            return newUser
        } catch {
            transaction.rollback()
            return null
        }
    }

    return { getUserByCrendentials, generateToken, createUser }
}