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
