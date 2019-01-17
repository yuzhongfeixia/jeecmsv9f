webpackJsonp([10],{"FB/b":function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,"\n.dialog .tree-layout {\n  min-height: 400px;\n  width: 90%;\n}\n.dialog .tree-layout .tree {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  position: absolute;\n  border-right: 0px solid #d4dde2;\n}\n.el-dialog__body {\n  min-height: 450px;\n  overflow: auto;\n}\n.red-color {\n  color: red;\n}\n",""])},ycKU:function(t,e,a){"use strict";function n(t){a("zCEc")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("2sCs"),l=a.n(s),i=a("x1ym"),o=a("lcoF"),r={mixins:[o.a],data:function(){var t=i.a.required();return{rules:{name:[t],priority:[t,i.a.number()]},tplList:[],treeData:[{name:"根栏目",id:"",child:[]}],defaultKeys:[],channelVisble:!1,labelDialogTitle:"",currentCheckChannelId:0,channelProps:{label:"name",children:"child",isLeaf:"hasChild",id:"id"}}},methods:{selectChannel:function(){this.labelDialogTitle="选择栏目",this.channelVisble=!0},cancel:function(){this.channelVisble=!1,this.$refs.channelTree.setCheckedKeys([])},checkChange:function(t,e,a){var n=this.$refs.channelTree.getCheckedKeys();this.dataInfo.channelIds=n},getDataInfo:function(t){var e=this,a=this.$api;l.a.all([l.a.post(a.topicGet,{id:t}),l.a.post(a.topicTplList)]).then(l.a.spread(function(t,a){e.loading=!1,e.dataInfo=t.body,e.defaultKeys=t.body.channelIds,e.tplList=a.body,e.$refs.form.resetFields()})).catch(function(t){e.loading=!1})},getChannels:function(){var t=this;l.a.post(this.$api.fullTextSearchChannelList,{hasContentOnly:!0}).then(function(e){t.treeData[0].child=e.body})},getTitleImg:function(t){this.dataInfo.titleImg=t},getContentImg:function(t){this.dataInfo.contentImg=t},add:function(t){this.dataInfo.channelIds=this.dataInfo.channelIds.join(","),this.saveDataInfo(t,this.$api.topicSave,this.dataInfo,"list")},update:function(){this.dataInfo.channelIds=this.dataInfo.channelIds.join(","),this.updateDataInfo(this.$api.topicUpdate,this.dataInfo,"list")},handleClose:function(t){t()}},created:function(){this.getDataInfo(this.id),this.getChannels()}},c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cms-body"},[a("cms-back"),t._v(" "),a("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:t.dataInfo,rules:t.rules,"label-width":"162px"}},[a("el-form-item",{staticClass:"flex-50",attrs:{label:"专题名称",prop:"name"}},[a("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.name,callback:function(e){t.$set(t.dataInfo,"name",e)},expression:"dataInfo.name"}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"包含栏目",prop:""}},[a("el-button",{attrs:{type:"primary"},on:{click:t.selectChannel}},[t._v("包含栏目")])],1),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"简称",prop:""}},[a("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.shortName,callback:function(e){t.$set(t.dataInfo,"shortName",e)},expression:"dataInfo.shortName"}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"关键字",prop:""}},[a("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.keywords,callback:function(e){t.$set(t.dataInfo,"keywords",e)},expression:"dataInfo.keywords"}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"描述",prop:""}},[a("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.description,callback:function(e){t.$set(t.dataInfo,"description",e)},expression:"dataInfo.description"}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"推荐",prop:""}},[a("el-radio-group",{model:{value:t.dataInfo.recommend,callback:function(e){t.$set(t.dataInfo,"recommend",e)},expression:"dataInfo.recommend"}},[a("el-radio",{attrs:{label:!0}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:!1}},[t._v("否")])],1)],1),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"排列顺序",prop:"priority"}},[a("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.priority,callback:function(e){t.$set(t.dataInfo,"priority",e)},expression:"dataInfo.priority"}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"模版",prop:""}},[a("el-select",{staticClass:"cms-width",model:{value:t.dataInfo.tplContent,callback:function(e){t.$set(t.dataInfo,"tplContent",e)},expression:"dataInfo.tplContent"}},[a("el-option",{attrs:{label:"默认",value:""}}),t._v(" "),t._l(t.tplList,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})})],2)],1),t._v(" "),a("el-form-item",{staticClass:"flex-50"}),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"标题图",prop:""}},[a("cms-upload",{attrs:{src:t.dataInfo.titleImg},on:{change:t.getTitleImg}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"内容图",prop:""}},[a("cms-upload",{attrs:{src:t.dataInfo.contentImg},on:{change:t.getContentImg}})],1)],1),t._v(" "),a("div",{staticClass:"form-footer"},[t.isType("save")?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/topic/save",expression:"'/topic/save'"}],attrs:{type:"warning"},on:{click:function(e){t.add(!0)}}},[t._v("提交并继续添加")]):t._e(),t._v(" "),t.isType("save")?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/topic/save",expression:"'/topic/save'"}],attrs:{type:"primary"},on:{click:function(e){t.add(!1)}}},[t._v("添加")]):t._e(),t._v(" "),t.isType("update")?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/topic/update",expression:"'/topic/update'"}],attrs:{type:"primary"},on:{click:function(e){t.update()}}},[t._v("修改")]):t._e(),t._v(" "),a("el-button",{attrs:{type:"info"},on:{click:t.$reset}},[t._v("重置")]),t._v(" "),t.isType("save")?a("span",{staticClass:"gray"},[t._v("\n                  选择“提交并继续添加”按钮会停留在添加页面；选择“提交”按钮后将跳转到对应的列表页")]):t._e()],1),t._v(" "),a("el-dialog",{staticClass:"dialog",attrs:{title:t.labelDialogTitle,visible:t.channelVisble,width:"25%"},on:{"update:visible":function(e){t.channelVisble=e}}},[a("div",{staticClass:"tree-layout"},[a("div",{staticClass:"tree"},[a("el-tree",{ref:"channelTree",attrs:{data:t.treeData,indent:16,props:t.channelProps,"node-key":"id","default-expand-all":!0,"default-checked-keys":t.defaultKeys,"show-checkbox":""},on:{"check-change":t.checkChange}})],1)]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancel}},[t._v("返回")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.channelVisble=!1}}},[t._v("确认")])],1)])],1)},d=[],p={render:c,staticRenderFns:d},f=p,h=a("C7Lr"),u=n,m=h(r,f,!1,u,null,null);e.default=m.exports},zCEc:function(t,e,a){var n=a("FB/b");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("FIqI")("81966394",n,!0,{})}});