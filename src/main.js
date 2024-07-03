const express = require('express')
const app = express()
const port = 3000

const logger = function (req, res, next) {
  console.log('logging')
  next()
}

app.use(logger)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/signup', (req, res) => res.send('Hello World! Sign up!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))