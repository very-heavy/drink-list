const mysql = require('mysql2');

const pool = mysql.createPool({ host: 'localhost', user: 'root', database: 'test' });
const promisePool = pool.promise();

module.exports.post = async (drink) => {
  const query = 'INSERT INTO drinks(name, price, place, rate, category, memo) VALUE(?, ?, ?, ?, ?, ?)';
  const {
    name, place, rate, category, memo,
  } = drink;
  await promisePool.execute(query, [name, place, rate, category, memo]).catch((err) => {
    throw err;
  });
  return true;
};
