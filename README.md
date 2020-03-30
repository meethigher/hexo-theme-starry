## hexo-theme-starry

Welcome!

Language:

1. English
2. [中文](https://github.com/meethigher/hexo-theme-starry/blob/master/README.zn.md)

![Starry](Starry.png)

I finished it in my spare time，preview：[言成言成啊](https://meethigher.top/)

Starry is developed by `Less` and `Ejs`.

You can't use it directly, unless you have installed `Less`

```npm
$ npm install hexo-renderer-less --save
```

 Install searchdb

```npm
$ npm install hexo-generator-searchdb --save
```

Install hexo-neat

```npm
$ npm install hexo-generator-searchdb --save
```

Add the following to _config.yml

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

Set the path of root(Not required, but may cause other problems)

```npm
# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: 你的网站地址
root: /blog/
```

Enjoy using it!

E-mail：meethigher@qq.com/meethigher@gmail.com