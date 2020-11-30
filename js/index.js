//initialisation de la requête
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // définition des constantes
        const monTableau = this.response;        
        const productList = document.getElementById('productList');

        //boucle sur l'ensemble des éléments de la réponse
        for ( i = 0 ; i < monTableau.length ; i++ ) {    
            buildProduct(productList, monTableau[i].name, monTableau[i].imageUrl, monTableau[i].price);
        }
    } 
    // gestion d'une erreur 404
    else if (this.readyState == 4 && this.status == 404) {
        alert('attention: erreur 404');
    }
};

//utilisation de la requête
xhr.open("GET", 'http://localhost:3000/api/cameras');
xhr.responseType = "json";
xhr.send();