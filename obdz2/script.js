const buyButtons = document.querySelectorAll(".buy-button");

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Товар додано до кошика.");
  });
});

//user
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    // Відправка даних на сервер
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "реєстраційний_сервер.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        message.innerHTML = xhr.responseText;
      }
    };
    xhr.send(new URLSearchParams(formData).toString());
  });
});


let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCartUI();
}

function updateCartUI() {
    let cartList = document.getElementById("cart-items");
    let total = document.getElementById("total-price");

    // Очищення корзини
    cartList.innerHTML = "";

    // Додавання товарів до корзини
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - $" + item.price;
        cartList.appendChild(li);
    });

    // Оновлення загальної суми
    total.textContent = "$" + totalPrice;
}
