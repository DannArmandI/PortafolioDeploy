import{k as ye,l as b,m as _e,q as O,s as G,x as H,y as be,z as g,A as we,B as Re,C as p,D as K,E as Q,G as X,o as ne,c as ae,b as o,t as R,d as S,H as A,n as M,I as Ce,p as Ee,e as je,j as ke,a as Oe,g as N}from"./index-c46cd1ea.js";import{_ as Ve}from"./_plugin-vue_export-helper-c27b6911.js";function Y(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((n,t)=>(r.includes(t)||(n[t]=p(e[t])),n),{})}function z(e){return typeof e=="function"}function Pe(e){return we(e)||Re(e)}function oe(e,r,n){let t=e;const s=r.split(".");for(let l=0;l<s.length;l++){if(!t[s[l]])return n;t=t[s[l]]}return t}function B(e,r,n){return g(()=>e.some(t=>oe(r,t,{[n]:!1})[n]))}function ee(e,r,n){return g(()=>e.reduce((t,s)=>{const l=oe(r,s,{[n]:!1})[n]||[];return t.concat(l)},[]))}function le(e,r,n,t){return e.call(t,p(r),p(n),t)}function ie(e){return e.$valid!==void 0?!e.$valid:!e}function ze(e,r,n,t,s,l,$){let{$lazy:i,$rewardEarly:v}=s,u=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],d=arguments.length>8?arguments[8]:void 0,m=arguments.length>9?arguments[9]:void 0,x=arguments.length>10?arguments[10]:void 0;const h=b(!!t.value),a=b(0);n.value=!1;const f=O([r,t].concat(u,x),()=>{if(i&&!t.value||v&&!m.value&&!n.value)return;let c;try{c=le(e,r,d,$)}catch(_){c=Promise.reject(_)}a.value++,n.value=!!a.value,h.value=!1,Promise.resolve(c).then(_=>{a.value--,n.value=!!a.value,l.value=_,h.value=ie(_)}).catch(_=>{a.value--,n.value=!!a.value,l.value=_,h.value=!0})},{immediate:!0,deep:typeof r=="object"});return{$invalid:h,$unwatch:f}}function Fe(e,r,n,t,s,l,$,i){let{$lazy:v,$rewardEarly:u}=t;const d=()=>({}),m=g(()=>{if(v&&!n.value||u&&!i.value)return!1;let x=!0;try{const h=le(e,r,$,l);s.value=h,x=ie(h)}catch(h){s.value=h}return x});return{$unwatch:d,$invalid:m}}function Ie(e,r,n,t,s,l,$,i,v,u,d){const m=b(!1),x=e.$params||{},h=b(null);let a,f;e.$async?{$invalid:a,$unwatch:f}=ze(e.$validator,r,m,n,t,h,s,e.$watchTargets,v,u,d):{$invalid:a,$unwatch:f}=Fe(e.$validator,r,n,t,h,s,v,u);const c=e.$message;return{$message:z(c)?g(()=>c(Y({$pending:m,$invalid:a,$params:Y(x),$model:r,$response:h,$validator:l,$propertyPath:i,$property:$}))):c||"",$params:x,$pending:m,$invalid:a,$response:h,$unwatch:f}}function Le(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const r=p(e),n=Object.keys(r),t={},s={},l={};let $=null;return n.forEach(i=>{const v=r[i];switch(!0){case z(v.$validator):t[i]=v;break;case z(v):t[i]={$validator:v};break;case i==="$validationGroups":$=v;break;case i.startsWith("$"):l[i]=v;break;default:s[i]=v}}),{rules:t,nestedValidators:s,config:l,validationGroups:$}}function Te(){}const Se="__root";function ce(e,r,n){if(n)return r?r(e()):e();try{var t=Promise.resolve(e());return r?t.then(r):t}catch(s){return Promise.reject(s)}}function Ae(e,r){return ce(e,Te,r)}function Me(e,r){var n=e();return n&&n.then?n.then(r):r(n)}function Ne(e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];try{return Promise.resolve(e.apply(this,r))}catch(t){return Promise.reject(t)}}}function Be(e,r,n,t,s,l,$,i,v){const u=Object.keys(e),d=t.get(s,e),m=b(!1),x=b(!1),h=b(0);if(d){if(!d.$partial)return d;d.$unwatch(),m.value=d.$dirty.value}const a={$dirty:m,$path:s,$touch:()=>{m.value||(m.value=!0)},$reset:()=>{m.value&&(m.value=!1)},$commit:()=>{}};return u.length?(u.forEach(f=>{a[f]=Ie(e[f],r,a.$dirty,l,$,f,n,s,v,x,h)}),a.$externalResults=g(()=>i.value?[].concat(i.value).map((f,c)=>({$propertyPath:s,$property:n,$validator:"$externalResults",$uid:`${s}-externalResult-${c}`,$message:f,$params:{},$response:null,$pending:!1})):[]),a.$invalid=g(()=>{const f=u.some(c=>p(a[c].$invalid));return x.value=f,!!a.$externalResults.value.length||f}),a.$pending=g(()=>u.some(f=>p(a[f].$pending))),a.$error=g(()=>a.$dirty.value?a.$pending.value||a.$invalid.value:!1),a.$silentErrors=g(()=>u.filter(f=>p(a[f].$invalid)).map(f=>{const c=a[f];return H({$propertyPath:s,$property:n,$validator:f,$uid:`${s}-${f}`,$message:c.$message,$params:c.$params,$response:c.$response,$pending:c.$pending})}).concat(a.$externalResults.value)),a.$errors=g(()=>a.$dirty.value?a.$silentErrors.value:[]),a.$unwatch=()=>u.forEach(f=>{a[f].$unwatch()}),a.$commit=()=>{x.value=!0,h.value=Date.now()},t.set(s,e,a),a):(d&&t.set(s,e,a),a)}function De(e,r,n,t,s,l,$){const i=Object.keys(e);return i.length?i.reduce((v,u)=>(v[u]=q({validations:e[u],state:r,key:u,parentKey:n,resultsCache:t,globalConfig:s,instance:l,externalResults:$}),v),{}):{}}function Ge(e,r,n){const t=g(()=>[r,n].filter(a=>a).reduce((a,f)=>a.concat(Object.values(p(f))),[])),s=g({get(){return e.$dirty.value||(t.value.length?t.value.every(a=>a.$dirty):!1)},set(a){e.$dirty.value=a}}),l=g(()=>{const a=p(e.$silentErrors)||[],f=t.value.filter(c=>(p(c).$silentErrors||[]).length).reduce((c,_)=>c.concat(..._.$silentErrors),[]);return a.concat(f)}),$=g(()=>{const a=p(e.$errors)||[],f=t.value.filter(c=>(p(c).$errors||[]).length).reduce((c,_)=>c.concat(..._.$errors),[]);return a.concat(f)}),i=g(()=>t.value.some(a=>a.$invalid)||p(e.$invalid)||!1),v=g(()=>t.value.some(a=>p(a.$pending))||p(e.$pending)||!1),u=g(()=>t.value.some(a=>a.$dirty)||t.value.some(a=>a.$anyDirty)||s.value),d=g(()=>s.value?v.value||i.value:!1),m=()=>{e.$touch(),t.value.forEach(a=>{a.$touch()})},x=()=>{e.$commit(),t.value.forEach(a=>{a.$commit()})},h=()=>{e.$reset(),t.value.forEach(a=>{a.$reset()})};return t.value.length&&t.value.every(a=>a.$dirty)&&m(),{$dirty:s,$errors:$,$invalid:i,$anyDirty:u,$error:d,$pending:v,$touch:m,$reset:h,$silentErrors:l,$commit:x}}function q(e){const r=Ne(function(){return T(),Me(function(){if(c.$rewardEarly)return Z(),Ae(X)},function(){return ce(X,function(){return new Promise(y=>{if(!L.value)return y(!I.value);const E=O(L,()=>{y(!I.value),E()})})})})});let{validations:n,state:t,key:s,parentKey:l,childResults:$,resultsCache:i,globalConfig:v={},instance:u,externalResults:d}=e;const m=l?`${l}.${s}`:s,{rules:x,nestedValidators:h,config:a,validationGroups:f}=Le(n),c=Object.assign({},v,a),_=s?g(()=>{const y=p(t);return y?p(y[s]):void 0}):t,k=Object.assign({},p(d)||{}),U=g(()=>{const y=p(d);return s?y?p(y[s]):void 0:y}),J=Be(x,_,s,i,m,c,u,U,t),C=De(h,_,m,i,c,u,U),W={};f&&Object.entries(f).forEach(y=>{let[E,w]=y;W[E]={$invalid:B(w,C,"$invalid"),$error:B(w,C,"$error"),$pending:B(w,C,"$pending"),$errors:ee(w,C,"$errors"),$silentErrors:ee(w,C,"$silentErrors")}});const{$dirty:F,$errors:fe,$invalid:I,$anyDirty:me,$error:$e,$pending:L,$touch:T,$reset:ve,$silentErrors:pe,$commit:Z}=Ge(J,C,$),he=s?g({get:()=>p(_),set:y=>{F.value=!0;const E=p(t),w=p(d);w&&(w[s]=k[s]),G(E[s])?E[s].value=y:E[s]=y}}):null;s&&c.$autoDirty&&O(_,()=>{F.value||T();const y=p(d);y&&(y[s]=k[s])},{flush:"sync"});function ge(y){return($.value||{})[y]}function xe(){G(d)?d.value=k:Object.keys(k).length===0?Object.keys(d).forEach(y=>{delete d[y]}):Object.assign(d,k)}return H(Object.assign({},J,{$model:he,$dirty:F,$error:$e,$errors:fe,$invalid:I,$anyDirty:me,$pending:L,$touch:T,$reset:ve,$path:m||Se,$silentErrors:pe,$validate:r,$commit:Z},$&&{$getResultsForChild:ge,$clearExternalResults:xe,$validationGroups:W},C))}class qe{constructor(){this.storage=new Map}set(r,n,t){this.storage.set(r,{rules:n,result:t})}checkRulesValidity(r,n,t){const s=Object.keys(t),l=Object.keys(n);return l.length!==s.length||!l.every(i=>s.includes(i))?!1:l.every(i=>n[i].$params?Object.keys(n[i].$params).every(v=>p(t[i].$params[v])===p(n[i].$params[v])):!0)}get(r,n){const t=this.storage.get(r);if(!t)return;const{rules:s,result:l}=t,$=this.checkRulesValidity(r,n,s),i=l.$unwatch?l.$unwatch:()=>({});return $?l:{$dirty:l.$dirty,$partial:!0,$unwatch:i}}}const P={COLLECT_ALL:!0,COLLECT_NONE:!1},te=Symbol("vuelidate#injectChildResults"),se=Symbol("vuelidate#removeChildResults");function He(e){let{$scope:r,instance:n}=e;const t={},s=b([]),l=g(()=>s.value.reduce((d,m)=>(d[m]=p(t[m]),d),{}));function $(d,m){let{$registerAs:x,$scope:h,$stopPropagation:a}=m;a||r===P.COLLECT_NONE||h===P.COLLECT_NONE||r!==P.COLLECT_ALL&&r!==h||(t[x]=d,s.value.push(x))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],$);function i(d){s.value=s.value.filter(m=>m!==d),delete t[d]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],i);const v=K(te,[]);Q(te,n.__vuelidateInjectInstances);const u=K(se,[]);return Q(se,n.__vuelidateRemoveInstances),{childResults:l,sendValidationResultsToParent:v,removeValidationResultsFromParent:u}}function ue(e){return new Proxy(e,{get(r,n){return typeof r[n]=="object"?ue(r[n]):g(()=>r[n])}})}let re=0;function Ue(e,r){var n;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(t=e,e=void 0,r=void 0);let{$registerAs:s,$scope:l=P.COLLECT_ALL,$stopPropagation:$,$externalResults:i,currentVueInstance:v}=t;const u=v||((n=ye())===null||n===void 0?void 0:n.proxy),d=u?u.$options:{};s||(re+=1,s=`_vuelidate_${re}`);const m=b({}),x=new qe,{childResults:h,sendValidationResultsToParent:a,removeValidationResultsFromParent:f}=u?He({$scope:l,instance:u}):{childResults:b({})};if(!e&&d.validations){const c=d.validations;r=b({}),_e(()=>{r.value=u,O(()=>z(c)?c.call(r.value,new ue(r.value)):c,_=>{m.value=q({validations:_,state:r,childResults:h,resultsCache:x,globalConfig:t,instance:u,externalResults:i||u.vuelidateExternalResults})},{immediate:!0})}),t=d.validationsConfig||t}else{const c=G(e)||Pe(e)?e:H(e||{});O(c,_=>{m.value=q({validations:_,state:r,childResults:h,resultsCache:x,globalConfig:t,instance:u??{},externalResults:i})},{immediate:!0})}return u&&(a.forEach(c=>c(m,{$registerAs:s,$scope:l,$stopPropagation:$})),be(()=>f.forEach(c=>c(s)))),g(()=>Object.assign({},p(m.value),h.value))}const de=e=>{if(e=p(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let r in e)return!0;return!1}return!!String(e).length};function j(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t=>(t=p(t),!de(t)||r.every(s=>s.test(t)))}j(/^[a-zA-Z]*$/);j(/^[a-zA-Z0-9]*$/);j(/^\d*(\.\d+)?$/);const Je=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var We=j(Je),Ze={$validator:We,$message:"Value is not a valid email address",$params:{type:"email"}};function Ke(e){return typeof e=="string"&&(e=e.trim()),de(e)}var D={$validator:Ke,$message:"Value is required",$params:{type:"required"}};const Qe=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;j(Qe);j(/(^[0-9]*$)|(^-[0-9]+$)/);j(/^[-]?\d*(\.\d+)?$/);function V(e,r){let n=document.getElementById("notify");const t={info:{icon:`<svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`,color:"blue-500"},error:{icon:`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`,color:"alertError"},warning:{icon:`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
</svg>`,color:"yellow-500"},success:{icon:`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`,color:"alertSuccess"}};let s=document.createElement("div");s.className=`relative flex items-center ${t[e].color} text-white text-sm font-bold px-4 py-3 rounded-md opacity-0 transform transition-all duration-500 mb-1 z-10`,s.innerHTML=`${t[e].icon}<p>${r}</p>`,n.appendChild(s),setTimeout(()=>{s.classList.remove("opacity-0"),s.classList.add("opacity-1")},1),setTimeout(()=>{s.classList.remove("opacity-1"),s.classList.add("opacity-0"),s.style.margin=0,s.style.padding=0},5e3),setTimeout(()=>{s.style.setProperty("height","0","important")},5100),setTimeout(()=>{n.removeChild(s)},5700)}const Xe={data(){return{name:"",email:"",message:""}},setup(){return{v$:Ue()}},validations(){return{name:{required:D},email:{required:D,email:Ze},message:{required:D}}},methods:{resetForm(){this.name="",this.email="",this.message=""},async handleForm(){if(await this.v$.$validate(),this.v$.$error)this.v$.$errors.length==1&&this.v$.email.$error?V("error",this.$t("alert.errorMail")):V("error",this.$t("alert.errorFields"));else{try{fetch("https://api.mynotifier.app",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:"486aff1e-4109-4de0-a657-bebefa6126e4",message:"Mensaje de "+this.name,description:this.message+`
`+this.email,type:"info"})}),this.v$.$reset(),this.resetForm()}catch{V("error",this.$t("alert.errorSystem"))}V("success",this.$t("alert.success"))}}}};const Ye=e=>(Ee("data-v-0fb6e7ea"),e=e(),je(),e),et={class:"flex flex-wrap -mx-3 mb-6"},tt={class:"w-full px-3"},st={class:"block uppercase tracking-wide text-xs font-bold mb-2",for:"grid-first-name"},rt={class:"flex flex-wrap -mx-3 mb-6"},nt={class:"w-full px-3"},at={class:"block uppercase tracking-wide text-xs font-bold mb-2",for:"grid-last-name"},ot={class:"flex flex-wrap -mx-3 mb-2"},lt={class:"w-full px-3"},it={class:"block uppercase tracking-wide text-xs font-bold mb-2",for:"grid-message"},ct={class:"relative h-[56px] mt-9"},ut={class:"absolute"},dt={style:{"--clr":"#0FF0FC"},class:"",type:"submit",formnovalidate:"false"},ft=Ye(()=>o("i",null,null,-1));function mt(e,r,n,t,s,l){return ne(),ae("form",{class:"w-full min-w-[300px]",onSubmit:r[3]||(r[3]=Ce($=>l.handleForm(),["prevent"]))},[o("div",et,[o("div",tt,[o("label",st,R(e.$t("contactForm.name")),1),S(o("input",{"onUpdate:modelValue":r[0]||(r[0]=$=>s.name=$),class:M(["appearance-none block w-full bg-[#181818] border-b-2 border-transparent py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-primary",{"border-b-red-600 focus:border-b-red-600":t.v$.name.$error}]),id:"grid-first-name",type:"text",placeholder:"Jane"},null,2),[[A,s.name]])])]),o("div",rt,[o("div",nt,[o("label",at,R(e.$t("contactForm.email")),1),S(o("input",{style:{"--clr":"#0FF0FC"},"onUpdate:modelValue":r[1]||(r[1]=$=>s.email=$),class:M(["appearance-none block w-full bg-[#181818] border-b-2 border-transparent py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-primary",{"border-b-red-600 focus:border-b-red-600":t.v$.email.$error}]),id:"grid-email",type:"email",placeholder:"example@gmail.com",novalidate:""},null,2),[[A,s.email]])])]),o("div",ot,[o("div",lt,[o("label",it,R(e.$t("contactForm.message")),1),S(o("textarea",{"onUpdate:modelValue":r[2]||(r[2]=$=>s.message=$),class:M(["appearance-none block w-full bg-[#181818] border-b-2 border-transparent py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-primary",{"border-b-red-600 focus:border-b-red-600":t.v$.message.$error}]),id:"grid-message",placeholder:"Hi, im trying to connect with you",rows:"10"},null,2),[[A,s.message]])])]),o("div",ct,[o("div",ut,[o("button",dt,[o("span",null,R(e.$t("contactForm.submit")),1),ft])])])],32)}const $t=Ve(Xe,[["render",mt],["__scopeId","data-v-0fb6e7ea"]]),vt={class:"flex md:self-center z-10 lg:px-16 w-full max-lg:px-4 flex-wrap max-lg:p-20"},pt={class:"text-5xl text-primary font-serif mb-7 max-md:mb-1 max-md:text-4xl"},ht=o("br",null,null,-1),gt={class:"flex w-full flex-wrap"},xt={class:"w-1/2 flex max-md:justify-center max-md:w-full md:pr-14"},yt={class:"w-1/2 p-4 flex max-lg:justify-center max-md:w-full bg-secundary shadowPrimary max-w-[360px] max-md:mt-8"},_t={class:"text-base p-10 text-[#909096] lg:py-5"},bt={class:"flex"},wt=o("div",{class:"w-[35px] flex justify-end"},[o("i",{class:"fa fa-phone text-3xl text-primary","aria-hidden":"true","data-v-6b7d1e37":""})],-1),Rt={class:"m-1 leading-5"},Ct={class:"text-white text-lg"},Et={class:"flex"},jt=o("div",{class:"w-[35px] flex justify-end"},[o("i",{class:"fa fa-envelope text-2xl text-primary","aria-hidden":"true","data-v-6b7d1e37":""})],-1),kt={class:"m-1 leading-5"},Ot={class:"text-white text-lg"},Vt={class:"flex"},Pt=o("div",{class:"w-[35px] flex justify-end"},[o("i",{class:"fa fa-map-marker text-3xl text-primary","aria-hidden":"true","data-v-6b7d1e37":""})],-1),zt={class:"m-1 leading-5"},Ft={class:"text-white text-lg"},It=o("div",{class:"google-map mt-4"},[o("iframe",{class:"w-full lg:w-[250px]",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106550.09293124227!2d-70.64624244234761!3d-33.43131501686759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Santiago%20Metropolitan%20Region!5e0!3m2!1sen!2scl!4v1678205159815!5m2!1sen!2scl",width:"400",height:"300",style:{border:"0"},allowfullscreen:"false",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),Lt=o("div",{id:"notify",class:"fixed bottom-[5%] right-[5%]"},null,-1),At=ke({__name:"Contact",setup(e){return(r,n)=>(ne(),ae("div",vt,[o("div",null,[o("h1",pt,R(r.$t("contactTitle")),1),ht]),o("div",gt,[o("div",xt,[Oe($t)]),o("div",yt,[o("div",_t,[o("div",bt,[wt,o("div",Rt,[o("p",Ct,R(r.$t("contactInfo.phone")),1),N(" 9 4288 9061 ")])]),o("div",Et,[jt,o("div",kt,[o("p",Ot,R(r.$t("contactInfo.email")),1),N(" dannarmand17@gmail.com ")])]),o("div",Vt,[Pt,o("div",zt,[o("p",Ft,R(r.$t("contactInfo.location")),1),N(" Santiago, Chile ")])]),It])])]),Lt]))}});export{At as default};
