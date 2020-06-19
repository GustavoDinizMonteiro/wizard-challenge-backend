module.exports = app => {
    const {
        Country
    } = app.datasource.models

    const listCountries = async() => {
        const countries = await Country.findAll({})
        return countries
    }

    return { listCountries }
}