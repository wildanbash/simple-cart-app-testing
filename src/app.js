import { 
  incrementQty, 
  decrementQty,
  subTotal
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const textSubTotal = document.querySelector('#subtotal');
const priceInput = document.querySelector("#price");
const discInput = document.querySelector('#code');
const discButton = document.querySelector('#confirmButton');

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  textSubTotal.textContent = `Rp. ${subTotal(priceInput.value, qtyInput.value, discInput.value)}`;
});

decrButton.addEventListener('click', () => {
  if(parseInt(qtyInput.value) > 1){
    qtyInput.value = decrementQty(qtyInput.value);  
    textSubTotal.textContent = `Rp. ${subTotal(priceInput.value, qtyInput.value, discInput.value)}`;
  }
});

discButton.addEventListener('click', () => {
  textSubTotal.textContent = `Rp. ${subTotal(priceInput.value, qtyInput.value, discInput.value)}`;
})

priceInput.addEventListener('keyup', () => {
  textSubTotal.textContent = `Rp. ${subTotal(priceInput.value, qtyInput.value, discInput.value)}`;
});

qtyInput.addEventListener('keyup', () => {
  textSubTotal.textContent = `Rp. ${subTotal(priceInput.value, qtyInput.value, discInput.value)}`;
});