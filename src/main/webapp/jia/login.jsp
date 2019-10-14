<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>1号店登录</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/jia/styleType.css">
</head>
<body>
<form action="/login" method="post">
    <div class="wrapper">
        <div class="login-header">
            <img class="picture1" src="/static/dist/imgs/picture1.png">
            <div class="lable-card">
                <span class="lable">您好，欢迎光临1号店！</span>
                <a class="login-lable" href="/login">请登录</a>
                <span>帮助中心</span>
            </div>
        </div>
        <div class="login-content">
            <img class="picture2" src="/static/dist/imgs/picture2.png">
            <div class="login-card">
                ${msg}
                <span class=""user-login>1号店用户登录</span>
                <a class="register" href="/register">注册新账号</a>
                <input class="login-input" type="text" placeholder="邮箱/手机/用户名" name="username">
                <input class="login-input" type="password" placeholder="密码" name="password">
                <div class="login-lable">
                    <input class="checkbox" type="checkbox">
                    <span class="automatic-login">自动登录</span>
                    <a class="forget-password" href="/forgetPassword">忘记密码？</a>
                </div>
                <button type="submit" class="btn-login">登录</button>
                <div class="more">更多合作网站账号登录</div>
                <div>git branch --set-upstream-to=origin/master master
                    <button class="login-qq"></button>

                    <button class="login-weixin"></button>
                </div>
            </div>
        </div>
    </div>
</form>
</body>
</html>