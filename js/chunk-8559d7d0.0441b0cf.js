(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8559d7d0"],{1164:function(t,i,e){"use strict";e("a56a")},4585:function(t,i,e){"use strict";e("e0a0")},"4ad6":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("table",{attrs:{id:"table"}},[t._m(0),t._l(t.configures,(function(i,n){return e("tr",{key:n},[e("td",[t._v(t._s(i.param))]),e("td",[t._v(t._s(i.explain))]),e("td",[t._v(t._s(i.type))]),e("td",[t._v(t._s(i.value))]),e("td",[t._v(t._s(i.default))])])}))],2)},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])}],a={name:"ConfiguresTable",components:{},props:{configures:{type:Array,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},r=a,o=(e("d9ad"),e("2877")),u=Object(o["a"])(r,n,s,!1,null,"b60359fe",null);i["a"]=u.exports},"6f1c":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"component-item"}},[e("h1",{staticClass:"title"},[t._v("Division 分割线")]),e("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),e("Tyh-division",[t._v("这是分割线")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v("\n<Tyh-division>这是分割线</Tyh-division>\n      ")]),t._v("\n    ")]),e("p",{staticClass:"explain"},[t._v("position 属性可以配置文字的位置")]),e("Tyh-division",{attrs:{position:"left"}},[t._v("这是左边文字")]),e("br"),e("Tyh-division",{attrs:{position:"center"}},[t._v("这是中间文字")]),e("br"),e("Tyh-division",{attrs:{position:"right"}},[t._v("这是右边文字")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-division position="left">这是左边文字</Tyh-division>\n<Tyh-division position="center">这是中间文字</Tyh-division>\n<Tyh-division position="right">这是右边文字</Tyh-division>\n      ')]),t._v("\n    ")]),e("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),e("ConfiguresTable",{attrs:{configures:t.configures}}),e("TurnPage",{attrs:{TurnPageList:t.TurnPageList}})],1)},s=[],a=e("4ad6"),r=e("d3bf"),o={name:"",components:{ConfiguresTable:a["a"],TurnPage:r["a"]},props:{},data:function(){return{configures:[{param:"position",explain:"文字位置",type:"string",value:"left / center / right",default:"left"}],TurnPageList:[{text:"Message 消息通知",url:"message"},{text:"BackTop 回到顶部",url:"backTop"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},u=o,c=(e("1164"),e("2877")),l=Object(c["a"])(u,n,s,!1,null,"30c173a6",null);i["default"]=l.exports},"81a8":function(t,i,e){},a56a:function(t,i,e){},d3bf:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"TurnPage"}},[t.TurnPageList[0].text?e("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[0].url}},[e("Tyh-icon",{attrs:{icon:"tyh-ui-left-02"}}),t._v(" "+t._s(t.TurnPageList[0].text)+" ")],1):t._e(),t.TurnPageList[1].text?e("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[1].url}},[t._v(" "+t._s(t.TurnPageList[1].text)+" "),e("Tyh-icon",{attrs:{icon:"tyh-ui-right-02"}})],1):t._e()],1)},s=[],a={name:"TurnPage",components:{},props:{TurnPageList:{type:Array,require:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{TurnPageListURL:function(t){return"/"!==t?"/#/component/".concat(t):t}}},r=a,o=(e("4585"),e("2877")),u=Object(o["a"])(r,n,s,!1,null,"37e2211c",null);i["a"]=u.exports},d9ad:function(t,i,e){"use strict";e("81a8")},e0a0:function(t,i,e){}}]);
//# sourceMappingURL=chunk-8559d7d0.0441b0cf.js.map