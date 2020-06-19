module.exports = app => {
    const url = '/country'
    const { list } = require('../controllers/country')(app)

    app.route(url)
        .get(list)
    
}