function changeHash(link) {
    let id = link.replace("#", "");
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth' //带动画效果,平滑的滚动
    });
}

$(function () {
    //下面这行是预处理显示样式
    $("figure.highlight tbody").append($("<span class='btn-copy unclick'>Copy</span>"));
    let $menu = $(".header-menu");
    let $headerNavbar = $(".header-navbar");
    let $arrowUp = $(".arrow.fa-arrow-up");
    let $arrowDown = $(".arrow.fa-arrow-down");
    let $mainContent = $(".main-content");
    let $copy = $("figure.highlight .btn-copy");
    let $header = $(".header");
    let flag = false;
    let isClick = true;
    let current = window.scrollY;
    let $donationBtn = $(".post-donation-btn");
    let $shareBtn = $(".post-share-btn");
    let $imgs = $(".post-content img");
    let src = $(".post-btn img").attr("src");
    printDefaultLog();

    $mainContent.animate({"opacity": "1"});
    $donationBtn.on("click", function () {
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            shadeClose: true,
            skin: 'yourclass',
            content: '<img src=' + src + ' width="320px" height="500px">'
        });
    });
    $shareBtn.on("click", function () {
        let text = $(".shareUrl").text();
        let $input = $("<textarea>");
        $input.val(text);
        $(this).append($input);
        $input.select();
        document.execCommand("Copy");
        $input.remove();
        layer.alert('已复制分享链接，可以分享给别人啦');
    });
    //[jquery实现点击图片全屏查看功能 - 简书](https://www.jianshu.com/p/ee2a9dad2caa)
    $imgs.on("click", function () {
        let src = $(this).attr("src");
        let opacityBottom = '<div class="opacityBottom" style = "display:none;"><img class="bigImg" src="' + src + '"></div>';
        $(document.body).append(opacityBottom);
        //变大函数
        toBigImg(window.scrollY);
    });

    function toBigImg(h) {
        let opacityBottom = $(".opacityBottom");
        opacityBottom.addClass("opacityBottom");//添加遮罩层
        opacityBottom.show();
        $mainContent.hide();
        // $("html,body").addClass("none-scroll");//下层不可滑动
        $(".bigImg").addClass("bigImg");//添加图片样式

        opacityBottom.click(function () {//点击关闭
            // $("html,body").removeClass("none-scroll");
            $(".opacityBottom").remove();
            $mainContent.show();
            window.scrollTo(window.scrollX, h);
        });

    }

    function printDefaultLog() {
        console.log("%c@theme：Starry\n@author：Kit Chen\n@link：https://github.com/meethigher/hexo-theme-starry\n@createDate：2019-09-16\n@页面加载耗时：" + (performance.now() / 1000).toFixed(2) + "秒", "font-size:18px; font-weight:bold; color:#24a0f0;")
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
        let $pre = $(this).parent().find(".code pre");
        let $line = $(this).parent().find(".code .line");
        let text = "";

        $line.each(function (i) {
            if (i == 0) {
                text = $(this).text();
            } else {
                text = text + "\n" + $(this).text();
            }
        });
        let $input = $("<textarea>");
        let $copySuccess = $("<span>Success</span>");
        $copySuccess.addClass("before");
        $(this).removeClass("unclick").addClass("click");
        $input.val(text);
        $(this).parent().append($copySuccess);
        $pre.append($input);
        $input.select();
        document.execCommand("Copy");
        $input.remove();
        setTimeout(function () {
            $copy.addClass("unclick").removeClass("click");
            $copySuccess.remove();
        }, 1500);
    });
    let getLanguage = function () {
        $("figure.highlight").each(function () {
            // let str = $(this).attr("class");
            // str = str.substr(10);
            // let $span = $("<span class='language'>" + str + "</span>");
            let $span = $("<span class='language'>Code</span>");
            $(this).append($span);
        });
    };
    getLanguage();

    $(window).on("scroll", function () {
        let currentY = this.scrollY;
        let direction = currentY > current;//大于0表示下滑，导航栏隐藏；小于0表示上滑，导航栏显示
        if (this.scrollY < 65) {
            $header.removeClass("out");
        } else {
            direction > 0 ? $header.removeClass("in").addClass("out") : $header.removeClass("out").addClass("in");
        }
        current = currentY;
    });
    $(".up").on("click", function () {
        window.scrollTo(0, 0);
    });
    $(".down").on("click", function () {
        let t_height = document.body.scrollHeight;
        let w_height = window.innerHeight;
        window.scrollTo(0, t_height - w_height);
    });
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
                spaceNum = 0;
                break;
            case "H2":
                spaceNum = 1;
                break;
            case "H3":
                spaceNum = 2;
                break;
            case "H4":
                spaceNum = 3;
                break;
            case "H5":
                spaceNum = 4;
                break;
            case "H6":
                spaceNum = 5;
                break;
        }
        let content = $(this).attr("title");
        let $li = $("<li></li>");
        //let $a = $("<a href='" + $(this).attr("href") + "'>" + content + "</a>");
        // "<a onclick='changeHash('" + $(this).attr("href") + "')'>" + content + "</a>";
        let href = $(this).attr("href");
        let aLink = "<a onclick='changeHash(\"" + href + "\")'>" + content + "</a>";
        let $a = $(aLink);
        $li.append($a);
        $li.css("margin-left", spaceNum * 10 + "px");
        $catalog.append($li);
    });
    $outline.on("click", function () {
        layer.open({
            title: "大纲目录",
            type: 1,
            skin: 'layui-layer-rim', //加上边框
            area: ['320px', '240px'], //宽高
            content: "<div class='catalog-container'><ul>" + $catalog.html() + "</ul></div>"
        });
    });
});
//搜索功能
$(function () {
    $(".header-search").on("click", function () {
        $(".search").click();
    });
    $(window).on("keydown", function (e) {
        //ctrl+shift+f换起站内搜索
        if (e.shiftKey && e.ctrlKey && e.keyCode == "70") {
            e.preventDefault();
            $(".search").click();
        }
        // //阻止f12事件，提示一个弹框
        // if (e.keyCode == "123") {
        //     //阻止默认事件
        //     e.preventDefault();
        //     layer.msg("有问题欢迎发送邮件到meethigher@qq.com");
        // }
    });
    //=============================================
    let url = [];
    let title = [];
    let content = [];
    let ajaxing = false;
    let loadingIndex;

    function ajaxSearch() {
        if (url.length == 0 || title.length == 0 || content.length == 0) {
            // console.log("数据初次加载");
            loadingIndex = layer.load(1, {shade: [0.1, '#fff']});
            ajaxing = true;
            $.ajax({
                url: "/blog/meethigher.json",//此处需要修改成你的路径
                dataType: "json",
                type: "GET",
                error: function () {
                    layer.msg("请检查你的配置哦，亲❤~");
                },
                success: function (data) {
                    //如果是xml格式，请用下面
                    // $(data).each(function () {
                    //     url.push($(this).find("url").text());
                    //     title.push($(this).find("title").text());
                    //     content.push($(this).find("content").text());
                    // });
                    //如果是json格式，请用下面
                    for (let index in data) {
                        let searchContent = data[index];
                        url.push(searchContent["url"]);
                        title.push(searchContent["title"]);
                        content.push(searchContent["content"]);
                    }
                },
                complete: function () {
                    ajaxing = false;
                    layer.close(loadingIndex);
                    // console.log("数据加载完成");
                }
            });
        }

    }

    function searchResult($result, value) {
        let count = 0;
        let index = layer.load(1, {shade: [0.1, '#fff']});
        let timeId = setInterval(function () {
            count++;
            if (!ajaxing) {
                render($result, value);
                clearInterval(timeId);
                layer.close(index);
            }
            if (count >= 15) {
                layer.close(index);
                layer.msg("超时，请检查您的网络哦，亲❤~");
                clearInterval(timeId);

            }
        }, 1000);
    }

    function render($result, value) {
        let isContains = false;
        content.forEach(function (ele, index) {
            if (ele.indexOf(value) > -1) {
                let $li = $("<li><a href='" + url[index] + "'>" + title[index] + "</a></li>");
                $result.append($li);
                isContains = true;
            }
        });
        if (!isContains)
            layer.msg("没有你要的内容哦，亲❤~");
    }


    $(".search").on("click", function () {
        layer.open({
            title: "站内搜索",
            type: 1,
            skin: 'layui-layer-rim', //加上边框
            area: ['320px', '240px'], //宽高
            content: "<div class=\"search-container\">\n" +
                "    <input type=\"search\" placeholder=\"搜索\" id=\"input\" autocomplete=\"off\">\n" +
                "    <div class=\"btn-search\"><span class=\"fa fa-search\"></span></div>\n" +
                "    <ul class=\"result\"></ul>\n" +
                "</div>"
        });
        ajaxSearch();
        let $input = $("#input");
        let $button = $(".btn-search");
        let $result = $(".result");
        $input.on("keydown", function (e) {
            if (e.which === 13) {
                $button.click();
            }
        });
        $button.on("click", function () {
            $result.empty();
            let value = $input.val();
            if (value === "" || value === null) {
                layer.msg("请输入你要搜索的内容哦，亲❤~");
                return;
            }
            searchResult($result, value);
        });
    });

});
//网站运行时间
$(function () {
    let day = 0, hour = 0, minute = 0, second = 0;

    function timer(timestamp) {
        if (timestamp > 0) {
            day = Math.floor(timestamp / (60 * 60 * 24));
            hour = Math.floor(timestamp / (60 * 60)) - (day * 24);
            minute = Math.floor(timestamp / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(timestamp) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (day <= 9) day = '0' + day;
        if (hour <= 9) hour = '0' + hour;
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        $("#d").text(day);
        $("#h").text(hour);
        $("#m").text(minute);
        $("#s").text(second);
    }

    //获取开始时间
    let beginTime = $(".begin").text() || "2020-04-01 00:00:00";
    window.setInterval(function () {
        let res = Math.floor(Date.now() / 1000 - Date.parse(new Date(beginTime)) / 1000);
        timer(res);
    }, 1000);
});
