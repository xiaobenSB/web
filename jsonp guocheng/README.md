jsonp的好处： 利用js的script标签src引入的数据可以避免发生跨域，而且如果后台设置返回的是一个字符串，如：'xx()',经过script的src处理它会变为xx(),就不是
字符串而是一个执行方法，会帮你把引号去掉等同变量，所以如果传标签过来的话就没意义了，又不会映射在页面上。<br/>
<br/>
注意: function a(b){  console.log(b)   }; var b = {a:1};  a(''+b+'');   //[object Object]    这个可能是解析到a()里的''时，发现是字符串然后用字符
串解析方式来解析，再然后发现拼接的是对象，然后把他解析为[object Object]。   var a = ''+{a}+'';console.log(a) //[object Object] 
