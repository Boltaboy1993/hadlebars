import express from 'express'
import path from 'path'
import { engine } from 'express-handlebars'

const app = express()

app.engine('.hbs', engine( {extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './pages')

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/home', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/contacts', (req, res) => {
  res.render('contacts')
})

app.listen(8080, () => {
  console.log('server is running on https://localhost:8080/');
  
})