
var http = require('http');
const fs = require('fs');
const zlib = require('zlib');//注意不能同时操作zlib.createxxxx()方法，必须等先开始的执行结束再执行
const file = process.argv[2];  //对应node  xx.js （这里）

var fsFun = {
   file: file,
   createReadStream: function(file){
     return fs.createReadStream(file || this.file);
   },
   createWriteStream: function(file){
     return fs.createWriteStream(file || this.file)
   }
 };

//编译成gzip时做了编码记号，当用gzip编码解析时会解析成编码记号的编码 on是先注册让返回的pipe方法触发，pipe里面是空数据就不会触发大部分on注册的方法

var gzip ={
   //用zlib解析文件编译成gzip编码 放到 writeStream里
   create: function(file,writeStream,callback){
     if(file===undefined) {throw Error('没有找到node命令第二个参数');}//报错并退出该进程

    var createZlib = fsFun.createReadStream().on('error', (err) => {
	    process.stdout.write('file no found\n'); writeStream.writeHead(200, { 'content-type':'text/txt;charset=utf8' });//防止使用gzip来解析
		       writeStream.end('文件找不到');
			   }).pipe(zlib.createGzip())
        .on('data', () => process.stdout.write('文件数据获取到了\n'))  
		.on('end', () => { console.log('已经编译成gzip并清空zlib里的流');callback&&callback() })  //这里说明gzip编码这个方法已经结束了可以用下个回调里的gzip方法了
		.on('error', (err) => process.stdout.write('err'))
		.pipe(writeStream); //虽然fs保错也执行，但传报错信息不会影响这个流zlib.createGzip()，并且这里pipe的是空数据


   },
   // 解析 readStream 文件里的gzip编码并编译成之前未编译前的编码（可能编译成gzip时做了编码记号吧） 放到 newFile
   compile: function(readStream,newFile){
        if(newFile===undefined) return;
		 fsFun.createReadStream(readStream)
		.pipe(zlib.createGunzip()).on('error',function(err){ console.log(err) })
		.pipe(fsFun.createWriteStream(newFile));
		 console.log("gzip文件编译成之前未编译成gzip的编码完成.");
   }
};



http.createServer(function(request, response) {
  if(request.url==="/favicon.ico") return;
  if(request.url==="/a") {    var raw = fs.createReadStream('2.html');   raw.pipe(response);                      return;}
  var raw = fs.createReadStream('1.html');
  //信息头获取来识别是否支持gzip,deflate
  var acceptEncoding = request.headers['accept-encoding'];
  if (!acceptEncoding) {
    acceptEncoding = '';

  }
 acceptEncoding = 'gzip'
  // Note: this is not a conformant accept-encoding parser.
  // See http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3
  //正则匹配来进行判断用什么content-encoding
  if (acceptEncoding.match(/\bdeflate\b/)) {
    response.writeHead(200, { 'content-encoding': 'deflate' });
    raw.pipe(zlib.createDeflate()).pipe(response);

  } else if (acceptEncoding.match(/\bgzip\b/)) {
    //先用gzip编码解析数据再用utf-8编码显示
    response.writeHead(200, { 'content-encoding': 'gzip','content-type':'text/html;charset=utf8' });
	
	 raw.pipe(zlib.createGzip()).pipe(response);

  } else {
    response.writeHead(200, {});
    raw.pipe(response);

  }
}).listen(7000);