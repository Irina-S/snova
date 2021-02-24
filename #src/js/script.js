$(document).ready(function () {

  //TODO: дописать смещение элементов при наведении мыши
  if($('.services-list').length > 0){
    $('.services-list').on('mousemove', function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      $('.violet-blur').css('transform', 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)');
      $('.orange-blur').css('transform', 'translate(' + x * 100 + 'px, ' + y * 100 + 'px)');
    });
  }

  function HeaderMargin() {
    var HeaderBlock = $('.header');
    var HeaderBlockHeight = $('.header').outerHeight();
    var HeaderHeight = $('.header').outerHeight();
    var Body = $('body');
    if ($(this).scrollTop() > HeaderHeight){
      Body.css('padding-top', 0);
      HeaderBlock.addClass('sticky');
    }
    else{
      Body.css('padding-top', 0);
      HeaderBlock.removeClass('sticky');
    }
  }

  HeaderMargin();

  $(window).scroll(function() {
    HeaderMargin();
  });

  if($('#main-slider').length > 0){
    $('#main-slider').slick({
      slidesToShow: 1,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite : true,
      slidesToScroll: 1,
      arrows: false,
      appendArrows: '.main-slider__nav',
      dots: true,
      swipe: true,
      touchMove: true,
      draggable: true,
      fade: false,
      focusOnSelect: true,
      pauseOnHover: false,
      variableWidth: false,
      centerMode: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            adaptiveHeight: true,
            variableWidth: false
          }
        }
      ]
    });
  }

  $('#adv-slider').slick({
    slidesToShow:3,
    slidesToScroll:1,
    dots:false,
    arrows:true,
    appendArrows:$('.adv-slider__nav'),
    prevArrow:`<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.96967 0.469727L0.439341 4.00006L3.96967 7.53039L5.03033 6.46973L3.31066 4.75006H24V3.25006H3.31066L5.03033 1.53039L3.96967 0.469727Z" fill="#DF444D"/>
    </svg></button>`,
    nextArrow:`<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0303 0.469727L23.5607 4.00006L20.0303 7.53039L18.9697 6.46973L20.6893 4.75006H0V3.25006H20.6893L18.9697 1.53039L20.0303 0.469727Z" fill="#DF444D"/>
    </svg></button>`,
    responsive:[
      {
        breakpoint: 1600,
        settings: {
          slidesToShow:2 
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow:1 
        }
      }
    ]
  });

  // ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ, КАТАЛОГА
  const mobileMenu = $('.main-nav');

  const mobileMenuBtn = $('.main-nav-btn');

  function clickDarkBodyHandler(event){
    const target = $(event.target);
    if(target.is('body.dark')){
      $('body.dark').off('click', clickDarkBodyHandler);
      $('.opened').removeClass('opened');
      $(document.body).removeClass('dark').removeClass('overflow-hid');
    }
  }

  // НАВИГАЦИЯ
  $(mobileMenuBtn).click(function () {
    $(mobileMenu).toggleClass('opened');
    $(document.body).toggleClass('dark').toggleClass('overflow-hid');

    if($(document.body).hasClass('dark')){
      $('body.dark').on('click', clickDarkBodyHandler);
    }
  });

  // НАВИГАЦИЯ ЗАКРЫТИЕ
  $('.main-nav .close-btn').click(function(){
    $('.main-nav').removeClass('opened');
    $(document.body).removeClass('dark').removeClass('overflow-hid');
  });

  // СМЕНА КАРТИНОК ПРИ НАВЕДЕНИИ НА ССЫЛКУ
  $('.services-list_item').on('mouseenter', function(){
    const leftImgId = $(this).data('leftImg');
    const rightImgId = $(this).data('rightImg');

    $('.img1-block img').removeClass('visible');
    $('.img2-block img').removeClass('visible');
    $(`#${leftImgId}`).addClass('visible');
    $(`#${rightImgId}`).addClass('visible');
  })
});
