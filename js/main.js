var product = [
  {
    name: "Knitted Stocking with Reindeer Design",
    price: 11,
    image: "./images/image1.jpg",
    des: "Approx. 55cm long knitted stocking with reindeer design and pom poms on red ribbon hanging loop.",
  },
  {
    name: "Deluxe Santa Sack",
    price: 8,
    image: "./images/image2.jpg",
    des: "Approximately 86cm (34 inc) tall x 57cm (22½ inch) wide with fuffy white cuff and red drawstring with pompom.",
  },
  {
    name: "Christmas Tree Hat",
    price: 5,
    image: "./images/image3.jpg",
    des: "40cm (15¾ inch)  tall flashing Christmas tree party hat.  Fits most adult sizes",
  },
  {
    name: "Iridescent White Treetop Star",
    price: 7,
    image: "./images/image4.jpg",
    des: "17cm star covered with iridescent sequins and glitter on coiled wire base.  Total height approximately 23cm tall",
  },
  {
    name: "Fraser Fir Christmas Tree",
    price: 175,
    image: "./images/image5.jpg",
    des: "Top quality, authentic artificial Christmas tree. Hinged branches and folding steel stand. Total height approximately 150cm (5ft.).",
  },
  {
    name: "Snow Spray",
    price: 2.5,
    image: "./images/image6.jpg",
    des: "Water-based, 150 ml aerosol made in Belgium. Non flammable.",
  },
  {
    name: "Deluxe Santa Suit",
    price: 40,
    image: "./images/image7.jpg",
    des: "Deluxe red plush suit includes jacket, trousers, hat, belt and beard. One (generous) size only",
  },
  {
    name: "Frosty Snow Flake",
    price: 4,
    image: "./images/image8.jpg",
    des: "Approximately 33 x 20cm bag of soft fine snow. Use the flakes to create your own snow scenes.",
  },
  {
    name: "Silver Tinsel",
    price: 3.75,
    image: "./images/image9.jpg",
    des: "Add sparkle to your Christmas tree, door, fireplace, walls or stairs with this bright metallic (fine & chunky) British made silver tinsel. Flame retardant. 2 metres long by approximately 10cm wide.",
  },
  {
    name: "Red Baubles",
    price: 4.5,
    image: "./images/image11.jpg",
    des: "Tub of 24 shatterproof mini red Baubles. 3cm (1¼inch) diameter with gold hanging cord.  3 assorted styles in each pack.",
  },
  {
    name: "Silver Baubles",
    price: 4.5,
    image: "./images/image12.jpg",
    des: "Pack of 10 silver shatterproof baubles with silver caps and loose silver thread. Approximately 60mm diameter. Each pack contains an assortment of balls - shiny, matt with glitter swirls, pearl and glitter",
  },
  {
    name: "Gold Glass Baubles",
    price: 4.5,
    image: "./images/image13.jpg",
    des: "Pack of 12 gold glass baubles consisting of 4 shiny, 4 matt and 4 glitter baubles. 4cm diameter with gold metal cap.",
  },
  {
    name: "Merry Christmas Balloons",
    price: 1.25,
    image: "./images/image14.jpg",
    des: 'Pack of 12 traditional red and green party balloons printed with the text "Merry Christmas',
  },
  {
    name: "Heart Shaped Balloons",
    price: 1,
    image: "./images/image15.jpg",
    des: "Handy pack of 20 heart-shaped latex balloons.  Approximately 20cm (8 inches) tall when inflated.",
  },
  {
    name: "Christmas Table Topper",
    price: 12,
    image: "./images/image16.jpg",
    des: "85cm x 85cm (33in. x 33in.) square embroidered polyester table topper.  Red tablecloth with Christmas tree motif and scalloped edge.",
  },
  {
    name: "Merry Christmas Garland",
    price: 8,
    image: "./images/image17.jpg",
    des: 'Approximately 1.75 metres (69 inches) long garland featuring individual felt letters suspended on red ribbon spelling "Merry Christmas". Each letter is 8.5cm (3¼ inch) tall. Use as a room decoration or as a garland on a Christmas tree.',
  },
  {
    name: "Large Merry Christmas Plaque",
    price: 15,
    image: "./images/image18.jpg",
    des: "Wooden plaque, 70cm wide x 30cm tall,with hanging points on reverse.",
  },
  {
    name: "Turkey Hat",
    price: 5,
    image: "./images/image10.jpg",
    des: "Bring some fun to your dinner table with this soft turkey shape Christmas hat.  Sized to fit most adults, it features soft fabric legs topped with mini chef hats.",
  },
  {
    name: "Antlers",
    price: 2.75,
    image: "./images/image19.jpg",
    des: "Fabric stiffened brown reindeer antlers on a headband trimmed with jingle bells. Soft felt ears and holly sprigs provide the finishing festive touch. Enjoy at your Christmas party or gathering. Suitable for a child or small adult.",
  },
  {
    name: "Foil Star",
    price: 1.75,
    image: "./images/image20.jpg",
    des: "Decorate your Christmas party or wedding reception with this traditional fold-out hanging decoration in silver and white foil.  Approximately 40cm (15¾in.) on vinyl hanging cord.  Supplied flat with simple pull-out assembly.",
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

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

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
      <div id="giftOuter" class="gift-outer">
        
      </div>
    </div>
`;

function renderGiftShop() {
  mainContainer.innerHTML = null;
  mainContainer.insertAdjacentHTML("beforeend", shopHTLM);
}
document.getElementById("shopNav").addEventListener("click", async function () {
  await renderGiftShop();
  for (i in product) {
    document.getElementById("giftOuter").insertAdjacentHTML(
      "beforeend",
      `
    <div class="gift-card" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <img src="${product[i].image}" alt="" class="gift-img">
            <h6 class="gift-name">${product[i].name}</h6>
            <p class="gift-price">${product[i].price}$</p>
            <div class="instock-outer">
              <span class="stock-icon"></span>
              <span>In stock</span>
            </div>
          </div>
    `
    );
  }
});
document.getElementById("homeNav").addEventListener("click", function () {
  renderHome();
});
function renderHome() {
  mainContainer.innerHTML = "";
  mainContainer.insertAdjacentHTML("beforeend", homeHTML);
}
window.onload = () => {
  renderHome()
}

{/* <div class="shop-outer">
        <h1>It's Shopping Time!</h1>
        <div class="gift-search">
          <input type="text" placeholder="Search here...">
        </div>
        <div class="gift-outer">
          <div class="gift-card" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
      </div> */}