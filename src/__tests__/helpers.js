const { incrementQty, decrementQty, subTotal } = require('../helpers');
/*
    Gunakan file ini untuk membuat test case dengan Jest
*/
const helper = require('../helpers');

// test increment qty
test('Jika Qty 1 ditambah 1 hasilnya 2',() => {
    expect(incrementQty(1)).toBe(2);
});

// test decrement qty
test('Jika Qty 2 dikurangi 1 hasilnya 1',() => {
    expect(decrementQty(2)).toBe(1);
});

// test subtotal
test('Subtotal dari harga 20000 dikali qty 3 hasilnya 60000',() => {
    expect(subTotal(20000,3)).toBe(60000);
});

// test subtotal dengan discount
test('Subtotal harga 30000 dan qty 4 dengan Diskon 20% menggunakan kode bebas adalah 96000',() => {
    expect(subTotal(30000,4,"discount")).toBe(96000);
});

// test subtotal tanpa discount
test('Subtotal dengan harga 40000 qty 3 dan tanpa discount adalah 120000',() => {
    expect(subTotal(40000,3,"")).toBe(120000);
});

// test input bukan angka dengan diskon
test('Subtotal input bukan angka pada harga atau qty dengan menggunakan diskon adalah 0',() =>{
    expect(subTotal("Nan","Nan","discount")).toBe(0);
});

// test input bukan angka tanpa diskon
test('Subtotal input bukan angka pada harga atau qty tanpa menggunakan diskon adalah 0',() =>{
    expect(subTotal("Nan","Nan","")).toBe(0);
});