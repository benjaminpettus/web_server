const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000




app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.render('index', { pageTitle: "Music Stuffs" })
})








const server = app.listen(PORT, () => {
  console.log('Listening on port', server.address().port)
})
