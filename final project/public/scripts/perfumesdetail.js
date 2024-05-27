$(document).ready(function () {
  function updateCartUI(cart) {
    var cartItemsHtml = cart
      .map(
        (item) => `
        <li class="cart-item" data-id="${item.id}" style="border-bottom: 1px solid #ccc; padding: 10px;">
          <p>Name: ${item.name}</p>
          <p>Price: Rs. ${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
          <button class="delete-item" data-id="${item.id}" style="background-color: red; color: white; border: none; padding: 5px 10px; cursor: pointer;">Delete</button>
        </li>
      `
      )
      .join("");

    $("#cart-items").html(cartItemsHtml);

    // Attach event listener for delete buttons
    $(".delete-item").click(function () {
      var perfumeId = $(this).data("id");
      var cart = getCart();

      // Remove the item from the cart
      cart = cart.filter((item) => item.id !== perfumeId);

      // Save the updated cart to cookies
      saveCart(cart);

      // Update the cart items list in the UI
      updateCartUI(cart);
    });
  }

  function getCart() {
    return JSON.parse(Cookies.get("cart") || "[]");
  }

  function saveCart(cart) {
    Cookies.set("cart", JSON.stringify(cart), { expires: 7 });
  }

  $(".add-to-cart").on("click", function () {
    // Access data attributes
    var perfumeId = $(this).data("id");
    var perfumeName = $(this).data("name");
    var perfumePrice = parseInt($(this).data("price").replace(/[^\d]/g, ""));
    var quantity = parseInt(
      $(this).siblings(".input-group").find(".quantity-input").val()
    );
    console.log(quantity);

    var totalPrice = perfumePrice * quantity;

    var cartItem = {
      id: perfumeId,
      name: perfumeName,
      price: totalPrice, // Store the total price
      quantity: quantity,
    };

    // Retrieve existing cart from cookies or initialize as an empty array
    var cart = getCart();

    // Check if the item is already in the cart
    var existingItem = cart.find((item) => item.id === perfumeId);
    if (existingItem) {
      // Update the quantity and price if the item is already in the cart
      existingItem.quantity += quantity;
      existingItem.price += totalPrice;
    } else {
      // Add new item to the cart
      cart.push(cartItem);
    }

    // Save the updated cart to cookies
    saveCart(cart);

    // Update the cart items list in the UI
    updateCartUI(cart);

    // Optionally, you can show the sidebar if it's hidden
    openSidebar(); // If you have a function to open the sidebar
  });

  // Initial cart display
  var initialCart = getCart();
  updateCartUI(initialCart);
});
