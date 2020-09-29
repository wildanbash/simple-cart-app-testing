const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;
const subTotal = (price, qty, discount) => parseInt(price) * parseInt(qty) - ((discount) ? parseInt(price)*parseInt(qty)*0.20 : 0);

module.exports = { 
    incrementQty, 
    decrementQty,
    subTotal
};
