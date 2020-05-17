var url = window.location.href;
if(url.match(/\?/)){
  url = url.split("?")[1];
  url = url.split(/\&/g);
  for(i in url){
    var handler = url[i].split("=");
    try {
      window.location.variables[handler[0]] = eval(decodeURIComponent(handler[1]));
    } catch(error){
      window.location.variables[handler[0]] = decodeURIComponent(handler[1]);
    }
  }
}
