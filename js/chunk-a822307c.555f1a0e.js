(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a822307c"],{"014f":function(t,e,a){},"11c6":function(t,e,a){},"2faf":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"component-item"}},[a("h1",{staticClass:"title"},[t._v("Card 卡片")]),a("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),a("p",{staticClass:"explain"},[t._v("基本使用")]),t._m(0),t._m(1),a("tyh-card",[[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("主标题")]),a("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("副标题")])],a("p",[t._v("这是内容部分1")]),a("p",[t._v("这是内容部分2")]),a("p",[t._v("这是内容部分3")]),a("p",[t._v("这是内容部分4")])],2),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),a("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<tyh-card>\n  <template>\n    <div slot="title">主标题</div>\n    <div slot="subtitle">副标题</div>\n  </template>\n  <p>这是内容部分1</p>\n  <p>这是内容部分2</p>\n  <p>这是内容部分3</p>\n  <p>这是内容部分4</p>\n</tyh-card>\n      ')]),t._v("\n    ")]),a("p",{staticClass:"explain"},[t._v("简约卡片（没有表头栏）：")]),t._m(2),a("tyh-card",{attrs:{simple:""}},[[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("主标题")]),a("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("副标题")])],a("p",[t._v("这是内容部分1")]),a("p",[t._v("这是内容部分2")]),a("p",[t._v("这是内容部分3")]),a("p",[t._v("这是内容部分4")])],2),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),a("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<tyh-card simple>\n  <template>\n    <div slot="title">主标题</div>\n    <div slot="subtitle">副标题</div>\n  </template>\n  <p>这是内容部分1</p>\n  <p>这是内容部分2</p>\n  <p>这是内容部分3</p>\n  <p>这是内容部分4</p>\n</tyh-card>\n      ')]),t._v("\n    ")]),a("p",{staticClass:"explain"},[t._v("阴影显示时机：")]),t._m(3),a("tyh-card",{staticStyle:{width:"30%",display:"inline-block"},attrs:{shadow:"always"}},[[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("主标题")]),a("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("副标题")])],a("p",[t._v("总是显示阴影")])],2),a("tyh-card",{staticStyle:{width:"30%",display:"inline-block","margin-left":"10px"},attrs:{shadow:"hover"}},[[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("主标题")]),a("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("副标题")])],a("p",[t._v("鼠标移入显示")])],2),a("tyh-card",{staticStyle:{width:"30%",display:"inline-block","margin-left":"10px"},attrs:{shadow:"noShadow"}},[[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("主标题")]),a("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("副标题")])],a("p",[t._v("从不显示")])],2),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),a("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<tyh-card shadow="always">\n  <template>\n    <div slot="title">主标题</div>\n    <div slot="subtitle">副标题</div>\n  </template>\n  <p>总是显示阴影</p>\n</tyh-card>\n\n<tyh-card shadow="hover">\n  <template>\n    <div slot="title">主标题</div>\n    <div slot="subtitle">副标题</div>\n  </template>\n  <p>鼠标移入显示</p>\n</tyh-card>\n\n<tyh-card shadow="noShadow">\n  <template>\n    <div slot="title">主标题</div>\n    <div slot="subtitle">副标题</div>\n  </template>\n  <p>从不显示</p>\n</tyh-card>\n      ')]),t._v("\n    ")]),a("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),a("ConfiguresTable",{attrs:{configures:t.configures}}),a("TurnPage",{attrs:{TurnPageList:t.TurnPageList}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"explain"},[a("span",[t._v("title")]),t._v(" 自定义卡片的主标题")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"explain"},[a("span",[t._v("subtitle")]),t._v(" 自定义卡片的副标题")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"explain"},[a("span",[t._v("simple")]),t._v(" 属性可以配置简约卡片")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"explain"},[a("span",[t._v("shadow")]),t._v(" 属性可以配置阴影显示时机")])}],n=a("4ad6"),l=a("d3bf"),r={name:"",components:{ConfiguresTable:n["a"],TurnPage:l["a"]},props:{},data:function(){return{configures:[{param:"simple",explain:"简约卡片",type:"boolean",value:"——",default:"false"},{param:"shadow",explain:"阴影显示时机",type:"string",value:"always / hover / noShadow",default:"——"},{param:"title（具名插槽）",explain:"自定义卡片的主标题",type:"——",value:"——",default:"——"},{param:"subtitle（具名插槽）",explain:"自定义卡片的副标题",type:"——",value:"——",default:"——"}],TurnPageList:[{text:"List 列表",url:"list"},{text:"Tag 标签",url:"tag"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},o=r,v=(a("e4a0"),a("2877")),c=Object(v["a"])(o,s,i,!1,null,"a524ab74",null);e["default"]=c.exports},"4ad6":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{attrs:{id:"table"}},[t._m(0),t._l(t.configures,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.param))]),a("td",[t._v(t._s(e.explain))]),a("td",[t._v(t._s(e.type))]),a("td",[t._v(t._s(e.value))]),a("td",[t._v(t._s(e.default))])])}))],2)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])}],n={name:"ConfiguresTable",components:{},props:{configures:{type:Array,required:!0}}},l=n,r=(a("5048"),a("2877")),o=Object(r["a"])(l,s,i,!1,null,"0a4f5532",null);e["a"]=o.exports},5048:function(t,e,a){"use strict";a("014f")},c4e0:function(t,e,a){},d3bf:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"TurnPage"}},[t.TurnPageList[0].text?a("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[0].url}},[a("tyh-icon",{attrs:{icon:"tyh-ui-left-02"}}),t._v(" "+t._s(t.TurnPageList[0].text)+" ")],1):t._e(),t.TurnPageList[1].text?a("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[1].url}},[t._v(" "+t._s(t.TurnPageList[1].text)+" "),a("tyh-icon",{attrs:{icon:"tyh-ui-right-02"}})],1):t._e()],1)},i=[],n={name:"TurnPage",props:{TurnPageList:{type:Array,require:!0}}},l=n,r=(a("f3a3"),a("2877")),o=Object(r["a"])(l,s,i,!1,null,"5a248d01",null);e["a"]=o.exports},e4a0:function(t,e,a){"use strict";a("c4e0")},f3a3:function(t,e,a){"use strict";a("11c6")}}]);
//# sourceMappingURL=chunk-a822307c.555f1a0e.js.map