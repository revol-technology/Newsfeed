/*$(document).ready(function(){
  $("button").click(function()
  {
    $("p").css("color","green");
  });
});
*/

/*$(document).ready(function($) {
    
  var allPanels = $('.accordion > p').hide();
    
  $('.accordion > h3 > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });

});*/

$.ajax({
  type: 'GET',
  url: 'http://services.digg.com/2.0/topic.getAll?type=javascript&callback=?',
  dataType: 'jsonp',
  success: function(data){
    for (i = 0; i < data.count; i++)
    {
        $(".topics").append("<li>"+data.topics[i].name+"</li>");
    }
  }
});
