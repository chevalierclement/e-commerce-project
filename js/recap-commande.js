// définition des variables et constantes
const monIdOrder = document.getElementById('id_order');

var totalAm = 0;
var localItems = JSON.parse(localStorage.getItem('items'));
var totalPrice = document.getElementById('total-am');

for ( i = 0 ; i <= localItems.length - 1 ; i++ ) {
    var quantityArray = parseInt(localItems[i].quantité);
    var priceArray =  parseInt(localItems[i].prix.replace(' €', ''));
    var priceProduct = quantityArray * priceArray;              
    totalAm += priceProduct;
} 

totalPrice.innerHTML = totalAm + ' €';

console.log(totalAm);