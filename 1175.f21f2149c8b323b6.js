(self.webpackChunkcd_moduleman=self.webpackChunkcd_moduleman||[]).push([[1175],{91275:(P,C,s)=>{s.d(C,{AO:()=>y,CM:()=>F,GV:()=>d,IP:()=>l,J1:()=>i,aQ:()=>p,kV:()=>m,mW:()=>o,z:()=>n});var a=s(30533),e=s(24388),h=s(33635);const b=new e.FormsService,p=[{title:"ID",name:"companyId",dbName:"company_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"Guid",name:"companyGuid",dbName:"company_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"companyName",dbName:"company_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(3),a.Validators.maxLength(80),a.Validators.required]]},{title:"Tags",name:"searchTags",dbName:"search_tags",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.textArea,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(0),a.Validators.maxLength(300)]]},{title:"CompanyType",name:"companyTypeGuid",dbName:"company_type_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,h.of)([]),selValueField:"companyName",selIndex:"companyTypeGuid",selPlaceholder:"...Choose",data:null},formatt:"text",disabled:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(3),a.Validators.maxLength(42),a.Validators.required]]},{title:"Postal",name:"postalAddress",dbName:"postal_address",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(1),a.Validators.maxLength(20),a.Validators.required]]},{title:"Phone",name:"phone",dbName:"phone",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(8),a.Validators.maxLength(80),a.Validators.required]]},{title:"Mobile",name:"mobile",dbName:"mobile",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(8),a.Validators.maxLength(24),a.Validators.required]]},{title:"Email",name:"email",dbName:"email",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.pattern(e.EMAIL_PATTERN),a.Validators.required]]},{title:"Website",name:"website",dbName:"website",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.pattern(e.URL_PATTERN),a.Validators.required]]},{title:"City",name:"city",dbName:"city",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(3),a.Validators.maxLength(20),a.Validators.required]]},{title:"Country",name:"country",dbName:"country",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(3),a.Validators.maxLength(20),a.Validators.required]]},{title:"Location",name:"physicalLocation",dbName:"physical_location",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(1),a.Validators.maxLength(80),a.Validators.required]]},{title:"Logo",name:"logo",dbName:"logo",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(3),a.Validators.maxLength(20),a.Validators.required]]},{title:"Enabled",name:"companyEnabled",dbName:"company_enabled",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm}],Fn:"createCompany"},{title:"Search",name:"iconSearch",type:e.FieldType.any,controls:[],formControlsConfig:["",[]]}],l={data:{},valid:null,ctx:"Sys"},n={token:"",stepTitle:"Create Company",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"companyInfo",cardTitle:"Company Information",cardTitleDesc:"Fill all information below",module:"Moduleman",controller:"Company",formGroup:null,fields:b.filterByFieldFor(p,e.FieldFor.createForm)},d={name:"Company Wizard",steps:[n]},i={select:["companyId","companyName","companyGuid"],where:{}},o={getFn$:null,selIndex:i.select[0],selValueField:i.select[1],fetchFields:i.select,step:null,token:null,controlName:"companyId"},m={select:["companyTypeId","companyTypeName","companyTypeGuid"],where:{}},F={getFn$:null,selIndex:m.select[2],selValueField:m.select[1],fetchFields:m.select,step:null,token:null,controlName:"companyTypeGuid"},y=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/company/create",actionType:e.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/company/dashboard",actionType:e.ActionType.navigate}]},41120:(P,C,s)=>{s.d(C,{AO:()=>y,H0:()=>i,HX:()=>l,YM:()=>d,aN:()=>p,g6:()=>o,hR:()=>n});var a=s(30533),e=s(24388),h=s(33635);const b=new e.FormsService,p=[{title:"ID",name:"consumerId",dbName:"consumer_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"Guid",name:"consumerGuid",dbName:"consumer_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"consumerName",dbName:"consumer_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(3),a.Validators.maxLength(60),a.Validators.required]]},{title:"Company",name:"companyId",dbName:"company_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,h.of)([]),selValueField:"companyName",selIndex:"companyId",selPlaceholder:"...Choose",data:null},formatt:"text",disabled:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(3),a.Validators.maxLength(42),a.Validators.required]]},{title:"Enabled",name:"consumerEnabled",dbName:"consumer_enabled",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm}],Fn:"createConsumer"},{title:"Search",name:"iconSearch",type:e.FieldType.any,controls:[],formControlsConfig:["",[]]}],l={data:{},valid:null,ctx:"Sys"},n={token:"",stepTitle:"Create Consumer",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"consumerInfo",cardTitle:"Consumer Information",cardTitleDesc:"Fill all information below",module:"Moduleman",controller:"Consumer",formGroup:null,fields:b.filterByFieldFor(p,e.FieldFor.createForm)},d={name:"Consumer Wizard",steps:[n]},i={select:["consumerId","consumerName","consumerGuid"],where:{}},o={getFn$:null,selIndex:i.select[0],selValueField:i.select[1],fetchFields:i.select,step:null,token:null,controlName:"consumerId"},y=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/consumer/create",actionType:e.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/consumer/dashboard",actionType:e.ActionType.navigate}]},71175:(P,C,s)=>{s.r(C),s.d(C,{ConsumerModule:()=>S});var a=s(35228),T=s(30533),e=s(83781),v=s(76380),h=s(92618),g=s(59707),b=s(15006),p=s(92526),l=s(24388),n=s(63834),d=s(37011),i=s(41120),o=s(87675);class m{constructor(t,r,c,u,M,_,D){this.aRoute=t,this.router=r,this.svBase=c,this.svNazTable=u,this.svAcl=M,this.svPage=_,this.svSess=D,this.dSource={fields:[],data:[]},this.cardTitle="Consumer",this.cardBodyId="consumer",this.searchInputId="inputSearchConsumer",this.filter={},this.tpData=l.DEFAULT_TPD,this.ddlData=i.AO,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{t&&this.svAcl.initComponent(t,this,this.svSess).then(r=>{})})}init(){this.baseModel=new l.BaseModel(i.hR.module,i.hR.controller),this.svBase.module=i.hR.module,this.svBase.controller=i.hR.controller,this.baseModel.data.fields=i.aN.filter(t=>t.fetchable||t.type===l.FieldType.action),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(i.hR.controller,"List"),this.sQuery=this.svNazTable.initSQuery(this),this.dsEmittData=this.svNazTable.initEmittData(this)}execQuery(t){this.svNazTable.execQuery(t,this.svBase.getPaged$(this.sQuery,this.baseModel.sess.cd_token),this)}setSearchQuery(t){this.sQuery=t.sQuery,this.execQuery(t)}getSelect(){return this.baseModel.data.fields.filter(t=>t.fetchable).map(t=>t.name)}}m.\u0275fac=function(t){return new(t||m)(o.\u0275\u0275directiveInject(d.ActivatedRoute),o.\u0275\u0275directiveInject(d.Router),o.\u0275\u0275directiveInject(l.BaseService),o.\u0275\u0275directiveInject(n.NazTableService),o.\u0275\u0275directiveInject(l.AclService),o.\u0275\u0275directiveInject(n.PageService),o.\u0275\u0275directiveInject(l.SessService))},m.\u0275cmp=o.\u0275\u0275defineComponent({type:m,selectors:[["app-list"]],viewQuery:function(t,r){if(1&t&&o.\u0275\u0275viewQuery(n.NazTableComponent,5),2&t){let c;o.\u0275\u0275queryRefresh(c=o.\u0275\u0275loadQuery())&&(r.nazTable=c.first)}},decls:1,vars:7,consts:[[3,"baseModel","cardTitle","cardBodyId","searchInputId","tpData","filter","ddlData","searchQuery"]],template:function(t,r){1&t&&(o.\u0275\u0275elementStart(0,"naz-table",0),o.\u0275\u0275listener("searchQuery",function(u){return r.setSearchQuery(u)}),o.\u0275\u0275elementEnd()),2&t&&o.\u0275\u0275property("baseModel",r.baseModel)("cardTitle",r.cardTitle)("cardBodyId",r.cardBodyId)("searchInputId",r.searchInputId)("tpData",r.tpData)("filter",r.filter)("ddlData",r.ddlData)},dependencies:[n.NazTableComponent]});var F=s(15861);class y{constructor(t,r,c,u,M,_,D){this.aRoute=t,this.router=r,this.svBase=c,this.svPage=u,this.svSess=M,this.svAcl=_,this.svNotif=D,this.formConfig={},this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{this.svAcl.initComponent(t,this,this.svSess).then(r=>{})})}init(){this.baseModel=new l.BaseModel(i.hR.module,i.hR.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(i.hR.controller,"Edit"),this.baseModel.data.subTitle="only allowed fields are editable"}update(t){var r=this;return(0,F.Z)(function*(){r.svBase.update$(t,r.baseModel.token).subscribe(c=>{r.svNotif.emitNotif({pushRecepients:l.DEFAULT_PUSH_RECEPIENTS,pushData:c,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:c})})})()}}y.\u0275fac=function(t){return new(t||y)(o.\u0275\u0275directiveInject(d.ActivatedRoute),o.\u0275\u0275directiveInject(d.Router),o.\u0275\u0275directiveInject(l.BaseService),o.\u0275\u0275directiveInject(n.PageService),o.\u0275\u0275directiveInject(l.SessService),o.\u0275\u0275directiveInject(l.AclService),o.\u0275\u0275directiveInject(l.NotificationService))},y.\u0275cmp=o.\u0275\u0275defineComponent({type:y,selectors:[["app-edit"]],decls:1,vars:2,consts:[[3,"baseModel","pageDescription","formConfig","updateQuery"]],template:function(t,r){1&t&&(o.\u0275\u0275elementStart(0,"naz-table-edit",0),o.\u0275\u0275listener("updateQuery",function(u){return r.update(u)}),o.\u0275\u0275elementEnd()),2&t&&o.\u0275\u0275property("baseModel",r.baseModel)("formConfig",r.formConfig)},dependencies:[n.EditComponent]});class R{constructor(t,r,c,u,M,_,D){this.aRoute=t,this.router=r,this.svBase=c,this.svPage=u,this.svAcl=M,this.svNotif=_,this.svSess=D,this.formConfig={},this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{this.svAcl.initComponent(t,this,this.svSess).then(r=>{})})}init(){this.baseModel=new l.BaseModel(i.hR.module,i.hR.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(i.hR.controller,"Delete"),this.baseModel.data.subTitle="confirm before delete"}deleteItem(t){var r=this;return(0,F.Z)(function*(){r.svBase.delete$(t,r.baseModel.token).subscribe(c=>{r.svNotif.emitNotif({pushRecepients:l.DEFAULT_PUSH_RECEPIENTS,pushData:c,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:c})})})()}}R.\u0275fac=function(t){return new(t||R)(o.\u0275\u0275directiveInject(d.ActivatedRoute),o.\u0275\u0275directiveInject(d.Router),o.\u0275\u0275directiveInject(l.BaseService),o.\u0275\u0275directiveInject(n.PageService),o.\u0275\u0275directiveInject(l.AclService),o.\u0275\u0275directiveInject(l.NotificationService),o.\u0275\u0275directiveInject(l.SessService))},R.\u0275cmp=o.\u0275\u0275defineComponent({type:R,selectors:[["app-delete"]],decls:1,vars:2,consts:[[3,"baseModel","pageDescription","formConfig","deleteQuery"]],template:function(t,r){1&t&&(o.\u0275\u0275elementStart(0,"naz-table-delete",0),o.\u0275\u0275listener("deleteQuery",function(u){return r.deleteItem(u)}),o.\u0275\u0275elementEnd()),2&t&&o.\u0275\u0275property("baseModel",r.baseModel)("formConfig",r.formConfig)},dependencies:[n.DeleteComponent]});var I=s(91275),L=s(95855);class E{constructor(t,r){this.svBase=t,this.svModman=r}loadDdls(t,r){var c=this;return(0,F.Z)(function*(){I.mW.token=t.token,I.mW.step=r,I.mW.controlName="companyId",console.log("ConsumerModService::loadDdls()/companyGetQuery:",I.J1),I.mW.getFn$=c.svBase.getPaged$(I.J1,t.token,"Sys","Moduleman","Company"),yield c.svModman.setDdl$(yield I.mW).subscribe(u=>{console.log("consumer/ConsumerModService::loadDdls()/ret(companies):",u),r.fields.forEach(M=>{"companyId"===M.name&&(M.ddlInfo.data=u)})})})()}}E.\u0275fac=function(t){return new(t||E)(o.\u0275\u0275inject(l.BaseService),o.\u0275\u0275inject(L.v))},E.\u0275prov=o.\u0275\u0275defineInjectable({token:E,factory:E.\u0275fac,providedIn:"root"});class A{constructor(t,r,c,u,M,_,D,O,B,V,w,U,z,G){this.aRoute=t,this.router=r,this.svServer=c,this.svConsumerFront=u,this.svAcl=M,this.svForm=_,this.svNotif=D,this.fb=O,this.svForms=B,this.svModman=V,this.svPage=w,this.svPush=U,this.svBase=z,this.svSess=G,this.newConsumer=i.HX,this.wizardModel=i.YM,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{this.svAcl.initComponent(t,this,this.svSess).then(r=>{r&&(this.svPush.init(this),this.baseModel.data.step.token=this.baseModel.token)})})}ngAfterViewInit(){var t=this;return(0,F.Z)(function*(){yield t.svConsumerFront.loadDdls(t.baseModel,t.baseModel.data.step).then(r=>{console.log("consumer/CreateComponent::ngAfterViewInit()/this.baseModel.data.step:",t.baseModel.data.step)})})()}init(){this.baseModel=new l.BaseModel(i.hR.module,i.hR.controller),this.baseModel.data.fields=this.svForms.filterByFieldFor(i.aN,l.FieldFor.createForm),this.baseModel.data.wizardModel=i.YM,this.baseModel.data.step=this.svForm.filterStepsByController(this.baseModel.data.wizardModel,i.hR.controller)[0],this.baseModel.data.form=this.fb.group(this.svForm.getFormControlConfig(i.aN)),this.baseModel.data.step.formGroup=this.baseModel.data.form,this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(i.hR.controller,"Create")}setSelectedIcon(t){this.svForm.setSelectedIcon(t,this.baseModel,this.baseModel.data.step)}save(t){switch(console.log("consumer/CreateComponent::save()/01"),console.log("consumer/CreateComponent::save()/step:",t),t.controller){case"module":case"menu":break;case"Consumer":if(console.log("consumer/CreateComponent::save()/handling consumer"),console.log("consumer/CreateComponent::save()/step.formGroup.value:",t.formGroup.value),"VALID"===t.formGroup.status){console.log("consumer/CreateComponent::save()/validation success");let c={ctx:"Sys",m:"Moduleman",c:"Consumer",a:"Create",dat:{f_vals:[{data:{}}],token:""},args:{}};c.dat.f_vals[0].data={...t.formGroup.value},c.dat.token=this.baseModel.token,console.log("consumer/CreateComponent::save()/env:",c),this.svServer.proc(c).subscribe(u=>{console.log("consumer/CreateComponent::save()/Consumer/resp:",u)})}else console.log("consumer/CreateComponent::save()/Validation Error orccured")}}finishFunction(){console.log("finishing!!")}}A.\u0275fac=function(t){return new(t||A)(o.\u0275\u0275directiveInject(d.ActivatedRoute),o.\u0275\u0275directiveInject(d.Router),o.\u0275\u0275directiveInject(l.ServerService),o.\u0275\u0275directiveInject(E),o.\u0275\u0275directiveInject(l.AclService),o.\u0275\u0275directiveInject(l.FormsService),o.\u0275\u0275directiveInject(l.NotificationService),o.\u0275\u0275directiveInject(T.FormBuilder),o.\u0275\u0275directiveInject(l.FormsService),o.\u0275\u0275directiveInject(L.v),o.\u0275\u0275directiveInject(n.PageService),o.\u0275\u0275directiveInject(l.CdPushService),o.\u0275\u0275directiveInject(l.BaseService),o.\u0275\u0275directiveInject(l.SessService))},A.\u0275cmp=o.\u0275\u0275defineComponent({type:A,selectors:[["app-create"]],decls:1,vars:2,consts:[[3,"baseModel","wizardModel","saveEmitter","relaySelIconEmitter"]],template:function(t,r){1&t&&(o.\u0275\u0275elementStart(0,"naz-table-create",0),o.\u0275\u0275listener("saveEmitter",function(u){return r.save(u)})("relaySelIconEmitter",function(u){return r.setSelectedIcon(u)}),o.\u0275\u0275elementEnd()),2&t&&o.\u0275\u0275property("baseModel",r.baseModel)("wizardModel",r.wizardModel)},dependencies:[n.CreateComponent]});var x=s(86106);const j=[{path:"list",component:m},{path:"edit",component:y},{path:"delete",component:R},{path:"create",component:A},{path:"dashboard",component:x.M}];class N{}N.\u0275fac=function(t){return new(t||N)},N.\u0275mod=o.\u0275\u0275defineNgModule({type:N}),N.\u0275inj=o.\u0275\u0275defineInjector({imports:[d.RouterModule.forChild(j),d.RouterModule]});class S{}S.\u0275fac=function(t){return new(t||S)},S.\u0275mod=o.\u0275\u0275defineNgModule({type:S}),S.\u0275inj=o.\u0275\u0275defineInjector({imports:[a.CommonModule,T.FormsModule,T.ReactiveFormsModule,v.NgbNavModule,v.NgbDropdownModule,v.NgbTooltipModule,v.NgbAccordionModule,n.NazUiModule,n.NazTableModule,n.NazCreateModule,n.NazEditModule,n.NazDeleteModule,h.Ng2SearchPipeModule,g.ArchwizardModule,b.NgToggleModule,N,e.NgSelectModule,l.BaseModule.forChild(p.N),l.CdPushModule.forChild(p.N)]})},95855:(P,C,s)=>{s.d(C,{v:()=>p});var a=s(33635),e=s(87675),h=s(24388);class p{constructor(n,d,i){this.svMenu=n,this.svNotif=d,this.svForm=i,this.ddlData={config:{suppressScrollX:!0,wheelSpeed:.3},header:{title:{lable:"Notifications",cls:"",action:null},sideLink:{lable:"View All",cls:"",action:null}},footer:{label:"View All",icon:"",action:null},data:[{label:"item 1",description:"If several languages coalesce the grammar",time:"3 min ago"},{label:"item 2",description:"It will seem like simplified English",time:"1 hr ago"},{label:"item 3",description:"If several languages coalesce the grammar",time:"4 hr ago"}]},this.pushEnvelop={pushRecepients:[],pushData:null,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:null},this.numericNumberReg1="^-?[0-9]\\d*(\\.\\d{1,2})?$",this.numericNumberReg2="/^[0-9]d*$/",this.numericNumberReg3=new RegExp(/^-?[0-9]\\d*(\\.\\d{1,2})?$/,"i"),this.numericNumberReg4=new RegExp(/^[0-9]\d*$/,"i")}setIconsData$(n,d){n.fields.map((i,o)=>{i.name===d&&(n.fields[o].ddlInfo.selData$=(0,a.of)(this.ddlData),n.fields[o].ddlInfo.selIndex="iconId",n.fields[o].ddlInfo.selValueField="iconName",n.fields[o].ddlInfo.selPlaceholder="...Choose")})}setDdl$(n){if(n.token){const d=new a.Subject;let i=[];return n.getFn$.subscribe(o=>{const m=o;console.log("ModulemanService::setDdl$()/response:",m),console.log("ModulemanService::setDdl$()/ddlCtx.step.fields:",n.step),m.app_state.success?(i=m.data.items,n.step.fields.map((F,y)=>{console.log("ModulemanService::setDdl$()/f.name1:",F.name),console.log("ModulemanService::setDdl$()/ddlCtx.controlName:",n.controlName),console.log("ModulemanService::setDdl$()/f:",F),F.name===n.controlName&&"ddlInfo"in F&&(console.log("ModulemanService::setDdl$()/f.name2:",F.name),n.step.fields[y].ddlInfo.selData$=(0,a.of)(m.data.items),n.step.fields[y].ddlInfo.selIndex=n.selIndex,n.step.fields[y].ddlInfo.selValueField=n.selValueField,n.step.fields[y].ddlInfo.selPlaceholder="...Choose")}),d.next(i)):(this.pushEnvelop.pushData=m,this.pushEnvelop.resp=m,this.svNotif.emitNotif(this.pushEnvelop),d.next(i))}),d.asObservable()}return(0,a.of)([])}}p.\u0275fac=function(n){return new(n||p)(e.\u0275\u0275inject(h.MenuService),e.\u0275\u0275inject(h.NotificationService),e.\u0275\u0275inject(h.FormsService))},p.\u0275prov=e.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac,providedIn:"root"})},92526:(P,C,s)=>{s.d(C,{N:()=>b});const a="https://cd-api.co.ke",b={appId:"",production:!1,apiEndpoint:`${a}:3001/api`,sioEndpoint:`${a}:3002`,wsEndpoint:"ws://cd-api.co.ke:3000",wsMode:"sio",pushConfig:{sio:{enabled:!0},wss:{enabled:!1},pusher:{enabled:!0,apiKey:"DtVRY9V5j41KwSxKrd8L_dRijUJh9gVcqwBH5wb96no",options:{cluster:"ap2",forceTLS:!0,userAuthentication:{endpoint:"https://cd-api.co.ke:3002/pusher/auth",transport:"ajax",params:{},headers:{},includeCredentials:!0,customHandler:null},channelAuthorization:{endpoint:"https://cd-api.co.ke:3002/pusher/auth"},authEndpoint:"https://cd-api.co.ke:3002/pusher/auth"}}},CD_PORT:3001,consumerToken:"B0B3DA99-1859-A499-90F6-1E3F69575DCD",USER_RESOURCES:"http://routed-93/user-resources",apiHost:"https://cd-api.co.ke",sioHost:"https://cd-api.co.ke",shellHost:"https://asdap.net",consumer:"",clientAppGuid:"ca0fe39f-92b2-484d-91ef-487d4fc462a2",clientContext:{entity:"ASDAP",clientAppId:2,consumerToken:"B0B3DA99-1859-A499-90F6-1E3F69575DCD"},clientAppId:2,SOCKET_IO_PORT:3002,defaultauth:"cd-auth",initialPage:"dashboard",mfManifestPath:"/assets/mf.manifest.json",apiOptions:{headers:{"Content-Type":"application/json"}},sioOptions:{path:"/socket.io",transports:["websocket","polling"],secure:!0},firebaseConfig:{apiKey:"",authDomain:"",databaseURL:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""}}},15861:(P,C,s)=>{function a(e,v,h,g,b,p,l){try{var n=e[p](l),d=n.value}catch(i){return void h(i)}n.done?v(d):Promise.resolve(d).then(g,b)}function T(e){return function(){var v=this,h=arguments;return new Promise(function(g,b){var p=e.apply(v,h);function l(d){a(p,g,b,l,n,"next",d)}function n(d){a(p,g,b,l,n,"throw",d)}l(void 0)})}}s.d(C,{Z:()=>T})}}]);