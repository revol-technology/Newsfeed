
$.ajax({
  type: 'GET',
  url: 'http://services.digg.com/2.0/digg.getAll?type=javascript&callback=?',
  dataType: 'jsonp',
  success: function(data){
    for (i = 0; i < data.count; i++)
    {
        $(".topics").append("<li><a href='#'>"+data.diggs[i].item.topic.name+'.html'"</a></li>");
        //$(".topics").append("<li>"+data.diggs[i].item.topic+"</li><br>");
        $(".topics").append("<li>"+data.diggs[i].item.description+"</li><br>");
   
    };
  }
});

$.ajax({
  type: 'GET',
  url: 'http://services.digg.com/2.0/newsroom.getNews?type=javascript&newsroom_name=technology&callback=?',
  dataType: 'jsonp',
  success: function(data){
    for (i = 0; i < data.count; i++)
    {
        $(".topics").append("<li>"+data.diggs[i].item.topic+"</li><br>");
        $(".topics").append("<li>"+data.diggs[i].item.description+"</li><br>");
   
    };
  }
});
