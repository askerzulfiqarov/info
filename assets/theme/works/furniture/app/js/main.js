$(function () {

  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close')
  });
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close')
  });




  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  $('.contact__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 10
  });



  $('.article-slider__box').slick({
    prevArrow: '<button type="button" class="article-slider__back"><img src="images/icon/arrow-back.svg" alt="arrow-back"></button>',
    nextArrow: '<button type="button" class="article-slider__next"><img src="images/icon/arrow-next.svg" alt="arrow-back"></button>',
  });



  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living'
    }
  });
})