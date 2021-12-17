const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const route = require("./routes");
const app = express();
const swal = require("sweetalert");
require('dotenv').config();

// Connect DB
require('./config/db/keys').mongoURI;

/*
//////////////////////////////////////////////////////////////
//Sử dụng bodyParser cho Song Tuan task Diagnose
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/input", (req, res) => {
  res.send("Ban vua gui du lieu: " + req.body.symptomtext);
});
//////////////////////////////////////////////////////////////
*/
/**/
//Phần Song Tuấn làm thử cho Diagnose
app.post('/getIllness', async (req, res) => {
  let payload = req.body.payload.trim(); //payload này lấy từ trong trang Diagnose.hbs, và trim() để loại bỏ kí tự khoảng trắng đầu và cuối
  let search = await Symptom.find({ name: req.body.name }).exec();//Biến search t dùng để search Symptom ấy, dựa trên database lấy ra nên nếu có sai thì m sửa lại (Coi lại cái thằng Symptom.find() á)
  res.send({ payload: search });
});

// New
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");
const db = require('./config/db/keys').mongoURI;
const Symptom = require("./app/models/Symptom");

app.use(express.static(path.join(__dirname, "public")));

// Passport Config
require('./config/db/passport')(passport);

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
app.use(express.urlencoded({extended: true}));
app.use(express.json());

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

const port = process.env.PORT;
app.listen(port , () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
