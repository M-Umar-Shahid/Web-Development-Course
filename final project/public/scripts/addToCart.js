$(document).ready(function () {
  const quantityInput = $(".quantity-input");
  const decreaseButton = $("[data-action='decrease']");
  const increaseButton = $("[data-action='increase']");
  const priceElement = $("#price");

  const originalPrice = parseInt(priceElement.text().replace(/[^\d]/g, "")); // Extract numeric value from price text

  function updatePrice() {
    const quantity = parseInt(quantityInput.val());
    const newPrice = originalPrice * quantity;
    priceElement.text(`Rs. ${newPrice.toLocaleString()}`);
  }

  // Remove any existing event listeners before adding new ones
  decreaseButton.off("click");
  increaseButton.off("click");
  quantityInput.off("input");

  decreaseButton.click(function () {
    if (parseInt(quantityInput.val()) > 1) {
      quantityInput.val(parseInt(quantityInput.val()) - 1);
      console.log(parseInt(quantityInput.val()));
      updatePrice();
    }
  });

  increaseButton.click(function () {
    quantityInput.val(parseInt(quantityInput.val()) + 1);
    console.log(quantityInput.val(parseInt(quantityInput.val())));
    updatePrice();
  });

  quantityInput.on("input", function () {
    const quantity = parseInt(quantityInput.val());
    if (quantity > 0) {
      updatePrice();
    } else {
      quantityInput.val(1);
      updatePrice();
    }
  });
});
