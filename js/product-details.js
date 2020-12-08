// déclaration des constantes
const urlApi = 'http://localhost:3000/api/cameras';
const productCusto = document.getElementById('prdt-custo-ctnr');

// requête API à l'aide de Fetch
fetch(urlApi)
.then(response => {
    if (response.ok){
        return response.json();
    } else {
        productCusto.innerHTML = 'erreur 404';
    }   
}).then(datas => {
    console.log(datas.length);
    //boucle sur l'ensemble des éléments de la réponse
    for ( i = 0 ; i < datas.length ; i++ ) {
        console.log(datas[i].name);
        if ( '?' + datas[i].name.replace(/ /g, '%20') == window.location.search) {
            productToCusto(productCusto, datas[i].name, datas[i].price, datas[i].imageUrl, datas[i].description);
            var myProductCusto = document.getElementById('prdt-custo');
            var choice = addIdEl(myProductCusto,'div', 'choices');
            //ajout du sélecteur de lentille
            addLabel(choice, 'selection-lentille', 'Lentille');
            addSelect(choice, 'lentilles', datas[i].lenses, 'lentille-choisie');
            //ajout du sélecteur de quantité
            addLabel(choice, 'selection-quantity', 'Quantité');
            addSelect(choice, 'quantité', [1,2,3,4,5,6,7,8,9,10], 'quantite-choisie');
            //ajout du bouton d'ajout au panier
            addTextEl(myProductCusto, 'button', 'AJOUTER AU PANIER', 'buttonBasket');
        }
    }
});