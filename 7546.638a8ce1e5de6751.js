(self.webpackChunkcd_moduleman=self.webpackChunkcd_moduleman||[]).push([[7546],{7546:(je,y,P)=>{P.r(y),P.d(y,{Attribute:()=>I,EventContract:()=>We,EventContractContainer:()=>Ne,EventDispatcher:()=>Be,EventInfoWrapper:()=>O,EventPhase:()=>x,getActionCache:()=>q,isCaptureEventType:()=>L,isEarlyEventType:()=>Z,registerDispatcher:()=>Xe});const I={JSACTION:"jsaction"},T={JSACTION:"__jsaction",OWNER:"__owner"},M={};function U(t){return t[T.JSACTION]}function q(t){const e=U(t)??{};return v(t,e),e}function v(t,e){t[T.JSACTION]=e}const $=["mouseenter","mouseleave","pointerenter","pointerleave"],m=["focus","blur","error","load","toggle"],L=t=>m.indexOf(t)>=0,Q=["click","dblclick","focusin","focusout","keydown","keyup","keypress","mouseover","mouseout","submit","touchstart","touchend","touchmove","touchcancel","auxclick","change","compositionstart","compositionupdate","compositionend","beforeinput","input","select","copy","cut","paste","mousedown","mouseup","wheel","contextmenu","dragover","dragenter","dragleave","drop","dragstart","dragend","pointerdown","pointermove","pointerup","pointercancel","pointerover","pointerout","gotpointercapture","lostpointercapture","ended","loadedmetadata","pagehide","pageshow","visibilitychange","beforematch",...m],Z=t=>Q.indexOf(t)>=0;function ne(t,e){t.removeEventListener?t.removeEventListener(e.eventType,e.handler,e.capture):t.detachEvent&&t.detachEvent(`on${e.eventType}`,e.handler)}let g=typeof navigator<"u"&&/Macintosh/.test(navigator.userAgent);typeof navigator<"u"&&!/Opera/.test(navigator.userAgent)&&navigator,typeof navigator<"u"&&(/MSIE/.test(navigator.userAgent)||navigator),typeof navigator<"u"&&!/Opera|WebKit/.test(navigator.userAgent)&&navigator;const Se=typeof navigator<"u"&&/iPhone|iPad|iPod/.test(navigator.userAgent);class Ne{constructor(e){this.element=e,this.handlerInfos=[]}addEventListener(e,n){Se&&(this.element.style.cursor="pointer"),this.handlerInfos.push(function te(t,e,n){let r=!1;return L(e)&&(r=!0),t.addEventListener(e,n,r),{eventType:e,handler:n,capture:r}}(this.element,e,n(this.element)))}cleanUp(){for(let e=0;e<this.handlerInfos.length;e++)ne(this.element,this.handlerInfos[e]);this.handlerInfos=[]}}function u(t){return t.eventType}function C(t,e){t.eventType=e}function h(t){return t.event}function K(t,e){t.event=e}function b(t){return t.targetElement}function w(t,e){t.targetElement=e}function V(t){return t.eic}function f(t){return t.eia}function B(t,e,n){t.eia=[e,n]}function S(t){t.eia=void 0}function d(t){return t[1]}function F(t,e){t.eirp=e}function H(t){return t.eir}function Y(t,e){t.eir=e}function G(t){return{eventType:t.eventType,event:t.event,targetElement:t.targetElement,eic:t.eic,eia:t.eia,timeStamp:t.timeStamp,eirp:t.eirp,eiack:t.eiack,eir:t.eir}}class O{constructor(e){this.eventInfo=e}getEventType(){return u(this.eventInfo)}setEventType(e){C(this.eventInfo,e)}getEvent(){return h(this.eventInfo)}setEvent(e){K(this.eventInfo,e)}getTargetElement(){return b(this.eventInfo)}setTargetElement(e){w(this.eventInfo,e)}getContainer(){return V(this.eventInfo)}setContainer(e){!function Pe(t,e){t.eic=e}(this.eventInfo,e)}getTimestamp(){return function Ie(t){return t.timeStamp}(this.eventInfo)}setTimestamp(e){!function Me(t,e){t.timeStamp=e}(this.eventInfo,e)}getAction(){const e=f(this.eventInfo);if(e)return{name:e[0],element:e[1]}}setAction(e){e?B(this.eventInfo,e.name,e.element):S(this.eventInfo)}getIsReplay(){return function Ue(t){return t.eirp}(this.eventInfo)}setIsReplay(e){F(this.eventInfo,e)}getResolved(){return H(this.eventInfo)}setResolved(e){Y(this.eventInfo,e)}clone(){return new O(G(this.eventInfo))}}const Le={},_e=/\s*;\s*/;class ke{constructor({syntheticMouseEventSupport:e=!1}={}){this.a11yClickSupport=!1,this.updateEventInfoForA11yClick=void 0,this.preventDefaultForA11yClick=void 0,this.populateClickOnlyAction=void 0,this.syntheticMouseEventSupport=e}resolveEventType(e){"click"===u(e)&&function se(t){return g&&t.metaKey||!g&&t.ctrlKey||function ie(t){return 2===t.which||null==t.which&&4===t.button}(t)||t.shiftKey}(h(e))?C(e,"clickmod"):this.a11yClickSupport&&this.updateEventInfoForA11yClick(e)}resolveAction(e){H(e)||(this.populateAction(e,b(e)),Y(e,!0))}resolveParentAction(e){const n=f(e),r=n&&d(n);S(e);const s=r&&this.getParentNode(r);s&&this.populateAction(e,s)}populateAction(e,n){let r=n;for(;r&&r!==V(e)&&(r.nodeType===Node.ELEMENT_NODE&&this.populateActionOnElement(r,e),!f(e));)r=this.getParentNode(r);const s=f(e);if(s&&(this.a11yClickSupport&&this.preventDefaultForA11yClick(e),this.syntheticMouseEventSupport&&("mouseenter"===u(e)||"mouseleave"===u(e)||"pointerenter"===u(e)||"pointerleave"===u(e))))if(function le(t,e,n){const r=t.relatedTarget;return("mouseover"===t.type&&"mouseenter"===e||"mouseout"===t.type&&"mouseleave"===e||"pointerover"===t.type&&"pointerenter"===e||"pointerout"===t.type&&"pointerleave"===e)&&(!r||r!==n&&!n.contains(r))}(h(e),u(e),d(s))){const o=function Te(t,e){const n={};for(const r in t){if("srcElement"===r||"target"===r)continue;const o=t[r];"function"!=typeof o&&(n[r]=o)}return n.type="mouseover"===t.type?"mouseenter":"mouseout"===t.type?"mouseleave":"pointerover"===t.type?"pointerenter":"pointerleave",n.target=n.srcElement=e,n.bubbles=!1,n}(h(e),d(s));K(e,o),w(e,d(s))}else S(e)}getParentNode(e){const n=e[T.OWNER];if(n)return n;const r=e.parentNode;return"#document-fragment"===r?.nodeName?r?.host??null:r}populateActionOnElement(e,n){const r=this.parseActions(e),s=r[u(n)];void 0!==s&&B(n,s,e),this.a11yClickSupport&&this.populateClickOnlyAction(e,n,r)}parseActions(e){let n=U(e);if(!n){const r=e.getAttribute(I.JSACTION);if(r){if(n=function j(t){return M[t]}(r),!n){n={};const s=r.split(_e);for(let o=0;o<s.length;o++){const c=s[o];if(!c)continue;const E=c.indexOf(":"),p=-1!==E,A=p?c.substr(0,E).trim():"click",qe=p?c.substr(E+1).trim():c;n[A]=qe}!function J(t,e){M[t]=e}(r,n)}v(e,n)}else n=Le,v(e,n)}return n}addA11yClickSupport(e,n,r){this.a11yClickSupport=!0,this.updateEventInfoForA11yClick=e,this.preventDefaultForA11yClick=n,this.populateClickOnlyAction=r}}var N=function(t){return t[t.I_AM_THE_JSACTION_FRAMEWORK=0]="I_AM_THE_JSACTION_FRAMEWORK",t}(N||{});class Ke{constructor(e,{actionResolver:n,eventReplayer:r}={}){this.dispatchDelegate=e,this.eventReplayScheduled=!1,this.replayEventInfoWrappers=[],this.actionResolver=n,this.eventReplayer=r}dispatch(e){const n=new O(e);this.actionResolver?.resolveEventType(e),this.actionResolver?.resolveAction(e);const r=n.getAction();r&&function be(t,e){return"A"===t.tagName&&("click"===e.getEventType()||"clickmod"===e.getEventType())}(r.element,n)&&function re(t){t.preventDefault?t.preventDefault():t.returnValue=!1}(n.getEvent()),this.eventReplayer&&n.getIsReplay()?this.scheduleEventInfoWrapperReplay(n):this.dispatchDelegate(n)}scheduleEventInfoWrapperReplay(e){this.replayEventInfoWrappers.push(e),!this.eventReplayScheduled&&(this.eventReplayScheduled=!0,Promise.resolve().then(()=>{this.eventReplayScheduled=!1,this.eventReplayer(this.replayEventInfoWrappers)}))}}const X=Symbol.for("propagationStopped"),x={REPLAY:101};class Be{constructor(e){this.dispatchDelegate=e,this.actionResolver=new ke,this.dispatcher=new Ke(n=>{this.dispatchToDelegate(n)},{actionResolver:this.actionResolver})}dispatch(e){this.dispatcher.dispatch(e)}dispatchToDelegate(e){for(e.getIsReplay()&&function Ye(t){const e=t.getEvent();l(e,"target",t.getTargetElement()),l(e,"eventPhase",x.REPLAY),l(e,"preventDefault",()=>{throw new Error("`preventDefault` called during event replay.")}),l(e,"composedPath",()=>{throw new Error("`composedPath` called during event replay.")})}(e),function Fe(t){const e=t.getEvent(),n=()=>{e[X]=!0};l(e,"stopPropagation",n),l(e,"stopImmediatePropagation",n)}(e);e.getAction();){if(Ge(e),this.dispatchDelegate(e.getEvent(),e.getAction().name),e.getEvent()[X])return;this.actionResolver.resolveParentAction(e.eventInfo)}}}function Ge(t){const e=t.getEvent(),n=t.getAction()?.element;n&&l(e,"currentTarget",n,{configurable:!0})}function l(t,e,n,{configurable:r=!1}={}){Object.defineProperty(t,e,{value:n,configurable:r})}function Xe(t,e){t.ecrd(n=>{e.dispatch(n)},N.I_AM_THE_JSACTION_FRAMEWORK)}let We=(()=>{class t{static#e=this.MOUSE_SPECIAL_SUPPORT=!1;constructor(n,r){this.useActionResolver=r,this.eventHandlers={},this.browserEventTypeToExtraEventTypes={},this.dispatcher=null,this.queuedEventInfos=[],this.containerManager=n}handleEvent(n,r,s){const o=function me(t,e,n,r,s,o,c,E){return{eventType:t,event:e,targetElement:n,eic:r,timeStamp:s,eia:o,eirp:c,eiack:E}}(n,r,r.target,s,Date.now());this.handleEventInfo(o)}handleEventInfo(n){if(!this.dispatcher)return F(n,!0),void this.queuedEventInfos?.push(n);this.dispatcher(n)}addEvent(n,r){if(n in this.eventHandlers||!this.containerManager||!t.MOUSE_SPECIAL_SUPPORT&&$.indexOf(n)>=0)return;const s=(c,E,p)=>{this.handleEvent(c,E,p)};this.eventHandlers[n]=s;const o=function ee(t){return"mouseenter"===t?"mouseover":"mouseleave"===t?"mouseout":"pointerenter"===t?"pointerover":"pointerleave"===t?"pointerout":t}(r||n);if(o!==n){const c=this.browserEventTypeToExtraEventTypes[o]||[];c.push(n),this.browserEventTypeToExtraEventTypes[o]=c}this.containerManager.addEventListener(o,c=>E=>{s(n,E,c)})}replayEarlyEvents(n=window._ejsa){if(!n)return;const r=n.q;for(let o=0;o<r.length;o++){const c=r[o],E=this.getEventTypesForBrowserEventType(c.eventType);for(let p=0;p<E.length;p++){const A=G(c);C(A,E[p]),this.handleEventInfo(A)}}const s=n.h;W(n.c,n.et,s),W(n.c,n.etc,s,!0),delete window._ejsa}getEventTypesForBrowserEventType(n){const r=[];return this.eventHandlers[n]&&r.push(n),this.browserEventTypeToExtraEventTypes[n]&&r.push(...this.browserEventTypeToExtraEventTypes[n]),r}handler(n){return this.eventHandlers[n]}cleanUp(){this.containerManager.cleanUp(),this.containerManager=null,this.eventHandlers={},this.browserEventTypeToExtraEventTypes={},this.dispatcher=null,this.queuedEventInfos=[]}registerDispatcher(n,r){this.ecrd(n,r)}ecrd(n,r){if(this.dispatcher=n,this.queuedEventInfos?.length){for(let s=0;s<this.queuedEventInfos.length;s++)this.handleEventInfo(this.queuedEventInfos[s]);this.queuedEventInfos=null}}addA11yClickSupport(){}exportAddA11yClickSupport(){}}return t})();function W(t,e,n,r){for(let s=0;s<e.length;s++)t.removeEventListener(e[s],n,r)}}}]);