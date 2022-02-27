const db_init_tables = {
  sql_author: {
    query: `
      CREATE TABLE IF NOT EXISTS Authors (
        id INT NOT NULL,
        s_name varchar(30) NOT NULL,
        PRIMARY KEY (id)
      )  ENGINE=INNODB;`,
  },

  sql_customer: {
    query: `
      CREATE TABLE IF NOT EXISTS Customers (
        id INT NOT NULL,
        c_name varchar(20) NOT NULL,
        c_email varchar(40) NOT NULL,
        PRIMARY KEY (id)
      )  ENGINE=INNODB;`,
  },

  sql_book: {
    query: `
      CREATE TABLE IF NOT EXISTS Books (
        id INT NOT NULL,
        title varchar(150) NOT NULL,
        price real NOT NULL,
        category varchar(30),
        quantity INT NOT NULL DEFAULT 10,
        b_format varchar(40),
        prod_year INT NOT NULL,
        filesize INT,
        PRIMARY KEY (id)
      )  ENGINE=INNODB;`,
  },

  sql_checkout: {
    query: `
      CREATE TABLE IF NOT EXISTS Checkouts (
        id INT NOT NULL,
        c_id INT NOT NULL,
        ch_type varchar(30),
        ch_date date NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (c_id) REFERENCES Customers(id) ON DELETE CASCADE
      )  ENGINE=INNODB;`,
  },

  sql_SourceProduct: {
    query: `
      CREATE TABLE IF NOT EXISTS SourceProducts (
        id INT NOT NULL,
        s_id INT NOT NULL,
        prod_id INT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (s_id) REFERENCES Authors(id) ON DELETE CASCADE,
        FOREIGN KEY (prod_id) REFERENCES Books(id) ON DELETE CASCADE
      )  ENGINE=INNODB;`,
  },
}

module.exports = db_init_tables
