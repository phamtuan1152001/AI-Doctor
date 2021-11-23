
const siteRouter = require('./site')
const infoRouter = require('./information')
const servicesRouter = require('./services')
const userRouter = require('./user')

//const diagnoseRouter = require('./diagnose')

function route(app) {

    // app.use('/Contact', siteRouter)
    app.use('/Services', servicesRouter)
    app.use('/Information', infoRouter)
    app.use('/User', userRouter)
    // app.use('/Booking', servicesRouter)
    

    // app.use('/diagnose', diagnoseRouter)
   
    // app.use('/booking', bookingRouter)

   
    // app.use('/login', loginRouter)
    // app.use('/regis', loginRouter)
    // app.use('/forgotpwd', loginRouter)
    app.use('/', siteRouter)
}

module.exports = route