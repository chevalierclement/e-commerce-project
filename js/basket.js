/* déclaration des variables utiles au script */
var localItems = JSON.parse(localStorage.getItem('items'));

var sectionBasket = document.getElementById('list-prdt-basket');

var monTableau = [];
var totalAmount = 0;

/* construction du tableau de produits commandés en fonction du localStorage */
if (localStorage.length === 0) {
    var emptyBasket = document.createElement('p');
    emptyBasket.id = "empty-sentence";
    emptyBasket.innerHTML = 'Votre panier est vide.';
    sectionBasket.appendChild(emptyBasket);
} else {
    for ( i = 0 ; i <= localItems.length - 1 ; i++ ) {
        var quantityArray = parseInt(localItems[i].quantité);
        var priceArray =  parseInt(localItems[i].prix.replace(' €', ''));
        var priceProduct = quantityArray * priceArray;              
        monTableau.push([localItems[i].nom,localItems[i].lentille, quantityArray, priceProduct + ' €']);
        totalAmount = totalAmount + priceProduct;
    }    
}

// affichage du tableau trié
monTableau.sort();

for ( i = 0 ; i <= monTableau.length - 1 ; i++ ) {
    showBasket(sectionBasket, monTableau);
}

var amountHTML = document.getElementById('totalAmount');
amountHTML.innerHTML = totalAmount + ' €';

/* gestion du bouton vider mon panier */
var buttonEmptyBasket = document.getElementById('emptyBasket');
buttonEmptyBasket.onclick = function () {
    localStorage.clear();
    window.location.reload();
};