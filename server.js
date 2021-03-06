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
    .render('index', {
      status: 'success',
      data: data,
      message: 'Retrieved all Artists',
      pageTitle: 'Music Player',
      page: 'Artists'
    })
  })
  .catch((err) => {
    return next(err)
  })

})


app.get('/albums', (req, res) => {
  // res.json(artists)
  db.any('select * from albums')
  .then( (data) => {
    res.status(200)
    .render('albums', {
      status: 'success',
      data: data,
      message: 'Retrieved all Albums',
      pageTitle: 'Music Player',
      page: 'Albums'
    })
  })
  .catch((err) => {
    return next(err)
  })

})


app.get('/songs', (req, res) => {
  // res.json(artists)
  db.any('select * from songs')
  .then( (data) => {
    res.status(200)
    .render('songs', {
      status: 'success',
      data: data,
      message: 'Retrieved all Songs',
      pageTitle: 'Music Player',
      page: 'Songs'
    })
  })
  .catch((err) => {
    return next(err)
  })

})


app.get('/artists/:artist_id', (req, res) => {
  // res.json(artists)
  const id = req.params
  console.log(id)
  db.any('select * from songs')
  .then( (data) => {
    res.status(200)
    .render('artist', {
      status: 'success',
      data: data,
      message: 'Retrieved all Songs',
      pageTitle: 'Music Player',
      page: 'Artist'
    })
  })
  .catch((err) => {
    return next(err)
  })

})


app.get('/albums/:album_id', (req, res) => {
  // res.json(artists)
  const id = req.params
  console.log(id)
  db.any('select * from songs')
  .then( (data) => {
    res.status(200)
    .render('album', {
      status: 'success',
      data: data,
      message: 'Retrieved all Songs',
      pageTitle: 'Music Player',
      page: 'Artist'
    })
  })
  .catch((err) => {
    return next(err)
  })
})

const server = app.listen(PORT, () => {
  console.log('Listening on port', server.address().port)
})
