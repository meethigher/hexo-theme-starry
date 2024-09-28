# hexo-theme-starry

采用 `Ejs` 跟 `Less` 开发，没什么复杂的技术和逻辑，代码写得也很简单，但是不规范。

只是因为不想用别人的主题，由此诞生了我这一个。目前还不知道如何更好地优化，努力学习中...


## 使用

Instructions

1. [English](https://github.com/meethigher/hexo-theme-starry/blob/master/README.en.md)
2. [中文](https://github.com/meethigher/hexo-theme-starry/blob/master/README.zn.md)

## 更新

* 2024-09-28：设置内容行高是字体的1.5倍，解决内容过密问题。网页标题后缀添加网站名
* 2024-07-21：readme新增**快速开始**
* 2024-06-22：将**基于帧的动画**切换成**基于时间的动画**，在不同的刷新率显示器上都有相同的体验。[参考](https://meethigher.top/blog/2024/animation-and-frames/)。
* 2024-06-02：新增loading图
* 2024-04-08：控制导航栏置顶时才会展示，并且移动端跟PC端的逻辑保持一致(之前只有移动端会显示/隐藏导航栏)
* 2023-12-28：表格移除左右滑动效果，改为100%展示且内容可换行
* 2023-11-26：调整字体高亮背景色
* 2023-11-06：由JS操作样式改为CSS操作样式，解决了跳转时由于JS加载过慢导致的白屏问题。
* 2023-10-29：文章详情中，标题下方展示时间、标签
* 2023-08-29：gitalk.js过大，使用defer不阻塞html的解析
* 2023-04-17：表格支持左右滑动
* 2023-04-08：激活的标题，在大纲目录中始终展示在视口内
* 2023-03-16：新增转载提示、样式调整(代码框间距、字段间距、h间距、列表间距等)
* 2022-11-21：博客内容展示页调整
  1. 调整水平间距、行间距
  2. 调整代码块字体，代码块复制文字替换成图标
  3. 标题栏添加动态效果(以往的标题与常规字体不易区分)
* 2022-10-30：图片点击全屏展示，支持pc端与移动端图片的自由缩放（基于[fengyuanchen/viewerjs: JavaScript image viewer.](https://github.com/fengyuanchen/viewerjs)）
* 2022-10-27：代码块右侧顺序栏禁用选中
* 2022-10-14：锚点跳转不改变url
* 2022-10-11：添加sitemap
* 2022-10-10：复制时移除多加的换行符
* 2022-08-28：使用mathjax支持数学公式的渲染，参考[在Hexo中使用MathJax插入数学公式 | Mob's Blog](http://blog.mobing.net/content/hexo/hexo-mathjax.html)
* 2022-08-28：无新增功能，仅去除冗余内容
* ~~2022-05-21：图片点击全屏展示~~
* 2022-03-07：升级gitalk版本到1.7.2
* 2022-02-09：将jsdelivr托管的css与js替换为本地的css与js。如今服务器带宽提上来了，没必要使用cdn了。
* 2021-09-20：添加referer来源，配合[统计器](https://github.com/meethigher/count-for-page)
* 2021-09-18：1. 修改代码块字体格式 2. 添加快捷键全局搜索
* 2021-07-23：修改请求统计的js为加载到js就进行统计。之前是所有页面资源加载完才统计，影响观感。
* 2021-07-19：弃用不蒜子，改用自己实现的[统计器](https://github.com/meethigher/count-for-page)
* 2021-02-10：之前的标签云按时间排序，修改内部代码为按名称排序，便于检索
* 2021-02-08：增加图片点击跳转（PS：想一巴掌拍死自己，代码写的是一坨屎）
* 2021-01-24：使代码块可以自由复制，添加不兼容Safari弹窗提示
* 2021-01-13：优化：修改评论提示文案、去掉大纲目录下划线、优化打赏按钮
* 2020-07-21：添加404页面
* 2020-07-06：优化keyword和description，优化懒加载效果
* 2020-05-25：优化本地内容加载过程动画
* 2020-04-21：发布Starry2.0
  1. 放弃rem布局，采用响应式布局
  2. 增加打赏跟分享功能
  3. 修复ios滑动瞬间白屏bug
  4. 优化使更容易被收录
  5. 增加评论与文章置顶功能
  6. 删除一些冗余功能，使更简洁
  7. 增加侧边栏组件，返回顶部和底部、下载app、目录大纲
* 2019-12-03：增加站内全局搜索
* 2019-11-13：修改主题为24小时制
* 2019-11-08：增加访问量
* 2019-11-07：修改移动端中英文代码块高度不一致问题
* 2019-11-04：修改代码块样式
* 2019-11-02：发布Starry1.0
  1. rem布局
  2. 首页、标签、归档、关于功能

## 快速开始

该主题是想当年在旧版的环境上开发的，现在看来，虽然垃圾，但却饱含年轻时的热血。

如果想要运行的话，还是需要安装旧版的环境方可。建议版本如下

* node >= 12.xx.xx
* 4.2.0 >= hexo >= 3.9.0

下面以 `Windows` 搭建环境为例，记录详细步骤。

1.) 首先安装 `nvm` 用来管理 `node` 版本。 `nvm` 的[安装使用](https://github.com/coreybutler/nvm-windows)直接在 `github` 搜索，此处不多赘述。

```sh
D:\Desktop>nvm install 12.22.12

D:\Desktop>nvm list

  * 18.18.0 (Currently using 64-bit executable)
    16.16.0
    12.22.12

D:\Desktop>nvm use 12.22.12
Now using node v12.22.12 (64-bit)

D:\Desktop>node -v
v12.22.12

```

2.) 其次，安装 `hexo-cli` 工具

```sh
D:\Desktop>npm install -g hexo-cli@4.3.1
C:\Program Files\nodejs\hexo -> C:\Program Files\nodejs\node_modules\hexo-cli\bin\hexo

> hexo-util@3.3.0 postinstall C:\Program Files\nodejs\node_modules\hexo-cli\node_modules\hexo-fs\node_modules\hexo-util
> npm run build:highlight


> hexo-util@3.3.0 build:highlight C:\Program Files\nodejs\node_modules\hexo-cli\node_modules\hexo-fs\node_modules\hexo-util
> node scripts/build_highlight_alias.js

npm WARN notsup Unsupported engine for hexo-cli@4.3.1: wanted: {"node":">=14"} (current: {"node":"12.22.12","npm":"6.14.16"})
npm WARN notsup Not compatible with your version of node/npm: hexo-cli@4.3.1
npm WARN notsup Unsupported engine for abbrev@2.0.0: wanted: {"node":"^14.17.0 || ^16.13.0 || >=18.0.0"} (current: {"node":"12.22.12","npm":"6.14.16"})
npm WARN notsup Not compatible with your version of node/npm: abbrev@2.0.0
npm WARN notsup Unsupported engine for hexo-log@4.1.0: wanted: {"node":">=14"} (current: {"node":"12.22.12","npm":"6.14.16"})
npm WARN notsup Not compatible with your version of node/npm: hexo-log@4.1.0
npm WARN notsup Unsupported engine for hexo-fs@4.1.3: wanted: {"node":">=14"} (current: {"node":"12.22.12","npm":"6.14.16"})
npm WARN notsup Not compatible with your version of node/npm: hexo-fs@4.1.3
npm WARN notsup Unsupported engine for hexo-util@3.3.0: wanted: {"node":">=14"} (current: {"node":"12.22.12","npm":"6.14.16"})
npm WARN notsup Not compatible with your version of node/npm: hexo-util@3.3.0
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules\hexo-cli\node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ hexo-cli@4.3.1
added 60 packages from 48 contributors in 24.487s
```

3.) 将默认主题更换为 `starry`

```sh
D:\Desktop>mkdir blog && cd blog && hexo init
INFO  Cloning hexo-starter https://github.com/hexojs/hexo-starter.git
←[32mINFO ←[39m Install dependencies
added 228 packages from 184 contributors and audited 230 packages in 13.6s

23 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

INFO  Start blogging with Hexo!


D:\Desktop\blog>git clone https://github.com/meethigher/hexo-theme-starry.git themes/starry
Cloning into 'themes/starry'...
remote: Enumerating objects: 780, done.
remote: Counting objects: 100% (192/192), done.
remote: Compressing objects: 100% (132/132), done.
remote: Total 780 (delta 111), reused 124 (delta 58), pack-reused 588
Receiving objects: 100% (780/780), 49.11 MiB | 694.00 KiB/s, done.
Resolving deltas: 100% (432/432), done.

D:\Desktop\blog>copy themes\starry\_config.yml.root _config.yml
覆盖 _config.yml 吗? (Yes/No/All): yes
已复制         1 个文件。

D:\Desktop\blog>copy themes\starry\package.json.root package.json
覆盖 package.json 吗? (Yes/No/All): yes
已复制         1 个文件。

D:\Desktop\blog>copy themes\starry\sitemap-mock.xml sitemap-mock.xml
已复制         1 个文件。

D:\Desktop\blog>npm install
npm WARN deprecated extract-text-webpack-plugin@3.0.2: Deprecated. Please use https://github.com/webpack-contrib/mini-css-extract-plugin
npm WARN deprecated swig-templates@2.0.3: unmaintained
npm WARN deprecated highlight.js@9.18.5: Support has ended for 9.x series. Upgrade to @latest
npm WARN deprecated hexo-bunyan@2.0.0: Please see https://github.com/hexojs/hexo-bunyan/issues/17
npm WARN deprecated chokidar@2.1.8: Chokidar 2 does not receive security updates since 2019. Upgrade to chokidar 3 with 15x fewer dependencies
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm WARN deprecated figgy-pudding@3.5.2: This module is no longer supported.
npm WARN deprecated move-concurrently@1.0.1: This package is no longer supported.
npm WARN deprecated rimraf@2.4.5: Rimraf versions prior to v4 are no longer supported
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated fsevents@1.2.13: The v1 package contains DANGEROUS / INSECURE binaries. Upgrade to safe fsevents v2
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated copy-concurrently@1.0.5: This package is no longer supported.
npm WARN deprecated fs-write-stream-atomic@1.0.10: This package is no longer supported.
npm WARN deprecated glob@6.0.4: Glob versions prior to v9 are no longer supported
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated cuid@2.1.8: Cuid and other k-sortable and non-cryptographic ids (Ulid, ObjectId, KSUID, all UUIDs) are all insecure. Use @paralleldrive/cuid2 instead.
npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported

> highlight.js@9.18.5 postinstall D:\Desktop\blog\node_modules\highlight.js
> node deprecated.js

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  Verion 9 of Highlight.js has reached EOL.  It will no longer
  be supported or receive security updates in the future.
  Please upgrade to version 10 or encourage your indirect
  dependencies to do so.

  For more info:

  https://github.com/highlightjs/highlight.js/issues/2877
  https://github.com/highlightjs/highlight.js/blob/master/VERSION_10_UPGRADE.md

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

> ejs@2.7.4 postinstall D:\Desktop\blog\node_modules\ejs
> node ./postinstall.js

Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.2.7 (node_modules\watchpack-chokidar2\node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN babel-loader@8.3.0 requires a peer of @babel/core@^7.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN extract-text-webpack-plugin@3.0.2 requires a peer of webpack@^3.1.0 but none is installed. You must install peer dependencies yourself.

added 535 packages from 283 contributors, removed 63 packages, updated 47 packages and audited 702 packages in 43.037s

33 packages are looking for funding
  run `npm fund` for details

found 17 vulnerabilities (1 low, 6 moderate, 8 high, 2 critical)
  run `npm audit fix` to fix them, or `npm audit` for details

D:\Desktop\blog>hexo s
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.

```



 