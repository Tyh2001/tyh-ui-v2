(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69e948c7"],{1465:function(t,a,e){},"306e":function(t,a,e){"use strict";e("1465")},"4ad6":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{attrs:{id:"table"}},[t._m(0),t._l(t.configures,(function(a,r){return e("tr",{key:r},[e("td",[t._v(t._s(a.param))]),e("td",[t._v(t._s(a.explain))]),e("td",[t._v(t._s(a.type))]),e("td",[t._v(t._s(a.value))]),e("td",[t._v(t._s(a.default))])])}))],2)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])}],s={name:"ConfiguresTable",components:{},props:{configures:{type:Array,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},i=s,c=(e("306e"),e("2877")),o=Object(c["a"])(i,r,n,!1,null,"1d65ab96",null);a["a"]=o.exports},ab01:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"component-item"}},[e("h1",{staticClass:"title"},[t._v("Tag 标签")]),e("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),e("p",{staticClass:"explain"},[t._v("基础使用")]),e("Tyh-tag",[t._v("标签一")]),e("Tyh-tag",{attrs:{color:"primary"}},[t._v("标签二")]),e("Tyh-tag",{attrs:{color:"success"}},[t._v("标签三")]),e("Tyh-tag",{attrs:{color:"danger"}},[t._v("标签四")]),e("Tyh-tag",{attrs:{color:"warning"}},[t._v("标签五")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-tag>标签一</Tyh-tag>\n<Tyh-tag color="primary">标签二</Tyh-tag>\n<Tyh-tag color="success">标签三</Tyh-tag>\n<Tyh-tag color="danger">标签四</Tyh-tag>\n<Tyh-tag color="warning">标签五</Tyh-tag>\n      ')]),t._v("\n    ")]),e("p",{staticClass:"explain"},[t._v("不同尺寸：")]),e("p",{staticClass:"explain"},[t._v("size 属性可以配置不同的尺寸")]),e("Tyh-tag",{attrs:{color:"primary"}},[t._v("标签")]),e("Tyh-tag",{attrs:{size:"small",color:"primary"}},[t._v("标签")]),e("Tyh-tag",{attrs:{size:"mini",color:"primary"}},[t._v("标签")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-tag color="primary">标签</Tyh-tag>\n<Tyh-tag size="small" color="primary">标签</Tyh-tag>\n<Tyh-tag size="mini" color="primary">标签</Tyh-tag>\n      ')]),t._v("\n    ")]),e("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),e("ConfiguresTable",{attrs:{configures:t.configures}}),e("TurnPage",{attrs:{TurnPageList:t.TurnPageList}})],1)},n=[],s=e("4ad6"),i=e("d3bf"),c={name:"",components:{ConfiguresTable:s["a"],TurnPage:i["a"]},props:{},data:function(){return{configures:[{param:"color",explain:"标签的颜色类型",type:"string",value:"primary / success / danger / warning",default:"——"},{param:"size",explain:"标签的尺寸",type:"string",value:" — / small / mini",default:"最大尺寸"}],TurnPageList:[{text:"Card 卡片",url:"card"},{text:"Link 链接",url:"link"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},o=c,u=(e("e4a9"),e("2877")),l=Object(u["a"])(o,r,n,!1,null,"70104c82",null);a["default"]=l.exports},d15b:function(t,a,e){},d3bf:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"TurnPage"}},[t.TurnPageList[0].text?e("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[0].url}},[e("Tyh-icon",{attrs:{icon:"tyh-ui-left-02"}}),t._v(" "+t._s(t.TurnPageList[0].text)+" ")],1):t._e(),t.TurnPageList[1].text?e("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[1].url}},[t._v(" "+t._s(t.TurnPageList[1].text)+" "),e("Tyh-icon",{attrs:{icon:"tyh-ui-right-02"}})],1):t._e()],1)},n=[],s={name:"TurnPage",components:{},props:{TurnPageList:{type:Array,require:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{TurnPageListURL:function(t){return"/"!==t?"/#/component/".concat(t):t}}},i=s,c=(e("eb45"),e("2877")),o=Object(c["a"])(i,r,n,!1,null,"f2e8b0b2",null);a["a"]=o.exports},e4a9:function(t,a,e){"use strict";e("d15b")},eb45:function(t,a,e){"use strict";e("fb87")},fb87:function(t,a,e){}}]);
//# sourceMappingURL=chunk-69e948c7.fa174a61.js.map