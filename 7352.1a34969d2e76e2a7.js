(self.webpackChunkcd_moduleman=self.webpackChunkcd_moduleman||[]).push([[7352],{47352:(Or,Ve,Ie)=>{Ie.r(Ve),Ie.d(Ve,{afterMain:()=>Ge,afterRead:()=>Ye,afterWrite:()=>Qe,applyStyles:()=>Ae,arrow:()=>ot,auto:()=>ce,basePlacements:()=>K,beforeMain:()=>ze,beforeRead:()=>qe,beforeWrite:()=>Je,bottom:()=>T,clippingParents:()=>Fe,computeStyles:()=>Be,createPopper:()=>vr,createPopperBase:()=>ur,createPopperLite:()=>mr,detectOverflow:()=>ae,end:()=>Q,eventListeners:()=>Ce,flip:()=>lt,hide:()=>mt,left:()=>B,main:()=>Ue,modifierPhases:()=>Ze,offset:()=>ht,placements:()=>Ee,popper:()=>Z,popperGenerator:()=>me,popperOffsets:()=>Se,preventOverflow:()=>gt,read:()=>Xe,reference:()=>_e,right:()=>L,start:()=>_,top:()=>j,variationPlacements:()=>Oe,viewport:()=>xe,write:()=>Ke});var j="top",T="bottom",L="right",B="left",ce="auto",K=[j,T,L,B],_="start",Q="end",Fe="clippingParents",xe="viewport",Z="popper",_e="reference",Oe=K.reduce(function(e,t){return e.concat([t+"-"+_,t+"-"+Q])},[]),Ee=[].concat(K,[ce]).reduce(function(e,t){return e.concat([t,t+"-"+_,t+"-"+Q])},[]),qe="beforeRead",Xe="read",Ye="afterRead",ze="beforeMain",Ue="main",Ge="afterMain",Je="beforeWrite",Ke="write",Qe="afterWrite",Ze=[qe,Xe,Ye,ze,Ue,Ge,Je,Ke,Qe];function H(e){return e?(e.nodeName||"").toLowerCase():null}function M(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function q(e){return e instanceof M(e).Element||e instanceof Element}function S(e){return e instanceof M(e).HTMLElement||e instanceof HTMLElement}function Pe(e){return!(typeof ShadowRoot>"u")&&(e instanceof M(e).ShadowRoot||e instanceof ShadowRoot)}const Ae={name:"applyStyles",enabled:!0,phase:"write",fn:function Bt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var a=t.styles[r]||{},n=t.attributes[r]||{},i=t.elements[r];!S(i)||!H(i)||(Object.assign(i.style,a),Object.keys(n).forEach(function(p){var s=n[p];!1===s?i.removeAttribute(p):i.setAttribute(p,!0===s?"":s)}))})},effect:function Ct(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(a){var n=t.elements[a],i=t.attributes[a]||{},s=Object.keys(t.styles.hasOwnProperty(a)?t.styles[a]:r[a]).reduce(function(o,c){return o[c]="",o},{});!S(n)||!H(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(o){n.removeAttribute(o)}))})}},requires:["computeStyles"]};function N(e){return e.split("-")[0]}var X=Math.max,ue=Math.min,ee=Math.round;function Re(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function et(){return!/^((?!chrome|android).)*safari/i.test(Re())}function te(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var a=e.getBoundingClientRect(),n=1,i=1;t&&S(e)&&(n=e.offsetWidth>0&&ee(a.width)/e.offsetWidth||1,i=e.offsetHeight>0&&ee(a.height)/e.offsetHeight||1);var s=(q(e)?M(e):window).visualViewport,o=!et()&&r,c=(a.left+(o&&s?s.offsetLeft:0))/n,f=(a.top+(o&&s?s.offsetTop:0))/i,g=a.width/n,y=a.height/i;return{width:g,height:y,top:f,right:c+g,bottom:f+y,left:c,x:c,y:f}}function De(e){var t=te(e),r=e.offsetWidth,a=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-a)<=1&&(a=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:a}}function tt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Pe(r)){var a=t;do{if(a&&e.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function V(e){return M(e).getComputedStyle(e)}function Tt(e){return["table","td","th"].indexOf(H(e))>=0}function I(e){return((q(e)?e.ownerDocument:e.document)||window.document).documentElement}function le(e){return"html"===H(e)?e:e.assignedSlot||e.parentNode||(Pe(e)?e.host:null)||I(e)}function rt(e){return S(e)&&"fixed"!==V(e).position?e.offsetParent:null}function ie(e){for(var t=M(e),r=rt(e);r&&Tt(r)&&"static"===V(r).position;)r=rt(r);return r&&("html"===H(r)||"body"===H(r)&&"static"===V(r).position)?t:r||function Lt(e){var t=/firefox/i.test(Re());if(/Trident/i.test(Re())&&S(e)&&"fixed"===V(e).position)return null;var n=le(e);for(Pe(n)&&(n=n.host);S(n)&&["html","body"].indexOf(H(n))<0;){var i=V(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||t}function je(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function oe(e,t,r){return X(e,ue(t,r))}function nt(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function it(e,t){return t.reduce(function(r,a){return r[a]=e,r},{})}const ot={name:"arrow",enabled:!0,phase:"main",fn:function St(e){var t,r=e.state,a=e.name,n=e.options,i=r.elements.arrow,p=r.modifiersData.popperOffsets,s=N(r.placement),o=je(s),f=[B,L].indexOf(s)>=0?"height":"width";if(i&&p){var g=function(t,r){return nt("number"!=typeof(t="function"==typeof t?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:it(t,K))}(n.padding,r),y=De(i),u="y"===o?j:B,w="y"===o?T:L,v=r.rects.reference[f]+r.rects.reference[o]-p[o]-r.rects.popper[f],l=p[o]-r.rects.reference[o],b=ie(i),O=b?"y"===o?b.clientHeight||0:b.clientWidth||0:0,h=O/2-y[f]/2+(v/2-l/2),x=oe(g[u],h,O-y[f]-g[w]);r.modifiersData[a]=((t={})[o]=x,t.centerOffset=x-h,t)}},effect:function Wt(e){var t=e.state,a=e.options.element,n=void 0===a?"[data-popper-arrow]":a;null!=n&&("string"==typeof n&&!(n=t.elements.popper.querySelector(n))||tt(t.elements.popper,n)&&(t.elements.arrow=n))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function re(e){return e.split("-")[1]}var $t={top:"auto",right:"auto",bottom:"auto",left:"auto"};function st(e){var t,r=e.popper,a=e.popperRect,n=e.placement,i=e.variation,p=e.offsets,s=e.position,o=e.gpuAcceleration,c=e.adaptive,f=e.roundOffsets,g=e.isFixed,y=p.x,u=void 0===y?0:y,w=p.y,v=void 0===w?0:w,l="function"==typeof f?f({x:u,y:v}):{x:u,y:v};u=l.x,v=l.y;var b=p.hasOwnProperty("x"),O=p.hasOwnProperty("y"),E=B,d=j,m=window;if(c){var h=ie(r),x="clientHeight",A="clientWidth";h===M(r)&&"static"!==V(h=I(r)).position&&"absolute"===s&&(x="scrollHeight",A="scrollWidth"),(n===j||(n===B||n===L)&&i===Q)&&(d=T,v-=(g&&h===m&&m.visualViewport?m.visualViewport.height:h[x])-a.height,v*=o?1:-1),n!==B&&(n!==j&&n!==T||i!==Q)||(E=L,u-=(g&&h===m&&m.visualViewport?m.visualViewport.width:h[A])-a.width,u*=o?1:-1)}var C,P=Object.assign({position:s},c&&$t),W=!0===f?function Ht(e){var r=e.y,n=window.devicePixelRatio||1;return{x:ee(e.x*n)/n||0,y:ee(r*n)/n||0}}({x:u,y:v}):{x:u,y:v};return u=W.x,v=W.y,Object.assign({},P,o?((C={})[d]=O?"0":"",C[E]=b?"0":"",C.transform=(m.devicePixelRatio||1)<=1?"translate("+u+"px, "+v+"px)":"translate3d("+u+"px, "+v+"px, 0)",C):((t={})[d]=O?v+"px":"",t[E]=b?u+"px":"",t.transform="",t))}const Be={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function Nt(e){var t=e.state,r=e.options,a=r.gpuAcceleration,n=void 0===a||a,i=r.adaptive,p=void 0===i||i,s=r.roundOffsets,o=void 0===s||s,f={placement:N(t.placement),variation:re(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,st(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:p,roundOffsets:o})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,st(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:o})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var ve={passive:!0};const Ce={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function Vt(e){var t=e.state,r=e.instance,a=e.options,n=a.scroll,i=void 0===n||n,p=a.resize,s=void 0===p||p,o=M(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(f){f.addEventListener("scroll",r.update,ve)}),s&&o.addEventListener("resize",r.update,ve),function(){i&&c.forEach(function(f){f.removeEventListener("scroll",r.update,ve)}),s&&o.removeEventListener("resize",r.update,ve)}},data:{}};var It={left:"right",right:"left",bottom:"top",top:"bottom"};function de(e){return e.replace(/left|right|bottom|top/g,function(t){return It[t]})}var Ft={start:"end",end:"start"};function ft(e){return e.replace(/start|end/g,function(t){return Ft[t]})}function Te(e){var t=M(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Le(e){return te(I(e)).left+Te(e).scrollLeft}function ke(e){var t=V(e);return/auto|scroll|overlay|hidden/.test(t.overflow+t.overflowY+t.overflowX)}function pt(e){return["html","body","#document"].indexOf(H(e))>=0?e.ownerDocument.body:S(e)&&ke(e)?e:pt(le(e))}function se(e,t){var r;void 0===t&&(t=[]);var a=pt(e),n=a===(null==(r=e.ownerDocument)?void 0:r.body),i=M(a),p=n?[i].concat(i.visualViewport||[],ke(a)?a:[]):a,s=t.concat(p);return n?s:s.concat(se(le(p)))}function Me(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ct(e,t,r){return t===xe?Me(function _t(e,t){var r=M(e),a=I(e),n=r.visualViewport,i=a.clientWidth,p=a.clientHeight,s=0,o=0;if(n){i=n.width,p=n.height;var c=et();(c||!c&&"fixed"===t)&&(s=n.offsetLeft,o=n.offsetTop)}return{width:i,height:p,x:s+Le(e),y:o}}(e,r)):q(t)?function Xt(e,t){var r=te(e,!1,"fixed"===t);return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}(t,r):Me(function qt(e){var t,r=I(e),a=Te(e),n=null==(t=e.ownerDocument)?void 0:t.body,i=X(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=X(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-a.scrollLeft+Le(e),o=-a.scrollTop;return"rtl"===V(n||r).direction&&(s+=X(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:p,x:s,y:o}}(I(e)))}function ut(e){var o,t=e.reference,r=e.element,a=e.placement,n=a?N(a):null,i=a?re(a):null,p=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2;switch(n){case j:o={x:p,y:t.y-r.height};break;case T:o={x:p,y:t.y+t.height};break;case L:o={x:t.x+t.width,y:s};break;case B:o={x:t.x-r.width,y:s};break;default:o={x:t.x,y:t.y}}var c=n?je(n):null;if(null!=c){var f="y"===c?"height":"width";switch(i){case _:o[c]=o[c]-(t[f]/2-r[f]/2);break;case Q:o[c]=o[c]+(t[f]/2-r[f]/2)}}return o}function ae(e,t){void 0===t&&(t={});var a=t.placement,n=void 0===a?e.placement:a,i=t.strategy,p=void 0===i?e.strategy:i,s=t.boundary,o=void 0===s?Fe:s,c=t.rootBoundary,f=void 0===c?xe:c,g=t.elementContext,y=void 0===g?Z:g,u=t.altBoundary,w=void 0!==u&&u,v=t.padding,l=void 0===v?0:v,b=nt("number"!=typeof l?l:it(l,K)),E=e.rects.popper,d=e.elements[w?y===Z?_e:Z:y],m=function zt(e,t,r,a){var n="clippingParents"===t?function Yt(e){var t=se(le(e)),a=["absolute","fixed"].indexOf(V(e).position)>=0&&S(e)?ie(e):e;return q(a)?t.filter(function(n){return q(n)&&tt(n,a)&&"body"!==H(n)}):[]}(e):[].concat(t),i=[].concat(n,[r]),s=i.reduce(function(o,c){var f=ct(e,c,a);return o.top=X(f.top,o.top),o.right=ue(f.right,o.right),o.bottom=ue(f.bottom,o.bottom),o.left=X(f.left,o.left),o},ct(e,i[0],a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(q(d)?d:d.contextElement||I(e.elements.popper),o,f,p),h=te(e.elements.reference),x=ut({reference:h,element:E,strategy:"absolute",placement:n}),A=Me(Object.assign({},E,x)),R=y===Z?A:h,D={top:m.top-R.top+b.top,bottom:R.bottom-m.bottom+b.bottom,left:m.left-R.left+b.left,right:R.right-m.right+b.right},P=e.modifiersData.offset;if(y===Z&&P){var W=P[n];Object.keys(D).forEach(function(C){var Y=[L,T].indexOf(C)>=0?1:-1,z=[j,T].indexOf(C)>=0?"y":"x";D[C]+=W[z]*Y})}return D}const lt={name:"flip",enabled:!0,phase:"main",fn:function Jt(e){var t=e.state,r=e.options,a=e.name;if(!t.modifiersData[a]._skip){for(var n=r.mainAxis,i=void 0===n||n,p=r.altAxis,s=void 0===p||p,o=r.fallbackPlacements,c=r.padding,f=r.boundary,g=r.rootBoundary,y=r.altBoundary,u=r.flipVariations,w=void 0===u||u,v=r.allowedAutoPlacements,l=t.options.placement,b=N(l),E=o||(b!==l&&w?function Gt(e){if(N(e)===ce)return[];var t=de(e);return[ft(e),t,ft(t)]}(l):[de(l)]),d=[l].concat(E).reduce(function(ne,F){return ne.concat(N(F)===ce?function Ut(e,t){void 0===t&&(t={});var n=t.boundary,i=t.rootBoundary,p=t.padding,s=t.flipVariations,o=t.allowedAutoPlacements,c=void 0===o?Ee:o,f=re(t.placement),g=f?s?Oe:Oe.filter(function(w){return re(w)===f}):K,y=g.filter(function(w){return c.indexOf(w)>=0});0===y.length&&(y=g);var u=y.reduce(function(w,v){return w[v]=ae(e,{placement:v,boundary:n,rootBoundary:i,padding:p})[N(v)],w},{});return Object.keys(u).sort(function(w,v){return u[w]-u[v]})}(t,{placement:F,boundary:f,rootBoundary:g,padding:c,flipVariations:w,allowedAutoPlacements:v}):F)},[]),m=t.rects.reference,h=t.rects.popper,x=new Map,A=!0,R=d[0],D=0;D<d.length;D++){var P=d[D],W=N(P),C=re(P)===_,Y=[j,T].indexOf(W)>=0,z=Y?"width":"height",k=ae(t,{placement:P,boundary:f,rootBoundary:g,altBoundary:y,padding:c}),$=Y?C?L:B:C?T:j;m[z]>h[z]&&($=de($));var he=de($),U=[];if(i&&U.push(k[W]<=0),s&&U.push(k[$]<=0,k[he]<=0),U.every(function(ne){return ne})){R=P,A=!1;break}x.set(P,U)}if(A)for(var We=function(F){var pe=d.find(function(be){var G=x.get(be);if(G)return G.slice(0,F).every(function($e){return $e})});if(pe)return R=pe,"break"},fe=w?3:1;fe>0&&"break"!==We(fe);fe--);t.placement!==R&&(t.modifiersData[a]._skip=!0,t.placement=R,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function vt(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function dt(e){return[j,L,T,B].some(function(t){return e[t]>=0})}const mt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function Kt(e){var t=e.state,r=e.name,a=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,p=ae(t,{elementContext:"reference"}),s=ae(t,{altBoundary:!0}),o=vt(p,a),c=vt(s,n,i),f=dt(o),g=dt(c);t.modifiersData[r]={referenceClippingOffsets:o,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:g},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":g})}},ht={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function Zt(e){var t=e.state,a=e.name,n=e.options.offset,i=void 0===n?[0,0]:n,p=Ee.reduce(function(f,g){return f[g]=function Qt(e,t,r){var a=N(e),n=[B,j].indexOf(a)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,p=i[0],s=i[1];return p=p||0,s=(s||0)*n,[B,L].indexOf(a)>=0?{x:s,y:p}:{x:p,y:s}}(g,t.rects,i),f},{}),s=p[t.placement],c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s.x,t.modifiersData.popperOffsets.y+=c),t.modifiersData[a]=p}},Se={name:"popperOffsets",enabled:!0,phase:"read",fn:function er(e){var t=e.state;t.modifiersData[e.name]=ut({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},gt={name:"preventOverflow",enabled:!0,phase:"main",fn:function rr(e){var t=e.state,r=e.options,a=e.name,n=r.mainAxis,i=void 0===n||n,p=r.altAxis,s=void 0!==p&&p,y=r.tether,u=void 0===y||y,w=r.tetherOffset,v=void 0===w?0:w,l=ae(t,{boundary:r.boundary,rootBoundary:r.rootBoundary,padding:r.padding,altBoundary:r.altBoundary}),b=N(t.placement),O=re(t.placement),E=!O,d=je(b),m=function tr(e){return"x"===e?"y":"x"}(d),h=t.modifiersData.popperOffsets,x=t.rects.reference,A=t.rects.popper,R="function"==typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,D="number"==typeof R?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(h){if(i){var C,Y="y"===d?j:B,z="y"===d?T:L,k="y"===d?"height":"width",$=h[d],he=$+l[Y],U=$-l[z],ge=u?-A[k]/2:0,We=O===_?x[k]:A[k],fe=O===_?-A[k]:-x[k],ye=t.elements.arrow,ne=u&&ye?De(ye):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},pe=F[Y],be=F[z],G=oe(0,x[k],ne[k]),$e=E?x[k]/2-ge-G-pe-D.mainAxis:We-G-pe-D.mainAxis,hr=E?-x[k]/2+ge+G+be+D.mainAxis:fe+G+be+D.mainAxis,He=t.elements.arrow&&ie(t.elements.arrow),wt=null!=(C=P?.[d])?C:0,br=$+hr-wt,xt=oe(u?ue(he,$+$e-wt-(He?"y"===d?He.clientTop||0:He.clientLeft||0:0)):he,$,u?X(U,br):U);h[d]=xt,W[d]=xt-$}if(s){var Ot,J=h[m],we="y"===m?"height":"width",Et=J+l["x"===d?j:B],Pt=J-l["x"===d?T:L],Ne=-1!==[j,B].indexOf(b),At=null!=(Ot=P?.[m])?Ot:0,Rt=Ne?Et:J-x[we]-A[we]-At+D.altAxis,Dt=Ne?J+x[we]+A[we]-At-D.altAxis:Pt,jt=u&&Ne?function kt(e,t,r){var a=oe(e,t,r);return a>r?r:a}(Rt,J,Dt):oe(u?Rt:Et,J,u?Dt:Pt);h[m]=jt,W[m]=jt-J}t.modifiersData[a]=W}},requiresIfExists:["offset"]};function or(e,t,r){void 0===r&&(r=!1);var a=S(t),n=S(t)&&function ir(e){var t=e.getBoundingClientRect(),r=ee(t.width)/e.offsetWidth||1,a=ee(t.height)/e.offsetHeight||1;return 1!==r||1!==a}(t),i=I(t),p=te(e,n,r),s={scrollLeft:0,scrollTop:0},o={x:0,y:0};return(a||!a&&!r)&&(("body"!==H(t)||ke(i))&&(s=function nr(e){return e!==M(e)&&S(e)?function ar(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):Te(e)}(t)),S(t)?((o=te(t,!0)).x+=t.clientLeft,o.y+=t.clientTop):i&&(o.x=Le(i))),{x:p.left+s.scrollLeft-o.x,y:p.top+s.scrollTop-o.y,width:p.width,height:p.height}}function sr(e){var t=new Map,r=new Set,a=[];function n(i){r.add(i.name),[].concat(i.requires||[],i.requiresIfExists||[]).forEach(function(s){if(!r.has(s)){var o=t.get(s);o&&n(o)}}),a.push(i)}return e.forEach(function(i){t.set(i.name,i)}),e.forEach(function(i){r.has(i.name)||n(i)}),a}function pr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}var yt={placement:"bottom",modifiers:[],strategy:"absolute"};function bt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(a){return!(a&&"function"==typeof a.getBoundingClientRect)})}function me(e){void 0===e&&(e={});var r=e.defaultModifiers,a=void 0===r?[]:r,n=e.defaultOptions,i=void 0===n?yt:n;return function(s,o,c){void 0===c&&(c=i);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},yt,i),modifiersData:{},elements:{reference:s,popper:o},attributes:{},styles:{}},g=[],y=!1,u={state:f,setOptions:function(b){var O="function"==typeof b?b(f.options):b;v(),f.options=Object.assign({},i,f.options,O),f.scrollParents={reference:q(s)?se(s):s.contextElement?se(s.contextElement):[],popper:se(o)};var E=function fr(e){var t=sr(e);return Ze.reduce(function(r,a){return r.concat(t.filter(function(n){return n.phase===a}))},[])}(function cr(e){var t=e.reduce(function(r,a){var n=r[a.name];return r[a.name]=n?Object.assign({},n,a,{options:Object.assign({},n.options,a.options),data:Object.assign({},n.data,a.data)}):a,r},{});return Object.keys(t).map(function(r){return t[r]})}([].concat(a,f.options.modifiers)));return f.orderedModifiers=E.filter(function(P){return P.enabled}),function w(){f.orderedModifiers.forEach(function(l){var O=l.options,d=l.effect;if("function"==typeof d){var m=d({state:f,name:l.name,instance:u,options:void 0===O?{}:O});g.push(m||function(){})}})}(),u.update()},forceUpdate:function(){if(!y){var b=f.elements,O=b.reference,E=b.popper;if(bt(O,E)){f.rects={reference:or(O,ie(E),"fixed"===f.options.strategy),popper:De(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(P){return f.modifiersData[P.name]=Object.assign({},P.data)});for(var m=0;m<f.orderedModifiers.length;m++)if(!0!==f.reset){var h=f.orderedModifiers[m],x=h.fn,A=h.options;"function"==typeof x&&(f=x({state:f,options:void 0===A?{}:A,name:h.name,instance:u})||f)}else f.reset=!1,m=-1}}},update:pr(function(){return new Promise(function(l){u.forceUpdate(),l(f)})}),destroy:function(){v(),y=!0}};if(!bt(s,o))return u;function v(){g.forEach(function(l){return l()}),g=[]}return u.setOptions(c).then(function(l){!y&&c.onFirstUpdate&&c.onFirstUpdate(l)}),u}}var ur=me(),vr=me({defaultModifiers:[Ce,Se,Be,Ae,ht,lt,gt,ot,mt]}),mr=me({defaultModifiers:[Ce,Se,Be,Ae]})}}]);