<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>1号店注册</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/jia/styleType.css">
</head>
<body>
<div class="wrapper">
    <div class="login-header">
        <img class="picture1" src="/static/dist/imgs/picture1.png">
        <div class="lable-card">
            <span class="lable">您好，欢迎光临1号店！</span>
            <a class="login-lable" href="/login">请登录</a>
            <span>帮助中心</span>
        </div>
    </div>
    <div class="register-content">
        <div class="register-card">
            <div class="register-lable">1号店注册</div>
            <input class="username" placeholder="用户名">
            <input class="phone" placeholder="手机号">
            <div class="authcode-card">
                <input class="authcode" placeholder="短信验证码">
                <button class="btn-authcode">获取验证码</button>
            </div>
            <input class="password" placeholder="设置密码">
            <input class="confirmpassword" placeholder="确认密码">
            <div>
                <span class="agree">点击注册，表示您同意1号店</span>
                <a class="service" href="http://cms.yhd.com/cms/view.do?topicId=10">《服务协议及隐私声明》</a>
            </div>
            <button class="btn-register" onclick="">同意协议并注册</button>
        </div>
    </div>
</div>
</body>
</html>