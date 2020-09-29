const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;
const subTotal = (price, qty) => parseInt(price) * parseInt(qty);

module.exports = { 
    incrementQty, 
    decrementQty,
    subTotal
};
