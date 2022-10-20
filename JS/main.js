const responsive = {
  0: {
    items: 1,
  },

  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
}

$(document).ready(function () {
  $nav = $('.nav')
  $toggleCollapse = $('.toggle-collapse')

  //  click event on toggle-menu
  $toggleCollapse.click(function () {
    $nav.toggleClass('collapse')
  })

  // Owl carousel For Blog
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoTimeout: 3000,
    dots: false,
    nav: true,
    navText: [
      $('.owl-navigation .owl-nav-prev'),
      $('.owl-navigation .owl-nav-next'),
    ],
    responsive: responsive,
  })

  // Click To Scroll Up
  $('.auto-scroll-up span').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000,
    )
  })

  // AOS instance
  AOS.init();
})
