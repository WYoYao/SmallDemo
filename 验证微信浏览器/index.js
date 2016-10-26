var text = document.getElementById('text');
text.innerText = window.navigator.userAgent;

var userAgent = window.navigator.userAgent;

text.innerText = /MicroMessenger/i.test(userAgent) ? '微信客户端' : '非微信客户端'