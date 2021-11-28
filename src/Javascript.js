const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require('mongoose');

const route = require("./routes");
const app = express();
const port = 2000;
const swal = require("sweetalert");


// New
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");
const db = require('./config/db/keys').mongoURI;

app.use(express.static(path.join(__dirname, "public")));

//Connect to DB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// HTTP logger
app.use(morgan("combined"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

// New Bodyparser
app.use(express.urlencoded({extended: false}));

// New Express session
app.use(session ({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));

// New Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// New connect flash
app.use(flash());

// New Global variable 
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
})

// Route init
route(app);

app.listen(port , () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});
