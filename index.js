const path = require('path')
const express = require('express')
const db_context = require('./db_context/db_context')

const app = express()
const PORT = 3000
const root__dirname = path.resolve()

app.get('/', function (req, res) {
  if(!db_context.chech_connectin()){
    db_context.init()
    db_context.init_tabels()
    db_context.fill_tables()
    console.log(`bd inited`)
  }
  console.log(`app.get 2`)
  res.sendFile(root__dirname + '/static/index.html')
})

app.use(express.static(root__dirname + '/static/'))

app.get('/authors', function (req, res) {
  let con = db_context.get_con()
  con.connect(function (err) {
    if (err) throw err
    const sql = 'SELECT * FROM Authors'
    con.query(sql, function (err, result, fields) {
      if (err) throw err
      res.send(JSON.stringify(result))
    })
  })
})

app.get('/customers', function (req, res) {
  let con = db_context.get_con()
  con.connect(function (err) {
    if (err) throw err
    const sql = 'SELECT * FROM Customers'
    con.query(sql, function (err, result, fields) {
      if (err) throw err
      res.send(JSON.stringify(result))
    })
  })
})

app.get('/books', function (req, res) {
  let con = db_context.get_con()
  con.connect(function (err) {
    if (err) throw err
    const sql = 'SELECT * FROM Books'
    con.query(sql, function (err, result, fields) {
      if (err) throw err
      res.send(JSON.stringify(result))
    })
  })
})

app.get('/checkouts', function (req, res) {
  let con = db_context.get_con()
  con.connect(function (err) {
    if (err) throw err
    const sql = 'SELECT * FROM Checkouts'
    con.query(sql, function (err, result, fields) {
      if (err) throw err
      res.send(JSON.stringify(result))
    })
  })
})


app.listen(PORT)
console.log(`listening on port ${PORT}`)
