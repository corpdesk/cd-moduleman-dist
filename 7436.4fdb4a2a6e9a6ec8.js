(self.webpackChunkcd_moduleman=self.webpackChunkcd_moduleman||[]).push([[7436],{19372:(E,g,n)=>{n.d(g,{k:()=>s});var d=n(15861),M=n(65037),e=n(76679),v=n(87675),y=n(23008),p=n(95855);class s{constructor(r,i,t){this.svMenu=r,this.svModule=i,this.svModman=t}loadDdls(r,i){var t=this;return(0,d.Z)(function*(){M.tL.token=r.token,M.tL.step=i,M.tL.controlName="moduleId",M.tL.getFn$=t.svModule.getModule$(M.qh,r.token),yield t.svModman.setDdl$(yield M.tL).subscribe(c=>{console.log("menu/MenuModService::loadDdls()/ret(modules):",c),i.fields.forEach(h=>{"moduleId"===h.name&&(h.ddlInfo.data=c)})}),e.ni.token=r.token,e.ni.step=i,e.ni.controlName="menuParentId",e.ni.getFn$=t.svMenu.getMenuList$(e.i0,r.token),yield t.svModman.setDdl$(yield e.ni).subscribe(c=>{console.log("menu/MenuModService::loadDdls()/ret(menus):",c),i.fields.forEach(h=>{"menuParentId"===h.name&&(h.ddlInfo.data=c)})})})()}setCdObj(r,i,t){console.log("MenuModService::setCdObj()/fg:",r);const c=r.controls.moduleId.value;console.log("MenuModService::setCdObj()/moduleId:",c);const h=i.getDdlData("moduleId",e.hA);console.log("MenuModService::setCdObj()/modules:",h);const _=h.filter((N,R)=>N.moduleId===c?N:null);console.log("MenuModService::setCdObj()/selectedModule:",_);let I=null;_.length>0&&(I=_[0].moduleGuid),console.log("MenuModService::setCdObj()/moduleGuid:",I),I&&(t.cdObj={cdObjName:r.controls.menuName.value,cdObjTypeGuid:"f5df4494-5cc9-4463-8e8e-c5861703280e",parentModuleGuid:I,cdObjDispName:null,icon:null,showIcon:null,cdObjEnabled:null})}}s.\u0275fac=function(r){return new(r||s)(v.\u0275\u0275inject(y.MenuService),v.\u0275\u0275inject(y.ModuleService),v.\u0275\u0275inject(p.v))},s.\u0275prov=v.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})},76679:(E,g,n)=>{n.d(g,{AO:()=>h,Cq:()=>i,NG:()=>s,hA:()=>p,i0:()=>t,kx:()=>a,ni:()=>c,pt:()=>r});var d=n(30533),e=n(23008),f=n(33635);const F=new e.FormsService,p=[{title:"ID",name:"menuId",dbName:"menu_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"number",disabled:!0,formControlsConfig:["",[]]},{title:"Guid",name:"menuGuid",dbName:"menu_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Label",name:"menuLabel",dbName:"menu_label",type:e.FieldType.string,fetchable:!0,updateable:!1,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Name",name:"menuName",dbName:"menu_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[d.Validators.minLength(3),d.Validators.maxLength(25),d.Validators.required]]},{title:"MenuParent",name:"menuParentId",dbName:"menu_parent_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,f.of)([]),selValueField:"menuName",selIndex:"menuId",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[d.Validators.required]]},{title:"ModuleParent",name:"moduleId",dbName:"module_id",primaryField:"menuParent",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,f.of)([]),selValueField:"moduleName",selIndex:"moduleId",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[d.Validators.required]]},{title:"Description",name:"menuDescription",dbName:"menu_description",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.textArea,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[d.Validators.minLength(0),d.Validators.maxLength(300)]]},{title:"Icon",name:"menuIcon",dbName:"menu_icon",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.ddlIcons,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,f.of)([]),selValueField:"iconName",selIndex:"iconId",selPlaceholder:"...choose",ddlIconId:"iconDdlIdX",searchInputId:"searchInputIdX",searchInputName:"searchInputNameX",selectedValue:"",data:null},formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[d.Validators.minLength(2),d.Validators.maxLength(50),d.Validators.required]]},{title:"Path",name:"path",dbName:"path",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",formControlsConfig:["",[d.Validators.minLength(3),d.Validators.maxLength(100),d.Validators.required]]},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm}],Fn:"createMenu"},{title:"Search",name:"iconSearch",type:e.FieldType.any,controls:[],formControlsConfig:["",[]]}],s={data:{},cdObj:null,valid:null,ctx:"Sys"},a=[{toReplace:"menuLabel",replaceWith:"menuName"}],r={token:"",stepTitle:"Create Menu",stepItems:{prevButtonId:"stepToModule",lastButtonId:"endSteps"},tabPaneId:"menuInfo",cardTitle:"Menu Information",cardTitleDesc:"Every module has to have at least one menu item. You can use the + button to add more items.",module:"moduleman",controller:"menu",formGroup:null,fields:F.filterByFieldFor(p,e.FieldFor.createForm)},i={name:"Menu Wizard",steps:[r]},t={select:["menuId","menuName","menuGuid"],where:{}},c={getFn$:null,selIndex:t.select[0],selValueField:t.select[1],fetchFields:t.select,step:null,token:null,controlName:"menuParentId"},h=[{menuName:"create",menuGuid:"bd9b5bda6ab",navLocation:"/moduleman/menu/create",actionType:e.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db69c1",navLocation:"/moduleman/menu/dashboard",actionType:e.ActionType.navigate}]},65037:(E,g,n)=>{n.d(g,{AO:()=>t,GZ:()=>i,Qx:()=>F,Rf:()=>s,c_:()=>r,qh:()=>c,tL:()=>h,vk:()=>p});var d=n(30533),e=n(23008),f=n(76679);const y=new e.FormsService,F=[{title:"ID",name:"moduleId",dbName:"module_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"number",disabled:!0},{title:"Guid",name:"moduleGuid",dbName:"module_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"moduleName",dbName:"module_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[d.Validators.minLength(4),d.Validators.maxLength(20),d.Validators.required]]},{title:"Description",name:"moduleDescription",dbName:"module_description",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.textArea,fieldFor:e.FieldFor.createForm}],formatt:"textArea",savable:!0,formControlsConfig:["",[d.Validators.minLength(0),d.Validators.maxLength(300)]]},{title:"Enabled",name:"moduleEnabled",dbName:"module_enabled",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Sys",name:"isSysModule",dbName:"is_sys_module",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[d.Validators.required]]},{title:"System Module",name:"isSys",controls:[{controlType:e.ControlType.toggleSwitch,fieldFor:e.FieldFor.createForm}],primaryField:"isSysModule",formControlsConfig:["",[]]},{title:"App Module",name:"isApp",controls:[{controlType:e.ControlType.toggleSwitch,fieldFor:e.FieldFor.createForm}],primaryField:"isSysModule",formControlsConfig:["",[]]},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay}]}],p={controllerName:"isSysModule",selectedItem:{index:0,optControlId:"",value:"",selected:!1},controlTypes:e.ControlType.toggleSwitch,options:[{index:0,optControlId:"isSys",value:"isSys",selected:!0},{index:1,optControlId:"isApp",value:"isApp",selected:!1}]},s={valid:null,data:{},ctx:"Sys"},r={token:"",stepTitle:"Create Module",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"moduleInfo",cardTitle:"Module Information",cardTitleDesc:"Fill all information below",module:"moduleman",controller:"module",formGroup:null,fields:y.filterByFieldFor(F,e.FieldFor.createForm)},i={name:"Module Wizard",steps:[r,f.pt]},t=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/module/create",actionType:e.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/module/dashboard",actionType:e.ActionType.navigate}],c={select:["moduleId","moduleName","moduleGuid"],where:{}},h={getFn$:null,selIndex:c.select[0],selValueField:c.select[1],fetchFields:c.select,step:null,token:null,controlName:"moduleId"}},17436:(E,g,n)=>{n.r(g),n.d(g,{ModuleModule:()=>S});var d=n(35228),M=n(30533),e=n(83781),v=n(76380),f=n(92618),y=n(59707),F=n(15006),p=n(92526),s=n(23008),a=n(49284),r=n(37011),i=n(65037),t=n(87675);class c{constructor(o,l,u,m,C,T,P,A,j,L){this.aRoute=o,this.route=l,this.router=u,this.svModule=m,this.svNazTable=C,this.svAcl=T,this.svForms=P,this.svPage=A,this.svNav=j,this.svSess=L,this.baseModel=new s.BaseModel("",""),this.dSource={fields:[],data:[]},this.cardTitle="Modules",this.cardBodyId="cdModules",this.searchInputId="inputSearchModule",this.editRoute="/moduleman/module/edit",this.deleteRoute="/moduleman/module/delete",this.createRoute="/moduleman/module/create",this.filter={},this.tpData=s.DEFAULT_TPD,this.ddlData=i.AO,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{if(o){console.log("cd-ModulemanV2::Module/ListComponent::params:",o),o.token&&o.token.length>0&&(this.baseModel.token=o.token),console.log("cd-ModulemanV2::Module/ListComponent::ngOnInit()/this.baseModel.token:",this.baseModel.token);const l=localStorage.getItem(o.token);if(l){const u=JSON.parse(l);this.baseModel.sess=u,console.log("cd-ModulemanV2::Module/ListComponent::ngOnInit()/this.baseModel.sess:",this.baseModel.sess)}this.svAcl.initComponent(o,this,this.svSess).then(u=>{console.log("cd-ModulemanV2::Module/ListComponent::ngOnInit()/this.svAcl.initComponent/ret:",u),u?(this.sQuery=this.svNazTable.initSQuery(this),console.log("cd-ModulemanV2::Module/ListComponent::ngOnInit()/this.sQuery:",this.sQuery),this.dsEmittData=this.svNazTable.initEmittData(this),console.log("cd-ModulemanV2::Module/ListComponent::ngOnInit()/this.dsEmittData:",this.dsEmittData)):this.svNav.nsNavigate(this,"/","Error loading ModuleList page")})}})}ngAfterViewInit(){}init(){this.baseModel=new s.BaseModel(i.c_.module,i.c_.controller),this.baseModel.data.fields=i.Qx.filter(o=>o.fetchable||o.type===s.FieldType.action),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(i.c_.controller,"List")}execQuery(o){this.svNazTable.execQuery(o,this.svModule.getModule$(this.sQuery,this.baseModel.sess.cd_token),this)}setSearchQuery(o){this.sQuery=o.sQuery,this.execQuery(o)}getSelect(){console.log("cd-ModulemanV2::Module/ListComponent::getSelect()/this.baseModel.data.fields:",this.baseModel.data.fields);const o=this.baseModel.data.fields.filter(u=>u.fetchable).map(u=>u.name);console.log("cd-ModulemanV2::Module/ListComponent::getSelect()/fields:",o);let l=[];return o.forEach((u,m)=>{l.push(l.push(o[m]))}),l}}c.\u0275fac=function(o){return new(o||c)(t.\u0275\u0275directiveInject(r.ActivatedRoute),t.\u0275\u0275directiveInject(r.ActivatedRoute),t.\u0275\u0275directiveInject(r.Router),t.\u0275\u0275directiveInject(s.ModuleService),t.\u0275\u0275directiveInject(a.NazTableService),t.\u0275\u0275directiveInject(s.AclService),t.\u0275\u0275directiveInject(s.FormsService),t.\u0275\u0275directiveInject(a.PageService),t.\u0275\u0275directiveInject(s.NavService),t.\u0275\u0275directiveInject(s.SessService))},c.\u0275cmp=t.\u0275\u0275defineComponent({type:c,selectors:[["app-list"]],viewQuery:function(o,l){if(1&o&&t.\u0275\u0275viewQuery(a.NazTableComponent,5),2&o){let u;t.\u0275\u0275queryRefresh(u=t.\u0275\u0275loadQuery())&&(l.nazTable=u.first)}},decls:1,vars:9,consts:[[3,"baseModel","cardTitle","cardBodyId","searchInputId","tpData","filter","ddlData","editRoute","deleteRoute","searchQuery"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table",0),t.\u0275\u0275listener("searchQuery",function(m){return l.setSearchQuery(m)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("cardTitle",l.cardTitle)("cardBodyId",l.cardBodyId)("searchInputId",l.searchInputId)("tpData",l.tpData)("filter",l.filter)("ddlData",l.ddlData)("editRoute",l.editRoute)("deleteRoute",l.deleteRoute)},dependencies:[a.NazTableComponent]});var h=n(15861);class _{constructor(o,l,u,m,C,T){this.aRoute=o,this.svModule=l,this.svSess=u,this.svAcl=m,this.svNotif=C,this.svPage=T,this.formConfig={},this.backRoute="/moduleman/module/list",this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{this.svAcl.initComponent(o,this,this.svSess).then(l=>{console.log("module/EditComponent::ngOnInit()/ret:",l)})})}init(){this.baseModel=new s.BaseModel(i.c_.module,i.c_.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(i.c_.controller,"Edit"),this.baseModel.data.subTitle="only allowed fields are editable"}update(o){var l=this;return(0,h.Z)(function*(){l.svModule.updateModule$(o,l.baseModel.token).subscribe(u=>{l.svNotif.emitNotif({pushRecepients:s.DEFAULT_PUSH_RECEPIENTS,pushData:u,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:u})})})()}}_.\u0275fac=function(o){return new(o||_)(t.\u0275\u0275directiveInject(r.ActivatedRoute),t.\u0275\u0275directiveInject(s.ModuleService),t.\u0275\u0275directiveInject(s.SessService),t.\u0275\u0275directiveInject(s.AclService),t.\u0275\u0275directiveInject(s.NotificationService),t.\u0275\u0275directiveInject(a.PageService))},_.\u0275cmp=t.\u0275\u0275defineComponent({type:_,selectors:[["app-edit"]],decls:1,vars:3,consts:[[3,"baseModel","pageDescription","formConfig","backRoute","updateQuery"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table-edit",0),t.\u0275\u0275listener("updateQuery",function(m){return l.update(m)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("formConfig",l.formConfig)("backRoute",l.backRoute)},dependencies:[a.EditComponent]});class I{constructor(o,l,u,m,C,T){this.aRoute=o,this.svModule=l,this.svAcl=u,this.svNotif=m,this.svPage=C,this.svSess=T,this.formConfig={},this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{this.svAcl.initComponent(o,this,this.svSess).then(l=>{})})}init(){this.baseModel=new s.BaseModel(i.c_.module,i.c_.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(i.c_.controller,"Delete"),this.baseModel.data.subTitle="Confirm before delete"}deleteItem(o){var l=this;return(0,h.Z)(function*(){l.svModule.deleteModules$(o,l.baseModel.token).subscribe(u=>{l.svNotif.emitNotif({pushRecepients:s.DEFAULT_PUSH_RECEPIENTS,pushData:u,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:u})})})()}}I.\u0275fac=function(o){return new(o||I)(t.\u0275\u0275directiveInject(r.ActivatedRoute),t.\u0275\u0275directiveInject(s.ModuleService),t.\u0275\u0275directiveInject(s.AclService),t.\u0275\u0275directiveInject(s.NotificationService),t.\u0275\u0275directiveInject(a.PageService),t.\u0275\u0275directiveInject(s.SessService))},I.\u0275cmp=t.\u0275\u0275defineComponent({type:I,selectors:[["app-delete"]],decls:1,vars:2,consts:[[3,"baseModel","pageDescription","formConfig","deleteQuery"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table-delete",0),t.\u0275\u0275listener("deleteQuery",function(m){return l.deleteItem(m)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("formConfig",l.formConfig)},dependencies:[a.DeleteComponent]});var N=n(76679),R=n(19372),B=n(95855);class O{constructor(o,l,u,m,C,T,P,A,j,L,x,V){this.aRoute=o,this.svModule=l,this.svMenu=u,this.svMenuFront=m,this.svAcl=C,this.svForm=T,this.svNotif=P,this.fb=A,this.svModman=j,this.svPage=L,this.svPush=x,this.svSess=V,this.newModule=i.Rf,this.newMenu=N.NG,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{this.svAcl.initComponent(o,this,this.svSess).then(l=>{l&&(this.svPush.init(this),this.menuStep.token=this.baseModel.token,this.baseModel.data.step.token=this.baseModel.token)})})}ngAfterViewInit(){this.svMenuFront.loadDdls(this.baseModel,this.menuStep).then(o=>{}),this.svModman.setIconsData$(this.menuStep,"icon"),this.enableStepToMenu()}init(){this.baseModel=new s.BaseModel(i.c_.module,i.c_.controller),this.baseModel.data.fields=this.svForm.filterByFieldFor(i.Qx,s.FieldFor.createForm),this.baseModel.data.wizardModel=i.GZ,this.baseModel.data.step=this.svForm.filterStepsByController(this.baseModel.data.wizardModel,"module")[0],this.baseModel.data.form=this.fb.group(this.svForm.getFormControlConfig(i.Qx)),this.baseModel.data.step.formGroup=this.baseModel.data.form,this.menuStep=this.svForm.filterStepsByController(this.baseModel.data.wizardModel,"menu")[0],this.menuStep.formGroup=this.fb.group(this.svForm.getFormControlConfig(N.hA)),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(i.c_.controller,"Create")}setSelectedIcon(o){this.svForm.setSelectedIcon(o,this.baseModel,this.menuStep)}toggleScope(o){i.vk.selectedItem=i.vk.options.find(l=>l.optControlId===o.id),i.vk.selectedItem.selected=o.checked,this.baseModel.data.form.controls[i.vk.controllerName].setValue(o.checked),this.baseModel.data.form.controls[i.vk.controllerName].setValue("isSys"===i.vk.selectedItem.value),this.svForm.deselectGroupControls(o,i.vk,this.baseModel)}save(o){let l;switch(o.controller){case"module":l=this.svModule.createModule$(this.newModule,this.baseModel.token),this.svForm.saveForm(o,this.newModule,l,this.svPush.pushEnvelop,this.svNotif);break;case"menu":this.svMenuFront.setCdObj(o.formGroup,this.svForm,this.newMenu),l=this.svMenu.createMenu$(this.newMenu,this.baseModel.token),this.svForm.saveForm(o,this.newMenu,l,this.svPush.pushEnvelop,this.svNotif)}}finishFunction(){console.log("finishing!!")}enableStepToMenu(){const o=document.getElementById("stepToMenu");o&&(o.disabled=!1)}}O.\u0275fac=function(o){return new(o||O)(t.\u0275\u0275directiveInject(r.ActivatedRoute),t.\u0275\u0275directiveInject(s.ModuleService),t.\u0275\u0275directiveInject(s.MenuService),t.\u0275\u0275directiveInject(R.k),t.\u0275\u0275directiveInject(s.AclService),t.\u0275\u0275directiveInject(s.FormsService),t.\u0275\u0275directiveInject(s.NotificationService),t.\u0275\u0275directiveInject(M.FormBuilder),t.\u0275\u0275directiveInject(B.v),t.\u0275\u0275directiveInject(a.PageService),t.\u0275\u0275directiveInject(s.CdPushService),t.\u0275\u0275directiveInject(s.SessService))},O.\u0275cmp=t.\u0275\u0275defineComponent({type:O,selectors:[["app-create"]],decls:1,vars:3,consts:[[3,"baseModel","jAppState","wizardModel","toggleEmitter","saveEmitter","relaySelIconEmitter"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table-create",0),t.\u0275\u0275listener("toggleEmitter",function(m){return l.toggleScope(m)})("saveEmitter",function(m){return l.save(m)})("relaySelIconEmitter",function(m){return l.setSelectedIcon(m)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("jAppState",l.baseModel.jAppState)("wizardModel",l.baseModel.data.wizardModel)},dependencies:[a.CreateComponent]});var w=n(86106);const U=[{path:"list",component:c},{path:"edit",component:_},{path:"delete",component:I},{path:"create",component:O},{path:"dashboard",component:w.M}];class D{}D.\u0275fac=function(o){return new(o||D)},D.\u0275mod=t.\u0275\u0275defineNgModule({type:D}),D.\u0275inj=t.\u0275\u0275defineInjector({imports:[r.RouterModule.forChild(U),r.RouterModule]});class S{}S.\u0275fac=function(o){return new(o||S)},S.\u0275mod=t.\u0275\u0275defineNgModule({type:S}),S.\u0275inj=t.\u0275\u0275defineInjector({imports:[d.CommonModule,M.FormsModule,M.ReactiveFormsModule,v.NgbNavModule,v.NgbDropdownModule,v.NgbTooltipModule,v.NgbAccordionModule,a.NazUiModule,a.NazTableModule,a.NazCreateModule,a.NazEditModule,a.NazDeleteModule,f.Ng2SearchPipeModule,y.ArchwizardModule,F.NgToggleModule,D,e.NgSelectModule,s.BaseModule.forChild(p.N),s.CdPushModule.forChild(p.N)]})},95855:(E,g,n)=>{n.d(g,{v:()=>p});var d=n(33635),e=n(87675),f=n(23008);class p{constructor(a,r,i){this.svMenu=a,this.svNotif=r,this.svForm=i,this.ddlData={config:{suppressScrollX:!0,wheelSpeed:.3},header:{title:{lable:"Notifications",cls:"",action:null},sideLink:{lable:"View All",cls:"",action:null}},footer:{label:"View All",icon:"",action:null},data:[{label:"item 1",description:"If several languages coalesce the grammar",time:"3 min ago"},{label:"item 2",description:"It will seem like simplified English",time:"1 hr ago"},{label:"item 3",description:"If several languages coalesce the grammar",time:"4 hr ago"}]},this.pushEnvelop={pushRecepients:[],pushData:null,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:null},this.numericNumberReg1="^-?[0-9]\\d*(\\.\\d{1,2})?$",this.numericNumberReg2="/^[0-9]d*$/",this.numericNumberReg3=new RegExp(/^-?[0-9]\\d*(\\.\\d{1,2})?$/,"i"),this.numericNumberReg4=new RegExp(/^[0-9]\d*$/,"i")}setIconsData$(a,r){a.fields.map((i,t)=>{i.name===r&&(a.fields[t].ddlInfo.selData$=(0,d.of)(this.ddlData),a.fields[t].ddlInfo.selIndex="iconId",a.fields[t].ddlInfo.selValueField="iconName",a.fields[t].ddlInfo.selPlaceholder="...Choose")})}setDdl$(a){if(a.token){const r=new d.Subject;let i=[];return a.getFn$.subscribe(t=>{const c=t;console.log("ModulemanService::setDdl$()/response:",c),console.log("ModulemanService::setDdl$()/ddlCtx.step.fields:",a.step),c.app_state.success?(i=c.data.items,a.step.fields.map((h,_)=>{console.log("ModulemanService::setDdl$()/f.name1:",h.name),console.log("ModulemanService::setDdl$()/f:",h),h.name===a.controlName&&"ddlInfo"in h&&(console.log("ModulemanService::setDdl$()/f.name2:",h.name),a.step.fields[_].ddlInfo.selData$=(0,d.of)(c.data.items),a.step.fields[_].ddlInfo.selIndex=a.selIndex,a.step.fields[_].ddlInfo.selValueField=a.selValueField,a.step.fields[_].ddlInfo.selPlaceholder="...Choose")}),r.next(i)):(this.pushEnvelop.pushData=c,this.pushEnvelop.resp=c,this.svNotif.emitNotif(this.pushEnvelop),r.next(i))}),r.asObservable()}return(0,d.of)([])}}p.\u0275fac=function(a){return new(a||p)(e.\u0275\u0275inject(f.MenuService),e.\u0275\u0275inject(f.NotificationService),e.\u0275\u0275inject(f.FormsService))},p.\u0275prov=e.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac,providedIn:"root"})},92526:(E,g,n)=>{n.d(g,{N:()=>F});const d="https://cd-api.co.ke",F={appId:"",production:!1,apiEndpoint:`${d}:3001/api`,sioEndpoint:`${d}:3002`,wsEndpoint:"ws://cd-api.co.ke:3000",wsMode:"wss",pushConfig:{sio:{enabled:!0},wss:{enabled:!1},pusher:{enabled:!0,apiKey:"DtVRY9V5j41KwSxKrd8L_dRijUJh9gVcqwBH5wb96no",options:{cluster:"ap2",forceTLS:!0,userAuthentication:{endpoint:"https://cd-api.co.ke:3002/pusher/auth",transport:"ajax",params:{},headers:{},includeCredentials:!0,customHandler:null},channelAuthorization:{endpoint:"https://cd-api.co.ke:3002/pusher/auth"},authEndpoint:"https://cd-api.co.ke:3002/pusher/auth"}}},CD_PORT:3001,consumerToken:"B0B3DA99-1859-A499-90F6-1E3F69575DCD",clientContext:{entity:"ASDAP",clientAppId:2,consumerToken:"B0B3DA99-1859-A499-90F6-1E3F69575DCD"},USER_RESOURCES:"http://routed-93/user-resources",apiHost:"https://cd-api.co.ke",sioHost:"https://cd-api.co.ke",shellHost:"https://asdap.net",consumer:"",clientAppGuid:"ca0fe39f-92b2-484d-91ef-487d4fc462a2",clientAppId:2,SOCKET_IO_PORT:3002,defaultauth:"cd-auth",mfManifestPath:"/assets/mf.manifest.json",apiOptions:{headers:{"Content-Type":"application/json"}},sioOptions:{path:"/socket.io",transports:["websocket","polling"],secure:!0},firebaseConfig:{apiKey:"",authDomain:"",databaseURL:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""}}},15861:(E,g,n)=>{function d(e,v,f,y,F,p,s){try{var a=e[p](s),r=a.value}catch(i){return void f(i)}a.done?v(r):Promise.resolve(r).then(y,F)}function M(e){return function(){var v=this,f=arguments;return new Promise(function(y,F){var p=e.apply(v,f);function s(r){d(p,y,F,s,a,"next",r)}function a(r){d(p,y,F,s,a,"throw",r)}s(void 0)})}}n.d(g,{Z:()=>M})}}]);