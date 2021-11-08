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
// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
function findPrime(...numbers) {
    let output = [];
    numbers.forEach((number) => {
      if (isItPrime(number)) {
        output.push(number + ' is a prime number');
      } else {
        output.push(number + ' is a not prime number');
      }
    });
    return output;
  }
  
  function isItPrime(number) {
    for (var i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(findPrime(2, 5, 8, 21, 13));
  
  // 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
  function findFriendNumber(number1, number2) {
    let number1SumDivisors = divisorsOfNumber(number1);
    let number2SumDivisors = divisorsOfNumber(number2);
    if (number1SumDivisors == number2 && number2SumDivisors == number1) {
      console.log(number1 + ' ' + number2 + ' Arkadaş sayılardır');
      return true;
    } else console.log(number1 + ' ' + number2 + ' Arkadaş değildir');
    return false;
  }
  function divisorsOfNumber(number) {
    let sumDivisors = 0;
    for (var i = 0; i < number; i++) {
      if (number % i == 0) {
        sumDivisors += i;
      }
    }
    return sumDivisors;
  }
  console.log(findFriendNumber(220, 284));
  
  // 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
  function findPerfectfNum1To1000() {
    let perfectNumArr = [];
    for (let i = 1; i < 1000; i++) {
      if (i === sumOfDiv(i)) {
        perfectNumArr.push(i);
      }
    }
    return perfectNumArr;
  }
  
  function sumOfDiv(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if (number % i == 0) {
        sum += i;
      }
    }
    return sum;
  }
  console.log(findPerfectfNum1To1000());
  
  // 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
  function findPrimNum1To1000() {
    let primeNumArr = [];
    for (let i = 2; i <= 1000; i++) {
      if (isPrime(i)) {
        primeNumArr.push(i);
      }
    }
    return primeNumArr;
  }
  
  function isPrime(number) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
      if (number % i == 0) count++;
    }
    if (count > 2) {
      return false;
    }
    return true;
  }
  console.log(findPrimNum1To1000());
/********************************************/
//08 Kasım 2021







