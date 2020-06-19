module.exports = app => {
    const url = '/gender'
    const { list } = require('../controllers/gender')(app)

    app.route(url)
        .get(list)
    
}