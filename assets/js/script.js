$('.project-slider').slick({
    dots: false,
    arrows:true,
    prevArrow:'<i class="fas fa-angle-double-left prev-arrow"></i>',
    nextArrow:'<i class="fas fa-angle-double-right next-arrow"></i>',
    infinite: true,
    adaptiveHeight:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
    slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
$('.crafts-slider').slick({
    dots: false,
    arrows:true,
    prevArrow:'<i class="fas fa-angle-double-left prev-arrow"></i>',
    nextArrow:'<i class="fas fa-angle-double-right next-arrow"></i>',
    infinite: true,
    autoplay:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  var video = document.getElementById("myVideo");
  // var btn = document.getElementById("myBtn");
  // function myFunction() {
  //     if (video.paused) {
  //         video.play();
  //         btn.innerHTML = "Pause";
  //     } else {
  //         video.pause();
  //         btn.innerHTML = "Play";
  //     }
  // };

  setTimeout(function(){
    $(".preloader").fadeOut()
},4000)


