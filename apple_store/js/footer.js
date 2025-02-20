$(function(){
  $("footer .f__newUser button").click(function(){
    $(this).parent().children("p").toggleClass('ellipsis');
  })

  $(".footnotes button").click(function(){
    $(this).next().toggle();
    $(this).empty();
    $(this).text($(this).text()=='더보기' ? '접기' : '더보기');
  })
});