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
        }
    }, { tableName: 'access' })

    return Access
}