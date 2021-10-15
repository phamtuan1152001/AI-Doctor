const userRouter = require('./user')
const siteRouter = require('./site')
//const diagnoseRouter = require('./diagnose')

function route(app) {

    app.use('/user', userRouter)

    // app.use('/diagnose', diagnoseRouter)
   
    // app.use('/booking', bookingRouter)

    app.use('/', siteRouter)

}

module.exports = route