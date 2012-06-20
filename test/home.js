$(document).ready(function()
{
	$.ajax
	({
  	type: 'GET',
  	url: 'http://services.digg.com/2.0/topic.getAll?type=javascript&callback=?',
  	dataType: 'jsonp',
  	success: function(data)
  	{
    	for (i = 0; i < data.count; i++)
    	{
        $(".topic").append("<li><a href='"+data.topics[i].name+".html'>"+data.topics[i].name+"</a></li>");
    	}
  	}
	});

	/*
$.ajax({
  type: 'GET',
  url: 'http://services.digg.com/2.0/digg.getAll?type=javascript&callback=?',
  dataType: 'jsonp',
  success: function(data){
    for (i = 0; i < data.count; i++)
    {
        $(".topics").append("<li>"+data.diggs[i].item.topic.name+"</li><br>");
        $(".topics").append("<li>"+data.diggs[i].item.title+"</li><br>");
        $(".topics").append("<li>"+data.diggs[i].item.description+"</li><br><br>");
    }
  }
});
*/
});
