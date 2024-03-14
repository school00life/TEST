// Utiliser les produits du script app-Products.js
let products = [
    {
        id: 1,
        name: 'Hamburger classique',
        image: '1.PNG',
        price: 15,
        description: 'Steak haché de bœuf,\nLaitue,\nTomate,\nOignon,\nFromage cheddar,\nPain à hamburger'
    },
    {
        id: 2,
        name: 'Hamburger barbecue',
        image: '2.PNG',
        price: 20,
        description: 'Steak haché de bœuf assaisonné de sauce barbecue,\nBacon grillé,\nOignon caramélisé,\nFromage pepper jack,\nPain au sésame'
    },
    {
        id: 3,
        name: 'Hamburger végétarien',
        image: '3.PNG',
        price: 15,
        description: 'Galette de haricots noirs ou de lentilles,\nAvocat en tranches,\nLaitue,\nTomate,\nSauce au yaourt épicée,\nPain complet'
    },
    {
        id: 4,
        name: 'Hamburger au poulet cajun',
        image: '4.PNG',
        price: 20,
        description: 'Blanc de poulet grillé assaisonné avec des épices cajun,\nLaitue,\nPoivron grillé,\nOignon rouge,\nFromage suisse,\nPain aux céréales'
    },
    {
        id: 5,
        name: 'Hamburger méditerranéen',
        image: '5.PNG',
        price: 15,
        description: 'Burger végétarien à base de pois chiches et d\'épices méditerranéennes,\nHoumous,\nConcombre en tranches,\nTomate séchée,\nFeta émiettée,\nPain ciabatta'
    },
    {
        id: 6,
        name: 'Hamburger Tex-Mex',
        image: '6.PNG',
        price: 20,
        description: 'Steak haché de bœuf épicé avec des assaisonnements Tex-Mex,\nGuacamole,\nPiment jalapeño en tranches,\nLaitue,\nFromage Monterey Jack,\nPain aux graines de maïs'
    },
    {
        id: 7,
        name: 'Hamburger au saumon grillé',
        image: '7.PNG',
        price: 15,
        description: 'Steak de saumon grillé,\nLaitue,\nTranches d\'avocat,\nSauce à l\'aneth,\nTomate,\nPain complet aux graines de sésame'
    },
    {
        id: 8,
        name: 'Hamburger hawaïen',
        image: '8.PNG',
        price: 20,
        description: 'Steak haché de bœuf,\nAnanas grillé,\nBacon,\nSauce teriyaki,\nLaitue,\nPain à burger traditionnel'
    },
    {
        id: 9,
        name: 'Hamburger de dinde',
        image: '9.PNG',
        price: 20,
        description: 'Steak haché de dinde,\nSauce au miel et à la moutarde,\nLaitue,\nOignon rouge,\nTomate,\nPain complet aux graines de pavot'
    },
    
];

let listCards  = [];
function showDetail(){
    let detail = document.querySelector('.detail');
    let listProduct = document.querySelector('.listProduct');
    let productId =  new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.find(product => product.id == productId);

    if(!thisProduct){
        window.location.href = "products.jsp"; // Rediriger vers la page des produits si le produit n'est pas trouvé
    }

    detail.querySelector('.image img').src = `image/${thisProduct.image}`;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.price').innerText = '$' + thisProduct.price;
    detail.querySelector('.description').innerText = thisProduct.description;

    products.filter(product => product.id != productId).forEach(product => {
        let newProduct = document.createElement('a');
        newProduct.href = `detail.html?id=${product.id}`;
        newProduct.classList.add('item');
        newProduct.innerHTML = 
            `<img src="image/${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>`;
        listProduct.appendChild(newProduct);
    });
}

// Appeler la fonction showDetail une fois que la page est chargée
document.addEventListener("DOMContentLoaded", function() {
    showDetail();
});
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});


function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>`;
        list.appendChild(newDiv);
    });
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

// Sélectionnez le bouton "Add To Cart" sur la page de détails et ajoutez un gestionnaire d'événements de clic
document.querySelector('.detail .buttons button').addEventListener('click', () => {
    let productId = new URLSearchParams(window.location.search).get('id');
    addToCart(productId); // Appeler la fonction d'ajout au panier lorsque le bouton est cliqué
});

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
    });
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

// Fonction pour gérer l'ajout d'un produit au panier depuis la page de détails

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