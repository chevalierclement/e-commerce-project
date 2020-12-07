// déclaration des constantes
const urlApi = 'http://localhost:3000/api/cameras';
const productsList = document.getElementById('prdt-lt');

// requête API à l'aide de Fetch
fetch(urlApi)
.then(response => {
    if (response.ok){
        return response.json();
    } else {
        productsList.innerHTML = 'erreur 404';
    }   
}).then(datas => {
    datas.forEach(e => {
        productInList(e.name, e.price, e.imageUrl, 'pages/product-details.html?' + e.name, productsList);
    });
}).catch( () => {
    productsList.innerHTML = 'le serveur est éteint';
});