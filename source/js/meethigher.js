$(function () {
    let $menu = $(".header-menu");
    let $headerNavbar = $(".header-navbar");
    let $arrowUp = $(".arrow.fa-arrow-up");
    let $arrowDown = $(".arrow.fa-arrow-down");
    let $mainContent = $(".main-content");
    let $copy = $("figure.highlight tbody");
    let flag = false;
    let isClick = true;
    printDefaultLog();

    function printDefaultLog() {
        console.log("%c@description:言成的个人博客\n@author:言成言成啊\n@link:https://meethigher.top/\n@createDate:2019-09-16", "font-size:18px; font-weight:bold; color:#24a0f0;")
    }

    $menu.on("click", function () {
        if (!isClick) return;
        isClick = false;
        if (!flag) {
            $headerNavbar.fadeIn(function () {
                flag = true;
                isClick = true;
            });
            return;
        }
        $headerNavbar.fadeOut(function () {
            flag = false;
            isClick = true;
        });
    });
    $arrowUp.on("click", function () {
        $mainContent.animate({
            scrollTop: 0
        });
    });
    $arrowDown.on("click", function () {
        let scrollHeight = $mainContent[0].scrollHeight - $mainContent[0].offsetHeight;
        $mainContent.animate({
            scrollTop: scrollHeight
        });
    });
    $mainContent.scroll(function () {
        $arrowUp.fadeIn();
        $arrowDown.fadeIn();
    });
    $copy.on("click", function () {
        let $pre = $(this).find(".code pre");
        let text = $pre.text();
        let $input = $("<input>");
        let $copySuccess = $("<span>success</span>");
        $copySuccess.addClass("before");
        $input.val(text);
        $(this).append($copySuccess);
        $pre.append($input);
        $input.select();
        document.execCommand("Copy");
        $input.remove();
        setTimeout(function () {
            $copySuccess.remove();
        }, 1500);
    });
    let getLanguage = function () {
        $("figure.highlight").each(function () {
            let str = $(this).attr("class");
            str = str.substr(10);
            let $span = $("<span class='language'>" + str + "</span>");
            $(this).append($span);
        });
    };
    getLanguage();
});
//生成文章的目录
$(function () {
    let $outline = $(".outline");
    let $catalog = $("<ul></ul>");
    let $headerlink = $(".headerlink");
    $headerlink.each(function () {
        let spaceNum = "";
        switch ($(this).parent()[0].tagName) {
            case "H1":
                spaceNum = "";
                break;
            case "H2":
                spaceNum = "   ";
                break;
            case "H3":
                spaceNum = "     ";
                break;
            case "H4":
                spaceNum = "       ";
                break;
            case "H5":
                spaceNum = "         ";
                break;
            case "H6":
                spaceNum = "           ";
                break;
        }
        let content = $(this).attr("title");
        let $li = $("<li></li>");
        let $a = $("<a></a>");
        $a.attr("href", $(this).attr("href"));
        $a.text(spaceNum+content);
        $li.append($a);
        $li.css("padding-left", spaceNum + "px");
        $catalog.append($li);
    });
    $outline.on("click", function () {
        layer.open({
            title: "大纲目录",
            type: 1,
            skin: 'layui-layer-rim', //加上边框
            area: ['300px', '240px'], //宽高
            content: "<ul>"+$catalog.html()+"</ul>"
        });
    });
});