// 投稿するための
const shareRepository = require('../infrastructure/share-repository');

module.exports.share = async (drink) => {
  const isSuccess = await shareRepository.post(drink);
  return isSuccess;
};
