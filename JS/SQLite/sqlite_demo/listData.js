const db = require("./db");

function selectRows() {
  db.each(`SELECT * FROM sharks`, (error, row) => {
    if (error) {
      throw new Error(error.message);
    }
    console.log(row);
  });
}

selectRows();

// List Data:
// $ node listData.js
