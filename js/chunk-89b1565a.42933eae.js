(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89b1565a"],{"08fe":function(t,n,e){"use strict";e("7309")},"3df8":function(t,n,e){},"4ad6":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",{attrs:{id:"table"}},[t._m(0),t._l(t.configures,(function(n,r){return e("tr",{key:r},[e("td",[t._v(t._s(n.param))]),e("td",[t._v(t._s(n.explain))]),e("td",[t._v(t._s(n.type))]),e("td",[t._v(t._s(n.value))]),e("td",[t._v(t._s(n.default))])])}))],2)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])}],a={name:"ConfiguresTable",components:{},props:{configures:{type:Array,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},l=a,s=(e("84fb"),e("2877")),o=Object(s["a"])(l,r,i,!1,null,"9fa3a98e",null);n["a"]=o.exports},"6c2f":function(t,n,e){},7309:function(t,n,e){},"84fb":function(t,n,e){"use strict";e("3df8")},"94a3":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"component-item"}},[e("h1",{staticClass:"title"},[t._v("Link 链接")]),e("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),e("p",{staticClass:"explain"},[t._v("基础使用")]),e("Tyh-link",{attrs:{url:""}},[t._v("链接一")]),e("Tyh-link",{attrs:{url:"",color:"primary"}},[t._v("链接二")]),e("Tyh-link",{attrs:{url:"",color:"success"}},[t._v("链接三")]),e("Tyh-link",{attrs:{url:"",color:"danger"}},[t._v("链接四")]),e("Tyh-link",{attrs:{url:"",color:"warning"}},[t._v("链接五")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-link url="">链接一</Tyh-link>\n<Tyh-link url="" color="primary">链接二</Tyh-link>\n<Tyh-link url="" color="success">链接三</Tyh-link>\n<Tyh-link url="" color="danger">链接四</Tyh-link>\n<Tyh-link url="" color="warning">链接五</Tyh-link>\n      ')]),t._v("\n    ")]),e("p",{staticClass:"explain"},[t._v("带有下划线：")]),e("p",{staticClass:"explain"},[t._v("underline 属性可以配置带有下划线")]),e("Tyh-link",{attrs:{underline:""}},[t._v("标签")]),e("Tyh-link",{attrs:{underline:"",color:"primary"}},[t._v("标签")]),e("Tyh-link",{attrs:{underline:"",color:"success"}},[t._v("标签")]),e("Tyh-link",{attrs:{underline:"",color:"danger"}},[t._v("标签")]),e("Tyh-link",{attrs:{underline:"",color:"warning"}},[t._v("标签")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-link underline>标签</Tyh-link>\n<Tyh-link underline color="primary">标签</Tyh-link>\n<Tyh-link underline color="success">标签</Tyh-link>\n<Tyh-link underline color="danger">标签</Tyh-link>\n<Tyh-link underline color="warning">标签</Tyh-link>\n      ')]),t._v("\n    ")]),e("p",{staticClass:"explain"},[t._v("鼠标移入带有下划线：")]),e("p",{staticClass:"explain"},[t._v("hoverline 属性可以配置鼠标移入带有下划线")]),e("Tyh-link",{attrs:{hoverline:""}},[t._v("标签")]),e("Tyh-link",{attrs:{hoverline:"",color:"primary"}},[t._v("标签")]),e("Tyh-link",{attrs:{hoverline:"",color:"success"}},[t._v("标签")]),e("Tyh-link",{attrs:{hoverline:"",color:"danger"}},[t._v("标签")]),e("Tyh-link",{attrs:{hoverline:"",color:"warning"}},[t._v("标签")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-link hoverline>标签</Tyh-link>\n<Tyh-link hoverline color="primary">标签</Tyh-link>\n<Tyh-link hoverline color="success">标签</Tyh-link>\n<Tyh-link hoverline color="danger">标签</Tyh-link>\n<Tyh-link hoverline color="warning">标签</Tyh-link>\n      ')]),t._v("\n    ")]),e("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),e("ConfiguresTable",{attrs:{configures:t.configures}}),e("h3",{staticClass:"Subtitle"},[t._v("按需引入：")]),e("p",{staticClass:"explain"},[t._v(" 通过下面按需引入的方式，我们可以只引入需要的组件，以达到减小项目体积的目的 ")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),e("code",{staticClass:"js",attrs:{id:"myCode"}},[t._v("\nimport Vue from 'vue'\nimport TyhLink from 'tyh-ui/packages/link'\nVue.use(TyhLink)\n      ")]),t._v("\n    ")]),e("TurnPage",{attrs:{TurnPageList:t.TurnPageList}})],1)},i=[],a=e("4ad6"),l=e("d3bf"),s={name:"",components:{ConfiguresTable:a["a"],TurnPage:l["a"]},props:{},data:function(){return{configures:[{param:"url",explain:"跳转的路径",type:"string",value:"——",default:"——"},{param:"color",explain:"链接的字体颜色",type:"string",value:"primary / success / danger / warning",default:"——"},{param:"underline",explain:"下划线",type:"boolean",value:"——",default:"fasle"},{param:"hoverline",explain:"鼠标移入下划线",type:"boolean",value:"——",default:"fasle"},{param:"target",explain:"以新的窗口打开",type:"string",value:"同原生 target 属性 _blank",default:"——"}],TurnPageList:[{text:"Tag 标签",url:"tag"},{text:"Input 输入框",url:"input"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},o=s,u=(e("08fe"),e("2877")),c=Object(u["a"])(o,r,i,!1,null,"39486694",null);n["default"]=c.exports},a859:function(t,n,e){"use strict";e("6c2f")},d3bf:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"TurnPage"}},[t.TurnPageList[0].text?e("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[0].url}},[e("Tyh-icon",{attrs:{icon:"tyh-ui-left-02"}}),t._v(" "+t._s(t.TurnPageList[0].text)+" ")],1):t._e(),t.TurnPageList[1].text?e("router-link",{staticClass:"pageList",attrs:{to:t.TurnPageList[1].url}},[t._v(" "+t._s(t.TurnPageList[1].text)+" "),e("Tyh-icon",{attrs:{icon:"tyh-ui-right-02"}})],1):t._e()],1)},i=[],a={name:"TurnPage",components:{},props:{TurnPageList:{type:Array,require:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},l=a,s=(e("a859"),e("2877")),o=Object(s["a"])(l,r,i,!1,null,"30c0caf4",null);n["a"]=o.exports}}]);
//# sourceMappingURL=chunk-89b1565a.42933eae.js.map