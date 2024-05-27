$(document).ready(function () {
  const header = $("header");

  $(window).scroll(function () {
    header.toggleClass("sticky", $(this).scrollTop() > 0);
  });
});
