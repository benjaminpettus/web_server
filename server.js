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
  // res.json(artists)
  res.render('index', { pageTitle: "Music Player",
                        page: "Artists",
                        data: artists
                      })
})

app.get('/albums', (req, res) => {
    // res.json(albums)
  res.render('albums', { pageTitle: "Music Player",
                          page: "Albums",
                          data: JSON.stringify(albums)
                        })
})

app.get('/songs', (req, res) => {
  // res.json(songs)
  res.render('songs', { pageTitle: "Music Player",
                          page: "Songs",
                          data: songs
                        })
})

app.get('/artists/:artist_id', (req, res) => {
  // res.json(songs)
  res.render('artist', { pageTitle: "Music Player",
                          page: "Artist"
                          // data: songs
                        })
})

app.get('/albums/:album_id', (req, res) => {
  // res.json(songs)
  res.render('album', { pageTitle: "Music Player",
                          page: "Album Title"
                          // data: songs
                        })
})








const server = app.listen(PORT, () => {
  console.log('Listening on port', server.address().port)
})
