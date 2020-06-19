const { Logger } = require('../helpers/logger')

module.exports = app => {
    const { listGenders } = require('../services/gender')(app)

    const list = async(_, res) => {
        try {
            const data = await listGenders()
            res.status(200).json(data)
        } catch (err) {
            Logger.info(`Get error ${err} in list genders.`)
            res.status(400).json(err.message)
        }
    }

    return { list }
}