// fonction qui ajoute un élément HTML de type textuel <hn>, <p>, ...
function addTextEl(parentElement, type, content = '', classElement = ''){
    var el = document.createElement(type);
    el.className = classElement;
    el.innerHTML = content;
    parentElement.appendChild(el);
};

// fonction qui ajoute une image ou un lien (plusieurs renseignements à donner)
function addPlsAttEl(parentElement, type, att, content, classElement = ''){
    var el = document.createElement(type);
    el.className = classElement;
    switch (type) {
        case 'img':
            el.src = content;
            el.alt = att;
            break;
        case 'a':
            el.href = att;
            el.innerHTML = content;
            break;
        default:
            break;
    }
    parentElement.appendChild(el);
}

// fonction qui ajout un élement avec un identifiant
function addIdEl(parentElement, type, id){
    var el = document.createElement(type);
    el.id = id;
    parentElement.appendChild(el);
    return el;
}

// fonction de construction d'un produit en vente
function productInList(sectionParent, name, price, url, linkPdt){
    var monItem = addIdEl(sectionParent, 'li', 'prdt-item');
    addPlsAttEl(monItem, 'img', 'ceci-est-mon-image', url, 'img-prdt');
    addTextEl(monItem, 'h2', name, 'name-prdt');
    var priceBtn = addIdEl(monItem, 'a', 'prdt-buy');
    priceBtn.href = linkPdt;
    addTextEl(priceBtn, 'p', price/100 + '.00€', 'price');
    addTextEl(priceBtn, 'p', 'buy', 'buy');
}

// fonction qui créer un produit à customiser
function productToCusto(sectionParent, name, price, url, description){
    var monProduit = addIdEl(sectionParent, 'div', 'prdt-custo');
    addPlsAttEl(monProduit, 'img', 'ceci-est-mon-image', url, 'img-prdt-custo');
    addTextEl(monProduit, 'h2', name, 'name-custo');
    addTextEl(monProduit, 'p', price/100 + '.00€', 'price-custo');
    addTextEl(monProduit, 'p', description, 'description-custo');
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