/**
 *
 * @description シェアサイトで扱う飲料情報を格納するクラス
 * @class Drink
 */
class Drink {
  constructor({
    name, price, place, rate, category, memo,
  }) {
    if (!name) throw TypeError('name is empty');
    if (typeof price === 'undefined') throw TypeError('price is empty');
    if (!place) throw TypeError('place is empty');
    if (typeof rate === 'undefined') throw TypeError('rate is empty');
    if (!category) throw TypeError('category is empty');
    if (!memo) throw TypeError('memo is empty');

    this.name = name;
    this.price = price;
    this.place = place;
    this.rate = rate;
    this.category = category;
    this.memo = memo;
  }
}

module.exports = Drink;
