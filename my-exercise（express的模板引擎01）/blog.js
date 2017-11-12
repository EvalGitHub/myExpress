var entries =[
  {"id":1,"title":"第一篇","body":"正文1","published":'4-1-2017'},
  {"id":2,"title":"第二篇","body":"正文2","published":'4-2-2017'},
  {"id":3,"title":"第三篇","body":"正文3","published":'4-3-2017'},
  {"id":4,"title":"第四篇","body":"正文4","published":'4-4-2017'},
  {"id":5,"title":"第五篇","body":"正文5","published":'4-5-2017'},
  {"id":6,"title":"第六篇","body":"正文6","published":'4-6-2017'},
  {"id":7,"title":"第七篇","body":"正文7","published":'4-7-2017'},
];

exports.getBlogEntries = function(){
  return entries;
};

exports.getBlogEntry = function(id){
  for(var i =0;i<entries.length;i++){
    if(entries[i].id == id)
      return entries[i];
  }
};
