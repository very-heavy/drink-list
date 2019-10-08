/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

const infra = require('../infrastructure/infra');

exports.show_drink_list = async function (req, res) {
  const ret_infra = await infra.select_all_drink();
  res.send(ret_infra);
};
