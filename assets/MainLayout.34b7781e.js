import{u as ft,a as vt,v as mt,g as ve,b as De,c as ht,d as $e,e as gt,f as bt,h as wt,Q as te,i as me}from"./QBtn.134e59bd.js";import{c as P,h as K,a as Ae,b as yt,d as Ne}from"./render.73749652.js";import{c as m,h as q,r as S,i as we,s as je,g as E,P as pt,p as Le,n as D,a as Pe,w as _,o as A,b as B,d as xt,l as N,e as Ee,f as Ke,j as qt,T as kt,k as Ie,m as ye,q as St,t as _t,u as pe,v as Ge,x as Q,y as xe,z as ae,A as Ue,B as Ct,C as Z,_ as Tt,D as zt,E as $t,F as Lt,G as k,H as y,I as F,J as H,K as Pt}from"./index.05dfaa04.js";var Et=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const l=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>q("div",{class:l.value},K(o.default))}}),R=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const l=m(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>q("div",{class:l.value},K(o.default))}});const re={dark:{type:Boolean,default:null}};function ue(e,o){return m(()=>e.dark===null?o.dark.isActive:e.dark)}var V=P({name:"QItem",props:{...re,...ft,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:l}){const{proxy:{$q:n}}=E(),t=ue(e,n),{hasLink:s,linkAttrs:i,linkClass:f,linkTag:u,navigateOnClick:r}=vt(),d=S(null),w=S(null),x=m(()=>e.clickable===!0||s.value===!0||e.tag==="label"),a=m(()=>e.disable!==!0&&x.value===!0),p=m(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=m(()=>{if(e.insetLevel===void 0)return null;const h=n.lang.rtl===!0?"Right":"Left";return{["padding"+h]:16+e.insetLevel*56+"px"}});function z(h){a.value===!0&&(w.value!==null&&(h.qKeyEvent!==!0&&document.activeElement===d.value?w.value.focus():document.activeElement===w.value&&d.value.focus()),r(h))}function $(h){if(a.value===!0&&we(h,13)===!0){je(h),h.qKeyEvent=!0;const g=new MouseEvent("click",h);g.qKeyEvent=!0,d.value.dispatchEvent(g)}l("keyup",h)}function c(){const h=Ae(o.default,[]);return a.value===!0&&h.unshift(q("div",{class:"q-focus-helper",tabindex:-1,ref:w})),h}return()=>{const h={ref:d,class:p.value,style:T.value,role:"listitem",onClick:z,onKeyup:$};return a.value===!0?(h.tabindex=e.tabindex||"0",Object.assign(h,i.value)):x.value===!0&&(h["aria-disabled"]="true"),q(u.value,h,c())}}});const Ht={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},he={xs:2,sm:4,md:8,lg:16,xl:24};var ge=P({name:"QSeparator",props:{...re,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const o=E(),l=ue(e,o.proxy.$q),n=m(()=>e.vertical===!0?"vertical":"horizontal"),t=m(()=>` q-separator--${n.value}`),s=m(()=>e.inset!==!1?`${t.value}-${Ht[e.inset]}`:""),i=m(()=>`q-separator${t.value}${s.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(l.value===!0?" q-separator--dark":"")),f=m(()=>{const u={};if(e.size!==void 0&&(u[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const r=e.spaced===!0?`${he.md}px`:e.spaced in he?`${he[e.spaced]}px`:e.spaced,d=e.vertical===!0?["Left","Right"]:["Top","Bottom"];u[`margin${d[0]}`]=u[`margin${d[1]}`]=r}return u});return()=>q("hr",{class:i.value,style:f.value,"aria-orientation":n.value})}}),Bt=P({name:"QList",props:{...re,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const l=E(),n=ue(e,l.proxy.$q),t=m(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>q(e.tag,{class:t.value},K(o.default))}});function Qt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),pt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Ft={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Rt({showing:e,avoidEmit:o,configureAnchorEl:l}){const{props:n,proxy:t,emit:s}=E(),i=S(null);let f;function u(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};l===void 0&&(Object.assign(r,{hide(a){t.hide(a)},toggle(a){t.toggle(a),a.qAnchorHandled=!0},toggleKey(a){we(a,13)===!0&&r.toggle(a)},contextClick(a){t.hide(a),Le(a),D(()=>{t.show(a),a.qAnchorHandled=!0})},prevent:Le,mobileTouch(a){if(r.mobileCleanup(a),u(a)!==!0)return;t.hide(a),i.value.classList.add("non-selectable");const p=a.target;Pe(r,"anchor",[[p,"touchmove","mobileCleanup","passive"],[p,"touchend","mobileCleanup","passive"],[p,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{t.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),clearTimeout(f),e.value===!0&&a!==void 0&&Qt()}}),l=function(a=n.contextMenu){if(n.noParentEvent===!0||i.value===null)return;let p;a===!0?t.$q.platform.is.mobile===!0?p=[[i.value,"touchstart","mobileTouch","passive"]]:p=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:p=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],Pe(r,"anchor",p)});function d(){xt(r,"anchor")}function w(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;l()}function x(){if(n.target===!1||n.target===""||t.$el.parentNode===null)i.value=null;else if(n.target===!0)w(t.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,l()):(i.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return _(()=>n.contextMenu,a=>{i.value!==null&&(d(),l(a))}),_(()=>n.target,()=>{i.value!==null&&d(),x()}),_(()=>n.noParentEvent,a=>{i.value!==null&&(a===!0?d():l())}),A(()=>{x(),o!==!0&&n.modelValue===!0&&i.value===null&&s("update:modelValue",!1)}),B(()=>{clearTimeout(f),d()}),{anchorEl:i,canShow:u,anchorEvents:r}}function Vt(e,o){const l=S(null);let n;function t(f,u){const r=`${u!==void 0?"add":"remove"}EventListener`,d=u!==void 0?u:n;f!==window&&f[r]("scroll",d,N.passive),window[r]("scroll",d,N.passive),n=u}function s(){l.value!==null&&(t(l.value),l.value=null)}const i=_(()=>e.noParentEvent,()=>{l.value!==null&&(s(),o())});return B(i),{localScrollTarget:l,unconfigureScrollTarget:s,changeScrollEvent:t}}const Mt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Ot=["beforeShow","show","beforeHide","hide"];function Wt({showing:e,canShow:o,hideOnRouteChange:l,handleShow:n,handleHide:t,processOnMount:s}){const i=E(),{props:f,emit:u,proxy:r}=i;let d;function w(c){e.value===!0?p(c):x(c)}function x(c){if(f.disable===!0||c!==void 0&&c.qAnchorHandled===!0||o!==void 0&&o(c)!==!0)return;const h=f["onUpdate:modelValue"]!==void 0;h===!0&&(u("update:modelValue",!0),d=c,D(()=>{d===c&&(d=void 0)})),(f.modelValue===null||h===!1)&&a(c)}function a(c){e.value!==!0&&(e.value=!0,u("beforeShow",c),n!==void 0?n(c):u("show",c))}function p(c){if(f.disable===!0)return;const h=f["onUpdate:modelValue"]!==void 0;h===!0&&(u("update:modelValue",!1),d=c,D(()=>{d===c&&(d=void 0)})),(f.modelValue===null||h===!1)&&T(c)}function T(c){e.value!==!1&&(e.value=!1,u("beforeHide",c),t!==void 0?t(c):u("hide",c))}function z(c){f.disable===!0&&c===!0?f["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):c===!0!==e.value&&(c===!0?a:T)(d)}_(()=>f.modelValue,z),l!==void 0&&mt(i)===!0&&_(()=>r.$route.fullPath,()=>{l.value===!0&&e.value===!0&&p()}),s===!0&&A(()=>{z(f.modelValue)});const $={show:x,hide:p,toggle:w};return Object.assign(r,$),$}let X=[],J=[];function Xe(e){J=J.filter(o=>o!==e)}function Dt(e){Xe(e),J.push(e)}function He(e){Xe(e),J.length===0&&X.length>0&&(X[X.length-1](),X=[])}function At(e){J.length===0?e():X.push(e)}let Nt=document.body;function jt(e){const o=document.createElement("div");if(e!==void 0&&(o.id=e),Ee.globalNodes!==void 0){const l=Ee.globalNodes.class;l!==void 0&&(o.className=l)}return Nt.appendChild(o),o}function Kt(e){e.remove()}const Y=[];function It(e,o){do{if(e.$options.name==="QMenu"){if(e.hide(o),e.$props.separateClosePopup===!0)return ve(e)}else if(e.__qPortal===!0){const l=ve(e);return l!==void 0&&l.$options.name==="QPopupProxy"?(e.hide(o),l):e}e=ve(e)}while(e!=null)}function Gt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ut(e,o,l,n){const t=S(!1),s=S(!1);let i=null;const f={},u=n===!0&&Gt(e);function r(w){if(w===!0){He(f),s.value=!0;return}s.value=!1,t.value===!1&&(u===!1&&i===null&&(i=jt()),t.value=!0,Y.push(e.proxy),Dt(f))}function d(w){if(s.value=!1,w!==!0)return;He(f),t.value=!1;const x=Y.indexOf(e.proxy);x!==-1&&Y.splice(x,1),i!==null&&(Kt(i),i=null)}return Ke(()=>{d(!0)}),e.proxy.__qPortal=!0,qt(e.proxy,"contentEl",()=>o.value),{showPortal:r,hidePortal:d,portalIsActive:t,portalIsAccessible:s,renderPortal:()=>u===!0?l():t.value===!0?[q(kt,{to:i},l())]:void 0}}const Xt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Yt(e,o=()=>{},l=()=>{}){return{transitionProps:m(()=>{const n=`q-transition--${e.transitionShow||o()}`,t=`q-transition--${e.transitionHide||l()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${t}-leave-from`,leaveActiveClass:`${t}-leave-active`,leaveToClass:`${t}-leave-to`}}),transitionStyle:m(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Jt(){let e;const o=E();function l(){e=void 0}return Ie(l),B(l),{removeTick:l,registerTick(n){e=n,D(()=>{e===n&&(De(o)===!1&&e(),e=void 0)})}}}function Zt(){let e;const o=E();function l(){clearTimeout(e)}return Ie(l),B(l),{removeTimeout:l,registerTimeout(n,t){clearTimeout(e),De(o)===!1&&(e=setTimeout(n,t))}}}const en=[null,document,document.body,document.scrollingElement,document.documentElement];function Ye(e,o){let l=ht(o);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return en.includes(l)?window:l}function tn(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function nn(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ee;function ne(){if(ee!==void 0)return ee;const e=document.createElement("p"),o=document.createElement("div");$e(e,{width:"100%",height:"200px"}),$e(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const l=e.offsetWidth;o.style.overflow="scroll";let n=e.offsetWidth;return l===n&&(n=o.clientWidth),o.remove(),ee=l-n,ee}const M=[];let j;function on(e){j=e.keyCode===27}function ln(){j===!0&&(j=!1)}function an(e){j===!0&&(j=!1,we(e,27)===!0&&M[M.length-1](e))}function Je(e){window[e]("keydown",on),window[e]("blur",ln),window[e]("keyup",an),j=!1}function rn(e){ye.is.desktop===!0&&(M.push(e),M.length===1&&Je("addEventListener"))}function Be(e){const o=M.indexOf(e);o>-1&&(M.splice(o,1),M.length===0&&Je("removeEventListener"))}const O=[];function Ze(e){O[O.length-1](e)}function un(e){ye.is.desktop===!0&&(O.push(e),O.length===1&&document.body.addEventListener("focusin",Ze))}function sn(e){const o=O.indexOf(e);o>-1&&(O.splice(o,1),O.length===0&&document.body.removeEventListener("focusin",Ze))}let et;const{notPassiveCapture:oe}=N,W=[];function le(e){clearTimeout(et);const o=e.target;if(o===void 0||o.nodeType===8||o.classList.contains("no-pointer-events")===!0)return;let l=Y.length-1;for(;l>=0;){const n=Y[l].$;if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;l--}for(let n=W.length-1;n>=0;n--){const t=W[n];if((t.anchorEl.value===null||t.anchorEl.value.contains(o)===!1)&&(o===document.body||t.innerRef.value!==null&&t.innerRef.value.contains(o)===!1))e.qClickOutside=!0,t.onClickOutside(e);else return}}function cn(e){W.push(e),W.length===1&&(document.addEventListener("mousedown",le,oe),document.addEventListener("touchstart",le,oe))}function Qe(e){const o=W.findIndex(l=>l===e);o>-1&&(W.splice(o,1),W.length===0&&(clearTimeout(et),document.removeEventListener("mousedown",le,oe),document.removeEventListener("touchstart",le,oe)))}let Fe,Re;function Ve(e){const o=e.split(" ");return o.length!==2?!1:["top","center","bottom"].includes(o[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(o[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function dn(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const be={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{be[`${e}#ltr`]=e,be[`${e}#rtl`]=e});function Me(e,o){const l=e.split(" ");return{vertical:l[0],horizontal:be[`${l[1]}#${o===!0?"rtl":"ltr"}`]}}function fn(e,o){let{top:l,left:n,right:t,bottom:s,width:i,height:f}=e.getBoundingClientRect();return o!==void 0&&(l-=o[1],n-=o[0],s+=o[1],t+=o[0],i+=o[0],f+=o[1]),{top:l,left:n,right:t,bottom:s,width:i,height:f,middle:n+(t-n)/2,center:l+(s-l)/2}}function vn(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function mn(e){if(ye.is.ios===!0&&window.visualViewport!==void 0){const f=document.body.style,{offsetLeft:u,offsetTop:r}=window.visualViewport;u!==Fe&&(f.setProperty("--q-pe-left",u+"px"),Fe=u),r!==Re&&(f.setProperty("--q-pe-top",r+"px"),Re=r)}let o;const{scrollLeft:l,scrollTop:n}=e.el;if(e.absoluteOffset===void 0)o=fn(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:f,left:u}=e.anchorEl.getBoundingClientRect(),r=f+e.absoluteOffset.top,d=u+e.absoluteOffset.left;o={top:r,left:d,width:1,height:1,right:d+1,center:r,middle:d,bottom:r+1}}let t={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(t.minWidth=o.width+"px",e.cover===!0&&(t.minHeight=o.height+"px")),Object.assign(e.el.style,t);const s=vn(e.el),i={top:o[e.anchorOrigin.vertical]-s[e.selfOrigin.vertical],left:o[e.anchorOrigin.horizontal]-s[e.selfOrigin.horizontal]};hn(i,o,s,e.anchorOrigin,e.selfOrigin),t={top:i.top+"px",left:i.left+"px"},i.maxHeight!==void 0&&(t.maxHeight=i.maxHeight+"px",o.height>i.maxHeight&&(t.minHeight=t.maxHeight)),i.maxWidth!==void 0&&(t.maxWidth=i.maxWidth+"px",o.width>i.maxWidth&&(t.minWidth=t.maxWidth)),Object.assign(e.el.style,t),e.el.scrollTop!==n&&(e.el.scrollTop=n),e.el.scrollLeft!==l&&(e.el.scrollLeft=l)}function hn(e,o,l,n,t){const s=l.bottom,i=l.right,f=ne(),u=window.innerHeight-f,r=document.body.clientWidth;if(e.top<0||e.top+s>u)if(t.vertical==="center")e.top=o[n.vertical]>u/2?Math.max(0,u-s):0,e.maxHeight=Math.min(s,u);else if(o[n.vertical]>u/2){const d=Math.min(u,n.vertical==="center"?o.center:n.vertical===t.vertical?o.bottom:o.top);e.maxHeight=Math.min(s,d),e.top=Math.max(0,d-s)}else e.top=Math.max(0,n.vertical==="center"?o.center:n.vertical===t.vertical?o.top:o.bottom),e.maxHeight=Math.min(s,u-e.top);if(e.left<0||e.left+i>r)if(e.maxWidth=Math.min(i,r),t.horizontal==="middle")e.left=o[n.horizontal]>r/2?Math.max(0,r-i):0;else if(o[n.horizontal]>r/2){const d=Math.min(r,n.horizontal==="middle"?o.middle:n.horizontal===t.horizontal?o.right:o.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?o.middle:n.horizontal===t.horizontal?o.left:o.right),e.maxWidth=Math.min(i,r-e.left)}var gn=P({name:"QMenu",inheritAttrs:!1,props:{...Ft,...Mt,...re,...Xt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ve},self:{type:String,validator:Ve},offset:{type:Array,validator:dn},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Ot,"click","escapeKey"],setup(e,{slots:o,emit:l,attrs:n}){let t=null,s,i,f;const u=E(),{proxy:r}=u,{$q:d}=r,w=S(null),x=S(!1),a=m(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),p=ue(e,d),{registerTick:T,removeTick:z}=Jt(),{registerTimeout:$}=Zt(),{transitionProps:c,transitionStyle:h}=Yt(e),{localScrollTarget:g,changeScrollEvent:v,unconfigureScrollTarget:C}=Vt(e,Te),{anchorEl:L,canShow:I}=Rt({showing:x}),{hide:G}=Wt({showing:x,canShow:I,handleShow:at,handleHide:rt,hideOnRouteChange:a,processOnMount:!0}),{showPortal:qe,hidePortal:ke,renderPortal:nt}=Ut(u,w,st),se={anchorEl:L,innerRef:w,onClickOutside(b){if(e.persistent!==!0&&x.value===!0)return G(b),(b.type==="touchstart"||b.target.classList.contains("q-dialog__backdrop"))&&je(b),!0}},Se=m(()=>Me(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),ot=m(()=>e.cover===!0?Se.value:Me(e.self||"top start",d.lang.rtl)),lt=m(()=>(e.square===!0?" q-menu--square":"")+(p.value===!0?" q-menu--dark q-dark":"")),it=m(()=>e.autoClose===!0?{onClick:ut}:{}),_e=m(()=>x.value===!0&&e.persistent!==!0);_(_e,b=>{b===!0?(rn(de),cn(se)):(Be(de),Qe(se))});function ce(){At(()=>{let b=w.value;b&&b.contains(document.activeElement)!==!0&&(b=b.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||b.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||b.querySelector("[autofocus], [data-autofocus]")||b,b.focus({preventScroll:!0}))})}function at(b){if(t=e.noRefocus===!1?document.activeElement:null,un(ze),qe(),Te(),s=void 0,b!==void 0&&(e.touchPosition||e.contextMenu)){const fe=St(b);if(fe.left!==void 0){const{top:ct,left:dt}=L.value.getBoundingClientRect();s={left:fe.left-dt,top:fe.top-ct}}}i===void 0&&(i=_(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,U)),e.noFocus!==!0&&document.activeElement.blur(),T(()=>{U(),e.noFocus!==!0&&ce()}),$(()=>{d.platform.is.ios===!0&&(f=e.autoClose,w.value.click()),U(),qe(!0),l("show",b)},e.transitionDuration)}function rt(b){z(),ke(),Ce(!0),t!==null&&(b===void 0||b.qClickOutside!==!0)&&(((b&&b.type.indexOf("key")===0?t.closest('[tabindex]:not([tabindex^="-"])'):void 0)||t).focus(),t=null),$(()=>{ke(!0),l("hide",b)},e.transitionDuration)}function Ce(b){s=void 0,i!==void 0&&(i(),i=void 0),(b===!0||x.value===!0)&&(sn(ze),C(),Qe(se),Be(de)),b!==!0&&(t=null)}function Te(){(L.value!==null||e.scrollTarget!==void 0)&&(g.value=Ye(L.value,e.scrollTarget),v(g.value,U))}function ut(b){f!==!0?(It(r,b),l("click",b)):f=!1}function ze(b){_e.value===!0&&e.noFocus!==!0&&gt(w.value,b.target)!==!0&&ce()}function de(b){l("escapeKey"),G(b)}function U(){const b=w.value;b===null||L.value===null||mn({el:b,offset:e.offset,anchorEl:L.value,anchorOrigin:Se.value,selfOrigin:ot.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function st(){return q(_t,c.value,()=>x.value===!0?q("div",{role:"menu",...n,ref:w,tabindex:-1,class:["q-menu q-position-engine scroll"+lt.value,n.class],style:[n.style,h.value],...it.value},K(o.default)):null)}return B(Ce),Object.assign(r,{focus:ce,updatePosition:U}),nt}}),bn=P({name:"QAvatar",props:{...bt,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:o}){const l=wt(e),n=m(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),t=m(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const s=e.icon!==void 0?[q(te,{name:e.icon})]:void 0;return q("div",{class:n.value,style:l.value},[q("div",{class:"q-avatar__content row flex-center overflow-hidden",style:t.value},yt(o.default,s))])}}}),wn=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const l=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:l.value,role:"toolbar"},K(o.default))}});function yn(){const e=S(!pe.value);return e.value===!1&&A(()=>{e.value=!0}),e}const tt=typeof ResizeObserver!="undefined",Oe=tt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ie=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let l=null,n,t={width:-1,height:-1};function s(u){u===!0||e.debounce===0||e.debounce==="0"?i():l===null&&(l=setTimeout(i,e.debounce))}function i(){if(clearTimeout(l),l=null,n){const{offsetWidth:u,offsetHeight:r}=n;(u!==t.width||r!==t.height)&&(t={width:u,height:r},o("resize",t))}}const{proxy:f}=E();if(tt===!0){let u;const r=d=>{n=f.$el.parentNode,n?(u=new ResizeObserver(s),u.observe(n),i()):d!==!0&&D(()=>{r(!0)})};return A(()=>{r()}),B(()=>{clearTimeout(l),u!==void 0&&(u.disconnect!==void 0?u.disconnect():n&&u.unobserve(n))}),Ge}else{let d=function(){clearTimeout(l),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",s,N.passive),r=void 0)},w=function(){d(),n&&n.contentDocument&&(r=n.contentDocument.defaultView,r.addEventListener("resize",s,N.passive),i())};const u=yn();let r;return A(()=>{D(()=>{n=f.$el,n&&w()})}),B(d),f.trigger=s,()=>{if(u.value===!0)return q("object",{style:Oe.style,tabindex:-1,type:"text/html",data:Oe.url,"aria-hidden":"true",onLoad:w})}}}}),pn=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:l}){const{proxy:{$q:n}}=E(),t=xe(ae,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const s=S(parseInt(e.heightHint,10)),i=S(!0),f=m(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||n.platform.is.ios&&t.isContainer.value===!0),u=m(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return i.value===!0?s.value:0;const c=s.value-t.scroll.value.position;return c>0?c:0}),r=m(()=>e.modelValue!==!0||f.value===!0&&i.value!==!0),d=m(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),w=m(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=m(()=>{const c=t.rows.value.top,h={};return c[0]==="l"&&t.left.space===!0&&(h[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),c[2]==="r"&&t.right.space===!0&&(h[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),h});function a(c,h){t.update("header",c,h)}function p(c,h){c.value!==h&&(c.value=h)}function T({height:c}){p(s,c),a("size",c)}function z(c){d.value===!0&&p(i,!0),l("focusin",c)}_(()=>e.modelValue,c=>{a("space",c),p(i,!0),t.animate()}),_(u,c=>{a("offset",c)}),_(()=>e.reveal,c=>{c===!1&&p(i,e.modelValue)}),_(i,c=>{t.animate(),l("reveal",c)}),_(t.scroll,c=>{e.reveal===!0&&p(i,c.direction==="up"||c.position<=e.revealOffset||c.position-c.inflectionPoint<100)});const $={};return t.instances.header=$,e.modelValue===!0&&a("size",s.value),a("space",e.modelValue),a("offset",u.value),B(()=>{t.instances.header===$&&(t.instances.header=void 0,a("size",0),a("offset",0),a("space",!1))}),()=>{const c=Ae(o.default,[]);return e.elevated===!0&&c.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),c.push(q(ie,{debounce:0,onResize:T})),q("header",{class:w.value,style:x.value,onFocusin:z},c)}}}),xn=P({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:l}}=E(),n=xe(ae,Q);if(n===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;Ue(Ct,!0);const t=m(()=>{const s={};return n.header.space===!0&&(s.paddingTop=`${n.header.size}px`),n.right.space===!0&&(s[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(s.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(s[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),s});return()=>q("div",{class:"q-page-container",style:t.value},K(o.default))}}),qn=P({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:l}){const{proxy:{$q:n}}=E(),t=xe(ae,Q);if(t===Q)return console.error("QFooter needs to be child of QLayout"),Q;const s=S(parseInt(e.heightHint,10)),i=S(!0),f=S(pe.value===!0||t.isContainer.value===!0?0:window.innerHeight),u=m(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||n.platform.is.ios&&t.isContainer.value===!0),r=m(()=>t.isContainer.value===!0?t.containerHeight.value:f.value),d=m(()=>{if(e.modelValue!==!0)return 0;if(u.value===!0)return i.value===!0?s.value:0;const v=t.scroll.value.position+r.value+s.value-t.height.value;return v>0?v:0}),w=m(()=>e.modelValue!==!0||u.value===!0&&i.value!==!0),x=m(()=>e.modelValue===!0&&w.value===!0&&e.reveal===!0),a=m(()=>"q-footer q-layout__section--marginal "+(u.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(w.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(u.value!==!0?" hidden":""):"")),p=m(()=>{const v=t.rows.value.bottom,C={};return v[0]==="l"&&t.left.space===!0&&(C[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&(C[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),C});function T(v,C){t.update("footer",v,C)}function z(v,C){v.value!==C&&(v.value=C)}function $({height:v}){z(s,v),T("size",v)}function c(){if(e.reveal!==!0)return;const{direction:v,position:C,inflectionPoint:L}=t.scroll.value;z(i,v==="up"||C-L<100||t.height.value-r.value-C-s.value<300)}function h(v){x.value===!0&&z(i,!0),l("focusin",v)}_(()=>e.modelValue,v=>{T("space",v),z(i,!0),t.animate()}),_(d,v=>{T("offset",v)}),_(()=>e.reveal,v=>{v===!1&&z(i,e.modelValue)}),_(i,v=>{t.animate(),l("reveal",v)}),_([s,t.scroll,t.height],c),_(()=>n.screen.height,v=>{t.isContainer.value!==!0&&z(f,v)});const g={};return t.instances.footer=g,e.modelValue===!0&&T("size",s.value),T("space",e.modelValue),T("offset",d.value),B(()=>{t.instances.footer===g&&(t.instances.footer=void 0,T("size",0),T("offset",0),T("space",!1))}),()=>{const v=Ne(o.default,[q(ie,{debounce:0,onResize:$})]);return e.elevated===!0&&v.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),q("footer",{class:a.value,style:p.value,onFocusin:h},v)}}});const{passive:We}=N,kn=["both","horizontal","vertical"];var Sn=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>kn.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,t,s;_(()=>e.scrollTarget,()=>{u(),f()});function i(){n!==null&&n();const w=Math.max(0,tn(t)),x=nn(t),a={top:w-l.position.top,left:x-l.position.left};if(e.axis==="vertical"&&a.top===0||e.axis==="horizontal"&&a.left===0)return;const p=Math.abs(a.top)>=Math.abs(a.left)?a.top<0?"up":"down":a.left<0?"left":"right";l.position={top:w,left:x},l.directionChanged=l.direction!==p,l.delta=a,l.directionChanged===!0&&(l.direction=p,l.inflectionPoint=l.position),o("scroll",{...l})}function f(){t=Ye(s,e.scrollTarget),t.addEventListener("scroll",r,We),r(!0)}function u(){t!==void 0&&(t.removeEventListener("scroll",r,We),t=void 0)}function r(w){if(w===!0||e.debounce===0||e.debounce==="0")i();else if(n===null){const[x,a]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];n=()=>{a(x),n=null}}}const{proxy:d}=E();return _(()=>d.$q.lang.rtl,i),A(()=>{s=d.$el.parentNode,f()}),B(()=>{n!==null&&n(),u()}),Object.assign(d,{trigger:r,getPosition:()=>l}),Ge}}),_n=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:l}){const{proxy:{$q:n}}=E(),t=S(null),s=S(n.screen.height),i=S(e.container===!0?0:n.screen.width),f=S({position:0,direction:"down",inflectionPoint:0}),u=S(0),r=S(pe.value===!0?0:ne()),d=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=m(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),x=m(()=>r.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),a=m(()=>r.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function p(g){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};f.value=v,e.onScroll!==void 0&&l("scroll",v)}}function T(g){const{height:v,width:C}=g;let L=!1;s.value!==v&&(L=!0,s.value=v,e.onScrollHeight!==void 0&&l("scrollHeight",v),$()),i.value!==C&&(L=!0,i.value=C),L===!0&&e.onResize!==void 0&&l("resize",g)}function z({height:g}){u.value!==g&&(u.value=g,$())}function $(){if(e.container===!0){const g=s.value>u.value?ne():0;r.value!==g&&(r.value=g)}}let c;const h={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:t,height:s,containerHeight:u,scrollbarWidth:r,totalWidth:m(()=>i.value+r.value),rows:m(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:Z({size:0,offset:0,space:!1}),right:Z({size:300,offset:0,space:!1}),footer:Z({size:0,offset:0,space:!1}),left:Z({size:300,offset:0,space:!1}),scroll:f,animate(){c!==void 0?clearTimeout(c):document.body.classList.add("q-body--layout-animate"),c=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),c=void 0},155)},update(g,v,C){h[g][v]=C}};if(Ue(ae,h),ne()>0){let C=function(){g=null,v.classList.remove("hide-scrollbar")},L=function(){if(g===null){if(v.scrollHeight>n.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(C,300)},I=function(G){g!==null&&G==="remove"&&(clearTimeout(g),C()),window[`${G}EventListener`]("resize",L)},g=null;const v=document.body;_(()=>e.container!==!0?"add":"remove",I),e.container!==!0&&I("add"),Ke(()=>{I("remove")})}return()=>{const g=Ne(o.default,[q(Sn,{onScroll:p}),q(ie,{onResize:T})]),v=q("div",{class:d.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:t},[q(ie,{onResize:z}),q("div",{class:"absolute-full",style:x.value},[q("div",{class:"scroll",style:a.value},[v])])]):v}}}),Cn="/assets/tarik-logo.40dd7fc4.png";const Tn=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],zn=zt({name:"MainLayout",components:{},setup(){const e=S(!1);return{search:S(""),essentialLinks:Tn,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),$n=F("span",{class:"tw-text-gray-600"},"WebPage Plumber",-1),Ln=F("img",{src:Cn},null,-1),Pn=F("span",{class:"tw-font-semibold"},"2022 WPPlumber",-1),En=F("a",{href:"#",class:"tw-font-semibold tw-text-blue-500"},"Projects",-1),Hn=F("a",{href:"#",class:"tw-font-semibold tw-text-blue-500"},"Terms of Service",-1),Bn=F("a",{href:"#",class:"tw-font-semibold tw-text-blue-500"},"Privacy policy",-1),Qn={class:"tw-font-semibold tw-cursor-pointer tw-text-gray-400 hover:tw-text-gray-600"};function Fn(e,o,l,n,t,s){const i=Pt("router-view");return $t(),Lt(_n,{view:"lHh Lpr lFf"},{default:k(()=>[y(pn,{elevated:""},{default:k(()=>[y(wn,{class:"tw-bg-white"},{default:k(()=>[y(me,{flat:"",dense:"",round:"",color:"grey",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),y(Et,{class:"tw-flex tw-items-center tw-flex-justify-between"},{default:k(()=>[$n]),_:1}),F("div",null,[y(me,{dense:"",round:"",class:"tw-text-gray-600 tw-mr-2",color:"white",icon:"apps"},{default:k(()=>[y(gn,{fit:""},{default:k(()=>[y(Bt,{style:{"min-width":"100px"}},{default:k(()=>[y(V,{clickable:""},{default:k(()=>[y(R,null,{default:k(()=>[H("New tab")]),_:1})]),_:1}),y(V,{clickable:""},{default:k(()=>[y(R,null,{default:k(()=>[H("New incognito tab")]),_:1})]),_:1}),y(ge),y(V,{clickable:""},{default:k(()=>[y(R,null,{default:k(()=>[H("Recent tabs")]),_:1})]),_:1}),y(V,{clickable:""},{default:k(()=>[y(R,null,{default:k(()=>[H("History")]),_:1})]),_:1}),y(V,{clickable:""},{default:k(()=>[y(R,null,{default:k(()=>[H("Downloads")]),_:1})]),_:1}),y(ge),y(V,{clickable:""},{default:k(()=>[y(R,null,{default:k(()=>[H("Settings")]),_:1})]),_:1}),y(ge),y(V,{clickable:""},{default:k(()=>[y(R,null,{default:k(()=>[H("Help & Feedback")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),y(te,{size:"md",name:"help",class:"tw-text-gray-600 tw-mr-2 tw-bg-transparent"}),y(te,{size:"md",name:"more_vert",class:"tw-text-gray-600 tw-mr-2 tw-bg-transparent"}),y(me,{dense:"",round:""},{default:k(()=>[y(bn,null,{default:k(()=>[Ln]),_:1})]),_:1})])]),_:1})]),_:1}),y(xn,null,{default:k(()=>[y(i)]),_:1}),y(qn,{class:"tw-py-1 tw-text-center tw-bg-transparent tw-text-gray-600 tw-text-md"},{default:k(()=>[H(" \xA9 "),Pn,H(" | "),En,H(" | "),Hn,H(" | "),Bn,H(" | "),F("span",Qn,[y(te,{name:"sms_failed",class:"tw-mr-1"}),H("Send feedback")])]),_:1})]),_:1})}var On=Tt(zn,[["render",Fn]]);export{On as default};
