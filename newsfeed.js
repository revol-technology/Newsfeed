/*$(document).ready(function(){
  $("button").click(function()
  {
    $("p").css("color","green");
  });
});
*/

$(document).ready(function($) {
    
  var allPanels = $('.accordion > p').hide();
    
  $('.accordion > h3 > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });

});
