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