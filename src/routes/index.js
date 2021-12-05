
const siteRouter = require('./site')
const infoRouter = require('./information')
const servicesRouter = require('./services')
const userRouter = require('./user')
const personRouter = require('./person')
const bookingRouter = require('./booking')

function route(app) {

    app.use('/Person', personRouter)

    app.use('/Users',userRouter);

    app.use('/Booking', bookingRouter)
    
    app.use('/', siteRouter)
}
module.exports = route


