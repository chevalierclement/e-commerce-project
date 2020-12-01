/*
--- Div simple OK
--- Image
    document.getElementById('idImage').src = masource;
--- Nom
    document.getElementById('idNom').innerHTML = monNom;
--- Prix
    document.getElementById('idPrix').innerHTML = monPrix;
--- Description
    document.getElementById('idNom').innerHTML = monNom;
--- Button
    document.getElementById('idButton').innerHTML = btnContent;

*/ 

// fonction qui crée un élément du DOM, lui donne un id et le lie à un élément parent
function addHTMLElement(typeElement, idElement, parentSection){
    var myHTMLElement = document.createElement(typeElement);
    myHTMLElement.id = idElement;
    parentSection.appendChild(myHTMLElement);
}

// fonction qui remplit un contenu html
function contentHTML(id, content){
    document.getElementById(id).innerHTML = content;
}

//fonction de construction d'un produit avec ses caractères principaux (IMAGE, NOM, PRIX)
function buildProduct(parentSection, nameProduct, srcProduct, priceProduct) {
    addHTMLElement('img', 'img-product', parentSection);
    document.getElementById('img-product').src = srcProduct;
    addHTMLElement('h2', 'name-product', parentSection);
    contentHTML('name-product', nameProduct);
    addHTMLElement('h4', 'price-product', parentSection);
    contentHTML('price-product', priceProduct);  
};


/*

//fonction de création d'une div HTML **
function buildDiv (section, identifiant) {
    var maDiv = document.createElement('div');
    maDiv.id = identifiant;
    section.appendChild(maDiv);
};

//fonction d'ajout d'une description **
function addDescriptionProduct (section, description) {
    var descriptionProduct = document.createElement('p');
    descriptionProduct.id = 'description-product';
    descriptionProduct.innerHTML = description;
    section.appendChild(descriptionProduct);
}

*/

//fonction d'ajout d'un label
function addLabel (section, labelFor, labelHTML) {
    var label = document.createElement('label');
    label.for = labelFor;
    label.innerHTML = labelHTML;
    section.appendChild(label);
};

//fonction d'ajout d'un select
function addSelect (section, selectName, referenceArray, identifiant) {
    var select = document.createElement('select');
    select.id = identifiant;
    select.name = selectName;
    for ( i = 0 ; i < referenceArray.length ; i++ ) {
        var option = document.createElement('option');
        option.value = 'option' + 'i';
        option.innerHTML = referenceArray[i];
        select.appendChild(option);
    }
    section.appendChild(select);
};

/*

//fonction d'ajout d'un bouton **
function addButton (section, buttonHTML, identifiant) {
    var button = document.createElement('button');
    button.id = identifiant;
    button.innerHTML = buttonHTML;
    section.appendChild(button);
};

*/






//fonction d'affichage du panier
function showBasket(section, array) {
    var itemProduct = document.createElement('ul');
    var productName = document.createElement('li');
    var productLense = document.createElement('li');
    var productQuantity = document.createElement('li');
    var productPrice = document.createElement('li');

    productName.innerHTML = array[i][0];
    productLense.innerHTML = array[i][1];
    productQuantity.innerHTML = array[i][2];
    productPrice.innerHTML = array[i][3];

    itemProduct.appendChild(productName);
    itemProduct.appendChild(productLense);
    itemProduct.appendChild(productQuantity);
    itemProduct.appendChild(productPrice);

    section.appendChild(itemProduct);
}