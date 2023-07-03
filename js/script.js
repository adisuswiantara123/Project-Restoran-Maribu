//toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//pas hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar and menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});


function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
};

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
};

function addOrder() {
  var menuSelect = document.getElementById("menu-select");
  var quantityInput = document.getElementById("quantity");

  var menu = menuSelect.value;
  var quantity = parseInt(quantityInput.value);

  if (menu === "" || quantity <= 0) {
    return;
  }

  var orderList = document.getElementById("order-list");
  var orderItem = document.createElement("li");
  orderItem.textContent = menu + " - Jumlah: " + quantity;
  orderList.appendChild(orderItem);

  // Reset nilai input
  menuSelect.value = "";
  quantityInput.value = 1;
};

function calculateTotal() {
  var orderList = document.getElementById("order-list");
  var items = orderList.getElementsByTagName("li");

  var totalPrice = 0;
  for (var i = 0; i < items.length; i++) {
    var item = items[i].textContent;
    var quantity = parseInt(item.split("Jumlah: ")[1]);
    var price = getPriceByMenu(item.split(" - Jumlah:")[0]);
    totalPrice += price * quantity;
  }

  var totalElement = document.getElementById("total-price");
  totalElement.textContent = "Total Harga: " + " Rp " + totalPrice;
};

function getPriceByMenu(menu) {
  // Ubah harga sesuai dengan menu yang dipilih
  switch (menu) {
    case "Nasi Goreng":
      return 23000;
    case "Beef Steak":
      return 31000;
    case "Rawon":
      return 15000;
    case "Salad":
      return 26000;
    case "Soto":
      return 17000;
    case "Gado-gado":
      return 18000;
    case "Sate Ayam":
      return 25000;
    default:
      return 0;
  }
};






