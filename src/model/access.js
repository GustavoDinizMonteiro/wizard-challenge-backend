module.exports = (sequelize, DataType) => {
    const Access = sequelize.define('Access', {
        email: {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },

        pass: {
            type: DataType.STRING,
            allowNull: false
        },

        phone: {
            type: DataType.STRING,
            allowNull: false
        },

        token: {
            type: DataType.STRING
        }
    }, { tableName: 'access' })

    return Access
}