const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const PORT = 3000
const promise = require('bluebird')
const options = {
  promiseLib: promise
}
const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/music'
const db = pgp(connectionString)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  // res.json(artists)
  db.any('select * from artists')
  .then( (data) => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Retrieved all Artists'
    })
  })
  .catch((err) => {
    return next(err)
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
                          page: "Art Tatum"
                          // daata: songs
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
