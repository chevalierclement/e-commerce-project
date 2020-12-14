const monIdOrder = document.getElementById('id_order');

fetch("http://localhost:3000/api/cameras/order", {
    method : 'POST',
    headers : {
        'Content-Type': 'application/json'
    },
    body : JSON.stringify({
        contact: {
            firstName: 'bob',
            lastName: 'bob',
            address: 'bob',
            city: 'bob',
            email: 'bob'
        },
        products: ['5be9c4471c9d440000a730e8', '5be9c4471c9d440000a730e8', '5be9c4471c9d440000a730e8']
    })
}).then(response => {
    return response.json()
}).then(data => {
    console.log(data);
    monIdOrder.innerHTML = data.orderId;
}).catch(error => {
    console.log('error');
}); 

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

