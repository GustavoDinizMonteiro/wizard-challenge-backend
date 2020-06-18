const { Logger } = require('../helpers/logger')

module.exports = app => {
    const { 
        createUser,
        generateToken,
        getUserByCrendentials 
    } = require('../services/auth')(app)

    const signin = async(req, res) => {
        try {
            const { email, pass } = req.body
            const user = await getUserByCrendentials(email, pass)
            if (!user) {
                return res.status(401).json({ message: 'Bad credentials' })
            }

            const token = await generateToken(user)
            res.status(200).json({ token })
        } catch (err) {
            Logger.info(`Get error ${err} in signin.`)
            res.status(400).json(err.message)
        }
    }

    const signup = async(req, res) => {
        try {
            const user = await createUser(req.body)
            if (!user) {
                return res.status(422).json({ message: 'Error in create user' })
            }
            res.status(201).json(user)
        } catch (err) {
            Logger.info(`Get error ${err} in signup.`)
            res.status(400).json(err.message)
        }
    }

    return { signin, signup }
}