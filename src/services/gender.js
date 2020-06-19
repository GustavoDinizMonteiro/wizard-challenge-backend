module.exports = app => {
    const {
        Gender
    } = app.datasource.models

    const listGenders = async() => {
        const genders = await Gender.findAll({})
        return genders
    }

    return { listGenders }
}