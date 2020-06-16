const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

let database = null

const { Logger } = require('../helpers/logger')

const loadModels = (sequelize) => {
    const models = []
    fs.readdirSync(__dirname).filter(file => file !== 'index.js')
    .forEach((file) => {        
        const modelDir = path.join(__dirname, file)
        const model = sequelize.import(modelDir)
        Logger.info(`Loaded ${model.name} model.`)
        models[model.name] = model
    })

    Object.keys(models).forEach(function (object) {
        if ('associate' in models[object]) {
            models[object].associate(models)
        }
    })
    Logger.info('Finish load models.')
    return models
}

module.exports = () => {
    if (!database) {
        const sequelize = new Sequelize(
            process.env.DATABASE,
            process.env.DB_USER,
            process.env.PASSWORD,
            {
                host: process.env.HOST,
                dialect: 'postgres',
                logging: false,
                pool: {
                    max: 5,
                    min: 0,
                    evict: 10000,
                    acquire: 10000,
                    maxIdleTime: 30,
                    handleDisconnects: true
                },
                define: {
                    underscored: false,
                    timestamps: true
                },
                retry: {
                    max: 5
                }
            })
        database = {
            sequelize,
            Sequelize,
            models: {}
        }
        Logger.info('Synchronizing modules in database.')
        database.models = loadModels(sequelize)
        sequelize.sync().done(() => database)
    }
    return database
}