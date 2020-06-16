module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {
        name: {
            type: DataType.STRING,
            allowNull: false
        },

        cpf: {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },

        subscriber:{
            type: DataType.BOOLEAN,
            allowNull: false
        },

        active: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, { tableName: 'user' })

    User.associate = models => {
        User.belongsTo(models.Country, { foreignKey: 'countryId' })
        User.belongsTo(models.Gender, { foreignKey: 'genderId' })
        User.belongsTo(models.Access, { foreignKey: 'accessId' })
    }

    return User
}