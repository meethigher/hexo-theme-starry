$(function (){
    let $menu=$(".header-menu");
    let $headerNavbar=$(".header-navbar");
    let $arrowUp=$(".arrow.fa-arrow-up");
    let $arrowDown=$(".arrow.fa-arrow-down");
    let $mainContent=$(".main-content");
    let $copy=$("figure.highlight tbody");
    let flag=false;
    let isClick=true;
	printDefaultLog();
	function printDefaultLog(){
		console.log("%c@description:言成的个人博客\n@author:言成言成啊\n@link:https://meethigher.top/\n@createDate:2019-09-16","font-size:18px; font-weight:bold; color:#24a0f0;")
	}
    $menu.on("click",function (){
        if(!isClick) return;
        isClick=false;
        if(!flag){
            $headerNavbar.fadeIn(function (){
                flag=true;
                isClick=true;
            });
            return;
        }
        $headerNavbar.fadeOut(function (){
            flag=false;
            isClick=true;
        });
    });
    $arrowUp.on("click",function (){
        $mainContent.animate({
            scrollTop:0
        });
    });
    $arrowDown.on("click",function (){
        let scrollHeight=$mainContent[0].scrollHeight-$mainContent[0].offsetHeight;
        $mainContent.animate({
            scrollTop: scrollHeight
        });
    });
    $mainContent.scroll(function (){
        $arrowUp.fadeIn();
        $arrowDown.fadeIn();
    });
    $copy.on("click",function (){
        let $pre=$(this).find(".code pre");
        let text=$pre.text();
        let $input=$("<input>");
        let $copySuccess=$("<span>success</span>");
        $copySuccess.addClass("before");
        $input.val(text);
        $(this).append($copySuccess);
        $pre.append($input);
        $input.select();
        document.execCommand("Copy");
        $input.remove();
        setTimeout(function (){
            $copySuccess.remove();
        },1500);
    });
    let getLanguage=function (){
        $("figure.highlight").each(function (){
            let str=$(this).attr("class");
            str=str.substr(10);
            let $span=$("<span class='language'>"+str+"</span>");
            $(this).append($span);
        });
    };
    getLanguage();
});