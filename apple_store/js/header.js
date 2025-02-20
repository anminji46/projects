$(function(){
  $("#h__util>li>a").not("#h__store>.h__store").mouseenter(function(e){
    // li hover시 하이라이트
    $(this).css({
      fontSize : 14,
      color : '#C4AA97'
    });
    //  // 상위 메뉴 크기 약간 키우기
    // $("#h__util").css("transition",".5s");
    // $("#h__util").css("padding","5px");
    // // 상위메뉴 위치 고정
    // $("#h__util").css("transform","translate(-50%)");
    e.stopPropagation();
  });
  $("#h__util>li>a").mouseleave(function(){
    $(this).css({
      fontSize : 12,
      color : 'white'
    });
    //  // 상위 메뉴 크기 원상복구
    // $("#h__util").css("transition",".5s");
    // $("#h__util").css("padding","0px 10px");
    // // 상위메뉴 위치 고정
    // $("#h__util").css("transform","translate(-50%)");
  });

  $("#h__store").on("click",function(e){
    // 부메뉴 띄우기
    $(".h__store").removeClass('h__hidden');
    $(".h__store").addClass('h__active');
    // li 텍스트 아이콘으로 변경
    $("#h__store>a").empty();
    $("#h__store>a").html("<img src='./images/header/icons8-온라인-매장-30.png' alt=''>");
    $("#h__store>a").css("padding-top","20px");

    // 해당 li 크기 키우기
    $(this).css("width","100%");
    $(this).css("height","100%");
    // 본인제외 li 제거
    $("#h__util>li").not($(this)).css('display','none');
    // 상위 ul 모션
    $("#h__util").stop().animate({
      overflow :'hidden',
      width : 700,
      height : 350,
      border : "1px solid #000",
      borderRadius : 40,
      backgroundColor : "#000",
    },500);
    e.stopPropagation();
  });
  $("#wrap").on("click",function(e){
    // 부메뉴 없애기
    $(".h__store").removeClass('h__active');
    $(".h__store").addClass('h__hidden');
    // li 아이콘 텍스트로 변경
    $("#h__store>a").text("스토어");
    $("#h__store>a").css("padding","0");
    $("#h__store>a").css("font-size","12px");
    $("#h__store>a").css("color","white");
    // 해당  li 크기 줄이기
    $("#h__store").css("width","calc(90% / 14)");
    $("#h__store").css("height","50px");
    // 목록 다시보이기
    $("#h__util>li").css('display','block');
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 1200,
      height : 50,
      border : "1px solid #000",
      backgroundColor : "#000"
    },500);
    e.stopPropagation();
  });

  $("#h__Mac").on("click",function(e){
    // 부메뉴 띄우기
    $(".h__Mac").removeClass('h__hidden');
    $(".h__Mac").addClass('h__active');
    // li 텍스트 아이콘으로 변경
    $("#h__Mac>a").empty();
    $("#h__Mac>a").html("<img src='./images/header/icons8-아이맥-30.png' alt=''>");
    $("#h__Mac>a").css("padding-top","20px");
    // 해당 li 크기 키우기
    $(this).css("width","100%");
    $(this).css("height","100%");
    // 본인제외 li 제거
    $("#h__util>li").not($(this)).css('display','none');
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 800,
      height : 350,
      border : "1px solid #000",
      borderRadius : 40,
      backgroundColor : "#000",
    },500);
    e.stopPropagation();
  });
  $("#wrap").on("click",function(e){
    // 부메뉴 없애기
    $(".h__Mac").removeClass('h__active');
    $(".h__Mac").addClass('h__hidden');
    // li 아이콘 텍스트로 변경
    $("#h__Mac>a").text("Mac");
    $("#h__Mac>a").css("padding","0");
    $("#h__Mac>a").css("font-size","12px");
    $("#h__Mac>a").css("color","white");
    // 해당  li 크기 줄이기
    $("#h__Mac").css("width","calc(90% / 14)");
    $("#h__Mac").css("height","50px");
    // 목록 다시보이기
    $("#h__util>li").css('display','block');
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 1200,
      height : 50,
      border : "1px solid #000",
      backgroundColor : "#000"
    },500);
    e.stopPropagation();
  });

  $("#h__iPad").on("click",function(e){
    // 부메뉴 띄우기
    $(".h__iPad").removeClass('h__hidden');
    $(".h__iPad").addClass('h__active');
    // li 텍스트 아이콘으로 변경
    $("#h__iPad>a").empty();
    $("#h__iPad>a").html("<img src='./images/header/icons8-아이-패드-30.png' alt=''>");
    $("#h__iPad>a").css("padding-top","20px");
    // 해당 li 크기 키우기
    $(this).css("width","100%");
    $(this).css("height","100%");
    // 본인제외 li 제거
    $("#h__util>li").not($(this)).css('display','none');
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 800,
      height : 350,
      border : "1px solid #000",
      borderRadius : 40,
      backgroundColor : "#000",
    },500);
    e.stopPropagation();
  });
  $("#wrap").on("click",function(e){
    // 부메뉴 없애기
    $(".h__iPad").removeClass('h__active');
    $(".h__iPad").addClass('h__hidden');
    // li 아이콘 텍스트로 변경
    $("#h__iPad>a").text("iPad");
    $("#h__iPad>a").css("padding","0");
    $("#h__iPad>a").css("font-size","12px");
    $("#h__iPad>a").css("color","white");
    // 해당  li 크기 줄이기
    $("#h__iPad").css("width","calc(90% / 14)");
    $("#h__iPad").css("height","50px");
    // 목록 다시보이기
    $("#h__util>li").css('display','block');    
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 1200,
      height : 50,
      border : "1px solid #000",
      backgroundColor : "#000"
    },500);
    e.stopPropagation();
  });

  $("#h__iPhone").on("click",function(e){
    // 부메뉴 띄우기
    $(".h__iPhone").removeClass('h__hidden');
    $(".h__iPhone").addClass('h__active');
    // li 텍스트 아이콘으로 변경
    $("#h__iPhone>a").empty();
    $("#h__iPhone>a").html("<img src='./images/header/icons8-iphone14-pro-30.png' alt=''>");
    // $("#h__iPhone>a").html("<img src='./images/header/icons8-아이폰-엑스-30.png' alt=''>");
    $("#h__iPhone>a").css("padding-top","20px");
    // 해당 li 크기 키우기
    $(this).css("width","100%");
    $(this).css("height","100%");
    // 본인제외 li 제거
    $("#h__util>li").not($(this)).css('display','none');
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 800,
      height : 350,
      border : "1px solid #000",
      borderRadius : 40,
      backgroundColor : "#000",
    },500);
    e.stopPropagation();
  });
  $("#wrap").on("click",function(e){
    // 부메뉴 없애기
    $(".h__iPhone").removeClass('h__active');
    $(".h__iPhone").addClass('h__hidden');
    // li 아이콘 텍스트로 변경
    $("#h__iPhone>a").text("iPhone");
    $("#h__iPhone>a").css("padding","0");
    $("#h__iPhone>a").css("font-size","12px");
    $("#h__iPhone>a").css("color","white");
    // 해당  li 크기 줄이기
    $("#h__iPhone").css("width","calc(90% / 14)");
    $("#h__iPhone").css("height","50px");
    // 목록 다시보이기
    $("#h__util>li").css('display','block'); 
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 1200,
      height : 50,
      border : "1px solid #000",
      backgroundColor : "#000"
    },500);
    e.stopPropagation();
  });

  $("#h__watch").on("click",function(e){
    // 부메뉴 띄우기
    $(".h__watch").removeClass('h__hidden');
    $(".h__watch").addClass('h__active');
    // li 텍스트 아이콘으로 변경
    $("#h__watch>a").empty();
    $("#h__watch>a").html("<img src='./images/header/icons8-애플-시계-30.png' alt=''>");
    $("#h__watch>a").css("padding-top","20px");
    // 해당 li 크기 키우기
    $(this).css("width","100%");
    $(this).css("height","100%");
    // 본인제외 li 제거
    $("#h__util>li").not($(this)).css('display','none');
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 900,
      height : 300,
      border : "1px solid #000",
      borderRadius : 40,
      backgroundColor : "#000",
    },500);
    e.stopPropagation();
  });
  $("#wrap").on("click",function(e){
    // 부메뉴 없애기
    $(".h__watch").removeClass('h__active');
    $(".h__watch").addClass('h__hidden');
    // li 아이콘 텍스트로 변경
    $("#h__watch>a").text("Watch");
    $("#h__watch>a").css("padding","0");
    $("#h__watch>a").css("font-size","12px");
    $("#h__watch>a").css("color","white");
    // 해당  li 크기 줄이기
    $("#h__watch").css("width","calc(90% / 14)");
    $("#h__watch").css("height","50px");
    // 목록 다시보이기
    $("#h__util>li").css('display','block'); 
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 1200,
      height : 50,
      border : "1px solid #000",
      backgroundColor : "#000"
    },500);
    e.stopPropagation();
  });

  $("#h__vision").on("click",function(e){
      // 부메뉴 띄우기
    $(".h__vision").removeClass('h__hidden');
    $(".h__vision").addClass('h__active');
      // li 텍스트 아이콘으로 변경
      $("#h__vision>a").empty();
      $("#h__vision>a").html("<img src='./images/header/icons8-apple-vision-pro-30.png' alt=''>");
      $("#h__vision>a").css("padding-top","20px");
      // 해당 li 크기 키우기
    $(this).css("width","100%");
    $(this).css("height","100%");
      // 본인제외 li 제거
    $("#h__util>li").not($(this)).css('display','none');
      // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 800,
      height : 280,
      border : "1px solid #000",
      borderRadius : 40,
      backgroundColor : "#000",
    },500);
    e.stopPropagation();
  });
  $("#wrap").on("click",function(e){
      // 부메뉴 없애기
    $(".h__vision").removeClass('h__active');
    $(".h__vision").addClass('h__hidden');
      // li 아이콘 텍스트로 변경
    $("#h__vision>a").text("Vision");
    $("#h__vision>a").css("padding","0");
    $("#h__vision>a").css("font-size","12px");
    $("#h__vision>a").css("color","white");
      // 해당  li 크기 줄이기
    $("#h__vision").css("width","calc(90% / 14)");
    $("#h__vision").css("height","50px");
      // 목록 다시보이기
    $("#h__util>li").not($(this)).css('display','block'); 
      // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 1200,
      height : 50,
      border : "1px solid #000",
      backgroundColor : "#000"
    },500);
    e.stopPropagation();
  });

  $("#h__AirPods").on("click",function(e){
      // 부메뉴 띄우기
    $(".h__AirPods").removeClass('h__hidden');
    $(".h__AirPods").addClass('h__active');
      // li 텍스트 아이콘으로 변경
      $("#h__AirPods>a").empty();
      $("#h__AirPods>a").html("<img src='./images/header/icons8-에어팟-3-30.png' alt=''>");
      $("#h__AirPods>a").css("padding-top","20px");
      // 해당 li 크기 키우기
    $(this).css("width","100%");
    $(this).css("height","100%");
      // 본인제외 li 제거
    $("#h__util>li").not($(this)).css('display','none');
      // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 800,
      height : 280,
      border : "1px solid #000",
      borderRadius : 40,
      backgroundColor : "#000",
    },500);
    e.stopPropagation();
  });
  $("#wrap").on("click",function(e){
      // 부메뉴 없애기
    $(".h__AirPods").removeClass('h__active');
    $(".h__AirPods").addClass('h__hidden');
      // li 아이콘 텍스트로 변경
    $("#h__AirPods>a").text("AirPods");
    $("#h__AirPods>a").css("padding","0");
    $("#h__AirPods>a").css("font-size","12px");
    $("#h__AirPods>a").css("color","white");
      // 해당  li 크기 줄이기
    $("#h__AirPods").css("width","calc(90% / 14)");
    $("#h__AirPods").css("height","50px");
      // 목록 다시보이기
    $("#h__util>li").css('display','block'); 
      // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 1200,
      height : 50,
      border : "1px solid #000",
      backgroundColor : "#000"
    },500);
    e.stopPropagation();
  });

  $("#h__TV").on("click",function(e){
    // 부메뉴 띄우기
    $(".h__TV").removeClass('h__hidden');
    $(".h__TV").addClass('h__active');
      // li 텍스트 아이콘으로 변경
    $("#h__TV>a").empty();
    $("#h__TV>a").html("<img src='./images/header/icons8-애플-tv-30.png' alt=''>");
    $("#h__TV>a").css("padding-top","20px");
    // 해당 li 크기 키우기
    $(this).css("width","100%");
    $(this).css("height","100%");
    // 본인제외 li 제거
    $("#h__util>li").not($(this)).css('display','none');
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 600,
      height : 350,
      border : "1px solid #000",
      borderRadius : 40,
      backgroundColor : "#000",
    },500);
    e.stopPropagation();
  });
  $("#wrap").on("click",function(e){
    // 부메뉴 없애기
    $(".h__TV").removeClass('h__active');
    $(".h__TV").addClass('h__hidden');
      // li 아이콘 텍스트로 변경
    $("#h__TV>a").text("TV 및 홈");
    $("#h__TV>a").css("padding","0");
    $("#h__TV>a").css("font-size","12px");
    $("#h__TV>a").css("color","white");
    // 해당  li 크기 줄이기
    $("#h__TV").css("width","calc(90% / 14)");
    $("#h__TV").css("height","50px");
    // 목록 다시보이기
    $("#h__util>li").css('display','block'); 
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 1200,
      height : 50,
      border : "1px solid #000",
      backgroundColor : "#000"
    },500);
    e.stopPropagation();
  });

  $("#h__ENT").on("click",function(e){
      // 부메뉴 띄우기
    $(".h__ENT").removeClass('h__hidden');
    $(".h__ENT").addClass('h__active');
      // li 텍스트 아아콘으로 변경
    $("#h__ENT>a").empty();
    $("#h__ENT>a").html("<img src='./images/header/icons8-사과-아케이드-30.png' alt=''>");
    $("#h__ENT>a").css("padding-top","20px");
      // 해당 li 크기 키우기
    $(this).css("width","100%");
    $(this).css("height","100%");
    // 본인제외 li 제거
    $("#h__util>li").not($(this)).css('display','none');
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 500,
      height : 350,
      border : "1px solid #000",
      borderRadius : 40,
      backgroundColor : "#000",
    },500);
    e.stopPropagation();
  });
  $("#wrap").on("click",function(e){
    // 부메뉴 없애기
    $(".h__ENT").removeClass('h__active');
    $(".h__ENT").addClass('h__hidden');
     // li 아이콘 텍스트로 변경
    $("#h__ENT>a").text("엔터테인먼트");
    $("#h__ENT>a").css("padding","0");
    $("#h__ENT>a").css("font-size","12px");
    $("#h__ENT>a").css("color","white");
    // 해당  li 크기 줄이기
    $("#h__ENT").css("width","calc(90% / 14)");
    $("#h__ENT").css("height","50px");
    // 목록 다시보이기
    $("#h__util>li").css('display','block'); 
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 1200,
      height : 50,
      border : "1px solid #000",
      backgroundColor : "#000"
    },500);
    e.stopPropagation();
  });

  $("#h__ACC").on("click",function(e){
    // 부메뉴 띄우기
    $(".h__ACC").removeClass('h__hidden');
    $(".h__ACC").addClass('h__active');
    // li 텍스트 아아콘으로 변경
    $("#h__ACC>a").empty();
    $("#h__ACC>a").html("<img src='./images/header/icons8-핸드폰-케이스-30.png' alt=''>");
    $("#h__ACC>a").css("padding-top","20px");
    // 해당 li 크기 키우기
    $(this).css("width","100%");
    $(this).css("height","100%");
    // 본인제외 li 제거
    $("#h__util>li").not($(this)).css('display','none');
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 600,
      height : 350,
      border : "1px solid #000",
      borderRadius : 40,
      backgroundColor : "#000",
    },500);
    e.stopPropagation();
  });
  $("#wrap").on("click",function(e){
    // 부메뉴 없애기
    $(".h__ACC").removeClass('h__active');
    $(".h__ACC").addClass('h__hidden');
     // li 아이콘 텍스트로 변경
    $("#h__ACC>a").text("액세서리");
    $("#h__ACC>a").css("padding","0");
    $("#h__ACC>a").css("font-size","12px");
    $("#h__ACC>a").css("color","white");
    // 해당  li 크기 줄이기
    $("#h__ACC").css("width","calc(90% / 14)");
    $("#h__ACC").css("height","50px");
    // 목록 다시보이기
    $("#h__util>li").css('display','block'); 
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 1200,
      height : 50,
      border : "1px solid #000",
      backgroundColor : "#000"
    },500);
    e.stopPropagation();
  });

  $("#h__customer").on("click",function(e){
    // 부메뉴 띄우기
    $(".h__customer").removeClass('h__hidden');
    $(".h__customer").addClass('h__active');
    // li 텍스트 아아콘으로 변경
    $("#h__customer>a").empty();
    $("#h__customer>a").html("<img src='./images/header/icons8-고객-지원-30.png' alt=''>");
    $("#h__customer>a").css("padding-top","20px");
    // 해당 li 크기 키우기
    $(this).css("width","100%");
    $(this).css("height","100%");
    // 본인제외 li 제거
    $("#h__util>li").not($(this)).css('display','none');
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 800,
      height : 300,
      border : "1px solid #000",
      borderRadius : 40,
      backgroundColor : "#000",
    },500);
    e.stopPropagation();
  });
  $("#wrap").on("click",function(e){
    // 부메뉴 없애기
    $(".h__customer").removeClass('h__active');
    $(".h__customer").addClass('h__hidden');
    // li 아이콘 텍스트로 변경
    $("#h__customer>a").text("고객지원");
    $("#h__customer>a").css("padding","0");
    $("#h__customer>a").css("font-size","12px");
    $("#h__customer>a").css("color","white");
    // 해당  li 크기 줄이기
    $("#h__customer").css("width","calc(90% / 14)");
    $("#h__customer").css("height","50px");
    // 목록 다시보이기
    $("#h__util>li").css('display','block'); 
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 1200,
      height : 50,
      border : "1px solid #000",
      backgroundColor : "#000"
    },500);
    e.stopPropagation();
  });

  $("#h__logo").mouseenter(function(){
    // 로고 크기, 색상 변경
    $(this).addClass('fa-shake');
    $("#h__logo").css("color","rgb(85,253,90)")
    // $("#h__logo").css("transition",".5s");
    // $("#h__logo").css("transform","scale(1.6)");
    // 상위 메뉴 크기 약간 키우기
    $("#h__util").css("transition",".5s");
    $("#h__util").css("padding","5px");
    // 상위메뉴 위치 고정
    $("#h__util").css("transform","translate(-50%)");
  });
  $("#h__logo").mouseleave(function(){
    $(this).removeClass("fa-shake");
    $("#h__logo").css("color","white");
    // $("#h__logo").css("transition",".5s");
    // $("#h__logo").css("transform","scale(1)");
    // 상위 메뉴 크기 원상복구
    $("#h__util").css("transition",".5s");
    $("#h__util").css("padding","0px 10px");
    // 상위메뉴 위치 고정
    $("#h__util").css("transform","translate(-50%)");
  });

  $("#h__search").on("click",function(e){
      // 부메뉴 띄우기
    $(".h__search").removeClass('h__hidden');
    $(".h__search").addClass('h__active');
      // 해당 li 크기 키우기
    $(this).css("width","100%");
    $(this).css("height","100%");
      // 본인제외 li 제거
    $("#h__util>li").not($(this)).css('display','none');
    $("#h__search>button").addClass("h__hidden");
      // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 900,
      height : 100,
      border : "1px solid #000",
      borderRadius : 50,
      backgroundColor : "#000",
    },500);
    e.stopPropagation();
  });
  $("#h__search .h__closeBtnA").on("click",function(e){
    // 부메뉴 없애기
  $(".h__search").removeClass('h__active');
  $(".h__search").addClass('h__hidden');
    // li 아이콘 텍스트로 변경
  $("#h__search>button").removeClass("h__hidden");
    // 해당  li 크기 줄이기
  $("#h__util>li").css("width","calc(90% / 14)");
  $("#h__util>li").css("height","50px");
  // 목록 다시보이기
  $("#h__util>li").css('display','block'); 
    // 상위 ul 모션
  $("#h__util").stop().animate({
    width : 1200,
    height : 50,
    border : "1px solid #000",
    backgroundColor : "#000"
  },500);
  e.stopPropagation();
});

  $("#h__shopping").on("click",function(e){
    // 부메뉴 띄우기
    $(".h__shopping").removeClass('h__hidden');
    $(".h__shopping").addClass('h__active');
    // 해당 li 크기 키우기
    $(this).css("width","100%");
    $(this).css("height","100%");
    // 본인제외 li 제거
    $("#h__util>li").not($(this)).css('display','none');
    $("#h__shopping>button").addClass("h__hidden");
    // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 900,
      height : 400,
      border : "1px solid #000",
      borderRadius : 40,
      backgroundColor : "#000",
    },500);
    e.stopPropagation();
  });
  
  $(".h__closeBtnB").on("click",function(e){
      // 부메뉴 없애기
    $(".h__shopping").removeClass('h__active');
    $(".h__shopping").addClass('h__hidden');
      // li 아이콘 텍스트로 변경
    $("#h__shopping>button").removeClass("h__hidden");
      // 해당  li 크기 줄이기
    $("#h__util>li").css("width","calc(90% / 14)");
    $("#h__util>li").css("height","50px");
    // 목록 다시보이기
    $("#h__util>li").css('display','block'); 
      // 상위 ul 모션
    $("#h__util").stop().animate({
      width : 1200,
      height : 50,
      border : "1px solid #000",
      backgroundColor : "#000"
    },500);
    e.stopPropagation();
  });
});