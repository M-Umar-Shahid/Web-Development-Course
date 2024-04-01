$(document).ready(function () {
  doBindings();
});
function doBindings() {
  var image = $("#logo");
  var span = $("#src");
  $("img").mouseover(function () {
    var srch = $(this).attr("src");
    span.text(srch);
  });
}
