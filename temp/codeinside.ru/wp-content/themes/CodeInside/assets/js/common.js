$(".btn-burger").on("click", function () {
  $(".mobile-menu").fadeToggle();
});

$(".btn-close").on("click", function () {
  $(".mobile-menu").fadeOut();
});

$(".community-slider").slick({
  slidesToShow: 3,
  dots: true,
  appendArrows: ".community-slider-nav",
  appendDots: ".community-slider-nav",
  prevArrow:
    '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow:
    '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".news-slider").slick({
  slidesToShow: 3,
  dots: true,
  appendArrows: ".news-slider-nav",
  appendDots: ".news-slider-nav",
  prevArrow:
    '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow:
    '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".reviews-slider1").slick({
  slidesToShow: 2,
  dots: true,
  appendArrows: ".reviews-slider-nav1",
  appendDots: ".reviews-slider-nav1",
  prevArrow:
    '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow:
    '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".reviews-slider2").slick({
  slidesToShow: 2,
  dots: true,
  appendArrows: ".reviews-slider-nav2",
  appendDots: ".reviews-slider-nav2",
  prevArrow:
    '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow:
    '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".slider2").slick({
  slidesToShow: 3,
  dots: true,
  adaptiveHeight: true,
  appendArrows: ".reviews-slider-nav2",
  appendDots: ".reviews-slider-nav2",
  prevArrow:
    '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow:
    '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".partners-slider").slick({
  slidesToShow: 6,
  slidesToScroll: 2,
  dots: true,
  infinite: true,
  appendArrows: ".partners-slider-nav",
  appendDots: ".partners-slider-nav",
  prevArrow:
    '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow:
    '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        rows: 3,
        slidesToScroll: 2,
      },
    },
  ],
});
$(".er__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 3,
  dots: true,
  infinite: true,
  adaptiveHeight: true,
  appendArrows: ".slider-nav22",
  appendDots: ".slider-nav22",
  prevArrow:
    '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow:
    '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
        rows: 2,
      },
    },
  ],
});

