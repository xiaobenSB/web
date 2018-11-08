网站使用QQ登陆获取用户QQ信息 <br/>

'https://graph.qq.com/oauth2.0/authorize?client_id=101490224&response_type=token&scope=all&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fhome'

"response_type=token"  // 获取access_token，设置这个会把access_token以get方式（）添加到你设置的redirect_uri登陆成功回调的地址上
"client_id=101490224" // 应用的appid  也就是打开QQ登陆时显示是哪个应用要获取QQ信息
redirect_uri = 地址    登陆成功回调的地址
