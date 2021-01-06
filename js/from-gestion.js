function sendData(){
    const myForm = document.getElementById('form-contact');
    var localItems = JSON.parse(localStorage.getItem('items'));
    var ids = [];

    // définition du tableau d'identifiant produit
    for ( i = 0 ; i <= localItems.length - 1 ; i++ ) {                    
        ids.push(localItems[i].id);
    }

    // définition du body à envoyer dans la requête
    var data = JSON.stringify({
        contact: {
            firstName: myForm.firstname.value,
            lastName: myForm.name.value,
            address: myForm.address.value,
            city: myForm.city.value,
            email: myForm.email.value
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
        console.log(data);
        localStorage.setItem('monIdOrder', data.orderId);
        window.location.href = '../pages/recap-commande.html';
    }).catch(error => {
        console.log('error');
    });
};