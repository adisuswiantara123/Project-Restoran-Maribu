//toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//pas hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar and menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');


document.addEventListener('click', function(e){
if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
  navbarNav.classList.remove('active');
}

})

// JavaScript for the Pop-up 

  function openPopup() {
    const popupOverlay = document.getElementById("popup-overlay");
    popupOverlay.style.display = "flex";
  }
  
  document.getElementById("pesan-sekarang").addEventListener("click", function(event) {
    event.preventDefault();
    openPopup();
  });
  

  function closePopup() {
    const popupOverlay = document.getElementById("popup-overlay");
    popupOverlay.style.display = "none";
    adjustTextColor();
  }

  function calculateTotal() {
    const menuSelect = document.getElementById("menu-select");
    const quantityInput = document.getElementById("quantity");
    const totalPriceElement = document.getElementById("total-price");

    const menu = menuSelect.value;
    const quantity = parseInt(quantityInput.value);
    const price = getMenuPrice(menu);

    const totalPrice = price * quantity;
    totalPriceElement.textContent = "Total Harga: Rp " + totalPrice.toLocaleString();
    adjustTextColor();
  }

  function adjustTextColor() {
    const popup = document.querySelector(".popup");
    const backgroundColor = window.getComputedStyle(popup).getPropertyValue("background-color");
    const totalPriceElement = document.getElementById("total-price");
  
    // Mendapatkan nilai RGB dari warna latar belakang
    const rgb = backgroundColor.match(/\d+/g);
    const r = parseInt(rgb[0]);
    const g = parseInt(rgb[1]);
    const b = parseInt(rgb[2]);
  
    // Menghitung kecerahan warna latar belakang
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
    // Mengatur warna teks berdasarkan kecerahan latar belakang
    if (brightness > 125) {
      totalPriceElement.style.color = "#000000"; // Jika latar belakang cerah, ubah warna teks menjadi hitam
    } else {
      totalPriceElement.style.color = "#ffffff"; // Jika latar belakang gelap, ubah warna teks menjadi putih
    }
  }



  

  function getMenuPrice(menu) {
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
  }
