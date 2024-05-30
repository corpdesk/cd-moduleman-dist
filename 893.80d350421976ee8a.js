(self.webpackChunkcd_moduleman=self.webpackChunkcd_moduleman||[]).push([[893],{91275:(R,v,l)=>{l.d(v,{AO:()=>u,CM:()=>P,GV:()=>i,IP:()=>o,J1:()=>h,aQ:()=>p,kV:()=>f,mW:()=>C,z:()=>n});var s=l(30533),e=l(47932),b=l(33635);const g=new e.FormsService,p=[{title:"ID",name:"companyId",dbName:"company_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"Guid",name:"companyGuid",dbName:"company_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"companyName",dbName:"company_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(20),s.Validators.required]]},{title:"Tags",name:"searchTags",dbName:"search_tags",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.textArea,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(0),s.Validators.maxLength(300)]]},{title:"CompanyType",name:"companyTypeGuid",dbName:"company_type_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,b.of)([]),selValueField:"companyName",selIndex:"companyTypeGuid",selPlaceholder:"...Choose",data:null},formatt:"text",disabled:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(42),s.Validators.required]]},{title:"Postal",name:"postalAddress",dbName:"postal_address",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(1),s.Validators.maxLength(20),s.Validators.required]]},{title:"Phone",name:"phone",dbName:"phone",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(8),s.Validators.maxLength(14),s.Validators.required]]},{title:"Email",name:"email",dbName:"email",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.pattern(e.EMAIL_PATTERN),s.Validators.required]]},{title:"Website",name:"website",dbName:"website",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.pattern(e.URL_PATTERN),s.Validators.required]]},{title:"City",name:"city",dbName:"city",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(20),s.Validators.required]]},{title:"Country",name:"country",dbName:"country",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(20),s.Validators.required]]},{title:"Location",name:"physicalLocation",dbName:"physical_location",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(1),s.Validators.maxLength(20),s.Validators.required]]},{title:"Logo",name:"logo",dbName:"logo",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(20),s.Validators.required]]},{title:"Enabled",name:"companyEnabled",dbName:"company_enabled",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm}],Fn:"createCompany"},{title:"Search",name:"iconSearch",type:e.FieldType.any,controls:[],formControlsConfig:["",[]]}],o={data:{},valid:null,ctx:"Sys"},n={token:"",stepTitle:"Create Company",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"companyInfo",cardTitle:"Company Information",cardTitleDesc:"Fill all information below",module:"Moduleman",controller:"Company",formGroup:null,fields:g.filterByFieldFor(p,e.FieldFor.createForm)},i={name:"Company Wizard",steps:[n]},h={select:["companyId","companyName","companyGuid"],where:{}},C={getFn$:null,selIndex:h.select[0],selValueField:h.select[1],fetchFields:h.select,step:null,token:null,controlName:"companyId"},f={select:["companyTypeId","companyTypeName","companyTypeGuid"],where:{}},P={getFn$:null,selIndex:f.select[2],selValueField:f.select[1],fetchFields:f.select,step:null,token:null,controlName:"companyTypeGuid"},u=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/company/create",actionType:e.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/company/dashboard",actionType:e.ActionType.navigate}]},60893:(R,v,l)=>{l.r(v),l.d(v,{ConsumerModule:()=>S});var s=l(35228),y=l(30533),e=l(83781),F=l(76380),b=l(92618),I=l(59707),g=l(15006),p=l(92526),o=l(47932),n=l(99409),i=l(37011),h=l(33635);const C=new o.FormsService,f=[{title:"ID",name:"consumerId",dbName:"consumer_id",type:o.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"Guid",name:"consumerGuid",dbName:"consumer_guid",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"consumerName",dbName:"consumer_name",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[y.Validators.minLength(3),y.Validators.maxLength(20),y.Validators.required]]},{title:"Company",name:"companyId",dbName:"company_id",type:o.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay},{controlType:o.ControlType.searchDropDown,fieldFor:o.FieldFor.createForm}],ddlInfo:{selData$:(0,h.of)([]),selValueField:"companyName",selIndex:"companyId",selPlaceholder:"...Choose",data:null},formatt:"text",disabled:!0,savable:!0,formControlsConfig:["",[y.Validators.minLength(3),y.Validators.maxLength(42),y.Validators.required]]},{title:"Enabled",name:"consumerEnabled",dbName:"consumer_enabled",type:o.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.status,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Action",name:"action",type:o.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:o.ControlType.action,fieldFor:o.FieldFor.tableDisplay},{controlType:o.ControlType.action,fieldFor:o.FieldFor.createForm}],Fn:"createConsumer"},{title:"Search",name:"iconSearch",type:o.FieldType.any,controls:[],formControlsConfig:["",[]]}],P={data:{},valid:null,ctx:"Sys"},u={token:"",stepTitle:"Create Consumer",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"consumerInfo",cardTitle:"Consumer Information",cardTitleDesc:"Fill all information below",module:"Moduleman",controller:"Consumer",formGroup:null,fields:C.filterByFieldFor(f,o.FieldFor.createForm)},O={name:"Consumer Wizard",steps:[u]},G=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/consumer/create",actionType:o.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/consumer/dashboard",actionType:o.ActionType.navigate}];var a=l(87675);class j{constructor(t,r,d,c,T,D,N){this.aRoute=t,this.router=r,this.svBase=d,this.svNazTable=c,this.svAcl=T,this.svPage=D,this.svSess=N,this.dSource={fields:[],data:[]},this.cardTitle="Consumer",this.cardBodyId="consumer",this.searchInputId="inputSearchConsumer",this.filter={},this.tpData=o.DEFAULT_TPD,this.ddlData=G,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{t&&this.svAcl.initComponent(t,this,this.svSess).then(r=>{})})}init(){this.baseModel=new o.BaseModel(u.module,u.controller),this.svBase.module=u.module,this.svBase.controller=u.controller,this.baseModel.data.fields=f.filter(t=>t.fetchable||t.type===o.FieldType.action),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(u.controller,"List"),this.sQuery=this.svNazTable.initSQuery(this),this.dsEmittData=this.svNazTable.initEmittData(this)}execQuery(t){this.svNazTable.execQuery(t,this.svBase.getPaged$(this.sQuery,this.baseModel.sess.cd_token),this)}setSearchQuery(t){this.sQuery=t.sQuery,this.execQuery(t)}getSelect(){return this.baseModel.data.fields.filter(t=>t.fetchable).map(t=>t.name)}}j.\u0275fac=function(t){return new(t||j)(a.\u0275\u0275directiveInject(i.ActivatedRoute),a.\u0275\u0275directiveInject(i.Router),a.\u0275\u0275directiveInject(o.BaseService),a.\u0275\u0275directiveInject(n.NazTableService),a.\u0275\u0275directiveInject(o.AclService),a.\u0275\u0275directiveInject(n.PageService),a.\u0275\u0275directiveInject(o.SessService))},j.\u0275cmp=a.\u0275\u0275defineComponent({type:j,selectors:[["app-list"]],viewQuery:function(t,r){if(1&t&&a.\u0275\u0275viewQuery(n.NazTableComponent,5),2&t){let d;a.\u0275\u0275queryRefresh(d=a.\u0275\u0275loadQuery())&&(r.nazTable=d.first)}},decls:1,vars:7,consts:[[3,"baseModel","cardTitle","cardBodyId","searchInputId","tpData","filter","ddlData","searchQuery"]],template:function(t,r){1&t&&(a.\u0275\u0275elementStart(0,"naz-table",0),a.\u0275\u0275listener("searchQuery",function(c){return r.setSearchQuery(c)}),a.\u0275\u0275elementEnd()),2&t&&a.\u0275\u0275property("baseModel",r.baseModel)("cardTitle",r.cardTitle)("cardBodyId",r.cardBodyId)("searchInputId",r.searchInputId)("tpData",r.tpData)("filter",r.filter)("ddlData",r.ddlData)},dependencies:[n.NazTableComponent]});var V=l(15861);class x{constructor(t,r,d,c,T,D,N){this.aRoute=t,this.router=r,this.svBase=d,this.svPage=c,this.svSess=T,this.svAcl=D,this.svNotif=N,this.formConfig={},this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{this.svAcl.initComponent(t,this,this.svSess).then(r=>{})})}init(){this.baseModel=new o.BaseModel(u.module,u.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(u.controller,"Edit"),this.baseModel.data.subTitle="only allowed fields are editable"}update(t){var r=this;return(0,V.Z)(function*(){r.svBase.update$(t,r.baseModel.token).subscribe(d=>{r.svNotif.emitNotif({pushRecepients:o.DEFAULT_PUSH_RECEPIENTS,pushData:d,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:d})})})()}}x.\u0275fac=function(t){return new(t||x)(a.\u0275\u0275directiveInject(i.ActivatedRoute),a.\u0275\u0275directiveInject(i.Router),a.\u0275\u0275directiveInject(o.BaseService),a.\u0275\u0275directiveInject(n.PageService),a.\u0275\u0275directiveInject(o.SessService),a.\u0275\u0275directiveInject(o.AclService),a.\u0275\u0275directiveInject(o.NotificationService))},x.\u0275cmp=a.\u0275\u0275defineComponent({type:x,selectors:[["app-edit"]],decls:1,vars:2,consts:[[3,"baseModel","pageDescription","formConfig","updateQuery"]],template:function(t,r){1&t&&(a.\u0275\u0275elementStart(0,"naz-table-edit",0),a.\u0275\u0275listener("updateQuery",function(c){return r.update(c)}),a.\u0275\u0275elementEnd()),2&t&&a.\u0275\u0275property("baseModel",r.baseModel)("formConfig",r.formConfig)},dependencies:[n.EditComponent]});class L{constructor(t,r,d,c,T,D,N){this.aRoute=t,this.router=r,this.svBase=d,this.svPage=c,this.svAcl=T,this.svNotif=D,this.svSess=N,this.formConfig={},this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{this.svAcl.initComponent(t,this,this.svSess).then(r=>{})})}init(){this.baseModel=new o.BaseModel(u.module,u.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(u.controller,"Delete"),this.baseModel.data.subTitle="confirm before delete"}deleteItem(t){var r=this;return(0,V.Z)(function*(){r.svBase.delete$(t,r.baseModel.token).subscribe(d=>{r.svNotif.emitNotif({pushRecepients:o.DEFAULT_PUSH_RECEPIENTS,pushData:d,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:d})})})()}}L.\u0275fac=function(t){return new(t||L)(a.\u0275\u0275directiveInject(i.ActivatedRoute),a.\u0275\u0275directiveInject(i.Router),a.\u0275\u0275directiveInject(o.BaseService),a.\u0275\u0275directiveInject(n.PageService),a.\u0275\u0275directiveInject(o.AclService),a.\u0275\u0275directiveInject(o.NotificationService),a.\u0275\u0275directiveInject(o.SessService))},L.\u0275cmp=a.\u0275\u0275defineComponent({type:L,selectors:[["app-delete"]],decls:1,vars:2,consts:[[3,"baseModel","pageDescription","formConfig","deleteQuery"]],template:function(t,r){1&t&&(a.\u0275\u0275elementStart(0,"naz-table-delete",0),a.\u0275\u0275listener("deleteQuery",function(c){return r.deleteItem(c)}),a.\u0275\u0275elementEnd()),2&t&&a.\u0275\u0275property("baseModel",r.baseModel)("formConfig",r.formConfig)},dependencies:[n.DeleteComponent]});var M=l(91275),z=l(95855);class E{constructor(t,r){this.svBase=t,this.svModman=r}loadDdls(t,r){var d=this;return(0,V.Z)(function*(){M.mW.token=t.token,M.mW.step=r,M.mW.controlName="companyId",console.log("ConsumerModService::loadDdls()/companyGetQuery:",M.J1),M.mW.getFn$=d.svBase.getPaged$(M.J1,t.token,"Sys","Moduleman","Company"),yield d.svModman.setDdl$(yield M.mW).subscribe(c=>{console.log("menu/ConsumerModService::loadDdls()/ret(companies):",c),r.fields.forEach(T=>{"companyId"===T.name&&(T.ddlInfo.data=c)})})})()}}E.\u0275fac=function(t){return new(t||E)(a.\u0275\u0275inject(o.BaseService),a.\u0275\u0275inject(z.v))},E.\u0275prov=a.\u0275\u0275defineInjectable({token:E,factory:E.\u0275fac,providedIn:"root"});class A{constructor(t,r,d,c,T,D,N,$,W,k,K,H,Z){this.aRoute=t,this.router=r,this.svConsumerFront=d,this.svAcl=c,this.svForm=T,this.svNotif=D,this.fb=N,this.svForms=$,this.svModman=W,this.svPage=k,this.svPush=K,this.svBase=H,this.svSess=Z,this.newConsumer=P,this.wizardModel=O,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{this.svAcl.initComponent(t,this,this.svSess).then(r=>{r&&(this.svPush.init(this),this.baseModel.data.step.token=this.baseModel.token)})})}ngAfterViewInit(){this.svConsumerFront.loadDdls(this.baseModel,this.baseModel.data.step).then(t=>{console.log("consumer/CreateComponent::ngAfterViewInit()/this.baseModel.data.step:",this.baseModel.data.step)})}init(){this.baseModel=new o.BaseModel(u.module,u.controller),this.baseModel.data.fields=this.svForms.filterByFieldFor(f,o.FieldFor.createForm),this.baseModel.data.wizardModel=O,this.baseModel.data.step=this.svForm.filterStepsByController(this.baseModel.data.wizardModel,u.controller)[0],this.baseModel.data.form=this.fb.group(this.svForm.getFormControlConfig(f)),this.baseModel.data.step.formGroup=this.baseModel.data.form,this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(u.controller,"Create")}setSelectedIcon(t){this.svForm.setSelectedIcon(t,this.baseModel,this.baseModel.data.step)}save(t){let r;switch(t.controller){case"module":case"menu":break;case"consumer":r=this.svBase.create$(this.newConsumer,this.baseModel.token),this.svForm.saveForm(t,this.newConsumer,r,this.svPush.pushEnvelop,this.svNotif)}}finishFunction(){console.log("finishing!!")}}A.\u0275fac=function(t){return new(t||A)(a.\u0275\u0275directiveInject(i.ActivatedRoute),a.\u0275\u0275directiveInject(i.Router),a.\u0275\u0275directiveInject(E),a.\u0275\u0275directiveInject(o.AclService),a.\u0275\u0275directiveInject(o.FormsService),a.\u0275\u0275directiveInject(o.NotificationService),a.\u0275\u0275directiveInject(y.FormBuilder),a.\u0275\u0275directiveInject(o.FormsService),a.\u0275\u0275directiveInject(z.v),a.\u0275\u0275directiveInject(n.PageService),a.\u0275\u0275directiveInject(o.CdPushService),a.\u0275\u0275directiveInject(o.BaseService),a.\u0275\u0275directiveInject(o.SessService))},A.\u0275cmp=a.\u0275\u0275defineComponent({type:A,selectors:[["app-create"]],decls:1,vars:2,consts:[[3,"baseModel","wizardModel","saveEmitter","relaySelIconEmitter"]],template:function(t,r){1&t&&(a.\u0275\u0275elementStart(0,"naz-table-create",0),a.\u0275\u0275listener("saveEmitter",function(c){return r.save(c)})("relaySelIconEmitter",function(c){return r.setSelectedIcon(c)}),a.\u0275\u0275elementEnd()),2&t&&a.\u0275\u0275property("baseModel",r.baseModel)("wizardModel",r.wizardModel)},dependencies:[n.CreateComponent]});var Q=l(86106);const U=[{path:"list",component:j},{path:"edit",component:x},{path:"delete",component:L},{path:"create",component:A},{path:"dashboard",component:Q.M}];class _{}_.\u0275fac=function(t){return new(t||_)},_.\u0275mod=a.\u0275\u0275defineNgModule({type:_}),_.\u0275inj=a.\u0275\u0275defineInjector({imports:[i.RouterModule.forChild(U),i.RouterModule]});class S{}S.\u0275fac=function(t){return new(t||S)},S.\u0275mod=a.\u0275\u0275defineNgModule({type:S}),S.\u0275inj=a.\u0275\u0275defineInjector({imports:[s.CommonModule,y.FormsModule,y.ReactiveFormsModule,F.NgbNavModule,F.NgbDropdownModule,F.NgbTooltipModule,F.NgbAccordionModule,n.NazUiModule,n.NazTableModule,n.NazCreateModule,n.NazEditModule,n.NazDeleteModule,b.Ng2SearchPipeModule,I.ArchwizardModule,g.NgToggleModule,_,e.NgSelectModule,o.BaseModule.forChild(p.N),o.CdPushModule.forChild(p.N)]})},95855:(R,v,l)=>{l.d(v,{v:()=>p});var s=l(33635),e=l(87675),b=l(47932);class p{constructor(n,i,h){this.svMenu=n,this.svNotif=i,this.svForm=h,this.ddlData={config:{suppressScrollX:!0,wheelSpeed:.3},header:{title:{lable:"Notifications",cls:"",action:null},sideLink:{lable:"View All",cls:"",action:null}},footer:{label:"View All",icon:"",action:null},data:[{label:"item 1",description:"If several languages coalesce the grammar",time:"3 min ago"},{label:"item 2",description:"It will seem like simplified English",time:"1 hr ago"},{label:"item 3",description:"If several languages coalesce the grammar",time:"4 hr ago"}]},this.pushEnvelop={pushRecepients:[],pushData:null,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:null},this.numericNumberReg1="^-?[0-9]\\d*(\\.\\d{1,2})?$",this.numericNumberReg2="/^[0-9]d*$/",this.numericNumberReg3=new RegExp(/^-?[0-9]\\d*(\\.\\d{1,2})?$/,"i"),this.numericNumberReg4=new RegExp(/^[0-9]\d*$/,"i")}setIconsData$(n,i){n.fields.map((h,C)=>{h.name===i&&(n.fields[C].ddlInfo.selData$=(0,s.of)(this.ddlData),n.fields[C].ddlInfo.selIndex="iconId",n.fields[C].ddlInfo.selValueField="iconName",n.fields[C].ddlInfo.selPlaceholder="...Choose")})}setDdl$(n){if(n.token){const i=new s.Subject;let h=[];return n.getFn$.subscribe(C=>{const f=C;console.log("ModulemanService::setDdl$()/response:",f),f.app_state.success?(h=f.data.items,n.step.fields.map((P,u)=>{P.name===n.controlName&&(n.step.fields[u].ddlInfo.selData$=(0,s.of)(f.data.items),n.step.fields[u].ddlInfo.selIndex=n.selIndex,n.step.fields[u].ddlInfo.selValueField=n.selValueField,n.step.fields[u].ddlInfo.selPlaceholder="...Choose")}),i.next(h)):(this.pushEnvelop.pushData=f,this.pushEnvelop.resp=f,this.svNotif.emitNotif(this.pushEnvelop),i.next(h))}),i.asObservable()}return(0,s.of)([])}}p.\u0275fac=function(n){return new(n||p)(e.\u0275\u0275inject(b.MenuService),e.\u0275\u0275inject(b.NotificationService),e.\u0275\u0275inject(b.FormsService))},p.\u0275prov=e.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac,providedIn:"root"})},92526:(R,v,l)=>{l.d(v,{N:()=>s});const s={appId:"",production:!1,apiEndpoint:"https://cd-api.co.ke/api",sioEndpoint:"https://cd-api.co.ke:3002/sio",wsEndpoint:"ws://cd-api.co.ke:3000",CD_PORT:443,consumerToken:"B0B3DA99-1859-A499-90F6-1E3F69575DCD",USER_RESOURCES:"http://routed-93/user-resources",apiHost:"https://cd-api.co.ke",sioHost:"https://cd-api.co.ke",shellHost:"https://cd-shell.asdap.africa",consumer:"",clientAppGuid:"ca0fe39f-92b2-484d-91ef-487d4fc462a2",clientAppId:2,SOCKET_IO_PORT:443,defaultauth:"cd-auth",mfManifestPath:"/assets/mf.manifest.json",apiOptions:{headers:{"Content-Type":"application/json"}},sioOptions:{secure:!0,reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,timeout:2e4,transports:["websocket"],rejectUnauthorized:!1},firebaseConfig:{apiKey:"",authDomain:"",databaseURL:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""}}},15861:(R,v,l)=>{function s(e,F,b,I,g,p,o){try{var n=e[p](o),i=n.value}catch(h){return void b(h)}n.done?F(i):Promise.resolve(i).then(I,g)}function y(e){return function(){var F=this,b=arguments;return new Promise(function(I,g){var p=e.apply(F,b);function o(i){s(p,I,g,o,n,"next",i)}function n(i){s(p,I,g,o,n,"throw",i)}o(void 0)})}}l.d(v,{Z:()=>y})}}]);