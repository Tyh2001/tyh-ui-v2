(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ad2bef4"],{"337f":function(t,i,n){"use strict";n("8813")},3404:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"component-item"}},[n("h1",{staticClass:"title"},[t._v("Icon 图标")]),n("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),n("p",{staticClass:"explain"},[t._v("通过 icon 属性来给 icon 添加类名，来显示不同的图标")]),n("Tyh-icon",{attrs:{icon:"tyh-ui-tyhui"}}),n("Tyh-icon",{attrs:{icon:"tyh-ui-huojian-01"}}),n("Tyh-icon",{attrs:{icon:"tyh-ui-PaperPlane-01"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v('\n<Tyh-icon icon="tyh-ui-tyhui" />\n<Tyh-icon icon="tyh-ui-huojian-01" />\n<Tyh-icon icon="tyh-ui-PaperPlane-01" />\n      ')]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("color 属性改变 icon 的颜色")]),n("Tyh-icon",{attrs:{color:"skyblue",icon:"tyh-ui-tyhui"}}),n("Tyh-icon",{attrs:{color:"orange",icon:"tyh-ui-huojian-01"}}),n("Tyh-icon",{attrs:{color:"pink",icon:"tyh-ui-PaperPlane-01"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v('\n<Tyh-icon color="skyblue" icon="tyh-ui-tyhui" />\n<Tyh-icon color="orange" icon="tyh-ui-huojian-01" />\n<Tyh-icon color="pink" icon="tyh-ui-PaperPlane-01" />\n      ')]),t._v("\n    ")]),n("p",{staticClass:"explain"},[t._v("size 属性可以改变 icon 的大小")]),n("p",{staticClass:"explain"},[t._v(" 这里采用的是字体大小形式，只需要传递具体数值，并不需要传递单位 ")]),n("Tyh-icon",{attrs:{size:"50",icon:"tyh-ui-tyhui"}}),n("Tyh-icon",{attrs:{size:"40",icon:"tyh-ui-huojian-01"}}),n("Tyh-icon",{attrs:{size:"30",icon:"tyh-ui-PaperPlane-01"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"vue",attrs:{id:"myCode"}},[t._v('\n<Tyh-icon size="50" icon="tyh-ui-tyhui" />\n<Tyh-icon size="40" icon="tyh-ui-huojian-01" />\n<Tyh-icon size="30" icon="tyh-ui-PaperPlane-01" />\n      ')]),t._v("\n    ")]),n("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),n("ConfiguresTable",{attrs:{configures:t.configures}}),n("h3",{staticClass:"Subtitle"},[t._v("Icon 集合：")]),n("p",{staticClass:"explain"},[t._v("点击即可复制代码")]),n("div",{attrs:{id:"allIcon"}},[n("ul",{staticClass:"allIcon-ui"},t._l(t.iconList,(function(i,e){return n("li",{key:e,staticClass:"allIcon-li",attrs:{"data-clipboard-text":i},on:{click:t.copy}},[n("Tyh-icon",{attrs:{size:"34",icon:i}}),n("p",{staticClass:"iconTitle"},[t._v(t._s(i))])],1)})),0)]),n("TurnPage",{attrs:{TurnPageList:t.TurnPageList}})],1)},a=[],s=n("b311"),o=n.n(s),c=n("4ad6"),u=n("d3bf"),r={name:"",components:{ConfiguresTable:c["a"],TurnPage:u["a"]},props:{},data:function(){return{configures:[{param:"icon",explain:"icon 的类名",type:"string",value:"——",default:"——"},{param:"color",explain:"icon 的颜色",type:"string",value:"——",default:"#606266"},{param:"size",explain:"icon 的尺寸",type:"string",value:"——",default:"——"}],iconList:["tyh-ui-tyhui","tyh-ui-huojian-01","tyh-ui-home-01","tyh-ui-right-01","tyh-ui-top-01","tyh-ui-bottom-01","tyh-ui-left-01","tyh-ui-close-01","tyh-ui-add-01","tyh-ui-sub-01","tyh-ui-top-02","tyh-ui-bottom-02","tyh-ui-left-02","tyh-ui-right-02","tyh-ui-setting-01","tyh-ui-phone-01","tyh-ui-PaperPlane-01","tyh-ui-trash-01","tyh-ui-primary-01","tyh-ui-success-01","tyh-ui-danger-01","tyh-ui-warning-01","tyh-ui-github"],TurnPageList:[{text:"BackTop 回到顶部",url:"backTop"},{text:"",url:""}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{copy:function(){var t=this,i=new o.a(".allIcon-li");i.on("success",(function(n){t.$message({message:"复制成功",type:"danger",iconClass:"tyh-ui-success-01"}),i.destroy()})),i.on("error",(function(n){t.$message({message:"您的浏览器不支持复制",type:"warning",iconClass:"tyh-ui-warning-01"}),i.destroy()}))}}},h=r,l=(n("337f"),n("839b"),n("2877")),y=Object(l["a"])(h,e,a,!1,null,"62c31dee",null);i["default"]=y.exports},"4ad6":function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("table",{attrs:{id:"table"}},[t._m(0),t._l(t.configures,(function(i,e){return n("tr",{key:e},[n("td",[t._v(t._s(i.param))]),n("td",[t._v(t._s(i.explain))]),n("td",[t._v(t._s(i.type))]),n("td",[t._v(t._s(i.value))]),n("td",[t._v(t._s(i.default))])])}))],2)},a=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])}],s={name:"ConfiguresTable",components:{},props:{configures:{type:Array,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},o=s,c=(n("e07a"),n("2877")),u=Object(c["a"])(o,e,a,!1,null,"037fd6f2",null);i["a"]=u.exports},"7a3f":function(t,i,n){},"839b":function(t,i,n){"use strict";n("eeab")},8813:function(t,i,n){},e07a:function(t,i,n){"use strict";n("7a3f")},eeab:function(t,i,n){}}]);
//# sourceMappingURL=chunk-7ad2bef4.210255b1.js.map