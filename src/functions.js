function addToCart(productName="Seçim Yapınız", quantity=0) {
    console.log("Sepete Eklendi! Ürün:" + productName + ", Adet:" + quantity)
}

addToCart();  // çıktı Armut
addToCart("Araba")
addToCart("Yumurta",10)
addToCart("Karpuz")
addToCart(10)
/********************************************/
let dolarDun=9.5
function sayHello1(){
console.log("Hello World1:" + dolarDun)
}

sayHello1()
/********************************************/
dolarDun=9.6
let sayHello2 = ()=>{
console.log("Hello World2:" + dolarDun)
}

sayHello2()
/********************************************/
dolarDun=9.7
let sayHello3 = function () {
    console.log("Hello World2:" + dolarDun)
}

sayHello3()
/********************************************/
function addToCart2(productName, quantity, unitPrice) {
    console.log("Ürün:" + productName + ", Ürün Fiyatı:" + unitPrice + ", Ürün Adedi:" + quantity)
}
addToCart2("Armut", 15, 100)

let product1 = {productName:"Elma", unitPrice:"10", quantity:5}
function addToCart3(product) {
    console.log("Ürün:" + product.productName + ", Ürün Fiyatı:" + product.unitPrice + ", Ürün Adedi:" + product.quantity)
}
addToCart3(product1)
/********************************************/
let product2 = {productName:"Elma", unitPrice:"10", quantity:5}
let product3 = {productName:"Elma", unitPrice:"10", quantity:5}
product2 = product3
product2.productName="Karpuz"
console.log(product3.productName) //Referans tip - Hafıza adres eşitlemesi olduğundan sonuç:Karpuz
/********************************************/


