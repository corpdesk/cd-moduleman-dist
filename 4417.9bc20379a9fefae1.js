(self.webpackChunkcd_moduleman=self.webpackChunkcd_moduleman||[]).push([[4417,9309],{74417:(N,C,c)=>{c.r(C),c.d(C,{NgToggleComponent:()=>D,NgToggleConfig:()=>u,NgToggleModule:()=>L,get:()=>l,has:()=>p,isObject:()=>h,px:()=>s,translate:()=>f});var e=c(87675),_=c(30533),d=c(35228);function m(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"span",7),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngStyle",t.labelStyle),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.labelChecked," ")}}function v(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"span",8),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngStyle",t.labelStyle),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.labelUnchecked," ")}}function w(n,i){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,m,2,2,"span",5),e.\u0275\u0275template(2,v,2,2,"span",6),e.\u0275\u0275elementContainerEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.toggled),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.toggled)}}const y=function(n){return{"ng-toggle-focused":n}};let u=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const b="#0099CC",a="#fff";let S=0,D=(()=>{class n{constructor(t,o){this.config=t,this._elementRef=o,this.value=this.config.value||!0,this.name=this.config.name||"",this.disabled=this.config.disabled||!1,this.height=this.config.height||25,this.width=this.config.width||45,this.margin=this.config.margin||2,this.fontSize=this.config.fontSize||void 0,this.speed=this.config.speed||300,this.color=this.config.color,this.switchColor=this.config.switchColor,this.labels=this.config.labels||!0,this.fontColor=this.config.fontColor||void 0,this.values=this.config.values||{checked:!0,unchecked:!1},this.id="",this.ariaLabel=null,this.ariaLabelledby=null,this.cssColors=!1,this.change=new e.EventEmitter,this.valueChange=new e.EventEmitter,this.onChange=g=>{},this.onTouch=()=>{},this._uniqueId="ng-toggle-"+ ++S,this.id=this.id||this._uniqueId,this.ariaLabel=this.ariaLabel||this.name||this.id}ngOnInit(){this.setToogle()}onInput(t){this.value=t,this.onTouch(),this.onChange(this.value)}writeValue(t){this.value=t,this.setToogle()}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}setDisabledState(t){this.disabled=t}setToogle(){const t=this.value;let o=Object.values(this.values).findIndex(g=>g==t);o>-1&&(this.toggled="checked"==Object.keys(this.values)[o])}ngOnChanges(t){for(const o in t)"value"==o&&this.writeValue(t[o].currentValue)}get coreStyle(){return{width:s(this.width),height:s(this.height),transition:`all ${this.speed}ms`,backgroundColor:this.cssColors?null:this.disabled?this.colorDisabled:this.colorCurrent,borderRadius:s(Math.round(this.height/2))}}get buttonRadius(){const t=this.height-2*this.margin;return t>0?t:0}get distance(){return s(this.width-this.height+this.margin)}get buttonStyle(){const t=`all ${this.speed}ms`,o=s(this.margin),g=f(this.toggled?this.distance:o,o);let r=this.switchColor?this.switchColorCurrent:null;return r=this.disabled?this.switchColorDisabled:r,{width:s(this.buttonRadius),height:s(this.buttonRadius),transition:t,transform:g,background:r}}get labelStyle(){return{lineHeight:s(this.height),fontSize:this.fontSize?s(this.fontSize):null,color:this.fontColor?this.fontColorCurrent:null}}get colorChecked(){let{color:t}=this;return h(t)?l(t,"checked",b):t||b}get colorUnchecked(){return l(this.color,"unchecked","#e0e0e0")}get colorDisabled(){return l(this.color,"disabled","#dbdbdb")}get colorCurrent(){return this.toggled?this.colorChecked:this.colorUnchecked}get labelChecked(){return l(this.labels,"checked","")}get labelUnchecked(){return l(this.labels,"unchecked","")}get switchColorChecked(){return l(this.switchColor,"checked",a)}get switchColorUnchecked(){return l(this.switchColor,"unchecked",a)}get switchColorDisabled(){return l(this.switchColor,"disabled","silver")}get switchColorCurrent(){return h(this.switchColor)?this.toggled?this.switchColorChecked:this.switchColorUnchecked:this.switchColor||a}get fontColorChecked(){return l(this.fontColor,"checked",a)}get fontColorUnchecked(){return l(this.fontColor,"unchecked",a)}get fontColorDisabled(){return l(this.fontColor,"disabled",a)}get fontColorCurrent(){return h(this.fontColor)?this.disabled?this.fontColorDisabled:this.toggled?this.fontColorChecked:this.fontColorUnchecked:this.fontColor||a}get label(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:`${this._uniqueId}-label`}toggle(t){const o=!this.toggled;this.toggled=o,this.value=this.getValue(o),this.onTouch(),this.onChange(this.value),this.valueChange.emit(this.value)}getValue(t){return!0===t?this.values.checked:this.values.unchecked}onFocus(t){!this.focused&&t.relatedTarget&&(this.focused=!0)}onFocusout(t){this._elementRef.nativeElement.contains(t.relatedTarget)||(this.focused=!1,this.onTouch())}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(u),e.\u0275\u0275directiveInject(e.ElementRef))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ng-toggle"]],inputs:{value:"value",name:"name",disabled:"disabled",height:"height",width:"width",margin:"margin",fontSize:"fontSize",speed:"speed",color:"color",switchColor:"switchColor",labels:"labels",fontColor:"fontColor",values:"values",id:"id",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{change:"change",valueChange:"valueChange"},features:[e.\u0275\u0275ProvidersFeature([{provide:_.NG_VALUE_ACCESSOR,useExisting:(0,e.forwardRef)(()=>n),multi:!0}]),e.\u0275\u0275NgOnChangesFeature],decls:5,vars:16,consts:[[1,"ng-toggle-switch",3,"for"],["type","checkbox","role","checkbox",1,"ng-toggle-switch-input",3,"checked","disabled","change","focusin","focusout"],[1,"ng-toggle-switch-core",3,"ngClass","ngStyle"],[1,"ng-toggle-switch-button",3,"ngStyle"],[4,"ngIf"],["class","ng-toggle-switch-label ng-toggle-left",3,"ngStyle",4,"ngIf"],["class","ng-toggle-switch-label ng-toggle-right",3,"ngStyle",4,"ngIf"],[1,"ng-toggle-switch-label","ng-toggle-left",3,"ngStyle"],[1,"ng-toggle-switch-label","ng-toggle-right",3,"ngStyle"]],template:function(t,o){1&t&&(e.\u0275\u0275elementStart(0,"label",0)(1,"input",1),e.\u0275\u0275listener("change",function(r){return o.toggle(r)})("focusin",function(r){return o.onFocus(r)})("focusout",function(r){return o.onFocusout(r)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"div",2),e.\u0275\u0275element(3,"div",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,w,3,2,"ng-container",4),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("for",o.id),e.\u0275\u0275attribute("id",o.label),e.\u0275\u0275advance(1),e.\u0275\u0275property("checked",o.value)("disabled",o.disabled),e.\u0275\u0275attribute("id",o.id)("name",o.name)("aria-label",o.ariaLabel)("aria-labelledby",o.label)("aria-describedby",o.ariaDescribedby)("aria-checked",o.toggled),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(14,y,o.focused))("ngStyle",o.coreStyle),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngStyle",o.buttonStyle),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",o.labels))},dependencies:[d.NgClass,d.NgIf,d.NgStyle],styles:["label[_ngcontent-%COMP%]{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.ng-toggle-switch[_ngcontent-%COMP%]{display:inline-block;position:relative;vertical-align:middle;-webkit-user-select:none;user-select:none;font-size:10px;cursor:pointer}.ng-toggle-switch[_ngcontent-%COMP%]   .ng-toggle-switch-input[_ngcontent-%COMP%]{opacity:0;position:absolute;width:1px;height:1px}.ng-toggle-switch[_ngcontent-%COMP%]   .ng-toggle-switch-label[_ngcontent-%COMP%]{position:absolute;top:0;font-weight:600;color:#fff;z-index:1}.ng-toggle-switch[_ngcontent-%COMP%]   .ng-toggle-switch-label.ng-toggle-left[_ngcontent-%COMP%]{left:10px}.ng-toggle-switch[_ngcontent-%COMP%]   .ng-toggle-switch-label.ng-toggle-right[_ngcontent-%COMP%]{right:10px}.ng-toggle-switch[_ngcontent-%COMP%]   .ng-toggle-switch-core[_ngcontent-%COMP%]{display:block;position:relative;box-sizing:border-box;outline:0;margin:0;transition:border-color .3s,background-color .3s;-webkit-user-select:none;user-select:none}.ng-toggle-switch[_ngcontent-%COMP%]   .ng-toggle-switch-core[_ngcontent-%COMP%]   .ng-toggle-switch-button[_ngcontent-%COMP%]{display:block;position:absolute;overflow:hidden;top:0;left:0;border-radius:100%;background-color:#fff;z-index:2}.ng-toggle-switch.disabled[_ngcontent-%COMP%]{pointer-events:none;opacity:.6}.ng-toggle-focused[_ngcontent-%COMP%]{box-shadow:0 0 4px 3px #999}"]}),n})();const h=n=>"object"==typeof n,p=(n,i)=>h(n)&&n.hasOwnProperty(i),l=(n,i,t)=>p(n,i)?n[i]:t,s=n=>`${n}px`,f=(n,i)=>`translate(${n}, ${i})`;let L=(()=>{class n{static forRoot(t={}){return{ngModule:n,providers:[{provide:u,useValue:t}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({providers:[u],imports:[d.CommonModule]}),n})()}}]);