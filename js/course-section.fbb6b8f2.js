"use strict";(self["webpackChunkedu_fed"]=self["webpackChunkedu_fed"]||[]).push([[390],{141:function(e,s,t){t.r(s),t.d(s,{default:function(){return u}});t(7658);var o=function(){var e=this,s=e._self._c;return s("div",{staticClass:"course-section"},[s("div",{staticClass:"header"},[s("el-page-header",{attrs:{content:e.courseName},on:{back:e.goBack}}),s("el-button",{attrs:{type:"primary"},on:{click:e.handleAddSection}},[s("i",{staticClass:"el-icon-plus"}),e._v(" 添加阶段 ")])],1),s("el-card",[s("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],attrs:{data:e.sections,props:e.defaultProps,draggable:"","allow-drop":e.handleDrop},on:{"node-drop":e.handleNode},scopedSlots:e._u([{key:"default",fn:function({node:t,data:o}){return s("div",{staticClass:"inner"},[s("span",[e._v(e._s(t.label))]),o.sectionName?s("span",{staticClass:"actions"},[s("el-button",{attrs:{size:"mini"},on:{click:function(s){return e.handleEditSection(o)}}},[e._v("编辑")]),s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(s){return e.handleAddLesson(o)}}},[e._v("添加课时")]),s("el-button",{attrs:{size:"mini"},on:{click:function(s){return e.handleSectionStatus(o)}}},[e._v(" "+e._s(0===o.status?"已隐藏":1===o.status?"待更新":"已更新"))])],1):s("span",{staticClass:"actions"},[s("el-button",{attrs:{size:"mini"},on:{click:function(s){return e.handleEditLesson(o)}}},[e._v("编辑")]),s("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(s){return e.$router.push({name:"course-video",params:{courseId:e.courseId,lessonId:o.id},query:{theme:o.theme,duration:o.duration}})}}},[e._v(" 上传视频")]),s("el-button",{attrs:{size:"mini"},on:{click:function(s){return e.handleLessonStatus(o)}}},[e._v(" "+e._s(0===o.status?"已隐藏":1===o.status?"待更新":"已更新"))])],1)])}}])})],1),s("el-dialog",{attrs:{title:e.isSectionEdit?"章节信息":"添加章节",visible:e.sectionDialog,"before-close":e.closeSectionHandler,width:"500px"},on:{"update:visible":function(s){e.sectionDialog=s}}},[s("el-form",{ref:"sectionForm",attrs:{model:e.sectionForm,rules:e.sectionRules,"label-position":"right","label-width":"80px"}},[s("el-form-item",{attrs:{label:"课程名称",prop:"courseName"}},[s("el-input",{attrs:{clearable:"",disabled:""},model:{value:e.sectionForm.courseName,callback:function(s){e.$set(e.sectionForm,"courseName",s)},expression:"sectionForm.courseName"}})],1),s("el-form-item",{attrs:{label:"章节名称",prop:"sectionName"}},[s("el-input",{attrs:{clearable:""},model:{value:e.sectionForm.sectionName,callback:function(s){e.$set(e.sectionForm,"sectionName",s)},expression:"sectionForm.sectionName"}})],1),s("el-form-item",{attrs:{label:"章节描述",prop:"description"}},[s("el-input",{attrs:{clearable:"",type:"textarea"},model:{value:e.sectionForm.description,callback:function(s){e.$set(e.sectionForm,"description",s)},expression:"sectionForm.description"}})],1),s("el-form-item",{attrs:{label:"章节排序",prop:"orderNum"}},[s("el-input",{attrs:{type:"number"},model:{value:e.sectionForm.orderNum,callback:function(s){e.$set(e.sectionForm,"orderNum",s)},expression:"sectionForm.orderNum"}},[s("template",{slot:"append"},[e._v("数字控制排序，数字越大越靠后")])],2)],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.closeSectionHandler}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitSection}},[e._v("确 定")])],1)],1),s("el-dialog",{attrs:{title:e.isLessonEdit?"课时基本信息":"添加课时",visible:e.lessonDialog,"before-close":e.closeLessonHandler,width:"500px"},on:{"update:visible":function(s){e.lessonDialog=s}}},[s("el-form",{ref:"lessonForm",attrs:{model:e.lessonForm,rules:e.lessonRules,"label-position":"right","label-width":"80px"}},[s("el-form-item",{attrs:{label:"课程名称",prop:"courseName"}},[s("el-input",{attrs:{clearable:"",disabled:""},model:{value:e.lessonForm.courseName,callback:function(s){e.$set(e.lessonForm,"courseName",s)},expression:"lessonForm.courseName"}})],1),s("el-form-item",{attrs:{label:"章节名称",prop:"sectionName"}},[s("el-input",{attrs:{clearable:"",disabled:""},model:{value:e.lessonForm.sectionName,callback:function(s){e.$set(e.lessonForm,"sectionName",s)},expression:"lessonForm.sectionName"}})],1),s("el-form-item",{attrs:{label:"课时名称",prop:"theme"}},[s("el-input",{attrs:{clearable:""},model:{value:e.lessonForm.theme,callback:function(s){e.$set(e.lessonForm,"theme",s)},expression:"lessonForm.theme"}})],1),s("el-form-item",{attrs:{label:"时长",prop:"duration"}},[s("el-input",{attrs:{type:"number"},model:{value:e.lessonForm.duration,callback:function(s){e.$set(e.lessonForm,"duration",s)},expression:"lessonForm.duration"}},[s("template",{slot:"append"},[e._v("分钟")])],2)],1),s("el-form-item",{attrs:{label:"是否开放试听",prop:"isFree","label-width":"80"}},[s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":1,"inactive-value":0},model:{value:e.lessonForm.status,callback:function(s){e.$set(e.lessonForm,"status",s)},expression:"lessonForm.status"}})],1),s("el-form-item",{attrs:{label:"课时排序",prop:"orderNum"}},[s("el-input",{attrs:{type:"number"},model:{value:e.lessonForm.orderNum,callback:function(s){e.$set(e.lessonForm,"orderNum",s)},expression:"lessonForm.orderNum"}},[s("template",{slot:"append"},[e._v("数字控制排序，数字越大越靠后")])],2)],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.closeLessonHandler}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitLesson}},[e._v("确 定")])],1)],1),e.isLessonStatus?s("el-dialog",{attrs:{title:"提示",visible:e.statusDialog,width:"500px"},on:{"update:visible":function(s){e.statusDialog=s}}},[s("div",{staticClass:"status"},[s("i",{staticClass:"el-icon-info"}),s("span",[e._v("当前状态为："+e._s(0===e.lessonForm.status?"已隐藏":1===e.lessonForm.status?"待更新":"已更新"))])]),s("el-form",{ref:"lessonForm",attrs:{model:e.lessonForm,"label-position":"right","label-width":"100px"}},[s("el-form-item",{attrs:{label:"提示",prop:"status"}},[s("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeLessonStatus},model:{value:e.lessonForm.status,callback:function(s){e.$set(e.lessonForm,"status",s)},expression:"lessonForm.status"}},[s("el-option",{attrs:{label:"已隐藏",value:0}}),s("el-option",{attrs:{label:"待更新",value:1}}),s("el-option",{attrs:{label:"已更新",value:2}})],1)],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(s){e.statusDialog=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitStatus}},[e._v("确 定")])],1)],1):s("el-dialog",{attrs:{title:"提示",visible:e.statusDialog,width:"500px"},on:{"update:visible":function(s){e.statusDialog=s}}},[s("div",{staticClass:"status"},[s("i",{staticClass:"el-icon-info"}),s("span",[e._v("当前状态为："+e._s(0===e.lessonForm.status?"已隐藏":1===e.lessonForm.status?"待更新":"已更新"))])]),s("el-form",{ref:"sectionForm",attrs:{model:e.sectionForm,"label-position":"right","label-width":"100px"}},[s("el-form-item",{attrs:{label:"提示",prop:"status"}},[s("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeLessonStatus},model:{value:e.sectionForm.status,callback:function(s){e.$set(e.sectionForm,"status",s)},expression:"sectionForm.status"}},[s("el-option",{attrs:{label:"已隐藏",value:0}}),s("el-option",{attrs:{label:"待更新",value:1}}),s("el-option",{attrs:{label:"已更新",value:2}})],1)],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(s){e.statusDialog=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitStatus}},[e._v("确 定")])],1)],1)],1)},i=[],a=t(8219),n={name:"CourseSection",props:{courseId:{type:[Number,String],require:!0},courseName:{type:String,require:!0}},data(){return{sections:[],defaultProps:{children:"lessonDTOS",label(e){return e.sectionName||e.theme}},isLoading:!1,sectionDialog:!1,lessonDialog:!1,statusDialog:!1,isSectionEdit:!1,isLessonEdit:!1,isLessonStatus:!1,sectionForm:{id:null,courseId:this.courseId,courseName:this.courseName,sectionName:"",description:"",orderNum:0,status:0},lessonForm:{courseName:this.courseName,sectionName:"",id:null,courseId:0,sectionId:0,theme:"",duration:0,isFree:!0,orderNum:0,status:0},sectionRules:{courseName:[{required:!0}],sectionName:[{required:!0,message:"请输入章节名称",trigger:"blur"},{min:3,max:40,message:"长度在 3 到 40 个字符",trigger:"blur"}]},lessonRules:{courseName:[{required:!0}],sectionName:[{required:!0}],theme:[{required:!0,message:"请输入课时名称",trigger:"blur"},{min:3,max:100,message:"长度在 3 到 100 个字符",trigger:"blur"}],duration:[{required:!0},{min:0,message:"请输入正确时长",trigger:"blur"}],isFree:[{required:!0}]}}},created(){this.loadSectionAndLesson()},methods:{async loadSectionAndLesson(){const{data:e}=await(0,a.ob)(this.courseId);"000000"===e.code&&(this.sections=e.data)},handleDrop(e,s,t){return"inner"!==t&&e.data.sectionId===s.data.sectionId},async handleNode(e,s,t,o){this.isLoading=!0;try{await Promise.all(s.parent.childNodes.map(((s,t)=>e.data.sectionId?(0,a.sq)({id:s.data.id,orderNum:t}):(0,a.dR)({id:s.data.id,orderNum:t})))),this.$message.success("数据更新成功！")}catch(i){this.$message.error("数据更新失败！",i)}this.isLoading=!1},goBack(){this.$router.push({name:"course"})},async onSubmitSection(){const{data:e}=await(0,a.dR)(this.sectionForm);console.log(e),"000000"===e.code&&(this.loadSectionAndLesson(),this.sectionDialog=!1,this.$refs.sectionForm.resetFields(),this.$message.success(""+(this.isSectionEdit?"编辑章节成功！":"添加章节成功！")))},handleAddSection(){this.isSectionEdit=!1,this.sectionDialog=!0},handleEditSection(e){this.isSectionEdit=!0,this.sectionDialog=!0,this.sectionForm.sectionName=e.sectionName,this.sectionForm.description=e.description,this.sectionForm.orderNum=e.orderNum,this.sectionForm.id=e.id},closeSectionHandler(){this.sectionDialog=!1,this.$refs.sectionForm.resetFields()},closeLessonHandler(){this.lessonDialog=!1,this.$refs.lessonForm.resetFields()},handleAddLesson(e){this.lessonForm.sectionName=e.sectionName,this.lessonForm.courseId=e.courseId,this.lessonForm.sectionId=e.id,this.isLessonEdit=!1,this.lessonDialog=!0},handleEditLesson(e){this.isLessonEdit=!0,this.lessonForm.id=e.id,this.lessonForm.courseId=e.courseId,this.lessonForm.sectionId=e.sectionId,this.lessonForm.theme=e.theme,this.lessonForm.duration=e.duration,this.lessonForm.isFree=e.isFree,this.lessonForm.orderNum=e.orderNum,this.lessonForm.status=e.status,this.lessonDialog=!0},async onSubmitLesson(){const{data:e}=await(0,a.sq)(this.lessonForm);"000000"===e.code&&(this.loadSectionAndLesson(),this.closeLessonHandler(),this.$message.success(""+(this.isLessonEdit?"编辑课时成功！":"添加课时成功！")))},handleLessonStatus(e){this.isLessonStatus=!0,this.lessonForm=e,this.statusDialog=!0},handleSectionStatus(e){console.log(e),this.isLessonStatus=!1,this.sectionForm.id=e.id,this.sectionForm.courseId=e.courseId,this.sectionForm.sectionName=e.sectionName,this.sectionForm.description=e.description,this.sectionForm.orderNum=e.orderNum,this.sectionForm.status=e.status,this.statusDialog=!0},changeLessonStatus(e){this.lessonForm.status=e},async onSubmitStatus(){if(this.isLessonStatus){const{data:e}=await(0,a.sq)(this.lessonForm);"000000"===e.code&&(this.statusDialog=!1,this.$message.success("课时状态更新成功！"))}else{const{data:e}=await(0,a.dR)(this.sectionForm);"000000"===e.code&&(this.statusDialog=!1,this.$message.success("章节状态更新成功！"))}this.loadSectionAndLesson()}}},r=n,l=t(1001),c=(0,l.Z)(r,o,i,!1,null,"46683733",null),u=c.exports},8219:function(e,s,t){t.d(s,{$p:function(){return a},NI:function(){return r},Yt:function(){return l},a7:function(){return i},dR:function(){return u},jt:function(){return n},ob:function(){return c},sq:function(){return d}});var o=t(5286);const i=e=>(0,o.Z)({method:"POST",url:"/boss/course/getQueryCourses",data:e}),a=e=>(0,o.Z)({method:"GET",url:"/boss/course/changeState",params:e}),n=e=>(0,o.Z)({method:"POST",url:"/boss/course/saveOrUpdateCourse",data:e}),r=(e,s)=>(0,o.Z)({method:"POST",url:"/boss/course/upload",data:e,onUploadProgress:s}),l=e=>(0,o.Z)({method:"GET",url:`/boss/course/getCourseById?courseId=${e}`}),c=e=>(0,o.Z)({method:"GET",url:`/boss/course/section/getSectionAndLesson?courseId=${e}`}),u=e=>(0,o.Z)({method:"POST",url:"/boss/course/section/saveOrUpdateSection",data:e}),d=e=>(0,o.Z)({method:"POST",url:"/boss/course/lesson/saveOrUpdate",data:e})}}]);
//# sourceMappingURL=course-section.fbb6b8f2.js.map