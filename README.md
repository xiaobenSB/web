# web

推荐用bootstaps做响应式官网展示（搭建快）
可以参考: https://v3.bootcss.com/getting-started/    该链接页面最下面有案例
下面为bootstaps响应式的优点  
/*
   *   bootstaps使用的.col-对应的是媒体查询，作用是当屏幕（@media (min-width:992px)）小于992px时，该媒体查询设置不生效
   *   该方式布局有个好处：当媒体查询失效时，原本使用媒体查询 的标签就会独占一行，因为他原本就是块级元素
   *   因为只有媒体查询才有： float:left; width:xx%;   设置
   *
   *   最外层可以设置(.container-fluid和.container)class样式
   *   .container-fluid 为window宽度的100%，但有padding-left padding-right
   *   .container 限制了最大宽度为 width: 1170px;
   *   .jumbotron 是依赖于上面两个class的
   *
 *  .col-xs-这个没有设置媒体查询，是设置在class，(媒体查询生效清空下)说明了媒体查询的样式级别低，class再到媒体查询，所以媒体查询会覆盖掉class,
   *       所以设置.col-xs-就代表要永远使用：width:xx%;和float:left;了，因为不会失效
 *  .col-xs-    为：  超小屏幕(手机)    < 768px 时就会触发                
 *  .col-sm-    为：  小屏幕(平板)        >=768px 时就会触发                                     @media (min-width: 768px)   
 *  .col-md-    为：  中等屏幕(桌面显示器)        >=992px 时就会触发                 @media (min-width:992px)
 *  .col-lg-    为：  大屏幕(大桌面显示器)        >=1200px 时就会触发               
 *
   *      上面的.col-    都设置了： position:relative;  min-height:1px; padding-right和left:  15px;  
   *       一般情况下，我们如果要适应手机，电脑布局的话只需要上面三种   .col-xs-   .col-sm-   .col-md-
   *       因为   .col-md-和.col-lg-有冲突，一个大于或等于992，一个是大于或等于1200 ，当屏幕大于991时，两个对应的媒体查询都能生效
   *       不过需要注意:      当屏幕大于1199时，   .col-lg-生效  .col-md-不生效，说明了991的优先级高，1199的优先级低
   *
   *      注意：如果媒体查询不生效了，由于媒体查询的优先级低才会覆盖掉我们之前设的class,那么它不生效了，我们之前设的class就可以显示了 
 */


移动端框架 SUI Mobile      地址： http://m.sui.taobao.org/

微信小程序框架 Touch wx    地址： http://www.wetouch.net/touchwx_doc/

移动app框架  react-native

前端的一些知识

正则表达式:  var a = "wopl";a.match(/(wo)/);  //["wo", "wo", index: 0, input: "wopl"]  <br/>
            a.match(/(wo)/g);  //["wo"], 所以加g好点    <br/>
     不过注意：var a = "woplwopewo";a.match(/(wo)+/g);  //["wo","wo","wo"] <br/>

background: url(http://xxxxx) no-repeat 80%/50%;  (80%这个是配合50%的，如果是50%，那么图片宽高会相对所装盒子自身的50%大小，而这时的80%因为图片是50%没有装满盒子，那么剩下的宽度空间就(100%)会用来判断这个80%,80%就图片左边占剩余空间80%，右边20%，没有剩余空间的话这个设置就无效)

使用dispaly:flex布局时，如果你使用align-items: center这个样式时（子集节点从父级y轴的中心排列），如果子集节点的高度不一致，那么他们的top会不一致，因为这个css3是确保子集的y轴中心对准父级的y轴中心的，所以我们如果想子集的top对齐时，不能设置这个.我们可以设置 justify-content: space-between;把子集依次排列，然后使用padding(或者只设置padding-top和bottom),让他们有类似于居中的效果

var Reg = /[a-z]+\.[a-z]+|[a-z]+/g;  //假如匹配/www/wwww.w 正则匹配规则：先去校验|前面的，当前面的校验不了才到|后面的校验，如果后面有/g就去跟当前所有字符匹配，所以就是一个字一个字的去匹配，匹配不到就到下一个直到最后一个字符才停止， 而这里用的就是先匹配xx.xx没有才匹配xx,如果|反过来，那么就匹配到xxx，但遇到·就不能匹配，因为.前面的已经被匹配了，剩下的就只有.或.xxx了,所以思路为： 有可能匹配到的放第一，有可能能匹配到前面匹配的放最后
