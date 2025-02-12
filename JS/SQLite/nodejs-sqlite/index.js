import sqlite3 from "sqlite3";
import { execute } from './sql.js';

const filename = 'my.db';
// const filename = ':memory:'; // Connecting to an in-memory SQLite database


/**
 * Mode => Description
 * `sqlite3.OPEN_READONLY` => Open the database for read-only.
 * `sqlite3.OPEN_READWRITE` => Open the database for reading and writing.
 * `sqlite3.OPEN_CREATE` => Open the database and create a new one if the database does not exist.
 */

// const db = new sqlite3.Database(filename);
const db = new sqlite3.Database(filename, sqlite3.OPEN_READWRITE); // Error: SQLITE_CANTOPEN: unable to open database file


// db.exec(sql, (err) => {
//   // handle error here
// });


// insert into hero (hero_id, hero_name, is_xman, was_snapped)
//         values (1, 'Spiderman', 'N', 'Y'),
//                (2, 'Tony Stark', 'N', 'N'),
//                (3, 'Jean Grey', 'Y', 'N');

const query = `INSERT into products (id, name, price) VALUES (1, 'mobile', 12.34)`;

try {
  const sql = 'SELECT * FROM products';
  const result = await execute(db, sql);
  console.log('result');
  console.log(result);
} catch(error) {
  console.log(error);
}

db.close()


// Tutorial Link
// https://www.sqlitetutorial.net/sqlite-nodejs/

/**
 * Commands to execute queries
 *
 * Create Database:
 * $ node createTable.js
 *
 * Insert Data:
 * $ node insert.js
 *
 * List Data:
 * $ node fetchAll.js
 *
 * Update Data:
 * $ node update.js
 *
 * Delete Data:
 * $ node delete.js
 *
 */