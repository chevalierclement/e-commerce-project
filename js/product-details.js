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
            var currentProductId = datas[i]._id;
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
            var monBouton = addIdEl(myProductCusto, 'button', 'buttonBasket');
            monBouton.innerHTML = 'AJOUTER AU PANIER';
        }
    }

    console.log(currentProductId);
    
    //ajout dans le localStorage
    var buttonBasket = document.getElementById('buttonBasket');

    buttonBasket.onclick = function ajouterAuPanier () {
        //récupération du nom
        const nameProduct = document.getElementsByClassName('name-custo')[0].innerHTML;
        console.log(nameProduct);
        //récupération du prix
        const priceProduct = document.getElementsByClassName('price-custo')[0].innerHTML;
        console.log(priceProduct);
        //récupération de la lentille choisie
        const lentilleChoisie = document.getElementById('lentille-choisie').options[document.getElementById('lentille-choisie').selectedIndex].text;
        //récupération de la quantité choisie
        const quantiteChoisie = document.getElementById('quantite-choisie').options[document.getElementById('quantite-choisie').selectedIndex].text;
        // définition du produit choisi
        const myProductChoose = Object.fromEntries([['id',currentProductId], ['nom',nameProduct], ['prix', priceProduct],['quantité', quantiteChoisie], ['lentille',lentilleChoisie]]);

        let items = [];

        if (localStorage.length === 0) {
            items.push(myProductChoose);
            localStorage.setItem('items', JSON.stringify(items));

        } else {
            var localItems = JSON.parse(localStorage.getItem('items'));
            var check = false;

            for ( i = 0 ; i <= localItems.length - 1 ; i++ ) {                    
                if ( localItems[i].nom === myProductChoose.nom && localItems[i].lentille === myProductChoose.lentille ) {
                
                    quantityNumb = parseInt(localItems[i].quantité);
                    quantityNumb = quantityNumb + parseInt(myProductChoose.quantité);
                    localItems[i].quantité = quantityNumb.toString();
                    localStorage.setItem('items', JSON.stringify(localItems));
                    check = true;
                }
            }

            if ( check === false ) {
                localItems.push(myProductChoose);
                localStorage.setItem('items', JSON.stringify(localItems));
            }      
        };
    

    };

});