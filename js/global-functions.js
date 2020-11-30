//fonction de création d'une div HTML
function buildDiv (section, identifiant) {
    var maDiv = document.createElement('div');
    maDiv.id = identifiant;
    section.appendChild(maDiv);
};

//fonction d'ajout d'une image
function addImageProduct (section, srcProduct) {
    var productImage = document.createElement('img');
    productImage.src = srcProduct;
    productImage.id = 'image-product';
    section.appendChild(productImage);
}

//fonction d'ajout du nom
function addNameProduct (section, nameProduct) {
    var productName = document.createElement('h2');
    productName.innerHTML = nameProduct;
    productName.id = 'name-product';
    section.appendChild(productName);
}

//fonction d'ajout du prix
function addPriceProduct (section, priceProduct) {
    var productPrice = document.createElement('h4');
    productPrice.innerHTML = priceProduct/100 + ' €';
    productPrice.id = 'price-product';
    section.appendChild(productPrice);
}

//fonction d'ajout d'une description
function addDescriptionProduct (section, description) {
    var descriptionProduct = document.createElement('p');
    descriptionProduct.id = 'description-product';
    descriptionProduct.innerHTML = description;
    section.appendChild(descriptionProduct);
}

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

//fonction d'ajout d'un bouton
function addButton (section, buttonHTML, identifiant) {
    var button = document.createElement('button');
    button.id = identifiant;
    button.innerHTML = buttonHTML;
    section.appendChild(button);
};


//fonction de construction d'un produit en vente
function buildProduct (section, nameProduct, srcProduct, priceProduct) {
    const productSell = document.createElement('a');
    productSell.href = 'details-product.html?' + nameProduct;
    productSell.id = 'product-sell';
    addImageProduct(productSell, srcProduct);
    addNameProduct(productSell, nameProduct);
    addPriceProduct(productSell, priceProduct);
    section.appendChild(productSell);
};

//fonction de construction d'un produit à customiser
function buildProductDetails (section, nameProduct, srcProduct, priceProduct, descriptionProduct) {
    const productDetails = document.createElement('div');
    productDetails.id = 'product-details';
    addImageProduct(productDetails, srcProduct);
    addNameProduct(productDetails, nameProduct);
    addPriceProduct(productDetails, priceProduct);
    addDescriptionProduct(productDetails, descriptionProduct);
    section.appendChild(productDetails);
};

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