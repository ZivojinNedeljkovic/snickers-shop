import path from 'path'
import bodyParser from 'body-parser'
import express from 'express'

const app = express()

app.set('view engine', 'pug')
app.set('views', 'src/views')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  res.render('home-page')
})

app.listen(3000)
