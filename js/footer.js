$(function () {
  $(document).scroll(function () {
    if ($(document).scrollTop() + window.innerHeight >= $(document).height()) {
      $(".footer-wrap").show(300);
    } else {
      $(".footer-wrap").hide(300);
    }
  });

  console.log($(document).height());
});
