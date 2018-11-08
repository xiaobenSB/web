网站使用QQ登陆获取用户QQ信息 <br/> QQ实名验证的应用id(client_id) ->  accesss_token -> openid = 用户信息

'https://graph.qq.com/oauth2.0/authorize?client_id=101490224&response_type=token&scope=all&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fhome'  //这个接口可以调用qq需要登陆界面

"response_type=token"  // 获取access_token，设置这个会把access_token以get方式（）添加到你设置的redirect_uri登陆成功回调的地址上 <br/>
"client_id=101490224" // 应用的appid  也就是登陆成功时该QQ上显示是哪个应用要获取QQ信息  <br/>
redirect_uri = 地址    登陆成功回调的地址 <br/>
<br/>
https://graph.qq.com/oauth2.0/me?access_token=获取到的access token    //这个是拿获取到access token去获取 openid和client_id  (用户和应用标识id)
<br/>
https://graph.qq.com/user/get_user_info?access_token= (access token)  &oauth_consumer_key= (client_id) &openid= (openid) //这样就可以获取到该网站登陆QQ的用户信息




//前端代码示例  这个是只需要获取到access token就可以获取到登陆的QQ用户信息，上面需要自己获取，下面是QQjdk帮我们获取


<!DOCTYPE html>
<html>
<head><title>qq_connect login demo</title>


<body>

<span id="a"> </span>
<script src="http://localhost:3000/static/js/jquery.min.js"></script>
<script src="http://connect.qq.com/qc_jssdk.js" data-appid="101490224" data-redirecturi="http://localhost:3000/home" charset="utf-8"></script>  <!--QQjssdk-->
<script>
$(function () {

    // jssdk初始化时会从url的hash里获取access_token，http://localhost:3000/home/params?#access_token=xxx
    // 或者直接把access_token传入进行初始化{btnId:'login-btn', access_token:'xxx'}
    QC.Login(   //qq登陆jssdk 
    //默认会添加一个QQ登陆图片到该id dom里（包含获取access_token的地址（qq需要登陆界面），配合上面script上写的data-appid="101490224" data-    redirecturi="http://localhost:3000/home"）
        {btnId:'a'},    
        function (reqData, opts) { 
        //如果当前路由后面为?#access_token=xx,QQjssdk就会检测到，如果access_token是正确的，这个方法就会被执行（回调的参数就是用户信息），上面默认添加就不生效了
            //根据返回数据，更换按钮显示状态方法
            //注意:传入此方法则需要自己渲染按钮
            var dom = document.getElementById(opts['btnId']),
                _logoutTemplate=[
                    //头像
                    '<span><img src="{figureurl}" class="{size_key}"/></span>',
                    //昵称
                    '<span>{nickname}</span>',
                    //退出
                    '<span><a href="javascript:QC.Login.signOut();">退出</a></span>'
                ].join("");
            dom && (dom.innerHTML = QC.String.format(_logoutTemplate, {   //往上面设置id的dom结构里加dom
                nickname : QC.String.escHTML(reqData.nickname), //做xss过滤
                figureurl : reqData.figureurl
            }));
			console.log(reqData)
        },
        function (opts) {
            console.log('QQ登录 注销成功 !')
        }
    )

    // 通过jssdk调用api
    // 具体参数请参考 => http://wiki.connect.qq.com/api%e5%88%97%e8%a1%a8
   
})
</script>
</body>




</html>

