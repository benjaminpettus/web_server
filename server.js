const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const PORT = 3000




app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))


const artists = require("./data/artists.json")
const albums = require("./data/albums.json")
const songs = require("./data/songs.json")

app.get('/', (req, res) => {

  res.render('index', { pageTitle: "Music Stuffs",
                        page: "Artists",
                        data: JSON.stringify(artists)
                      })
})








const server = app.listen(PORT, () => {
  console.log('Listening on port', server.address().port)
})
