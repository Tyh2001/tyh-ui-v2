(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bf23d7f"],{"0471":function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"component-item"}},[n("h1",{staticClass:"title"},[e._v("List 列表")]),n("h3",{staticClass:"Subtitle"},[e._v("基本使用：")]),n("p",{staticClass:"explain"},[e._v("content 属性可以绑定需要展示的数组元素")]),n("p",{staticClass:"explain"},[e._v("iskey 属性可以绑定数组中每个元素的键值")]),n("TyhList",{attrs:{content:e.arr,iskey:"name"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[e._v("\n<template>\n  <TyhList :content=\"arr\" iskey=\"name\" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      arr: [\n        { name: '小明1', age: 11 },\n        { name: '小明2', age: 12 },\n        { name: '小明3', age: 13 },\n        { name: '小明4', age: 14 },\n        { name: '小明5', age: 15 },\n        { name: '小明6', age: 16 },\n        { name: '小明7', age: 17 },\n        { name: '小明8', age: 18 }\n      ]\n    }\n  }\n}\n<\/script>\n      ")]),e._v("\n    ")]),n("p",{staticClass:"explain"},[e._v("有表头和页脚的列表：")]),n("p",{staticClass:"explain"},[e._v("header 表头内容")]),n("p",{staticClass:"explain"},[e._v("footer 页脚内容")]),n("TyhList",{attrs:{content:e.arr,iskey:"name",header:"这是头部",footer:"这是页脚"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("      "),n("code",{staticClass:"html",attrs:{id:"myCode"}},[e._v("\n<template>\n  <TyhList :content=\"arr\" iskey=\"name\" header=\"这是头部\" footer=\"这是页脚\" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      arr: [\n        { name: '小明1', age: 11 },\n        { name: '小明2', age: 12 },\n        { name: '小明3', age: 13 },\n        { name: '小明4', age: 14 },\n        { name: '小明5', age: 15 },\n        { name: '小明6', age: 16 },\n        { name: '小明7', age: 17 },\n        { name: '小明8', age: 18 }\n      ]\n    }\n  }\n}\n      ")]),e._v("\n    ")]),n("p",{staticClass:"explain"},[e._v("有斑马纹和序号：")]),n("p",{staticClass:"explain"},[e._v("zebra 是否显示斑马纹")]),n("p",{staticClass:"explain"},[e._v("num 是否显示序号")]),n("TyhList",{attrs:{zebra:"",num:"",content:e.arr,iskey:"name",header:"这是头部",footer:"这是页脚"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("      "),n("code",{staticClass:"html",attrs:{id:"myCode"}},[e._v("\n<template>\n  <TyhList zebra num :content=\"arr\" iskey=\"name\" header=\"这是头部\" footer=\"这是页脚\" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      arr: [\n        { name: '小明1', age: 11 },\n        { name: '小明2', age: 12 },\n        { name: '小明3', age: 13 },\n        { name: '小明4', age: 14 },\n        { name: '小明5', age: 15 },\n        { name: '小明6', age: 16 },\n        { name: '小明7', age: 17 },\n        { name: '小明8', age: 18 }\n      ]\n    }\n  }\n}\n      ")]),e._v("\n    ")]),n("h3",{staticClass:"Subtitle"},[e._v("配置项：")]),n("table",{staticClass:"table"},[e._m(0),e._l(e.configures,(function(a,t){return n("tr",{key:t},[n("td",[e._v(e._s(a.param))]),n("td",[e._v(e._s(a.explain))]),n("td",[e._v(e._s(a.type))]),n("td",[e._v(e._s(a.value))]),n("td",[e._v(e._s(a.default))])])}))],2)],1)},s=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("tr",[n("th",[e._v("参数")]),n("th",[e._v("说明")]),n("th",[e._v("类型")]),n("th",[e._v("可选值")]),n("th",[e._v("默认值")])])}],r={name:"",components:{},props:{},data:function(){return{arr:[{name:"小明1",age:11},{name:"小明2",age:12},{name:"小明3",age:13},{name:"小明4",age:14},{name:"小明5",age:15},{name:"小明6",age:16},{name:"小明7",age:17},{name:"小明8",age:18}],configures:[{param:"header",explain:"表头信息",type:"string / number",value:"——",default:"——"},{param:"footer",explain:"页脚信息",type:"string / number",value:"——",default:"——"},{param:"content",explain:"主体内容",type:"array / string",value:"——",default:"——"},{param:"iskey",explain:"循环对象键名",type:"string",value:"——",default:"——"},{param:"zebra",explain:"是否显示斑马纹",type:"boolean",value:"true / false",default:"——"},{param:"num",explain:"是否显示序号",type:"boolean",value:"true / false",default:"false"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},i=r,l=(n("61de"),n("2877")),m=Object(l["a"])(i,t,s,!1,null,"d89fc962",null);a["default"]=m.exports},"55c3":function(e,a,n){},"61de":function(e,a,n){"use strict";n("55c3")}}]);
//# sourceMappingURL=chunk-0bf23d7f.0e2637c3.js.map