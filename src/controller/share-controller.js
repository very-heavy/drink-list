const shareService = require('../application/share-service');
const Drink = require('../domain/drink');

module.exports.shareController = async (req, res) => {
  try {
    const drink = new Drink(req.body);

    await shareService.share(drink);
    res.json({
      status: 'ok',
    });
  } catch (err) {
    res.json({
      status: 'failed',
    });
  }
};
