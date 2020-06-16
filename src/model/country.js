module.exports = (sequelize, DataType) => {
    const Country = sequelize.define('Country', {
        name: {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        }
    }, { tableName: 'country' })

    return Country
}