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

// const promise = new Promise((resolve,reject)=>{
//   const errflg = false;
//   if(errflg){
//     reject(new Error("An error has occured"));
//   }
//   resolve;
// });

// const onFullFilled =function(){
//   pool.query = util.promisify(pool.query)
//   results = pool.query('SELECT * FROM drinks')
//   console.log(results)
//   pool.end();
//   return results
// }

// const onRejected = (error) => {
//   console.error(error);
// };

// promise
//   .then(onFullFilled, onRejected);
