const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const exphbs  = require('express-handlebars')

const pageRouter = require('./routes/pages')
const apiRouter = require('./routes/api')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.engine('hbs', exphbs())
app.set('views', __dirname + '/public/views')
app.set('view engine', 'hbs')

app.get('/', pageRouter.getHome)
app.post('/data', apiRouter.postData)

module.exports = app
