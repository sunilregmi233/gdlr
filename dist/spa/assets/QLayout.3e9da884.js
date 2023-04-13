import{Q as O,g as W,a as D,b as k,c as Q}from"./scroll.a7afe307.js";import{c as C,f as K,b as G,a as J}from"./render.db39bb30.js";import{j as X,e as E,f as z,a as y,q as p,g as V,h as w,a4 as I,n as _,i as j,A as U,E as Y,a2 as Z,a5 as $,y as ee,a6 as te}from"./index.91d6c796.js";import{o as A,h as M}from"./dom.ab37b170.js";var se=C({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:f,emit:i}){const{proxy:{$q:o}}=_(),n=X(I,E);if(n===E)return console.error("QHeader needs to be child of QLayout"),E;const g=z(parseInt(e.heightHint,10)),d=z(!0),v=y(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||o.platform.is.ios&&n.isContainer.value===!0),r=y(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return d.value===!0?g.value:0;const t=g.value-n.scroll.value.position;return t>0?t:0}),u=y(()=>e.modelValue!==!0||v.value===!0&&d.value!==!0),S=y(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),b=y(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),h=y(()=>{const t=n.rows.value.top,s={};return t[0]==="l"&&n.left.space===!0&&(s[o.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),t[2]==="r"&&n.right.space===!0&&(s[o.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),s});function a(t,s){n.update("header",t,s)}function m(t,s){t.value!==s&&(t.value=s)}function H({height:t}){m(g,t),a("size",t)}function T(t){S.value===!0&&m(d,!0),i("focusin",t)}p(()=>e.modelValue,t=>{a("space",t),m(d,!0),n.animate()}),p(r,t=>{a("offset",t)}),p(()=>e.reveal,t=>{t===!1&&m(d,e.modelValue)}),p(d,t=>{n.animate(),i("reveal",t)}),p(n.scroll,t=>{e.reveal===!0&&m(d,t.direction==="up"||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)});const q={};return n.instances.header=q,e.modelValue===!0&&a("size",g.value),a("space",e.modelValue),a("offset",r.value),V(()=>{n.instances.header===q&&(n.instances.header=void 0,a("size",0),a("offset",0),a("space",!1))}),()=>{const t=K(f.default,[]);return e.elevated===!0&&t.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(w(O,{debounce:0,onResize:H})),w("header",{class:b.value,style:h.value,onFocusin:T},t)}}});function F(e){let f=!1,i,o;function n(){o=arguments,f!==!0&&(f=!0,i=requestAnimationFrame(()=>{e.apply(this,o),o=void 0,f=!1}))}return n.cancel=()=>{window.cancelAnimationFrame(i),f=!1},n}const{passive:R}=U;var ue=C({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:e=>e>=0&&e<=1},scrollTarget:{default:void 0},onScroll:Function},setup(e,{slots:f,emit:i}){const o=z(0),n=z(null),g=z(null),d=z(null);let v,r,u,S,b,h;p(()=>e.height,()=>{v===!0&&m()}),p(()=>e.scrollTarget,()=>{v===!0&&(t(),q())});let a=s=>{o.value=s,e.onScroll!==void 0&&i("scroll",s)};function m(){let s,l,c;h===window?(s=0,c=l=window.innerHeight):(s=A(h).top,l=M(h),c=s+l);const x=A(n.value).top,L=x+e.height;if(b!==void 0||L>s&&x<c){const P=(c-x)/(e.height+l);H((u-e.height)*P*e.speed),a(P)}}let H=s=>{r.style.transform=`translate3d(-50%,${Math.round(s)}px,0)`};function T(){u=r.naturalHeight||r.videoHeight||M(r),v===!0&&m()}function q(){v=!0,h=W(n.value,e.scrollTarget),h.addEventListener("scroll",m,R),window.addEventListener("resize",S,R),m()}function t(){v===!0&&(v=!1,h.removeEventListener("scroll",m,R),window.removeEventListener("resize",S,R),h=void 0,H.cancel(),a.cancel(),S.cancel())}return j(()=>{H=F(H),a=F(a),S=F(T),r=f.media!==void 0?g.value.children[0]:d.value,r.onload=r.onloadstart=r.loadedmetadata=T,T(),r.style.display="initial",window.IntersectionObserver!==void 0?(b=new IntersectionObserver(s=>{(s[0].isIntersecting===!0?q:t)()}),b.observe(n.value)):q()}),V(()=>{t(),b!==void 0&&b.disconnect(),r.onload=r.onloadstart=r.loadedmetadata=null}),()=>w("div",{ref:n,class:"q-parallax",style:{height:`${e.height}px`}},[w("div",{ref:g,class:"q-parallax__media absolute-full"},f.media!==void 0?f.media():[w("img",{ref:d,src:e.src})]),w("div",{class:"q-parallax__content absolute-full column flex-center"},f.content!==void 0?f.content({percentScrolled:o.value}):G(f.default))])}});const{passive:N}=U,ne=["both","horizontal","vertical"];var le=C({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ne.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:f}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,n,g;p(()=>e.scrollTarget,()=>{r(),v()});function d(){o!==null&&o();const b=Math.max(0,D(n)),h=k(n),a={top:b-i.position.top,left:h-i.position.left};if(e.axis==="vertical"&&a.top===0||e.axis==="horizontal"&&a.left===0)return;const m=Math.abs(a.top)>=Math.abs(a.left)?a.top<0?"up":"down":a.left<0?"left":"right";i.position={top:b,left:h},i.directionChanged=i.direction!==m,i.delta=a,i.directionChanged===!0&&(i.direction=m,i.inflectionPoint=i.position),f("scroll",{...i})}function v(){n=W(g,e.scrollTarget),n.addEventListener("scroll",u,N),u(!0)}function r(){n!==void 0&&(n.removeEventListener("scroll",u,N),n=void 0)}function u(b){if(b===!0||e.debounce===0||e.debounce==="0")d();else if(o===null){const[h,a]=e.debounce?[setTimeout(d,e.debounce),clearTimeout]:[requestAnimationFrame(d),cancelAnimationFrame];o=()=>{a(h),o=null}}}const{proxy:S}=_();return p(()=>S.$q.lang.rtl,d),j(()=>{g=S.$el.parentNode,v()}),V(()=>{o!==null&&o(),r()}),Object.assign(S,{trigger:u,getPosition:()=>i}),Y}}),ce=C({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:f,emit:i}){const{proxy:{$q:o}}=_(),n=z(null),g=z(o.screen.height),d=z(e.container===!0?0:o.screen.width),v=z({position:0,direction:"down",inflectionPoint:0}),r=z(0),u=z(Z.value===!0?0:Q()),S=y(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=y(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),h=y(()=>u.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),a=y(()=>u.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function m(l){if(e.container===!0||document.qScrollPrevented!==!0){const c={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};v.value=c,e.onScroll!==void 0&&i("scroll",c)}}function H(l){const{height:c,width:x}=l;let L=!1;g.value!==c&&(L=!0,g.value=c,e.onScrollHeight!==void 0&&i("scrollHeight",c),q()),d.value!==x&&(L=!0,d.value=x),L===!0&&e.onResize!==void 0&&i("resize",l)}function T({height:l}){r.value!==l&&(r.value=l,q())}function q(){if(e.container===!0){const l=g.value>r.value?Q():0;u.value!==l&&(u.value=l)}}let t=null;const s={instances:{},view:y(()=>e.view),isContainer:y(()=>e.container),rootRef:n,height:g,containerHeight:r,scrollbarWidth:u,totalWidth:y(()=>d.value+u.value),rows:y(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:$({size:0,offset:0,space:!1}),right:$({size:300,offset:0,space:!1}),footer:$({size:0,offset:0,space:!1}),left:$({size:300,offset:0,space:!1}),scroll:v,animate(){t!==null?clearTimeout(t):document.body.classList.add("q-body--layout-animate"),t=setTimeout(()=>{t=null,document.body.classList.remove("q-body--layout-animate")},155)},update(l,c,x){s[l][c]=x}};if(ee(I,s),Q()>0){let x=function(){l=null,c.classList.remove("hide-scrollbar")},L=function(){if(l===null){if(c.scrollHeight>o.screen.height)return;c.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(x,300)},P=function(B){l!==null&&B==="remove"&&(clearTimeout(l),x()),window[`${B}EventListener`]("resize",L)},l=null;const c=document.body;p(()=>e.container!==!0?"add":"remove",P),e.container!==!0&&P("add"),te(()=>{P("remove")})}return()=>{const l=J(f.default,[w(le,{onScroll:m}),w(O,{onResize:H})]),c=w("div",{class:S.value,style:b.value,ref:e.container===!0?void 0:n,tabindex:-1},l);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:n},[w(O,{onResize:T}),w("div",{class:"absolute-full",style:h.value},[w("div",{class:"scroll",style:a.value},[c])])]):c}}});export{ce as Q,se as a,ue as b};