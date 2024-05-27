$(document).ready(function () {
  window.openSidebar = function () {
    $("#sidebar").css("width", "250px"); // Adjust width as needed
    showCart();
  };

  window.closeSidebar = function () {
    $("#sidebar").css("width", "0");
  };

  // Toggle sidebar when clicking cart icon
  $(".cart-icon").click(function () {
    openSidebar();
  });

  function calculateGrandTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += parseFloat(cart[i].price);
    }
    return total;
  }

  function showCart() {
    var cart = JSON.parse(Cookies.get("cart") || "[]");
    var cartItemsHtml = cart
      .map(
        (item) => `
      <li class="cart-item" data-id="${item.id}">
        <p>Name: ${item.name}</p>
        <p>Price: Rs.${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <button class="delete-item" data-id="${item.id}" style="background-color: red; color: white; border: none; padding: 5px 10px; cursor: pointer;">Delete</button>
      </li>
    `
      )
      .join("");

    var grandTotal = calculateGrandTotal(cart);
    $("#grand-total").text(`Grand Total: Rs. ${parseInt(grandTotal)}`);

    $("#cart-items").html(cartItemsHtml);

    // Attach event listener for delete buttons
    $(".delete-item").click(function () {
      var perfumeId = $(this).data("id");
      var cart = JSON.parse(Cookies.get("cart") || "[]");

      // Remove the item from the cart
      cart = cart.filter((item) => item.id !== perfumeId);

      // Save the updated cart to cookies
      Cookies.set("cart", JSON.stringify(cart), { expires: 7 });

      // Update the cart items list in the UI
      showCart();
    });
  }
});
