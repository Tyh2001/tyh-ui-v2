(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed9bff00"],{"11c6":function(e,t,a){},"214a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"component-item"}},[a("h1",{staticClass:"title"},[e._v("List 列表")]),a("h3",{staticClass:"Subtitle"},[e._v("基本使用：")]),a("p",{staticClass:"explain"},[e._v("基本使用")]),e._m(0),e._m(1),a("tyh-list",{attrs:{content:e.arr,iskey:"name"}}),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("      "),a("code",{staticClass:"vue",attrs:{id:"myCode"}},[e._v("\n<template>\n  <tyh-list :content=\"arr\" iskey=\"name\" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      arr: [\n        { name: '小明1', age: 11 },\n        { name: '小明2', age: 12 },\n        { name: '小明3', age: 13 },\n        { name: '小明4', age: 14 },\n        { name: '小明5', age: 15 },\n        { name: '小明6', age: 16 },\n        { name: '小明7', age: 17 },\n        { name: '小明8', age: 18 }\n      ]\n    }\n  }\n}\n<\/script>\n      ")]),e._v("\n    ")]),a("p",{staticClass:"explain"},[e._v("有表头和页脚的列表：")]),e._m(2),e._m(3),a("tyh-list",{attrs:{content:e.arr,iskey:"name",header:"这是头部",footer:"这是页脚"}}),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("      "),a("code",{staticClass:"html",attrs:{id:"myCode"}},[e._v("\n<template>\n  <tyh-list :content=\"arr\" iskey=\"name\" header=\"这是头部\" footer=\"这是页脚\" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      arr: [\n        { name: '小明1', age: 11 },\n        { name: '小明2', age: 12 },\n        { name: '小明3', age: 13 },\n        { name: '小明4', age: 14 },\n        { name: '小明5', age: 15 },\n        { name: '小明6', age: 16 },\n        { name: '小明7', age: 17 },\n        { name: '小明8', age: 18 }\n      ]\n    }\n  }\n}\n      ")]),e._v("\n    ")]),a("p",{staticClass:"explain"},[e._v("有斑马纹和序号：")]),e._m(4),e._m(5),a("tyh-list",{attrs:{zebra:"",num:"",content:e.arr,iskey:"name",header:"这是头部",footer:"这是页脚"}}),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("      "),a("code",{staticClass:"html",attrs:{id:"myCode"}},[e._v("\n<template>\n  <tyh-list zebra num :content=\"arr\" iskey=\"name\" header=\"这是头部\" footer=\"这是页脚\" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      arr: [\n        { name: '小明1', age: 11 },\n        { name: '小明2', age: 12 },\n        { name: '小明3', age: 13 },\n        { name: '小明4', age: 14 },\n        { name: '小明5', age: 15 },\n        { name: '小明6', age: 16 },\n        { name: '小明7', age: 17 },\n        { name: '小明8', age: 18 }\n      ]\n    }\n  }\n}\n      ")]),e._v("\n    ")]),a("h3",{staticClass:"Subtitle"},[e._v("配置项：")]),a("ConfiguresTable",{attrs:{configures:e.configures}}),a("TurnPage",{attrs:{TurnPageList:e.TurnPageList}})],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"explain"},[a("span",[e._v("content")]),e._v(" 属性可以绑定需要展示的数组元素")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"explain"},[a("span",[e._v("iskey")]),e._v(" 属性可以绑定数组中每个元素的键值")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"explain"},[a("span",[e._v("header")]),e._v(" 表头内容")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"explain"},[a("span",[e._v("footer")]),e._v(" 页脚内容")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"explain"},[a("span",[e._v("zebra")]),e._v(" 是否显示斑马纹")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"explain"},[a("span",[e._v("num")]),e._v(" 是否显示序号")])}],s=a("4ad6"),i=a("d3bf"),l={name:"",components:{ConfiguresTable:s["a"],TurnPage:i["a"]},props:{},data:function(){return{arr:[{name:"小明1",age:11},{name:"小明2",age:12},{name:"小明3",age:13},{name:"小明4",age:14},{name:"小明5",age:15},{name:"小明6",age:16},{name:"小明7",age:17},{name:"小明8",age:18}],configures:[{param:"header",explain:"表头信息",type:"string / number",value:"——",default:"——"},{param:"footer",explain:"页脚信息",type:"string / number",value:"——",default:"——"},{param:"content",explain:"主体内容",type:"array / string",value:"——",default:"——"},{param:"iskey",explain:"循环对象键名",type:"string",value:"——",default:"——"},{param:"zebra",explain:"是否显示斑马纹",type:"boolean",value:"——",default:"——"},{param:"num",explain:"是否显示序号",type:"boolean",value:"——",default:"false"}],TurnPageList:[{text:"Button 按钮",url:"button"},{text:"Card 卡片",url:"card"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},u=l,c=(a("ab07"),a("2877")),m=Object(c["a"])(u,n,r,!1,null,"ba2def3c",null);t["default"]=m.exports},"4ad6":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{attrs:{id:"table"}},[e._m(0),e._l(e.configures,(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.param))]),a("td",[e._v(e._s(t.explain))]),a("td",[e._v(e._s(t.type))]),a("td",[e._v(e._s(t.value))]),a("td",[e._v(e._s(t.default))])])}))],2)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[e._v("参数")]),a("th",[e._v("说明")]),a("th",[e._v("类型")]),a("th",[e._v("可选值")]),a("th",[e._v("默认值")])])}],s={name:"ConfiguresTable",components:{},props:{configures:{type:Array,required:!0}}},i=s,l=(a("b6a2"),a("2877")),u=Object(l["a"])(i,n,r,!1,null,"25a3e76c",null);t["a"]=u.exports},"575b":function(e,t,a){},"7f4f":function(e,t,a){},ab07:function(e,t,a){"use strict";a("575b")},b6a2:function(e,t,a){"use strict";a("7f4f")},d3bf:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"TurnPage"}},[e.TurnPageList[0].text?a("router-link",{staticClass:"pageList",attrs:{to:e.TurnPageList[0].url}},[a("tyh-icon",{attrs:{icon:"tyh-ui-left-02"}}),e._v(" "+e._s(e.TurnPageList[0].text)+" ")],1):e._e(),e.TurnPageList[1].text?a("router-link",{staticClass:"pageList",attrs:{to:e.TurnPageList[1].url}},[e._v(" "+e._s(e.TurnPageList[1].text)+" "),a("tyh-icon",{attrs:{icon:"tyh-ui-right-02"}})],1):e._e()],1)},r=[],s={name:"TurnPage",props:{TurnPageList:{type:Array,require:!0}}},i=s,l=(a("f3a3"),a("2877")),u=Object(l["a"])(i,n,r,!1,null,"5a248d01",null);t["a"]=u.exports},f3a3:function(e,t,a){"use strict";a("11c6")}}]);
//# sourceMappingURL=chunk-ed9bff00.9dfe1d63.js.map