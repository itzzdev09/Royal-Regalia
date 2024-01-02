const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Burberry",
    price: 49999,
  },
  {
    id: 2,
    title: "Versace",
    price: 79999,
    img: "./img/versace2.png"
  },
  {
    id: 3,
    title: "Gucci",
    price: 109999,
    img: "./img/gucci.png"
  },
  {
    id: 4,
    title: "Louis Vuitton",
    price: 69999,
    img: "./img/LV.png"
  },
  {
    id: 5,
    title: "Dolce n Gabanna",
    price: 55999,
    img: "./img/dolce1.png"
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs. " + choosenProduct.price;
    currentProductImg.src = choosenProduct.img;

  });
});


currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});