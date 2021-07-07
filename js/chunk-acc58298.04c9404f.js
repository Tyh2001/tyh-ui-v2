(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-acc58298"],{"3df8":function(t,e,n){},"4aab":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"component-item"}},[n("h1",{staticClass:"title"},[t._v("Menu 导航栏")]),n("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),n("Tyh-Menu",[n("Tyh-Menu-Item",[t._v("首页")]),n("Tyh-Menu-Item",[t._v("内容")]),n("Tyh-Menu-Item",[t._v("设置")]),n("Tyh-Menu-Item",[t._v("回收站")])],1),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v("\n<Tyh-Menu>\n  <Tyh-Menu-Item>首页</Tyh-Menu-Item>\n  <Tyh-Menu-Item>内容</Tyh-Menu-Item>\n  <Tyh-Menu-Item>设置</Tyh-Menu-Item>\n  <Tyh-Menu-Item>回收站</Tyh-Menu-Item>\n</Tyh-Menu>\n      ")]),t._v("\n    ")]),t._m(0),t._m(1),n("Tyh-Menu",{attrs:{backgroundColor:"#eee"}},[n("Tyh-Menu-Item",{attrs:{color:"#000"}},[t._v("首页")]),n("Tyh-Menu-Item",{attrs:{color:"#000"}},[t._v("内容")]),n("Tyh-Menu-Item",{attrs:{color:"#000"}},[t._v("设置")]),n("Tyh-Menu-Item",{attrs:{color:"#000"}},[t._v("回收站")])],1),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-Menu backgroundColor="#eee">\n  <Tyh-Menu-Item color="#000">首页</Tyh-Menu-Item>\n  <Tyh-Menu-Item color="#000">内容</Tyh-Menu-Item>\n  <Tyh-Menu-Item color="#000">设置</Tyh-Menu-Item>\n  <Tyh-Menu-Item color="#000">回收站</Tyh-Menu-Item>\n</Tyh-Menu>\n      ')]),t._v("\n    ")]),t._m(2),n("Tyh-Menu",[n("Tyh-Menu-Item",{attrs:{prohibit:"",url:"/home"}},[t._v("首页")]),n("Tyh-Menu-Item",{attrs:{prohibit:"",url:"/abc"}},[t._v("内容")]),n("Tyh-Menu-Item",{attrs:{url:""}},[t._v("设置")]),n("Tyh-Menu-Item",{attrs:{url:""}},[t._v("回收站")])],1),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-Menu>\n  <Tyh-Menu-Item prohibit url="/home">首页</Tyh-Menu-Item>\n  <Tyh-Menu-Item prohibit url="/abc">内容</Tyh-Menu-Item>\n  <Tyh-Menu-Item>设置</Tyh-Menu-Item>\n  <Tyh-Menu-Item>回收站</Tyh-Menu-Item>\n</Tyh-Menu>\n      ')]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("带有 Icon 的：")]),n("Tyh-Menu",[n("Tyh-Menu-Item",{attrs:{url:"/home"}},[n("Tyh-icon",{attrs:{icon:"tyh-ui-home-01",color:"#fff"}}),t._v(" 首页 ")],1),n("Tyh-Menu-Item",{attrs:{url:"/abc"}},[n("Tyh-icon",{attrs:{icon:"tyh-ui-PaperPlane-01",color:"#fff"}}),t._v(" 内容 ")],1),n("Tyh-Menu-Item",{attrs:{url:""}},[n("Tyh-icon",{attrs:{icon:"tyh-ui-setting-01",color:"#fff"}}),t._v(" 设置 ")],1),n("Tyh-Menu-Item",{attrs:{url:""}},[n("Tyh-icon",{attrs:{icon:"tyh-ui-trash-01",color:"#fff"}}),t._v(" 回收站 ")],1)],1),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n <Tyh-Menu>\n  <Tyh-Menu-Item url="/home">\n    <Tyh-icon icon="tyh-ui-home-01" color="#fff" />\n    首页\n  </Tyh-Menu-Item>\n  <Tyh-Menu-Item url="/abc">\n    <Tyh-icon icon="tyh-ui-PaperPlane-01" color="#fff" />\n    内容\n  </Tyh-Menu-Item>\n  <Tyh-Menu-Item url="">\n    <Tyh-icon icon="tyh-ui-setting-01" color="#fff" />\n    设置\n  </Tyh-Menu-Item>\n  <Tyh-Menu-Item url="">\n    <Tyh-icon icon="tyh-ui-trash-01" color="#fff" />\n    回收站\n  </Tyh-Menu-Item>\n</Tyh-Menu>\n      ')]),t._v("\n    ")]),n("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),n("p",{staticClass:"explain"},[t._v("Tyh-Menu 组件：")]),n("ConfiguresTable",{attrs:{configures:t.configures}}),n("p",{staticClass:"explain"},[t._v("Tyh-Menu-Item 子组件：")]),n("ConfiguresTable",{attrs:{configures:t.configures2}}),n("h3",{staticClass:"Subtitle"},[t._v("按需引入：")]),n("p",{staticClass:"explain"},[t._v(" 通过下面按需引入的方式，我们可以只引入需要的组件，以达到减小项目体积的目的 ")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"js",attrs:{id:"myCode"}},[t._v("\nimport Vue from 'vue'\nimport TyhMenu from 'tyh-ui/packages/menu'\nimport TyhMenuItem from 'tyh-ui/packages/menu-item'\nVue.use(TyhMenu)\nVue.use(TyhMenuItem)\n\n// 如果使用图标按钮 还需要引入 TyhIcon\nimport TyhIcon from 'tyh-ui/packages/icon'\nVue.use(TyhIcon)\n      ")]),t._v("\n    ")]),n("TurnPage",{attrs:{TurnPageList:t.TurnPageList}})],1)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"explain"},[t._v("通过 "),n("span",[t._v("backgroundColor")]),t._v(" 属性可以配置导航栏背景色：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"explain"},[t._v("通过 "),n("span",[t._v("color")]),t._v(" 属性可以配置子菜单颜色：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"explain"},[t._v("通过 "),n("span",[t._v("prohibit")]),t._v(" 属性可以配置子组件链接是否禁用：")])}],r=n("4ad6"),i=n("d3bf"),s={name:"",components:{ConfiguresTable:r["a"],TurnPage:i["a"]},props:{},data:function(){return{configures:[{param:"backgroundColor",explain:"导航栏背景色",type:"string",value:"——",default:"——"},{param:"buttomShadow",explain:"底部是否显示阴影",type:"boolean",value:"——",default:"false"}],configures2:[{param:"url",explain:"跳转的路径",type:"string",value:"——",default:"——"},{param:"prohibit",explain:"是否禁用",type:"boolean",value:"——",default:"——"},{param:"color",explain:"文字颜色",type:"string",value:"——",default:"#fff"}],TurnPageList:[{text:"Tips 提示",url:"tips"},{text:"Message 消息提示",url:"message"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},o=s,h=(n("a875"),n("2877")),c=Object(h["a"])(o,a,u,!1,null,"5a89b1fc",null);e["default"]=c.exports},"4ad6":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{attrs:{id:"table"}},[t._m(0),t._l(t.configures,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.param))]),n("td",[t._v(t._s(e.explain))]),n("td",[t._v(t._s(e.type))]),n("td",[t._v(t._s(e.value))]),n("td",[t._v(t._s(e.default))])])}))],2)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])}],r={name:"ConfiguresTable",components:{},props:{configures:{type:Array,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},i=r,s=(n("84fb"),n("2877")),o=Object(s["a"])(i,a,u,!1,null,"9fa3a98e",null);e["a"]=o.exports},"6c2f":function(t,e,n){},"84fb":function(t,e,n){"use strict";n("3df8")},a859:function(t,e,n){"use strict";n("6c2f")},a875:function(t,e,n){"use strict";n("ad3e")},ad3e:function(t,e,n){},d3bf:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"TurnPage"}},[t.TurnPageList[0].text?n("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[0].url}},[n("Tyh-icon",{attrs:{icon:"tyh-ui-left-02"}}),t._v(" "+t._s(t.TurnPageList[0].text)+" ")],1):t._e(),t.TurnPageList[1].text?n("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[1].url}},[t._v(" "+t._s(t.TurnPageList[1].text)+" "),n("Tyh-icon",{attrs:{icon:"tyh-ui-right-02"}})],1):t._e()],1)},u=[],r={name:"TurnPage",components:{},props:{TurnPageList:{type:Array,require:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},i=r,s=(n("a859"),n("2877")),o=Object(s["a"])(i,a,u,!1,null,"30c0caf4",null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-acc58298.04c9404f.js.map