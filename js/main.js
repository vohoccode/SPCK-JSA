var product = [
  {
    name: "Christmas Wreath Decoration",
    price: 10,
    image: "./images/gift1.webp",
    type: "Decoration",
    color: "As the picture showed",
    material: "MDF and plywood",
  },
  {
    name: "Illuminated Christmas Bauble",
    price: 2,
    image: "./image/DEC003G.jpg",
    type: "Decoration",
    color: "Red, Green, Yellow",
    material: "20cm Illuminated Christmas Bauble",
  },
  {
    name: "Wooden Christmas Decoration Tabletop Ornament",
    price: 12,
    image: "./image/Wooden Decoration.webp",
    type: "Decoration",
    color: "As the picture showed",
    material: "MDF and plywood",
  },
  {
    name: "LED Christmas Tree",
    price: 60,
    image: "./image/Christmas tree.png",
    type: "Decoration",
    color: "Green",
    material: "PVC+PE",
  },
  {
    name: "Santa Claus Christmas Doll",
    price: 5,
    image: "./image/Santa toy.jpg",
    type: "Decoration",
    color: "As the picture showed",
    material: "Cloth",
  },
  {
    name: "Home Slippers Christmas",
    price: 15,
    image: "./image/Home Slippers Christmas.jpg",
    type: "Warm Slippers",
    color: "Red and Green",
    material: "Plastic cloth, soft velvet",
  },
  {
    name: "Christmas Party Glasses",
    price: 1.5,
    image: "./image/Christmas Party Glasses.jpg",
    type: "Glasses",
    color: "Red",
    material: "Cloth and Plastic",
  },
  {
    name: "Christmas Decoration Led String Lights",
    price: 15,
    image: "./image/Christmas Decoration Led String Lights.jpg",
    type: "Christmast Ornament",
    color: "Orange",
    material: "other",
  },
  {
    name: "Christmas Gingerbread House Arch",
    price: 15,
    image: "./image/Christmas Gingerbread House Arch.jpg",
    type: "Inflatable Christmas decoration",
    color: "Brown",
    material: "	Polyester 190 T",
  },
];

var countDownDate = new Date("Dec 25, 2023 00:00:00").getTime();
var countDown = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds

  if (distance < 0) {
    clearInterval();
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }
}, 1000);

