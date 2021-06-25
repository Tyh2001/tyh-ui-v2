(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-477673da"],{2750:function(t,e,n){"use strict";n("5c48")},4585:function(t,e,n){"use strict";n("e0a0")},"4ad6":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{attrs:{id:"table"}},[t._m(0),t._l(t.configures,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.param))]),n("td",[t._v(t._s(e.explain))]),n("td",[t._v(t._s(e.type))]),n("td",[t._v(t._s(e.value))]),n("td",[t._v(t._s(e.default))])])}))],2)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])}],s={name:"ConfiguresTable",components:{},props:{configures:{type:Array,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},r=s,u=(n("d9ad"),n("2877")),l=Object(u["a"])(r,a,i,!1,null,"b60359fe",null);e["a"]=l.exports},"5c48":function(t,e,n){},"7a07":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"component-item"}},[n("h1",{staticClass:"title"},[t._v("Input 输入框")]),n("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),n("p",{staticClass:"explain"},[t._v("基础使用")]),n("Tyh-input",{model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v("\n<template>\n  <Tyh-input v-model=\"text1\" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      text1: ''\n    }\n  }\n}\n<\/script>\n      ")]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("密码框：")]),n("p",{staticClass:"explain"},[t._v("inpType 属性可以规定文本框类型")]),n("Tyh-input",{attrs:{inpType:"text"},model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}}),n("Tyh-input",{attrs:{inpType:"password"},model:{value:t.text3,callback:function(e){t.text3=e},expression:"text3"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v('\n<template>\n  <Tyh-input inpType="text" v-model="text2" />\n  <Tyh-input inpType="password" v-model="text3" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      text2: \'\',\n      text3: \'\'\n    }\n  }\n}\n<\/script>\n      ')]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("不同尺寸：")]),n("p",{staticClass:"explain"},[t._v("size 属性可以配置文本框尺寸")]),n("Tyh-input",{attrs:{size:"big"},model:{value:t.text4,callback:function(e){t.text4=e},expression:"text4"}}),n("br"),n("Tyh-input",{attrs:{size:"medium"},model:{value:t.text5,callback:function(e){t.text5=e},expression:"text5"}}),n("br"),n("Tyh-input",{attrs:{size:"small"},model:{value:t.text6,callback:function(e){t.text6=e},expression:"text6"}}),n("br"),n("Tyh-input",{attrs:{size:"mini"},model:{value:t.text7,callback:function(e){t.text7=e},expression:"text7"}}),n("br"),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v('\n<template>\n  <Tyh-input size="big" v-model="text4" /><br />\n  <Tyh-input size="medium" v-model="text5" /><br />\n  <Tyh-input size="small" v-model="text6" /><br />\n  <Tyh-input size="mini" v-model="text7" /><br />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      text4: \'\',\n      text5: \'\',\n      text6: \'\',\n      text7: \'\'\n    }\n  }\n}\n<\/script>\n      ')]),t._v("\n    ")]),n("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),n("ConfiguresTable",{attrs:{configures:t.configures}}),n("TurnPage",{attrs:{TurnPageList:t.TurnPageList}})],1)},i=[],s=n("4ad6"),r=n("d3bf"),u={name:"",components:{ConfiguresTable:s["a"],TurnPage:r["a"]},props:{},data:function(){return{text1:"",text2:"",text3:"",text4:"",text5:"",text6:"",text7:"",configures:[{param:"v-model",explain:"绑定值",type:"string / number",value:"——",default:"——"},{param:"inpType",explain:"类型",type:"string",value:"text / password / success / danger / warning",default:"text"},{param:"innerText",explain:"输入框占位文本",type:"string",value:"——",default:"——"},{param:"size",explain:"文本框尺寸",type:"string",value:"big / medium / small / mini",default:"medium"}],TurnPageList:[{text:"Link 链接",url:"link"},{text:"Tips 提示",url:"tips"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},l=u,c=(n("2750"),n("2877")),o=Object(c["a"])(l,a,i,!1,null,"38f4eb72",null);e["default"]=o.exports},"81a8":function(t,e,n){},d3bf:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"TurnPage"}},[t.TurnPageList[0].text?n("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[0].url}},[n("Tyh-icon",{attrs:{icon:"tyh-ui-left-02"}}),t._v(" "+t._s(t.TurnPageList[0].text)+" ")],1):t._e(),t.TurnPageList[1].text?n("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[1].url}},[t._v(" "+t._s(t.TurnPageList[1].text)+" "),n("Tyh-icon",{attrs:{icon:"tyh-ui-right-02"}})],1):t._e()],1)},i=[],s={name:"TurnPage",components:{},props:{TurnPageList:{type:Array,require:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{TurnPageListURL:function(t){return"/"!==t?"/#/component/".concat(t):t}}},r=s,u=(n("4585"),n("2877")),l=Object(u["a"])(r,a,i,!1,null,"37e2211c",null);e["a"]=l.exports},d9ad:function(t,e,n){"use strict";n("81a8")},e0a0:function(t,e,n){}}]);
//# sourceMappingURL=chunk-477673da.b8fd697c.js.map