$(document).ready(function () {
  $(".btn").click(function () {
    var email = $("#email");
    var password = $("#password");
    var message = $("#message");
    var city = $("#city");
    if (email.val() == "") {
      email.addClass("error-border");
    }
    if (password.val() == "") {
      password.addClass("error-border");
    }
    if (message.val() == "") {
      message.addClass("error-border");
    }
    if (city.val() == "") {
      city.addClass("error-border");
    }
  });
});
