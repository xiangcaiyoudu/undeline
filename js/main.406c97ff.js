(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main"],{"0d46":function(e,t,a){"use strict";var s=a("1b34"),l=a.n(s);l.a},1340:function(e,t,a){"use strict";var s=a("e7d7"),l=a.n(s);l.a},"1b34":function(e,t,a){},"24fc":function(e,t,a){"use strict";var s=a("f1a8"),l=a.n(s);l.a},"2a8f":function(e,t,a){"use strict";var s=a("53c9"),l=a.n(s);l.a},"53c9":function(e,t,a){},"7a94":function(e,t,a){"use strict";var s=a("a9e7"),l=a.n(s);l.a},"841d":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-header",{attrs:{height:"60px"}},[e._v("Header")]),a("el-container",[a("el-aside",{staticClass:"sidebar",attrs:{width:e.sidebar.width[e.sidebar.status]}},[a("indexSidebar"),a("div",{staticClass:"sidebar-icon"},[a("i",{class:e.sidebar.class[e.sidebar.status],attrs:{hover:""},on:{click:e.toggleSidebar}})])],1),a("el-main",[a("indexMain")],1)],1)],1)},l=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"custom-menu"},[a("el-menu",{attrs:{"default-active":"1-4-1",collapse:e.isCollapse},on:{open:e.handleOpen,close:e.handleClose}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-location"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航一")])]),a("el-menu-item-group",[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("分组一")]),a("el-menu-item",{attrs:{index:"1-1"}},[e._v("选项1")]),a("el-menu-item",{attrs:{index:"1-2"}},[e._v("选项2")])],1),a("el-menu-item-group",{attrs:{title:"分组2"}},[a("el-menu-item",{attrs:{index:"1-3"}},[e._v("选项3")])],1),a("el-submenu",{attrs:{index:"1-4"}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("选项4")]),a("el-menu-item",{attrs:{index:"1-4-1"}},[e._v("选项1")])],1)],2),a("el-menu-item",{attrs:{index:"2"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航二")])]),a("el-menu-item",{attrs:{index:"3",disabled:""}},[a("i",{staticClass:"el-icon-document"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航三")])]),a("el-menu-item",{attrs:{index:"4"}},[a("i",{staticClass:"el-icon-setting"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航四")])])],1)],1)},i=[],r={data:function(){return{isCollapse:!1}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},n=r,c=(a("0d46"),a("623f")),m=Object(c["a"])(n,o,i,!1,null,"374a1992",null),u=m.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("widgetComp",{attrs:{config:{type:"hidden"}}})],1)},d=[],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",staticStyle:{width:"300px"},attrs:{model:e.form}},[a("el-collapse",{attrs:{accordion:""},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"基本设置",name:"1"}},[a("el-form-item",{attrs:{label:"单元格标题文本",prop:"label",rules:e.rules.label}},[a("el-input",{attrs:{placeholder:"请输入单元格标题文本"},model:{value:e.form.label,callback:function(t){e.$set(e.form,"label",t)},expression:"form.label"}})],1),a("el-form-item",{attrs:{label:"单元格ID",prop:"id",rules:e.rules.id}},[a("el-input",{attrs:{placeholder:"请输入单元格ID"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),a("el-form-item",{attrs:{label:"单元格所占列数",prop:"colspan"}},[a("el-input-number",{attrs:{min:1,max:12},model:{value:e.form.colspan,callback:function(t){e.$set(e.form,"colspan",t)},expression:"form.colspan"}})],1)],1),a("el-collapse-item",{attrs:{title:"外观设置",name:"2"}},[a("el-form-item",{attrs:{label:"控件权限编码",prop:"permissionCode"}},[a("el-input",{attrs:{placeholder:"请输入控件权限编码"},model:{value:e.form.permissionCode,callback:function(t){e.$set(e.form,"permissionCode",t)},expression:"form.permissionCode"}})],1)],1)],1)],1)},v=[],b=(a("1a8c"),a("79dd"),{props:{config:{type:Object,default:function(){return new Object}}},data:function(){return{form:{guid:"",parentGuid:"",label:"",id:"",colspan:"",permissionCode:""},activeNames:["1"],configure:{},rules:{label:[{required:!0,message:"单元格标题文本不能为空!"}],id:[{required:!0,message:"单元格ID不能为空!"}]}}},methods:{init:function(){var e=this;Object.keys(this.config).map((function(t){e.form[t]=e.config[t]}))}},created:function(){this.init()}}),h=b,x=(a("1340"),Object(c["a"])(h,p,v,!1,null,"33b467b0",null)),g=x.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",staticStyle:{width:"300px"},attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"控件类型",prop:"type",rules:e.rules.type,"label-width":"80px"}},[a("selectBox",{attrs:{config:e.configure.type},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1),a("el-collapse",{attrs:{accordion:""},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"基本设置",name:"1"}},[a("el-form-item",{attrs:{label:"控件ID",prop:"id",rules:e.rules.id}},[a("el-input",{attrs:{placeholder:"请输入控件ID"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),a("el-form-item",{attrs:{prop:"formatDate"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(" 日期格式 "),a("i",{staticClass:"el-icon-question",attrs:{hover:""},on:{click:e.formatDateToggle}})]},proxy:!0}])},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.configure.formatDate.status,expression:"configure.formatDate.status"}],staticClass:"custom-helptext"},[e._v(e._s(e.configure.formatDate.helper))]),a("el-input",{attrs:{placeholder:"请输入日期格式"},model:{value:e.form.formatDate,callback:function(t){e.$set(e.form,"formatDate",t)},expression:"form.formatDate"}})],1)],1),a("el-collapse-item",{attrs:{title:"外观设置",name:"2"}},[a("el-form-item",{attrs:{label:"控件权限编码",prop:"permissionCode"}},[a("el-input",{attrs:{placeholder:"请输入控件权限编码"},model:{value:e.form.permissionCode,callback:function(t){e.$set(e.form,"permissionCode",t)},expression:"form.permissionCode"}})],1),a("el-form-item",{attrs:{prop:"class"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(" 控件样式类 "),a("i",{staticClass:"el-icon-question",attrs:{hover:""},on:{click:e.classToggle}})]},proxy:!0}])},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.configure.class.status,expression:"configure.class.status"}],staticClass:"custom-helptext"},[e._v(e._s(e.configure.class.helper))]),a("el-input",{attrs:{placeholder:"请输入控件样式类"},model:{value:e.form.class,callback:function(t){e.$set(e.form,"class",t)},expression:"form.class"}})],1),a("el-form-item",{attrs:{label:"控件样式",prop:"style"}},[a("el-input",{attrs:{placeholder:"请输入控件样式"},model:{value:e.form.style,callback:function(t){e.$set(e.form,"style",t)},expression:"form.style"}})],1),a("el-form-item",{attrs:{prop:"disabled"}},[a("el-checkbox",{model:{value:e.form.disabled,callback:function(t){e.$set(e.form,"disabled",t)},expression:"form.disabled"}},[e._v("是否禁用")])],1),a("el-form-item",{attrs:{prop:"readonly"}},[a("el-checkbox",{model:{value:e.form.readonly,callback:function(t){e.$set(e.form,"readonly",t)},expression:"form.readonly"}},[e._v("是否只读")])],1)],1),a("el-collapse-item",{attrs:{title:"数据设置",name:"3"}},[a("el-form-item",{attrs:{label:"控件默认值",prop:"value"}},[a("el-input",{attrs:{placeholder:"请输入控件默认值"},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}})],1),a("el-form-item",{attrs:{label:"校验规则",prop:"validate"}},[a("rules",{model:{value:e.form.validate,callback:function(t){e.$set(e.form,"validate",t)},expression:"form.validate"}})],1)],1)],1)],1)},_=[],C={props:{config:{type:Object,default:function(){return new Object}}},data:function(){return{form:{guid:"",parentGuid:"",type:"",id:"",formatDate:"yyyy-MM-dd",permissionCode:"",class:"",style:"",disabled:!1,readonly:!1,value:"",validate:""},activeNames:["1"],configure:{type:{value:"text:单行文本(text);hidden:隐藏域(hidden);password:密码框(password)"},formatDate:{status:!1,helper:"p, P, h, hh, i, ii, s, ss, d, dd, m, mm, M, MM, yy, yyyy 的任意组合"},class:{status:!1,helper:"多个样式类用空格分隔"}},rules:{type:[{required:!0,message:"控件类型不能为空!"}],id:[{required:!0,message:"控件ID不能为空!"}]}}},methods:{init:function(){var e=this;Object.keys(this.config).map((function(t){e.form[t]=e.config[t]}))},formatDateToggle:function(){this.configure.formatDate.status=!this.configure.formatDate.status},classToggle:function(){this.configure.class.status=!this.configure.class.status}},created:function(){this.init()}},k=C,w=(a("2a8f"),Object(c["a"])(k,y,_,!1,null,"34fa5d36",null)),D=w.exports,$={components:{cellComp:g,widgetComp:D},data:function(){return{}}},O=$,j=(a("24fc"),Object(c["a"])(O,f,d,!1,null,"1f1ef0e8",null)),N=j.exports,S={components:{indexSidebar:u,indexMain:N},data:function(){return{sidebar:{width:["210px","12px"],class:["el-icon-arrow-left","el-icon-arrow-right"],status:0}}},methods:{toggleSidebar:function(){this.sidebar.status=0==this.sidebar.status?1:0}}},M=S,q=(a("7a94"),Object(c["a"])(M,s,l,!1,null,"25899a67",null));t["default"]=q.exports},a9e7:function(e,t,a){},e7d7:function(e,t,a){},f1a8:function(e,t,a){}}]);