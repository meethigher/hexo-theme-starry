## Starry主题

欢迎使用

语言：

1. [English](https://github.com/meethigher/hexo-theme-starry/blob/master/README.en.md)
2. 中文

![Starry]( https://d33wubrfki0l68.cloudfront.net/a01d67aa4c9ed9597c21e06eaa91ca499a3f2d3c/fc9cc/themes/screenshots/starry.jpg )

闲得没事写的，预览：[I'm Kit Chen](https://meethigher.top/)

本主题采用的是less跟ejs开发的。 

直接下载可能不能使用，需要安装less

```npm
$ npm install hexo-renderer-less --save
```

 安装searchdb插件

```npm
$ npm install hexo-generator-searchdb --save
```

安装hexo-neat插件

```npm
$ npm install hexo-neat --save
```

安装hexo-lazyload-image

```npm
$ npm install hexo-lazyload-image --save
```

如果你想要置顶的时候，就这样设置

```markdown
---
title: xxx
date: xxx
tags: xxx
top: 5
---
```

> 举个例子，top:5 和 top:4 ,5的值较大，5会排在前面
>
> 参考文章：https://blog.csdn.net/nineya_com/article/details/103394315

需要修改`node_modules\hexo-generator-index\lib\generator.js`

```js
'use strict';
var pagination = require('hexo-pagination');
module.exports = function(locals){
  var config = this.config;
  var posts = locals.posts;
    posts.data = posts.data.sort(function(a, b) {
        if(a.top && b.top) { // 两篇文章top都有定义
            if(a.top == b.top) return b.date - a.date; // 若top值一样则按照文章日期降序排
            else return b.top - a.top; // 否则按照top值降序排
        }
        else if(a.top && !b.top) { // 以下是只有一篇文章top有定义，那么将有top的排在前面（这里用异或操作居然不行233）
            return -1;
        }
        else if(!a.top && b.top) {
            return 1;
        }
        else return b.date - a.date; // 都没定义按照文章日期降序排
    });
  var paginationDir = config.pagination_dir || 'page';
  return pagination('', posts, {
    perPage: config.index_generator.per_page,
    layout: ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  });
};
```

如果想要关闭某一篇文章的评论功能

```markdown
---
title: xxx
date: xxx
tags: [xxx,xxx]
comments: false
---
```

生成about

```npm
$ hexo new page about
```

文章的格式

```markdown
---
title: helloworld
date: 2020-05-19 09:26:20
comments: false
mathjax: false
tags: xxx
top: true
---

此处是文章简介

<!--more-->

此处是文章内容

```

这是我的_config.yml

```npm
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site 网站配置
title: 言成言成啊
subtitle: Kit Chen's Blog
description: 言成的个人博客网站，meethigher寓意为相逢在更高处，这里面记录着我的感情、学习和生活
keywords: 个人网站，个人博客，meethigher，学习，生活
author: 言成
language: zh-CN
## 时区
timezone:
## hexo3.9.0+以上支持禁用meta_generator标签
meta_generator: false

# URL
## 如果你的网站是放在子文件夹下，root路径就可以设置成/xxx/，否则的话，直接/就行
url: https://meethigher.top/blog/
root: /blog/
## permalink: :year/:month/:day/:title/
permalink: :year/:title/
permalink_defaults:

# Directory 目录
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:

# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
filename_case: 0
render_drafts: false
post_asset_folder: true
relative_link: false
future: true
highlight:
  enable: true
  line_number: true
  auto_detect: true
  #我将tab设置成了2个空格，可以自定义
  tab_replace:   
  
# Home page setting 主页设置
# path: Root path for your blogs index page. (default = '')
# per_page: Posts displayed per page. (0 = disable pagination) 分页设置为0的时候表示禁用
# order_by: Posts order. (Order by date descending by default) -date表示按时间排序
index_generator:
  path: ''
  per_page: 10
  order_by: -date
## 禁用tag分页
tag_generator:
  per_page: 0
  enable_index_page: true
## 禁用archive分页
archive_generator:
  per_page: 0
  yearly: false
  monthly: false
# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss

# Pagination 分页
## Set per_page to 0 to disable pagination 我设置了主页和标签页，每页显示10个
per_page: 10
pagination_dir: page

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: starry

# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type:

# 站内搜索功能
# 安装插件npm install hexo-generator-searchdb --save
search:
  path: meethigher.json
  field: post
  content: true
  format: raw

# hexo-neat
# 安装插件npm install hexo-neat --save
# 博文压缩
neat_enable: false
# 压缩html
neat_html:
  enable: true
  exclude:
# 压缩css  
neat_css:
  enable: true
  exclude:
    - '**/*.min.css'
# 压缩js
neat_js:
  enable: false
  mangle: true
  output:
  compress:
  exclude:
    - '**/*.min.js'
# 评论配置，下面的内容，换成自己的
# http://blog.poetries.top/2018/11/20/hexo-comment/具体可参照这个大佬的博客
gitalk:
  enable: true
  githubID: meethigher
  repo: meethigher.github.io #在github上建一个public的库，不一定是github.io，也可以是comments，总之随意了
  owner: meethigher
  ClientID: 84249
  ClientSecret: a032ae7096
  adminUser: meethigher #指定可初始化评论账户
  distractionFreeMode: true #类似于Facebook的分散注意力模式

# hexo-lazyload-image插件，为了适应该主题，部分内容经过修改了。
lazyload:
  enable: true
  onlypost: false
  loadingImg: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC
  isSPA: false
```

尽情使用吧！

我的邮箱：meethigher@qq.com/meethigher@gmail.com



