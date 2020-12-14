const myForm = document.getElementById('form-contact');
myForm.onsubmit = sendData;

function sendData(formulaire){
    var localItems = JSON.parse(localStorage.getItem('items'));
    var ids = [];

    // définition du tableau d'identifiant produit
    for ( i = 0 ; i <= localItems.length - 1 ; i++ ) {                    
        ids.push(localItems[i].id);
    }

    // définition du body à envoyer dans la requête
    var data = JSON.stringify({
        contact: {
            firstName: formulaire.firstname.value,
            lastName: formulaire.name.value,
            address: formulaire.address.value,
            city: formulaire.city.value,
            email: formulaire.email.value
        },
        products: ids
    });

    fetch("http://localhost:3000/api/cameras/order", {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : data
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data.orderId);
    }).catch(error => {
        console.log('error');
    });
};

