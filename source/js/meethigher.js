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
		let $a = $("<a href='" + $(this).attr("href") + "'>" + content + "</a>");
		$li.append($a);
		$li.css("margin-left",spaceNum*10+"px");
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
$(function (){
	$(".header-search").on("click",function (){
		$(".search").click();
	});
    //=============================================
    let url = [];
    let title = [];
    let content = [];
    let ajaxing = false;

    function ajaxSearch() {
    	if(url.length==0||title.length==0||content.length==0){
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
				for(let index in data){
					let searchContent=data[index];   
					url.push(searchContent["url"]);
					title.push(searchContent["title"]);
					content.push(searchContent["content"]);
				}
			},
			complete: function () {
				ajaxing = false;
			}
		});
    	}

    }

    function searchResult($result,value) {
    	let count = 0;
    	let index= layer.load(1, {shade: [0.1, '#fff']});
    	let timeId = setInterval(function () {
    		count++;
    		if (!ajaxing) {
    			render($result,value);
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

    function render($result,value) {
    	let isContains=false;
    	content.forEach(function (ele,index){
    		if(ele.indexOf(value)>-1){
    			let $li=$("<li><a href='"+url[index]+"'>"+title[index]+"</a></li>");
    			$result.append($li);
    			isContains=true;
    		}
    	});
    	if(!isContains)
    		layer.msg("没有你要的内容哦，亲❤~");
    }
    //================================================

    $(".search").on("click",function (){
    	ajaxSearch();
    	layer.open({
    		title: "站内搜索",
    		type: 1,
            skin: 'layui-layer-rim', //加上边框
            area: ['320px', '240px'], //宽高
            content: "<div class=\"search-container\">\n" +
            "    <input type=\"search\" placeholder=\"搜索\" id=\"input\" autocomplete='off'>\n" +
            "    <div class=\"btn-search\"><span class=\"fa fa-search\"></span></div>\n" +
            "    <ul class=\"result\"></ul>\n" +
            "</div>"
        });
    	let $input=$("#input");
    	let $button=$(".btn-search");
    	let $result=$(".result");
    	$input.on("keydown",function (e){
    		if(e.which===13){
    			$button.click();
    		}
    	});
    	$button.on("click",function (){
    		$result.empty();
    		let value = $input.val();
    		if(value===""||value===null){
    			layer.msg("请输入你要搜索的内容哦，亲❤~");
    			return;
    		}
    		searchResult($result,value);
    	});
    });

});