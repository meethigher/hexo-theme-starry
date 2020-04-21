## Starry主题

欢迎使用

语言：

1. [English](https://github.com/meethigher/hexo-theme-starry)
2. 中文

![Starry](Starry.png)

闲得没事写的，预览：[言成言成啊](https://meethigher.top/)

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

在网站下的_config.yml添加

```npm
# 站内搜索功能
# 安装插件npm install hexo-generator-searchdb --save
search:
  path: meethigher.json
  ##当然也可以用xml存储，但是需要打开meethigher.js下的注释
  field: post
  content: true
  format: raw

# hexo-neat
# 安装插件npm install hexo-neat --save
# 博文压缩
neat_enable: true
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
```

设置博客root路径(可以不用设置，但是可能会出现问题)

```npm
# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: 你的网站地址
root: /blog/
```

尽情使用吧！

我的邮箱：meethigher@qq.com/meethigher@gmail.com



