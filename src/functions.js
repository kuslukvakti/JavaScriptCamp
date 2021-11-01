function addToChart(productName="Seçim Yapınız", quantity=0) {
    console.log("Sepete Eklendi! Ürün:" + productName + ", Adet:" + quantity)
}

addToChart();  // çıktı Armut
addToChart("Araba");
addToChart("Yumurta",10);
addToChart("Karpuz");
addToChart(10);

