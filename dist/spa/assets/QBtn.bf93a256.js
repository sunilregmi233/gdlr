import{a as d,h as m,n as V,l as D,G as ce,J as de,$ as te,I as fe,f as Q,g as ve,T as me,k as ge,s as T,A as be,a0 as he}from"./index.91d6c796.js";import{u as ne,a as ae,Q as ye}from"./QSpinner.85ccabd9.js";import{c as re,b as pe,a as I,d as ke}from"./render.db39bb30.js";import{c as xe}from"./dom.ab37b170.js";const F="0 0 24 24",U=e=>e,z=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":U,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":z,"ion-ios":z,"ion-logo":z,"iconfont ":U,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ue={o_:"-outlined",r_:"-round",s_:"-sharp"},ie={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},qe=new RegExp("^("+Object.keys(le).join("|")+")"),Ee=new RegExp("^("+Object.keys(ue).join("|")+")"),H=new RegExp("^("+Object.keys(ie).join("|")+")"),$e=/^[Mm]\s?[-+]?\.?\d/,Re=/^img:/,we=/^svguse:/,Le=/^ion-/,Ce=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var W=re({name:"QIcon",props:{...ne,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=V(),n=ae(e),i=d(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=d(()=>{let o,r=e.name;if(r==="none"||!r)return{none:!0};if(a.iconMapFn!==null){const s=a.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if($e.test(r)===!0){const[s,y=F]=r.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(u=>{const[p,b,k]=u.split("@@");return m("path",{style:b,d:p,transform:k})})}}if(Re.test(r)===!0)return{img:!0,src:r.substring(4)};if(we.test(r)===!0){const[s,y=F]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const h=r.match(qe);if(h!==null)o=le[h[1]](r);else if(Ce.test(r)===!0)o=r;else if(Le.test(r)===!0)o=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(H.test(r)===!0){o="notranslate material-symbols";const s=r.match(H);s!==null&&(r=r.substring(6),o+=ie[s[1]]),q=r}else{o="notranslate material-icons";const s=r.match(Ee);s!==null&&(r=r.substring(2),o+=ue[s[1]]),q=r}return{cls:o,content:q}});return()=>{const o={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?m(e.tag,o,pe(t.default)):f.value.img===!0?m("span",o,I(t.default,[m("img",{src:f.value.src})])):f.value.svg===!0?m("span",o,I(t.default,[m("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?m("span",o,I(t.default,[m("svg",{viewBox:f.value.viewBox},[m("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(o.class+=" "+f.value.cls),m(e.tag,o,I(t.default,[f.value.content])))}}});function Be(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function X(e,t,a,n){a.modifiers.stop===!0&&te(e);const i=a.modifiers.color;let f=a.modifiers.center;f=f===!0||n===!0;const o=document.createElement("span"),r=document.createElement("span"),q=fe(e),{left:h,top:s,width:y,height:u}=t.getBoundingClientRect(),p=Math.sqrt(y*y+u*u),b=p/2,k=`${(y-p)/2}px`,c=f?k:`${q.left-h-b}px`,x=`${(u-p)/2}px`,S=f?x:`${q.top-s-b}px`;r.className="q-ripple__inner",xe(r,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${c},${S},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(r),t.appendChild(o);const B=()=>{o.remove(),clearTimeout(_)};a.abort.push(B);let _=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${k},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,_=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,_=setTimeout(()=>{o.remove(),a.abort.splice(a.abort.indexOf(B),1)},275)},250)},50)}function G(e,{modifiers:t,value:a,arg:n}){const i=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}var _e=ke({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&X(i,e,n,i.qKeyEvent===!0)},keystart:Be(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&D(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&X(i,e,n,!0)},300)};G(n,t),e.__qripple=n,ce(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&G(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),de(t,"main"),delete e._qripple)}});const se={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Se=Object.keys(se),Te={align:{type:String,validator:e=>Se.includes(e)}};function Ae(e){return d(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${se[t]}`})}function oe(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(a=>{oe(e,a)}):e.add(t)}function Je(e){const t=new Set;return e.forEach(a=>{oe(t,a)}),Array.from(t)}function Pe(e){return e.appContext.config.globalProperties.$router!==void 0}function Ye(e){return e.isUnmounted===!0||e.isDeactivated===!0}function J(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function Y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Oe(e,t){for(const a in t){const n=t[a],i=e[a];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f,o)=>f!==i[o]))return!1}return!0}function Z(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Me(e,t){return Array.isArray(e)===!0?Z(e,t):Array.isArray(t)===!0?Z(t,e):e===t}function je(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(Me(e[a],t[a])===!1)return!1;return!0}const Ie={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Ke({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=V(),{props:n,proxy:i,emit:f}=a,o=Pe(a),r=d(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?d(()=>o===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):d(()=>o===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=d(()=>q.value===!0?S(n.to):null),s=d(()=>h.value!==null),y=d(()=>r.value===!0||s.value===!0),u=d(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),p=d(()=>r.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:h.value.href,target:n.target}:{}),b=d(()=>{if(s.value===!1)return-1;const{matched:v}=h.value,{length:E}=v,R=v[E-1];if(R===void 0)return-1;const L=i.$route.matched;if(L.length===0)return-1;const C=L.findIndex(Y.bind(null,R));if(C>-1)return C;const K=J(v[E-2]);return E>1&&J(R)===K&&L[L.length-1].path!==K?L.findIndex(Y.bind(null,v[E-2])):C}),k=d(()=>s.value===!0&&b.value!==-1&&Oe(i.$route.params,h.value.params)),c=d(()=>k.value===!0&&b.value===i.$route.matched.length-1&&je(i.$route.params,h.value.params)),x=d(()=>s.value===!0?c.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function S(v){try{return i.$router.resolve(v)}catch{}return null}function B(v,{returnRouterError:E,to:R=n.to,replace:L=n.replace}={}){if(n.disable===!0)return v.preventDefault(),Promise.resolve(!1);if(v.metaKey||v.altKey||v.ctrlKey||v.shiftKey||v.button!==void 0&&v.button!==0||n.target==="_blank")return Promise.resolve(!1);v.preventDefault();const C=i.$router[L===!0?"replace":"push"](R);return E===!0?C:C.then(()=>{}).catch(()=>{})}function _(v){if(s.value===!0){const E=R=>B(v,R);f("click",v,E),v.defaultPrevented!==!0&&E()}else f("click",v)}return{hasRouterLink:s,hasHrefLink:r,hasLink:y,linkTag:u,resolvedLink:h,linkIsActive:k,linkIsExactActive:c,linkClass:x,linkAttrs:p,getLink:S,navigateToRouterLink:B,navigateOnClick:_}}const ee={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ne={xs:8,sm:10,md:14,lg:20,xl:24},ze=["button","submit","reset"],De=/[^\s]\/[^\s]/,Ve=["flat","outline","push","unelevated"],Qe=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Fe={...ne,...Ie,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Ve.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Te.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ue(e){const t=ae(e,Ne),a=Ae(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:o,navigateOnClick:r}=Ke({fallbackTag:"button"}),q=d(()=>{const c=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(x=>x in ee?ee[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):c}),h=d(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=d(()=>e.disable!==!0&&e.loading!==!0),y=d(()=>s.value===!0?e.tabindex||0:-1),u=d(()=>Qe(e,"standard")),p=d(()=>{const c={tabindex:y.value};return i.value===!0?Object.assign(c,o.value):ze.includes(e.type)===!0&&(c.type=e.type),f.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),n.value!==!0&&De.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),b=d(()=>{let c;e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(c!==void 0?" "+c:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=d(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:k,attributes:p,hasLink:i,linkTag:f,navigateOnClick:r,isActionable:s}}const{passiveCapture:$}=be;let A=null,P=null,O=null;var Ze=re({name:"QBtn",props:{...Fe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=V(),{classes:i,style:f,innerClasses:o,attributes:r,hasLink:q,linkTag:h,navigateOnClick:s,isActionable:y}=Ue(e),u=Q(null),p=Q(null);let b=null,k,c=null;const x=d(()=>e.label!==void 0&&e.label!==null&&e.label!==""),S=d(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=d(()=>({center:e.round})),_=d(()=>{const l=Math.max(0,Math.min(100,e.percentage));return l>0?{transition:"transform 0.6s",transform:`translateX(${l-100}%)`}:{}}),v=d(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const l={onClick:R,onKeydown:L,onMousedown:K};if(n.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";l[`onTouchstart${g}`]=C}return l}return{onClick:T}}),E=d(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...r.value,...v.value}));function R(l){if(u.value!==null){if(l!==void 0){if(l.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&u.value.contains(g)===!1&&g.contains(u.value)===!1){u.value.focus();const N=()=>{document.removeEventListener("keydown",T,!0),document.removeEventListener("keyup",N,$),u.value!==null&&u.value.removeEventListener("blur",N,$)};document.addEventListener("keydown",T,!0),document.addEventListener("keyup",N,$),u.value.addEventListener("blur",N,$)}}s(l)}}function L(l){u.value!==null&&(a("keydown",l),D(l,[13,32])===!0&&P!==u.value&&(P!==null&&M(),l.defaultPrevented!==!0&&(u.value.focus(),P=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),u.value.addEventListener("blur",w,$)),T(l)))}function C(l){u.value!==null&&(a("touchstart",l),l.defaultPrevented!==!0&&(A!==u.value&&(A!==null&&M(),A=u.value,b=l.target,b.addEventListener("touchcancel",w,$),b.addEventListener("touchend",w,$)),k=!0,c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,k=!1},200)))}function K(l){u.value!==null&&(l.qSkipRipple=k===!0,a("mousedown",l),l.defaultPrevented!==!0&&O!==u.value&&(O!==null&&M(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,$)))}function w(l){if(u.value!==null&&!(l!==void 0&&l.type==="blur"&&document.activeElement===u.value)){if(l!==void 0&&l.type==="keyup"){if(P===u.value&&D(l,[13,32])===!0){const g=new MouseEvent("click",l);g.qKeyEvent=!0,l.defaultPrevented===!0&&he(g),l.cancelBubble===!0&&te(g),u.value.dispatchEvent(g),T(l),l.qKeyEvent=!0}a("keyup",l)}M()}}function M(l){const g=p.value;l!==!0&&(A===u.value||O===u.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),A===u.value&&(b!==null&&(b.removeEventListener("touchcancel",w,$),b.removeEventListener("touchend",w,$)),A=b=null),O===u.value&&(document.removeEventListener("mouseup",w,$),O=null),P===u.value&&(document.removeEventListener("keyup",w,!0),u.value!==null&&u.value.removeEventListener("blur",w,$),P=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(l){T(l),l.qSkipRipple=!0}return ve(()=>{M(!0)}),Object.assign(n,{click:R}),()=>{let l=[];e.icon!==void 0&&l.push(m(W,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&l.push(m("span",{class:"block"},[e.label])),l=I(t.default,l),e.iconRight!==void 0&&e.round===!1&&l.push(m(W,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const g=[m("span",{class:"q-focus-helper",ref:p})];return e.loading===!0&&e.percentage!==void 0&&g.push(m("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[m("span",{class:"q-btn__progress-indicator fit block",style:_.value})])),g.push(m("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},l)),e.loading!==null&&g.push(m(me,{name:"q-transition--fade"},()=>e.loading===!0?[m("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[m(ye)])]:null)),ge(m(h.value,E.value,g),[[_e,S.value,void 0,B.value]])}}});export{Ze as Q,_e as R,W as a,Ke as b,Pe as c,Te as d,Ae as e,Je as g,Ie as u,Ye as v};
