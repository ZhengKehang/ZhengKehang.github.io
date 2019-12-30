(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{155:function(e,n,a){"use strict";a.r(n);var p=a(0),l=Object(p.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("webpack")]),e._v(" "),a("p",[e._v("从上面我们可以看到，webpack配置中需要理解几个核心的概念Entry 、Output、Loaders 、Plugins、 Chunk")]),e._v(" "),a("p",[e._v("Entry：指定webpack开始构建的入口模块，从该模块开始构建并计算出直接或间接依赖的模块或者库\n可以有多个入口文件，然后递归的进行文件打包（递归：指定一个入口，分析模块的依赖，它会递归的查找所有相关的依赖）\nOutput：告诉webpack如何命名输出的文件以及输出的目录\nLoaders：由于webpack只能处理javascript，所以我们需要对一些非js文件处理成webpack能够处理的模块，比如sass文件\nPlugins：Loaders将各类型的文件处理成webpack能够处理的模块，plugins有着很强的能力。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。但也是最复杂的一个。比如对js文件进行压缩优化的UglifyJsPlugin插件\nChunk：coding split的产物，我们可以对一些代码打包成一个单独的chunk，比如某些公共模块，去重，更好的利用缓存。或者按需加载某些功能模块，优化加载时间。在webpack3及以前我们都利用CommonsChunkPlugin将一些公共代码分割成一个chunk，实现单独加载。在webpack4 中CommonsChunkPlugin被废弃，使用SplitChunksPlugin\n弄清基本概念后")]),e._v(" "),a("p",[e._v("学习webpack可以通过研读vue-cli的配置进行\nwebpack-dev-server使用内存来存储webpack开发环境下的打包文件，并且可以使用模块热更新，他比传统的http服务器对开发更加简单高效")]),e._v(" "),a("p",[e._v("优化打包速度\n分开vender和app--使用插件：DllPlugin和DllReferencePlugin\nUglifyJsPlugin只要传入parallel（平行线程处理）和cache（缓存）参数\nHappyPack，HappyPack.ThreadPool（线程池）\nbabel-loader：options.cacheDirectory，include，exclude加入参数提高速度\n减少resolve，DevTool：去除sourcemap，cache-loader\n长缓存优化：从用户填写url访问网页开始，用户浏览器向服务器下载请求资源，服务器可通过控制http响应头，可以告知浏览器某些资源是强缓存，不用更新，这些资源不用更新时，浏览器会从本地加载资源。\n解决方式：提取vender，hash->chunkhash,提取webpack runtim")]),e._v(" "),a("p",[e._v("webpack其实是node环境下的js代码\n所以使用的事CommonJs标准,我们可以通过.mjs和babel实现EMS标准的书写方法")]),e._v(" "),a("p",[e._v("所以在阅读webpack的配置前可以先了解node的模块")])])}),[],!1,null,null,null);n.default=l.exports}}]);