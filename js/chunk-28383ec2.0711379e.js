(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28383ec2"],{3251:function(t,e,s){},"3df8":function(t,e,s){},"4ad6":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{attrs:{id:"table"}},[t._m(0),t._l(t.configures,(function(e,r){return s("tr",{key:r},[s("td",[t._v(t._s(e.param))]),s("td",[t._v(t._s(e.explain))]),s("td",[t._v(t._s(e.type))]),s("td",[t._v(t._s(e.value))]),s("td",[t._v(t._s(e.default))])])}))],2)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",[t._v("参数")]),s("th",[t._v("说明")]),s("th",[t._v("类型")]),s("th",[t._v("可选值")]),s("th",[t._v("默认值")])])}],n={name:"ConfiguresTable",components:{},props:{configures:{type:Array,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},a=n,u=(s("84fb"),s("2877")),c=Object(u["a"])(a,r,i,!1,null,"9fa3a98e",null);e["a"]=c.exports},"6c2f":function(t,e,s){},"84fb":function(t,e,s){"use strict";s("3df8")},a859:function(t,e,s){"use strict";s("6c2f")},d201:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"component-item"}},[s("h1",{staticClass:"title"},[t._v("Crumbs 面包屑")]),s("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),s("p",{staticClass:"explain"},[t._v("基本使用")]),s("Tyh-crumbs",[s("Tyh-crumbs-item",{attrs:{to:"/"}},[t._v("首页")]),s("Tyh-crumbs-item",[t._v("学员管理")]),s("Tyh-crumbs-item",[t._v("文章管理")]),s("Tyh-crumbs-item",[t._v("设置")])],1),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),s("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-crumbs>\n  <Tyh-crumbs-item to="/">首页</Tyh-crumbs-item>\n  <Tyh-crumbs-item>学员管理</Tyh-crumbs-item>\n  <Tyh-crumbs-item>文章管理</Tyh-crumbs-item>\n  <Tyh-crumbs-item>设置</Tyh-crumbs-item>\n</Tyh-crumbs>\n      ')]),t._v("\n    ")]),s("p",{staticClass:"explain"},[t._v("不同的分隔符：")]),t._m(0),s("Tyh-crumbs",{attrs:{separator:"tyh-ui-right-02"}},[s("Tyh-crumbs-item",{attrs:{to:"/"}},[t._v("首页")]),s("Tyh-crumbs-item",[t._v("学员管理")]),s("Tyh-crumbs-item",[t._v("文章管理")]),s("Tyh-crumbs-item",[t._v("设置")])],1),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),s("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-crumbs separator="tyh-ui-right-02">\n  <Tyh-crumbs-item to="/">首页</Tyh-crumbs-item>\n  <Tyh-crumbs-item>学员管理</Tyh-crumbs-item>\n  <Tyh-crumbs-item>文章管理</Tyh-crumbs-item>\n  <Tyh-crumbs-item>设置</Tyh-crumbs-item>\n</Tyh-crumbs>\n      ')]),t._v("\n    ")]),s("p",{staticClass:"explain"},[t._v("跳转：")]),t._m(1),s("Tyh-crumbs",[s("Tyh-crumbs-item",{attrs:{to:"/"}},[t._v("首页")]),s("Tyh-crumbs-item",{attrs:{to:"/student"}},[t._v("学员管理")]),s("Tyh-crumbs-item",[t._v("文章管理")]),s("Tyh-crumbs-item",[t._v("设置")])],1),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),s("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-crumbs>\n  <Tyh-crumbs-item to="/">首页</Tyh-crumbs-item>\n  <Tyh-crumbs-item to="/student">学员管理</Tyh-crumbs-item>\n  <Tyh-crumbs-item>文章管理</Tyh-crumbs-item>\n  <Tyh-crumbs-item>设置</Tyh-crumbs-item>\n</Tyh-crumbs>\n      ')]),t._v("\n    ")]),s("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),s("p",{staticClass:"explain"},[t._v("Tyh-Crumbs 组件：")]),s("ConfiguresTable",{attrs:{configures:t.configures}}),s("p",{staticClass:"explain"},[t._v("Tyh-Crumbs-Item 子组件：")]),s("ConfiguresTable",{attrs:{configures:t.configures2}}),s("h3",{staticClass:"Subtitle"},[t._v("按需引入：")]),s("p",{staticClass:"explain"},[t._v(" 通过下面按需引入的方式，我们可以只引入需要的组件，以达到减小项目体积的目的 ")]),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),s("code",{staticClass:"js",attrs:{id:"myCode"}},[t._v("\nimport Vue from 'vue'\nimport TyhCrumbs from 'tyh-ui/packages/crumbs'\nimport TyhCrumbsItem from 'tyh-ui/packages/crumbs-item'\nVue.use(TyhCrumbs)\nVue.use(TyhCrumbsItem)\n      ")]),t._v("\n    ")]),s("TurnPage",{attrs:{TurnPageList:t.TurnPageList}})],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"explain"},[t._v(" 通过给父组件"),s("span",[t._v("separator")]),t._v(" 属性可以配置不同的分隔符，使用 icon 类名 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"explain"},[t._v(" 通过给子组件"),s("span",[t._v("to")]),t._v(" 属性可以配置跳转路径，添加该属性后文章点击会跳转，并且加粗显示 ")])}],n=s("4ad6"),a=s("d3bf"),u={name:"",components:{ConfiguresTable:n["a"],TurnPage:a["a"]},props:{},data:function(){return{configures:[{param:"separator",explain:"分隔符，icon 的类名",type:"string",value:"——",default:"tyh-ui-xiexian-01"}],configures2:[{param:"to",explain:"跳转的路径",type:"string",value:"——",default:"——"}],TurnPageList:[{text:"Icon 图标",url:"icon"},{text:"",url:""}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},c=u,m=(s("db3d"),s("2877")),h=Object(m["a"])(c,r,i,!1,null,"b4fe7356",null);e["default"]=h.exports},d3bf:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"TurnPage"}},[t.TurnPageList[0].text?s("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[0].url}},[s("Tyh-icon",{attrs:{icon:"tyh-ui-left-02"}}),t._v(" "+t._s(t.TurnPageList[0].text)+" ")],1):t._e(),t.TurnPageList[1].text?s("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[1].url}},[t._v(" "+t._s(t.TurnPageList[1].text)+" "),s("Tyh-icon",{attrs:{icon:"tyh-ui-right-02"}})],1):t._e()],1)},i=[],n={name:"TurnPage",components:{},props:{TurnPageList:{type:Array,require:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},a=n,u=(s("a859"),s("2877")),c=Object(u["a"])(a,r,i,!1,null,"30c0caf4",null);e["a"]=c.exports},db3d:function(t,e,s){"use strict";s("3251")}}]);
//# sourceMappingURL=chunk-28383ec2.0711379e.js.map