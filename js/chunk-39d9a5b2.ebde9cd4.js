(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39d9a5b2"],{"1eb7":function(t,e,a){"use strict";var n=a("585c"),s=a.n(n);s.a},"3bc3":function(t,e,a){"use strict";var n=a("a217"),s=a.n(n);s.a},"3f96":function(t,e,a){},"585c":function(t,e,a){},6123:function(t,e,a){},"6a7b":function(t,e,a){"use strict";var n=a("90c8"),s=a.n(n);s.a},"82fb":function(t,e,a){"use strict";var n=a("3f96"),s=a.n(n);s.a},"90c8":function(t,e,a){},"987e":function(t,e,a){},a217:function(t,e,a){},b81a:function(t,e,a){"use strict";var n=a("6123"),s=a.n(n);s.a},e4fe:function(t,e,a){"use strict";var n=a("987e"),s=a.n(n);s.a},eea6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-box"},[a("banner",{staticClass:"home-banner",attrs:{bannerH:"700",images:t.banners}}),a("where-to-use"),a("our-advantage")],1)},s=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-carousel",{staticClass:"banner-box",attrs:{afterChange:t.onChange,autoplay:""}},t._l(t.images,(function(e,n){return a("div",{key:n,staticClass:"image-box center",style:{height:t.bannerH+"px"}},[t._v(" "+t._s(n)+" ")])})),0)},r=[],i={name:"banner",props:{images:{type:Array,default:function(){return[]}},bannerH:{type:String,default:"700"}},methods:{onChange:function(){}}},o=i,u=(a("6a7b"),a("2877")),l=Object(u["a"])(o,c,r,!1,null,"916ad0b8",null),d=l.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"our-advantage center"},t._l(t.advantages,(function(t,e){return a("advantage-card",{key:e,staticClass:"advantage-card-outer",attrs:{advantage:t}})})),1)},v=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"advantage-card"},[a("div",{staticClass:"card-icon",style:{background:t.advantage.color}}),a("div",{staticClass:"card-name"},[t._v(t._s(t.advantage.name))]),a("div",{staticClass:"card-list"},t._l(t.advantage.list,(function(e,n){return a("div",{key:n,staticClass:"card-item align-center"},[t._m(0,!0),a("div",{staticClass:"item-name"},[t._v(t._s(e))])])})),0)])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-icon center"},[a("div",{staticClass:"item-circle"})])}],p={name:"advantage-card",props:{advantage:{type:Object,default:function(){return{}}}}},_=p,g=(a("3bc3"),Object(u["a"])(_,m,b,!1,null,"1803bbf8",null)),C=g.exports,h={name:"our-advantage",components:{AdvantageCard:C},data:function(){return{advantages:[{name:"快速到达",list:["“5秒到”开创一个时代","高并发解决方案","免审核+智能拦截","网关＜2秒 独立端口，专享通道"],color:"#1093FE"},{name:"优质资源",list:["“5秒到”开创一个时代","高并发解决方案","免审核+智能拦截","网关＜2秒 独立端口，专享通道"],color:"#2E5BEB"},{name:"稳定通道",list:["“5秒到”开创一个时代","高并发解决方案","免审核+智能拦截","网关＜2秒 独立端口，专享通道"],color:"#FEA352"},{name:"贴心服务",list:["“5秒到”开创一个时代","高并发解决方案","免审核+智能拦截","网关＜2秒 独立端口，专享通道"],color:"#14C0B1"},{name:"安全防护",list:["“5秒到”开创一个时代","高并发解决方案","免审核+智能拦截","网关＜2秒 独立端口，专享通道"],color:"#0862EA"},{name:"高效平台",list:["“5秒到”开创一个时代","高并发解决方案","免审核+智能拦截","网关＜2秒 独立端口，专享通道"],color:"#FF6060"}]}}},y=h,E=(a("82fb"),Object(u["a"])(y,f,v,!1,null,"5d86e5d1",null)),x=E.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"where-to-use"},[a("p",{staticClass:"home-title"},[t._v("应用场景")]),a("div",{staticClass:"use-list center"},t._l(t.uses,(function(t,e){return a("use-card",{key:e,staticClass:"use-item",attrs:{use:t}})})),1)])},O=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"use-card center"},[a("a-icon",{staticClass:"icon-box",attrs:{type:t.use.icon}}),a("p",{staticClass:"use-card-title"},[t._v(t._s(t.use.name))]),a("p",{staticClass:"use-card-content"},[t._v(t._s(t.use.content))])],1)},k=[],$={name:"use-card",props:{use:{type:Object,default:function(){return{}}}}},A=$,B=(a("b81a"),Object(u["a"])(A,j,k,!1,null,"9333afc2",null)),F=B.exports,H={name:"where-to-use",components:{UseCard:F},data:function(){return{uses:[{icon:"message",name:"短信验证码",content:"用户注册、登录验证\n找回密码、支付认证等"},{icon:"safety",name:"空号检测",content:"检查号码是否为空号"},{icon:"picture",name:"图像识别",content:"其他的相关服务"}]}}},J=H,U=(a("e4fe"),Object(u["a"])(J,w,O,!1,null,"0fed41f8",null)),S=U.exports,T={name:"home",components:{Banner:d,OurAdvantage:x,WhereToUse:S},data:function(){return{banners:[1,2,3,4,5]}},methods:{}},W=T,q=(a("1eb7"),Object(u["a"])(W,n,s,!1,null,"5abf8ee0",null));e["default"]=q.exports}}]);