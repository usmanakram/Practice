const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./fish.db";

function createDbConnection() {
  if (fs.existsSync(filepath)) {
    return new sqlite3.Database(filepath);
  } else {
    const db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
      createTable(db);
    });
    console.log("Connection with SQLite has been established");
    return db;
  }
}

function createTable(db) {
  db.exec(`
  CREATE TABLE sharks
  (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    name   VARCHAR(50) NOT NULL,
    color   VARCHAR(50) NOT NULL,
    weight INTEGER NOT NULL
  );
`);
}

module.exports = createDbConnection();

// Tutorial Link
// https://www.digitalocean.com/community/tutorials/how-to-use-sqlite-with-node-js-on-ubuntu-22-04

/**
 * Commands to execute queries
 *
 * Insert Data:
 * $ node insertData.js sammy blue 1900
 * $ node insertData.js max white 2100
 *
 * List Data:
 * $ node listData.js
 *
 * Update Data:
 * $ node updateData.js 2 sonny
 *
 * Detele Data:
 * $ node deleteData.js 2
 *
 */
