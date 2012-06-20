$(document).ready(function()
{
	$.ajax({
  type: 'GET',
  url: 'http://services.digg.com/2.0/digg.getAll?type=javascript&callback=?',
  dataType: 'jsonp',
  success: function(data){
    for (i = 0; i < data.count; i++)
    {
        $(".maincontent").append("<li>"+data.diggs[i].item.topic.name+"</li><br>");
        $(".maincontent").append("<li>"+data.diggs[i].item.title+"</li><br>");
        $(".maincontent").append("<li>"+data.diggs[i].item.description+"</li><br><br>");
    }
  }
});
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
	$.ajax({
  type: 'GET',
  url: 'http://services.digg.com/2.0/newsroom.getNews?type=javascript&newsroom_name=technology&callback=?',
  dataType: 'jsonp',
  success: function(data){
    for (i = 0; i < data.count; i++)
    {
        $(".tech").append("<li>"+data.stories[i].title+"</li><br>");
        $(".tech").append("<li>"+data.stories[i].description+"</li><br><br>");
    }
  }
});
$.ajax({
  type: 'GET',
  url: 'http://services.digg.com/2.0/newsroom.getNews?type=javascript&newsroom_name=entertainment&callback=?',
  dataType: 'jsonp',
  success: function(data){
    for (i = 0; i < data.count; i++)
    {
        $(".ent").append("<li>"+data.stories[i].title+"</li><br>");
        $(".ent").append("<li>"+data.stories[i].description+"</li><br><br>");
    }
  }
});
	/*

*/
});
