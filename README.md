# web

<img src="" />

移动端框架 SUI Mobile      地址： http://m.sui.taobao.org/

微信小程序框架 Touch wx    地址： http://www.wetouch.net/touchwx_doc/

移动app框架  react-native

前端的一些知识

background: url(http://xxxxx) no-repeat 80%/50%;  (80%这个是配合50%的，如果是50%，那么图片宽高会相对所装盒子自身的50%大小，而这时的80%因为图片是50%没有装满盒子，那么剩下的宽度空间就(100%)会用来判断这个80%,80%就图片左边占剩余空间80%，右边20%，没有剩余空间的话这个设置就无效)

使用dispaly:flex布局时，如果你使用align-items: center这个样式时（子集节点从父级y轴的中心排列），如果子集节点的高度不一致，那么他们的top会不一致，因为这个css3是确保子集的y轴中心对准父级的y轴中心的，所以我们如果想子集的top对齐时，不能设置这个.我们可以设置 justify-content: space-between;把子集依次排列，然后使用padding(或者只设置padding-top和bottom),让他们有类似于居中的效果

var Reg = /[a-z]+\.[a-z]+|[a-z]+/g;  //假如匹配/www/wwww.w 正则匹配规则：先去校验|前面的，当前面的校验不了才到|后面的校验，如果后面有/g就去跟当前所有字符匹配，所以就是一个字一个字的去匹配，匹配不到就到下一个直到最后一个字符才停止， 而这里用的就是先匹配xx.xx没有才匹配xx,如果|反过来，那么就匹配到xxx，但遇到·就不能匹配，因为.前面的已经被匹配了，剩下的就只有.或.xxx了,所以思路为： 有可能匹配到的放第一，有可能能匹配到前面匹配的放最后
