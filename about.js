document.addEventListener("DOMContentLoaded", function (){

    let cartCount = localStorage.getItem("cartCount");

    if (cartCount === null) {
        cartCount =0;
    } else {
        cartCount = Number(cartCount);
    }
    document.getElementById("cart-count").innerText = cartCount;
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            event.preventDefault();

            cartCount++;
            document.getElementById("cart-count").innerText = cartCount;

            localStorage.setItem("cartCount", cartCount);
        })
    })
})


let cart = [
  { name: "Brightening Body Lotion", price: 1200, qty: 1 },
  { name: "Ultra Smooth Lipstick", price: 800, qty: 2 }
];

function renderCart() {
  let subtotal = 0;
  cart.forEach((item, index) => {
    subtotal += item.price * item.qty;
    document.getElementById(`qty-${index}`).innerText = item.qty;
  });
  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("total").innerText = subtotal;  
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}
renderCart();
