(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5fcd858"],{"10db":function(t,e,n){},1465:function(t,e,n){},"306e":function(t,e,n){"use strict";n("1465")},"4ad6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{attrs:{id:"table"}},[t._m(0),t._l(t.configures,(function(e,i){return n("tr",{key:i},[n("td",[t._v(t._s(e.param))]),n("td",[t._v(t._s(e.explain))]),n("td",[t._v(t._s(e.type))]),n("td",[t._v(t._s(e.value))]),n("td",[t._v(t._s(e.default))])])}))],2)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])}],s={name:"ConfiguresTable",components:{},props:{configures:{type:Array,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},r=s,c=(n("306e"),n("2877")),o=Object(c["a"])(r,i,a,!1,null,"1d65ab96",null);e["a"]=o.exports},"4f17":function(t,e,n){"use strict";n("10db")},"6c60":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"component-item"}},[n("h1",{staticClass:"title"},[t._v("Tips 提示")]),n("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),n("p",{staticClass:"explain"},[t._v(" tyh-ui 内部注册了一个全局的 $tips 方法，接收一个对象，可以使用 title 定义标题，message 定义内容 ")]),n("Tyh-button",{attrs:{type:"primary"},on:{click:t.change1}},[t._v("展示弹框")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v("\n<template>\n  <div>\n    <Tyh-button type=\"primary\" @click=\"change1\">展示弹框</Tyh-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    change1 () {\n      this.$tips({\n        title: '这是标题',\n        message: '这是内容部分'\n      })\n    }\n  }\n}\n<\/script>\n      ")]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("指定时候后关闭：")]),n("p",{staticClass:"explain"},[t._v(" 可以在对象中配置 times 值来指定 xxxx 毫秒后关闭通知 默认 3500 毫秒 ")]),n("Tyh-button",{attrs:{type:"primary"},on:{click:t.change2}},[t._v("展示弹框 6000 毫秒后关闭")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v("\n<template>\n  <div>\n    <Tyh-button type=\"primary\" @click=\"change2\">展示弹框</Tyh-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    change2 () {\n      this.$tips({\n        title: '这是标题',\n        message: '这是内容部分',\n        times: 6000\n      })\n    }\n  }\n}\n<\/script>\n      ")]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("不同弹出位置：")]),n("p",{staticClass:"explain"},[t._v("position 属性可以配置不同弹出位置")]),n("Tyh-button",{attrs:{type:"primary"},on:{click:t.change3}},[t._v("右上")]),n("Tyh-button",{attrs:{type:"primary"},on:{click:t.change4}},[t._v("右下")]),n("Tyh-button",{attrs:{type:"primary"},on:{click:t.change5}},[t._v("左上")]),n("Tyh-button",{attrs:{type:"primary"},on:{click:t.change6}},[t._v("左下")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v("\n<template>\n  <div>\n    <Tyh-button type=\"primary\" @click=\"change3\">右上</Tyh-button>\n    <Tyh-button type=\"primary\" @click=\"change4\">右下</Tyh-button>\n    <Tyh-button type=\"primary\" @click=\"change5\">左上</Tyh-button>\n    <Tyh-button type=\"primary\" @click=\"change6\">左下</Tyh-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    change3 () {\n      this.$tips({\n        title: '这是标题',\n        message: '这是内容部分',\n        position: 'top-right'\n      })\n    },\n    change4 () {\n      this.$tips({\n        title: '这是标题',\n        message: '这是内容部分',\n        position: 'bottom-right'\n      })\n    },\n    change5 () {\n      this.$tips({\n        title: '这是标题',\n        message: '这是内容部分',\n        position: 'top-left'\n      })\n    },\n    change6 () {\n      this.$tips({\n        title: '这是标题',\n        message: '这是内容部分',\n        position: 'bottom-left'\n      })\n    }\n  }\n}\n<\/script>\n      ")]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("带有 HTML 片段：")]),n("p",{staticClass:"explain"},[t._v(" 可以在对象中配置 isHtml 属性来改变 message 是否为 HTML 片段 ")]),n("Tyh-button",{attrs:{type:"primary"},on:{click:t.change7}},[t._v("HTML 片段")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v("\n<template>\n  <div>\n    <Tyh-button type=\"primary\" @click=\"change2\">展示弹框</Tyh-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    change7 () {\n      this.$tips({\n        title: '这是标题',\n        message: '<h2>欢迎使用Tyh ui！</h2>',\n        isHtml: true\n      })\n    }\n  }\n}\n<\/script>\n      ")]),t._v("\n    ")]),n("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),n("ConfiguresTable",{attrs:{configures:t.configures}}),n("TurnPage",{attrs:{TurnPageList:t.TurnPageList}})],1)},a=[],s=n("4ad6"),r=n("d3bf"),c={name:"",components:{ConfiguresTable:s["a"],TurnPage:r["a"]},props:{},data:function(){return{configures:[{param:"title",explain:"标题",type:"string",value:"——",default:"——"},{param:"message",explain:"内容",type:"string",value:"——",default:"——"},{param:"times",explain:"显示时间 单位毫秒",type:"number",value:"——",default:"3500"},{param:"position",explain:"显示的位置",type:"string",value:"top-right / bottom-right / top-left / bottom-left",default:"top-right"},{param:"showClose",explain:"是否显示关闭按钮",type:"boolean",value:"——",default:"true"},{param:"isHtml",explain:"message 是否为 html 片段",type:"boolean",value:"——",default:"false"},{param:"backgroundColor",explain:"自定义背景色",type:"string",value:"——",default:"#fff"}],TurnPageList:[{text:"Input 输入框",url:"input"},{text:"Menu 导航栏",url:"menu"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{change1:function(){this.$tips({title:"这是标题",message:"这是内容部分"})},change2:function(){this.$tips({title:"这是标题",message:"这是内容部分",times:6e3})},change3:function(){this.$tips({title:"这是标题",message:"这是内容部分",position:"top-right"})},change4:function(){this.$tips({title:"这是标题",message:"这是内容部分",position:"bottom-right"})},change5:function(){this.$tips({title:"这是标题",message:"这是内容部分",position:"top-left"})},change6:function(){this.$tips({title:"这是标题",message:"这是内容部分",position:"bottom-left"})},change7:function(){this.$tips({title:"这是标题",message:"<h2>欢迎使用Tyh ui！</h2>",isHtml:!0})}}},o=c,u=(n("4f17"),n("2877")),p=Object(u["a"])(o,i,a,!1,null,"c9917754",null);e["default"]=p.exports},d3bf:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"TurnPage"}},[t.TurnPageList[0].text?n("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[0].url}},[n("Tyh-icon",{attrs:{icon:"tyh-ui-left-02"}}),t._v(" "+t._s(t.TurnPageList[0].text)+" ")],1):t._e(),t.TurnPageList[1].text?n("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[1].url}},[t._v(" "+t._s(t.TurnPageList[1].text)+" "),n("Tyh-icon",{attrs:{icon:"tyh-ui-right-02"}})],1):t._e()],1)},a=[],s={name:"TurnPage",components:{},props:{TurnPageList:{type:Array,require:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{TurnPageListURL:function(t){return"/"!==t?"/#/component/".concat(t):t}}},r=s,c=(n("eb45"),n("2877")),o=Object(c["a"])(r,i,a,!1,null,"f2e8b0b2",null);e["a"]=o.exports},eb45:function(t,e,n){"use strict";n("fb87")},fb87:function(t,e,n){}}]);
//# sourceMappingURL=chunk-c5fcd858.b52787cb.js.map