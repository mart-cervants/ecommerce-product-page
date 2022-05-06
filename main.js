//===== showing cart-info =====
const cartIcon = $(".cart-icon img");
const cart = $("#cart");

cartIcon.on("click", () => {
  cart.toggleClass("show-cart");
});
//===== end of showing cart-info =====

//===== add items to cart =====

//===== end of add items to cart =====

//===== add items to counter =====
const plusIcon = $(".plus-icon h2");
const minusIcon = $(".minus-icon h2");
const totalCount = $(".total-selection h2");
let numCounter = 1;

plusIcon.on("click", () => {
  numCounter++;
  totalCount[0].childNodes[0].data = numCounter;
});

minusIcon.on("click", () => {
  if (numCounter > 1) {
    numCounter--;
    totalCount[0].childNodes[0].data = numCounter;
  }
});
//===== end of add items to counter =====

//===== add to car =====
const addToCarBtn = $(".add-button button");

addToCarBtn.on("click", () => {
  // first shows empty cart box
  // when click add to cart box element
});
//===== end of add to car =====
