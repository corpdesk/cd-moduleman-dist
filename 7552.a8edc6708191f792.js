(self.webpackChunkcd_moduleman=self.webpackChunkcd_moduleman||[]).push([[7552,7076,904],{77552:(L,w,C)=>{C.r(w),C.d(w,{default:()=>D});var s=C(81619),l=C(60904),D=(C(94038),C(88853),(0,s.createPlugin)({name:"@fullcalendar/daygrid",initialView:"dayGridMonth",views:{dayGrid:{component:l.DayGridView,dateProfileGeneratorClass:l.TableDateProfileGenerator},dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},fixedWeekCount:!0},dayGridYear:{type:"dayGrid",duration:{years:1}}}}))},60904:(L,w,C)=>{C.r(w),C.d(w,{DayGridView:()=>ae,DayTable:()=>_,DayTableSlicer:()=>A,Table:()=>B,TableDateProfileGenerator:()=>ie,TableRows:()=>O,TableView:()=>G,buildDayTableModel:()=>j,buildDayTableRenderRange:()=>F});var s=C(94038),l=C(88853);function M(i,e){let t=[];for(let n=0;n<e;n+=1)t[n]=[];for(let n of i)t[n.row].push(n);return t}function D(i,e){let t=[];for(let n=0;n<e;n+=1)t[n]=[];for(let n of i)t[n.firstCol].push(n);return t}function P(i,e){let t=[];if(i){for(let n=0;n<e;n+=1)t[n]={affectedInstances:i.affectedInstances,isEvent:i.isEvent,segs:[]};for(let n of i.segs)t[n.row].segs.push(n)}else for(let n=0;n<e;n+=1)t[n]=null;return t}(0,s.injectStyles)(':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}');const H=(0,s.createFormatter)({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"});function I(i){let{display:e}=i.eventRange.ui;return"list-item"===e||"auto"===e&&!i.eventRange.def.allDay&&i.firstCol===i.lastCol&&i.isStart&&i.isEnd}class W extends s.BaseComponent{render(){let{props:e}=this;return(0,l.createElement)(s.StandardEvent,Object.assign({},e,{elClasses:["fc-daygrid-event","fc-daygrid-block-event","fc-h-event"],defaultTimeFormat:H,defaultDisplayEventEnd:e.defaultDisplayEventEnd,disableResizing:!e.seg.eventRange.def.allDay}))}}class N extends s.BaseComponent{render(){let{props:e,context:t}=this,{options:n}=t,{seg:a}=e,o=(0,s.buildSegTimeText)(a,n.eventTimeFormat||H,t,!0,e.defaultDisplayEventEnd);return(0,l.createElement)(s.EventContainer,Object.assign({},e,{elTag:"a",elClasses:["fc-daygrid-event","fc-daygrid-dot-event"],elAttrs:(0,s.getSegAnchorAttrs)(e.seg,t),defaultGenerator:V,timeText:o,isResizing:!1,isDateSelecting:!1}))}}function V(i){return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"fc-daygrid-event-dot",style:{borderColor:i.borderColor||i.backgroundColor}}),i.timeText&&(0,l.createElement)("div",{className:"fc-event-time"},i.timeText),(0,l.createElement)("div",{className:"fc-event-title"},i.event.title||(0,l.createElement)(l.Fragment,null,"\xa0")))}class U extends s.BaseComponent{constructor(){super(...arguments),this.compileSegs=(0,s.memoize)(K)}render(){let{props:e}=this,{allSegs:t,invisibleSegs:n}=this.compileSegs(e.singlePlacements);return(0,l.createElement)(s.MoreLinkContainer,{elClasses:["fc-daygrid-more-link"],dateProfile:e.dateProfile,todayRange:e.todayRange,allDayDate:e.allDayDate,moreCnt:e.moreCnt,allSegs:t,hiddenSegs:n,alignmentElRef:e.alignmentElRef,alignGridTop:e.alignGridTop,extraDateSpan:e.extraDateSpan,popoverContent:()=>{let a=(e.eventDrag?e.eventDrag.affectedInstances:null)||(e.eventResize?e.eventResize.affectedInstances:null)||{};return(0,l.createElement)(l.Fragment,null,t.map(r=>{let o=r.eventRange.instance.instanceId;return(0,l.createElement)("div",{className:"fc-daygrid-event-harness",key:o,style:{visibility:a[o]?"hidden":""}},I(r)?(0,l.createElement)(N,Object.assign({seg:r,isDragging:!1,isSelected:o===e.eventSelection,defaultDisplayEventEnd:!1},(0,s.getSegMeta)(r,e.todayRange))):(0,l.createElement)(W,Object.assign({seg:r,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:o===e.eventSelection,defaultDisplayEventEnd:!1},(0,s.getSegMeta)(r,e.todayRange))))}))}})}}function K(i){let e=[],t=[];for(let n of i)e.push(n.seg),n.isVisible||t.push(n.seg);return{allSegs:e,invisibleSegs:t}}const q=(0,s.createFormatter)({week:"narrow"});class Y extends s.DateComponent{constructor(){super(...arguments),this.rootElRef=(0,l.createRef)(),this.state={dayNumberId:(0,s.getUniqueDomId)()},this.handleRootEl=e=>{(0,s.setRef)(this.rootElRef,e),(0,s.setRef)(this.props.elRef,e)}}render(){let{context:e,props:t,state:n,rootElRef:a}=this,{options:r,dateEnv:o}=e,{date:d,dateProfile:u}=t;const g=t.showDayNumber&&function Z(i,e,t){const{start:n,end:a}=e,r=(0,s.addMs)(a,-1),o=t.getYear(n),d=t.getMonth(n),u=t.getYear(r),g=t.getMonth(r);return!(o===u&&d===g)&&Boolean(i.valueOf()===n.valueOf()||1===t.getDay(i)&&i.valueOf()<a.valueOf())}(d,u.currentRange,o);return(0,l.createElement)(s.DayCellContainer,{elTag:"td",elRef:this.handleRootEl,elClasses:["fc-daygrid-day",...t.extraClassNames||[]],elAttrs:Object.assign(Object.assign(Object.assign({},t.extraDataAttrs),t.showDayNumber?{"aria-labelledby":n.dayNumberId}:{}),{role:"gridcell"}),defaultGenerator:$,date:d,dateProfile:u,todayRange:t.todayRange,showDayNumber:t.showDayNumber,isMonthStart:g,extraRenderProps:t.extraRenderProps},(f,v)=>(0,l.createElement)("div",{ref:t.innerElRef,className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",style:{minHeight:t.minHeight}},t.showWeekNumber&&(0,l.createElement)(s.WeekNumberContainer,{elTag:"a",elClasses:["fc-daygrid-week-number"],elAttrs:(0,s.buildNavLinkAttrs)(e,d,"week"),date:d,defaultFormat:q}),!v.isDisabled&&(t.showDayNumber||(0,s.hasCustomDayCellContent)(r)||t.forceDayTop)?(0,l.createElement)("div",{className:"fc-daygrid-day-top"},(0,l.createElement)(f,{elTag:"a",elClasses:["fc-daygrid-day-number",g&&"fc-daygrid-month-start"],elAttrs:Object.assign(Object.assign({},(0,s.buildNavLinkAttrs)(e,d)),{id:n.dayNumberId})})):t.showDayNumber?(0,l.createElement)("div",{className:"fc-daygrid-day-top",style:{visibility:"hidden"}},(0,l.createElement)("a",{className:"fc-daygrid-day-number"},"\xa0")):void 0,(0,l.createElement)("div",{className:"fc-daygrid-day-events",ref:t.fgContentElRef},t.fgContent,(0,l.createElement)("div",{className:"fc-daygrid-day-bottom",style:{marginTop:t.moreMarginTop}},(0,l.createElement)(U,{allDayDate:d,singlePlacements:t.singlePlacements,moreCnt:t.moreCnt,alignmentElRef:a,alignGridTop:!t.showDayNumber,extraDateSpan:t.extraDateSpan,dateProfile:t.dateProfile,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,todayRange:t.todayRange}))),(0,l.createElement)("div",{className:"fc-daygrid-day-bg"},t.bgContent)))}}function $(i){return i.dayNumberText||(0,l.createElement)(l.Fragment,null,"\xa0")}function x(i,e,t,n){if(i.firstCol===e&&i.lastCol===t-1)return i;let a=i.eventRange,r=a.range,o=(0,s.intersectRanges)(r,{start:n[e].date,end:(0,s.addDays)(n[t-1].date,1)});return Object.assign(Object.assign({},i),{firstCol:e,lastCol:t-1,eventRange:{def:a.def,ui:Object.assign(Object.assign({},a.ui),{durationEditable:!1}),instance:a.instance,range:o},isStart:i.isStart&&o.start.valueOf()===r.start.valueOf(),isEnd:i.isEnd&&o.end.valueOf()===r.end.valueOf()})}class ee extends s.SegHierarchy{constructor(){super(...arguments),this.hiddenConsumes=!1,this.forceHidden={}}addSegs(e){const t=super.addSegs(e),{entriesByLevel:n}=this,a=r=>!this.forceHidden[(0,s.buildEntryKey)(r)];for(let r=0;r<n.length;r+=1)n[r]=n[r].filter(a);return t}handleInvalidInsertion(e,t,n){const{entriesByLevel:a,forceHidden:r}=this,{touchingEntry:o,touchingLevel:d,touchingLateral:u}=e;if(this.hiddenConsumes&&o){const g=(0,s.buildEntryKey)(o);if(!r[g])if(this.allowReslicing){const f=Object.assign(Object.assign({},o),{span:(0,s.intersectSpans)(o.span,t.span)});r[(0,s.buildEntryKey)(f)]=!0,a[d][u]=f,this.splitEntry(o,t,n)}else r[g]=!0,n.push(o)}return super.handleInvalidInsertion(e,t,n)}}class z extends s.DateComponent{constructor(){super(...arguments),this.cellElRefs=new s.RefMap,this.frameElRefs=new s.RefMap,this.fgElRefs=new s.RefMap,this.segHarnessRefs=new s.RefMap,this.rootElRef=(0,l.createRef)(),this.state={framePositions:null,maxContentHeight:null,eventInstanceHeights:{}},this.handleResize=e=>{e&&this.updateSizing(!0)}}render(){let{props:e,state:t,context:n}=this,{options:a}=n,r=e.cells.length,o=D(e.businessHourSegs,r),d=D(e.bgEventSegs,r),u=D(this.getHighlightSegs(),r),g=D(this.getMirrorSegs(),r),{singleColPlacements:f,multiColPlacements:v,moreCnts:R,moreMarginTops:c}=function J(i,e,t,n,a,r,o){let d=new ee;d.allowReslicing=!0,d.strictOrder=n,!0===e||!0===t?(d.maxCoord=r,d.hiddenConsumes=!0):"number"==typeof e?d.maxStackCnt=e:"number"==typeof t&&(d.maxStackCnt=t,d.hiddenConsumes=!0);let u=[],g=[];for(let p=0;p<i.length;p+=1){let b=i[p],{instanceId:S}=b.eventRange.instance,E=a[S];null!=E?u.push({index:p,thickness:E,span:{start:b.firstCol,end:b.lastCol+1}}):g.push(b)}let f=d.addSegs(u),v=d.toRects(),{singleColPlacements:R,multiColPlacements:c,leftoverMargins:y}=function Q(i,e,t){let n=function X(i,e){let t=[];for(let n=0;n<e;n+=1)t.push([]);for(let n of i)for(let a=n.span.start;a<n.span.end;a+=1)t[a].push(n);return t}(i,t.length),a=[],r=[],o=[];for(let d=0;d<t.length;d+=1){let u=n[d],g=[],f=0,v=0;for(let c of u)g.push({seg:x(e[c.index],d,d+1,t),isVisible:!0,isAbsolute:!1,absoluteTop:c.levelCoord,marginTop:c.levelCoord-f}),f=c.levelCoord+c.thickness;let R=[];f=0,v=0;for(let c of u){let y=e[c.index],m=c.span.start===d;v+=c.levelCoord-f,f=c.levelCoord+c.thickness,c.span.end-c.span.start>1?(v+=c.thickness,m&&R.push({seg:x(y,c.span.start,c.span.end,t),isVisible:!0,isAbsolute:!0,absoluteTop:c.levelCoord,marginTop:0})):m&&(R.push({seg:x(y,c.span.start,c.span.end,t),isVisible:!0,isAbsolute:!1,absoluteTop:c.levelCoord,marginTop:v}),v=0)}a.push(g),r.push(R),o.push(v)}return{singleColPlacements:a,multiColPlacements:r,leftoverMargins:o}}(v,i,o),h=[],m=[];for(let p of g){c[p.firstCol].push({seg:p,isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let b=p.firstCol;b<=p.lastCol;b+=1)R[b].push({seg:x(p,b,b+1,o),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let p=0;p<o.length;p+=1)h.push(0);for(let p of f){let b=i[p.index],S=p.span;c[S.start].push({seg:x(b,S.start,S.end,o),isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let E=S.start;E<S.end;E+=1)h[E]+=1,R[E].push({seg:x(b,E,E+1,o),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let p=0;p<o.length;p+=1)m.push(y[p]);return{singleColPlacements:R,multiColPlacements:c,moreCnts:h,moreMarginTops:m}}((0,s.sortEventSegs)(e.fgEventSegs,a.eventOrder),e.dayMaxEvents,e.dayMaxEventRows,a.eventOrderStrict,t.eventInstanceHeights,t.maxContentHeight,e.cells),y=e.eventDrag&&e.eventDrag.affectedInstances||e.eventResize&&e.eventResize.affectedInstances||{};return(0,l.createElement)("tr",{ref:this.rootElRef,role:"row"},e.renderIntro&&e.renderIntro(),e.cells.map((h,m)=>{let p=this.renderFgSegs(m,e.forPrint?f[m]:v[m],e.todayRange,y),b=this.renderFgSegs(m,function te(i,e){if(!i.length)return[];let t=function ne(i){let e={};for(let t of i)for(let n of t)e[n.seg.eventRange.instance.instanceId]=n.absoluteTop;return e}(e);return i.map(n=>({seg:n,isVisible:!0,isAbsolute:!0,absoluteTop:t[n.eventRange.instance.instanceId],marginTop:0}))}(g[m],v),e.todayRange,{},Boolean(e.eventDrag),Boolean(e.eventResize),!1);return(0,l.createElement)(Y,{key:h.key,elRef:this.cellElRefs.createRef(h.key),innerElRef:this.frameElRefs.createRef(h.key),dateProfile:e.dateProfile,date:h.date,showDayNumber:e.showDayNumbers,showWeekNumber:e.showWeekNumbers&&0===m,forceDayTop:e.showWeekNumbers,todayRange:e.todayRange,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,extraRenderProps:h.extraRenderProps,extraDataAttrs:h.extraDataAttrs,extraClassNames:h.extraClassNames,extraDateSpan:h.extraDateSpan,moreCnt:R[m],moreMarginTop:c[m],singlePlacements:f[m],fgContentElRef:this.fgElRefs.createRef(h.key),fgContent:(0,l.createElement)(l.Fragment,null,(0,l.createElement)(l.Fragment,null,p),(0,l.createElement)(l.Fragment,null,b)),bgContent:(0,l.createElement)(l.Fragment,null,this.renderFillSegs(u[m],"highlight"),this.renderFillSegs(o[m],"non-business"),this.renderFillSegs(d[m],"bg-event")),minHeight:e.cellMinHeight})}))}componentDidMount(){this.updateSizing(!0),this.context.addResizeHandler(this.handleResize)}componentDidUpdate(e,t){this.updateSizing(!(0,s.isPropsEqual)(e,this.props))}componentWillUnmount(){this.context.removeResizeHandler(this.handleResize)}getHighlightSegs(){let{props:e}=this;return e.eventDrag&&e.eventDrag.segs.length?e.eventDrag.segs:e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:e.dateSelectionSegs}getMirrorSegs(){let{props:e}=this;return e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:[]}renderFgSegs(e,t,n,a,r,o,d){let{context:u}=this,{eventSelection:g}=this.props,{framePositions:f}=this.state,v=1===this.props.cells.length,R=r||o||d,c=[];if(f)for(let y of t){let{seg:h}=y,{instanceId:m}=h.eventRange.instance,p=m+":"+e,b=y.isVisible&&!a[m],S=y.isAbsolute,E="",T="";S&&(u.isRtl?(T=0,E=f.lefts[h.lastCol]-f.lefts[h.firstCol]):(E=0,T=f.rights[h.firstCol]-f.rights[h.lastCol])),c.push((0,l.createElement)("div",{className:"fc-daygrid-event-harness"+(S?" fc-daygrid-event-harness-abs":""),key:p,ref:R?null:this.segHarnessRefs.createRef(p),style:{visibility:b?"":"hidden",marginTop:S?"":y.marginTop,top:S?y.absoluteTop:"",left:E,right:T}},I(h)?(0,l.createElement)(N,Object.assign({seg:h,isDragging:r,isSelected:m===g,defaultDisplayEventEnd:v},(0,s.getSegMeta)(h,n))):(0,l.createElement)(W,Object.assign({seg:h,isDragging:r,isResizing:o,isDateSelecting:d,isSelected:m===g,defaultDisplayEventEnd:v},(0,s.getSegMeta)(h,n)))))}return c}renderFillSegs(e,t){let{isRtl:n}=this.context,{todayRange:a}=this.props,{framePositions:r}=this.state,o=[];if(r)for(let d of e){let u=n?{right:0,left:r.lefts[d.lastCol]-r.lefts[d.firstCol]}:{left:0,right:r.rights[d.firstCol]-r.rights[d.lastCol]};o.push((0,l.createElement)("div",{key:(0,s.buildEventRangeKey)(d.eventRange),className:"fc-daygrid-bg-harness",style:u},"bg-event"===t?(0,l.createElement)(s.BgEvent,Object.assign({seg:d},(0,s.getSegMeta)(d,a))):(0,s.renderFill)(t)))}return(0,l.createElement)(l.Fragment,{},...o)}updateSizing(e){let{props:t,state:n,frameElRefs:a}=this;if(!t.forPrint&&null!==t.clientWidth){if(e){let u=t.cells.map(g=>a.currentMap[g.key]);if(u.length){let g=this.rootElRef.current,f=new s.PositionCache(g,u,!0,!1);(!n.framePositions||!n.framePositions.similarTo(f))&&this.setState({framePositions:new s.PositionCache(g,u,!0,!1)})}}const r=this.state.eventInstanceHeights,o=this.queryEventInstanceHeights(),d=!0===t.dayMaxEvents||!0===t.dayMaxEventRows;this.safeSetState({eventInstanceHeights:Object.assign(Object.assign({},r),o),maxContentHeight:d?this.computeMaxContentHeight():null})}}queryEventInstanceHeights(){let e=this.segHarnessRefs.currentMap,t={};for(let n in e){let a=Math.round(e[n].getBoundingClientRect().height),r=n.split(":")[0];t[r]=Math.max(t[r]||0,a)}return t}computeMaxContentHeight(){let e=this.props.cells[0].key,n=this.fgElRefs.currentMap[e];return this.cellElRefs.currentMap[e].getBoundingClientRect().bottom-n.getBoundingClientRect().top}getCellEls(){let e=this.cellElRefs.currentMap;return this.props.cells.map(t=>e[t.key])}}z.addStateEquality({eventInstanceHeights:s.isPropsEqual});class O extends s.DateComponent{constructor(){super(...arguments),this.splitBusinessHourSegs=(0,s.memoize)(M),this.splitBgEventSegs=(0,s.memoize)(M),this.splitFgEventSegs=(0,s.memoize)(M),this.splitDateSelectionSegs=(0,s.memoize)(M),this.splitEventDrag=(0,s.memoize)(P),this.splitEventResize=(0,s.memoize)(P),this.rowRefs=new s.RefMap}render(){let{props:e,context:t}=this,n=e.cells.length,a=this.splitBusinessHourSegs(e.businessHourSegs,n),r=this.splitBgEventSegs(e.bgEventSegs,n),o=this.splitFgEventSegs(e.fgEventSegs,n),d=this.splitDateSelectionSegs(e.dateSelectionSegs,n),u=this.splitEventDrag(e.eventDrag,n),g=this.splitEventResize(e.eventResize,n),f=n>=7&&e.clientWidth?e.clientWidth/t.options.aspectRatio/6:null;return(0,l.createElement)(s.NowTimer,{unit:"day"},(v,R)=>(0,l.createElement)(l.Fragment,null,e.cells.map((c,y)=>(0,l.createElement)(z,{ref:this.rowRefs.createRef(y),key:c.length?c[0].date.toISOString():y,showDayNumbers:n>1,showWeekNumbers:e.showWeekNumbers,todayRange:R,dateProfile:e.dateProfile,cells:c,renderIntro:e.renderRowIntro,businessHourSegs:a[y],eventSelection:e.eventSelection,bgEventSegs:r[y].filter(se),fgEventSegs:o[y],dateSelectionSegs:d[y],eventDrag:u[y],eventResize:g[y],dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,clientWidth:e.clientWidth,clientHeight:e.clientHeight,cellMinHeight:f,forPrint:e.forPrint}))))}componentDidMount(){const e=this.rowRefs.currentMap[0].getCellEls()[0];this.rootEl=e?e.closest(".fc-daygrid-body"):null,this.rootEl&&this.context.registerInteractiveComponent(this,{el:this.rootEl,isHitComboAllowed:this.props.isHitComboAllowed})}componentWillUnmount(){this.rootEl&&(this.context.unregisterInteractiveComponent(this),this.rootEl=null)}prepareHits(){this.rowPositions=new s.PositionCache(this.rootEl,this.rowRefs.collect().map(e=>e.getCellEls()[0]),!1,!0),this.colPositions=new s.PositionCache(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)}queryHit(e,t){let{colPositions:n,rowPositions:a}=this,r=n.leftToIndex(e),o=a.topToIndex(t);if(null!=o&&null!=r){let d=this.props.cells[o][r];return{dateProfile:this.props.dateProfile,dateSpan:Object.assign({range:this.getCellRange(o,r),allDay:!0},d.extraDateSpan),dayEl:this.getCellEl(o,r),rect:{left:n.lefts[r],right:n.rights[r],top:a.tops[o],bottom:a.bottoms[o]},layer:0}}return null}getCellEl(e,t){return this.rowRefs.currentMap[e].getCellEls()[t]}getCellRange(e,t){let n=this.props.cells[e][t].date;return{start:n,end:(0,s.addDays)(n,1)}}}function se(i){return i.eventRange.def.allDay}class B extends s.DateComponent{constructor(){super(...arguments),this.elRef=(0,l.createRef)(),this.needsScrollReset=!1}render(){let{props:e}=this,{dayMaxEventRows:t,dayMaxEvents:n,expandRows:a}=e,r=!0===n||!0===t;return r&&!a&&(r=!1,t=null,n=null),(0,l.createElement)("div",{ref:this.elRef,className:["fc-daygrid-body",r?"fc-daygrid-body-balanced":"fc-daygrid-body-unbalanced",a?"":"fc-daygrid-body-natural"].join(" "),style:{width:e.clientWidth,minWidth:e.tableMinWidth}},(0,l.createElement)("table",{role:"presentation",className:"fc-scrollgrid-sync-table",style:{width:e.clientWidth,minWidth:e.tableMinWidth,height:a?e.clientHeight:""}},e.colGroupNode,(0,l.createElement)("tbody",{role:"presentation"},(0,l.createElement)(O,{dateProfile:e.dateProfile,cells:e.cells,renderRowIntro:e.renderRowIntro,showWeekNumbers:e.showWeekNumbers,clientWidth:e.clientWidth,clientHeight:e.clientHeight,businessHourSegs:e.businessHourSegs,bgEventSegs:e.bgEventSegs,fgEventSegs:e.fgEventSegs,dateSelectionSegs:e.dateSelectionSegs,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,dayMaxEvents:n,dayMaxEventRows:t,forPrint:e.forPrint,isHitComboAllowed:e.isHitComboAllowed}))))}componentDidMount(){this.requestScrollReset()}componentDidUpdate(e){e.dateProfile!==this.props.dateProfile?this.requestScrollReset():this.flushScrollReset()}requestScrollReset(){this.needsScrollReset=!0,this.flushScrollReset()}flushScrollReset(){if(this.needsScrollReset&&this.props.clientWidth){const e=function re(i,e){let t;return e.currentRangeUnit.match(/year|month/)&&(t=i.querySelector(`[data-date="${(0,s.formatIsoMonthStr)(e.currentDate)}-01"]`)),t||(t=i.querySelector(`[data-date="${(0,s.formatDayString)(e.currentDate)}"]`)),t}(this.elRef.current,this.props.dateProfile);if(e){const t=e.closest(".fc-daygrid-body"),n=t.closest(".fc-scroller"),a=e.getBoundingClientRect().top-t.getBoundingClientRect().top;n.scrollTop=a?a+1:0}this.needsScrollReset=!1}}}class A extends s.Slicer{constructor(){super(...arguments),this.forceDayIfListItem=!0}sliceRange(e,t){return t.sliceRange(e)}}class _ extends s.DateComponent{constructor(){super(...arguments),this.slicer=new A,this.tableRef=(0,l.createRef)()}render(){let{props:e,context:t}=this;return(0,l.createElement)(B,Object.assign({ref:this.tableRef},this.slicer.sliceProps(e,e.dateProfile,e.nextDayThreshold,t,e.dayTableModel),{dateProfile:e.dateProfile,cells:e.dayTableModel.cells,colGroupNode:e.colGroupNode,tableMinWidth:e.tableMinWidth,renderRowIntro:e.renderRowIntro,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.showWeekNumbers,expandRows:e.expandRows,headerAlignElRef:e.headerAlignElRef,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint}))}}class ie extends s.DateProfileGenerator{buildRenderRange(e,t,n){let a=super.buildRenderRange(e,t,n),{props:r}=this;return F({currentRange:a,snapToWeek:/^(year|month)$/.test(t),fixedWeekCount:r.fixedWeekCount,dateEnv:r.dateEnv})}}function F(i){let r,{dateEnv:e,currentRange:t}=i,{start:n,end:a}=t;if(i.snapToWeek&&(n=e.startOfWeek(n),r=e.startOfWeek(a),r.valueOf()!==a.valueOf()&&(a=(0,s.addWeeks)(r,1))),i.fixedWeekCount){let o=e.startOfWeek(e.startOfMonth((0,s.addDays)(t.end,-1))),d=Math.ceil((0,s.diffWeeks)(o,a));a=(0,s.addWeeks)(a,6-d)}return{start:n,end:a}}class G extends s.DateComponent{constructor(){super(...arguments),this.headerElRef=(0,l.createRef)()}renderSimpleLayout(e,t){let{props:n,context:a}=this,r=[],o=(0,s.getStickyHeaderDates)(a.options);return e&&r.push({type:"header",key:"header",isSticky:o,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),r.push({type:"body",key:"body",liquid:!0,chunk:{content:t}}),(0,l.createElement)(s.ViewContainer,{elClasses:["fc-daygrid"],viewSpec:a.viewSpec},(0,l.createElement)(s.SimpleScrollGrid,{liquid:!n.isHeightAuto&&!n.forPrint,collapsibleWidth:n.forPrint,cols:[],sections:r}))}renderHScrollLayout(e,t,n,a){let r=this.context.pluginHooks.scrollGridImpl;if(!r)throw new Error("No ScrollGrid implementation");let{props:o,context:d}=this,u=!o.forPrint&&(0,s.getStickyHeaderDates)(d.options),g=!o.forPrint&&(0,s.getStickyFooterScrollbar)(d.options),f=[];return e&&f.push({type:"header",key:"header",isSticky:u,chunks:[{key:"main",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),f.push({type:"body",key:"body",liquid:!0,chunks:[{key:"main",content:t}]}),g&&f.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"main",content:s.renderScrollShim}]}),(0,l.createElement)(s.ViewContainer,{elClasses:["fc-daygrid"],viewSpec:d.viewSpec},(0,l.createElement)(r,{liquid:!o.isHeightAuto&&!o.forPrint,forPrint:o.forPrint,collapsibleWidth:o.forPrint,colGroups:[{cols:[{span:n,minWidth:a}]}],sections:f}))}}class ae extends G{constructor(){super(...arguments),this.buildDayTableModel=(0,s.memoize)(j),this.headerRef=(0,l.createRef)(),this.tableRef=(0,l.createRef)()}render(){let{options:e,dateProfileGenerator:t}=this.context,{props:n}=this,a=this.buildDayTableModel(n.dateProfile,t),r=e.dayHeaders&&(0,l.createElement)(s.DayHeader,{ref:this.headerRef,dateProfile:n.dateProfile,dates:a.headerDates,datesRepDistinctDays:1===a.rowCnt}),o=d=>(0,l.createElement)(_,{ref:this.tableRef,dateProfile:n.dateProfile,dayTableModel:a,businessHours:n.businessHours,dateSelection:n.dateSelection,eventStore:n.eventStore,eventUiBases:n.eventUiBases,eventSelection:n.eventSelection,eventDrag:n.eventDrag,eventResize:n.eventResize,nextDayThreshold:e.nextDayThreshold,colGroupNode:d.tableColGroupNode,tableMinWidth:d.tableMinWidth,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.weekNumbers,expandRows:!n.isHeightAuto,headerAlignElRef:this.headerElRef,clientWidth:d.clientWidth,clientHeight:d.clientHeight,forPrint:n.forPrint});return e.dayMinWidth?this.renderHScrollLayout(r,o,a.colCnt,e.dayMinWidth):this.renderSimpleLayout(r,o)}}function j(i,e){let t=new s.DaySeriesModel(i.renderRange,e);return new s.DayTableModel(t,/year|month|week/.test(i.currentRangeUnit))}}}]);