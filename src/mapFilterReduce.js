/********************************************/
//08 Kasım 2021
let cart = [
  { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
  { id: 2, productName: "Bardak", quantity: 2, unitPrice: 30 },
  { id: 3, productName: "Kalem", quantity: 1, unitPrice: 20 },
  { id: 4, productName: "Şarj Cihazı", quantity: 2, unitPrice: 100 },
  { id: 5, productName: "Kitap", quantity: 3, unitPrice: 30 },
  { id: 6, productName: "Pot", quantity: 5, unitPrice: 150 },
];
//-----------------------------------------------------------------------------
console.log("*******************************************************");
console.log("Map Ornegi 1");
cart.map((product) => console.log(product.productName));
//-----------------------------------------------------------------------------
console.log("*******************************************************");
console.log("Map Ornegi 2");
console.log("<ul>");
cart.map((product) => {
  console.log(
    "<li>" +
      product.productName +
      ":" +
      product.unitPrice * product.quantity +
      "</li>"
  );
});
console.log("</ul>");
//-----------------------------------------------------------------------------
console.log("*******************************************************");
console.log("Reduce Ornegi");
let total = cart.reduce(
  (acc, product) => acc + product.quantity * product.unitPrice,
  0
);
console.log("Sepet Tutarı:" + total);
//-----------------------------------------------------------------------------
console.log("*******************************************************");
console.log("Filter Ornegi");
let quantityOver2 = cart.filter((product) => product.quantity > 2);
console.log(quantityOver2);
//-----------------------------------------------------------------------------
console.log("*******************************************************");
console.log("Push Ornegi");
//SPA - single page application
//cart.push({id: 7, productName: "Ruhsat Kılıfı", quantity: 1, unitPrice: 20})
function addToCart(sepet) {
  sepet.push({
    id: 7,
    productName: "Ruhsat Kılıfı",
    quantity: 1,
    unitPrice: 20,
  });
}
addToCart(cart);
console.log(cart);
//-----------------------------------------------------------------------------
console.log("*******************************************************");
console.log("Referans ve Deger Tip Farkı");
let sayi = 10;
function sayiTopla(number) {
  number += 1;
  console.log(number);
}
sayiTopla(sayi);
console.log(sayi);
//-----------------------------------------------------------------------------
console.log("*******************************************************");
