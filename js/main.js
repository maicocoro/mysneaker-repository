//ハンバーガーメニュー
$(function(){
    $(".humburger-btn").on("click",function(){
        $(".humburger-menu").toggleClass("show");
    })
})
//フェードイン
$(function () {
    $('.brand-text,.brand-item').on('inview',function(){
      $(this).addClass('fadeIn')
    });
   });
   
//画像スライダー
$(function () {
    $('.slider1').slick({
      autoplay:true,
      autoplaySpeed:0,
      speed:3000,
      cssEase:"linear",
      slidesToShow:4,
      swipe: false,
      arrows:false,
      responsive: [
        {
          breakpoint: 599,
          settings: {
            slidesToShow:3,
          }
        }
      ]
    })
   })
   
   $(function () {
    $('.slider2').slick({
      autoplay:true,
      autoplaySpeed:0,
      speed:3000,
      cssEase:"linear",
      slidesToShow:4,
      swipe: false,
      arrows:false,
      rtl: true,
      responsive: [
        {
          breakpoint: 599,
          settings: {
            slidesToShow:2.5,
          }
        }
      ]
    })
   })
   