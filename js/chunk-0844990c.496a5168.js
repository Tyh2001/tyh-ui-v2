(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0844990c"],{"014f":function(t,e,s){},"11c6":function(t,e,s){},"47e3":function(t,e,s){},"4ad6":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{attrs:{id:"table"}},[t._m(0),t._l(t.configures,(function(e,r){return s("tr",{key:r},[s("td",[t._v(t._s(e.param))]),s("td",[t._v(t._s(e.explain))]),s("td",[t._v(t._s(e.type))]),s("td",[t._v(t._s(e.value))]),s("td",[t._v(t._s(e.default))])])}))],2)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",[t._v("参数")]),s("th",[t._v("说明")]),s("th",[t._v("类型")]),s("th",[t._v("可选值")]),s("th",[t._v("默认值")])])}],a={name:"ConfiguresTable",components:{},props:{configures:{type:Array,required:!0}}},n=a,u=(s("5048"),s("2877")),c=Object(u["a"])(n,r,i,!1,null,"0a4f5532",null);e["a"]=c.exports},5048:function(t,e,s){"use strict";s("014f")},c8ca:function(t,e,s){"use strict";s("47e3")},d201:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"component-item"}},[s("h1",{staticClass:"title"},[t._v("Crumbs 面包屑")]),s("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),s("p",{staticClass:"explain"},[t._v("基本使用")]),s("tyh-crumbs",[s("tyh-crumbs-item",{attrs:{to:"/"}},[t._v("首页")]),s("tyh-crumbs-item",[t._v("学员管理")]),s("tyh-crumbs-item",[t._v("文章管理")]),s("tyh-crumbs-item",[t._v("设置")])],1),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),s("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<tyh-crumbs>\n  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>\n  <tyh-crumbs-item>学员管理</tyh-crumbs-item>\n  <tyh-crumbs-item>文章管理</tyh-crumbs-item>\n  <tyh-crumbs-item>设置</tyh-crumbs-item>\n</tyh-crumbs>\n      ')]),t._v("\n    ")]),s("p",{staticClass:"explain"},[t._v("不同的分隔符：")]),t._m(0),s("tyh-crumbs",{attrs:{separator:"tyh-ui-right-02"}},[s("tyh-crumbs-item",{attrs:{to:"/"}},[t._v("首页")]),s("tyh-crumbs-item",[t._v("学员管理")]),s("tyh-crumbs-item",[t._v("文章管理")]),s("tyh-crumbs-item",[t._v("设置")])],1),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),s("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<tyh-crumbs separator="tyh-ui-right-02">\n  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>\n  <tyh-crumbs-item>学员管理</tyh-crumbs-item>\n  <tyh-crumbs-item>文章管理</tyh-crumbs-item>\n  <tyh-crumbs-item>设置</tyh-crumbs-item>\n</tyh-crumbs>\n      ')]),t._v("\n    ")]),s("p",{staticClass:"explain"},[t._v("跳转：")]),t._m(1),s("tyh-crumbs",[s("tyh-crumbs-item",{attrs:{to:"/"}},[t._v("首页")]),s("tyh-crumbs-item",{attrs:{to:"/student"}},[t._v("学员管理")]),s("tyh-crumbs-item",[t._v("文章管理")]),s("tyh-crumbs-item",[t._v("设置")])],1),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),s("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<tyh-crumbs>\n  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>\n  <tyh-crumbs-item to="/student">学员管理</tyh-crumbs-item>\n  <tyh-crumbs-item>文章管理</tyh-crumbs-item>\n  <tyh-crumbs-item>设置</tyh-crumbs-item>\n</tyh-crumbs>\n      ')]),t._v("\n    ")]),s("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),s("p",{staticClass:"explain"},[t._v("tyh-Crumbs 组件：")]),s("ConfiguresTable",{attrs:{configures:t.configures}}),s("p",{staticClass:"explain"},[t._v("tyh-Crumbs-Item 子组件：")]),s("ConfiguresTable",{attrs:{configures:t.configures2}}),s("TurnPage",{attrs:{TurnPageList:t.TurnPageList}})],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"explain"},[t._v(" 通过给父组件"),s("span",[t._v("separator")]),t._v(" 属性可以配置不同的分隔符，使用 icon 类名 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"explain"},[t._v(" 通过给子组件"),s("span",[t._v("to")]),t._v(" 属性可以配置跳转路径，添加该属性后文章点击会跳转，并且加粗显示 ")])}],a=s("4ad6"),n=s("d3bf"),u={name:"",components:{ConfiguresTable:a["a"],TurnPage:n["a"]},props:{},data:function(){return{configures:[{param:"separator",explain:"分隔符，icon 的类名",type:"string",value:"——",default:"tyh-ui-xiexian-01"}],configures2:[{param:"to",explain:"跳转的路径",type:"string",value:"——",default:"——"}],TurnPageList:[{text:"Icon 图标",url:"icon"},{text:"Alert 提示",url:"alert"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},c=u,m=(s("c8ca"),s("2877")),h=Object(m["a"])(c,r,i,!1,null,"6a359cee",null);e["default"]=h.exports},d3bf:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"TurnPage"}},[t.TurnPageList[0].text?s("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[0].url}},[s("tyh-icon",{attrs:{icon:"tyh-ui-left-02"}}),t._v(" "+t._s(t.TurnPageList[0].text)+" ")],1):t._e(),t.TurnPageList[1].text?s("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[1].url}},[t._v(" "+t._s(t.TurnPageList[1].text)+" "),s("tyh-icon",{attrs:{icon:"tyh-ui-right-02"}})],1):t._e()],1)},i=[],a={name:"TurnPage",props:{TurnPageList:{type:Array,require:!0}}},n=a,u=(s("f3a3"),s("2877")),c=Object(u["a"])(n,r,i,!1,null,"5a248d01",null);e["a"]=c.exports},f3a3:function(t,e,s){"use strict";s("11c6")}}]);
//# sourceMappingURL=chunk-0844990c.496a5168.js.map