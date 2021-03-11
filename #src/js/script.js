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

  $('#about-slider').slick({
    slidesToShow:3,
    slidesToScroll:1,
    dots:false,
    arrows:true,
    appendArrows:$('.about-slider__nav'),
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
  });

  // SELECT В ФИЛЬТРАХ
  $('.filter-select').niceSelect();

  // SELECT - СОРИТРОВКА
  $('.sort-select').niceSelect();

  // ПОЛЗУНОК В ФИЛЬТРАХ
  $( ".range" ).slider({
    range: true,
    min:0,
    max:5000,
    values:[500, 2000],
    slide: function( event, ui ) {
      setRangeValues();
    }
  });

  function setRangeValues(){
    // console.log($( ".range" ).slider( "values", 0 ));
    $('.range__from span').text(`${$( ".range" ).slider( "values", 0 )} Р`);
    $('.range__to span').text(`${$( ".range" ).slider( "values", 1 )} Р`);
    $('#price-from').val(`${$( ".range" ).slider( "values", 0 )}`);
    $('#price-to').val(`${$( ".range" ).slider( "values", 1 )}`);
  }

  setRangeValues();

  $('.filters__show-btn').on('click', function(){
    if ($(this).text()=='Показать фильтры'){
      $('.filters').fadeIn();
      $(this).text('Скрыть фильтры');
    }
    else{
      $('.filters').fadeOut();
      $(this).text('Показать фильтры');
    }
  });

  // СЛАЙДЕРЫ В КАРТОЧКЕ ТОВАРА

  $('.card-slider_big').slick({
    dots:false,
    arrows:false,
    slidesToShow:1,
    slidesToScroll:1,
    asNavFor:$('.card-slider_small'),
    infinite:true
  });
  
  $('.card-slider_small').slick({
    dots:false,
    arrows:true,
    slidesToShow:3,
    slidesToScroll:3,
    nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><img src="img/arrow-right.svg" alt=""></button>',
    prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><img src="img/arrow-left.svg" alt=""></button>',
    asNavFor:$('.card-slider_big'),
    focusOnSelect:true,
    infinite:true,
    // responsive: [
    //   {
    //     breakpoint: 991,
    //     settings: {
    //       slidesToShow:2
    //     }
    //   }
    // ]
  });

  $('[data-fancybox]').fancybox();

  //ПОИСК
  $('.search-block__btn').on('click', function(){
    $('.search-block').addClass('opened');
    $('.search-form').addClass('opened');
  });

  $('.search-form__close').on('click', function(){
    $('.search-block').removeClass('opened');
    $('.search-form').removeClass('opened');
  });

  // ЛИПКИЙ ASIDE В ОФОРМЛЕНИИ ЗАКАЗА
  const stickyOrderSummary = new Sticky('.order-summary', {
    stickyFor:1200,
    marginTop:70
  });


  // ВАЛИДАЦИЯ

  // ВАЛИДАЦИЯ ШАГ 1

  try{
    let phoneVal = '';
    if($('#phone').val() !== ''){
        phoneVal = $('#phone').val();
    }
    var cleave = new Cleave('#phone', {
    prefix: '+7',
    delimiters: [" (", ")", " ", "-", "-"],
    blocks: [2, 3, 0, 3, 2, 2],
    uppercase: true,
    noImmediatePrefix: true
    });
    
    if(phoneVal !== ''){
      $('#phone').val(phoneVal); 
    }

  } catch(e){}

  function isPhoneValid(val){
    const pattern = "^\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}$";
    const regex = new RegExp(pattern, "g");
    return regex.test(val);
  }

  $('.phone-field').change(function () {
    if(!isPhoneValid($(this).val())){
      $(this).siblings('.error-field').css('display', 'block');
      $(this).addClass('has-error');
    } else{
      $(this).siblings('.error-field').css('display', 'none');
      $(this).removeClass('has-error');
    }
  });

  $('.name-field').change(function (){
    if($(this).val()==''){
      $(this).siblings('.error-field').css('display', 'block');
      $(this).addClass('has-error');
    } else{
      $(this).siblings('.error-field').css('display', 'none');
      $(this).removeClass('has-error');
    }
  });

  function isStep1Success(){
    const phone = $('.phone-field');
    const name = $('.name-field');
    if(name.val().length !== 0 && isPhoneValid(phone.val()) && !phone.hasClass('has-error')){
      $('#order-step-1').addClass('success');
    } else{
      $('#order-step-1').removeClass('success');
    }
  }

  $('#order-step-1 input').change(function () {
    isStep1Success();
  });

  // ВАЛИДАЦИЯ ШАГ 2

  // СВЯЗЬ РАДИО-КНОПОК ДОСТАВКИ И ОПЛАТЫ
  function setPayment(){
    const deliveryType = $('input[name="shk_delivery"]:checked').attr('id');
    if (deliveryType=='delivery'){
        $('label[for="pay-1"]').css('display', 'block').closest('.field-group').addClass('curr-pay');
        $('label[for="pay-2"]').css('display', 'block').closest('.field-group').addClass('curr-pay');
        $('label[for="pay-4"]').css('display', 'none').closest('.field-group').removeClass('curr-pay');
        
    }
    else if (deliveryType=='by-myself'){
        $('label[for="pay-1"]').css('display', 'none').closest('.field-group').removeClass('curr-pay');
        $('label[for="pay-2"]').css('display', 'none').closest('.field-group').removeClass('curr-pay');
        $('label[for="pay-4"]').css('display', 'block').closest('.field-group').addClass('curr-pay');
    }
    $('input[name="payment"]').prop('checked', false);
  }

  function isAddrValid(){
    let hasDeliveryAddr = true;
    $('input.required-group').each(function () {
      if($(this).val() === ''){
        hasDeliveryAddr = false;
      }
    });

    return hasDeliveryAddr;
  }

  $('#order-step-2 .required-group').change(function () {
    if (!isAddrValid()){
        $('#order-step-2').removeClass('success');
        $('#order-step-2>.delivery-tab>.error-field').css('display', 'block');
        
      } else{
        $('#order-step-2').addClass('success');
        $('#order-step-2>.delivery-tab>.error-field').css('display', 'none');
      }
  });


  function isStep2Success(){
    $('#order-step-2').removeClass('success');
    const delivType = $('input[name=shk_delivery]:checked').attr('id');
    if (delivType=='delivery'){
      $('.delivery-tab').addClass('checked');
      $('.bymslf-tab').removeClass('checked');
    }
    else if (delivType=='by-myself'){
      $('.delivery-tab').removeClass('checked');
      $('.bymslf-tab').addClass('checked');
      $('#order-step-2').addClass('success');
    }
    $('input[name=pay-type]:checked').prop('checked', false);

    setPayment();
  };

  $('input[name=shk_delivery]').change(function () {
    isStep2Success();
    isStep3Success();
  });

  isStep2Success();

  // ВАЛИДАЦИЯ ШАГ 3

  function isStep3Success(){
      if($('input[name=pay-type]:checked').length > 0){
          $('#order-step-3').addClass('success');
          // $('#order-step-3 .error-field').css('display', 'none');
      } else{
          $('#order-step-3').removeClass('success');
          // $('#order-step-3 .error-field').css('display', 'block');
      }
  }

  $('#order-step-3 input').change(function () {
    isStep3Success();
  });

  // ПРОВЕРКА ВСЕХ ШАГОВ

  function canBeProcessed(){
    if($('.order-step.success').length === $('.order-step').length){
      $('.order-summary .send-submit-btn').get(0).disabled = false;
    } else{
      $('.order-summary .send-submit-btn').get(0).disabled = true;
    }
  }

  $('.order-steps input').change(function () {
    canBeProcessed();
  });

});