// Render Gift Shop
var mainContainer = document.getElementById("mainContainer");
var homeHTML = `
<div class="home-outer">
<div class="slide-outer">
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./images/banner1.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="slide-title">Christmas Event for The Whole Family</h5>
          <p class="slide-subtitle">Get unforgettable impressions from this year. Gifts Decorations. Foods &
            Drinks.
            Entertaining Ideas & More</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./images/banner2.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="slide-title">Christmas Event for The Whole Family</h5>
          <p class="slide-subtitle">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./images/banner3.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="slide-title">Christmas Event for The Whole Family</h5>
          <p class="slide-subtitle">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="ticket-outer">
  <div class="ticket-header">
    <p>Book Your Tickets</p>
  </div>
  <div class="ticket-input">
    <div class="ticket-input_item ticket-name_outer">
      <label>Full Name</label>
      <input type="text" placeholder="Enter your name">
    </div>
    <div class="ticket-input_item ticket-phone_outer">
      <label>Phone Number</label>
      <input type="text" placeholder="Your phone number">
    </div>
    <div class="ticket-input_item ticket-email_outer">
      <label>Email Address</label>
      <input type="text" placeholder="Your email address">
    </div>
    <button class="ticket-btn">Register Now!</button>
  </div>
  <div class="ticket-countdown">
    <div class="countdown-title">
      <h5>We Are Waiting For... Precious Time 🎅</h5>
    </div>
    <div class="countdown-time">
      <h6 class="countdown-days"><span id="days"></span> Days</h6>
      <h6 class="countdown-hours"><span id="hours"></span> Hours</h6>
      <h6 class="countdown-minutes"><span id="minutes"></span> Minutes</h6>
      <h6 class="countdown-seconds"><span id="seconds"></span> Seconds</h6>
    </div>
    <div class="countdown-image">
      <img src="./images/countdowntree.png" alt="">
    </div>
  </div>
</div>
</div>
<div class="home-space"></div>
`;
var shopHTLM = `
<div class="shop-outer">
      <h1>It's Shopping Time!</h1>
      <div class="gift-search">
        <input type="text" placeholder="Search here...">
      </div>
      <div class="gift-outer">
        <div class="gift-card">
          <img src="https://www.thechristmasshop.co.uk/storage/images/image?remote=https%3A%2F%2Fwww.thechristmasshop.co.uk%2FWebRoot%2FepagesUK%2FShops%2FBT4873%2F5501%2F744E%2F9B1A%2FC79F%2F5992%2F0A0C%2F05E7%2F2250%2FST33.jpg&shop=bt4873&width=720&height=2560" alt="" class="gift-img">
          <h6 class="gift-name">Keep Calm Stocking</h6>
          <p class="gift-price">3.99$</p>
          <div class="instock-outer">
            <span class="stock-icon"></span>
            <span>In stock</span>
          </div>
        </div>
        <div class="gift-card">
          <img src="https://www.thechristmasshop.co.uk/storage/images/image?remote=https%3A%2F%2Fwww.thechristmasshop.co.uk%2FWebRoot%2FepagesUK%2FShops%2FBT4873%2F5501%2F744E%2F9B1A%2FC79F%2F5992%2F0A0C%2F05E7%2F2250%2FST33.jpg&shop=bt4873&width=720&height=2560" alt="" class="gift-img">
          <h6 class="gift-name">Keep Calm Stocking</h6>
          <p class="gift-price">3.99$</p>
          <div class="instock-outer">
            <span class="stock-icon"></span>
            <span>In stock</span>
          </div>
        </div>
        <div class="gift-card">
          <img src="https://www.thechristmasshop.co.uk/storage/images/image?remote=https%3A%2F%2Fwww.thechristmasshop.co.uk%2FWebRoot%2FepagesUK%2FShops%2FBT4873%2F5501%2F744E%2F9B1A%2FC79F%2F5992%2F0A0C%2F05E7%2F2250%2FST33.jpg&shop=bt4873&width=720&height=2560" alt="" class="gift-img">
          <h6 class="gift-name">Keep Calm Stocking</h6>
          <p class="gift-price">3.99$</p>
          <div class="instock-outer">
            <span class="stock-icon"></span>
            <span>In stock</span>
          </div>
        </div>
        <div class="gift-card">
          <img src="https://www.thechristmasshop.co.uk/storage/images/image?remote=https%3A%2F%2Fwww.thechristmasshop.co.uk%2FWebRoot%2FepagesUK%2FShops%2FBT4873%2F5501%2F744E%2F9B1A%2FC79F%2F5992%2F0A0C%2F05E7%2F2250%2FST33.jpg&shop=bt4873&width=720&height=2560" alt="" class="gift-img">
          <h6 class="gift-name">Keep Calm Stocking</h6>
          <p class="gift-price">3.99$</p>
          <div class="instock-outer">
            <span class="stock-icon"></span>
            <span>In stock</span>
          </div>
        </div>
        <div class="gift-outer">
          <div class="gift-card">
            <img src="https://www.thechristmasshop.co.uk/storage/images/image?remote=https%3A%2F%2Fwww.thechristmasshop.co.uk%2FWebRoot%2FepagesUK%2FShops%2FBT4873%2F5501%2F744E%2F9B1A%2FC79F%2F5992%2F0A0C%2F05E7%2F2250%2FST33.jpg&shop=bt4873&width=720&height=2560" alt="" class="gift-img">
            <h6 class="gift-name">Keep Calm Stocking</h6>
            <p class="gift-price">3.99$</p>
            <div class="instock-outer">
              <span class="stock-icon"></span>
              <span>In stock</span>
            </div>
          </div>
          <div class="gift-card">
            <img src="https://www.thechristmasshop.co.uk/storage/images/image?remote=https%3A%2F%2Fwww.thechristmasshop.co.uk%2FWebRoot%2FepagesUK%2FShops%2FBT4873%2F5501%2F744E%2F9B1A%2FC79F%2F5992%2F0A0C%2F05E7%2F2250%2FST33.jpg&shop=bt4873&width=720&height=2560" alt="" class="gift-img">
            <h6 class="gift-name">Keep Calm Stocking</h6>
            <p class="gift-price">3.99$</p>
            <div class="instock-outer">
              <span class="stock-icon"></span>
              <span>In stock</span>
            </div>
          </div>
          <div class="gift-card">
            <img src="https://www.thechristmasshop.co.uk/storage/images/image?remote=https%3A%2F%2Fwww.thechristmasshop.co.uk%2FWebRoot%2FepagesUK%2FShops%2FBT4873%2F5501%2F744E%2F9B1A%2FC79F%2F5992%2F0A0C%2F05E7%2F2250%2FST33.jpg&shop=bt4873&width=720&height=2560" alt="" class="gift-img">
            <h6 class="gift-name">Keep Calm Stocking</h6>
            <p class="gift-price">3.99$</p>
            <div class="instock-outer">
              <span class="stock-icon"></span>
              <span>In stock</span>
            </div>
          </div>
          <div class="gift-card">
            <img src="https://www.thechristmasshop.co.uk/storage/images/image?remote=https%3A%2F%2Fwww.thechristmasshop.co.uk%2FWebRoot%2FepagesUK%2FShops%2FBT4873%2F5501%2F744E%2F9B1A%2FC79F%2F5992%2F0A0C%2F05E7%2F2250%2FST33.jpg&shop=bt4873&width=720&height=2560" alt="" class="gift-img">
            <h6 class="gift-name">Keep Calm Stocking</h6>
            <p class="gift-price">3.99$</p>
            <div class="instock-outer">
              <span class="stock-icon"></span>
              <span>In stock</span>
            </div>
          </div>
      </div>
    </div>
`;

function renderGiftShop() {
  mainContainer.innerHTML = null;
  mainContainer.insertAdjacentHTML("beforeend", shopHTLM);
}
document.getElementById("shopNav").addEventListener("click", function () {
  renderGiftShop();
});
document.getElementById("homeNav").addEventListener("click", function () {
  renderHome();
});
function renderHome() {
  mainContainer.innerHTML = "";
  mainContainer.insertAdjacentHTML("beforeend", homeHTML);
}
// window.onload = () => {
//   renderHome()
// }