(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-328449ed"],{"3df8":function(n,t,e){},"4ad6":function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("table",{attrs:{id:"table"}},[n._m(0),n._l(n.configures,(function(t,r){return e("tr",{key:r},[e("td",[n._v(n._s(t.param))]),e("td",[n._v(n._s(t.explain))]),e("td",[n._v(n._s(t.type))]),e("td",[n._v(n._s(t.value))]),e("td",[n._v(n._s(t.default))])])}))],2)},i=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("tr",[e("th",[n._v("参数")]),e("th",[n._v("说明")]),e("th",[n._v("类型")]),e("th",[n._v("可选值")]),e("th",[n._v("默认值")])])}],a={name:"ConfiguresTable",components:{},props:{configures:{type:Array,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},l=a,s=(e("84fb"),e("2877")),o=Object(s["a"])(l,r,i,!1,null,"9fa3a98e",null);t["a"]=o.exports},"6c2f":function(n,t,e){},"84fb":function(n,t,e){"use strict";e("3df8")},"94a3":function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"component-item"}},[e("h1",{staticClass:"title"},[n._v("Link 链接")]),e("h3",{staticClass:"Subtitle"},[n._v("基本使用：")]),e("p",{staticClass:"explain"},[n._v("基础使用")]),e("Tyh-link",{attrs:{url:""}},[n._v("链接一")]),e("Tyh-link",{attrs:{url:"",color:"primary"}},[n._v("链接二")]),e("Tyh-link",{attrs:{url:"",color:"success"}},[n._v("链接三")]),e("Tyh-link",{attrs:{url:"",color:"danger"}},[n._v("链接四")]),e("Tyh-link",{attrs:{url:"",color:"warning"}},[n._v("链接五")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[n._v('\n<Tyh-link url="">链接一</Tyh-link>\n<Tyh-link url="" color="primary">链接二</Tyh-link>\n<Tyh-link url="" color="success">链接三</Tyh-link>\n<Tyh-link url="" color="danger">链接四</Tyh-link>\n<Tyh-link url="" color="warning">链接五</Tyh-link>\n      ')]),n._v("\n    ")]),e("p",{staticClass:"explain"},[n._v("带有下划线：")]),e("p",{staticClass:"explain"},[n._v("underline 属性可以配置带有下划线")]),e("Tyh-link",{attrs:{underline:""}},[n._v("标签")]),e("Tyh-link",{attrs:{underline:"",color:"primary"}},[n._v("标签")]),e("Tyh-link",{attrs:{underline:"",color:"success"}},[n._v("标签")]),e("Tyh-link",{attrs:{underline:"",color:"danger"}},[n._v("标签")]),e("Tyh-link",{attrs:{underline:"",color:"warning"}},[n._v("标签")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[n._v('\n<Tyh-link underline>标签</Tyh-link>\n<Tyh-link underline color="primary">标签</Tyh-link>\n<Tyh-link underline color="success">标签</Tyh-link>\n<Tyh-link underline color="danger">标签</Tyh-link>\n<Tyh-link underline color="warning">标签</Tyh-link>\n      ')]),n._v("\n    ")]),e("p",{staticClass:"explain"},[n._v("鼠标移入带有下划线：")]),e("p",{staticClass:"explain"},[n._v("hoverline 属性可以配置鼠标移入带有下划线")]),e("Tyh-link",{attrs:{hoverline:""}},[n._v("标签")]),e("Tyh-link",{attrs:{hoverline:"",color:"primary"}},[n._v("标签")]),e("Tyh-link",{attrs:{hoverline:"",color:"success"}},[n._v("标签")]),e("Tyh-link",{attrs:{hoverline:"",color:"danger"}},[n._v("标签")]),e("Tyh-link",{attrs:{hoverline:"",color:"warning"}},[n._v("标签")]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n._v("      "),e("code",{staticClass:"html",attrs:{id:"myCode"}},[n._v('\n<Tyh-link hoverline>标签</Tyh-link>\n<Tyh-link hoverline color="primary">标签</Tyh-link>\n<Tyh-link hoverline color="success">标签</Tyh-link>\n<Tyh-link hoverline color="danger">标签</Tyh-link>\n<Tyh-link hoverline color="warning">标签</Tyh-link>\n      ')]),n._v("\n    ")]),e("h3",{staticClass:"Subtitle"},[n._v("配置项：")]),e("ConfiguresTable",{attrs:{configures:n.configures}}),e("TurnPage",{attrs:{TurnPageList:n.TurnPageList}})],1)},i=[],a=e("4ad6"),l=e("d3bf"),s={name:"",components:{ConfiguresTable:a["a"],TurnPage:l["a"]},props:{},data:function(){return{configures:[{param:"url",explain:"跳转的路径",type:"string",value:"——",default:"——"},{param:"color",explain:"链接的字体颜色",type:"string",value:"primary / success / danger / warning",default:"——"},{param:"underline",explain:"下划线",type:"boolean",value:"——",default:"fasle"},{param:"hoverline",explain:"鼠标移入下划线",type:"boolean",value:"——",default:"fasle"},{param:"target",explain:"以新的窗口打开",type:"string",value:"同原生 target 属性 _blank",default:"——"}],TurnPageList:[{text:"Tag 标签",url:"tag"},{text:"Input 输入框",url:"input"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},o=s,u=(e("af9a"),e("2877")),c=Object(u["a"])(o,r,i,!1,null,"7b7c6441",null);t["default"]=c.exports},a859:function(n,t,e){"use strict";e("6c2f")},af9a:function(n,t,e){"use strict";e("df14")},d3bf:function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"TurnPage"}},[n.TurnPageList[0].text?e("router-link",{staticClass:"pageList",attrs:{to:n.TurnPageList[0].url}},[e("Tyh-icon",{attrs:{icon:"tyh-ui-left-02"}}),n._v(" "+n._s(n.TurnPageList[0].text)+" ")],1):n._e(),n.TurnPageList[1].text?e("router-link",{staticClass:"pageList",attrs:{to:n.TurnPageList[1].url}},[n._v(" "+n._s(n.TurnPageList[1].text)+" "),e("Tyh-icon",{attrs:{icon:"tyh-ui-right-02"}})],1):n._e()],1)},i=[],a={name:"TurnPage",components:{},props:{TurnPageList:{type:Array,require:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},l=a,s=(e("a859"),e("2877")),o=Object(s["a"])(l,r,i,!1,null,"30c0caf4",null);t["a"]=o.exports},df14:function(n,t,e){}}]);
//# sourceMappingURL=chunk-328449ed.fc2220ba.js.map