/*$(document).ready(function(){
  $("button").click(function()
  {
    $("p").css("color","green");
  });
});
*/

/*$(document).ready(function($) {

  var allPanels = $('.accordion > p').hide();

$(document).ready(function($) {

 /* var allPanels = $('.accordion > p').hide();

  $('.accordion > h3 > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });
*/

$(document).ready(function() {
	var uri = 'http://services.digg.com/2.0/topics.getAll';
	var params = {
					  	  type : 'json'
								};
	$.getJSON(uri, params, function(json) {
  	  if (json.topics.length > 0) {
  	      for (i in json.topics) {
  	          $('.topics').append('<li>' + json.topics[i].name + '</li>');
  		        alert("dasfaf "+json.topics[i].name);
  	      }

        //$('#stories').show('slow');
    }
		});

});


});

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
