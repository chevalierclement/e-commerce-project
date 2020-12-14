fetch("http://localhost:3000/api/cameras/order", {
    method : 'POST',
    headers : {
        'Content-Type': 'application/json'
    },
    body : JSON.stringify({
        contact: {
            firstName: 'bob',
            lastName: 'bob',
            address: 'bob',
            city: 'bob',
            email: 'bob'
        },
        products: ['bob', 'bob', 'bob']
    })
});    