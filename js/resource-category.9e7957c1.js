"use strict";(self["webpackChunkedu_fed"]=self["webpackChunkedu_fed"]||[]).push([[948],{5908:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"resourceCategory"},[e("el-card",[e("el-button",{attrs:{size:"mini"},on:{click:t.handleAdd}},[t._v("添加")]),e("el-table",{attrs:{data:t.category}},[e("el-table-column",{attrs:{prop:"id",label:"编号",width:"100"}}),e("el-table-column",{attrs:{prop:"name",label:"名称"}}),e("el-table-column",{attrs:{prop:"createdTime",label:"创建时间"}}),e("el-table-column",{attrs:{prop:"sort",label:"排序"}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.handleEdit(a.row)}}},[t._v("编辑")]),e("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleDelete(a.row)}}},[t._v("删除")])]}}])})],1),e("el-dialog",{attrs:{title:t.isEdit?"编辑分类":"添加分类",visible:t.dialogFormVisible,"before-close":t.closeHandler,width:"500px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("el-form",{ref:"gridData",attrs:{model:t.gridData,"label-position":"right","label-width":"80px"}},[e("el-form-item",{attrs:{label:"名称",prop:"name"}},[e("el-input",{attrs:{autocomplete:"off",clearable:""},model:{value:t.gridData.name,callback:function(e){t.$set(t.gridData,"name",e)},expression:"gridData.name"}})],1),e("el-form-item",{attrs:{label:"排序",prop:"sort"}},[e("el-input",{attrs:{autocomplete:"off",clearable:""},model:{value:t.gridData.sort,callback:function(e){t.$set(t.gridData,"sort",e)},expression:"gridData.sort"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.closeHandler}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确 定")])],1)],1)],1)],1)},o=[],l=a(7304),s={name:"ResourceCategory",data(){return{category:{},gridData:{id:null,name:"",sort:0},dialogFormVisible:!1,isEdit:!1}},created(){this.loadAllCategory()},methods:{async loadAllCategory(){const{data:t}=await(0,l.KQ)();"000000"===t.code&&(this.category=t.data)},async onSubmit(){const{data:t}=await(0,l.u_)(this.gridData);"000000"===t.code&&(this.loadAllCategory(),this.closeHandler())},handleAdd(){this.isEdit=!1,this.dialogFormVisible=!0},handleEdit(t){this.isEdit=!0,this.dialogFormVisible=!0,this.gridData.name=t.name,this.gridData.sort=t.sort,this.gridData.id=t.id},handleDelete(t){this.$confirm("确认删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{const{data:e}=await(0,l.uu)(t.id);"000000"===e.code&&(this.loadAllCategory(),this.$message({type:"success",message:"删除成功!"}))})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},closeHandler(){this.dialogFormVisible=!1,this.$refs.gridData.resetFields()}}},i=s,n=a(1001),d=(0,n.Z)(i,r,o,!1,null,"64989793",null),u=d.exports},7304:function(t,e,a){a.d(e,{Jh:function(){return s},KQ:function(){return d},LR:function(){return i},RT:function(){return l},fg:function(){return n},h:function(){return g},iA:function(){return o},u_:function(){return u},uu:function(){return c},xK:function(){return m}});var r=a(5286);const o=()=>(0,r.Z)({method:"GET",url:"/boss/resource/getAll"}),l=t=>(0,r.Z)({method:"POST",url:"/boss/resource/getResourcePages",data:t}),s=()=>(0,r.Z)({method:"GET",url:"/boss/resource/category/getAll"}),i=t=>(0,r.Z)({method:"POST",url:"/boss/resource/saveOrUpdate",data:t}),n=t=>(0,r.Z)({method:"DELETE",url:`/boss/resource/${t}`}),d=()=>(0,r.Z)({method:"GET",url:"/boss/resource/category/getAll"}),u=t=>(0,r.Z)({method:"POST",url:"/boss/resource/category/saveOrderUpdate",data:t}),c=t=>(0,r.Z)({method:"DELETE",url:`/boss/resource/category/${t}`}),m=t=>(0,r.Z)({method:"GET",url:`/boss/resource/getRoleResources?roleId=${t}`}),g=t=>(0,r.Z)({method:"POST",url:"/boss/resource/allocateRoleResources",data:t})}}]);
//# sourceMappingURL=resource-category.9e7957c1.js.map