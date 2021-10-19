(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c7f3b60"],{"3cda":function(t,n,e){"use strict";e("5a1b")},"3df8":function(t,n,e){},"4ad6":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",{attrs:{id:"table"}},[t._m(0),t._l(t.configures,(function(n,r){return e("tr",{key:r},[e("td",[t._v(t._s(n.param))]),e("td",[t._v(t._s(n.explain))]),e("td",[t._v(t._s(n.type))]),e("td",[t._v(t._s(n.value))]),e("td",[t._v(t._s(n.default))])])}))],2)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])}],a={name:"ConfiguresTable",components:{},props:{configures:{type:Array,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},l=a,s=(e("84fb"),e("2877")),o=Object(s["a"])(l,r,i,!1,null,"9fa3a98e",null);n["a"]=o.exports},"5a1b":function(t,n,e){},"6c2f":function(t,n,e){},"84fb":function(t,n,e){"use strict";e("3df8")},"89b3":function(t,n,e){"use strict";e("b87e")},a859:function(t,n,e){"use strict";e("6c2f")},b87e:function(t,n,e){},d3bf:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"TurnPage"}},[t.TurnPageList[0].text?e("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[0].url}},[e("Tyh-icon",{attrs:{icon:"tyh-ui-left-02"}}),t._v(" "+t._s(t.TurnPageList[0].text)+" ")],1):t._e(),t.TurnPageList[1].text?e("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[1].url}},[t._v(" "+t._s(t.TurnPageList[1].text)+" "),e("Tyh-icon",{attrs:{icon:"tyh-ui-right-02"}})],1):t._e()],1)},i=[],a={name:"TurnPage",components:{},props:{TurnPageList:{type:Array,require:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},l=a,s=(e("a859"),e("2877")),o=Object(s["a"])(l,r,i,!1,null,"30c0caf4",null);n["a"]=o.exports},f51c:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"component-item"}},[e("h1",{staticClass:"title"},[t._v("Link 链接")]),e("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),e("p",{staticClass:"explain"},[t._v("基本使用")]),e("tyh-link",{attrs:{url:""}},[t._v("链接一")]),e("tyh-link",{attrs:{url:"",color:"primary"}},[t._v("链接二")]),e("tyh-link",{attrs:{url:"",color:"success"}},[t._v("链接三")]),e("tyh-link",{attrs:{url:"",color:"danger"}},[t._v("链接四")]),e("tyh-link",{attrs:{url:"",color:"warning"}},[t._v("链接五")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<tyh-link url="">链接一</tyh-link>\n<tyh-link url="" color="primary">链接二</tyh-link>\n<tyh-link url="" color="success">链接三</tyh-link>\n<tyh-link url="" color="danger">链接四</tyh-link>\n<tyh-link url="" color="warning">链接五</tyh-link>\n      ')]),t._v("\n    ")]),e("p",{staticClass:"explain"},[t._v("带有下划线：")]),t._m(0),e("tyh-link",{attrs:{underline:""}},[t._v("标签")]),e("tyh-link",{attrs:{underline:"",color:"primary"}},[t._v("标签")]),e("tyh-link",{attrs:{underline:"",color:"success"}},[t._v("标签")]),e("tyh-link",{attrs:{underline:"",color:"danger"}},[t._v("标签")]),e("tyh-link",{attrs:{underline:"",color:"warning"}},[t._v("标签")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<tyh-link underline>标签</tyh-link>\n<tyh-link underline color="primary">标签</tyh-link>\n<tyh-link underline color="success">标签</tyh-link>\n<tyh-link underline color="danger">标签</tyh-link>\n<tyh-link underline color="warning">标签</tyh-link>\n      ')]),t._v("\n    ")]),e("p",{staticClass:"explain"},[t._v("鼠标移入带有下划线：")]),t._m(1),e("tyh-link",{attrs:{hoverline:""}},[t._v("标签")]),e("tyh-link",{attrs:{hoverline:"",color:"primary"}},[t._v("标签")]),e("tyh-link",{attrs:{hoverline:"",color:"success"}},[t._v("标签")]),e("tyh-link",{attrs:{hoverline:"",color:"danger"}},[t._v("标签")]),e("tyh-link",{attrs:{hoverline:"",color:"warning"}},[t._v("标签")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<tyh-link hoverline>标签</tyh-link>\n<tyh-link hoverline color="primary">标签</tyh-link>\n<tyh-link hoverline color="success">标签</tyh-link>\n<tyh-link hoverline color="danger">标签</tyh-link>\n<tyh-link hoverline color="warning">标签</tyh-link>\n      ')]),t._v("\n    ")]),e("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),e("ConfiguresTable",{attrs:{configures:t.configures}}),e("h3",{staticClass:"Subtitle"},[t._v("按需引入：")]),e("p",{staticClass:"explain"},[t._v(" 通过下面按需引入的方式，我们可以只引入需要的组件，以达到减小项目体积的目的 ")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),e("code",{staticClass:"js",attrs:{id:"myCode"}},[t._v("\nimport Vue from 'vue'\nimport TyhLink from 'tyh-ui/packages/link'\nVue.use(TyhLink)\n      ")]),t._v("\n    ")]),e("TurnPage",{attrs:{TurnPageList:t.TurnPageList}})],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"explain"},[e("span",[t._v("underline")]),t._v(" 属性可以配置带有下划线")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"explain"},[e("span",[t._v("hoverline")]),t._v(" 属性可以配置鼠标移入带有下划线")])}],a=e("4ad6"),l=e("d3bf"),s={name:"",components:{ConfiguresTable:a["a"],TurnPage:l["a"]},props:{},data:function(){return{configures:[{param:"url",explain:"跳转的路径",type:"string",value:"——",default:"——"},{param:"color",explain:"链接的字体颜色",type:"string",value:"primary / success / danger / warning",default:"——"},{param:"underline",explain:"下划线",type:"boolean",value:"——",default:"fasle"},{param:"hoverline",explain:"鼠标移入下划线",type:"boolean",value:"——",default:"fasle"},{param:"target",explain:"以新的窗口打开",type:"string",value:"同原生 target 属性 _blank",default:"——"}],TurnPageList:[{text:"Tag 标签",url:"tag"},{text:"Input 输入框",url:"input"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},o=s,c=(e("89b3"),e("3cda"),e("2877")),u=Object(c["a"])(o,r,i,!1,null,"04a86d6b",null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2c7f3b60.41b75b1c.js.map