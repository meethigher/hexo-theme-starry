$(function () {
    let $about = $(".about");
    let $aside = $(".aside");
    let $asideContent = $(".aside-content");
    let $divs = $(".aside-content div");
    let flag = false;
    let isClick = true;
    let isRotate = false;

    let $lis = $(".aside-contact li");

    //about点击事件
    $about.on("click", function () {
        if (!isClick) return;
        isClick = false;
        if (flag) {
            $asideContent.removeClass("in");
            flag = false;
            return;
        }
        $aside.fadeIn();
        $asideContent.addClass("in");
        flag = true;
        $asideContent.on("transitionend", function () {
            if (!$asideContent.hasClass("in")) {
                $aside.hide();
            }
            isClick = true;
        });
    });

    //contact经过事件
    $lis.on("mouseover", function () {
        $(this).children("a").addClass("in");
    }).on("mouseleave", function () {
        $(this).children("a").removeClass("in");
    });

    //鼠标经过动态事件
    $divs.on("mouseover",function (){
        $(this).addClass("heartBeat").addClass("animated");
    }).on("mouseleave",function (){
        $(this).removeClass("heartBeat");
    });

});