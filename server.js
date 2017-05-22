const express = require('express')
const app = express()
const PORT = 3000








app.get('/', (req, res) => {
  res.send("Helloo")
})








const server = app.listen(PORT, () => {
  console.log('Listening on port', server.address().port)
})
