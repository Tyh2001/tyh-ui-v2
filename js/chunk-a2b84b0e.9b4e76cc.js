(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2b84b0e"],{"4ede":function(t,e,s){"use strict";s("e44e")},e44e:function(t,e,s){},ff86:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"component-item"}},[s("h1",{staticClass:"title"},[t._v("Card 卡片")]),s("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),s("p",{staticClass:"explain"},[t._v("title 自定义卡片的主标题")]),s("p",{staticClass:"explain"},[t._v("subtitle 自定义卡片的副标题")]),s("Tyh-card",[[s("div",{attrs:{slot:"title"},slot:"title"},[t._v("主标题")]),s("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("副标题")])],s("p",[t._v("这是内容部分1")]),s("p",[t._v("这是内容部分2")]),s("p",[t._v("这是内容部分3")]),s("p",[t._v("这是内容部分4")])],2),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),s("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-card>\n  <template>\n    <div slot="title">主标题</div>\n    <div slot="subtitle">副标题</div>\n  </template>\n  <p>这是内容部分1</p>\n  <p>这是内容部分2</p>\n  <p>这是内容部分3</p>\n  <p>这是内容部分4</p>\n</Tyh-card>\n      ')]),t._v("\n    ")]),s("p",{staticClass:"explain"},[t._v("简约卡片（没有表头栏）：")]),s("p",{staticClass:"explain"},[t._v("simple 属性可以配置简约卡片")]),s("Tyh-card",{attrs:{simple:""}},[[s("div",{attrs:{slot:"title"},slot:"title"},[t._v("主标题")]),s("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("副标题")])],s("p",[t._v("这是内容部分1")]),s("p",[t._v("这是内容部分2")]),s("p",[t._v("这是内容部分3")]),s("p",[t._v("这是内容部分4")])],2),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),s("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-card simple>\n  <template>\n    <div slot="title">主标题</div>\n    <div slot="subtitle">副标题</div>\n  </template>\n  <p>这是内容部分1</p>\n  <p>这是内容部分2</p>\n  <p>这是内容部分3</p>\n  <p>这是内容部分4</p>\n</Tyh-card>\n      ')]),t._v("\n    ")]),s("p",{staticClass:"explain"},[t._v("阴影显示时机：")]),s("p",{staticClass:"explain"},[t._v("shadow 属性可以配置阴影显示时机")]),s("Tyh-card",{staticStyle:{width:"30%",display:"inline-block"},attrs:{shadow:"always"}},[[s("div",{attrs:{slot:"title"},slot:"title"},[t._v("主标题")]),s("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("副标题")])],s("p",[t._v("总是显示阴影")])],2),s("Tyh-card",{staticStyle:{width:"30%",display:"inline-block","margin-left":"10px"},attrs:{shadow:"hover"}},[[s("div",{attrs:{slot:"title"},slot:"title"},[t._v("主标题")]),s("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("副标题")])],s("p",[t._v("鼠标移入显示")])],2),s("Tyh-card",{staticStyle:{width:"30%",display:"inline-block","margin-left":"10px"},attrs:{shadow:"noShadow"}},[[s("div",{attrs:{slot:"title"},slot:"title"},[t._v("主标题")]),s("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("副标题")])],s("p",[t._v("从不显示")])],2),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),s("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-card shadow="always">\n  <template>\n    <div slot="title">主标题</div>\n    <div slot="subtitle">副标题</div>\n  </template>\n  <p>这是内容部分1</p>\n</Tyh-card>\n\n<Tyh-card shadow="hover">\n  <template>\n    <div slot="title">主标题</div>\n    <div slot="subtitle">副标题</div>\n  </template>\n  <p>这是内容部分1</p>\n</Tyh-card>\n\n<Tyh-card shadow="noShadow">\n  <template>\n    <div slot="title">主标题</div>\n    <div slot="subtitle">副标题</div>\n  </template>\n  <p>这是内容部分1</p>\n</Tyh-card>\n      ')]),t._v("\n    ")]),s("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),s("table",{staticClass:"table"},[t._m(0),t._l(t.configures,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(e.param))]),s("td",[t._v(t._s(e.explain))]),s("td",[t._v(t._s(e.type))]),s("td",[t._v(t._s(e.value))]),s("td",[t._v(t._s(e.default))])])}))],2)],1)},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",[t._v("参数")]),s("th",[t._v("说明")]),s("th",[t._v("类型")]),s("th",[t._v("可选值")]),s("th",[t._v("默认值")])])}],i={name:"card",components:{},props:{},data:function(){return{configures:[{param:"simple",explain:"简约卡片",type:"boolean",value:"true / false",default:"false"},{param:"shadow",explain:"阴影显示时机",type:"string",value:"always / hover / noShadow",default:"——"},{param:"title（具名插槽）",explain:"自定义卡片的主标题",type:"——",value:"——",default:"——"},{param:"subtitle（具名插槽）",explain:"自定义卡片的副标题",type:"——",value:"——",default:"——"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},n=i,d=(s("4ede"),s("2877")),v=Object(d["a"])(n,a,l,!1,null,"2758fbb8",null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-a2b84b0e.9b4e76cc.js.map