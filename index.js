const express = require('express')
const app = express()
const port = 3000

app.get('/hieu', (req, res) => {
  a= 10;
  b=20;
  c = a+b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})