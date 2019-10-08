/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// ページにアクセスした時に controller から呼び出されて、ページの表示情報を返す
function page() {
  const display = {
    name: drink_name,
    price: drink_price,
    place: drink_place,
    rate: drink_rate,
  };
  const display_array = [display, display, display];

  return display_array;
}

// controller から呼び出される、画面に表示する情報を返す
function browse({ drink_id }) {
  const detail = {
    name: drink_name,
    price: drink_price,
    place: drink_place,
    rate: drink_rate,
    category: drink_category,
    memo: drink_memo,
    image: drink_image,
  };
  return detail;
}
