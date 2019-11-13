/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

const infra = require('../infrastructure/infra');

exports.show_drink_list = async function (req, res) {
  const ret_infra = await infra.select_all_drink();
  res.send(ret_infra);
};

exports.post_drink = async function (req, res) {
  const {
    name,
    price,
    place,
    rate,
    category,
    memo,
  } = req.body;
  const { post_drink } = await infra.post_drink(name, price, place, rate, category, memo);
  res.send(post_drink);
};
