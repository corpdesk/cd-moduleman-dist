(self.webpackChunkcd_moduleman=self.webpackChunkcd_moduleman||[]).push([[893],{91275:(R,T,l)=>{l.d(T,{AO:()=>u,CM:()=>P,GV:()=>i,IP:()=>o,J1:()=>h,aQ:()=>p,kV:()=>f,mW:()=>C,z:()=>s});var n=l(30533),e=l(54381),b=l(33635);const F=new e.FormsService,p=[{title:"ID",name:"companyId",dbName:"company_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"Guid",name:"companyGuid",dbName:"company_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"companyName",dbName:"company_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[n.Validators.minLength(3),n.Validators.maxLength(80),n.Validators.required]]},{title:"Tags",name:"searchTags",dbName:"search_tags",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.textArea,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[n.Validators.minLength(0),n.Validators.maxLength(300)]]},{title:"CompanyType",name:"companyTypeGuid",dbName:"company_type_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,b.of)([]),selValueField:"companyName",selIndex:"companyTypeGuid",selPlaceholder:"...Choose",data:null},formatt:"text",disabled:!0,savable:!0,formControlsConfig:["",[n.Validators.minLength(3),n.Validators.maxLength(42),n.Validators.required]]},{title:"Postal",name:"postalAddress",dbName:"postal_address",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[n.Validators.minLength(1),n.Validators.maxLength(20),n.Validators.required]]},{title:"Phone",name:"phone",dbName:"phone",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[n.Validators.minLength(8),n.Validators.maxLength(24),n.Validators.required]]},{title:"Email",name:"email",dbName:"email",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[n.Validators.pattern(e.EMAIL_PATTERN),n.Validators.required]]},{title:"Website",name:"website",dbName:"website",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[n.Validators.pattern(e.URL_PATTERN),n.Validators.required]]},{title:"City",name:"city",dbName:"city",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[n.Validators.minLength(3),n.Validators.maxLength(20),n.Validators.required]]},{title:"Country",name:"country",dbName:"country",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[n.Validators.minLength(3),n.Validators.maxLength(20),n.Validators.required]]},{title:"Location",name:"physicalLocation",dbName:"physical_location",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[n.Validators.minLength(1),n.Validators.maxLength(20),n.Validators.required]]},{title:"Logo",name:"logo",dbName:"logo",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[n.Validators.minLength(3),n.Validators.maxLength(20),n.Validators.required]]},{title:"Enabled",name:"companyEnabled",dbName:"company_enabled",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm}],Fn:"createCompany"},{title:"Search",name:"iconSearch",type:e.FieldType.any,controls:[],formControlsConfig:["",[]]}],o={data:{},valid:null,ctx:"Sys"},s={token:"",stepTitle:"Create Company",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"companyInfo",cardTitle:"Company Information",cardTitleDesc:"Fill all information below",module:"Moduleman",controller:"Company",formGroup:null,fields:F.filterByFieldFor(p,e.FieldFor.createForm)},i={name:"Company Wizard",steps:[s]},h={select:["companyId","companyName","companyGuid"],where:{}},C={getFn$:null,selIndex:h.select[0],selValueField:h.select[1],fetchFields:h.select,step:null,token:null,controlName:"companyId"},f={select:["companyTypeId","companyTypeName","companyTypeGuid"],where:{}},P={getFn$:null,selIndex:f.select[2],selValueField:f.select[1],fetchFields:f.select,step:null,token:null,controlName:"companyTypeGuid"},u=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/company/create",actionType:e.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/company/dashboard",actionType:e.ActionType.navigate}]},60893:(R,T,l)=>{l.r(T),l.d(T,{ConsumerModule:()=>S});var n=l(35228),y=l(30533),e=l(83781),v=l(76380),b=l(92618),I=l(59707),F=l(15006),p=l(92526),o=l(54381),s=l(5611),i=l(37011),h=l(33635);const C=new o.FormsService,f=[{title:"ID",name:"consumerId",dbName:"consumer_id",type:o.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"Guid",name:"consumerGuid",dbName:"consumer_guid",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"consumerName",dbName:"consumer_name",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[y.Validators.minLength(3),y.Validators.maxLength(20),y.Validators.required]]},{title:"Company",name:"companyId",dbName:"company_id",type:o.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay},{controlType:o.ControlType.searchDropDown,fieldFor:o.FieldFor.createForm}],ddlInfo:{selData$:(0,h.of)([]),selValueField:"companyName",selIndex:"companyId",selPlaceholder:"...Choose",data:null},formatt:"text",disabled:!0,savable:!0,formControlsConfig:["",[y.Validators.minLength(3),y.Validators.maxLength(42),y.Validators.required]]},{title:"Enabled",name:"consumerEnabled",dbName:"consumer_enabled",type:o.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.status,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Action",name:"action",type:o.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:o.ControlType.action,fieldFor:o.FieldFor.tableDisplay},{controlType:o.ControlType.action,fieldFor:o.FieldFor.createForm}],Fn:"createConsumer"},{title:"Search",name:"iconSearch",type:o.FieldType.any,controls:[],formControlsConfig:["",[]]}],P={data:{},valid:null,ctx:"Sys"},u={token:"",stepTitle:"Create Consumer",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"consumerInfo",cardTitle:"Consumer Information",cardTitleDesc:"Fill all information below",module:"Moduleman",controller:"Consumer",formGroup:null,fields:C.filterByFieldFor(f,o.FieldFor.createForm)},O={name:"Consumer Wizard",steps:[u]},U=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/consumer/create",actionType:o.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/consumer/dashboard",actionType:o.ActionType.navigate}];var a=l(87675);class j{constructor(t,r,d,c,g,D,N){this.aRoute=t,this.router=r,this.svBase=d,this.svNazTable=c,this.svAcl=g,this.svPage=D,this.svSess=N,this.dSource={fields:[],data:[]},this.cardTitle="Consumer",this.cardBodyId="consumer",this.searchInputId="inputSearchConsumer",this.filter={},this.tpData=o.DEFAULT_TPD,this.ddlData=U,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{t&&this.svAcl.initComponent(t,this,this.svSess).then(r=>{})})}init(){this.baseModel=new o.BaseModel(u.module,u.controller),this.svBase.module=u.module,this.svBase.controller=u.controller,this.baseModel.data.fields=f.filter(t=>t.fetchable||t.type===o.FieldType.action),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(u.controller,"List"),this.sQuery=this.svNazTable.initSQuery(this),this.dsEmittData=this.svNazTable.initEmittData(this)}execQuery(t){this.svNazTable.execQuery(t,this.svBase.getPaged$(this.sQuery,this.baseModel.sess.cd_token),this)}setSearchQuery(t){this.sQuery=t.sQuery,this.execQuery(t)}getSelect(){return this.baseModel.data.fields.filter(t=>t.fetchable).map(t=>t.name)}}j.\u0275fac=function(t){return new(t||j)(a.\u0275\u0275directiveInject(i.ActivatedRoute),a.\u0275\u0275directiveInject(i.Router),a.\u0275\u0275directiveInject(o.BaseService),a.\u0275\u0275directiveInject(s.NazTableService),a.\u0275\u0275directiveInject(o.AclService),a.\u0275\u0275directiveInject(s.PageService),a.\u0275\u0275directiveInject(o.SessService))},j.\u0275cmp=a.\u0275\u0275defineComponent({type:j,selectors:[["app-list"]],viewQuery:function(t,r){if(1&t&&a.\u0275\u0275viewQuery(s.NazTableComponent,5),2&t){let d;a.\u0275\u0275queryRefresh(d=a.\u0275\u0275loadQuery())&&(r.nazTable=d.first)}},decls:1,vars:7,consts:[[3,"baseModel","cardTitle","cardBodyId","searchInputId","tpData","filter","ddlData","searchQuery"]],template:function(t,r){1&t&&(a.\u0275\u0275elementStart(0,"naz-table",0),a.\u0275\u0275listener("searchQuery",function(c){return r.setSearchQuery(c)}),a.\u0275\u0275elementEnd()),2&t&&a.\u0275\u0275property("baseModel",r.baseModel)("cardTitle",r.cardTitle)("cardBodyId",r.cardBodyId)("searchInputId",r.searchInputId)("tpData",r.tpData)("filter",r.filter)("ddlData",r.ddlData)},dependencies:[s.NazTableComponent]});var V=l(15861);class A{constructor(t,r,d,c,g,D,N){this.aRoute=t,this.router=r,this.svBase=d,this.svPage=c,this.svSess=g,this.svAcl=D,this.svNotif=N,this.formConfig={},this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{this.svAcl.initComponent(t,this,this.svSess).then(r=>{})})}init(){this.baseModel=new o.BaseModel(u.module,u.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(u.controller,"Edit"),this.baseModel.data.subTitle="only allowed fields are editable"}update(t){var r=this;return(0,V.Z)(function*(){r.svBase.update$(t,r.baseModel.token).subscribe(d=>{r.svNotif.emitNotif({pushRecepients:o.DEFAULT_PUSH_RECEPIENTS,pushData:d,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:d})})})()}}A.\u0275fac=function(t){return new(t||A)(a.\u0275\u0275directiveInject(i.ActivatedRoute),a.\u0275\u0275directiveInject(i.Router),a.\u0275\u0275directiveInject(o.BaseService),a.\u0275\u0275directiveInject(s.PageService),a.\u0275\u0275directiveInject(o.SessService),a.\u0275\u0275directiveInject(o.AclService),a.\u0275\u0275directiveInject(o.NotificationService))},A.\u0275cmp=a.\u0275\u0275defineComponent({type:A,selectors:[["app-edit"]],decls:1,vars:2,consts:[[3,"baseModel","pageDescription","formConfig","updateQuery"]],template:function(t,r){1&t&&(a.\u0275\u0275elementStart(0,"naz-table-edit",0),a.\u0275\u0275listener("updateQuery",function(c){return r.update(c)}),a.\u0275\u0275elementEnd()),2&t&&a.\u0275\u0275property("baseModel",r.baseModel)("formConfig",r.formConfig)},dependencies:[s.EditComponent]});class x{constructor(t,r,d,c,g,D,N){this.aRoute=t,this.router=r,this.svBase=d,this.svPage=c,this.svAcl=g,this.svNotif=D,this.svSess=N,this.formConfig={},this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{this.svAcl.initComponent(t,this,this.svSess).then(r=>{})})}init(){this.baseModel=new o.BaseModel(u.module,u.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(u.controller,"Delete"),this.baseModel.data.subTitle="confirm before delete"}deleteItem(t){var r=this;return(0,V.Z)(function*(){r.svBase.delete$(t,r.baseModel.token).subscribe(d=>{r.svNotif.emitNotif({pushRecepients:o.DEFAULT_PUSH_RECEPIENTS,pushData:d,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:d})})})()}}x.\u0275fac=function(t){return new(t||x)(a.\u0275\u0275directiveInject(i.ActivatedRoute),a.\u0275\u0275directiveInject(i.Router),a.\u0275\u0275directiveInject(o.BaseService),a.\u0275\u0275directiveInject(s.PageService),a.\u0275\u0275directiveInject(o.AclService),a.\u0275\u0275directiveInject(o.NotificationService),a.\u0275\u0275directiveInject(o.SessService))},x.\u0275cmp=a.\u0275\u0275defineComponent({type:x,selectors:[["app-delete"]],decls:1,vars:2,consts:[[3,"baseModel","pageDescription","formConfig","deleteQuery"]],template:function(t,r){1&t&&(a.\u0275\u0275elementStart(0,"naz-table-delete",0),a.\u0275\u0275listener("deleteQuery",function(c){return r.deleteItem(c)}),a.\u0275\u0275elementEnd()),2&t&&a.\u0275\u0275property("baseModel",r.baseModel)("formConfig",r.formConfig)},dependencies:[s.DeleteComponent]});var M=l(91275),z=l(95855);class _{constructor(t,r){this.svBase=t,this.svModman=r}loadDdls(t,r){var d=this;return(0,V.Z)(function*(){M.mW.token=t.token,M.mW.step=r,M.mW.controlName="companyId",console.log("ConsumerModService::loadDdls()/companyGetQuery:",M.J1),M.mW.getFn$=d.svBase.getPaged$(M.J1,t.token,"Sys","Moduleman","Company"),yield d.svModman.setDdl$(yield M.mW).subscribe(c=>{console.log("menu/ConsumerModService::loadDdls()/ret(companies):",c),r.fields.forEach(g=>{"companyId"===g.name&&(g.ddlInfo.data=c)})})})()}}_.\u0275fac=function(t){return new(t||_)(a.\u0275\u0275inject(o.BaseService),a.\u0275\u0275inject(z.v))},_.\u0275prov=a.\u0275\u0275defineInjectable({token:_,factory:_.\u0275fac,providedIn:"root"});class L{constructor(t,r,d,c,g,D,N,$,W,k,K,H,J){this.aRoute=t,this.router=r,this.svConsumerFront=d,this.svAcl=c,this.svForm=g,this.svNotif=D,this.fb=N,this.svForms=$,this.svModman=W,this.svPage=k,this.svPush=K,this.svBase=H,this.svSess=J,this.newConsumer=P,this.wizardModel=O,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{this.svAcl.initComponent(t,this,this.svSess).then(r=>{r&&(this.svPush.init(this),this.baseModel.data.step.token=this.baseModel.token)})})}ngAfterViewInit(){this.svConsumerFront.loadDdls(this.baseModel,this.baseModel.data.step).then(t=>{console.log("consumer/CreateComponent::ngAfterViewInit()/this.baseModel.data.step:",this.baseModel.data.step)})}init(){this.baseModel=new o.BaseModel(u.module,u.controller),this.baseModel.data.fields=this.svForms.filterByFieldFor(f,o.FieldFor.createForm),this.baseModel.data.wizardModel=O,this.baseModel.data.step=this.svForm.filterStepsByController(this.baseModel.data.wizardModel,u.controller)[0],this.baseModel.data.form=this.fb.group(this.svForm.getFormControlConfig(f)),this.baseModel.data.step.formGroup=this.baseModel.data.form,this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(u.controller,"Create")}setSelectedIcon(t){this.svForm.setSelectedIcon(t,this.baseModel,this.baseModel.data.step)}save(t){let r;switch(t.controller){case"module":case"menu":break;case"consumer":r=this.svBase.create$(this.newConsumer,this.baseModel.token),this.svForm.saveForm(t,this.newConsumer,r,this.svPush.pushEnvelop,this.svNotif)}}finishFunction(){console.log("finishing!!")}}L.\u0275fac=function(t){return new(t||L)(a.\u0275\u0275directiveInject(i.ActivatedRoute),a.\u0275\u0275directiveInject(i.Router),a.\u0275\u0275directiveInject(_),a.\u0275\u0275directiveInject(o.AclService),a.\u0275\u0275directiveInject(o.FormsService),a.\u0275\u0275directiveInject(o.NotificationService),a.\u0275\u0275directiveInject(y.FormBuilder),a.\u0275\u0275directiveInject(o.FormsService),a.\u0275\u0275directiveInject(z.v),a.\u0275\u0275directiveInject(s.PageService),a.\u0275\u0275directiveInject(o.CdPushService),a.\u0275\u0275directiveInject(o.BaseService),a.\u0275\u0275directiveInject(o.SessService))},L.\u0275cmp=a.\u0275\u0275defineComponent({type:L,selectors:[["app-create"]],decls:1,vars:2,consts:[[3,"baseModel","wizardModel","saveEmitter","relaySelIconEmitter"]],template:function(t,r){1&t&&(a.\u0275\u0275elementStart(0,"naz-table-create",0),a.\u0275\u0275listener("saveEmitter",function(c){return r.save(c)})("relaySelIconEmitter",function(c){return r.setSelectedIcon(c)}),a.\u0275\u0275elementEnd()),2&t&&a.\u0275\u0275property("baseModel",r.baseModel)("wizardModel",r.wizardModel)},dependencies:[s.CreateComponent]});var G=l(86106);const Q=[{path:"list",component:j},{path:"edit",component:A},{path:"delete",component:x},{path:"create",component:L},{path:"dashboard",component:G.M}];class E{}E.\u0275fac=function(t){return new(t||E)},E.\u0275mod=a.\u0275\u0275defineNgModule({type:E}),E.\u0275inj=a.\u0275\u0275defineInjector({imports:[i.RouterModule.forChild(Q),i.RouterModule]});class S{}S.\u0275fac=function(t){return new(t||S)},S.\u0275mod=a.\u0275\u0275defineNgModule({type:S}),S.\u0275inj=a.\u0275\u0275defineInjector({imports:[n.CommonModule,y.FormsModule,y.ReactiveFormsModule,v.NgbNavModule,v.NgbDropdownModule,v.NgbTooltipModule,v.NgbAccordionModule,s.NazUiModule,s.NazTableModule,s.NazCreateModule,s.NazEditModule,s.NazDeleteModule,b.Ng2SearchPipeModule,I.ArchwizardModule,F.NgToggleModule,E,e.NgSelectModule,o.BaseModule.forChild(p.N),o.CdPushModule.forChild(p.N)]})},95855:(R,T,l)=>{l.d(T,{v:()=>p});var n=l(33635),e=l(87675),b=l(54381);class p{constructor(s,i,h){this.svMenu=s,this.svNotif=i,this.svForm=h,this.ddlData={config:{suppressScrollX:!0,wheelSpeed:.3},header:{title:{lable:"Notifications",cls:"",action:null},sideLink:{lable:"View All",cls:"",action:null}},footer:{label:"View All",icon:"",action:null},data:[{label:"item 1",description:"If several languages coalesce the grammar",time:"3 min ago"},{label:"item 2",description:"It will seem like simplified English",time:"1 hr ago"},{label:"item 3",description:"If several languages coalesce the grammar",time:"4 hr ago"}]},this.pushEnvelop={pushRecepients:[],pushData:null,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:null},this.numericNumberReg1="^-?[0-9]\\d*(\\.\\d{1,2})?$",this.numericNumberReg2="/^[0-9]d*$/",this.numericNumberReg3=new RegExp(/^-?[0-9]\\d*(\\.\\d{1,2})?$/,"i"),this.numericNumberReg4=new RegExp(/^[0-9]\d*$/,"i")}setIconsData$(s,i){s.fields.map((h,C)=>{h.name===i&&(s.fields[C].ddlInfo.selData$=(0,n.of)(this.ddlData),s.fields[C].ddlInfo.selIndex="iconId",s.fields[C].ddlInfo.selValueField="iconName",s.fields[C].ddlInfo.selPlaceholder="...Choose")})}setDdl$(s){if(s.token){const i=new n.Subject;let h=[];return s.getFn$.subscribe(C=>{const f=C;console.log("ModulemanService::setDdl$()/response:",f),f.app_state.success?(h=f.data.items,s.step.fields.map((P,u)=>{P.name===s.controlName&&(s.step.fields[u].ddlInfo.selData$=(0,n.of)(f.data.items),s.step.fields[u].ddlInfo.selIndex=s.selIndex,s.step.fields[u].ddlInfo.selValueField=s.selValueField,s.step.fields[u].ddlInfo.selPlaceholder="...Choose")}),i.next(h)):(this.pushEnvelop.pushData=f,this.pushEnvelop.resp=f,this.svNotif.emitNotif(this.pushEnvelop),i.next(h))}),i.asObservable()}return(0,n.of)([])}}p.\u0275fac=function(s){return new(s||p)(e.\u0275\u0275inject(b.MenuService),e.\u0275\u0275inject(b.NotificationService),e.\u0275\u0275inject(b.FormsService))},p.\u0275prov=e.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac,providedIn:"root"})},92526:(R,T,l)=>{l.d(T,{N:()=>F});const n="https://cd-api.co.ke",F={appId:"",production:!1,apiEndpoint:`${n}/api`,sioEndpoint:`${n}:3002`,wsEndpoint:"ws://cd-api.co.ke:3000",wsMode:"wss",pushConfig:{sio:{enabled:!0},wss:{enabled:!1},pusher:{enabled:!0,apiKey:"DtVRY9V5j41KwSxKrd8L_dRijUJh9gVcqwBH5wb96no",options:{cluster:"ap2",forceTLS:!0,userAuthentication:{endpoint:"https://cd-api.co.ke:3002/pusher/auth",transport:"ajax",params:{},headers:{},includeCredentials:!0,customHandler:null},channelAuthorization:{endpoint:"https://cd-api.co.ke:3002/pusher/auth"},authEndpoint:"https://cd-api.co.ke:3002/pusher/auth"}}},CD_PORT:3001,consumerToken:"B0B3DA99-1859-A499-90F6-1E3F69575DCD",USER_RESOURCES:"http://routed-93/user-resources",apiHost:"https://cd-api.co.ke",sioHost:"https://cd-api.co.ke",shellHost:"https://cd-shell.asdap.africa",consumer:"",clientAppGuid:"ca0fe39f-92b2-484d-91ef-487d4fc462a2",clientAppId:2,SOCKET_IO_PORT:3002,defaultauth:"cd-auth",mfManifestPath:"/assets/mf.manifest.json",apiOptions:{headers:{"Content-Type":"application/json"}},sioOptions:{path:"/socket.io",transports:["websocket","polling"],secure:!0},firebaseConfig:{apiKey:"",authDomain:"",databaseURL:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""}}},15861:(R,T,l)=>{function n(e,v,b,I,F,p,o){try{var s=e[p](o),i=s.value}catch(h){return void b(h)}s.done?v(i):Promise.resolve(i).then(I,F)}function y(e){return function(){var v=this,b=arguments;return new Promise(function(I,F){var p=e.apply(v,b);function o(i){n(p,I,F,o,s,"next",i)}function s(i){n(p,I,F,o,s,"throw",i)}o(void 0)})}}l.d(T,{Z:()=>y})}}]);