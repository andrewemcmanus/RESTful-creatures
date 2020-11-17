// require stuff
// const app = require('express')()
const express = require('express')
const app = express()

const layouts = require('express-ejs-layouts')

const dinoRouter = require('./controllers/dinoController')

// additional setup
app.set('view engine', 'ejs')
app.use(layouts)
app.use(express.urlencoded({extended: false}))

// our routes
app.get('/', (req, res) => {
  res.send('hello I am alive!')
})

app.use('/dinosaurs', dinoRouter)


// listen!
app.listen(8000, () => {
  console.log('server started!')
})
