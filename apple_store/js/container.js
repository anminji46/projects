var swiper = new Swiper(".mySwiper", {
  loop:true,
  pagination: {
    el: ".swiper-pagination",
  },
});

$(function(){
  $('.c__probox').mouseover(function(){
    $(".c__opacity").css('opacity','0')
  })
  $('.c__probox').mouseout (function(){
    $(".c__opacity").css('opacity','1')
  })
  $('.c__macBox').mouseover(function(){
    $(".c__opacity2").css('opacity','0')
  })
  $('.c__macBox').mouseout (function(){
    $(".c__opacity2").css('opacity','1')
  })
  $('.c__iphonBox').mouseover(function(){
    $(".c__opacity3").css('opacity','0')
  })
  $('.c__iphonBox').mouseout (function(){
    $(".c__opacity3").css('opacity','1')
  })
  $('.c__ipadBox').mouseover(function(){
    $(".c__opacity4").css('opacity','0')
  })
  $('.c__ipadBox').mouseout (function(){
    $(".c__opacity4").css('opacity','1')
  })
  $('.c__watchBox').mouseover(function(){
    $(".c__opacity5").css('opacity','0')
  })
  $('.c__watchBox').mouseout (function(){
    $(".c__opacity5").css('opacity','1')
  })
  $('.c__podsBox').mouseover(function(){
    $(".c__opacity6").css('opacity','0')
  })
  $('.c__podsBox').mouseout (function(){
    $(".c__opacity6").css('opacity','1')
  })
});