$(function () {
  "use strict";
  $(".nav-toggler").click(function () {
    $("body").toggleClass("show-sidebar"), $(".nav-toggler i").toggleClass("ti-menu"), $(".nav-toggler i").addClass("ti-close");
    $("body").hasClass("show-sidebar") ? $(".navbar-brand span").show() : $(".navbar-brand span").hide();
  }),
  $(function () {
    $("#sidebarnav").AdminMenu();
  })
});
