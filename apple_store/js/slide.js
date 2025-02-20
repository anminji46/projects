
// /* 다홍 slide */

$(function(){

  /* slide 이미지 확대 */
  $("#slide>ul>li").hover(
    function(){ 
      $(this).stop().animate({width:"550px", height:"650px"},200).css({boxShadow:"5px 5px 7px gray"});
    },
    function(){
    $(this).stop().animate({width:"400px", height:"500px"},200).css({boxShadow:" 5px 5px 7px gray"});
    });
   
  $("#slide>ul>li").hover(
    function(){ 
      $(this).find("h3").stop().animate({fontSize:"1.8em"},200);
      },
    function(){ 
      $(this).find("h3").stop().animate({fontSize:"1.2em"},200);
      }
    );


  /* slide버튼 */
    $("#slide .s__prevBtn1").click(function(e){
      e.preventDefault();
      $("#slide .s__newProduct").animate({left: "-425px"}, 600 , function(){
        $("#slide .s__newProduct").prepend($("#slide ul li:last-child"));
        $("#slide .s__newProduct").css({left:"-850px"})
      })
    });
    $("#slide .s__nextBtn1").click(function(e){
      e.preventDefault();    
      $("#slide .s__newProduct").animate({left:"-850px"}, 600, function(){
        $("#slide .s__newProduct").append($("#slide ul li:first-child"));
        $("#slide .s__newProduct").css({left:"-425px"})
      })
    });


  /* 혜택 버튼 */  
    let re_reasons;
    let re_count;
    let re_position = 1;

    re_reasons = $("#reason .reasonList")
    re_count = re_reasons.children().length;

    $('.s__prevBtn2').click(function(){
      back();
    });
    $('.s__nextBtn2').click(function(){
      next();
      $("#reason .s__prevBtn2").show();
    });

  function back() {
    if(1<re_position){
      re_reasons.animate({
        left:'+=320px'
      });
      re_position--;
    }
   }
  function next() {
    if(re_count>re_position){
      re_reasons.animate({
        left:'-=320px'
      });
      re_position++;
    }
  }
  

  let reasonList = document.querySelector('.reasonList')
  let re_btn1 = document.querySelector('.s__prevBtn2');
  let re_btn2 = document.querySelector('.s__nextBtn2');
  
  
    if (reasonLeft == 0 ) {
      $('.s__prevBtn2').css('opacity',0);
    } else {
      $('.s__nextBtn2').css('opacity',1);
    }
    if (reasonRight <= -1600 ) {
      $('.s__nextBtn2').css('opacity', 0);
    } else {
      $('.s__prevBtn2').css('opacity', 1);
    }
  let reasonLeft = document.querySelector('.reasonList').offset.left;
  let reasonRight = document.querySelector('.reasonList').offset.left;


  // let re__offset =  $('.reasonList').offset().left;
  // let re__cardOffset =  $('.r__thecard.r1').offset().left;
  // console.log(re__cardOffset)

  // if(re__cardOffset == 10 ){
  //   $('.s__prevBtn2').css('display','none');
  // } else {
  //   $('.s__prevBtn2').css('display','block');
  // }
  
  // if(re__cardOffset == 10 ){
  //   $('.s__prevBtn2').css('display','none');
  // } else {
  //   $('.s__prevBtn2').css('display','block');
  // }


});  


