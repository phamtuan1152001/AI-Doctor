
const siteRouter = require('./site')
const infoRouter = require('./information')
const servicesRouter = require('./services')
const userRouter = require('./user')
const personRouter = require('./person')

//const diagnoseRouter = require('./diagnose')

function route(app) {

    // app.use('/Contact', siteRouter)
   
  
    app.use('/Person', personRouter)
    // app.use('/Booking', servicesRouter)
    
    app.use('/users',userRouter);

    // app.use('/diagnose', diagnoseRouter)
   
    // app.use('/booking', bookingRouter)

   
    // app.use('/login', loginRouter)
    // app.use('/regis', loginRouter)
    // app.use('/forgotpwd', loginRouter)
    app.use('/', siteRouter)
}
module.exports = route


// const express = require('express');
// const router = express.Router();
// const { ensureAuthenticated, forwardAuthenticated } = require('../config/db/auth');

// // Welcome Page
// router.get('/', forwardAuthenticated, (req, res) => res.render('login',{layout: 'Login_Reg.hbs'}));

// // Dashboard
// router.get('/dashboard', ensureAuthenticated, (req, res) =>
//   res.render('home', {
//     user: req.user
//   })
// );

// module.exports = router;
