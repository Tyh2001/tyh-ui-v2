(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62ae1a5b"],{"16c2":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"component-item"}},[e("h1",{staticClass:"title"},[t._v("Message 消息通知")]),e("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),e("p",{staticClass:"explain"},[t._v(" tyh-ui 内部注册了一个全局的 $message 方法，接收一个对象，可以使用 message 定义内容 ")]),e("Tyh-button",{attrs:{type:"primary"},on:{click:t.open1}},[t._v("提示1")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<template>\n  <div>\n    <Tyh-button type="primary" @click="open1">打开提示</Tyh-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    open1 () {\n      this.$message({\n        message: \'这个是一个消息\'\n      })\n    }\n  }\n}\n<\/script>\n      ')]),t._v("\n    ")]),e("p",{staticClass:"explain"},[t._v("不同类型的：")]),e("p",{staticClass:"explain"},[t._v("type 属性可以配置提示框的类型")]),e("p",{staticClass:"explain"},[t._v(" iconClass 属性可以配置 icon 的 class 属性，来展示 icon ")]),e("Tyh-button",{attrs:{type:"primary"},on:{click:t.open2}},[t._v("消息提示")]),e("Tyh-button",{attrs:{type:"primary"},on:{click:t.open3}},[t._v("成功提示")]),e("Tyh-button",{attrs:{type:"primary"},on:{click:t.open4}},[t._v("危险提示")]),e("Tyh-button",{attrs:{type:"primary"},on:{click:t.open5}},[t._v("警告提示")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v("\n<template>\n  <div>\n    <Tyh-button type=\"primary\" @click=\"open2\">消息提示</Tyh-button>\n    <Tyh-button type=\"primary\" @click=\"open3\">成功提示</Tyh-button>\n    <Tyh-button type=\"primary\" @click=\"open4\">危险提示</Tyh-button>\n    <Tyh-button type=\"primary\" @click=\"open5\">警告提示</Tyh-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    open2 () {\n      this.$message({\n        message: '这是一个消息提示',\n        type: 'primary',\n        iconClass: 'tyh-ui-primary-01'\n      })\n    },\n    open3 () {\n      this.$message({\n        message: '这是一个成功提示',\n        type: 'danger',\n        iconClass: 'tyh-ui-success-01'\n      })\n    },\n    open4 () {\n      this.$message({\n        message: '这是一个危险提示',\n        type: 'success',\n        iconClass: 'tyh-ui-danger-01'\n      })\n    },\n    open5 () {\n      this.$message({\n        message: '这是一个警告提示',\n        type: 'warning',\n        iconClass: 'tyh-ui-warning-01'\n      })\n    }\n  }\n}\n<\/script>\n      ")]),t._v("\n    ")]),e("p",{staticClass:"explain"},[t._v("显示市场：")]),e("p",{staticClass:"explain"},[t._v(" times 属性可以配置提示框的显示时长，并在 xxxx 毫秒后消失 ")]),e("Tyh-button",{attrs:{type:"primary"},on:{click:t.open6}},[t._v("提示3000毫秒后消失")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<template>\n  <div>\n    <Tyh-button type="primary" @click="open6">提示3000毫秒后消失</Tyh-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    open6 () {\n      this.$message({\n        message: \'这个是一个消息\'\n      })\n    }\n  }\n}\n<\/script>\n      ')]),t._v("\n    ")]),e("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),e("table",{staticClass:"table"},[t._m(0),t._l(t.configures,(function(n,s){return e("tr",{key:s},[e("td",[t._v(t._s(n.param))]),e("td",[t._v(t._s(n.explain))]),e("td",[t._v(t._s(n.type))]),e("td",[t._v(t._s(n.value))]),e("td",[t._v(t._s(n.default))])])}))],2)],1)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])}],i={name:"",components:{},props:{},data:function(){return{configures:[{param:"message",explain:"显示的文字内容",type:"string",value:"——",default:"——"},{param:"times",explain:"持续显示的时间",type:"number",value:"——",default:"1400"},{param:"type",explain:"提示的类型",type:"string",value:"primary / success / danger / warning",default:"——"},{param:"iconClass",explain:"定义 icon 的类名",type:"string",value:"——",default:"——"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{open1:function(){this.$message({message:"这是一个提示"})},open2:function(){this.$message({message:"这是一个消息提示",type:"primary",iconClass:"tyh-ui-primary-01"})},open3:function(){this.$message({message:"这是一个成功提示",type:"danger",iconClass:"tyh-ui-success-01"})},open4:function(){this.$message({message:"这是一个危险提示",type:"success",iconClass:"tyh-ui-danger-01"})},open5:function(){this.$message({message:"这是一个警告提示",type:"warning",iconClass:"tyh-ui-warning-01"})},open6:function(){this.$message({message:"这个是一个消息",type:"primary",times:3e3})}}},p=i,c=(e("2b74"),e("2877")),r=Object(c["a"])(p,s,a,!1,null,"6d93b43d",null);n["default"]=r.exports},"2b74":function(t,n,e){"use strict";e("9260")},9260:function(t,n,e){}}]);
//# sourceMappingURL=chunk-62ae1a5b.a926d8b3.js.map