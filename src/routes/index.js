const userRouter = require('./user')
const siteRouter = require('./site')
const loginRouter= require('./login')
//const diagnoseRouter = require('./diagnose')

function route(app) {

    app.use('/user', userRouter)

    // app.use('/diagnose', diagnoseRouter)
   
    // app.use('/booking', bookingRouter)

  
    
    app.use('/login', loginRouter)
    app.use('/regis', loginRouter)
    app.use('/forgotpwd', loginRouter)
    app.use('/', siteRouter)
}

module.exports = route