(self.webpackChunkcd_moduleman=self.webpackChunkcd_moduleman||[]).push([[5298],{15298:(A,h,n)=>{n.r(h),n.d(h,{ConsumerResourceModule:()=>s});var v=n(35228),r=n(30533),g=n(83781),l=n(76380),S=n(92618),E=n(59707),f=n(15006),D=n(5740),x=n(92526),C=n(27562),o=n(53629),b=n(37011),y=n(31815);const M={series:[{name:"2020",type:"column",data:[23,42,35,27,43,22,17,31,22,22,12,16]},{name:"2019",type:"line",data:[23,32,27,38,27,32,27,38,22,31,21,16]}],chart:{height:280,type:"line",toolbar:{show:!1}},stroke:{width:[0,3],curve:"smooth"},plotOptions:{bar:{horizontal:!1,columnWidth:"20%"}},dataLabels:{enabled:!1},legend:{show:!1},colors:["#5664d2","#1cbb8c"],labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},w={series:[20,20,20,20,20],chart:{height:250,type:"donut"},labels:["Tanzania","Malawi","Eswatini","The Gambia","Ghana"],plotOptions:{pie:{donut:{size:"75%"}}},dataLabels:{enabled:!1},legend:{show:!1},colors:["#5664d2","#1cbb8c","#eeb902","red","pink"]},R={series:[72],chart:{type:"radialBar",wight:60,height:60,sparkline:{enabled:!0}},dataLabels:{enabled:!1},colors:["#5664d2"],stroke:{lineCap:"round"},plotOptions:{radialBar:{hollow:{margin:0,size:"70%"},track:{margin:0},dataLabels:{show:!1}}}},k={series:[65],chart:{type:"radialBar",wight:60,height:60,sparkline:{enabled:!0}},dataLabels:{enabled:!1},colors:["#1cbb8c"],stroke:{lineCap:"round"},plotOptions:{radialBar:{hollow:{margin:0,size:"70%"},track:{margin:0},dataLabels:{show:!1}}}},N=[{id:1,name:"Frank Vickery",message:"Hey! I am available",image:"assets/images/users/avatar-2.jpg",time:"12:09"},{id:2,align:"right",name:"Ricky Clark",message:"Hi, How are you? What about our next meeting?",time:"10:02"},{text:"Today"},{id:3,name:"Frank Vickery",message:"Hello!",image:"assets/images/users/avatar-2.jpg",time:"10:06"},{id:4,name:"Frank Vickery",message:"& Next meeting tomorrow 10.00AM",image:"assets/images/users/avatar-2.jpg",time:"10:06"},{id:5,align:"right",name:"Ricky Clark",message:"Wow that's great",time:"10:07"}],j=[{orderid:"#NZ1563",date:"28 Mar, 2020",billingname:"Frank Dean",total:"$164",paymentstatus:"Unpaid"},{orderid:"#NZ1564",date:"28 Mar, 2020",billingname:"Eddy Torres",total:"$141",paymentstatus:"Paid"},{orderid:"#NZ1565",date:"29 Mar, 2020",billingname:"Jamison Clark",total:"$123",paymentstatus:"Paid"},{orderid:"#NZ1566",date:"30 Mar, 2020",billingname:"Jewel Buckley",total:"$112",paymentstatus:"Paid"},{orderid:"#NZ1567",date:"31 Mar, 2020",billingname:"Jeffrey Waltz",total:"$105",paymentstatus:"Unpaid"},{orderid:"#NZ1568",date:"01 Apr, 2020",billingname:"Jefferson Allen",total:"$160",paymentstatus:"Chargeback"}],I=[{icon:"ri-stack-line",title:"Number of Sales",value:"1459"},{icon:"ri-store-2-line",title:"Sales Revenue",value:"$ 38453"},{icon:"ri-briefcase-4-line",title:"Average Price",value:"$ 15.4"}];var e=n(87675);class m{constructor(t){this.formBuilder=t,this.options={layers:[(0,y.tileLayer)("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:"..."})],zoom:6,center:(0,y.latLng)(46.879966,-121.726909)}}ngOnInit(){this.breadCrumbItems=[{label:"ASDAP"},{label:"Dashboard",active:!0}],this.formData=this.formBuilder.group({message:["",[r.Validators.required]]}),this._fetchData()}_fetchData(){this.revenueChart=M,this.salesAnalytics=w,this.sparklineEarning=R,this.sparklineMonthly=k,this.chatData=N,this.transactions=j,this.statData=I}get form(){return this.formData.controls}messageSave(){const t=this.formData.get("message").value,i=new Date;this.formData.valid&&t&&(this.chatData.push({align:"right",name:"Ricky Clark",message:t,time:i.getHours()+":"+i.getMinutes()}),this.formData=this.formBuilder.group({message:null})),this.chatSubmit=!0}}m.\u0275fac=function(t){return new(t||m)(e.\u0275\u0275directiveInject(r.UntypedFormBuilder))},m.\u0275cmp=e.\u0275\u0275defineComponent({type:m,selectors:[["app-list"]],decls:241,vars:1,consts:[[1,"container-fluid"],["title","Consumer Resources",3,"breadcrumbItems"],[1,"row"],[1,"col-lg-4"],[1,"card"],[1,"card-body"],["ngbDropdown","",1,"dropdown","float-end"],["href","javascript: void(0);","data-toggle","dropdown","aria-expanded","false","ngbDropdownToggle","",1,"dropdown-toggle","arrow-none","card-drop"],[1,"mdi","mdi-dots-vertical"],["ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-end"],["href","javascript:void(0);",1,"dropdown-item"],[1,"card-title","mb-3"],[2,"height","330px"],[1,"list-unstyled","activity-wid"],[1,"activity-list"],[1,"activity-icon","avatar-xs"],[1,"avatar-title","bg-primary-subtle","text-primary","text-primary","rounded-circle"],[1,"ri-edit-2-fill"],[1,"font-size-13"],[1,"text-muted"],[1,"text-muted","mb-0"],[1,"ri-user-2-fill"],[1,"ri-bar-chart-fill"],[1,"ri-mail-fill"],[1,"ri-calendar-2-fill"],[1,"card-title","mb-4"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"app-pagetitle",1),e.\u0275\u0275elementStart(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"a",7),e.\u0275\u0275element(8,"i",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"div",9)(10,"a",10),e.\u0275\u0275text(11,"Sales Report"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"a",10),e.\u0275\u0275text(13,"Export Report"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"a",10),e.\u0275\u0275text(15,"Profit"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"a",10),e.\u0275\u0275text(17,"Action"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(18,"h4",11),e.\u0275\u0275text(19,"Sources"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"div")(21,"perfect-scrollbar",12)(22,"ul",13)(23,"li",14)(24,"div",15)(25,"span",16),e.\u0275\u0275element(26,"i",17),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(27,"div")(28,"div")(29,"h5",18),e.\u0275\u0275text(30,"28 Apr, 2020 "),e.\u0275\u0275elementStart(31,"small",19),e.\u0275\u0275text(32,"12:07 am"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(33,"div")(34,"p",20),e.\u0275\u0275text(35,"Responded to need \u201cVolunteer Activities\u201d"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(36,"li",14)(37,"div",15)(38,"span",16),e.\u0275\u0275element(39,"i",21),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(40,"div")(41,"div")(42,"h5",18),e.\u0275\u0275text(43,"21 Apr, 2020 "),e.\u0275\u0275elementStart(44,"small",19),e.\u0275\u0275text(45,"08:01 pm"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(46,"div")(47,"p",20),e.\u0275\u0275text(48,"Added an interest \u201cVolunteer Activities\u201d"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(49,"li",14)(50,"div",15)(51,"span",16),e.\u0275\u0275element(52,"i",22),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(53,"div")(54,"div")(55,"h5",18),e.\u0275\u0275text(56,"17 Apr, 2020 "),e.\u0275\u0275elementStart(57,"small",19),e.\u0275\u0275text(58,"09:23 am"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(59,"div")(60,"p",20),e.\u0275\u0275text(61,"Joined the group \u201cBoardsmanship Forum\u201d"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(62,"li",14)(63,"div",15)(64,"span",16),e.\u0275\u0275element(65,"i",23),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(66,"div")(67,"div")(68,"h5",18),e.\u0275\u0275text(69,"11 Apr, 2020 "),e.\u0275\u0275elementStart(70,"small",19),e.\u0275\u0275text(71,"05:10 pm"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(72,"div")(73,"p",20),e.\u0275\u0275text(74,"Responded to need \u201cIn-Kind Opportunity\u201d"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(75,"li",14)(76,"div",15)(77,"span",16),e.\u0275\u0275element(78,"i",24),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(79,"div")(80,"div")(81,"h5",18),e.\u0275\u0275text(82,"07 Apr, 2020 "),e.\u0275\u0275elementStart(83,"small",19),e.\u0275\u0275text(84,"12:47 pm"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(85,"div")(86,"p",20),e.\u0275\u0275text(87,"Created need \u201cVolunteer Activities\u201d"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(88,"li",14)(89,"div",15)(90,"span",16),e.\u0275\u0275element(91,"i",17),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(92,"div")(93,"div")(94,"h5",18),e.\u0275\u0275text(95,"05 Apr, 2020 "),e.\u0275\u0275elementStart(96,"small",19),e.\u0275\u0275text(97,"03:09 pm"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(98,"div")(99,"p",20),e.\u0275\u0275text(100,"Attending the event \u201cSome New Event\u201d"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(101,"li",14)(102,"div",15)(103,"span",16),e.\u0275\u0275element(104,"i",21),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(105,"div")(106,"div")(107,"h5",18),e.\u0275\u0275text(108,"02 Apr, 2020 "),e.\u0275\u0275elementStart(109,"small",19),e.\u0275\u0275text(110,"12:07 am"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(111,"div")(112,"p",20),e.\u0275\u0275text(113,"Responded to need \u201cIn-Kind Opportunity\u201d"),e.\u0275\u0275elementEnd()()()()()()()()()(),e.\u0275\u0275elementStart(114,"div",3)(115,"div",4)(116,"div",5)(117,"div",6)(118,"a",7),e.\u0275\u0275element(119,"i",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(120,"div",9)(121,"a",10),e.\u0275\u0275text(122,"Sales Report"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(123,"a",10),e.\u0275\u0275text(124,"Export Report"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(125,"a",10),e.\u0275\u0275text(126,"Profit"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(127,"a",10),e.\u0275\u0275text(128,"Action"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(129,"h4",25),e.\u0275\u0275text(130,"Recent Activity Feed"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(131,"perfect-scrollbar",12)(132,"ul",13)(133,"li",14)(134,"div",15)(135,"span",16),e.\u0275\u0275element(136,"i",17),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(137,"div")(138,"div")(139,"h5",18),e.\u0275\u0275text(140,"28 Apr, 2020 "),e.\u0275\u0275elementStart(141,"small",19),e.\u0275\u0275text(142,"12:07 am"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(143,"div")(144,"p",20),e.\u0275\u0275text(145,"Responded to need \u201cVolunteer Activities\u201d"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(146,"li",14)(147,"div",15)(148,"span",16),e.\u0275\u0275element(149,"i",21),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(150,"div")(151,"div")(152,"h5",18),e.\u0275\u0275text(153,"21 Apr, 2020 "),e.\u0275\u0275elementStart(154,"small",19),e.\u0275\u0275text(155,"08:01 pm"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(156,"div")(157,"p",20),e.\u0275\u0275text(158,"Added an interest \u201cVolunteer Activities\u201d"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(159,"li",14)(160,"div",15)(161,"span",16),e.\u0275\u0275element(162,"i",22),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(163,"div")(164,"div")(165,"h5",18),e.\u0275\u0275text(166,"17 Apr, 2020 "),e.\u0275\u0275elementStart(167,"small",19),e.\u0275\u0275text(168,"09:23 am"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(169,"div")(170,"p",20),e.\u0275\u0275text(171,"Joined the group \u201cBoardsmanship Forum\u201d"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(172,"li",14)(173,"div",15)(174,"span",16),e.\u0275\u0275element(175,"i",23),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(176,"div")(177,"div")(178,"h5",18),e.\u0275\u0275text(179,"11 Apr, 2020 "),e.\u0275\u0275elementStart(180,"small",19),e.\u0275\u0275text(181,"05:10 pm"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(182,"div")(183,"p",20),e.\u0275\u0275text(184,"Responded to need \u201cIn-Kind Opportunity\u201d"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(185,"li",14)(186,"div",15)(187,"span",16),e.\u0275\u0275element(188,"i",24),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(189,"div")(190,"div")(191,"h5",18),e.\u0275\u0275text(192,"07 Apr, 2020 "),e.\u0275\u0275elementStart(193,"small",19),e.\u0275\u0275text(194,"12:47 pm"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(195,"div")(196,"p",20),e.\u0275\u0275text(197,"Created need \u201cVolunteer Activities\u201d"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(198,"li",14)(199,"div",15)(200,"span",16),e.\u0275\u0275element(201,"i",17),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(202,"div")(203,"div")(204,"h5",18),e.\u0275\u0275text(205,"05 Apr, 2020 "),e.\u0275\u0275elementStart(206,"small",19),e.\u0275\u0275text(207,"03:09 pm"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(208,"div")(209,"p",20),e.\u0275\u0275text(210,"Attending the event \u201cSome New Event\u201d"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(211,"li",14)(212,"div",15)(213,"span",16),e.\u0275\u0275element(214,"i",21),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(215,"div")(216,"div")(217,"h5",18),e.\u0275\u0275text(218,"02 Apr, 2020 "),e.\u0275\u0275elementStart(219,"small",19),e.\u0275\u0275text(220,"12:07 am"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(221,"div")(222,"p",20),e.\u0275\u0275text(223,"Responded to need \u201cIn-Kind Opportunity\u201d"),e.\u0275\u0275elementEnd()()()()()()()()(),e.\u0275\u0275elementStart(224,"div",3)(225,"div",4)(226,"div",5)(227,"div",6)(228,"a",7),e.\u0275\u0275element(229,"i",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(230,"div",9)(231,"a",10),e.\u0275\u0275text(232,"Sales Report"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(233,"a",10),e.\u0275\u0275text(234,"Export Report"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(235,"a",10),e.\u0275\u0275text(236,"Profit"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(237,"a",10),e.\u0275\u0275text(238,"Action"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(239,"h4",25),e.\u0275\u0275text(240,"Revenue by Locations"),e.\u0275\u0275elementEnd()()()()()()),2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("breadcrumbItems",i.breadCrumbItems))},dependencies:[l.NgbDropdown,l.NgbDropdownToggle,l.NgbDropdownMenu,o.PagetitleComponent]});class p{constructor(){}ngOnInit(){}}p.\u0275fac=function(t){return new(t||p)},p.\u0275cmp=e.\u0275\u0275defineComponent({type:p,selectors:[["app-edit"]],decls:2,vars:0,template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"edit works!"),e.\u0275\u0275elementEnd())}});class c{constructor(){}ngOnInit(){}}c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=e.\u0275\u0275defineComponent({type:c,selectors:[["app-delete"]],decls:2,vars:0,template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"delete works!"),e.\u0275\u0275elementEnd())}});class u{constructor(){}ngOnInit(){}}u.\u0275fac=function(t){return new(t||u)},u.\u0275cmp=e.\u0275\u0275defineComponent({type:u,selectors:[["app-create"]],decls:2,vars:0,template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"create works!"),e.\u0275\u0275elementEnd())}});var O=n(86106);const T=[{path:"list",component:m},{path:"edit",component:p},{path:"delete",component:c},{path:"create",component:u},{path:"dashboard",component:O.M}];class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.\u0275\u0275defineNgModule({type:d}),d.\u0275inj=e.\u0275\u0275defineInjector({imports:[b.RouterModule.forChild(T),b.RouterModule]});class s{}s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=e.\u0275\u0275defineInjector({imports:[v.CommonModule,r.FormsModule,r.ReactiveFormsModule,l.NgbNavModule,l.NgbDropdownModule,l.NgbTooltipModule,l.NgbAccordionModule,o.NazUiModule,o.NazTableModule,o.NazCreateModule,o.NazEditModule,o.NazDeleteModule,D.LeafletModule,S.Ng2SearchPipeModule,E.ArchwizardModule,f.NgToggleModule,d,g.NgSelectModule,C.BaseModule.forChild(x.N),C.CdPushModule.forChild(x.N)]})},92526:(A,h,n)=>{n.d(h,{N:()=>f});const v="https://cd-api.co.ke",f={appId:"",production:!1,apiEndpoint:`${v}:3001/api`,sioEndpoint:`${v}:3002`,wsEndpoint:"ws://cd-api.co.ke:3000",wsMode:"wss",pushConfig:{sio:{enabled:!0},wss:{enabled:!1},pusher:{enabled:!0,apiKey:"DtVRY9V5j41KwSxKrd8L_dRijUJh9gVcqwBH5wb96no",options:{cluster:"ap2",forceTLS:!0,userAuthentication:{endpoint:"https://cd-api.co.ke:3002/pusher/auth",transport:"ajax",params:{},headers:{},includeCredentials:!0,customHandler:null},channelAuthorization:{endpoint:"https://cd-api.co.ke:3002/pusher/auth"},authEndpoint:"https://cd-api.co.ke:3002/pusher/auth"}}},CD_PORT:3001,consumerToken:"B0B3DA99-1859-A499-90F6-1E3F69575DCD",clientContext:{entity:"ASDAP",clientAppId:2,consumerToken:"B0B3DA99-1859-A499-90F6-1E3F69575DCD"},USER_RESOURCES:"http://routed-93/user-resources",apiHost:"https://cd-api.co.ke",sioHost:"https://cd-api.co.ke",shellHost:"https://asdap.net",consumer:"",clientAppGuid:"ca0fe39f-92b2-484d-91ef-487d4fc462a2",clientAppId:2,SOCKET_IO_PORT:3002,defaultauth:"cd-auth",mfManifestPath:"/assets/mf.manifest.json",apiOptions:{headers:{"Content-Type":"application/json"}},sioOptions:{path:"/socket.io",transports:["websocket","polling"],secure:!0},firebaseConfig:{apiKey:"",authDomain:"",databaseURL:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""}}}}]);