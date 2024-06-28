// 自行加入的JS請寫在這裡
$(function () {
  // 燈箱facybox
  Fancybox.bind('[data-fancybox]', {
    l10n: Fancybox.l10n.zh_TW,
  });

  // 首頁輪播
  $('.mpSlider').slick({
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt').trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });
  // 廣告輪播
  $('.adSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  //
  $('.cppic_slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // focusOnSelect: true,
    // accessibility: true,
    // lazyLoad: 'ondemand',
    // ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.Slider-nav',
    infinite: true,
  });
  $('.Slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true,
  });

  // 流程圖
  $('.flowchart_slider').slick({
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children('i').removeClass().addClass('i_show');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children('i').removeClass().addClass('i_hide');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });
  //sticky sidebar
  // if ($('.stickySidebar').length > 0) {
  //   var stickySidebar = new StickySidebar('.stickySidebar', {
  //     containerSelector: '.main',
  //     topSpacing: 93,
  //     bottomSpacing: 0,
  //     minWidth: 768,
  //     resizeSensor: true,
  //   });
  // }

  // mpbanner文字
  const textWrapper = document.querySelector('.mpbanner_group .title');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime
    .timeline({ loop: true })
    .add({
      targets: '.mpbanner_group .title .letter',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 2250,
      delay: (el, i) => 100 * (i + 1),
    })
    .add({
      targets: '.mpbanner_group .title',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 5000,
    });

  // tab功能
  tabFunction({
    target: '.tabSet',
    openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
    openSwitch: true, // 是否可開合/切換
    autoClose: true, // 自動關閉其他開啟內容
    modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
    width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
    index: 0, // 預設開啟第幾個
  });
});

// font_size
$(function () {
  $('.font_size_block .fontsize_btn').on('click', function () {
    if ($('.font_size_list').is(':visible')) {
      $('.font_size_list').stop().slideUp();
    } else {
      $('.font_size_list').stop().slideDown();
    }
  });

  $('.font_size_block')
    .find('li:last-child>a:last-child')
    .focusout(function () {
      $('.font_size_list').slideUp();
    });
  // $('.font_size_block')
  //   .find('.fontsize_btn')
  //   .focus(function () {
  //     $('.font_size_list').slideDown();
  //   });

  // 後分類
  var _sortlist = $('.searchresults_block .sortlist');
  var i = 5; //不隱藏的個數

  _sortlist.each(function () {
    var _slideItem = $(this).find('li').slice(i);
    var _more = $(this).find('.more>a');
    var moreText = _more.text();
    var altText = '顯示收合';

    _more.click(function () {
      if (_slideItem.is(':hidden')) {
        _slideItem.slideDown();
        _more.text(altText);
        _more.addClass('close');
      } else {
        _slideItem.slideUp();
        _more.text(moreText);
        _more.removeClass('close');
      }
    });
  });
  //  後分類整個 左右收合
  $('.narrowquery_btn>a').click(function () {
    $('.searchresults_block .leftblock').stop().toggleClass('open');
    $(this).stop().toggleClass('open');
  });
  // 點擊其他地方，左欄收起
  $(document)
    .off('touchend click')
    .on('touchend click', function (e) {
      var container = $('.font_size_block, .narrowquery_btn '); //點這些以外的區塊
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.font_size_block .font_size_list').stop().slideUp();
        $('.searchresults_block .leftblock').stop().removeClass('open');
      }
    });

  //顯示隱藏查詢條件

  $('.searchquery_btn button').click(function () {
    if ($('.searchgroup').is(':hidden')) {
      $('.searchgroup').slideDown();
      $('.searchquery_btn button span').text('隱藏查詢');
      $('.searchquery_btn button').addClass('close');
    } else {
      $('.searchgroup').slideUp();
      $('.searchquery_btn button span').text('重新查詢');
      $('.searchquery_btn button').removeClass('close');
    }
  });
});
