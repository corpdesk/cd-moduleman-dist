(self.webpackChunkcd_moduleman=self.webpackChunkcd_moduleman||[]).push([[1283],{71283:(O,I,r)=>{r.r(I),r.d(I,{CdObjModule:()=>N});var s=r(35228),u=r(30533),e=r(83781),T=r(76380),h=r(92618),g=r(59707),v=r(15006),p=r(92526),t=r(68201),n=r(27764),i=r(37011),y=r(33635);const F=new t.FormsService,b=[{title:"ID",name:"cdObjId",dbName:"cd_obj_id",type:t.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"Guid",name:"cdObjGuid",dbName:"cd_obj_guid",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"cdObjName",dbName:"cd_obj_name",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.createForm},{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[u.Validators.minLength(3),u.Validators.maxLength(20),u.Validators.required]]},{title:"CdObjType",name:"cdObjTypeGuid",dbName:"cd_obj_type_guid",type:t.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay},{controlType:t.ControlType.searchDropDown,fieldFor:t.FieldFor.createForm}],ddlInfo:{selData$:(0,y.of)([]),selValueField:"cdObjName",selIndex:"cdObjTypeGuid",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[u.Validators.minLength(3),u.Validators.maxLength(42),u.Validators.required]]},{title:"ParentModule",name:"parentModuleGuid",dbName:"parent_module_guid",type:t.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay},{controlType:t.ControlType.searchDropDown,fieldFor:t.FieldFor.createForm}],ddlInfo:{selData$:(0,y.of)([]),selValueField:"menuName",selIndex:"menuGuid",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[u.Validators.minLength(3),u.Validators.maxLength(42),u.Validators.required]]},{title:"AliasName",name:"cdObjDispName",dbName:"cd_obj_disp_name",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.createForm},{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[u.Validators.minLength(3),u.Validators.maxLength(14),u.Validators.required]]},{title:"Icon",name:"icon",dbName:"icon",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay},{controlType:t.ControlType.ddlIcons,fieldFor:t.FieldFor.createForm}],ddlInfo:{selData$:(0,y.of)([]),selValueField:"iconName",selIndex:"iconId",selPlaceholder:"...choose",ddlIconId:"iconDdlIdX",searchInputId:"searchInputIdX",searchInputName:"searchInputNameX",selectedValue:"",data:null},formatt:"text",savable:!0,formControlsConfig:["",[u.Validators.minLength(2),u.Validators.maxLength(20),u.Validators.required]]},{title:"Show Icon",name:"showIcon",dbName:"show_icon",type:t.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.status,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Enabled",name:"cdObjEnabled",dbName:"cd_obj_enabled",type:t.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.status,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Action",name:"action",type:t.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:t.ControlType.action,fieldFor:t.FieldFor.tableDisplay},{controlType:t.ControlType.action,fieldFor:t.FieldFor.createForm}],Fn:"createCdObj"},{title:"Search",name:"iconSearch",type:t.FieldType.any,controls:[],formControlsConfig:["",[]]}],M={data:{},valid:null,ctx:"Sys"},m={token:"",stepTitle:"Create CdObj",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"cdObjInfo",cardTitle:"CdObj Information",cardTitleDesc:"Fill all information below",module:"Moduleman",controller:"CdObj",formGroup:null,fields:F.filterByFieldFor(b,t.FieldFor.createForm)},U={name:"CdObj Wizard",steps:[m]},w={select:["cdObjTypeId","cdObjTypeName","cdObjTypeGuid"],where:{}},S={getFn$:null,selIndex:w.select[2],selValueField:w.select[1],fetchFields:w.select,step:null,token:null,controlName:"cdObjTypeGuid"},z=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/cd-obj/create",actionType:t.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/cd-obj/dashboard",actionType:t.ActionType.navigate}];var l=r(87675);class P{constructor(o,a,d,c,C,D,x){this.aRoute=o,this.router=a,this.svBase=d,this.svNazTable=c,this.svAcl=C,this.svPage=D,this.svSess=x,this.dSource={fields:[],data:[]},this.cardTitle="CdObj",this.cardBodyId="cdObj",this.searchInputId="inputSearchCdObj",this.editRoute="/moduleman/cd-obj/edit",this.deleteRoute="/moduleman/cd-obj/delete",this.createRoute="/moduleman/cd-obj/create",this.filter={},this.tpData=t.DEFAULT_TPD,this.ddlData=z,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{o&&this.svAcl.initComponent(o,this,this.svSess).then(a=>{})})}init(){this.baseModel=new t.BaseModel(m.module,m.controller),this.svBase.module=m.module,this.svBase.controller=m.controller,this.baseModel.data.fields=b.filter(o=>o.fetchable||o.type===t.FieldType.action),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(m.controller,"List"),this.sQuery=this.svNazTable.initSQuery(this),this.dsEmittData=this.svNazTable.initEmittData(this)}execQuery(o){this.svNazTable.execQuery(o,this.svBase.getPaged$(this.sQuery,this.baseModel.sess.cd_token),this)}setSearchQuery(o){this.sQuery=o.sQuery,this.execQuery(o)}getSelect(){return this.baseModel.data.fields.filter(o=>o.fetchable).map(o=>o.name)}}P.\u0275fac=function(o){return new(o||P)(l.\u0275\u0275directiveInject(i.ActivatedRoute),l.\u0275\u0275directiveInject(i.Router),l.\u0275\u0275directiveInject(t.BaseService),l.\u0275\u0275directiveInject(n.NazTableService),l.\u0275\u0275directiveInject(t.AclService),l.\u0275\u0275directiveInject(n.PageService),l.\u0275\u0275directiveInject(t.SessService))},P.\u0275cmp=l.\u0275\u0275defineComponent({type:P,selectors:[["app-list"]],viewQuery:function(o,a){if(1&o&&l.\u0275\u0275viewQuery(n.NazTableComponent,5),2&o){let d;l.\u0275\u0275queryRefresh(d=l.\u0275\u0275loadQuery())&&(a.nazTable=d.first)}},decls:1,vars:9,consts:[[3,"baseModel","cardTitle","cardBodyId","searchInputId","tpData","filter","ddlData","editRoute","deleteRoute","searchQuery"]],template:function(o,a){1&o&&(l.\u0275\u0275elementStart(0,"naz-table",0),l.\u0275\u0275listener("searchQuery",function(c){return a.setSearchQuery(c)}),l.\u0275\u0275elementEnd()),2&o&&l.\u0275\u0275property("baseModel",a.baseModel)("cardTitle",a.cardTitle)("cardBodyId",a.cardBodyId)("searchInputId",a.searchInputId)("tpData",a.tpData)("filter",a.filter)("ddlData",a.ddlData)("editRoute",a.editRoute)("deleteRoute",a.deleteRoute)},dependencies:[n.NazTableComponent]});var V=r(15861);class A{constructor(o,a,d,c,C,D){this.aRoute=o,this.svBase=a,this.svPage=d,this.svSess=c,this.svAcl=C,this.svNotif=D,this.formConfig={},this.backRoute="/moduleman/cd-obj/list",this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{this.svAcl.initComponent(o,this,this.svSess).then(a=>{})})}init(){this.baseModel=new t.BaseModel(m.module,m.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(m.controller,"Edit"),this.baseModel.data.subTitle="only allowed fields are editable"}update(o){var a=this;return(0,V.Z)(function*(){a.svBase.update$(o,a.baseModel.token).subscribe(d=>{a.svNotif.emitNotif({pushRecepients:t.DEFAULT_PUSH_RECEPIENTS,pushData:d,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:d})})})()}}A.\u0275fac=function(o){return new(o||A)(l.\u0275\u0275directiveInject(i.ActivatedRoute),l.\u0275\u0275directiveInject(t.BaseService),l.\u0275\u0275directiveInject(n.PageService),l.\u0275\u0275directiveInject(t.SessService),l.\u0275\u0275directiveInject(t.AclService),l.\u0275\u0275directiveInject(t.NotificationService))},A.\u0275cmp=l.\u0275\u0275defineComponent({type:A,selectors:[["app-edit"]],decls:1,vars:3,consts:[[3,"baseModel","pageDescription","formConfig","backRoute","updateQuery"]],template:function(o,a){1&o&&(l.\u0275\u0275elementStart(0,"naz-table-edit",0),l.\u0275\u0275listener("updateQuery",function(c){return a.update(c)}),l.\u0275\u0275elementEnd()),2&o&&l.\u0275\u0275property("baseModel",a.baseModel)("formConfig",a.formConfig)("backRoute",a.backRoute)},dependencies:[n.EditComponent]});class L{constructor(o,a,d,c,C,D,x){this.aRoute=o,this.router=a,this.svBase=d,this.svPage=c,this.svAcl=C,this.svNotif=D,this.svSess=x,this.formConfig={},this.backRoute="/moduleman/cd-obj/list",this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{this.svAcl.initComponent(o,this,this.svSess).then(a=>{})})}init(){this.baseModel=new t.BaseModel(m.module,m.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(m.controller,"Delete"),this.baseModel.data.subTitle="confirm before delete"}deleteItem(o){var a=this;return(0,V.Z)(function*(){a.svBase.delete$(o,a.baseModel.token).subscribe(d=>{a.svNotif.emitNotif({pushRecepients:t.DEFAULT_PUSH_RECEPIENTS,pushData:d,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:d})})})()}}L.\u0275fac=function(o){return new(o||L)(l.\u0275\u0275directiveInject(i.ActivatedRoute),l.\u0275\u0275directiveInject(i.Router),l.\u0275\u0275directiveInject(t.BaseService),l.\u0275\u0275directiveInject(n.PageService),l.\u0275\u0275directiveInject(t.AclService),l.\u0275\u0275directiveInject(t.NotificationService),l.\u0275\u0275directiveInject(t.SessService))},L.\u0275cmp=l.\u0275\u0275defineComponent({type:L,selectors:[["app-delete"]],decls:1,vars:3,consts:[[3,"baseModel","pageDescription","formConfig","backRoute","deleteQuery"]],template:function(o,a){1&o&&(l.\u0275\u0275elementStart(0,"naz-table-delete",0),l.\u0275\u0275listener("deleteQuery",function(c){return a.deleteItem(c)}),l.\u0275\u0275elementEnd()),2&o&&l.\u0275\u0275property("baseModel",a.baseModel)("formConfig",a.formConfig)("backRoute",a.backRoute)},dependencies:[n.DeleteComponent]});var _=r(65037),G=r(95855);class j{constructor(o,a,d){this.svCdObj=o,this.svModule=a,this.svModman=d}loadDdls(o,a){var d=this;return(0,V.Z)(function*(){_.tL.token=o.token,_.tL.step=a,_.tL.controlName="parentModuleGuid",_.tL.getFn$=d.svModule.getModule$(_.qh,o.token),yield d.svModman.setDdl$(yield _.tL).subscribe(c=>{console.log("menu/CdObjModService::loadDdls()/ret(modules):",c),a.fields.forEach(C=>{"parentModuleGuid"===C.name&&(C.ddlInfo.data=c)})}),S.token=o.token,S.step=a,S.controlName="cdObjTypeGuid",S.getFn$=d.svCdObj.getCdObjType$(w,o.token),yield d.svModman.setDdl$(yield S).subscribe(c=>{console.log("menu/CdObjModService::loadDdls()/ret(cdObjTypes):",c),a.fields.forEach(C=>{"cdObjTypeGuid"===C.name&&(C.ddlInfo.data=c)})})})()}}j.\u0275fac=function(o){return new(o||j)(l.\u0275\u0275inject(t.CdObjService),l.\u0275\u0275inject(t.ModuleService),l.\u0275\u0275inject(G.v))},j.\u0275prov=l.\u0275\u0275defineInjectable({token:j,factory:j.\u0275fac,providedIn:"root"});class R{constructor(o,a,d,c,C,D,x,Q,W,K,H,X,Z){this.aRoute=o,this.router=a,this.svCdObjFront=d,this.svAcl=c,this.svForm=C,this.svNotif=D,this.fb=x,this.svForms=Q,this.svModman=W,this.svPage=K,this.svPush=H,this.svBase=X,this.svSess=Z,this.newCdObj=M,this.wizardModel=U,this.newModule=_.Rf,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{this.svAcl.initComponent(o,this,this.svSess).then(a=>{a&&(this.svPush.init(this),this.baseModel.data.step.token=this.baseModel.token)})})}ngAfterViewInit(){this.svCdObjFront.loadDdls(this.baseModel,this.baseModel.data.step).then(o=>{console.log("cdObj/CreateComponent::ngAfterViewInit()/this.baseModel.data.step:",this.baseModel.data.step)}),this.svModman.setIconsData$(this.baseModel.data.step,"icon")}init(){this.baseModel=new t.BaseModel(m.module,m.controller),this.baseModel.data.fields=this.svForms.filterByFieldFor(b,t.FieldFor.createForm),this.baseModel.data.wizardModel=U,this.baseModel.data.step=this.svForm.filterStepsByController(this.baseModel.data.wizardModel,m.controller)[0],this.baseModel.data.form=this.fb.group(this.svForm.getFormControlConfig(b)),this.baseModel.data.step.formGroup=this.baseModel.data.form,this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(m.controller,"Create")}setSelectedIcon(o){this.svForm.setSelectedIcon(o,this.baseModel,this.baseModel.data.step)}save(o){let a;switch(o.controller){case"module":case"menu":break;case"cdObj":a=this.svBase.create$(this.newCdObj,this.baseModel.token),this.svForm.saveForm(o,this.newCdObj,a,this.svPush.pushEnvelop,this.svNotif)}}finishFunction(){console.log("finishing!!")}}R.\u0275fac=function(o){return new(o||R)(l.\u0275\u0275directiveInject(i.ActivatedRoute),l.\u0275\u0275directiveInject(i.Router),l.\u0275\u0275directiveInject(j),l.\u0275\u0275directiveInject(t.AclService),l.\u0275\u0275directiveInject(t.FormsService),l.\u0275\u0275directiveInject(t.NotificationService),l.\u0275\u0275directiveInject(u.FormBuilder),l.\u0275\u0275directiveInject(t.FormsService),l.\u0275\u0275directiveInject(G.v),l.\u0275\u0275directiveInject(n.PageService),l.\u0275\u0275directiveInject(t.CdPushService),l.\u0275\u0275directiveInject(t.BaseService),l.\u0275\u0275directiveInject(t.SessService))},R.\u0275cmp=l.\u0275\u0275defineComponent({type:R,selectors:[["app-create"]],decls:1,vars:2,consts:[[3,"baseModel","wizardModel","saveEmitter","relaySelIconEmitter"]],template:function(o,a){1&o&&(l.\u0275\u0275elementStart(0,"naz-table-create",0),l.\u0275\u0275listener("saveEmitter",function(c){return a.save(c)})("relaySelIconEmitter",function(c){return a.setSelectedIcon(c)}),l.\u0275\u0275elementEnd()),2&o&&l.\u0275\u0275property("baseModel",a.baseModel)("wizardModel",a.wizardModel)},dependencies:[n.CreateComponent]});var $=r(86106);const k=[{path:"list",component:P},{path:"edit",component:A},{path:"delete",component:L},{path:"create",component:R},{path:"dashboard",component:$.M}];class E{}E.\u0275fac=function(o){return new(o||E)},E.\u0275mod=l.\u0275\u0275defineNgModule({type:E}),E.\u0275inj=l.\u0275\u0275defineInjector({imports:[i.RouterModule.forChild(k),i.RouterModule]});class N{}N.\u0275fac=function(o){return new(o||N)},N.\u0275mod=l.\u0275\u0275defineNgModule({type:N}),N.\u0275inj=l.\u0275\u0275defineInjector({imports:[s.CommonModule,u.FormsModule,u.ReactiveFormsModule,T.NgbNavModule,T.NgbDropdownModule,T.NgbTooltipModule,T.NgbAccordionModule,n.NazUiModule,n.NazTableModule,n.NazCreateModule,n.NazEditModule,n.NazDeleteModule,h.Ng2SearchPipeModule,g.ArchwizardModule,v.NgToggleModule,E,e.NgSelectModule,t.BaseModule.forChild(p.N),t.CdPushModule.forChild(p.N)]})},76679:(O,I,r)=>{r.d(I,{AO:()=>M,Cq:()=>y,NG:()=>t,hA:()=>p,i0:()=>F,kx:()=>n,ni:()=>b,pt:()=>i});var s=r(30533),e=r(68201),h=r(33635);const v=new e.FormsService,p=[{title:"ID",name:"menuId",dbName:"menu_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"number",disabled:!0,formControlsConfig:["",[]]},{title:"Guid",name:"menuGuid",dbName:"menu_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Label",name:"menuLabel",dbName:"menu_label",type:e.FieldType.string,fetchable:!0,updateable:!1,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Name",name:"menuName",dbName:"menu_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(25),s.Validators.required]]},{title:"MenuParent",name:"menuParentId",dbName:"menu_parent_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,h.of)([]),selValueField:"menuName",selIndex:"menuId",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[s.Validators.required]]},{title:"ModuleParent",name:"moduleId",dbName:"module_id",primaryField:"menuParent",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,h.of)([]),selValueField:"moduleName",selIndex:"moduleId",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[s.Validators.required]]},{title:"Description",name:"menuDescription",dbName:"menu_description",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.textArea,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(0),s.Validators.maxLength(300)]]},{title:"Icon",name:"menuIcon",dbName:"menu_icon",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.ddlIcons,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,h.of)([]),selValueField:"iconName",selIndex:"iconId",selPlaceholder:"...choose",ddlIconId:"iconDdlIdX",searchInputId:"searchInputIdX",searchInputName:"searchInputNameX",selectedValue:"",data:null},formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(2),s.Validators.maxLength(50),s.Validators.required]]},{title:"Path",name:"path",dbName:"path",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(100),s.Validators.required]]},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm}],Fn:"createMenu"},{title:"Search",name:"iconSearch",type:e.FieldType.any,controls:[],formControlsConfig:["",[]]}],t={data:{},cdObj:null,valid:null,ctx:"Sys"},n=[{toReplace:"menuLabel",replaceWith:"menuName"}],i={token:"",stepTitle:"Create Menu",stepItems:{prevButtonId:"stepToModule",lastButtonId:"endSteps"},tabPaneId:"menuInfo",cardTitle:"Menu Information",cardTitleDesc:"Every module has to have at least one menu item. You can use the + button to add more items.",module:"moduleman",controller:"menu",formGroup:null,fields:v.filterByFieldFor(p,e.FieldFor.createForm)},y={name:"Menu Wizard",steps:[i]},F={select:["menuId","menuName","menuGuid"],where:{}},b={getFn$:null,selIndex:F.select[0],selValueField:F.select[1],fetchFields:F.select,step:null,token:null,controlName:"menuParentId"},M=[{menuName:"create",menuGuid:"bd9b5bda6ab",navLocation:"/moduleman/menu/create",actionType:e.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db69c1",navLocation:"/moduleman/menu/dashboard",actionType:e.ActionType.navigate}]},65037:(O,I,r)=>{r.d(I,{AO:()=>F,GZ:()=>y,Qx:()=>v,Rf:()=>t,c_:()=>i,qh:()=>b,tL:()=>M,vk:()=>p});var s=r(30533),e=r(68201),h=r(76679);const g=new e.FormsService,v=[{title:"ID",name:"moduleId",dbName:"module_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"number",disabled:!0},{title:"Guid",name:"moduleGuid",dbName:"module_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"moduleName",dbName:"module_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(4),s.Validators.maxLength(20),s.Validators.required]]},{title:"Description",name:"moduleDescription",dbName:"module_description",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.textArea,fieldFor:e.FieldFor.createForm}],formatt:"textArea",savable:!0,formControlsConfig:["",[s.Validators.minLength(0),s.Validators.maxLength(300)]]},{title:"Enabled",name:"moduleEnabled",dbName:"module_enabled",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Sys",name:"isSysModule",dbName:"is_sys_module",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.required]]},{title:"System Module",name:"isSys",controls:[{controlType:e.ControlType.toggleSwitch,fieldFor:e.FieldFor.createForm}],primaryField:"isSysModule",formControlsConfig:["",[]]},{title:"App Module",name:"isApp",controls:[{controlType:e.ControlType.toggleSwitch,fieldFor:e.FieldFor.createForm}],primaryField:"isSysModule",formControlsConfig:["",[]]},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay}]}],p={controllerName:"isSysModule",selectedItem:{index:0,optControlId:"",value:"",selected:!1},controlTypes:e.ControlType.toggleSwitch,options:[{index:0,optControlId:"isSys",value:"isSys",selected:!0},{index:1,optControlId:"isApp",value:"isApp",selected:!1}]},t={valid:null,data:{},ctx:"Sys"},i={token:"",stepTitle:"Create Module",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"moduleInfo",cardTitle:"Module Information",cardTitleDesc:"Fill all information below",module:"moduleman",controller:"module",formGroup:null,fields:g.filterByFieldFor(v,e.FieldFor.createForm)},y={name:"Module Wizard",steps:[i,h.pt]},F=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/module/create",actionType:e.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/module/dashboard",actionType:e.ActionType.navigate}],b={select:["moduleId","moduleName","moduleGuid"],where:{}},M={getFn$:null,selIndex:b.select[0],selValueField:b.select[1],fetchFields:b.select,step:null,token:null,controlName:"moduleId"}},95855:(O,I,r)=>{r.d(I,{v:()=>p});var s=r(33635),e=r(87675),h=r(68201);class p{constructor(n,i,y){this.svMenu=n,this.svNotif=i,this.svForm=y,this.ddlData={config:{suppressScrollX:!0,wheelSpeed:.3},header:{title:{lable:"Notifications",cls:"",action:null},sideLink:{lable:"View All",cls:"",action:null}},footer:{label:"View All",icon:"",action:null},data:[{label:"item 1",description:"If several languages coalesce the grammar",time:"3 min ago"},{label:"item 2",description:"It will seem like simplified English",time:"1 hr ago"},{label:"item 3",description:"If several languages coalesce the grammar",time:"4 hr ago"}]},this.pushEnvelop={pushRecepients:[],pushData:null,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:null},this.numericNumberReg1="^-?[0-9]\\d*(\\.\\d{1,2})?$",this.numericNumberReg2="/^[0-9]d*$/",this.numericNumberReg3=new RegExp(/^-?[0-9]\\d*(\\.\\d{1,2})?$/,"i"),this.numericNumberReg4=new RegExp(/^[0-9]\d*$/,"i")}setIconsData$(n,i){n.fields.map((y,F)=>{y.name===i&&(n.fields[F].ddlInfo.selData$=(0,s.of)(this.ddlData),n.fields[F].ddlInfo.selIndex="iconId",n.fields[F].ddlInfo.selValueField="iconName",n.fields[F].ddlInfo.selPlaceholder="...Choose")})}setDdl$(n){if(n.token){const i=new s.Subject;let y=[];return n.getFn$.subscribe(F=>{const b=F;console.log("ModulemanService::setDdl$()/response:",b),b.app_state.success?(y=b.data.items,n.step.fields.map((M,m)=>{M.name===n.controlName&&(n.step.fields[m].ddlInfo.selData$=(0,s.of)(b.data.items),n.step.fields[m].ddlInfo.selIndex=n.selIndex,n.step.fields[m].ddlInfo.selValueField=n.selValueField,n.step.fields[m].ddlInfo.selPlaceholder="...Choose")}),i.next(y)):(this.pushEnvelop.pushData=b,this.pushEnvelop.resp=b,this.svNotif.emitNotif(this.pushEnvelop),i.next(y))}),i.asObservable()}return(0,s.of)([])}}p.\u0275fac=function(n){return new(n||p)(e.\u0275\u0275inject(h.MenuService),e.\u0275\u0275inject(h.NotificationService),e.\u0275\u0275inject(h.FormsService))},p.\u0275prov=e.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac,providedIn:"root"})},92526:(O,I,r)=>{r.d(I,{N:()=>v});const s="https://cd-api.co.ke",v={appId:"",production:!1,apiEndpoint:`${s}/api`,sioEndpoint:`${s}:3002`,wsEndpoint:"ws://cd-api.co.ke:3000",wsMode:"wss",pushConfig:{sio:{enabled:!0},wss:{enabled:!1},pusher:{enabled:!0,apiKey:"DtVRY9V5j41KwSxKrd8L_dRijUJh9gVcqwBH5wb96no",options:{cluster:"ap2",forceTLS:!0,userAuthentication:{endpoint:"https://cd-api.co.ke:3002/pusher/auth",transport:"ajax",params:{},headers:{},includeCredentials:!0,customHandler:null},channelAuthorization:{endpoint:"https://cd-api.co.ke:3002/pusher/auth"},authEndpoint:"https://cd-api.co.ke:3002/pusher/auth"}}},CD_PORT:3001,consumerToken:"B0B3DA99-1859-A499-90F6-1E3F69575DCD",USER_RESOURCES:"http://routed-93/user-resources",apiHost:"https://cd-api.co.ke",sioHost:"https://cd-api.co.ke",shellHost:"https://cd-shell.asdap.africa",consumer:"",clientAppGuid:"ca0fe39f-92b2-484d-91ef-487d4fc462a2",clientAppId:2,SOCKET_IO_PORT:3002,defaultauth:"cd-auth",mfManifestPath:"/assets/mf.manifest.json",apiOptions:{headers:{"Content-Type":"application/json"}},sioOptions:{path:"/socket.io",transports:["websocket","polling"],secure:!0},firebaseConfig:{apiKey:"",authDomain:"",databaseURL:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""}}},15861:(O,I,r)=>{function s(e,T,h,g,v,p,t){try{var n=e[p](t),i=n.value}catch(y){return void h(y)}n.done?T(i):Promise.resolve(i).then(g,v)}function u(e){return function(){var T=this,h=arguments;return new Promise(function(g,v){var p=e.apply(T,h);function t(i){s(p,g,v,t,n,"next",i)}function n(i){s(p,g,v,t,n,"throw",i)}t(void 0)})}}r.d(I,{Z:()=>u})}}]);