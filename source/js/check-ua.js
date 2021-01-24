var Sys = {};
var ua = navigator.userAgent.toLowerCase();
var temp;
(temp = ua.match(/msie ([\d.]+)/)) ? Sys.ie = temp[1] :
    (temp = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = temp[1] :
        (temp = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = temp[1] :
            (temp = ua.match(/opera.([\d.]+)/)) ? Sys.opera = temp[1] :
                (temp = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = temp[1] : 0;
//以下进行测试
var flag=window.localStorage.getItem("prompt")||0;
if (Sys.safari&&flag=="0") {
    layer.alert("Safari浏览器兼容性差，有必要请更换Chrome浏览器！");
    window.localStorage.setItem("prompt",1);
}