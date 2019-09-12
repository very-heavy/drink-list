//投稿するための

function share({drink_name, drink_price, drink_place, drink_rate, drink_category, drink_memo}){

    const drink = {
        name: drink_name,
        price: drink_price,
        place: drink_place,
        rate: drink_rate,
        category: drink_category,
        memo: drink_memo,
    };

    const err_infra = infrastructure.post(drink)

    return err_infra
}
