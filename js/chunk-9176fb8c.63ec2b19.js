(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9176fb8c"],{"0c8e":function(t,i,n){},"3df8":function(t,i,n){},"4ad6":function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("table",{attrs:{id:"table"}},[t._m(0),t._l(t.configures,(function(i,e){return n("tr",{key:e},[n("td",[t._v(t._s(i.param))]),n("td",[t._v(t._s(i.explain))]),n("td",[t._v(t._s(i.type))]),n("td",[t._v(t._s(i.value))]),n("td",[t._v(t._s(i.default))])])}))],2)},a=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])}],s={name:"ConfiguresTable",components:{},props:{configures:{type:Array,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},c=s,o=(n("84fb"),n("2877")),u=Object(o["a"])(c,e,a,!1,null,"9fa3a98e",null);i["a"]=u.exports},"5b0a":function(t,i,n){"use strict";n("dd4a")},"6b83":function(t,i,n){"use strict";n("0c8e")},"84fb":function(t,i,n){"use strict";n("3df8")},d1a0:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"component-item"}},[n("h1",{staticClass:"title"},[t._v("Icon 图标")]),n("h3",{staticClass:"Subtitle"},[t._v("基本使用：")]),n("p",{staticClass:"explain"},[t._v("基本使用")]),t._m(0),n("Tyh-icon",{attrs:{icon:"tyh-ui-tyhui"}}),n("Tyh-icon",{attrs:{icon:"tyh-ui-huojian-01"}}),n("Tyh-icon",{attrs:{icon:"tyh-ui-PaperPlane-01"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-icon icon="tyh-ui-tyhui" />\n<Tyh-icon icon="tyh-ui-huojian-01" />\n<Tyh-icon icon="tyh-ui-PaperPlane-01" />\n      ')]),t._v("\n    ")]),t._m(1),n("Tyh-icon",{attrs:{color:"skyblue",icon:"tyh-ui-tyhui"}}),n("Tyh-icon",{attrs:{color:"orange",icon:"tyh-ui-huojian-01"}}),n("Tyh-icon",{attrs:{color:"pink",icon:"tyh-ui-PaperPlane-01"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-icon color="skyblue" icon="tyh-ui-tyhui" />\n<Tyh-icon color="orange" icon="tyh-ui-huojian-01" />\n<Tyh-icon color="pink" icon="tyh-ui-PaperPlane-01" />\n      ')]),t._v("\n    ")]),t._m(2),n("p",{staticClass:"explain"},[t._v(" 这里采用的是字体大小形式，只需要传递具体数值，并不需要传递单位 ")]),n("Tyh-icon",{attrs:{size:"50",icon:"tyh-ui-tyhui"}}),n("Tyh-icon",{attrs:{size:"40",icon:"tyh-ui-huojian-01"}}),n("Tyh-icon",{attrs:{size:"30",icon:"tyh-ui-PaperPlane-01"}}),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("      "),n("code",{staticClass:"html",attrs:{id:"myCode"}},[t._v('\n<Tyh-icon size="50" icon="tyh-ui-tyhui" />\n<Tyh-icon size="40" icon="tyh-ui-huojian-01" />\n<Tyh-icon size="30" icon="tyh-ui-PaperPlane-01" />\n      ')]),t._v("\n    ")]),n("h3",{staticClass:"Subtitle"},[t._v("配置项：")]),n("ConfiguresTable",{attrs:{configures:t.configures}}),n("h3",{staticClass:"Subtitle"},[t._v("Icon 集合：")]),n("p",{staticClass:"explain"},[t._v("点击即可复制代码")]),n("div",{attrs:{id:"allIcon"}},[n("ul",{staticClass:"allIcon-ui"},t._l(t.iconList,(function(i,e){return n("li",{key:e,staticClass:"allIcon-li",attrs:{"data-clipboard-text":i},on:{click:t.copy}},[n("Tyh-icon",{attrs:{size:"34",icon:i}}),n("p",{staticClass:"iconTitle"},[t._v(t._s(i))])],1)})),0)]),n("TurnPage",{attrs:{TurnPageList:t.TurnPageList}})],1)},a=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("p",{staticClass:"explain"},[t._v(" 通过 "),n("span",[t._v("icon")]),t._v(" 属性来给 icon 添加类名，来显示不同的图标 ")])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("p",{staticClass:"explain"},[n("span",[t._v("color")]),t._v(" 属性改变 icon 的颜色")])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("p",{staticClass:"explain"},[n("span",[t._v("size")]),t._v(" 属性可以改变 icon 的大小")])}],s=n("b311"),c=n.n(s),o=n("4ad6"),u=n("d3bf"),h={name:"",components:{ConfiguresTable:o["a"],TurnPage:u["a"]},props:{},data:function(){return{configures:[{param:"icon",explain:"icon 的类名",type:"string",value:"——",default:"——"},{param:"color",explain:"icon 的颜色",type:"string",value:"——",default:"#606266"},{param:"size",explain:"icon 的尺寸",type:"string",value:"——",default:"——"}],iconList:["tyh-ui-tyhui","tyh-ui-huojian-01","tyh-ui-home-01","tyh-ui-right-01","tyh-ui-top-01","tyh-ui-bottom-01","tyh-ui-left-01","tyh-ui-close-01","tyh-ui-add-01","tyh-ui-sub-01","tyh-ui-top-02","tyh-ui-bottom-02","tyh-ui-left-02","tyh-ui-right-02","tyh-ui-setting-01","tyh-ui-phone-01","tyh-ui-PaperPlane-01","tyh-ui-trash-01","tyh-ui-primary-01","tyh-ui-success-01","tyh-ui-danger-01","tyh-ui-warning-01","tyh-ui-github","tyh-ui-close-03","tyh-ui-color-01","tyh-ui-channel-01","tyh-ui-type-01","tyh-ui-series-01","tyh-ui-shangchuan-01","tyh-ui-wenjian-01","tyh-ui-wenjian-02","tyh-ui-shouji-01","tyh-ui-dianhua-01","tyh-ui-xiazai-01","tyh-ui-shop-01","tyh-ui-yonghu-01","tyh-ui-xiexian-01"],TurnPageList:[{text:"BackTop 回到顶部",url:"backTop"},{text:"Crumbs 面包屑",url:"crumbs"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{copy:function(){var t=this,i=new c.a(".allIcon-li");i.on("success",(function(n){t.$message({message:"复制成功",type:"danger",iconClass:"tyh-ui-success-01"}),i.destroy()})),i.on("error",(function(n){t.$message({message:"您的浏览器不支持复制",type:"warning",iconClass:"tyh-ui-warning-01"}),i.destroy()}))}}},r=h,l=(n("5b0a"),n("6b83"),n("2877")),y=Object(l["a"])(r,e,a,!1,null,"2c520499",null);i["default"]=y.exports},dd4a:function(t,i,n){}}]);
//# sourceMappingURL=chunk-9176fb8c.63ec2b19.js.map