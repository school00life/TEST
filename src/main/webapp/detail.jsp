<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" type ="x-icon" href ="logo.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>| Burger House</title>
    <link rel="stylesheet" href="style-detail.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>PRODUCT DETAIL</h1>
            <div class="shopping">
                <img src="image/shopping.svg">
                <span class="quantity">0</span>
            </div>
        </header>
        <div class="detail">
            <div class="image">
                <img src="">
            </div>
            <div class="content">
                <h1 class="name"></h1>
                <div class="price"></div>
                <div class="buttons">
                    <button>Check Out</button>
                    <button onclick="addToCard()">Add To Cart 
                        <span>
                            <svg class="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="description"></div>
            </div>
        </div>

        <div class="title">Similar product</div>
        <div class="listProduct"></div>
    </div>
    <!-- HTML pour la panier -->
    <div class="card">
        <h1>Card</h1>
        <ul class="listCard">
        </ul>
        <div class="checkOut">
            <div class="total">0</div>
            <div class="closeShopping">Close</div>
        </div>
    </div>
    <script src="app-detail.js"></script>
</body>
</html>