var reda = $(".cases-slider");
if (reda.hasClass('cases-slider-variant')) {
reda.slick({
  slidesToShow: 3,
  dots: true,
  appendArrows: ".cases-slider-nav",
  appendDots: ".cases-slider-nav",
  infinite: false,
  prevArrow:
    '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow:
    '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: 'unslick',
    },
  ],
});
} else {
reda.slick({
  slidesToShow: 3,
  dots: true,
  appendArrows: ".cases-slider-nav",
  appendDots: ".cases-slider-nav",
  infinite: false,
  prevArrow:
    '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow:
    '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
}

$(".cases-row-slider").slick({
  slidesToShow: 1,
  dots: true,
  appendArrows: ".cases-row-slider__nav",
  appendDots: ".cases-row-slider__nav",
  prevArrow:
    '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow:
    '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});
$(".homee .my-ul").on("click", "A", function (e) {
  e.preventDefault();
  var lindex = $(this).index();
  let tar = $(this);
  let n = `.${tar[0].id}`;
  if (n == ".cases") {
    $(".cases-slider").slick("slickGoTo", 0); // меняем слад на нужный индекс
  } else {
    let slidwe = document.querySelector(n);
    if (slidwe) {
      var ind = slidwe.dataset.slickIndex;

      $(".cases-slider").slick("slickGoTo", ind); // меняем слад на нужный индекс
    }
  }
  console.log(ind);
  $(".cases-slider").slick("slickGoTo", parseInt(lindex)); // меняем слад на нужный индекс
  $(".homee .my-ul A").removeClass("active"); // change class
  $(this).addClass("active");
  // document.querySelector(".active").querySelector("A").addClass("active");
});

$(".stages-work-slider").slick({
  slidesToShow: 2,
  dots: true,
  loop: true,
  appendArrows: ".stages-work-slider-nav",
  appendDots: ".stages-work-slider-nav",
  prevArrow:
    '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow:
    '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-right"></use></svg></button>',
  variableWidth: true,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        variableWidth: false,
        centerMode: false,
        slidesToShow: 1,
      },
    },
  ],
});

$(".worth-image").slick({
  slidesToShow: 1,
  fade: true,
  arrows: false,
  asNavFor: ".worth-content-slider",
});

$(".worth-content-slider").slick({
  slidesToShow: 1,
  fade: true,
  dots: true,
  prevArrow:
    '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow:
    '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="/img/sprite.svg#arrow-right"></use></svg></button>',
  asNavFor: ".worth-image",
  appendArrows: ".worth-content-slider__nav",
  appendDots: ".worth-content-slider__nav",
});

// slick active

$(".trust-us-slider").slick({
  dots: true,

  appendArrows: ".trust-us-slider-nav",
  appendDots: ".trust-us-slider-nav",
  prevArrow:
    '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow:
    '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="/sprite.svg#arrow-right"></use></svg></button>',
  infinite: true,
  slidesToShow: "auto",
  slidesToScroll: "auto",
  arrows: true,
  autoplay: true,
  autoplaySpeed: 8000,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 890,
      settings: {
        centerMode: true,

        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 720,
      settings: {
        centerMode: false,

        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// slick active

$(".go_to").click(function (e) {
  e.preventDefault();
  var scroll_el = $(this).attr("href");
  if ($(scroll_el).length !== 0) {
    $("html, body").animate(
      {
        scrollTop: $(scroll_el).offset().top,
      },
      500
    );
  }
  return false;
});
$('input[name="file-293"]').change(function (evt) {
  if ($('input[name="file-293"]').val()) {
    let parent = $('input[name="file-293"]').closest("form");
    let text = parent[0].querySelector("strong");
    text.innerHTML = "Файл прикреплен";
    let text2 = parent[0].querySelector(".label-file__text").querySelector("span");
    text2.innerHTML = $('input[name="file-293"]').val();
  }
});

$(window).on("load resize", function () {
  $("A").bind("click", function (e) {
    if (e.target.closest(".cases-section")) {
    } else {
      var anchor = $(this);
      if (anchor.parents().filter('.wwr').length == 0) {
          windowWidth = $(window).width();
          if (windowWidth <= 992) {
            $("html, body")
              .stop()
              .animate(
                {
                  scrollTop: $(anchor.attr("href")).offset().top - 0,
                },
                1000
              );
          } else {
            $("html, body")
              .stop()
              .animate(
                {
                  scrollTop: $(anchor.attr("href")).offset().top - 100,
                },
                1000
              );
          }
          e.preventDefault();
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#file1").addEventListener("input", function (e) {
    console.log("aga");
    let hop = (document.querySelector(".bx p").innerHTML = document.querySelector("#file1").value);
  });

  var lazyloadImages;
  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });
    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }
      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
});
$(function () {
  let header = $("header");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("header_fixed");
    } else {
      header.removeClass("header_fixed");
    }
  });
});
(function () {
  const e = document.querySelector("body");
  var t = function (t) {
    e.style.paddingRight = "";
    var s = t.querySelector("[data-body]");
    t.classList.remove("active"), document.documentElement.classList.remove("modal-open"), s.classList.remove("active");
  };
  e.addEventListener("click", (t) => {
    var s = (function (e, t) {
      for (var s = e; s; ) {
        var i = s.getAttribute("data-popup");
        if (i) return i;
        s = s.parentElement;
      }
      return null;
    })(t.target);
    if (null !== s) {
      t.preventDefault();
      var i = document.querySelector("." + s);
      i &&
        (function (t) {
          const s = parseInt(document.documentElement.clientWidth),
            i = parseInt(window.innerWidth) - s;
          (e.style.paddingRight = `${i}px`),
            t.querySelector("[data-body]").classList.add("active"),
            t.classList.add("active"),
            document.documentElement.classList.add("modal-open");
        })(i);
    }
  }),
    e.addEventListener("keydown", (e) => {
      if (27 === e.keyCode) {
        var s = document.querySelectorAll(".active");
        s &&
          s.forEach((e) => {
            t(e);
          });
      }
    }),
    e.addEventListener("click", (e) => {
      var s = e.target;
      if (s.classList.contains("closep") || s.classList.contains("popup")) {
        var i = (function (e, t) {
          for (var s = e; s; ) {
            if (s.classList.contains("popup")) return s;
            s = s.parentElement;
          }
          return null;
        })(s);
        t(i);
      }
    });
})();
const navAll = document.querySelectorAll(".slick-dots");
navAll.forEach((e) => {
  let allDots = e.querySelectorAll("LI");
  console.log(allDots);
  if (allDots.length == 1) {
    e.style = `display:none`;
  }
});


$(window).on('load resize', function() {
    $('.cases-item').each(function() {
        var curItem = $(this);
        curItem.css({'max-height': 'auto'});
        curItem.css({'max-height': curItem.outerHeight()});
    });
});

$(document).ready(function() {

    $('.reviews-box').click(function() {
        if ($(window).width() <= 480) {
            var newHTML = '<div class="reviews-box">' + $(this).html() + '</div>';
            new Fancybox([
                {
                    src: newHTML,
                    type: 'html'
                }
            ]);
        }
    });

    $('body').on('click', '.aside .wwr a', function(e) {
        $(window).trigger('scroll');
        var curLink = $(this);
        var curBlock = $('[id="' + curLink.attr('href').replace('#', '') + '"]');
        if (curBlock.length == 1) {
            $('html, body').animate({'scrollTop': curBlock.offset().top - $('header').outerHeight()});
        }
        e.preventDefault();
    });
});

$(window).on('load resize scroll', function() {
    var windowScroll = $(this).scrollTop();

    $('body').append('<div id="body-test-height" style="position:fixed; left:0; top:0; right:0; bottom:0; z-index:-1"></div>');
    var windowHeight = $('#body-test-height').height();
    $('#body-test-height').remove();

    $('.aside .wwr a').each(function() {
        var curLink = $(this);
        var curBlock = $('[id="' + curLink.attr('href').replace('#', '') + '"]');
        if (curBlock.length == 1) {
            if (windowScroll + windowHeight / 2 > curBlock.offset().top) {
                $('.aside .wwr a').removeClass('active');
                curLink.addClass('active');
            }
        }
    });

});