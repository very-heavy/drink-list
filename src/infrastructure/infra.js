/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const mysql = require('mysql');

const util = require('util');

async function select_all_drink() {
  // サーバの起動時だけではなく、リロード時にも呼び出される
  const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'drink_share',
  });

  pool.query = util.promisify(pool.query);
  try {
    const results = await pool.query('SELECT * FROM drinks');
    pool.end();
    return results;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports.select_all_drink = select_all_drink;
