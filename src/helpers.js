const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;
const subTotal = (price, qty, discount) => ((!isNaN(parseInt(price)) && !isNaN(parseInt(qty))) ? parseInt(price)*parseInt(qty) : 0) - ((discount) ? ((!isNaN(parseInt(price)) && !isNaN(parseInt(qty))) ? parseInt(price)*parseInt(qty) : 0)*0.20 : 0);

module.exports = { 
    incrementQty, 
    decrementQty,
    subTotal
};
