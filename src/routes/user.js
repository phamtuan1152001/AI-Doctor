const express = require('express')
const router = express.Router()
// New
const passport = require('passport')

// New
const User = require('../app/models/User')
const { forwardAuthenticated } = require('../config/db/auth');
const { ensureAuthenticated } = require('../config/db/auth');

// New 
const bcrypt = require('bcryptjs');
const siteController = require('../app/controllers/SiteController')
const servicesController  = require('../app/controllers/ServicesController')
const informationController  = require('../app/controllers/InformationController')
// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('Login',{layout: 'Login_Reg.hbs'}));

// Register Page
router.get('/Register', forwardAuthenticated, (req, res) => res.render('Register',{layout: 'Login_Reg.hbs'}));

router.get('/homepage', ensureAuthenticated, (req, res) =>
  res.render('home', {
    user: req.user
  })
);

router.use('/Contact', siteController.contact)
router.use('/Appointment_with_a_doctor', siteController.Utilities1)
router.use('/Immediately_pills_sent', siteController.Utilities2)
router.use('/Multi-function pharmacy', siteController.Utilities3)
router.use('/Online_Health_Diagnosis', siteController.Utilities4)
router.use('/Online_medical_records', siteController.Utilities5)
router.use('/Personal_business_healthcare', siteController.Utilities6)
router.use('/ForgotPassword', siteController.fwd)
router.use('/Person', siteController.person)

router.use('/Services/Booking', servicesController.booking)
router.use('/Services/Diagnose', servicesController.diagnose)
router.use('/Services',servicesController.home)

router.use('/Information/About_us', informationController.about)
router.use('/Information/FAQ', informationController.faq)
router.use('/Information',informationController.info)


// router.use('/', siteController.home)
router.get('/', forwardAuthenticated, (req, res) => res.render('Login', {layout: 'Login_Reg.hbs'}));



// New Register handle
router.post('/Register', (req, res) => {
    const{email, password, password2, name} = req.body;
    let errors = [];

    // Check required fields
    if (!email || !password || !password2 || !name ){
        errors.push({ msg: 'Please fill in all fields' });
    }

    // Check passwords match
    if(password != password2){
        errors.push({ msg: 'Passwords do not match '});
    }

    // Check pass length
    if(password.length < 6){
        errors.push({ msg: 'Password should be at least 6 characters' });
    }

    if(errors.length > 0){
        res.render('Register', {
            layout: 'Login_Reg.hbs',
            errors,
            email,
            password,
            password2,
            name,
            
        });
    } else {
        // Validation passed
        User.findOne({email : email})
        .then(user => {
            if(user){
                // User exists 
                errors.push({ msg: 'Email is already registered'});
                res.render('Register', {
                    layout: 'Login_Reg.hbs',
                    errors,
                    email,
                    password,
                    password2,
                    name
                    
                });
            } else{
                const newUser = new User({
                    email,
                    password,
                    name
                    
                });

                // Hash password
                bcrypt.genSalt(10, (err, salt) => 
                    bcrypt.hash(newUser.password, salt, (err, hash) =>{
                        if(err) throw err;
                        // Set password to hashed
                        newUser.password = hash;
                        // Save user
                        newUser.save()
                        .then(user => {
                            req.flash('success_msg', 'You are now registered and can login');
                            res.redirect('/users/login');
                        })
                        .catch(err => console.log(err));
                }))
            }
        });
    }
});

// Login Handle
router.post('/login',  (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/Users/Person#popup__medical',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

// Logout handle
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login')
})

module.exports = router


// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const passport = require('../config/passport');
// // Load User model
// const User = require('../app/models/User');
// const { forwardAuthenticated } = require('../config/db/auth');

// // Login Page
// router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// // Register Page
// router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

// // Register
// router.post('/register', (req, res) => {
//   const { name, email, password, password2 } = req.body;
//   let errors = [];

//   if (!name || !email || !password || !password2) {
//     errors.push({ msg: 'Please enter all fields' });
//   }

//   if (password != password2) {
//     errors.push({ msg: 'Passwords do not match' });
//   }

//   if (password.length < 6) {
//     errors.push({ msg: 'Password must be at least 6 characters' });
//   }

//   if (errors.length > 0) {
//     res.render('Register', {
//       errors,
//       name,
//       email,
//       password,
//       password2
//     });
//   } else {
//     User.findOne({ email: email }).then(user => {
//       if (user) {
//         errors.push({ msg: 'Email already exists' });
//         res.render('Register', {
//           errors,
//           name,
//           email,
//           password,
//           password2
//         });
//       } else {
//         const newUser = new User({
//           name,
//           email,
//           password
//         });

//         bcrypt.genSalt(10, (err, salt) => {
//           bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if (err) throw err;
//             newUser.password = hash;
//             newUser
//               .save()
//               .then(user => {
//                 req.flash(
//                   'success_msg',
//                   'You are now registered and can log in'
//                 );
//                 res.redirect('/login');
//               })
//               .catch(err => console.log(err));
//           });
//         });
//       }
//     });
//   }

// });

// // Login
// router.post('/login', (req, res, next) => {
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
//   })(req, res, next);
// });

// // Logout
// router.get('/logout', (req, res) => {
//   req.logout();
//   req.flash('success_msg', 'You are logged out');
//   res.redirect('/login');
// });

// module.exports = router;
