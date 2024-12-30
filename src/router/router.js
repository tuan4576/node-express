const newsRouter = require('./new')
const userController = require('./user')

function route(app){
    app.use('/', newsRouter)
    app.use('/auth', userController)
}

module.exports = route; 