const { Logger } = require('../helpers/logger')

module.exports = app => {
    const { listCountries } = require('../services/country')(app)

    const list = async(_, res) => {
        try {
            const data = await listCountries()
            res.status(200).json(data)
        } catch (err) {
            Logger.info(`Get error ${err} in list countries.`)
            res.status(400).json(err.message)
        }
    }

    return { list }
}