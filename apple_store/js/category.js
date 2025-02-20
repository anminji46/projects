$(function(){
  // 햄버거메뉴
  $(".category__hamberger--menu").on("click",function(e){
    $("#category #gnb").addClass("ca__open");
    e.stopPropagation();
  });
  $("#wrap").on("click",function(){
    $("#category #gnb").removeClass('ca__open');
  })

  $(".toTop").on("mouseenter",function(){
    $(".toTop i").addClass("fa-bounce");
  });
  $(".toTop").on("mouseleave",function(){
    $(".toTop i").removeClass("fa-bounce");
  });
});

const toTopEl = document.querySelector('#gnb .toTop');
toTopEl.addEventListener('click',()=>{
  gsap.to(window, .7, {
    scrollTo : 0
  })
});