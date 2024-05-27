$(document).ready(function () {
  // Check if the session token exists
  if (!Cookies.get("token")) {
    // Redirect to login page if the token is not found
    window.location.href = "login"; // Adjust the path to your login page
  }
});
