(self.webpackChunkcd_moduleman=self.webpackChunkcd_moduleman||[]).push([[1074],{19372:(g,_,n)=>{n.d(_,{k:()=>i});var r=n(15861),y=n(65037),e=n(76679),F=n(87675),s=n(24388),d=n(95855);class i{constructor(a,p,u){this.svMenu=a,this.svModule=p,this.svModman=u}loadDdls(a,p){var u=this;return(0,r.Z)(function*(){y.tL.token=a.token,y.tL.step=p,y.tL.controlName="moduleId",y.tL.getFn$=u.svModule.getModule$(y.qh,a.token),yield u.svModman.setDdl$(yield y.tL).subscribe(c=>{console.log("menu/MenuModService::loadDdls()/ret(modules):",c),p.fields.forEach(M=>{"moduleId"===M.name&&(M.ddlInfo.data=c)})}),e.ni.token=a.token,e.ni.step=p,e.ni.controlName="menuParentId",e.ni.getFn$=u.svMenu.getMenuList$(e.i0,a.token),yield u.svModman.setDdl$(yield e.ni).subscribe(c=>{console.log("menu/MenuModService::loadDdls()/ret(menus):",c),p.fields.forEach(M=>{"menuParentId"===M.name&&(M.ddlInfo.data=c)})})})()}setCdObj(a,p,u){console.log("MenuModService::setCdObj()/fg:",a);const c=a.controls.moduleId.value;console.log("MenuModService::setCdObj()/moduleId:",c);const M=p.getDdlData("moduleId",e.hA);console.log("MenuModService::setCdObj()/modules:",M);const I=M.filter((C,S)=>C.moduleId===c?C:null);console.log("MenuModService::setCdObj()/selectedModule:",I);let E=null;I.length>0&&(E=I[0].moduleGuid),console.log("MenuModService::setCdObj()/moduleGuid:",E),E&&(u.cdObj={cdObjName:a.controls.menuName.value,cdObjTypeGuid:"f5df4494-5cc9-4463-8e8e-c5861703280e",parentModuleGuid:E,cdObjDispName:null,icon:null,showIcon:null,cdObjEnabled:null})}}i.\u0275fac=function(a){return new(a||i)(F.\u0275\u0275inject(s.MenuService),F.\u0275\u0275inject(s.ModuleService),F.\u0275\u0275inject(d.v))},i.\u0275prov=F.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"})},76679:(g,_,n)=>{n.d(_,{AO:()=>M,Cq:()=>p,NG:()=>i,hA:()=>d,i0:()=>u,kx:()=>t,ni:()=>c,pt:()=>a});var r=n(30533),e=n(24388),h=n(33635);const m=new e.FormsService,d=[{title:"ID",name:"menuId",dbName:"menu_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"number",disabled:!0,formControlsConfig:["",[]]},{title:"Guid",name:"menuGuid",dbName:"menu_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Label",name:"menuLabel",dbName:"menu_label",type:e.FieldType.string,fetchable:!0,updateable:!1,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Name",name:"menuName",dbName:"menu_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(3),r.Validators.maxLength(25),r.Validators.required]]},{title:"MenuParent",name:"menuParentId",dbName:"menu_parent_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,h.of)([]),selValueField:"menuName",selIndex:"menuId",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[r.Validators.required]]},{title:"ModuleParent",name:"moduleId",dbName:"module_id",primaryField:"menuParent",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,h.of)([]),selValueField:"moduleName",selIndex:"moduleId",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[r.Validators.required]]},{title:"Description",name:"menuDescription",dbName:"menu_description",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.textArea,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(0),r.Validators.maxLength(300)]]},{title:"Icon",name:"menuIcon",dbName:"menu_icon",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.ddlIcons,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,h.of)([]),selValueField:"iconName",selIndex:"iconId",selPlaceholder:"...choose",ddlIconId:"iconDdlIdX",searchInputId:"searchInputIdX",searchInputName:"searchInputNameX",selectedValue:"",data:null},formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(2),r.Validators.maxLength(50),r.Validators.required]]},{title:"Path",name:"path",dbName:"path",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",formControlsConfig:["",[r.Validators.minLength(3),r.Validators.maxLength(100),r.Validators.required]]},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm}],Fn:"createMenu"},{title:"Search",name:"iconSearch",type:e.FieldType.any,controls:[],formControlsConfig:["",[]]}],i={data:{},cdObj:null,valid:null,ctx:"Sys"},t=[{toReplace:"menuLabel",replaceWith:"menuName"}],a={token:"",stepTitle:"Create Menu",stepItems:{prevButtonId:"stepToModule",lastButtonId:"endSteps"},tabPaneId:"menuInfo",cardTitle:"Menu Information",cardTitleDesc:"Every module has to have at least one menu item. You can use the + button to add more items.",module:"moduleman",controller:"menu",formGroup:null,fields:m.filterByFieldFor(d,e.FieldFor.createForm)},p={name:"Menu Wizard",steps:[a]},u={select:["menuId","menuName","menuGuid"],where:{}},c={getFn$:null,selIndex:u.select[0],selValueField:u.select[1],fetchFields:u.select,step:null,token:null,controlName:"menuParentId"},M=[{menuName:"create",menuGuid:"bd9b5bda6ab",navLocation:"/moduleman/menu/create",actionType:e.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db69c1",navLocation:"/moduleman/menu/dashboard",actionType:e.ActionType.navigate}]},26828:(g,_,n)=>{n.r(_),n.d(_,{MenuModule:()=>O});var r=n(35228),y=n(30533),e=n(76380),F=n(92618),h=n(92526),s=n(24388),m=n(63834),d=n(37011),i=n(76679),t=n(87675);class a{constructor(o,l,f,v,T,D,P,A){this.aRoute=o,this.router=l,this.svMenu=f,this.svNazTable=v,this.svAcl=T,this.svForms=D,this.svPage=P,this.svSess=A,this.dSource={fields:[],data:[]},this.cardTitle="Menu",this.cardBodyId="cdMenu",this.searchInputId="inputSearchMenu",this.editRoute="/moduleman/menu/edit",this.deleteRoute="/moduleman/menu/delete",this.createRoute="/moduleman/menu/create",this.filter={},this.tpData=s.DEFAULT_TPD,this.ddlData=i.AO,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{o&&this.svAcl.initComponent(o,this,this.svSess).then(l=>{})})}init(){this.baseModel=new s.BaseModel(i.pt.module,i.pt.controller),this.baseModel.data.fields=i.hA.filter(o=>o.fetchable||o.type===s.FieldType.action),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs("Menu","List"),this.sQuery=this.svNazTable.initSQuery(this),this.dsEmittData=this.svNazTable.initEmittData(this)}execQuery(o){this.svNazTable.execQuery(o,this.svMenu.getMenuList$(this.sQuery,this.baseModel.sess.cd_token),this)}setSearchQuery(o){this.sQuery=o.sQuery,this.execQuery(o)}getSelect(){return this.baseModel.data.fields.filter(o=>o.fetchable).map(o=>o.name)}}a.\u0275fac=function(o){return new(o||a)(t.\u0275\u0275directiveInject(d.ActivatedRoute),t.\u0275\u0275directiveInject(d.Router),t.\u0275\u0275directiveInject(s.MenuService),t.\u0275\u0275directiveInject(m.NazTableService),t.\u0275\u0275directiveInject(s.AclService),t.\u0275\u0275directiveInject(s.FormsService),t.\u0275\u0275directiveInject(m.PageService),t.\u0275\u0275directiveInject(s.SessService))},a.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["app-list"]],viewQuery:function(o,l){if(1&o&&t.\u0275\u0275viewQuery(m.NazTableComponent,5),2&o){let f;t.\u0275\u0275queryRefresh(f=t.\u0275\u0275loadQuery())&&(l.nazTable=f.first)}},decls:1,vars:9,consts:[[3,"baseModel","cardTitle","searchInputId","cardBodyId","tpData","filter","ddlData","editRoute","deleteRoute","searchQuery"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table",0),t.\u0275\u0275listener("searchQuery",function(v){return l.setSearchQuery(v)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("cardTitle",l.cardTitle)("searchInputId",l.searchInputId)("cardBodyId",l.cardBodyId)("tpData",l.tpData)("filter",l.filter)("ddlData",l.ddlData)("editRoute",l.editRoute)("deleteRoute",l.deleteRoute)},dependencies:[m.NazTableComponent]});var p=n(15861);class u{constructor(o,l,f,v,T,D){this.aRoute=o,this.router=l,this.svMenu=f,this.svSess=v,this.svAcl=T,this.svNotif=D,this.fieldsAlias=i.kx,this.formConfig={},this.backRoute="/moduleman/menu/list",this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{this.svAcl.initComponent(o,this,this.svSess).then(l=>{})})}init(){this.baseModel=new s.BaseModel(i.pt.module,i.pt.controller),this.baseModel.breadCrumbItems=[{label:"Menu"},{label:"Edit",active:!0}],this.baseModel.data.subTitle="only allowed fields are editable"}update(o){var l=this;return(0,p.Z)(function*(){l.svMenu.updateMenu$(o,l.baseModel.token).subscribe(f=>{l.svNotif.emitNotif({pushRecepients:s.DEFAULT_PUSH_RECEPIENTS,pushData:f,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:f})})})()}}u.\u0275fac=function(o){return new(o||u)(t.\u0275\u0275directiveInject(d.ActivatedRoute),t.\u0275\u0275directiveInject(d.Router),t.\u0275\u0275directiveInject(s.MenuService),t.\u0275\u0275directiveInject(s.SessService),t.\u0275\u0275directiveInject(s.AclService),t.\u0275\u0275directiveInject(s.NotificationService))},u.\u0275cmp=t.\u0275\u0275defineComponent({type:u,selectors:[["app-edit"]],decls:1,vars:4,consts:[[3,"baseModel","pageDescription","formConfig","fieldsAlias","backRoute","updateQuery"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table-edit",0),t.\u0275\u0275listener("updateQuery",function(v){return l.update(v)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("formConfig",l.formConfig)("fieldsAlias",l.fieldsAlias)("backRoute",l.backRoute)},dependencies:[m.EditComponent]});class c{constructor(o,l,f,v,T,D){this.aRoute=o,this.router=l,this.svMenu=f,this.svAcl=v,this.svNotif=T,this.svSess=D,this.backRoute="/moduleman/menu/list",this.formConfig={},this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{this.svAcl.initComponent(o,this,this.svSess).then(l=>{})})}init(){this.baseModel=new s.BaseModel(i.pt.module,i.pt.controller),this.baseModel.breadCrumbItems=[{label:"Menu"},{label:"Delete",active:!0}],this.baseModel.data.subTitle="confirm before delete"}deleteItem(o){var l=this;return(0,p.Z)(function*(){l.svMenu.deleteMenu$(o,l.baseModel.token).subscribe(f=>{l.svNotif.emitNotif({pushRecepients:s.DEFAULT_PUSH_RECEPIENTS,pushData:f,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:f})})})()}}c.\u0275fac=function(o){return new(o||c)(t.\u0275\u0275directiveInject(d.ActivatedRoute),t.\u0275\u0275directiveInject(d.Router),t.\u0275\u0275directiveInject(s.MenuService),t.\u0275\u0275directiveInject(s.AclService),t.\u0275\u0275directiveInject(s.NotificationService),t.\u0275\u0275directiveInject(s.SessService))},c.\u0275cmp=t.\u0275\u0275defineComponent({type:c,selectors:[["app-delete"]],decls:1,vars:2,consts:[[3,"baseModel","pageDescription","formConfig","deleteQuery"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table-delete",0),t.\u0275\u0275listener("deleteQuery",function(v){return l.deleteItem(v)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("formConfig",l.formConfig)},dependencies:[m.DeleteComponent]});var M=n(65037),I=n(19372),E=n(95855);class C{constructor(o,l,f,v,T,D,P,A,j,L,B,w,x,U){this.aRoute=o,this.router=l,this.svModule=f,this.svMenu=v,this.svMenuFront=T,this.svAcl=D,this.svForm=P,this.svNotif=A,this.fb=j,this.svForms=L,this.svModman=B,this.svPage=w,this.svPush=x,this.svSess=U,this.newMenu=i.NG,this.wizardModel=i.Cq,this.newModule=M.Rf,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{this.svAcl.initComponent(o,this,this.svSess).then(l=>{l&&(this.svPush.init(this),this.baseModel.data.step.token=this.baseModel.token)})})}ngAfterViewInit(){this.svMenuFront.loadDdls(this.baseModel,this.baseModel.data.step).then(o=>{console.log("menu/CreateComponent::ngAfterViewInit()/this.baseModel.controllerRoutes:",this.baseModel.controllerRoutes)}),this.svModman.setIconsData$(this.baseModel.data.step,"icon")}init(){this.baseModel=new s.BaseModel(i.pt.module,i.pt.controller),this.baseModel.data.fields=this.svForms.filterByFieldFor(i.hA,s.FieldFor.createForm),this.baseModel.data.wizardModel=i.Cq,this.baseModel.data.step=this.svForms.filterStepsByController(this.baseModel.data.wizardModel,"menu")[0],this.baseModel.data.form=this.fb.group(this.svForm.getFormControlConfig(i.hA)),this.baseModel.data.step.formGroup=this.baseModel.data.form,this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs("Menu","Create")}setSelectedIcon(o){this.svForm.setSelectedIcon(o,this.baseModel,this.baseModel.data.step)}save(o){let l;switch(o.controller){case"module":break;case"menu":this.svMenuFront.setCdObj(o.formGroup,this.svForm,this.newMenu),l=this.svMenu.createMenu$(this.newMenu,this.baseModel.token),this.svForm.saveForm(o,this.newMenu,l,this.svPush.pushEnvelop,this.svNotif)}}finishFunction(){console.log("finishing!!")}}C.\u0275fac=function(o){return new(o||C)(t.\u0275\u0275directiveInject(d.ActivatedRoute),t.\u0275\u0275directiveInject(d.Router),t.\u0275\u0275directiveInject(s.ModuleService),t.\u0275\u0275directiveInject(s.MenuService),t.\u0275\u0275directiveInject(I.k),t.\u0275\u0275directiveInject(s.AclService),t.\u0275\u0275directiveInject(s.FormsService),t.\u0275\u0275directiveInject(s.NotificationService),t.\u0275\u0275directiveInject(y.FormBuilder),t.\u0275\u0275directiveInject(s.FormsService),t.\u0275\u0275directiveInject(E.v),t.\u0275\u0275directiveInject(m.PageService),t.\u0275\u0275directiveInject(s.CdPushService),t.\u0275\u0275directiveInject(s.SessService))},C.\u0275cmp=t.\u0275\u0275defineComponent({type:C,selectors:[["app-create"]],decls:1,vars:2,consts:[[3,"baseModel","wizardModel","saveEmitter","relaySelIconEmitter"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table-create",0),t.\u0275\u0275listener("saveEmitter",function(v){return l.save(v)})("relaySelIconEmitter",function(v){return l.setSelectedIcon(v)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("wizardModel",l.wizardModel)},dependencies:[m.CreateComponent]});class S{constructor(){}ngOnInit(){}}S.\u0275fac=function(o){return new(o||S)},S.\u0275cmp=t.\u0275\u0275defineComponent({type:S,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"p"),t.\u0275\u0275text(1,"dashboard works!"),t.\u0275\u0275elementEnd())}});const R=[{path:"list",component:a},{path:"edit",component:u},{path:"delete",component:c},{path:"create",component:C},{path:"dashboard",component:S}];class N{}N.\u0275fac=function(o){return new(o||N)},N.\u0275mod=t.\u0275\u0275defineNgModule({type:N}),N.\u0275inj=t.\u0275\u0275defineInjector({imports:[d.RouterModule.forChild(R),d.RouterModule]});class O{}O.\u0275fac=function(o){return new(o||O)},O.\u0275mod=t.\u0275\u0275defineNgModule({type:O}),O.\u0275inj=t.\u0275\u0275defineInjector({imports:[r.CommonModule,N,y.FormsModule,y.ReactiveFormsModule,e.NgbNavModule,e.NgbDropdownModule,e.NgbTooltipModule,e.NgbAccordionModule,F.Ng2SearchPipeModule,m.NazUiModule,m.NazTableModule,m.NazCreateModule,m.NazEditModule,m.NazDeleteModule,s.BaseModule.forChild(h.N),s.CdPushModule.forChild(h.N)]})},65037:(g,_,n)=>{n.d(_,{AO:()=>u,GZ:()=>p,Qx:()=>m,Rf:()=>i,c_:()=>a,qh:()=>c,tL:()=>M,vk:()=>d});var r=n(30533),e=n(24388),h=n(76679);const s=new e.FormsService,m=[{title:"ID",name:"moduleId",dbName:"module_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"number",disabled:!0},{title:"Guid",name:"moduleGuid",dbName:"module_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"moduleName",dbName:"module_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(4),r.Validators.maxLength(20),r.Validators.required]]},{title:"Description",name:"moduleDescription",dbName:"module_description",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.textArea,fieldFor:e.FieldFor.createForm}],formatt:"textArea",savable:!0,formControlsConfig:["",[r.Validators.minLength(0),r.Validators.maxLength(300)]]},{title:"Enabled",name:"moduleEnabled",dbName:"module_enabled",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Sys",name:"isSysModule",dbName:"is_sys_module",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[r.Validators.required]]},{title:"System Module",name:"isSys",controls:[{controlType:e.ControlType.toggleSwitch,fieldFor:e.FieldFor.createForm}],primaryField:"isSysModule",formControlsConfig:["",[]]},{title:"App Module",name:"isApp",controls:[{controlType:e.ControlType.toggleSwitch,fieldFor:e.FieldFor.createForm}],primaryField:"isSysModule",formControlsConfig:["",[]]},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay}]}],d={controllerName:"isSysModule",selectedItem:{index:0,optControlId:"",value:"",selected:!1},controlTypes:e.ControlType.toggleSwitch,options:[{index:0,optControlId:"isSys",value:"isSys",selected:!0},{index:1,optControlId:"isApp",value:"isApp",selected:!1}]},i={valid:null,data:{},ctx:"Sys"},a={token:"",stepTitle:"Create Module",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"moduleInfo",cardTitle:"Module Information",cardTitleDesc:"Fill all information below",module:"moduleman",controller:"module",formGroup:null,fields:s.filterByFieldFor(m,e.FieldFor.createForm)},p={name:"Module Wizard",steps:[a,h.pt]},u=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/module/create",actionType:e.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/module/dashboard",actionType:e.ActionType.navigate}],c={select:["moduleId","moduleName","moduleGuid"],where:{}},M={getFn$:null,selIndex:c.select[0],selValueField:c.select[1],fetchFields:c.select,step:null,token:null,controlName:"moduleId"}},95855:(g,_,n)=>{n.d(_,{v:()=>d});var r=n(33635),e=n(87675),h=n(24388);class d{constructor(t,a,p){this.svMenu=t,this.svNotif=a,this.svForm=p,this.ddlData={config:{suppressScrollX:!0,wheelSpeed:.3},header:{title:{lable:"Notifications",cls:"",action:null},sideLink:{lable:"View All",cls:"",action:null}},footer:{label:"View All",icon:"",action:null},data:[{label:"item 1",description:"If several languages coalesce the grammar",time:"3 min ago"},{label:"item 2",description:"It will seem like simplified English",time:"1 hr ago"},{label:"item 3",description:"If several languages coalesce the grammar",time:"4 hr ago"}]},this.pushEnvelop={pushRecepients:[],pushData:null,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:null},this.numericNumberReg1="^-?[0-9]\\d*(\\.\\d{1,2})?$",this.numericNumberReg2="/^[0-9]d*$/",this.numericNumberReg3=new RegExp(/^-?[0-9]\\d*(\\.\\d{1,2})?$/,"i"),this.numericNumberReg4=new RegExp(/^[0-9]\d*$/,"i")}setIconsData$(t,a){t.fields.map((p,u)=>{p.name===a&&(t.fields[u].ddlInfo.selData$=(0,r.of)(this.ddlData),t.fields[u].ddlInfo.selIndex="iconId",t.fields[u].ddlInfo.selValueField="iconName",t.fields[u].ddlInfo.selPlaceholder="...Choose")})}setDdl$(t){if(t.token){const a=new r.Subject;let p=[];return t.getFn$.subscribe(u=>{const c=u;console.log("ModulemanService::setDdl$()/response:",c),console.log("ModulemanService::setDdl$()/ddlCtx.step.fields:",t.step),c.app_state.success?(p=c.data.items,t.step.fields.map((M,I)=>{console.log("ModulemanService::setDdl$()/f.name1:",M.name),console.log("ModulemanService::setDdl$()/ddlCtx.controlName:",t.controlName),console.log("ModulemanService::setDdl$()/f:",M),M.name===t.controlName&&"ddlInfo"in M&&(console.log("ModulemanService::setDdl$()/f.name2:",M.name),t.step.fields[I].ddlInfo.selData$=(0,r.of)(c.data.items),t.step.fields[I].ddlInfo.selIndex=t.selIndex,t.step.fields[I].ddlInfo.selValueField=t.selValueField,t.step.fields[I].ddlInfo.selPlaceholder="...Choose")}),a.next(p)):(this.pushEnvelop.pushData=c,this.pushEnvelop.resp=c,this.svNotif.emitNotif(this.pushEnvelop),a.next(p))}),a.asObservable()}return(0,r.of)([])}}d.\u0275fac=function(t){return new(t||d)(e.\u0275\u0275inject(h.MenuService),e.\u0275\u0275inject(h.NotificationService),e.\u0275\u0275inject(h.FormsService))},d.\u0275prov=e.\u0275\u0275defineInjectable({token:d,factory:d.\u0275fac,providedIn:"root"})},92526:(g,_,n)=>{n.d(_,{N:()=>m});const r="https://cd-api.co.ke",m={appId:"",production:!1,apiEndpoint:`${r}:3001/api`,sioEndpoint:`${r}:3002`,wsEndpoint:"ws://cd-api.co.ke:3000",wsMode:"wss",pushConfig:{sio:{enabled:!0},wss:{enabled:!1},pusher:{enabled:!0,apiKey:"DtVRY9V5j41KwSxKrd8L_dRijUJh9gVcqwBH5wb96no",options:{cluster:"ap2",forceTLS:!0,userAuthentication:{endpoint:"https://cd-api.co.ke:3002/pusher/auth",transport:"ajax",params:{},headers:{},includeCredentials:!0,customHandler:null},channelAuthorization:{endpoint:"https://cd-api.co.ke:3002/pusher/auth"},authEndpoint:"https://cd-api.co.ke:3002/pusher/auth"}}},CD_PORT:3001,consumerToken:"B0B3DA99-1859-A499-90F6-1E3F69575DCD",clientContext:{entity:"ASDAP",clientAppId:2,consumerToken:"B0B3DA99-1859-A499-90F6-1E3F69575DCD"},USER_RESOURCES:"http://routed-93/user-resources",apiHost:"https://cd-api.co.ke",sioHost:"https://cd-api.co.ke",shellHost:"https://asdap.net",consumer:"",clientAppGuid:"ca0fe39f-92b2-484d-91ef-487d4fc462a2",clientAppId:2,SOCKET_IO_PORT:3002,defaultauth:"cd-auth",mfManifestPath:"/assets/mf.manifest.json",apiOptions:{headers:{"Content-Type":"application/json"}},sioOptions:{path:"/socket.io",transports:["websocket","polling"],secure:!0},firebaseConfig:{apiKey:"",authDomain:"",databaseURL:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""}}},15861:(g,_,n)=>{function r(e,F,h,s,m,d,i){try{var t=e[d](i),a=t.value}catch(p){return void h(p)}t.done?F(a):Promise.resolve(a).then(s,m)}function y(e){return function(){var F=this,h=arguments;return new Promise(function(s,m){var d=e.apply(F,h);function i(a){r(d,s,m,i,t,"next",a)}function t(a){r(d,s,m,i,t,"throw",a)}i(void 0)})}}n.d(_,{Z:()=>y})}}]);