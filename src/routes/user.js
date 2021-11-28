// const express = require('express')
// const router = express.Router()

// // New
// const passport = require('../config/db/passport')

// const userController  = require('../app/controllers/UserController')

// // New
// const User = require('../app/models/User')

// // New 
// const bcrypt = require('bcryptjs');
// const SiteController = require('../app/controllers/SiteController');

// router.use('/', userController.home)

// // New Register handle
// router.post('/Register', (req, res) => {
//     const{email, password, confirmPassword, name, dob} = req.body;
//     let errors = [];

//     // Check required fields
//     if (!email || !password || !confirmPassword || !name || !dob){
//         errors.push({ msg: 'Please fill in all fields' });
//     }

//     // Check passwords match
//     if(password !== confirmPassword){
//         errors.push({ msg: 'Passwords do not match '});
//     }

//     // Check pass length
//     if(password.length < 6){
//         errors.push({ msg: 'Password should be at least 6 characters' });
//     }

//     if(errors.length > 0){
//         res.render('Register', {
//             errors,
//             email,
//             password,
//             confirmPassword,
//             name,
//             dob
//         });
//     } else {
//         // Validation passed
//         User.findOne({email : email})
//         .then(user => {
//             if(user){
//                 // User exists 
//                 errors.push({ msg: 'Email is already registered'});
//                 res.render('Register', {
//                     errors,
//                     email,
//                     password,
//                     confirmPassword,
//                     name,
//                     dob
//                 });
//             } else{
//                 const newUser = new User({
//                     email,
//                     password,
//                     name,
//                     dob
//                 });

//                 // Hash password
//                 bcrypt.genSalt(10, (err, salt) => 
//                     bcrypt.hash(newUSer.password, salt, (err, hash) =>{
//                         if(err) throw err;
//                         // Set password to hashed
//                         newUser.password = hash;
//                         // Save user
//                         newUser.save()
//                         .then(user => {
//                             req.flash('success_msg', 'You are now registered and can login');
//                             res.redirect('/login');
//                         })
//                         .catch(err => console.log(err));
//                 }))
//             }
//         });
//     }
// });

// // Login Handle
// router.post('/login',  (req, res, next) => {
//     passport.authenticate('local', {
//         successRedirect: 'user#popup__medical',
//         failureRedirect: '/user/login',
//         failureFlash: true
//     })(req, res, next);
// });

// // Logout handle
// router.get('/login', (req, res) => {
//     req.logout();
//     req.flash('success_msg', 'You are logged out');
//     res.redirect('/user/login')
// })

// module.exports = router


const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('../config/passport');
// Load User model
const User = require('../app/models/User');
const { forwardAuthenticated } = require('../config/db/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('Register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('Register', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }

});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/login');
});

module.exports = router;
