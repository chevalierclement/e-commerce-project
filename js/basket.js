// déclaration des variables
var localItems = JSON.parse(localStorage.getItem('items'));
var sectionBasket = document.getElementById('list-prdt-basket');
var monTableau = [];
var totalAmount = 0;
var buttonEmptyBasket = document.getElementById('emptyBasket');
const sendButton = document.getElementById('sendButton');


// élaboration du tableau de produit commandé à partir du local storage
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

// tri par ordre alphabétique du tableau obtenu 
monTableau.sort();

// affichage du tableau d'achats
for ( i = 0 ; i <= monTableau.length - 1 ; i++ ) {
    showBasket(sectionBasket, monTableau);
}

// vider le panier d'achats
buttonEmptyBasket.addEventListener('click', viderPanier);

// affichage du prix total
var amountHTML = document.getElementById('totalAmount');
amountHTML.innerHTML = totalAmount + ' €';