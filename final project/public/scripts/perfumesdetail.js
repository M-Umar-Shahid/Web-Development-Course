$(document).ready(function () {
  const quantityInput = $(".quantity-input");
  const decreaseButton = $("[data-action='decrease']");
  const increaseButton = $("[data-action='increase']");
  const addToCartButton = $(".add-to-cart");

  decreaseButton.click(function () {
    if (parseInt(quantityInput.val()) > 1) {
      quantityInput.val(parseInt(quantityInput.val()) - 1);
    }
  });

  increaseButton.click(function () {
    quantityInput.val(parseInt(quantityInput.val()) + 1);
  });

  addToCartButton.click(function () {
    const cartItems = $("#cart-items");
    console.log(cartItems);
    const item = $("<li>").text(`${name} - ${price}`);
    cartItems.append(item);
  });
});
