(self.webpackChunkcd_moduleman=self.webpackChunkcd_moduleman||[]).push([[1773],{79329:(v,_,t)=>{t.d(_,{Z:()=>r});var n=t(53858),a=t(25946);const r=(0,n.Z)(a.Z,"Map")},51740:(v,_,t)=>{t.d(_,{Z:()=>Mt});var o=t(93093);const i=function r(c,l){for(var h=c.length;h--;)if((0,o.Z)(c[h][0],l))return h;return-1};var f=Array.prototype.splice;function M(c){var l=-1,h=null==c?0:c.length;for(this.clear();++l<h;){var D=c[l];this.set(D[0],D[1])}}M.prototype.clear=function n(){this.__data__=[],this.size=0},M.prototype.delete=function g(c){var l=this.__data__,h=i(l,c);return!(h<0||(h==l.length-1?l.pop():f.call(l,h,1),--this.size,0))},M.prototype.get=function O(c){var l=this.__data__,h=i(l,c);return h<0?void 0:l[h][1]},M.prototype.has=function b(c){return i(this.__data__,c)>-1},M.prototype.set=function A(c,l){var h=this.__data__,D=i(h,c);return D<0?(++this.size,h.push([c,l])):h[D][1]=l,this};const m=M;var k=t(79329);const W=(0,t(53858).Z)(Object,"create");var G=Object.prototype.hasOwnProperty;var dt=Object.prototype.hasOwnProperty;function z(c){var l=-1,h=null==c?0:c.length;for(this.clear();++l<h;){var D=c[l];this.set(D[0],D[1])}}z.prototype.clear=function et(){this.__data__=W?W(null):{},this.size=0},z.prototype.delete=function Y(c){var l=this.has(c)&&delete this.__data__[c];return this.size-=l?1:0,l},z.prototype.get=function ct(c){var l=this.__data__;if(W){var h=l[c];return"__lodash_hash_undefined__"===h?void 0:h}return G.call(l,c)?l[c]:void 0},z.prototype.has=function lt(c){var l=this.__data__;return W?void 0!==l[c]:dt.call(l,c)},z.prototype.set=function ft(c,l){var h=this.__data__;return this.size+=this.has(c)?0:1,h[c]=W&&void 0===l?"__lodash_hash_undefined__":l,this};const at=z,q=function Ot(c,l){var h=c.__data__;return function bt(c){var l=typeof c;return"string"==l||"number"==l||"symbol"==l||"boolean"==l?"__proto__"!==c:null===c}(l)?h["string"==typeof l?"string":"hash"]:h.map};function V(c){var l=-1,h=null==c?0:c.length;for(this.clear();++l<h;){var D=c[l];this.set(D[0],D[1])}}V.prototype.clear=function gt(){this.size=0,this.__data__={hash:new at,map:new(k.Z||m),string:new at}},V.prototype.delete=function Rt(c){var l=q(this,c).delete(c);return this.size-=l?1:0,l},V.prototype.get=function Ct(c){return q(this,c).get(c)},V.prototype.has=function Pt(c){return q(this,c).has(c)},V.prototype.set=function mt(c,l){var h=q(this,c),D=h.size;return h.set(c,l),this.size+=h.size==D?0:1,this};const Ut=V;function X(c){var l=this.__data__=new m(c);this.size=l.size}X.prototype.clear=function w(){this.__data__=new m,this.size=0},X.prototype.delete=function K(c){var l=this.__data__,h=l.delete(c);return this.size=l.size,h},X.prototype.get=function H(c){return this.__data__.get(c)},X.prototype.has=function F(c){return this.__data__.has(c)},X.prototype.set=function _t(c,l){var h=this.__data__;if(h instanceof m){var D=h.__data__;if(!k.Z||D.length<199)return D.push([c,l]),this.size=++h.size,this;h=this.__data__=new Ut(D)}return h.set(c,l),this.size=h.size,this};const Mt=X},38492:(v,_,t)=>{t.d(_,{Z:()=>o});const o=t(25946).Z.Symbol},73487:(v,_,t)=>{t.d(_,{Z:()=>P});var o=t(24825),r=t(14177),i=t(85202),d=t(56667),f=t(87583),p=Object.prototype.hasOwnProperty;const P=function O(b,y){var A=(0,r.Z)(b),I=!A&&(0,o.Z)(b),M=!A&&!I&&(0,i.Z)(b),m=!A&&!I&&!M&&(0,f.Z)(b),w=A||I||M||m,S=w?function n(b,y){for(var A=-1,I=Array(b);++A<b;)I[A]=y(A);return I}(b.length,String):[],K=S.length;for(var L in b)(y||p.call(b,L))&&(!w||!("length"==L||M&&("offset"==L||"parent"==L)||m&&("buffer"==L||"byteLength"==L||"byteOffset"==L)||(0,d.Z)(L,K)))&&S.push(L);return S}},21481:(v,_,t)=>{t.d(_,{Z:()=>d});var n=t(43496),a=t(93093),r=Object.prototype.hasOwnProperty;const d=function i(f,g,p){var O=f[g];(!r.call(f,g)||!(0,a.Z)(O,p)||void 0===p&&!(g in f))&&(0,n.Z)(f,g,p)}},43496:(v,_,t)=>{t.d(_,{Z:()=>o});var n=t(52370);const o=function a(r,i,d){"__proto__"==i&&n.Z?(0,n.Z)(r,i,{configurable:!0,enumerable:!0,value:d,writable:!0}):r[i]=d}},77079:(v,_,t)=>{t.d(_,{Z:()=>M});var n=t(38492),a=Object.prototype,o=a.hasOwnProperty,r=a.toString,i=n.Z?n.Z.toStringTag:void 0;var p=Object.prototype.toString;var A=n.Z?n.Z.toStringTag:void 0;const M=function I(m){return null==m?void 0===m?"[object Undefined]":"[object Null]":A&&A in Object(m)?function d(m){var w=o.call(m,i),S=m[i];try{m[i]=void 0;var K=!0}catch{}var L=r.call(m);return K&&(w?m[i]=S:delete m[i]),L}(m):function O(m){return p.call(m)}(m)}},66932:(v,_,t)=>{t.d(_,{Z:()=>a});const a=function n(o){return function(r){return o(r)}}},83164:(v,_,t)=>{t.d(_,{Z:()=>i});const o=t(25946).Z.Uint8Array,i=function r(d){var f=new d.constructor(d.byteLength);return new o(f).set(new o(d)),f}},20634:(v,_,t)=>{t.d(_,{Z:()=>g});var n=t(25946),a="object"==typeof exports&&exports&&!exports.nodeType&&exports,o=a&&"object"==typeof module&&module&&!module.nodeType&&module,i=o&&o.exports===a?n.Z.Buffer:void 0,d=i?i.allocUnsafe:void 0;const g=function f(p,O){if(O)return p.slice();var P=p.length,b=d?d(P):new p.constructor(P);return p.copy(b),b}},9376:(v,_,t)=>{t.d(_,{Z:()=>o});var n=t(83164);const o=function a(r,i){var d=i?(0,n.Z)(r.buffer):r.buffer;return new r.constructor(d,r.byteOffset,r.length)}},68297:(v,_,t)=>{t.d(_,{Z:()=>a});const a=function n(o,r){var i=-1,d=o.length;for(r||(r=Array(d));++i<d;)r[i]=o[i];return r}},83276:(v,_,t)=>{t.d(_,{Z:()=>r});var n=t(21481),a=t(43496);const r=function o(i,d,f,g){var p=!f;f||(f={});for(var O=-1,P=d.length;++O<P;){var b=d[O],y=g?g(f[b],i[b],b,f,i):void 0;void 0===y&&(y=i[b]),p?(0,a.Z)(f,b,y):(0,n.Z)(f,b,y)}return f}},52370:(v,_,t)=>{t.d(_,{Z:()=>o});var n=t(53858);const o=function(){try{var r=(0,n.Z)(Object,"defineProperty");return r({},"",{}),r}catch{}}()},38346:(v,_,t)=>{t.d(_,{Z:()=>a});const a="object"==typeof global&&global&&global.Object===Object&&global},53858:(v,_,t)=>{t.d(_,{Z:()=>H});var B,n=t(42089),o=t(25946).Z["__core-js_shared__"],i=(B=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+B:"";var g=t(71999),p=t(94407),P=/^\[object .+?Constructor\]$/,M=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const w=function m(B){return!(!(0,g.Z)(B)||function d(B){return!!i&&i in B}(B))&&((0,n.Z)(B)?M:P).test((0,p.Z)(B))},H=function L(B,F){var N=function S(B,F){return B?.[F]}(B,F);return w(N)?N:void 0}},65650:(v,_,t)=>{t.d(_,{Z:()=>o});const o=(0,t(65820).Z)(Object.getPrototypeOf,Object)},13121:(v,_,t)=>{t.d(_,{Z:()=>g});var n=t(71999),a=Object.create;const r=function(){function p(){}return function(O){if(!(0,n.Z)(O))return{};if(a)return a(O);p.prototype=O;var P=new p;return p.prototype=void 0,P}}();var i=t(65650),d=t(11986);const g=function f(p){return"function"!=typeof p.constructor||(0,d.Z)(p)?{}:r((0,i.Z)(p))}},56667:(v,_,t)=>{t.d(_,{Z:()=>r});var a=/^(?:0|[1-9]\d*)$/;const r=function o(i,d){var f=typeof i;return!!(d=d??9007199254740991)&&("number"==f||"symbol"!=f&&a.test(i))&&i>-1&&i%1==0&&i<d}},11986:(v,_,t)=>{t.d(_,{Z:()=>o});var n=Object.prototype;const o=function a(r){var i=r&&r.constructor;return r===("function"==typeof i&&i.prototype||n)}},76594:(v,_,t)=>{t.d(_,{Z:()=>f});var n=t(38346),a="object"==typeof exports&&exports&&!exports.nodeType&&exports,o=a&&"object"==typeof module&&module&&!module.nodeType&&module,i=o&&o.exports===a&&n.Z.process;const f=function(){try{return o&&o.require&&o.require("util").types||i&&i.binding&&i.binding("util")}catch{}}()},65820:(v,_,t)=>{t.d(_,{Z:()=>a});const a=function n(o,r){return function(i){return o(r(i))}}},25946:(v,_,t)=>{t.d(_,{Z:()=>r});var n=t(38346),a="object"==typeof self&&self&&self.Object===Object&&self;const r=n.Z||a||Function("return this")()},94407:(v,_,t)=>{t.d(_,{Z:()=>r});var a=Function.prototype.toString;const r=function o(i){if(null!=i){try{return a.call(i)}catch{}try{return i+""}catch{}}return""}},93093:(v,_,t)=>{t.d(_,{Z:()=>a});const a=function n(o,r){return o===r||o!=o&&r!=r}},24825:(v,_,t)=>{t.d(_,{Z:()=>O});var n=t(77079),a=t(214);const i=function r(P){return(0,a.Z)(P)&&"[object Arguments]"==(0,n.Z)(P)};var d=Object.prototype,f=d.hasOwnProperty,g=d.propertyIsEnumerable;const O=i(function(){return arguments}())?i:function(P){return(0,a.Z)(P)&&f.call(P,"callee")&&!g.call(P,"callee")}},14177:(v,_,t)=>{t.d(_,{Z:()=>a});const a=Array.isArray},78706:(v,_,t)=>{t.d(_,{Z:()=>r});var n=t(42089),a=t(68696);const r=function o(i){return null!=i&&(0,a.Z)(i.length)&&!(0,n.Z)(i)}},85202:(v,_,t)=>{t.d(_,{Z:()=>O});var n=t(25946),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=r&&"object"==typeof module&&module&&!module.nodeType&&module,f=i&&i.exports===r?n.Z.Buffer:void 0;const O=(f?f.isBuffer:void 0)||function a(){return!1}},42089:(v,_,t)=>{t.d(_,{Z:()=>g});var n=t(77079),a=t(71999);const g=function f(p){if(!(0,a.Z)(p))return!1;var O=(0,n.Z)(p);return"[object Function]"==O||"[object GeneratorFunction]"==O||"[object AsyncFunction]"==O||"[object Proxy]"==O}},68696:(v,_,t)=>{t.d(_,{Z:()=>o});const o=function a(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=9007199254740991}},71999:(v,_,t)=>{t.d(_,{Z:()=>a});const a=function n(o){var r=typeof o;return null!=o&&("object"==r||"function"==r)}},214:(v,_,t)=>{t.d(_,{Z:()=>a});const a=function n(o){return null!=o&&"object"==typeof o}},22031:(v,_,t)=>{t.d(_,{Z:()=>P});var n=t(77079),a=t(65650),o=t(214),f=Function.prototype.toString,g=Object.prototype.hasOwnProperty,p=f.call(Object);const P=function O(b){if(!(0,o.Z)(b)||"[object Object]"!=(0,n.Z)(b))return!1;var y=(0,a.Z)(b);if(null===y)return!0;var A=g.call(y,"constructor")&&y.constructor;return"function"==typeof A&&A instanceof A&&f.call(A)==p}},87583:(v,_,t)=>{t.d(_,{Z:()=>rt});var n=t(77079),a=t(68696),o=t(214),Z={};Z["[object Float32Array]"]=Z["[object Float64Array]"]=Z["[object Int8Array]"]=Z["[object Int16Array]"]=Z["[object Int32Array]"]=Z["[object Uint8Array]"]=Z["[object Uint8ClampedArray]"]=Z["[object Uint16Array]"]=Z["[object Uint32Array]"]=!0,Z["[object Arguments]"]=Z["[object Array]"]=Z["[object ArrayBuffer]"]=Z["[object Boolean]"]=Z["[object DataView]"]=Z["[object Date]"]=Z["[object Error]"]=Z["[object Function]"]=Z["[object Map]"]=Z["[object Number]"]=Z["[object Object]"]=Z["[object RegExp]"]=Z["[object Set]"]=Z["[object String]"]=Z["[object WeakMap]"]=!1;var J=t(66932),Y=t(76594),Q=Y.Z&&Y.Z.isTypedArray;const rt=Q?(0,J.Z)(Q):function W(G){return(0,o.Z)(G)&&(0,a.Z)(G.length)&&!!Z[(0,n.Z)(G)]}},571:(v,_,t)=>{t.d(_,{Z:()=>b});var n=t(73487),a=t(71999),o=t(11986);var f=Object.prototype.hasOwnProperty;const p=function g(y){if(!(0,a.Z)(y))return function r(y){var A=[];if(null!=y)for(var I in Object(y))A.push(I);return A}(y);var A=(0,o.Z)(y),I=[];for(var M in y)"constructor"==M&&(A||!f.call(y,M))||I.push(M);return I};var O=t(78706);const b=function P(y){return(0,O.Z)(y)?(0,n.Z)(y,!0):p(y)}},36185:(v,_,t)=>{t.r(_),t.d(_,{BaseChartDirective:()=>Mt,NgChartsConfiguration:()=>It,NgChartsModule:()=>Kt,ThemeService:()=>X,baseColors:()=>c});var n=t(87675),a=t(62175),o=t(65893),r=t(51740),i=t(43496),d=t(93093);const g=function f(e,u,s){(void 0!==s&&!(0,d.Z)(e[u],s)||void 0===s&&!(u in e))&&(0,i.Z)(e,u,s)},b=function p(e){return function(u,s,E){for(var C=-1,T=Object(u),R=E(u),j=R.length;j--;){var U=R[e?j:++C];if(!1===s(T[U],U,T))break}return u}}();var y=t(20634),A=t(9376),I=t(68297),M=t(13121),m=t(24825),w=t(14177),S=t(78706),K=t(214);var B=t(85202),F=t(42089),N=t(71999),k=t(22031),tt=t(87583);const W=function Z(e,u){if(("constructor"!==u||"function"!=typeof e[u])&&"__proto__"!=u)return e[u]};var et=t(83276),J=t(571);const rt=function nt(e,u,s,E,C,T,R){var j=W(e,s),U=W(u,s),St=R.get(U);if(St)g(e,s,St);else{var x=T?T(j,U,s+"",e,u,R):void 0,ot=void 0===x;if(ot){var Bt=(0,w.Z)(U),Lt=!Bt&&(0,B.Z)(U),wt=!Bt&&!Lt&&(0,tt.Z)(U);x=U,Bt||Lt||wt?(0,w.Z)(j)?x=j:function L(e){return(0,K.Z)(e)&&(0,S.Z)(e)}(j)?x=(0,I.Z)(j):Lt?(ot=!1,x=(0,y.Z)(U,!0)):wt?(ot=!1,x=(0,A.Z)(U,!0)):x=[]:(0,k.Z)(U)||(0,m.Z)(U)?(x=j,(0,m.Z)(j)?x=function Y(e){return(0,et.Z)(e,(0,J.Z)(e))}(j):(!(0,N.Z)(j)||(0,F.Z)(j))&&(x=(0,M.Z)(U))):ot=!1}ot&&(R.set(U,x),C(x,U,E,T,R),R.delete(U)),g(e,s,x)}},ct=function G(e,u,s,E,C){e!==u&&b(u,function(T,R){if(C||(C=new r.Z),(0,N.Z)(T))rt(e,u,R,s,G,E,C);else{var j=E?E(W(e,R),T,R+"",e,u,C):void 0;void 0===j&&(j=T),g(e,R,j)}},J.Z)},st=function ut(e){return e},lt=function dt(e,u,s){switch(s.length){case 0:return e.call(u);case 1:return e.call(u,s[0]);case 2:return e.call(u,s[0],s[1]);case 3:return e.call(u,s[0],s[1],s[2])}return e.apply(u,s)};var it=Math.max;const z=function pt(e){return function(){return e}};var at=t(52370),Ot=Date.now;const Ct=function q(e){var u=0,s=0;return function(){var E=Ot(),C=16-(E-s);if(s=E,C>0){if(++u>=800)return arguments[0]}else u=0;return e.apply(void 0,arguments)}}(at.Z?function(e,u){return(0,at.Z)(e,"toString",{configurable:!0,enumerable:!1,value:z(u),writable:!0})}:st),Pt=function Tt(e,u){return Ct(function ht(e,u,s){return u=it(void 0===u?e.length-1:u,0),function(){for(var E=arguments,C=-1,T=it(E.length-u,0),R=Array(T);++C<T;)R[C]=E[u+C];C=-1;for(var j=Array(u+1);++C<u;)j[C]=E[C];return j[u]=s(R),lt(e,this,j)}}(e,u,st),e+"")};var At=t(56667);const _t=function V(e){return Pt(function(u,s){var E=-1,C=s.length,T=C>1?s[C-1]:void 0,R=C>2?s[2]:void 0;for(T=e.length>3&&"function"==typeof T?(C--,T):void 0,R&&function mt(e,u,s){if(!(0,N.Z)(s))return!1;var E=typeof u;return!!("number"==E?(0,S.Z)(s)&&(0,At.Z)(u,s.length):"string"==E&&u in s)&&(0,d.Z)(s[u],e)}(s[0],s[1],R)&&(T=C<3?void 0:T,C=1),u=Object(u);++E<C;){var j=s[E];j&&e(u,j,E,T)}return u})}(function(e,u,s){ct(e,u,s)});var Dt=t(33635);let X=(()=>{class e{constructor(){this.colorschemesOptions=new Dt.BehaviorSubject(void 0)}setColorschemesOptions(s){this.pColorschemesOptions=s,this.colorschemesOptions.next(s)}getColorschemesOptions(){return this.pColorschemesOptions}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=n.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Mt=(()=>{class e{constructor(s,E,C){this.zone=E,this.themeService=C,this.type="bar",this.plugins=[],this.chartClick=new n.EventEmitter,this.chartHover=new n.EventEmitter,this.subs=[],this.themeOverrides={},this.ctx=s.nativeElement.getContext("2d"),this.subs.push(this.themeService.colorschemesOptions.pipe((0,o.distinctUntilChanged)()).subscribe(T=>this.themeChanged(T)))}ngOnChanges(s){const E=["type"],C=Object.getOwnPropertyNames(s);if(C.some(T=>E.includes(T))||C.every(T=>s[T].isFirstChange()))this.render();else{const T=this.getChartConfiguration();this.chart&&(Object.assign(this.chart.config.data,T.data),this.chart.config.plugins&&Object.assign(this.chart.config.plugins,T.plugins),this.chart.config.options&&Object.assign(this.chart.config.options,T.options)),this.update()}}ngOnDestroy(){this.chart&&(this.chart.destroy(),this.chart=void 0),this.subs.forEach(s=>s.unsubscribe())}render(){return this.chart&&this.chart.destroy(),this.zone.runOutsideAngular(()=>this.chart=new a.Chart(this.ctx,this.getChartConfiguration()))}update(s){this.chart&&this.zone.runOutsideAngular(()=>this.chart?.update(s))}hideDataset(s,E){this.chart&&(this.chart.getDatasetMeta(s).hidden=E,this.update())}isDatasetHidden(s){return this.chart?.getDatasetMeta(s)?.hidden}toBase64Image(){return this.chart?.toBase64Image()}themeChanged(s){this.themeOverrides=s,this.chart&&(this.chart.config.options&&Object.assign(this.chart.config.options,this.getChartOptions()),this.update())}getChartOptions(){return _t({onHover:(s,E)=>{!this.chartHover.observed&&!this.chartHover.observers?.length||this.zone.run(()=>this.chartHover.emit({event:s,active:E}))},onClick:(s,E)=>{!this.chartClick.observed&&!this.chartClick.observers?.length||this.zone.run(()=>this.chartClick.emit({event:s,active:E}))}},this.themeOverrides,this.options,{plugins:{legend:{display:this.legend}}})}getChartConfiguration(){return{type:this.type,data:this.getChartData(),options:this.getChartOptions(),plugins:this.plugins}}getChartData(){return this.data?this.data:{labels:this.labels||[],datasets:this.datasets||[]}}}return e.\u0275fac=function(s){return new(s||e)(n.\u0275\u0275directiveInject(n.ElementRef),n.\u0275\u0275directiveInject(n.NgZone),n.\u0275\u0275directiveInject(X))},e.\u0275dir=n.\u0275\u0275defineDirective({type:e,selectors:[["canvas","baseChart",""]],inputs:{type:"type",legend:"legend",data:"data",options:"options",plugins:"plugins",labels:"labels",datasets:"datasets"},outputs:{chartClick:"chartClick",chartHover:"chartHover"},exportAs:["base-chart"],features:[n.\u0275\u0275NgOnChangesFeature]}),e})();const c=[[255,99,132],[54,162,235],[255,206,86],[231,233,237],[75,192,192],[151,187,205],[220,220,220],[247,70,74],[70,191,189],[253,180,92],[148,159,177],[77,83,96]],l={plugins:{colors:{enabled:!1}},datasets:{line:{backgroundColor:e=>h($(e.datasetIndex),.4),borderColor:e=>h($(e.datasetIndex),1),pointBackgroundColor:e=>h($(e.datasetIndex),1),pointBorderColor:"#fff"},bar:{backgroundColor:e=>h($(e.datasetIndex),.6),borderColor:e=>h($(e.datasetIndex),1)},get radar(){return this.line},doughnut:{backgroundColor:e=>h($(e.dataIndex),.6),borderColor:"#fff"},get pie(){return this.doughnut},polarArea:{backgroundColor:e=>h($(e.dataIndex),.6),borderColor:e=>h($(e.dataIndex),1)},get bubble(){return this.doughnut},get scatter(){return this.doughnut},get area(){return this.polarArea}}};function h(e,u){return"rgba("+e.concat(u).join(",")+")"}function D(e,u){return Math.floor(Math.random()*(u-e+1))+e}function $(e=0){return c[e]||function xt(){return[D(0,255),D(0,255),D(0,255)]}()}let It=(()=>{class e{constructor(){this.generateColors=!0}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=n.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();a.Chart.register(...a.registerables);let Kt=(()=>{class e{constructor(s){s?.plugins&&a.Chart.register(...s?.plugins);const E=_t(s?.generateColors?l:{},s?.defaults||{});a.defaults.set(E)}static forRoot(s){return{ngModule:e,providers:[{provide:It,useValue:s}]}}}return e.\u0275fac=function(s){return new(s||e)(n.\u0275\u0275inject(It,8))},e.\u0275mod=n.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=n.\u0275\u0275defineInjector({}),e})()}}]);