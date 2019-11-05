const express = require('express');

const router = express.Router();
const controll = require('../controller/controll'); // controll.jsを呼び込む


// ルーティングしてるだけ、controllとエンドポイントをつなぐ
router.get('/drinks', controll.show_drink_list);
router.post('/drinks', controll.post_drink);

module.exports = router;
