let imgs = $(".post-content.blog-markdown img");
if (imgs.length > 0) {
    imgs.each(function (i, ele) {
        let src = $(ele).attr("src");
        $(ele).attr("data-original", src).removeAttr("src");
    });
    imgs.lazyload({
        effect: "fadeIn"
    });
}
