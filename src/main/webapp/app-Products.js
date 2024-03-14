let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: '1.PNG',
        price: 15 
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '2.PNG',
        price: 20
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '3.PNG',
        price: 30
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '4.PNG',
        price: 35
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '5.PNG',
        price: 70
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.PNG',
        price: 100
    },
    {
        id: 7,
        name: 'PRODUCT NAME 5',
        image: '7.PNG',
        price: 70
    },
    {
        id: 8,
        name: 'PRODUCT NAME 5',
        image: '8.PNG',
        price: 70
    },
    {
        id: 9,
        name: 'PRODUCT NAME 5',
        image: '9.PNG',
        price: 70
    }

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
// Fonction pour gérer l'ajout d'un produit au panier

// Sélectionnez tous les boutons "Add To Cart" et ajoutez un gestionnaire d'événements de clic
document.querySelectorAll('.item button').forEach((button, index) => {
    button.addEventListener('click', (event) => {
        addToCard(index); // Ajouter 1 car les IDs de produits commencent à partir de 1
        // Empêcher la propagation de l'événement de clic pour éviter la redirection
        event.stopPropagation();
    });
});

// Fonction pour gérer le clic sur chaque élément de produit
function redirectToDetailPage(productId) {
    window.location.href = `detail.html?id=${productId}`;
}

// Sélectionnez tous les éléments .item et ajoutez un gestionnaire d'événements de clic
document.querySelectorAll('.item').forEach((item, index) => {
    item.addEventListener('click', () => {
        redirectToDetailPage(index + 1); // Ajouter 1 car les IDs de produits commencent à partir de 1
    });
});
