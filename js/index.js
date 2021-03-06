//Аккордеон

  function AccordeonItem(e) {
    console.log("asd");
    var $e = $(e);
    var text = $e.find('.question-answer');
    var header = $e.find('.question-title');
    var isOpen = false;
    this.open = function() {
      if (isOpen) {
        return;
      }
      isOpen = true;
      text.slideDown(200);
      header.addClass('question-active');
    };
    this.close = function() {
      isOpen = false;
      text.slideUp(200);
      header.removeClass('question-active');
    };
    this.click = function(fn) {
      header.click(fn);
    };
  };

  function AccordeonController(accordeonSelector, itemsSelector) {
  var $accordeon = $(accordeonSelector);
  var _items = $accordeon.find(itemsSelector);
  var items = [];
  for (var i = 0; i < _items.length; i++) {
    items[i] = new AccordeonItem(_items[i]);
    items[i].close();
  }
  var clicked = -1;
  this.init = function() {
    for (var i = 0; i < items.length; i++) {
      var e = items[i];
      (function(i, e) {
        e.click(function() {
          if (clicked != -1) {
            items[clicked].close();
          }
          items[i].open();
          clicked = i;
        });
      })(i, e);
    }
  };
}

var helper = new AccordeonController(".accordeon", ".accordeon__item");
helper.init();


//Табы

$('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })


//выпадающая менюшка
    $(document).ready(function(){
      var touch = $('#touch-menu');
        var menu = $('.adaptive-nav');

        $(touch).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
        });
        $(window).resize(function(){
            var wid = $(window).width();
            if(wid > 760 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });
    });

//Gallery slider
$(document).ready(function(){
        $('.carousel').slick({
        autoplay:true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
        {
          breakpoint: 1200,
            settings: {
              slidesToShow: 1
            }
          }
  ]
        });
    });


      $(document).ready(function(){
        $('.reviews-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.prev-review'),
        nextArrow: $('.next-review'),
        responsive: [
        {
          breakpoint: 1200,
            settings: {
              slidesToShow: 1
            }
          }
  ]
        });
    });

      //Плавный скролл

$(document).ready(function(){
  $('a[href^="#"]').on('click',function(e){
    var targetPosition = $(this.hash).offset().top;
    $('body,html').animate({'scrollTop':targetPosition},500); // анимируем прокрутку
  });
});