require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twiter', (req, res) => {
  res.send('ankitdotcom')
})

app.get('/login', (req, res)=>{
    res.send('Login at chai aur code')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})