// Function to open sidebar
function openSidebar() {
  $("#sidebar").css("width", "250px"); // Adjust width as needed
}

// Function to close sidebar
function closeSidebar() {
  $("#sidebar").css("width", "0");
}

// Toggle sidebar when clicking cart icon
$(".cart-icon").click(function () {
  openSidebar();
});
