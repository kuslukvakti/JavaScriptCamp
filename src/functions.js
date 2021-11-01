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
let product3 = {productName:"Kivi", unitPrice:"20", quantity:3}
product2 = product3
product2.productName="Karpuz"
console.log(product3.productName) 
// Referans tip - Bellek adres eşitlemesi olduğundan sonuç:Karpuz
// Bellek alanları Stack(Değer Tipler tutulur) ve Heap(Referans Tipler tutulur)
// Değer Tip: Int, Double, Boolean etc
// Referans Tip: Nesneler tutulur -> Interface, Class etc
/********************************************/
let products = [
    product1, 
    product2, 
    product3
]
function addToCart4(x) {
    console.log(x)
}
addToCart4(products)
/********************************************/
function addToCart4(x) { 
    //scope özelliğinden products fonksiyon içinde yoksa dışarıda arar bulursa eşitler
    // varsa dışarıda aynı değişken olsada birbiriyle ilişkilenmez
    console.log(products)
}
addToCart4(products)
/********************************************/
function add1(number1, number2) {
    console.log(number1 + number2)
}
add1(1,2)
/********************************************/
function add2(...numbers) { //... seprate ayırma
    console.log(numbers)
}
add2(20,30)
add2(20,30,40)
add2(20,30,40,50)
/********************************************/
function add3(...numbers) { //rest
    let total =0;
    for (let i = 0; i< numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total);
}
add3(20,30) // çıktı total:50 olur
add3(20,30,40) // çıktı total:90 olur
add3(20,30,40,50) // çıktı total:140 olur
/********************************************/
function add4(birsey,...numbers) { //rest
    let total =0;
    for (let i = 0; i< numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total);
    console.log(birsey);
}
add4(20,30,40)
// çıktı birsey:20 total:70 olur
/********************************************/
let numbers = [10,20,30,40]
console.log("Math.max:" + Math.max(...numbers))
/********************************************/
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[ // Distractor
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(marmara)
console.log(karadeniz)
console.log(icAnadoluSehirleri)
/********************************************/
let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = 
    {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
/********************************************/









