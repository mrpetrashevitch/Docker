const mysql = require('mysql2')
const mysqlConfig = require('./db_config')
const db_init_tables = require('./db_init_tables')
const db_fill_tables = require('./db_fill_tables')

let con = null

class Db_context {

  chech_connectin = function () {
    if(con && con.connect){
        return con.connect((err) => {
        if (err) return false
        return true
      })
    }
    return false
  } 

  get_con = function () {
    return con
  }

  init = function () {
    con = mysql.createConnection(mysqlConfig)
    con.connect((err) => {
      if (err) throw err
    })
  }

  init_tabels = function () {
    con.connect((err) => {
      if (err) throw err

      con.query(db_init_tables.sql_author.query, function (err, result) {
        if (err) throw err
      })

      con.query(db_init_tables.sql_customer.query, function (err, result) {
        if (err) throw err
      })

      con.query(db_init_tables.sql_book.query, function (err, result) {
        if (err) throw err
      })

      con.query(db_init_tables.sql_checkout.query, function (err, result) {
        if (err) throw err
      })

      con.query(db_init_tables.sql_SourceProduct.query, function (err, result,) {
        if (err) throw err
      })
    })
  }

  fill_tables = function () {
    con.connect((err) => {
      if (err) throw err

      con.query(
        db_fill_tables.sql_Authors.query,
        [db_fill_tables.sql_Authors.value],
        function (err, result) {
          if (err) throw err
        },
      )

      con.query(
        db_fill_tables.sql_Books.query,
        [db_fill_tables.sql_Books.value],
        function (err, result) {
          if (err) throw err
        },
      )

      con.query(
        db_fill_tables.sql_Customers.query,
        [db_fill_tables.sql_Customers.value],
        function (err, result) {
          if (err) throw err
        },
      )

      con.query(
        db_fill_tables.sql_SourceProducts.query,
        [db_fill_tables.sql_SourceProducts.value],
        function (err, result) {
          if (err) throw err
        },
      )

      con.query(
        db_fill_tables.sql_Checkouts.query,
        [db_fill_tables.sql_Checkouts.value],
        function (err, result) {
          if (err) throw err
        },
      )

    })
  }
}

module.exports = new Db_context()
