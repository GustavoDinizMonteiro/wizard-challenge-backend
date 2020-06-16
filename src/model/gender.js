module.exports = (sequelize, DataType) => {
    const Gender = sequelize.define('Gender', {
        name: {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        }
    }, { tableName: 'gender' })

    return Gender
}