# JavaScript URL Variable Parser
Written in vanilla JavaScript, This code allows you to take a link & extract
the PHP variables at the end of the url, parses them, then stores each
variable individually in the window.location.variables object.

For an example, a link like "https://wwww.example.com/?token=123abc456def&mobile=true", window.link.variables would return:
```
{
  token : "123abc456def",
  mobile : true;
}
```
