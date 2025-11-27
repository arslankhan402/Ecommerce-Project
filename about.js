let cart = [];
let cartList = document.getElementById("cartItems");
let cartTotal = document.getElementById("cartTotal");

document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", function() {

        let name = this.getAttribute("data-name");
        let price = parseFloat(this.getAttribute("data-price"));
        let img = this.getAttribute("data-img");

       
        let existing = cart.find(item => item.name === name);

        if (existing) {
            existing.qty++;
        } else {
            cart.push({
                name,
                price,
                img,
                qty: 1
            });
        }

        renderCart();
    });
});

function renderCart() {
    cartList.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        cartList.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">

                <div class="d-flex align-items-center">
                    <img src="${item.img}" width="50" class="me-2 rounded">
                    <div>
                        <h6 class="mb-0">${item.name}</h6>
                        <small>$${item.price}</small>
                    </div>
                </div>

                <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-sm btn-outline-dark" onclick="decreaseQty(${index})">-</button>
                    <span>${item.qty}</span>
                    <button class="btn btn-sm btn-outline-dark" onclick="increaseQty(${index})">+</button>

                    <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>

            </li>
        `;
    });

    cartTotal.innerText = "$" + total.toFixed(2);
}

function increaseQty(i) {
    cart[i].qty++;
    renderCart();
}

function decreaseQty(i) {
    if (cart[i].qty > 1) {
        cart[i].qty--;
    } else {
        cart.splice(i, 1);
    }
    renderCart();
}

function removeItem(i) {
    cart.splice(i, 1);
    renderCart();
}



//
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
let cartItemsContainer = document.getElementById("cartItems");
let cartTotalAmount = document.getElementById("cartTotal");


renderCart();

document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", function() {
        let name = this.getAttribute("data-name");
        let price = parseFloat(this.getAttribute("data-price"));
        let img = this.getAttribute("data-img");

        let existing = shoppingCart.find(item => item.name === name);

        if (existing) {
            existing.qty++;
        } else {
            shoppingCart.push({ name, price, img, qty: 1 });
        }

        saveAndRender();
    });
});

function saveAndRender() {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    renderCart();
}

function renderCart() {
    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;
    let totalItems = 0;

    shoppingCart.forEach((item, index) => {
        totalPrice += item.price * item.qty;
        totalItems += item.qty;

        cartItemsContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <img src="${item.img}" width="50" class="me-2 rounded">
                    <div>
                        <h6 class="mb-0">${item.name}</h6>
                        <small>$${item.price}</small>
                    </div>
                </div>

                <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-sm btn-outline-dark" onclick="decreaseQty(${index})">-</button>
                    <span>${item.qty}</span>
                    <button class="btn btn-sm btn-outline-dark" onclick="increaseQty(${index})">+</button>
                    <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </li>
        `;
    });

    cartTotalAmount.innerText = "$" + totalPrice.toFixed(2);
    document.getElementById("cart-count").innerText = totalItems;
}

function increaseQty(i) {
    shoppingCart[i].qty++;
    saveAndRender();
}

function decreaseQty(i) {
    if (shoppingCart[i].qty > 1) {
        shoppingCart[i].qty--;
    } else {
        shoppingCart.splice(i, 1);
    }
    saveAndRender();
}

function removeItem(i) {
    shoppingCart.splice(i, 1);
    saveAndRender();
}