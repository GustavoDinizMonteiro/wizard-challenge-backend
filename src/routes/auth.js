module.exports = app => {
    const url = '/auth'
    const { signup, signin } = require('../controllers/auth')(app)

    app.route(`${url}/login`)
        .post(signin)
    
    app.route(`${url}/signup`)
        .post(signup)
}