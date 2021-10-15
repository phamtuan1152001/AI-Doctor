const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const db = require('./config/db')
const route = require('./routes/index')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

//Connect to DB
db.connect();

// HTTP logger
app.use(morgan('combined'))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())


//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/Information', (req, res) => {
  res.render('Information');
})