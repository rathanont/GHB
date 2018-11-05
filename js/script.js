$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  $('[data-toggle="popover"]').popover();
  $('.list-share li a').popover({
    placement: 'top'
  });
});