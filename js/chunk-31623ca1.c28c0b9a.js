(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31623ca1"],{"0873":function(t,e,s){"use strict";s("eea4")},3169:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"TurnPage"}},[t.TurnPageList[0].text?s("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[0].url}},[s("tyh-icon",{attrs:{icon:"tyh-ui-arrow-left-bold"}}),t._v(" "+t._s(t.TurnPageList[0].text)+" ")],1):t._e(),t.TurnPageList[1].text?s("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[1].url}},[t._v(" "+t._s(t.TurnPageList[1].text)+" "),s("tyh-icon",{attrs:{icon:"tyh-ui-arrow-right-bold"}})],1):t._e()],1)},r=[],a={props:{TurnPageList:{type:Array,require:!0}}},n=a,u=(s("5360"),s("2877")),c=Object(u["a"])(n,i,r,!1,null,"740ad147",null);e["a"]=c.exports},5360:function(t,e,s){"use strict";s("8833")},8833:function(t,e,s){},9481:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"component-item"}},[s("h1",{staticClass:"title"},[t._v("Crumbs 面包屑")]),s("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),s("p",{staticClass:"explain"},[t._v("基本使用")]),s("tyh-crumbs",[s("tyh-crumbs-item",{attrs:{to:"/"}},[t._v("首页")]),s("tyh-crumbs-item",[t._v("学员管理")]),s("tyh-crumbs-item",[t._v("文章管理")]),s("tyh-crumbs-item",[t._v("设置")])],1),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),s("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<tyh-crumbs>\n  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>\n  <tyh-crumbs-item>学员管理</tyh-crumbs-item>\n  <tyh-crumbs-item>文章管理</tyh-crumbs-item>\n  <tyh-crumbs-item>设置</tyh-crumbs-item>\n</tyh-crumbs>\n      ')]),t._v("\n    ")]),s("p",{staticClass:"explain"},[t._v("不同的分隔符：")]),t._m(0),s("tyh-crumbs",{attrs:{separator:"tyh-ui-right-02"}},[s("tyh-crumbs-item",{attrs:{to:"/"}},[t._v("首页")]),s("tyh-crumbs-item",[t._v("学员管理")]),s("tyh-crumbs-item",[t._v("文章管理")]),s("tyh-crumbs-item",[t._v("设置")])],1),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),s("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<tyh-crumbs separator="tyh-ui-right-02">\n  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>\n  <tyh-crumbs-item>学员管理</tyh-crumbs-item>\n  <tyh-crumbs-item>文章管理</tyh-crumbs-item>\n  <tyh-crumbs-item>设置</tyh-crumbs-item>\n</tyh-crumbs>\n      ')]),t._v("\n    ")]),s("p",{staticClass:"explain"},[t._v("跳转：")]),t._m(1),s("tyh-crumbs",[s("tyh-crumbs-item",{attrs:{to:"/"}},[t._v("首页")]),s("tyh-crumbs-item",{attrs:{to:"/student"}},[t._v("学员管理")]),s("tyh-crumbs-item",[t._v("文章管理")]),s("tyh-crumbs-item",[t._v("设置")])],1),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),s("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<tyh-crumbs>\n  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>\n  <tyh-crumbs-item to="/student">学员管理</tyh-crumbs-item>\n  <tyh-crumbs-item>文章管理</tyh-crumbs-item>\n  <tyh-crumbs-item>设置</tyh-crumbs-item>\n</tyh-crumbs>\n      ')]),t._v("\n    ")]),s("h3",{staticClass:"Subtitle"},[t._v("tyh-Crumbs 配置项")]),s("tyh-table",{attrs:{zebra:"",align:"center",data:t.configures,columns:t.columns}}),s("p",{staticClass:"Subtitle"},[t._v("tyh-Crumbs-Item 配置项")]),s("tyh-table",{attrs:{zebra:"",align:"center",data:t.configures2,columns:t.columns}}),s("TurnPage",{attrs:{TurnPageList:t.TurnPageList}})],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"explain"},[t._v(" 通过给父组件"),s("span",[t._v("separator")]),t._v(" 属性可以配置不同的分隔符，使用 icon 类名 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"explain"},[t._v(" 通过给子组件"),s("span",[t._v("to")]),t._v(" 属性可以配置跳转路径，添加该属性后文章点击会跳转，并且加粗显示 ")])}],a=s("3169"),n=s("e2c5"),u={components:{TurnPage:a["a"]},data:function(){return{columns:n["a"].columns,configures:[{param:"separator",explain:"分隔符，icon 的类名",type:"string",value:"——",default:"tyh-ui-xiexian-01"}],configures2:[{param:"to",explain:"跳转的路径",type:"string",value:"——",default:"——"}],TurnPageList:[{text:"Icon 图标",url:"icon"},{text:"Table 表格",url:"table"}]}}},c=u,m=(s("0873"),s("2877")),l=Object(m["a"])(c,i,r,!1,null,"6f6ecfa0",null);e["default"]=l.exports},e2c5:function(t,e,s){"use strict";var i={columns:[{title:"参数",key:"param"},{title:"说明",key:"explain"},{title:"类型",key:"type"},{title:"可选值",key:"value"},{title:"默认值",key:"default"}],columns2:[{title:"事件名称",key:"name"},{title:"说明",key:"explain"},{title:"回调参数",key:"param"}]};e["a"]=i},eea4:function(t,e,s){}}]);
//# sourceMappingURL=chunk-31623ca1.c28c0b9a.js.map