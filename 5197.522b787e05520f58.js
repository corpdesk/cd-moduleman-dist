(self.webpackChunkcd_moduleman=self.webpackChunkcd_moduleman||[]).push([[5197],{5197:(L,b,h)=>{h.r(b),h.d(b,{default:()=>U});var x=h(9545),t=h(8043),r=h(8323);class S extends t.BaseComponent{constructor(){super(...arguments),this.state={textId:(0,t.getUniqueDomId)()}}render(){let{theme:e,dateEnv:n,options:l,viewApi:s}=this.context,{cellId:i,dayDate:f,todayRange:d}=this.props,{textId:o}=this.state,c=(0,t.getDateMeta)(f,d),u=l.listDayFormat?n.format(f,l.listDayFormat):"",v=l.listDaySideFormat?n.format(f,l.listDaySideFormat):"",m=Object.assign({date:n.toDate(f),view:s,textId:o,text:u,sideText:v,navLinkAttrs:(0,t.buildNavLinkAttrs)(this.context,f),sideNavLinkAttrs:(0,t.buildNavLinkAttrs)(this.context,f,"day",!1)},c);return(0,r.createElement)(t.ContentContainer,{elTag:"tr",elClasses:["fc-list-day",...(0,t.getDayClassNames)(c,e)],elAttrs:{"data-date":(0,t.formatDayString)(f)},renderProps:m,generatorName:"dayHeaderContent",customGenerator:l.dayHeaderContent,defaultGenerator:C,classNameGenerator:l.dayHeaderClassNames,didMount:l.dayHeaderDidMount,willUnmount:l.dayHeaderWillUnmount},g=>(0,r.createElement)("th",{scope:"colgroup",colSpan:3,id:i,"aria-labelledby":o},(0,r.createElement)(g,{elTag:"div",elClasses:["fc-list-day-cushion",e.getClass("tableCellShaded")]})))}}function C(a){return(0,r.createElement)(r.Fragment,null,a.text&&(0,r.createElement)("a",Object.assign({id:a.textId,className:"fc-list-day-text"},a.navLinkAttrs),a.text),a.sideText&&(0,r.createElement)("a",Object.assign({"aria-hidden":!0,className:"fc-list-day-side-text"},a.sideNavLinkAttrs),a.sideText))}const T=(0,t.createFormatter)({hour:"numeric",minute:"2-digit",meridiem:"short"});class I extends t.BaseComponent{render(){let{props:e,context:n}=this,{options:l}=n,{seg:s,timeHeaderId:i,eventHeaderId:f,dateHeaderId:d}=e,o=l.eventTimeFormat||T;return(0,r.createElement)(t.EventContainer,Object.assign({},e,{elTag:"tr",elClasses:["fc-list-event",s.eventRange.def.url&&"fc-event-forced-url"],defaultGenerator:()=>function w(a,e){let n=(0,t.getSegAnchorAttrs)(a,e);return(0,r.createElement)("a",Object.assign({},n),a.eventRange.def.title)}(s,n),seg:s,timeText:"",disableDragging:!0,disableResizing:!0}),(c,u)=>(0,r.createElement)(r.Fragment,null,function k(a,e,n,l,s){let{options:i}=n;if(!1!==i.displayEventTime){let c,d=a.eventRange.instance,o=!1;return a.eventRange.def.allDay?o=!0:(0,t.isMultiDayRange)(a.eventRange.range)?a.isStart?c=(0,t.buildSegTimeText)(a,e,n,null,null,d.range.start,a.end):a.isEnd?c=(0,t.buildSegTimeText)(a,e,n,null,null,a.start,d.range.end):o=!0:c=(0,t.buildSegTimeText)(a,e,n),o?(0,r.createElement)(t.ContentContainer,{elTag:"td",elClasses:["fc-list-event-time"],elAttrs:{headers:`${l} ${s}`},renderProps:{text:n.options.allDayText,view:n.viewApi},generatorName:"allDayContent",customGenerator:i.allDayContent,defaultGenerator:N,classNameGenerator:i.allDayClassNames,didMount:i.allDayDidMount,willUnmount:i.allDayWillUnmount}):(0,r.createElement)("td",{className:"fc-list-event-time"},c)}return null}(s,o,n,i,d),(0,r.createElement)("td",{"aria-hidden":!0,className:"fc-list-event-graphic"},(0,r.createElement)("span",{className:"fc-list-event-dot",style:{borderColor:u.borderColor||u.backgroundColor}})),(0,r.createElement)(c,{elTag:"td",elClasses:["fc-list-event-title"],elAttrs:{headers:`${f} ${d}`}})))}}function N(a){return a.text}function H(a){return a.text}function A(a){let e=(0,t.startOfDay)(a.renderRange.start),n=a.renderRange.end,l=[],s=[];for(;e<n;)l.push(e),s.push({start:e,end:(0,t.addDays)(e,1)}),e=(0,t.addDays)(e,1);return{dayDates:l,dayRanges:s}}function E(a){return!1===a?null:(0,t.createFormatter)(a)}(0,t.injectStyles)(':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}');var U=(0,x.createPlugin)({name:"@fullcalendar/list",optionRefiners:{listDayFormat:E,listDaySideFormat:E,noEventsClassNames:t.identity,noEventsContent:t.identity,noEventsDidMount:t.identity,noEventsWillUnmount:t.identity},views:{list:{component:class R extends t.DateComponent{constructor(){super(...arguments),this.computeDateVars=(0,t.memoize)(A),this.eventStoreToSegs=(0,t.memoize)(this._eventStoreToSegs),this.state={timeHeaderId:(0,t.getUniqueDomId)(),eventHeaderId:(0,t.getUniqueDomId)(),dateHeaderIdRoot:(0,t.getUniqueDomId)()},this.setRootEl=e=>{e?this.context.registerInteractiveComponent(this,{el:e}):this.context.unregisterInteractiveComponent(this)}}render(){let{props:e,context:n}=this,{dayDates:l,dayRanges:s}=this.computeDateVars(e.dateProfile),i=this.eventStoreToSegs(e.eventStore,e.eventUiBases,s);return(0,r.createElement)(t.ViewContainer,{elRef:this.setRootEl,elClasses:["fc-list",n.theme.getClass("table"),!1!==n.options.stickyHeaderDates?"fc-list-sticky":""],viewSpec:n.viewSpec},(0,r.createElement)(t.Scroller,{liquid:!e.isHeightAuto,overflowX:e.isHeightAuto?"visible":"hidden",overflowY:e.isHeightAuto?"visible":"auto"},i.length>0?this.renderSegList(i,l):this.renderEmptyMessage()))}renderEmptyMessage(){let{options:e,viewApi:n}=this.context;return(0,r.createElement)(t.ContentContainer,{elTag:"div",elClasses:["fc-list-empty"],renderProps:{text:e.noEventsText,view:n},generatorName:"noEventsContent",customGenerator:e.noEventsContent,defaultGenerator:H,classNameGenerator:e.noEventsClassNames,didMount:e.noEventsDidMount,willUnmount:e.noEventsWillUnmount},s=>(0,r.createElement)(s,{elTag:"div",elClasses:["fc-list-empty-cushion"]}))}renderSegList(e,n){let{theme:l,options:s}=this.context,{timeHeaderId:i,eventHeaderId:f,dateHeaderIdRoot:d}=this.state,o=function F(a){let n,l,e=[];for(n=0;n<a.length;n+=1)l=a[n],(e[l.dayIndex]||(e[l.dayIndex]=[])).push(l);return e}(e);return(0,r.createElement)(t.NowTimer,{unit:"day"},(c,u)=>{let v=[];for(let m=0;m<o.length;m+=1){let g=o[m];if(g){let y=(0,t.formatDayString)(n[m]),D=d+"-"+y;v.push((0,r.createElement)(S,{key:y,cellId:D,dayDate:n[m],todayRange:u})),g=(0,t.sortEventSegs)(g,s.eventOrder);for(let p of g)v.push((0,r.createElement)(I,Object.assign({key:y+":"+p.eventRange.instance.instanceId,seg:p,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1,timeHeaderId:i,eventHeaderId:f,dateHeaderId:D},(0,t.getSegMeta)(p,u,c))))}}return(0,r.createElement)("table",{className:"fc-list-table "+l.getClass("table")},(0,r.createElement)("thead",null,(0,r.createElement)("tr",null,(0,r.createElement)("th",{scope:"col",id:i},s.timeHint),(0,r.createElement)("th",{scope:"col","aria-hidden":!0}),(0,r.createElement)("th",{scope:"col",id:f},s.eventHint))),(0,r.createElement)("tbody",null,v))})}_eventStoreToSegs(e,n,l){return this.eventRangesToSegs((0,t.sliceEventStore)(e,n,this.props.dateProfile.activeRange,this.context.options.nextDayThreshold).fg,l)}eventRangesToSegs(e,n){let l=[];for(let s of e)l.push(...this.eventRangeToSegs(s,n));return l}eventRangeToSegs(e,n){let d,o,c,{dateEnv:l}=this.context,{nextDayThreshold:s}=this.context.options,i=e.range,f=e.def.allDay,u=[];for(d=0;d<n.length;d+=1)if(o=(0,t.intersectRanges)(i,n[d]),o&&(c={component:this,eventRange:e,start:o.start,end:o.end,isStart:e.isStart&&o.start.valueOf()===i.start.valueOf(),isEnd:e.isEnd&&o.end.valueOf()===i.end.valueOf(),dayIndex:d},u.push(c),!c.isEnd&&!f&&d+1<n.length&&i.end<l.add(n[d+1].start,s))){c.end=i.end,c.isEnd=!0;break}return u}},buttonTextKey:"list",listDayFormat:{month:"long",day:"numeric",year:"numeric"}},listDay:{type:"list",duration:{days:1},listDayFormat:{weekday:"long"}},listWeek:{type:"list",duration:{weeks:1},listDayFormat:{weekday:"long"},listDaySideFormat:{month:"long",day:"numeric",year:"numeric"}},listMonth:{type:"list",duration:{month:1},listDaySideFormat:{weekday:"long"}},listYear:{type:"list",duration:{year:1},listDaySideFormat:{weekday:"long"}}}})}}]);