(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{158:function(e,a,s){"use strict";s.r(a);var n=s(0),t=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("#国际化配置文件生成\n##生成文件分析\n视图页操作按钮")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ufm.FORM_PAYMENTAPPLYFHT_view.toolbar.add.caption=Add\nufm.FORM_PAYMENTAPPLYFHT_view.toolbar.view.caption=View\nufm.FORM_PAYMENTAPPLYFHT_view.toolbar.modify.caption=Modify\nufm.FORM_PAYMENTAPPLYFHT_view.toolbar.delete.caption=Delete\nufm.FORM_PAYMENTAPPLYFHT_view.toolbar.refresh.caption=Refresh\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("视图页显示字段")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ufm.FORM_PAYMENTAPPLYFHT_view.column.PRJNAME.caption=Project Name\n...\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("视图页名称")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ufm.FORM_PAYMENTAPPLYFHT_view.viewName.caption=Payment Application Without Contract\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("查询栏字段名")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("label_s_My97DatePicker_0.innerHTML=Claim Date\n...\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("新增/详情页面字段名")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("label_formtitle.innerHTML=Payment Application Without Contract \n...\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("##原始操作步骤\n1.复制视图页按钮字段并配置\n2.复制视图页名称字段并配置\n3.复制视图页视图页显示字段并配置\n4.复制查询页html需配置字段并配置\n如果字段没有label标签需要调整")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<div>测试<div>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("改成")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<div><label id="label_s_test" componentId="label_s_test">测试</label></div>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("5.复制新增/详情html需配置字段并配置\n如果字段没有label标签需要调整")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<div>测试<div>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("改成")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<div><label id="label_test" componentId="label_test">测试</label></div>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("......\n##自动化实现原理\n1.HTML页面编辑\n编辑：加上label标签和相应的id与componentsid\n编辑规则：寻找th/td/strong 标签里只有文字的情况，自动编辑并生成新的html文件\n2.使用编辑生成的html文件解析生成国际化数据\n3.视图页文件解析生成国际化数据\n4.手动整合数据生成国际化文件")]),e._v(" "),s("p",[e._v("##自动化操作步骤\n1.复制对应文件到相应文件夹\n复制视图列表.ufm文件到 '/original/pathType(自定义)/ufm'\n复制表单html文件（add,search）到 '/original/pathType(自定义)/html'\n2.将对应的字段翻译添加到english.mjs文件中\n3.修改onload函数传入的pathType值\n4.运行代码\n5.检验生成的文件是否正确\n6.新建翻译文件并且整合生成的文件\n6.用修改后的html文件替换项目中对应的文件")])])}),[],!1,null,null,null);a.default=t.exports}}]);