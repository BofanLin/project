$(function () {
  $(".toggle").click(function () {
    $(this).parent().parent().parent().parent().find(".tips").toggle(500);
    if ($(this).attr("data-state") === "up") {
      $(this).attr("data-state", "down");
      $(this).attr("src", "images/icons/jiantouxia.png");
    } else {
      $(this).attr("data-state", "up");
      $(this).attr("src", "images/icons/jiantoushang.png");
    }
  });
});
