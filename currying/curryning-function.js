const getDiscountCostumer = getDiscount => getValorVoucher => getValorVoucher * getDiscount;
const getDiscountCostumerOne = getDiscountCostumer(.10)
const getDiscountCostumerTow = getDiscountCostumer(.20)
const getDiscountCostumerThree = getDiscountCostumer(.30)
console.log(
    getDiscountCostumerOne(500),
    getDiscountCostumerTow(500),
    getDiscountCostumerThree(500)
    )