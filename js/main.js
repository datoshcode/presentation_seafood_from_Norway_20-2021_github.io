$(function(){

  // Header slider
  $('.header-slider').slick({
    dots: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev">  <img src="images/icons/header-prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next">  <img src="images/icons/header-next.svg"></button>',
    responsive: [
      {
        breakpoint: 371,
        settings: {
          arrows: false,
          autoplay: true,
          dots: false
        }
      }
    ]
  });

  // Product slider
  $('.product__name').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    asNavFor: '.product__content',
    vertical: true,
    centerMode: true,
    prevArrow: '<button type="button" class="product-prev">  <img src="images/icons/product-prev.svg"></button>',
    nextArrow: '<button type="button" class="product-next">  <img src="images/icons/product-next.svg"></button>',
    responsive: [
      {
        breakpoint: 891,
        settings: {
          vertical: false,
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 2,
          vertical: false,
          arrows: false,
          centerMode: false,
          dots: true
        }
      },
      {
        breakpoint: 461,
        settings: {
          slidesToShow: 1,  
          vertical: false,
          arrows: false,
          dots: true,
          autoplay: true 
        }
      }
    ]
  });
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true,
    arrows: false
  });

  // Кнопка меню мобильной версии
  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
});