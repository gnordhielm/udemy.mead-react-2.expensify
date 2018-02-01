
const path = require('path')
const express = require('express')
const app = express()
const PUBLIC_PATH = path.resolve(__dirname, '../public')

app.use(express.static(PUBLIC_PATH))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'))
})

app.listen(3000, () => {
  console.log('server running')
})
