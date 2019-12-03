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

Add the following to _config.yml

```npm
search:
  path: meethigher.xml
  field: post
  format: html
  limit: 10000
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