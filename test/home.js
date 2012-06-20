$(document).ready(function()
{

	$.ajax({
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
 	 url: 'http://services.digg.com/2.0/digg.getAll?type=javascript&callback=?',
 	 dataType: 'jsonp',
  	success: function(data){
    for (i = 0; i < data.count; i++)
  	  {
        $(".maincontent").append("<li class='ttopic'>"+data.diggs[i].item.topic.name+"</li><br>");
        $(".maincontent").append("<li class='title'>"+data.diggs[i].item.title+"</li><br>");
        $(".maincontent").append("<li class='desc'>"+data.diggs[i].item.description+"</li><br><br>");
  	  }
  	}
	});

	$.ajax({
 	 type: 'GET',
 	 url: 'http://services.digg.com/2.0/newsroom.getNews?type=javascript&newsroom_name=business&callback=?',
 	 dataType: 'jsonp',
 	 success: function(data){
  	  for (i = 0; i < data.count; i++)
  	  {
        $(".business").append("<li>"+data.stories[i].title+"</li><br>");
        $(".business").append("<li>"+data.stories[i].description+"</li><br><br>");
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
	$.ajax({
  	type: 'GET',
  	url: 'http://services.digg.com/2.0/newsroom.getNews?type=javascript&newsroom_name=gaming&callback=?',
  	dataType: 'jsonp',
  	success: function(data){
    	for (i = 0; i < data.count; i++)
    	{
      	  $(".gaming").append("<li>"+data.stories[i].title+"</li><br>");
      	  $(".gaming").append("<li>"+data.stories[i].description+"</li><br><br>");
    	}
  	}
	});
	$.ajax({
  	type: 'GET',
  	url: 'http://services.digg.com/2.0/newsroom.getNews?type=javascript&newsroom_name=lifestyle&callback=?',
  	dataType: 'jsonp',
  	success: function(data){
    	for (i = 0; i < data.count; i++)
    	{
      	  $(".lifestyle").append("<li>"+data.stories[i].title+"</li><br>");
      	  $(".lifestyle").append("<li>"+data.stories[i].description+"</li><br><br>");
    	}
  	}
	});
	$.ajax({
  	type: 'GET',
  	url: 'http://services.digg.com/2.0/newsroom.getNews?type=javascript&newsroom_name=offbeat&callback=?',
  	dataType: 'jsonp',
  	success: function(data){
    	for (i = 0; i < data.count; i++)
    	{
      	  $(".offbeat").append("<li>"+data.stories[i].title+"</li><br>");
      	  $(".offbeat").append("<li>"+data.stories[i].description+"</li><br><br>");
    	}
  	}
	});
	$.ajax({
  	type: 'GET',
  	url: 'http://services.digg.com/2.0/newsroom.getNews?type=javascript&newsroom_name=politics&callback=?',
  	dataType: 'jsonp',
  	success: function(data){
    	for (i = 0; i < data.count; i++)
    	{
      	  $(".politics").append("<li>"+data.stories[i].title+"</li><br>");
      	  $(".politics").append("<li>"+data.stories[i].description+"</li><br><br>");
    	}
  	}
	});
	$.ajax({
  	type: 'GET',
  	url: 'http://services.digg.com/2.0/newsroom.getNews?type=javascript&newsroom_name=science&callback=?',
  	dataType: 'jsonp',
  	success: function(data){
    	for (i = 0; i < data.count; i++)
    	{
      	  $(".science").append("<li>"+data.stories[i].title+"</li><br>");
      	  $(".science").append("<li>"+data.stories[i].description+"</li><br><br>");
    	}
  	}
	});
	$.ajax({
  	type: 'GET',
  	url: 'http://services.digg.com/2.0/newsroom.getNews?type=javascript&newsroom_name=sports&callback=?',
  	dataType: 'jsonp',
  	success: function(data){
    	for (i = 0; i < data.count; i++)
    	{
      	  $(".sports").append("<li>"+data.stories[i].title+"</li><br>");
      	  $(".sports").append("<li>"+data.stories[i].description+"</li><br><br>");
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


});
