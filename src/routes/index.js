const fs = require('fs')
const { Logger } = require('../helpers/logger')

module.exports = app => {
    Logger.info('Loading modules routes express.')
    fs.readdirSync(__dirname)
        .filter(file => file !== 'index.js')
        .map(file => require(`${__dirname}/${file}`)(app))
}