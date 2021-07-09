(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25381492"],{"1a4c":function(t,e,n){},"3df8":function(t,e,n){},"4ad6":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{attrs:{id:"table"}},[t._m(0),t._l(t.configures,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.param))]),n("td",[t._v(t._s(e.explain))]),n("td",[t._v(t._s(e.type))]),n("td",[t._v(t._s(e.value))]),n("td",[t._v(t._s(e.default))])])}))],2)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])}],s={name:"ConfiguresTable",components:{},props:{configures:{type:Array,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},r=s,l=(n("84fb"),n("2877")),u=Object(l["a"])(r,a,i,!1,null,"9fa3a98e",null);e["a"]=u.exports},"53e6":function(t,e,n){"use strict";n("1a4c")},"6c2f":function(t,e,n){},"84fb":function(t,e,n){"use strict";n("3df8")},"968a":function(t,e,n){"use strict";n("cefe")},a859:function(t,e,n){"use strict";n("6c2f")},c1f3:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"component-item"}},[n("h1",{staticClass:"title"},[t._v("Input 输入框")]),n("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),n("p",{staticClass:"explain"},[t._v("基本使用")]),n("Tyh-input",{model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v("\n<template>\n  <Tyh-input v-model=\"text1\" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      text1: ''\n    }\n  }\n}\n<\/script>\n      ")]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("密码框：")]),t._m(0),n("Tyh-input",{attrs:{inpType:"text"},model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}}),n("Tyh-input",{attrs:{inpType:"password"},model:{value:t.text3,callback:function(e){t.text3=e},expression:"text3"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v('\n<template>\n  <Tyh-input inpType="text" v-model="text2" />\n  <Tyh-input inpType="password" v-model="text3" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      text2: \'\',\n      text3: \'\'\n    }\n  }\n}\n<\/script>\n      ')]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("不同尺寸：")]),t._m(1),n("Tyh-input",{attrs:{size:"big"},model:{value:t.text4,callback:function(e){t.text4=e},expression:"text4"}}),n("br"),n("Tyh-input",{attrs:{size:"medium"},model:{value:t.text5,callback:function(e){t.text5=e},expression:"text5"}}),n("br"),n("Tyh-input",{attrs:{size:"small"},model:{value:t.text6,callback:function(e){t.text6=e},expression:"text6"}}),n("br"),n("Tyh-input",{attrs:{size:"mini"},model:{value:t.text7,callback:function(e){t.text7=e},expression:"text7"}}),n("br"),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v('\n<template>\n  <Tyh-input size="big" v-model="text4" /><br />\n  <Tyh-input size="medium" v-model="text5" /><br />\n  <Tyh-input size="small" v-model="text6" /><br />\n  <Tyh-input size="mini" v-model="text7" /><br />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      text4: \'\',\n      text5: \'\',\n      text6: \'\',\n      text7: \'\'\n    }\n  }\n}\n<\/script>\n      ')]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("带有清空按钮：")]),t._m(2),n("Tyh-input",{attrs:{clear:""},model:{value:t.text8,callback:function(e){t.text8=e},expression:"text8"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v("\n<template>\n  <Tyh-input v-model=\"text8\" clear />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      text8: ''\n    }\n  }\n}\n<\/script>\n      ")]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("其他图标：")]),t._m(3),n("Tyh-input",{attrs:{showIcon:"tyh-ui-huojian-01"},model:{value:t.text9,callback:function(e){t.text9=e},expression:"text9"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v('\n<template>\n  <Tyh-input v-model="text9" showIcon="tyh-ui-huojian-01"" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      text9: \'\'\n    }\n  }\n}\n<\/script>\n      ')]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("禁用按钮：")]),t._m(4),n("Tyh-input",{attrs:{prohibit:""},model:{value:t.text10,callback:function(e){t.text10=e},expression:"text10"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v('\n<template>\n  <Tyh-input v-model="text10" prohibit" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      text10: \'\'\n    }\n  }\n}\n<\/script>\n      ')]),t._v("\n    ")]),n("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),n("ConfiguresTable",{attrs:{configures:t.configures}}),n("h3",{staticClass:"Subtitle"},[t._v("按需引入：")]),n("p",{staticClass:"explain"},[t._v(" 通过下面按需引入的方式，我们可以只引入需要的组件，以达到减小项目体积的目的 ")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"js",attrs:{id:"myCode"}},[t._v("\nimport Vue from 'vue'\nimport TyhInput from 'tyh-ui/packages/input'\nVue.use(TyhInput)\n      ")]),t._v("\n    ")]),n("TurnPage",{attrs:{TurnPageList:t.TurnPageList}})],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"explain"},[n("span",[t._v("inpType")]),t._v(" 属性可以规定文本框类型")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"explain"},[n("span",[t._v("size")]),t._v(" 属性可以配置文本框尺寸")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"explain"},[n("span",[t._v("clear")]),t._v(" 属性可以配置带有清空按钮的文本框")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"explain"},[n("span",[t._v("showIcon")]),t._v(" 属性可以配置文本框带有其他图标，可以直接复制 icon 的名字传递即可，但带有其他图标后，将不再有清空的功能 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"explain"},[n("span",[t._v("prohibit")]),t._v(" 属性可以配置文本框禁用状态")])}],s=n("4ad6"),r=n("d3bf"),l={name:"",components:{ConfiguresTable:s["a"],TurnPage:r["a"]},props:{},data:function(){return{text1:"",text2:"",text3:"",text4:"",text5:"",text6:"",text7:"",text8:"",text9:"",text10:"",configures:[{param:"v-model",explain:"绑定值",type:"string / number",value:"——",default:"——"},{param:"inpType",explain:"类型",type:"string",value:"text / password / success / danger / warning",default:"text"},{param:"innerText",explain:"输入框占位文本",type:"string",value:"——",default:"——"},{param:"size",explain:"文本框尺寸",type:"string",value:"big / medium / small / mini",default:"medium"},{param:"max",explain:"最大输入上限",type:"string",value:"——",default:"——"},{param:"clear",explain:"是否可以清空文本框",type:"boolean",value:"——",default:"fasle"},{param:"showIcon",explain:"右侧显示的图标",type:"string",value:"——",default:"tyh-ui-close-03"},{param:"prohibit",explain:"是否禁用",type:"boolean",value:"——",default:"fasle"},{param:"autofocus",explain:"是否自动获取焦点",type:"boolean",value:"——",default:"fasle"},{param:"name",explain:"原生 name 属性",type:"string",value:"——",default:"——"}],TurnPageList:[{text:"Link 链接",url:"link"},{text:"Tips 提示",url:"tips"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},u=l,c=(n("968a"),n("53e6"),n("2877")),p=Object(c["a"])(u,a,i,!1,null,"49366144",null);e["default"]=p.exports},cefe:function(t,e,n){},d3bf:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"TurnPage"}},[t.TurnPageList[0].text?n("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[0].url}},[n("Tyh-icon",{attrs:{icon:"tyh-ui-left-02"}}),t._v(" "+t._s(t.TurnPageList[0].text)+" ")],1):t._e(),t.TurnPageList[1].text?n("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[1].url}},[t._v(" "+t._s(t.TurnPageList[1].text)+" "),n("Tyh-icon",{attrs:{icon:"tyh-ui-right-02"}})],1):t._e()],1)},i=[],s={name:"TurnPage",components:{},props:{TurnPageList:{type:Array,require:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},r=s,l=(n("a859"),n("2877")),u=Object(l["a"])(r,a,i,!1,null,"30c0caf4",null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-25381492.8cce9a76.js.map