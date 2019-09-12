const express = require('express');

const { shareController } = require('../controller/share-controller');

const router = express.Router();

router.get('/', shareController);

module.exports = router;
