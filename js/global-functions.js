function productInList(name, price, url, linkPdt, sectionParent){
    var e = document.createElement('li');
    e.className = 'prdt-item';
    
    var div = document.createElement('div');
    div.className = 'product-details';



    var imgPdt = document.createElement('img');
    imgPdt.src = url;

    var namePdt = document.createElement('h2');
    namePdt.innerHTML = name;

    var pricePdt = document.createElement('p');
    pricePdt.innerHTML = price/100 + '.00 €';




    
    
    
    
    
    var link = document.createElement('a'); 
    link.href = linkPdt;

    var pricePdt = document.createElement('p');
    pricePdt.innerHTML = price/100 + '.00 €';
    pricePdt.className = 'price-pdt';

    var buy  = document.createElement('p');
    buy.innerHTML = 'BUY';
    buy.className = 'buy';


    link.appendChild(pricePdt);
    link.appendChild(buy);

    div.appendChild(namePdt);
    div.appendChild(link);



    e.appendChild(imgPdt);
    e.appendChild(div);
    
    


    
   
    
    
    
    
    sectionParent.appendChild(e);
}

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