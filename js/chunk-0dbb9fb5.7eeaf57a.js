(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dbb9fb5"],{2251:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"component-item"}},[n("h1",{staticClass:"title"},[t._v("Menu 导航栏")]),n("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),n("Tyh-Menu",[n("Tyh-Menu-Item",[t._v("首页首页")]),n("Tyh-Menu-Item",[t._v("内容内容")]),n("Tyh-Menu-Item",[t._v("链接链接")]),n("Tyh-Menu-Item",[t._v("链接链接")]),n("Tyh-Menu-Item",[t._v("链接链接")])],1),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v("\n<Tyh-Menu>\n  <Tyh-Menu-Item>首页首页</Tyh-Menu-Item>\n  <Tyh-Menu-Item>内容内容</Tyh-Menu-Item>\n  <Tyh-Menu-Item>链接链接</Tyh-Menu-Item>\n  <Tyh-Menu-Item>链接链接</Tyh-Menu-Item>\n  <Tyh-Menu-Item>链接链接</Tyh-Menu-Item>\n</Tyh-Menu>\n      ")]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("通过 backgroundColor 属性可以配置导航栏背景色：")]),n("p",{staticClass:"explain"},[t._v(" 通过 bottomType 属性可以配置导航栏底部类型（阴影 / 实线 / 无）： ")]),n("p",{staticClass:"explain"},[t._v("通过 color 属性可以配置子菜单颜色：")]),n("Tyh-Menu",{attrs:{backgroundColor:"#fff",bottomType:"border"}},[n("Tyh-Menu-Item",{attrs:{color:"#000"}},[t._v("首页首页")]),n("Tyh-Menu-Item",{attrs:{color:"#000"}},[t._v("内容内容")]),n("Tyh-Menu-Item",{attrs:{color:"#000"}},[t._v("链接链接")]),n("Tyh-Menu-Item",{attrs:{color:"#000"}},[t._v("链接链接")]),n("Tyh-Menu-Item",{attrs:{color:"#000"}},[t._v("链接链接")])],1),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-Menu backgroundColor="#fff" bottomType="shadow">\n  <Tyh-Menu-Item color="#000">首页首页</Tyh-Menu-Item>\n  <Tyh-Menu-Item color="#000">内容内容</Tyh-Menu-Item>\n  <Tyh-Menu-Item color="#000">链接链接</Tyh-Menu-Item>\n  <Tyh-Menu-Item color="#000">链接链接</Tyh-Menu-Item>\n  <Tyh-Menu-Item color="#000">链接链接</Tyh-Menu-Item>\n</Tyh-Menu>\n      ')]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("通过 prohibit 属性可以配置子组件链接是否禁用：")]),n("Tyh-Menu",[n("Tyh-Menu-Item",{attrs:{prohibit:"",url:"/home"}},[t._v("首页首页")]),n("Tyh-Menu-Item",{attrs:{prohibit:"",url:"/abc"}},[t._v("内容内容")]),n("Tyh-Menu-Item",{attrs:{url:""}},[t._v("链接链接")]),n("Tyh-Menu-Item",{attrs:{url:""}},[t._v("链接链接")])],1),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-Menu>\n  <Tyh-Menu-Item prohibit url="/home">首页首页</Tyh-Menu-Item>\n  <Tyh-Menu-Item prohibit url="/abc">内容内容</Tyh-Menu-Item>\n  <Tyh-Menu-Item>链接链接</Tyh-Menu-Item>\n  <Tyh-Menu-Item>链接链接</Tyh-Menu-Item>\n  <Tyh-Menu-Item>链接链接</Tyh-Menu-Item>\n</Tyh-Menu>\n      ')]),t._v("\n    ")]),n("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),n("p",{staticClass:"explain"},[t._v("Tyh-Menu 组件：")]),n("table",{staticClass:"table"},[t._m(0),t._l(t.configures,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.param))]),n("td",[t._v(t._s(e.explain))]),n("td",[t._v(t._s(e.type))]),n("td",[t._v(t._s(e.value))]),n("td",[t._v(t._s(e.default))])])}))],2),n("p",{staticClass:"explain"},[t._v("Tyh-Menu-Item 子组件：")]),n("table",{staticClass:"table"},[t._m(1),t._l(t.configures2,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.param))]),n("td",[t._v(t._s(e.explain))]),n("td",[t._v(t._s(e.type))]),n("td",[t._v(t._s(e.value))]),n("td",[t._v(t._s(e.default))])])}))],2)],1)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])}],h={name:"",components:{},props:{},data:function(){return{configures:[{param:"backgroundColor",explain:"导航栏背景色",type:"string",value:"——",default:"——"},{param:"bottomType",explain:"导航栏底部类型（暂时存在 BUG）",type:"string",value:"border / shadow",default:"——"}],configures2:[{param:"url",explain:"跳转的路径",type:"string",value:"——",default:"——"},{param:"prohibit",explain:"是否禁用",type:"boolean",value:"true / fasle",default:"——"},{param:"color",explain:"文字颜色",type:"string",value:"——",default:"#fff"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},r=h,s=(n("5e6a"),n("2877")),l=Object(s["a"])(r,a,u,!1,null,"665e0ed5",null);e["default"]=l.exports},"5e6a":function(t,e,n){"use strict";n("8ca9")},"8ca9":function(t,e,n){}}]);
//# sourceMappingURL=chunk-0dbb9fb5.7eeaf57a.js.map