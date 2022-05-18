//===== showing cart-info =====
const cartIcon = $("div .cart-icon");
const cart = $("#cart");
console.log(cart);

cartIcon.on("click", () => {
  cart.toggleClass("show-cart");
});
//===== end of showing cart-info =====

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

// ===== getting price from item =====
const priceItem = document.querySelector(".discount-price h1");
let priceItemStr = priceItem.innerHTML;
let dollarSign = /^\$/; // look for the dollar sign at the beginning
let priceItemNum = priceItemStr.replace(dollarSign, "");
let floatPriceItem = parseFloat(priceItemNum);
floatPriceItem = floatPriceItem.toFixed(2);
// ===== end of getting price from item =====

//===== add to car =====
const addToCarBtn = $(".add-button button");
let prevAdded = false;

addToCarBtn.on("click", () => {
  if (prevAdded == false) {
    let totalPrice = floatPriceItem * numCounter;
    totalPrice = totalPrice.toFixed(2);

    const cartEmptyElement = document.querySelector("div .items-cart");
    const newItem = document.createElement("div");
    newItem.classList.add("cart-container");
    newItem.innerHTML = `
    <div class='items-container'>
      <div class='img-item'>
        <img src='images\\image-product-1-thumbnail.jpg' alt='' />
      </div>
      <div class='info-item'>
        <p>Autumn Limited Edition...</p>
        <p>${floatPriceItem} x ${numCounter} <span>$${totalPrice}</span></p>
      </div>
      <div class='delete-icon'>
        <img src='images\\icon-delete.svg' alt='' />
      </div>
    </div>
    <div class='button-checkout'>
      <button><p>Checkout</p></button>
    </div>
    `;
    cartEmptyElement.replaceWith(newItem);
    prevAdded = true;

    // add a notification to cart icon
    const cartDiv = document.querySelector("div .cart-icon");
    const cartNotification = document.createElement("div");
    cartNotification.classList.add("cart-counter-items");
    cartNotification.innerHTML = `<p>${numCounter}</p>`;
    cartDiv.prepend(cartNotification);

    // call to delete item if delete-icon is pressed
    const removeFromCart = $("div .delete-icon");
    itemDeleted(removeFromCart);
  }
});
//===== end of add to car =====

//===== remove from car =====
itemDeleted = (removeFromCart) => {
  removeFromCart.on("click", () => {
    const cartItems = document.querySelector("div .cart-container");
    const cartEmpty = document.createElement("div");
    cartEmpty.classList.add("items-cart");
    cartEmpty.innerHTML = "<p>Your cart is empty.</p>";
    cartItems.replaceWith(cartEmpty);
    prevAdded = false;

    // remove notification from cart icon
    const cartDiv = document.querySelector("div .cart-icon");
    cartDiv.removeChild(cartDiv.firstElementChild);
  });
};
//===== end of remove from car =====
