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
        $(".maincontent").append("<h3 class='ttopic'>"+data.diggs[i].item.topic.name+"</h3>");
        $(".maincontent").append("<h4 class='title'>"+data.diggs[i].item.title+"</h4>");
        $(".maincontent").append("<p class='desc'>"+data.diggs[i].item.description+"</p>");
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
        $(".business").append("<h4 class='title'>"+data.stories[i].title+"</h4>");
        $(".business").append("<p class='desc'>"+data.stories[i].description+"</p>");
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
      	  $(".ent").append("<h4 class='title'>"+data.stories[i].title+"</h4>");
      	  $(".ent").append("<p class='desc'>"+data.stories[i].description+"</p>");
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
      	  $(".gaming").append("<h4 class='title'>"+data.stories[i].title+"</h4>");
      	  $(".gaming").append("<p class='desc'>"+data.stories[i].description+"</p>");
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
      	  $(".lifestyle").append("<h4 class='title'>"+data.stories[i].title+"</h4>");
      	  $(".lifestyle").append("<p class='desc'>"+data.stories[i].description+"</p>");
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
      	  $(".offbeat").append("<h4 class='title'>"+data.stories[i].title+"</h4>");
      	  $(".offbeat").append("<p class='desc'>"+data.stories[i].description+"</p>");
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
      	  $(".politics").append("<h4 class='title'>"+data.stories[i].title+"</h4>");
      	  $(".politics").append("<p class='desc'>"+data.stories[i].description+"</p>");
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
      	  $(".science").append("<h4 class='title'>"+data.stories[i].title+"</h4>");
      	  $(".science").append("<p class='desc'>"+data.stories[i].description+"</p>");
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
      	  $(".sports").append("<h4 class='title'>"+data.stories[i].title+"</h4>");
      	  $(".sports").append("<p class='desc'>"+data.stories[i].description+"</p>");
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
      	  $(".tech").append("<h4 class='title'>"+data.stories[i].title+"</h4>");
      	  $(".tech").append("<p class='desc'>"+data.stories[i].description+"</p>");
    	}
  	}
	});

$.ajax({
  	type: 'GET',
  	url: 'http://services.digg.com/2.0/newsroom.getNews?type=javascript&newsroom_name=worldnews&callback=?',
  	dataType: 'jsonp',
  	success: function(data){
    	for (i = 0; i < data.count; i++)
    	{
      	  $(".news").append("<h4 class='title'>"+data.stories[i].title+"</h4>");
      	  $(".news").append("<p class='desc'>"+data.stories[i].description+"</p>");
    	}
  	}
	});

});
