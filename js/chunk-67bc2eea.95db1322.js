(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67bc2eea"],{3169:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"TurnPage"}},[t.TurnPageList[0].text?n("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[0].url}},[n("tyh-icon",{attrs:{icon:"tyh-ui-arrow-left-bold"}}),t._v(" "+t._s(t.TurnPageList[0].text)+" ")],1):t._e(),t.TurnPageList[1].text?n("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[1].url}},[t._v(" "+t._s(t.TurnPageList[1].text)+" "),n("tyh-icon",{attrs:{icon:"tyh-ui-arrow-right-bold"}})],1):t._e()],1)},a=[],s={props:{TurnPageList:{type:Array,require:!0}}},r=s,l=(n("5360"),n("2877")),c=Object(l["a"])(r,i,a,!1,null,"740ad147",null);e["a"]=c.exports},5360:function(t,e,n){"use strict";n("8833")},"7c6f":function(t,e,n){},8833:function(t,e,n){},"9cad":function(t,e,n){"use strict";n("9fa0")},"9ee2":function(t,e,n){"use strict";n("7c6f")},"9fa0":function(t,e,n){},e2c5:function(t,e,n){"use strict";var i={columns:[{title:"参数",key:"param"},{title:"说明",key:"explain"},{title:"类型",key:"type"},{title:"可选值",key:"value"},{title:"默认值",key:"default"}],columns2:[{title:"事件名称",key:"name"},{title:"说明",key:"explain"},{title:"回调参数",key:"param"}]};e["a"]=i},fee3:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"component-item"}},[n("h1",{staticClass:"title"},[t._v("Tips 提示")]),n("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),n("p",{staticClass:"explain"},[t._v("基本使用")]),t._m(0),n("tyh-button",{attrs:{type:"primary"},on:{click:t.change1}},[t._v("展示弹框")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v("\n<template>\n  <div>\n    <tyh-button type=\"primary\" @click=\"change1\">展示弹框</tyh-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    change1 () {\n      this.$tips({\n        title: '这是标题',\n        message: '这是内容部分'\n      })\n    }\n  }\n}\n<\/script>\n      ")]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("指定时候后关闭：")]),t._m(1),n("tyh-button",{attrs:{type:"primary"},on:{click:t.change2}},[t._v("展示弹框 6000 毫秒后关闭")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v("\n<template>\n  <div>\n    <tyh-button type=\"primary\" @click=\"change2\">展示弹框</tyh-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    change2 () {\n      this.$tips({\n        title: '这是标题',\n        message: '这是内容部分',\n        times: 6000\n      })\n    }\n  }\n}\n<\/script>\n      ")]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("不同弹出位置：")]),t._m(2),n("tyh-button",{attrs:{type:"primary"},on:{click:t.change3}},[t._v("右上")]),n("tyh-button",{attrs:{type:"primary"},on:{click:t.change4}},[t._v("右下")]),n("tyh-button",{attrs:{type:"primary"},on:{click:t.change5}},[t._v("左上")]),n("tyh-button",{attrs:{type:"primary"},on:{click:t.change6}},[t._v("左下")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v("\n<template>\n  <div>\n    <tyh-button type=\"primary\" @click=\"change3\">右上</tyh-button>\n    <tyh-button type=\"primary\" @click=\"change4\">右下</tyh-button>\n    <tyh-button type=\"primary\" @click=\"change5\">左上</tyh-button>\n    <tyh-button type=\"primary\" @click=\"change6\">左下</tyh-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    change3 () {\n      this.$tips({\n        title: '这是标题',\n        message: '这是内容部分',\n        position: 'top-right'\n      })\n    },\n    change4 () {\n      this.$tips({\n        title: '这是标题',\n        message: '这是内容部分',\n        position: 'bottom-right'\n      })\n    },\n    change5 () {\n      this.$tips({\n        title: '这是标题',\n        message: '这是内容部分',\n        position: 'top-left'\n      })\n    },\n    change6 () {\n      this.$tips({\n        title: '这是标题',\n        message: '这是内容部分',\n        position: 'bottom-left'\n      })\n    }\n  }\n}\n<\/script>\n      ")]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("带有 HTML 片段：")]),t._m(3),n("tyh-button",{attrs:{type:"primary"},on:{click:t.change7}},[t._v("HTML 片段")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v("\n<template>\n  <div>\n    <tyh-button type=\"primary\" @click=\"change2\">展示弹框</tyh-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    change7 () {\n      this.$tips({\n        title: '这是标题',\n        message: '<h2>欢迎使用Tyh ui！</h2>',\n        isHtml: true\n      })\n    }\n  }\n}\n<\/script>\n      ")]),t._v("\n    ")]),n("h3",{staticClass:"Subtitle"},[t._v("配置项")]),n("tyh-table",{attrs:{zebra:"",align:"center",data:t.configures,columns:t.columns}}),n("TurnPage",{attrs:{TurnPageList:t.TurnPageList}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"explain"},[t._v(" tyh-ui 内部注册了一个全局的 "),n("span",[t._v("$tips")]),t._v(" 方法，接收一个对象，可以使用 "),n("span",[t._v("title")]),t._v(" 定义标题，"),n("span",[t._v("message")]),t._v(" 定义内容 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"explain"},[t._v(" 可以在对象中配置 "),n("span",[t._v("times")]),t._v(" 值来指定 xxxx 毫秒后关闭通知 默认 3500 毫秒 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"explain"},[n("span",[t._v("position")]),t._v(" 属性可以配置不同弹出位置")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"explain"},[t._v(" 可以在对象中配置 "),n("span",[t._v("isHtml")]),t._v(" 属性来改变 message 是否为 HTML 片段 ")])}],s=n("3169"),r=n("e2c5"),l={components:{TurnPage:s["a"]},data:function(){return{columns:r["a"].columns,configures:[{param:"title",explain:"标题",type:"string",value:"——",default:"——"},{param:"message",explain:"内容",type:"string",value:"——",default:"——"},{param:"times",explain:"显示时间 单位毫秒",type:"number",value:"——",default:"3500"},{param:"position",explain:"显示的位置",type:"string",value:"top-right / bottom-right / top-left / bottom-left",default:"top-right"},{param:"showClose",explain:"是否显示关闭按钮",type:"boolean",value:"——",default:"true"},{param:"isHtml",explain:"message 是否为 html 片段",type:"boolean",value:"——",default:"false"},{param:"backgroundColor",explain:"自定义背景色",type:"string",value:"——",default:"#fff"}],TurnPageList:[{text:"Input 输入框",url:"input"},{text:"Menu 导航栏",url:"menu"}]}},methods:{change1:function(){this.$tips({title:"这是标题",message:"这是内容部分"})},change2:function(){this.$tips({title:"这是标题",message:"这是内容部分",times:6e3})},change3:function(){this.$tips({title:"这是标题",message:"这是内容部分",position:"top-right"})},change4:function(){this.$tips({title:"这是标题",message:"这是内容部分",position:"bottom-right"})},change5:function(){this.$tips({title:"这是标题",message:"这是内容部分",position:"top-left"})},change6:function(){this.$tips({title:"这是标题",message:"这是内容部分",position:"bottom-left"})},change7:function(){this.$tips({title:"这是标题",message:"<h2>欢迎使用Tyh ui！</h2>",isHtml:!0})}}},c=l,p=(n("9cad"),n("9ee2"),n("2877")),o=Object(p["a"])(c,i,a,!1,null,"1cc3648b",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-67bc2eea.95db1322.js.map