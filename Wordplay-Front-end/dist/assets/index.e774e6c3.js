(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ka(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Aa(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=de(r)?_l(r):Aa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(de(e))return e;if(ae(e))return e}}const vl=/;(?![^(]*\))/g,bl=/:([^]+)/,yl=/\/\*.*?\*\//gs;function _l(e){const t={};return e.replace(yl,"").split(vl).forEach(n=>{if(n){const r=n.split(bl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Oa(e){let t="";if(de(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=Oa(e[n]);r&&(t+=r+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wl=ka(xl);function To(e){return!!e||e===""}const cp=e=>de(e)?e:e==null?"":H(e)||ae(e)&&(e.toString===Fo||!B(e.toString))?JSON.stringify(e,No,2):String(e),No=(e,t)=>t&&t.__v_isRef?No(e,t.value):Bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Mo(t)?{[`Set(${t.size})`]:[...t.values()]}:ae(t)&&!H(t)&&!jo(t)?String(t):t,ee={},Ht=[],Fe=()=>{},El=()=>!1,kl=/^on[^a-z]/,vr=e=>kl.test(e),Pa=e=>e.startsWith("onUpdate:"),ye=Object.assign,Sa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Al=Object.prototype.hasOwnProperty,q=(e,t)=>Al.call(e,t),H=Array.isArray,Bt=e=>br(e)==="[object Map]",Mo=e=>br(e)==="[object Set]",B=e=>typeof e=="function",de=e=>typeof e=="string",Ca=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",Lo=e=>ae(e)&&B(e.then)&&B(e.catch),Fo=Object.prototype.toString,br=e=>Fo.call(e),Ol=e=>br(e).slice(8,-1),jo=e=>br(e)==="[object Object]",Ra=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Jn=ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Pl=/-(\w)/g,Ve=yr(e=>e.replace(Pl,(t,n)=>n?n.toUpperCase():"")),Sl=/\B([A-Z])/g,Zt=yr(e=>e.replace(Sl,"-$1").toLowerCase()),_r=yr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Lr=yr(e=>e?`on${_r(e)}`:""),yn=(e,t)=>!Object.is(e,t),Zn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ir=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},or=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ui;const Cl=()=>ui||(ui=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ue;class $o{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ue,!t&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ue;try{return Ue=this,t()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function Rl(e){return new $o(e)}function Il(e,t=Ue){t&&t.active&&t.effects.push(e)}const Ia=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Do=e=>(e.w&mt)>0,zo=e=>(e.n&mt)>0,Tl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=mt},Nl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Do(a)&&!zo(a)?a.delete(e):t[n++]=a,a.w&=~mt,a.n&=~mt}t.length=n}},Vr=new WeakMap;let fn=0,mt=1;const Xr=30;let Te;const St=Symbol(""),Gr=Symbol("");class Ta{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Il(this,r)}run(){if(!this.active)return this.fn();let t=Te,n=ct;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,ct=!0,mt=1<<++fn,fn<=Xr?Tl(this):di(this),this.fn()}finally{fn<=Xr&&Nl(this),mt=1<<--fn,Te=this.parent,ct=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(di(this),this.onStop&&this.onStop(),this.active=!1)}}function di(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ct=!0;const Ho=[];function en(){Ho.push(ct),ct=!1}function tn(){const e=Ho.pop();ct=e===void 0?!0:e}function Ae(e,t,n){if(ct&&Te){let r=Vr.get(e);r||Vr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ia()),Bo(a)}}function Bo(e,t){let n=!1;fn<=Xr?zo(e)||(e.n|=mt,n=!Do(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function Je(e,t,n,r,a,i){const o=Vr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e)){const l=or(r);o.forEach((c,f)=>{(f==="length"||f>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?Ra(n)&&s.push(o.get("length")):(s.push(o.get(St)),Bt(e)&&s.push(o.get(Gr)));break;case"delete":H(e)||(s.push(o.get(St)),Bt(e)&&s.push(o.get(Gr)));break;case"set":Bt(e)&&s.push(o.get(St));break}if(s.length===1)s[0]&&Qr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Qr(Ia(l))}}function Qr(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&mi(r);for(const r of n)r.computed||mi(r)}function mi(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ml=ka("__proto__,__v_isRef,__isVue"),Uo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ca)),Ll=Na(),Fl=Na(!1,!0),jl=Na(!0),pi=$l();function $l(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){en();const r=V(this)[t].apply(this,n);return tn(),r}}),e}function Na(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ef:Vo:t?qo:Yo).get(r))return r;const o=H(r);if(!e&&o&&q(pi,a))return Reflect.get(pi,a,i);const s=Reflect.get(r,a,i);return(Ca(a)?Uo.has(a):Ml(a))||(e||Ae(r,"get",a),t)?s:ge(s)?o&&Ra(a)?s:s.value:ae(s)?e?Xo(s):Tn(s):s}}const Dl=Ko(),zl=Ko(!0);function Ko(e=!1){return function(n,r,a,i){let o=n[r];if(qt(o)&&ge(o)&&!ge(a))return!1;if(!e&&(!sr(a)&&!qt(a)&&(o=V(o),a=V(a)),!H(n)&&ge(o)&&!ge(a)))return o.value=a,!0;const s=H(n)&&Ra(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?yn(a,o)&&Je(n,"set",r,a):Je(n,"add",r,a)),l}}function Hl(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Je(e,"delete",t,void 0),r}function Bl(e,t){const n=Reflect.has(e,t);return(!Ca(t)||!Uo.has(t))&&Ae(e,"has",t),n}function Ul(e){return Ae(e,"iterate",H(e)?"length":St),Reflect.ownKeys(e)}const Wo={get:Ll,set:Dl,deleteProperty:Hl,has:Bl,ownKeys:Ul},Kl={get:jl,set(e,t){return!0},deleteProperty(e,t){return!0}},Wl=ye({},Wo,{get:Fl,set:zl}),Ma=e=>e,xr=e=>Reflect.getPrototypeOf(e);function jn(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);n||(t!==i&&Ae(a,"get",t),Ae(a,"get",i));const{has:o}=xr(a),s=r?Ma:n?$a:_n;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function $n(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return t||(e!==a&&Ae(r,"has",e),Ae(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Dn(e,t=!1){return e=e.__v_raw,!t&&Ae(V(e),"iterate",St),Reflect.get(e,"size",e)}function hi(e){e=V(e);const t=V(this);return xr(t).has.call(t,e)||(t.add(e),Je(t,"add",e,e)),this}function gi(e,t){t=V(t);const n=V(this),{has:r,get:a}=xr(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?yn(t,o)&&Je(n,"set",e,t):Je(n,"add",e,t),this}function vi(e){const t=V(this),{has:n,get:r}=xr(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Je(t,"delete",e,void 0),i}function bi(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Je(e,"clear",void 0,void 0),n}function zn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?Ma:e?$a:_n;return!e&&Ae(s,"iterate",St),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function Hn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=Bt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?Ma:t?$a:_n;return!t&&Ae(i,"iterate",l?Gr:St),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:s?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function it(e){return function(...t){return e==="delete"?!1:this}}function Yl(){const e={get(i){return jn(this,i)},get size(){return Dn(this)},has:$n,add:hi,set:gi,delete:vi,clear:bi,forEach:zn(!1,!1)},t={get(i){return jn(this,i,!1,!0)},get size(){return Dn(this)},has:$n,add:hi,set:gi,delete:vi,clear:bi,forEach:zn(!1,!0)},n={get(i){return jn(this,i,!0)},get size(){return Dn(this,!0)},has(i){return $n.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:zn(!0,!1)},r={get(i){return jn(this,i,!0,!0)},get size(){return Dn(this,!0)},has(i){return $n.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:zn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Hn(i,!1,!1),n[i]=Hn(i,!0,!1),t[i]=Hn(i,!1,!0),r[i]=Hn(i,!0,!0)}),[e,n,t,r]}const[ql,Vl,Xl,Gl]=Yl();function La(e,t){const n=t?e?Gl:Xl:e?Vl:ql;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const Ql={get:La(!1,!1)},Jl={get:La(!1,!0)},Zl={get:La(!0,!1)},Yo=new WeakMap,qo=new WeakMap,Vo=new WeakMap,ef=new WeakMap;function tf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nf(e){return e.__v_skip||!Object.isExtensible(e)?0:tf(Ol(e))}function Tn(e){return qt(e)?e:Fa(e,!1,Wo,Ql,Yo)}function rf(e){return Fa(e,!1,Wl,Jl,qo)}function Xo(e){return Fa(e,!0,Kl,Zl,Vo)}function Fa(e,t,n,r,a){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=nf(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ut(e){return qt(e)?Ut(e.__v_raw):!!(e&&e.__v_isReactive)}function qt(e){return!!(e&&e.__v_isReadonly)}function sr(e){return!!(e&&e.__v_isShallow)}function Go(e){return Ut(e)||qt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function ja(e){return ir(e,"__v_skip",!0),e}const _n=e=>ae(e)?Tn(e):e,$a=e=>ae(e)?Xo(e):e;function Qo(e){ct&&Te&&(e=V(e),Bo(e.dep||(e.dep=Ia())))}function Jo(e,t){e=V(e),e.dep&&Qr(e.dep)}function ge(e){return!!(e&&e.__v_isRef===!0)}function Zo(e){return es(e,!1)}function af(e){return es(e,!0)}function es(e,t){return ge(e)?e:new of(e,t)}class of{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:_n(t)}get value(){return Qo(this),this._value}set value(t){const n=this.__v_isShallow||sr(t)||qt(t);t=n?t:V(t),yn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:_n(t),Jo(this))}}function ut(e){return ge(e)?e.value:e}const sf={get:(e,t,n)=>ut(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ge(a)&&!ge(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ts(e){return Ut(e)?e:new Proxy(e,sf)}var ns;class lf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ns]=!1,this._dirty=!0,this.effect=new Ta(t,()=>{this._dirty||(this._dirty=!0,Jo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return Qo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}ns="__v_isReadonly";function ff(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=Fe):(r=e.get,a=e.set),new lf(r,a,i||!a,n)}function dt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){wr(i,t,n)}return a}function je(e,t,n,r){if(B(e)){const i=dt(e,t,n,r);return i&&Lo(i)&&i.catch(o=>{wr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(je(e[i],t,n,r));return a}function wr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){dt(l,null,10,[e,o,s]);return}}cf(e,n,a,r)}function cf(e,t,n,r=!0){console.error(e)}let xn=!1,Jr=!1;const he=[];let Ye=0;const Kt=[];let Ge=null,Et=0;const rs=Promise.resolve();let Da=null;function as(e){const t=Da||rs;return e?t.then(this?e.bind(this):e):t}function uf(e){let t=Ye+1,n=he.length;for(;t<n;){const r=t+n>>>1;wn(he[r])<e?t=r+1:n=r}return t}function za(e){(!he.length||!he.includes(e,xn&&e.allowRecurse?Ye+1:Ye))&&(e.id==null?he.push(e):he.splice(uf(e.id),0,e),is())}function is(){!xn&&!Jr&&(Jr=!0,Da=rs.then(ss))}function df(e){const t=he.indexOf(e);t>Ye&&he.splice(t,1)}function mf(e){H(e)?Kt.push(...e):(!Ge||!Ge.includes(e,e.allowRecurse?Et+1:Et))&&Kt.push(e),is()}function yi(e,t=xn?Ye+1:0){for(;t<he.length;t++){const n=he[t];n&&n.pre&&(he.splice(t,1),t--,n())}}function os(e){if(Kt.length){const t=[...new Set(Kt)];if(Kt.length=0,Ge){Ge.push(...t);return}for(Ge=t,Ge.sort((n,r)=>wn(n)-wn(r)),Et=0;Et<Ge.length;Et++)Ge[Et]();Ge=null,Et=0}}const wn=e=>e.id==null?1/0:e.id,pf=(e,t)=>{const n=wn(e)-wn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ss(e){Jr=!1,xn=!0,he.sort(pf);const t=Fe;try{for(Ye=0;Ye<he.length;Ye++){const n=he[Ye];n&&n.active!==!1&&dt(n,null,14)}}finally{Ye=0,he.length=0,os(),xn=!1,Da=null,(he.length||Kt.length)&&ss()}}function hf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ee;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[f]||ee;p&&(a=n.map(g=>de(g)?g.trim():g)),d&&(a=n.map(or))}let s,l=r[s=Lr(t)]||r[s=Lr(Ve(t))];!l&&i&&(l=r[s=Lr(Zt(t))]),l&&je(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,je(c,e,6,a)}}function ls(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!B(e)){const l=c=>{const f=ls(c,t,!0);f&&(s=!0,ye(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ae(e)&&r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):ye(o,i),ae(e)&&r.set(e,o),o)}function Er(e,t){return!e||!vr(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,Zt(t))||q(e,t))}let Se=null,kr=null;function lr(e){const t=Se;return Se=e,kr=e&&e.type.__scopeId||null,t}function gf(e){kr=e}function vf(){kr=null}function Wt(e,t=Se,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Si(-1);const i=lr(t);let o;try{o=e(...a)}finally{lr(i),r._d&&Si(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Fr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:p,setupState:g,ctx:A,inheritAttrs:C}=e;let L,b;const x=lr(e);try{if(n.shapeFlag&4){const D=a||r;L=We(f.call(D,D,d,i,g,p,A)),b=l}else{const D=t;L=We(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),b=t.props?l:bf(l)}}catch(D){mn.length=0,wr(D,e,1),L=oe(Rt)}let O=L;if(b&&C!==!1){const D=Object.keys(b),{shapeFlag:K}=O;D.length&&K&7&&(o&&D.some(Pa)&&(b=yf(b,o)),O=Vt(O,b))}return n.dirs&&(O=Vt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),L=O,lr(x),L}const bf=e=>{let t;for(const n in e)(n==="class"||n==="style"||vr(n))&&((t||(t={}))[n]=e[n]);return t},yf=(e,t)=>{const n={};for(const r in e)(!Pa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function _f(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?_i(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!Er(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?_i(r,o,c):!0:!!o;return!1}function _i(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Er(n,i))return!0}return!1}function xf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const wf=e=>e.__isSuspense;function Ef(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):mf(e)}function er(e,t){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[e]=t}}function Qe(e,t,n=!1){const r=pe||Se;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r.proxy):t}}const Bn={};function un(e,t,n){return fs(e,t,n)}function fs(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ee){const s=pe;let l,c=!1,f=!1;if(ge(e)?(l=()=>e.value,c=sr(e)):Ut(e)?(l=()=>e,r=!0):H(e)?(f=!0,c=e.some(O=>Ut(O)||sr(O)),l=()=>e.map(O=>{if(ge(O))return O.value;if(Ut(O))return At(O);if(B(O))return dt(O,s,2)})):B(e)?t?l=()=>dt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),je(e,s,3,[p])}:l=Fe,t&&r){const O=l;l=()=>At(O())}let d,p=O=>{d=b.onStop=()=>{dt(O,s,4)}},g;if(An)if(p=Fe,t?n&&je(t,s,3,[l(),f?[]:void 0,p]):l(),a==="sync"){const O=bc();g=O.__watcherHandles||(O.__watcherHandles=[])}else return Fe;let A=f?new Array(e.length).fill(Bn):Bn;const C=()=>{if(!!b.active)if(t){const O=b.run();(r||c||(f?O.some((D,K)=>yn(D,A[K])):yn(O,A)))&&(d&&d(),je(t,s,3,[O,A===Bn?void 0:f&&A[0]===Bn?[]:A,p]),A=O)}else b.run()};C.allowRecurse=!!t;let L;a==="sync"?L=C:a==="post"?L=()=>we(C,s&&s.suspense):(C.pre=!0,s&&(C.id=s.uid),L=()=>za(C));const b=new Ta(l,L);t?n?C():A=b.run():a==="post"?we(b.run.bind(b),s&&s.suspense):b.run();const x=()=>{b.stop(),s&&s.scope&&Sa(s.scope.effects,b)};return g&&g.push(x),x}function kf(e,t,n){const r=this.proxy,a=de(e)?e.includes(".")?cs(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=pe;Xt(this);const s=fs(a,i.bind(r),n);return o?Xt(o):Ct(),s}function cs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function At(e,t){if(!ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))At(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)At(e[n],t);else if(Mo(e)||Bt(e))e.forEach(n=>{At(n,t)});else if(jo(e))for(const n in e)At(e[n],t);return e}function nn(e){return B(e)?{setup:e,name:e.name}:e}const tr=e=>!!e.type.__asyncLoader,us=e=>e.type.__isKeepAlive;function Af(e,t){ds(e,"a",t)}function Of(e,t){ds(e,"da",t)}function ds(e,t,n=pe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ar(t,r,n),n){let a=n.parent;for(;a&&a.parent;)us(a.parent.vnode)&&Pf(r,t,n,a),a=a.parent}}function Pf(e,t,n,r){const a=Ar(t,e,r,!0);ms(()=>{Sa(r[t],a)},n)}function Ar(e,t,n=pe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;en(),Xt(n);const s=je(t,n,e,o);return Ct(),tn(),s});return r?a.unshift(i):a.push(i),i}}const nt=e=>(t,n=pe)=>(!An||e==="sp")&&Ar(e,(...r)=>t(...r),n),Sf=nt("bm"),Cf=nt("m"),Rf=nt("bu"),If=nt("u"),Tf=nt("bum"),ms=nt("um"),Nf=nt("sp"),Mf=nt("rtg"),Lf=nt("rtc");function Ff(e,t=pe){Ar("ec",e,t)}function up(e,t){const n=Se;if(n===null)return e;const r=Sr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=ee]=t[i];o&&(B(o)&&(o={mounted:o,updated:o}),o.deep&&At(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function yt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(en(),je(l,n,8,[e.el,s,e,t]),tn())}}const ps="components";function Zr(e,t){return $f(ps,e,!0,t)||e}const jf=Symbol();function $f(e,t,n=!0,r=!1){const a=Se||pe;if(a){const i=a.type;if(e===ps){const s=hc(i,!1);if(s&&(s===t||s===Ve(t)||s===_r(Ve(t))))return i}const o=xi(a[e]||i[e],t)||xi(a.appContext[e],t);return!o&&r?i:o}}function xi(e,t){return e&&(e[t]||e[Ve(t)]||e[_r(Ve(t))])}function dp(e,t,n,r){let a;const i=n&&n[r];if(H(e)||de(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ae(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const ea=e=>e?As(e)?Sr(e)||e.proxy:ea(e.parent):null,dn=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ea(e.parent),$root:e=>ea(e.root),$emit:e=>e.emit,$options:e=>Ha(e),$forceUpdate:e=>e.f||(e.f=()=>za(e.update)),$nextTick:e=>e.n||(e.n=as.bind(e.proxy)),$watch:e=>kf.bind(e)}),jr=(e,t)=>e!==ee&&!e.__isScriptSetup&&q(e,t),Df={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(jr(r,t))return o[t]=1,r[t];if(a!==ee&&q(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&q(c,t))return o[t]=3,i[t];if(n!==ee&&q(n,t))return o[t]=4,n[t];ta&&(o[t]=0)}}const f=dn[t];let d,p;if(f)return t==="$attrs"&&Ae(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ee&&q(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,q(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return jr(a,t)?(a[t]=n,!0):r!==ee&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ee&&q(e,o)||jr(t,o)||(s=i[0])&&q(s,o)||q(r,o)||q(dn,o)||q(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ta=!0;function zf(e){const t=Ha(e),n=e.proxy,r=e.ctx;ta=!1,t.beforeCreate&&wi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:A,activated:C,deactivated:L,beforeDestroy:b,beforeUnmount:x,destroyed:O,unmounted:D,render:K,renderTracked:re,renderTriggered:le,errorCaptured:Ee,serverPrefetch:ve,expose:Pe,inheritAttrs:at,components:ze,directives:Nt,filters:vt}=t;if(c&&Hf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const G=o[J];B(G)&&(r[J]=G.bind(n))}if(a){const J=a.call(n,n);ae(J)&&(e.data=Tn(J))}if(ta=!0,i)for(const J in i){const G=i[J],Ce=B(G)?G.bind(n,n):B(G.get)?G.get.bind(n,n):Fe,bt=!B(G)&&B(G.set)?G.set.bind(n):Fe,Re=se({get:Ce,set:bt});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Re.value,set:_e=>Re.value=_e})}if(s)for(const J in s)hs(s[J],r,n,J);if(l){const J=B(l)?l.call(n):l;Reflect.ownKeys(J).forEach(G=>{er(G,J[G])})}f&&wi(f,e,"c");function ce(J,G){H(G)?G.forEach(Ce=>J(Ce.bind(n))):G&&J(G.bind(n))}if(ce(Sf,d),ce(Cf,p),ce(Rf,g),ce(If,A),ce(Af,C),ce(Of,L),ce(Ff,Ee),ce(Lf,re),ce(Mf,le),ce(Tf,x),ce(ms,D),ce(Nf,ve),H(Pe))if(Pe.length){const J=e.exposed||(e.exposed={});Pe.forEach(G=>{Object.defineProperty(J,G,{get:()=>n[G],set:Ce=>n[G]=Ce})})}else e.exposed||(e.exposed={});K&&e.render===Fe&&(e.render=K),at!=null&&(e.inheritAttrs=at),ze&&(e.components=ze),Nt&&(e.directives=Nt)}function Hf(e,t,n=Fe,r=!1){H(e)&&(e=na(e));for(const a in e){const i=e[a];let o;ae(i)?"default"in i?o=Qe(i.from||a,i.default,!0):o=Qe(i.from||a):o=Qe(i),ge(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function wi(e,t,n){je(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function hs(e,t,n,r){const a=r.includes(".")?cs(n,r):()=>n[r];if(de(e)){const i=t[e];B(i)&&un(a,i)}else if(B(e))un(a,e.bind(n));else if(ae(e))if(H(e))e.forEach(i=>hs(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&un(a,i,e)}}function Ha(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>fr(l,c,o,!0)),fr(l,t,o)),ae(t)&&i.set(t,l),l}function fr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&fr(e,i,n,!0),a&&a.forEach(o=>fr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Bf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Bf={data:Ei,props:wt,emits:wt,methods:wt,computed:wt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:wt,directives:wt,watch:Kf,provide:Ei,inject:Uf};function Ei(e,t){return t?e?function(){return ye(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function Uf(e,t){return wt(na(e),na(t))}function na(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function wt(e,t){return e?ye(ye(Object.create(null),e),t):t}function Kf(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Wf(e,t,n,r=!1){const a={},i={};ir(i,Pr,1),e.propsDefaults=Object.create(null),gs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:rf(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Yf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(Er(e.emitsOptions,p))continue;const g=t[p];if(l)if(q(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const A=Ve(p);a[A]=ra(l,s,A,g,e,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{gs(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!q(t,d)&&((f=Zt(d))===d||!q(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=ra(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!q(t,d)&&!0)&&(delete i[d],c=!0)}c&&Je(e,"set","$attrs")}function gs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Jn(l))continue;const c=t[l];let f;a&&q(a,f=Ve(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:Er(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=V(n),c=s||ee;for(let f=0;f<i.length;f++){const d=i[f];n[d]=ra(a,l,d,c[d],e,!q(c,d))}}return o}function ra(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&B(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Xt(a),r=c[n]=l.call(null,t),Ct())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Zt(n))&&(r=!0))}return r}function vs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!B(e)){const f=d=>{l=!0;const[p,g]=vs(d,t,!0);ye(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return ae(e)&&r.set(e,Ht),Ht;if(H(i))for(let f=0;f<i.length;f++){const d=Ve(i[f]);ki(d)&&(o[d]=ee)}else if(i)for(const f in i){const d=Ve(f);if(ki(d)){const p=i[f],g=o[d]=H(p)||B(p)?{type:p}:Object.assign({},p);if(g){const A=Pi(Boolean,g.type),C=Pi(String,g.type);g[0]=A>-1,g[1]=C<0||A<C,(A>-1||q(g,"default"))&&s.push(d)}}}const c=[o,s];return ae(e)&&r.set(e,c),c}function ki(e){return e[0]!=="$"}function Ai(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Oi(e,t){return Ai(e)===Ai(t)}function Pi(e,t){return H(t)?t.findIndex(n=>Oi(n,e)):B(t)&&Oi(t,e)?0:-1}const bs=e=>e[0]==="_"||e==="$stable",Ba=e=>H(e)?e.map(We):[We(e)],qf=(e,t,n)=>{if(t._n)return t;const r=Wt((...a)=>Ba(t(...a)),n);return r._c=!1,r},ys=(e,t,n)=>{const r=e._ctx;for(const a in e){if(bs(a))continue;const i=e[a];if(B(i))t[a]=qf(a,i,r);else if(i!=null){const o=Ba(i);t[a]=()=>o}}},_s=(e,t)=>{const n=Ba(t);e.slots.default=()=>n},Vf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),ir(t,"_",n)):ys(t,e.slots={})}else e.slots={},t&&_s(e,t);ir(e.slots,Pr,1)},Xf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ee;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ye(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ys(t,a)),o=t}else t&&(_s(e,t),o={default:1});if(i)for(const s in a)!bs(s)&&!(s in o)&&delete a[s]};function xs(){return{app:null,config:{isNativeTag:El,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gf=0;function Qf(e,t){return function(r,a=null){B(r)||(r=Object.assign({},r)),a!=null&&!ae(a)&&(a=null);const i=xs(),o=new Set;let s=!1;const l=i.app={_uid:Gf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:yc,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(l,...f)):B(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const p=oe(r,a);return p.appContext=i,f&&t?t(p,c):e(p,c,d),s=!0,l._container=c,c.__vue_app__=l,Sr(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function aa(e,t,n,r,a=!1){if(H(e)){e.forEach((p,g)=>aa(p,t&&(H(t)?t[g]:t),n,r,a));return}if(tr(r)&&!a)return;const i=r.shapeFlag&4?Sr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===ee?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(de(c)?(f[c]=null,q(d,c)&&(d[c]=null)):ge(c)&&(c.value=null)),B(l))dt(l,s,12,[o,f]);else{const p=de(l),g=ge(l);if(p||g){const A=()=>{if(e.f){const C=p?q(d,l)?d[l]:f[l]:l.value;a?H(C)&&Sa(C,i):H(C)?C.includes(i)||C.push(i):p?(f[l]=[i],q(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else p?(f[l]=o,q(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(f[e.k]=o))};o?(A.id=-1,we(A,n)):A()}}}const we=Ef;function Jf(e){return Zf(e)}function Zf(e,t){const n=Cl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=Fe,insertStaticContent:A}=e,C=(u,m,h,v=null,_=null,k=null,R=!1,E=null,P=!!m.dynamicChildren)=>{if(u===m)return;u&&!sn(u,m)&&(v=S(u),_e(u,_,k,!0),u=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:w,ref:j,shapeFlag:N}=m;switch(w){case Or:L(u,m,h,v);break;case Rt:b(u,m,h,v);break;case $r:u==null&&x(m,h,v,R);break;case Ke:ze(u,m,h,v,_,k,R,E,P);break;default:N&1?K(u,m,h,v,_,k,R,E,P):N&6?Nt(u,m,h,v,_,k,R,E,P):(N&64||N&128)&&w.process(u,m,h,v,_,k,R,E,P,Y)}j!=null&&_&&aa(j,u&&u.ref,k,m||u,!m)},L=(u,m,h,v)=>{if(u==null)r(m.el=s(m.children),h,v);else{const _=m.el=u.el;m.children!==u.children&&c(_,m.children)}},b=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},x=(u,m,h,v)=>{[u.el,u.anchor]=A(u.children,m,h,v,u.el,u.anchor)},O=({el:u,anchor:m},h,v)=>{let _;for(;u&&u!==m;)_=p(u),r(u,h,v),u=_;r(m,h,v)},D=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},K=(u,m,h,v,_,k,R,E,P)=>{R=R||m.type==="svg",u==null?re(m,h,v,_,k,R,E,P):ve(u,m,_,k,R,E,P)},re=(u,m,h,v,_,k,R,E)=>{let P,w;const{type:j,props:N,shapeFlag:$,transition:z,dirs:W}=u;if(P=u.el=o(u.type,k,N&&N.is,N),$&8?f(P,u.children):$&16&&Ee(u.children,P,null,v,_,k&&j!=="foreignObject",R,E),W&&yt(u,null,v,"created"),N){for(const Q in N)Q!=="value"&&!Jn(Q)&&i(P,Q,null,N[Q],k,u.children,v,_,I);"value"in N&&i(P,"value",null,N.value),(w=N.onVnodeBeforeMount)&&Be(w,v,u)}le(P,u,u.scopeId,R,v),W&&yt(u,null,v,"beforeMount");const Z=(!_||_&&!_.pendingBranch)&&z&&!z.persisted;Z&&z.beforeEnter(P),r(P,m,h),((w=N&&N.onVnodeMounted)||Z||W)&&we(()=>{w&&Be(w,v,u),Z&&z.enter(P),W&&yt(u,null,v,"mounted")},_)},le=(u,m,h,v,_)=>{if(h&&g(u,h),v)for(let k=0;k<v.length;k++)g(u,v[k]);if(_){let k=_.subTree;if(m===k){const R=_.vnode;le(u,R,R.scopeId,R.slotScopeIds,_.parent)}}},Ee=(u,m,h,v,_,k,R,E,P=0)=>{for(let w=P;w<u.length;w++){const j=u[w]=E?lt(u[w]):We(u[w]);C(null,j,m,h,v,_,k,R,E)}},ve=(u,m,h,v,_,k,R)=>{const E=m.el=u.el;let{patchFlag:P,dynamicChildren:w,dirs:j}=m;P|=u.patchFlag&16;const N=u.props||ee,$=m.props||ee;let z;h&&_t(h,!1),(z=$.onVnodeBeforeUpdate)&&Be(z,h,m,u),j&&yt(m,u,h,"beforeUpdate"),h&&_t(h,!0);const W=_&&m.type!=="foreignObject";if(w?Pe(u.dynamicChildren,w,E,h,v,W,k):R||G(u,m,E,null,h,v,W,k,!1),P>0){if(P&16)at(E,m,N,$,h,v,_);else if(P&2&&N.class!==$.class&&i(E,"class",null,$.class,_),P&4&&i(E,"style",N.style,$.style,_),P&8){const Z=m.dynamicProps;for(let Q=0;Q<Z.length;Q++){const ue=Z[Q],Ie=N[ue],Lt=$[ue];(Lt!==Ie||ue==="value")&&i(E,ue,Ie,Lt,_,u.children,h,v,I)}}P&1&&u.children!==m.children&&f(E,m.children)}else!R&&w==null&&at(E,m,N,$,h,v,_);((z=$.onVnodeUpdated)||j)&&we(()=>{z&&Be(z,h,m,u),j&&yt(m,u,h,"updated")},v)},Pe=(u,m,h,v,_,k,R)=>{for(let E=0;E<m.length;E++){const P=u[E],w=m[E],j=P.el&&(P.type===Ke||!sn(P,w)||P.shapeFlag&70)?d(P.el):h;C(P,w,j,null,v,_,k,R,!0)}},at=(u,m,h,v,_,k,R)=>{if(h!==v){if(h!==ee)for(const E in h)!Jn(E)&&!(E in v)&&i(u,E,h[E],null,R,m.children,_,k,I);for(const E in v){if(Jn(E))continue;const P=v[E],w=h[E];P!==w&&E!=="value"&&i(u,E,w,P,R,m.children,_,k,I)}"value"in v&&i(u,"value",h.value,v.value)}},ze=(u,m,h,v,_,k,R,E,P)=>{const w=m.el=u?u.el:s(""),j=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:z}=m;z&&(E=E?E.concat(z):z),u==null?(r(w,h,v),r(j,h,v),Ee(m.children,h,j,_,k,R,E,P)):N>0&&N&64&&$&&u.dynamicChildren?(Pe(u.dynamicChildren,$,h,_,k,R,E),(m.key!=null||_&&m===_.subTree)&&ws(u,m,!0)):G(u,m,h,j,_,k,R,E,P)},Nt=(u,m,h,v,_,k,R,E,P)=>{m.slotScopeIds=E,u==null?m.shapeFlag&512?_.ctx.activate(m,h,v,R,P):vt(m,h,v,_,k,R,P):an(u,m,P)},vt=(u,m,h,v,_,k,R)=>{const E=u.component=cc(u,v,_);if(us(u)&&(E.ctx.renderer=Y),uc(E),E.asyncDep){if(_&&_.registerDep(E,ce),!u.el){const P=E.subTree=oe(Rt);b(null,P,m,h)}return}ce(E,u,m,h,_,k,R)},an=(u,m,h)=>{const v=m.component=u.component;if(_f(u,m,h))if(v.asyncDep&&!v.asyncResolved){J(v,m,h);return}else v.next=m,df(v.update),v.update();else m.el=u.el,v.vnode=m},ce=(u,m,h,v,_,k,R)=>{const E=()=>{if(u.isMounted){let{next:j,bu:N,u:$,parent:z,vnode:W}=u,Z=j,Q;_t(u,!1),j?(j.el=W.el,J(u,j,R)):j=W,N&&Zn(N),(Q=j.props&&j.props.onVnodeBeforeUpdate)&&Be(Q,z,j,W),_t(u,!0);const ue=Fr(u),Ie=u.subTree;u.subTree=ue,C(Ie,ue,d(Ie.el),S(Ie),u,_,k),j.el=ue.el,Z===null&&xf(u,ue.el),$&&we($,_),(Q=j.props&&j.props.onVnodeUpdated)&&we(()=>Be(Q,z,j,W),_)}else{let j;const{el:N,props:$}=m,{bm:z,m:W,parent:Z}=u,Q=tr(m);if(_t(u,!1),z&&Zn(z),!Q&&(j=$&&$.onVnodeBeforeMount)&&Be(j,Z,m),_t(u,!0),N&&U){const ue=()=>{u.subTree=Fr(u),U(N,u.subTree,u,_,null)};Q?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ue()):ue()}else{const ue=u.subTree=Fr(u);C(null,ue,h,v,u,_,k),m.el=ue.el}if(W&&we(W,_),!Q&&(j=$&&$.onVnodeMounted)){const ue=m;we(()=>Be(j,Z,ue),_)}(m.shapeFlag&256||Z&&tr(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&we(u.a,_),u.isMounted=!0,m=h=v=null}},P=u.effect=new Ta(E,()=>za(w),u.scope),w=u.update=()=>P.run();w.id=u.uid,_t(u,!0),w()},J=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Yf(u,m.props,v,h),Xf(u,m.children,h),en(),yi(),tn()},G=(u,m,h,v,_,k,R,E,P=!1)=>{const w=u&&u.children,j=u?u.shapeFlag:0,N=m.children,{patchFlag:$,shapeFlag:z}=m;if($>0){if($&128){bt(w,N,h,v,_,k,R,E,P);return}else if($&256){Ce(w,N,h,v,_,k,R,E,P);return}}z&8?(j&16&&I(w,_,k),N!==w&&f(h,N)):j&16?z&16?bt(w,N,h,v,_,k,R,E,P):I(w,_,k,!0):(j&8&&f(h,""),z&16&&Ee(N,h,v,_,k,R,E,P))},Ce=(u,m,h,v,_,k,R,E,P)=>{u=u||Ht,m=m||Ht;const w=u.length,j=m.length,N=Math.min(w,j);let $;for($=0;$<N;$++){const z=m[$]=P?lt(m[$]):We(m[$]);C(u[$],z,h,null,_,k,R,E,P)}w>j?I(u,_,k,!0,!1,N):Ee(m,h,v,_,k,R,E,P,N)},bt=(u,m,h,v,_,k,R,E,P)=>{let w=0;const j=m.length;let N=u.length-1,$=j-1;for(;w<=N&&w<=$;){const z=u[w],W=m[w]=P?lt(m[w]):We(m[w]);if(sn(z,W))C(z,W,h,null,_,k,R,E,P);else break;w++}for(;w<=N&&w<=$;){const z=u[N],W=m[$]=P?lt(m[$]):We(m[$]);if(sn(z,W))C(z,W,h,null,_,k,R,E,P);else break;N--,$--}if(w>N){if(w<=$){const z=$+1,W=z<j?m[z].el:v;for(;w<=$;)C(null,m[w]=P?lt(m[w]):We(m[w]),h,W,_,k,R,E,P),w++}}else if(w>$)for(;w<=N;)_e(u[w],_,k,!0),w++;else{const z=w,W=w,Z=new Map;for(w=W;w<=$;w++){const ke=m[w]=P?lt(m[w]):We(m[w]);ke.key!=null&&Z.set(ke.key,w)}let Q,ue=0;const Ie=$-W+1;let Lt=!1,li=0;const on=new Array(Ie);for(w=0;w<Ie;w++)on[w]=0;for(w=z;w<=N;w++){const ke=u[w];if(ue>=Ie){_e(ke,_,k,!0);continue}let He;if(ke.key!=null)He=Z.get(ke.key);else for(Q=W;Q<=$;Q++)if(on[Q-W]===0&&sn(ke,m[Q])){He=Q;break}He===void 0?_e(ke,_,k,!0):(on[He-W]=w+1,He>=li?li=He:Lt=!0,C(ke,m[He],h,null,_,k,R,E,P),ue++)}const fi=Lt?ec(on):Ht;for(Q=fi.length-1,w=Ie-1;w>=0;w--){const ke=W+w,He=m[ke],ci=ke+1<j?m[ke+1].el:v;on[w]===0?C(null,He,h,ci,_,k,R,E,P):Lt&&(Q<0||w!==fi[Q]?Re(He,h,ci,2):Q--)}}},Re=(u,m,h,v,_=null)=>{const{el:k,type:R,transition:E,children:P,shapeFlag:w}=u;if(w&6){Re(u.component.subTree,m,h,v);return}if(w&128){u.suspense.move(m,h,v);return}if(w&64){R.move(u,m,h,Y);return}if(R===Ke){r(k,m,h);for(let N=0;N<P.length;N++)Re(P[N],m,h,v);r(u.anchor,m,h);return}if(R===$r){O(u,m,h);return}if(v!==2&&w&1&&E)if(v===0)E.beforeEnter(k),r(k,m,h),we(()=>E.enter(k),_);else{const{leave:N,delayLeave:$,afterLeave:z}=E,W=()=>r(k,m,h),Z=()=>{N(k,()=>{W(),z&&z()})};$?$(k,W,Z):Z()}else r(k,m,h)},_e=(u,m,h,v=!1,_=!1)=>{const{type:k,props:R,ref:E,children:P,dynamicChildren:w,shapeFlag:j,patchFlag:N,dirs:$}=u;if(E!=null&&aa(E,null,h,u,!0),j&256){m.ctx.deactivate(u);return}const z=j&1&&$,W=!tr(u);let Z;if(W&&(Z=R&&R.onVnodeBeforeUnmount)&&Be(Z,m,u),j&6)y(u.component,h,v);else{if(j&128){u.suspense.unmount(h,v);return}z&&yt(u,null,m,"beforeUnmount"),j&64?u.type.remove(u,m,h,_,Y,v):w&&(k!==Ke||N>0&&N&64)?I(w,m,h,!1,!0):(k===Ke&&N&384||!_&&j&16)&&I(P,m,h),v&&Mt(u)}(W&&(Z=R&&R.onVnodeUnmounted)||z)&&we(()=>{Z&&Be(Z,m,u),z&&yt(u,null,m,"unmounted")},h)},Mt=u=>{const{type:m,el:h,anchor:v,transition:_}=u;if(m===Ke){Fn(h,v);return}if(m===$r){D(u);return}const k=()=>{a(h),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:E}=_,P=()=>R(h,k);E?E(u.el,k,P):P()}else k()},Fn=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},y=(u,m,h)=>{const{bum:v,scope:_,update:k,subTree:R,um:E}=u;v&&Zn(v),_.stop(),k&&(k.active=!1,_e(R,u,m,h)),E&&we(E,m),we(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},I=(u,m,h,v=!1,_=!1,k=0)=>{for(let R=k;R<u.length;R++)_e(u[R],m,h,v,_)},S=u=>u.shapeFlag&6?S(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),F=(u,m,h)=>{u==null?m._vnode&&_e(m._vnode,null,null,!0):C(m._vnode||null,u,m,null,null,null,h),yi(),os(),m._vnode=u},Y={p:C,um:_e,m:Re,r:Mt,mt:vt,mc:Ee,pc:G,pbc:Pe,n:S,o:e};let ie,U;return t&&([ie,U]=t(Y)),{render:F,hydrate:ie,createApp:Qf(F,ie)}}function _t({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ws(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=lt(a[i]),s.el=o.el),n||ws(o,s)),s.type===Or&&(s.el=o.el)}}function ec(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const tc=e=>e.__isTeleport,Ke=Symbol(void 0),Or=Symbol(void 0),Rt=Symbol(void 0),$r=Symbol(void 0),mn=[];let Me=null;function En(e=!1){mn.push(Me=e?null:[])}function nc(){mn.pop(),Me=mn[mn.length-1]||null}let kn=1;function Si(e){kn+=e}function Es(e){return e.dynamicChildren=kn>0?Me||Ht:null,nc(),kn>0&&Me&&Me.push(e),e}function cr(e,t,n,r,a,i){return Es($e(e,t,n,r,a,i,!0))}function rc(e,t,n,r,a){return Es(oe(e,t,n,r,a,!0))}function ia(e){return e?e.__v_isVNode===!0:!1}function sn(e,t){return e.type===t.type&&e.key===t.key}const Pr="__vInternal",ks=({key:e})=>e!=null?e:null,nr=({ref:e,ref_key:t,ref_for:n})=>e!=null?de(e)||ge(e)||B(e)?{i:Se,r:e,k:t,f:!!n}:e:null;function $e(e,t=null,n=null,r=0,a=null,i=e===Ke?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ks(t),ref:t&&nr(t),scopeId:kr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Se};return s?(Ua(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=de(n)?8:16),kn>0&&!o&&Me&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Me.push(l),l}const oe=ac;function ac(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===jf)&&(e=Rt),ia(e)){const s=Vt(e,t,!0);return n&&Ua(s,n),kn>0&&!i&&Me&&(s.shapeFlag&6?Me[Me.indexOf(e)]=s:Me.push(s)),s.patchFlag|=-2,s}if(gc(e)&&(e=e.__vccOpts),t){t=ic(t);let{class:s,style:l}=t;s&&!de(s)&&(t.class=Oa(s)),ae(l)&&(Go(l)&&!H(l)&&(l=ye({},l)),t.style=Aa(l))}const o=de(e)?1:wf(e)?128:tc(e)?64:ae(e)?4:B(e)?2:0;return $e(e,t,n,r,a,o,i,!0)}function ic(e){return e?Go(e)||Pr in e?ye({},e):e:null}function Vt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?sc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ks(s),ref:t&&t.ref?n&&a?H(a)?a.concat(nr(t)):[a,nr(t)]:nr(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ke?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vt(e.ssContent),ssFallback:e.ssFallback&&Vt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function oa(e=" ",t=0){return oe(Or,null,e,t)}function oc(e="",t=!1){return t?(En(),rc(Rt,null,e)):oe(Rt,null,e)}function We(e){return e==null||typeof e=="boolean"?oe(Rt):H(e)?oe(Ke,null,e.slice()):typeof e=="object"?lt(e):oe(Or,null,String(e))}function lt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Vt(e)}function Ua(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ua(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Pr in t)?t._ctx=Se:a===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),r&64?(n=16,t=[oa(t)]):n=8);e.children=t,e.shapeFlag|=n}function sc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Oa([t.class,r.class]));else if(a==="style")t.style=Aa([t.style,r.style]);else if(vr(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Be(e,t,n,r=null){je(e,t,7,[n,r])}const lc=xs();let fc=0;function cc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||lc,i={uid:fc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new $o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vs(r,a),emitsOptions:ls(r,a),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=hf.bind(null,i),e.ce&&e.ce(i),i}let pe=null;const Xt=e=>{pe=e,e.scope.on()},Ct=()=>{pe&&pe.scope.off(),pe=null};function As(e){return e.vnode.shapeFlag&4}let An=!1;function uc(e,t=!1){An=t;const{props:n,children:r}=e.vnode,a=As(e);Wf(e,n,a,t),Vf(e,r);const i=a?dc(e,t):void 0;return An=!1,i}function dc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ja(new Proxy(e.ctx,Df));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?pc(e):null;Xt(e),en();const i=dt(r,e,0,[e.props,a]);if(tn(),Ct(),Lo(i)){if(i.then(Ct,Ct),t)return i.then(o=>{Ci(e,o,t)}).catch(o=>{wr(o,e,0)});e.asyncDep=i}else Ci(e,i,t)}else Os(e,t)}function Ci(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=ts(t)),Os(e,n)}let Ri;function Os(e,t,n){const r=e.type;if(!e.render){if(!t&&Ri&&!r.render){const a=r.template||Ha(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ye(ye({isCustomElement:i,delimiters:s},o),l);r.render=Ri(a,c)}}e.render=r.render||Fe}Xt(e),en(),zf(e),tn(),Ct()}function mc(e){return new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}})}function pc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=mc(e))},slots:e.slots,emit:e.emit,expose:t}}function Sr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ts(ja(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dn)return dn[n](e)},has(t,n){return n in t||n in dn}}))}function hc(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function gc(e){return B(e)&&"__vccOpts"in e}const se=(e,t)=>ff(e,t,An);function Cr(e,t,n){const r=arguments.length;return r===2?ae(t)&&!H(t)?ia(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ia(n)&&(n=[n]),oe(e,t,n))}const vc=Symbol(""),bc=()=>Qe(vc),yc="3.2.45",_c="http://www.w3.org/2000/svg",kt=typeof document<"u"?document:null,Ii=kt&&kt.createElement("template"),xc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?kt.createElementNS(_c,e):kt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>kt.createTextNode(e),createComment:e=>kt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ii.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ii.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function wc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ec(e,t,n){const r=e.style,a=de(n);if(n&&!a){for(const i in n)sa(r,i,n[i]);if(t&&!de(t))for(const i in t)n[i]==null&&sa(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ti=/\s*!important$/;function sa(e,t,n){if(H(n))n.forEach(r=>sa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=kc(e,t);Ti.test(n)?e.setProperty(Zt(r),n.replace(Ti,""),"important"):e[r]=n}}const Ni=["Webkit","Moz","ms"],Dr={};function kc(e,t){const n=Dr[t];if(n)return n;let r=Ve(t);if(r!=="filter"&&r in e)return Dr[t]=r;r=_r(r);for(let a=0;a<Ni.length;a++){const i=Ni[a]+r;if(i in e)return Dr[t]=i}return t}const Mi="http://www.w3.org/1999/xlink";function Ac(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Mi,t.slice(6,t.length)):e.setAttributeNS(Mi,t,n);else{const i=wl(t);n==null||i&&!To(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Oc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=To(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function jt(e,t,n,r){e.addEventListener(t,n,r)}function Pc(e,t,n,r){e.removeEventListener(t,n,r)}function Sc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Cc(t);if(r){const c=i[t]=Tc(r,a);jt(e,s,c,l)}else o&&(Pc(e,s,o,l),i[t]=void 0)}}const Li=/(?:Once|Passive|Capture)$/;function Cc(e){let t;if(Li.test(e)){t={};let r;for(;r=e.match(Li);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Zt(e.slice(2)),t]}let zr=0;const Rc=Promise.resolve(),Ic=()=>zr||(Rc.then(()=>zr=0),zr=Date.now());function Tc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;je(Nc(r,n.value),t,5,[r])};return n.value=e,n.attached=Ic(),n}function Nc(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Fi=/^on[a-z]/,Mc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?wc(e,r,a):t==="style"?Ec(e,n,r):vr(t)?Pa(t)||Sc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lc(e,t,r,a))?Oc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ac(e,t,r,a))};function Lc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Fi.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Fi.test(t)&&de(n)?!1:t in e}const ji=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?n=>Zn(t,n):t};function Fc(e){e.target.composing=!0}function $i(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const mp={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=ji(a);const i=r||a.props&&a.props.type==="number";jt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=or(s)),e._assign(s)}),n&&jt(e,"change",()=>{e.value=e.value.trim()}),t||(jt(e,"compositionstart",Fc),jt(e,"compositionend",$i),jt(e,"change",$i))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=ji(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&or(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},jc=["ctrl","shift","alt","meta"],$c={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>jc.some(n=>e[`${n}Key`]&&!t.includes(n))},pp=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=$c[t[a]];if(i&&i(n,t))return}return e(n,...r)},Dc=ye({patchProp:Mc},xc);let Di;function zc(){return Di||(Di=Jf(Dc))}const Hc=(...e)=>{const t=zc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Bc(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Bc(e){return de(e)?document.querySelector(e):e}var Uc=!1;/*!
  * pinia v2.0.25
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kc=Symbol();var zi;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(zi||(zi={}));function Wc(){const e=Rl(!0),t=e.run(()=>Zo({}));let n=[],r=[];const a=ja({install(i){a._a=i,i.provide(Kc,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Uc?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const $t=typeof window<"u";function Yc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function Hr(e,t){const n={};for(const r in t){const a=t[r];n[r]=De(a)?a.map(e):e(a)}return n}const pn=()=>{},De=Array.isArray,qc=/\/$/,Vc=e=>e.replace(qc,"");function Br(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Jc(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Xc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Hi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Gc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Gt(t.matched[r],n.matched[a])&&Ps(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Gt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ps(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Qc(e[n],t[n]))return!1;return!0}function Qc(e,t){return De(e)?Bi(e,t):De(t)?Bi(t,e):e===t}function Bi(e,t){return De(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Jc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var On;(function(e){e.pop="pop",e.push="push"})(On||(On={}));var hn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hn||(hn={}));function Zc(e){if(!e)if($t){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Vc(e)}const eu=/^[^#]+#/;function tu(e,t){return e.replace(eu,"#")+t}function nu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Rr=()=>({left:window.pageXOffset,top:window.pageYOffset});function ru(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=nu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ui(e,t){return(history.state?history.state.position-t:-1)+e}const la=new Map;function au(e,t){la.set(e,t)}function iu(e){const t=la.get(e);return la.delete(e),t}let ou=()=>location.protocol+"//"+location.host;function Ss(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Hi(l,"")}return Hi(n,e)+r+a}function su(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=Ss(e,location),A=n.value,C=t.value;let L=0;if(p){if(n.value=g,t.value=p,o&&o===A){o=null;return}L=C?p.position-C.position:0}else r(g);a.forEach(b=>{b(n.value,A,{delta:L,type:On.pop,direction:L?L>0?hn.forward:hn.back:hn.unknown})})};function l(){o=n.value}function c(p){a.push(p);const g=()=>{const A=a.indexOf(p);A>-1&&a.splice(A,1)};return i.push(g),g}function f(){const{history:p}=window;!p.state||p.replaceState(X({},p.state,{scroll:Rr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function Ki(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Rr():null}}function lu(e){const{history:t,location:n}=window,r={value:Ss(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:ou()+e+l;try{t[f?"replaceState":"pushState"](c,"",p),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(l,c){const f=X({},t.state,Ki(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=X({},a.value,t.state,{forward:l,scroll:Rr()});i(f.current,f,!0);const d=X({},Ki(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function fu(e){e=Zc(e);const t=lu(e),n=su(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=X({location:"",base:e,go:r,createHref:tu.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function cu(e){return typeof e=="string"||e&&typeof e=="object"}function Cs(e){return typeof e=="string"||typeof e=="symbol"}const ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rs=Symbol("");var Wi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Wi||(Wi={}));function Qt(e,t){return X(new Error,{type:e,[Rs]:!0},t)}function Xe(e,t){return e instanceof Error&&Rs in e&&(t==null||!!(e.type&t))}const Yi="[^/]+?",uu={sensitive:!1,strict:!1,start:!0,end:!0},du=/[.+*?^${}()[\]/\\]/g;function mu(e,t){const n=X({},uu,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const p=c[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(du,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:C,optional:L,regexp:b}=p;i.push({name:A,repeatable:C,optional:L});const x=b||Yi;if(x!==Yi){g+=10;try{new RegExp(`(${x})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${A}" (${x}): `+D.message)}}let O=C?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(O=L&&c.length<2?`(?:/${O})`:"/"+O),L&&(O+="?"),a+=O,g+=20,L&&(g+=-8),C&&(g+=-20),x===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",A=i[p-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const p of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:A,repeatable:C,optional:L}=g,b=A in c?c[A]:"";if(De(b)&&!C)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const x=De(b)?b.join("/"):b;if(!x)if(L)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function pu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function hu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=pu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(qi(r))return 1;if(qi(a))return-1}return a.length-r.length}function qi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const gu={type:0,value:""},vu=/[a-zA-Z0-9_]/;function bu(e){if(!e)return[[]];if(e==="/")return[[gu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:vu.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function yu(e,t,n){const r=mu(bu(e.path),n),a=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function _u(e,t){const n=[],r=new Map;t=Gi({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,p){const g=!p,A=xu(f);A.aliasOf=p&&p.record;const C=Gi(t,f),L=[A];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const D of O)L.push(X({},A,{components:p?p.record.components:A.components,path:D,aliasOf:p?p.record:A}))}let b,x;for(const O of L){const{path:D}=O;if(d&&D[0]!=="/"){const K=d.record.path,re=K[K.length-1]==="/"?"":"/";O.path=d.record.path+(D&&re+D)}if(b=yu(O,d,C),p?p.alias.push(b):(x=x||b,x!==b&&x.alias.push(b),g&&f.name&&!Xi(b)&&o(f.name)),A.children){const K=A.children;for(let re=0;re<K.length;re++)i(K[re],b,p&&p.children[re])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return x?()=>{o(x)}:pn}function o(f){if(Cs(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&hu(f,n[d])>=0&&(f.record.path!==n[d].record.path||!Is(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!Xi(f)&&r.set(f.record.name,f)}function c(f,d){let p,g={},A,C;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Qt(1,{location:f});C=p.record.name,g=X(Vi(d.params,p.keys.filter(x=>!x.optional).map(x=>x.name)),f.params&&Vi(f.params,p.keys.map(x=>x.name))),A=p.stringify(g)}else if("path"in f)A=f.path,p=n.find(x=>x.re.test(A)),p&&(g=p.parse(A),C=p.record.name);else{if(p=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!p)throw Qt(1,{location:f,currentLocation:d});C=p.record.name,g=X({},d.params,f.params),A=p.stringify(g)}const L=[];let b=p;for(;b;)L.unshift(b.record),b=b.parent;return{name:C,path:A,params:g,matched:L,meta:Eu(L)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Vi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function xu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:wu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function wu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Xi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Eu(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Gi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Is(e,t){return t.children.some(n=>n===e||Is(e,n))}const Ts=/#/g,ku=/&/g,Au=/\//g,Ou=/=/g,Pu=/\?/g,Ns=/\+/g,Su=/%5B/g,Cu=/%5D/g,Ms=/%5E/g,Ru=/%60/g,Ls=/%7B/g,Iu=/%7C/g,Fs=/%7D/g,Tu=/%20/g;function Ka(e){return encodeURI(""+e).replace(Iu,"|").replace(Su,"[").replace(Cu,"]")}function Nu(e){return Ka(e).replace(Ls,"{").replace(Fs,"}").replace(Ms,"^")}function fa(e){return Ka(e).replace(Ns,"%2B").replace(Tu,"+").replace(Ts,"%23").replace(ku,"%26").replace(Ru,"`").replace(Ls,"{").replace(Fs,"}").replace(Ms,"^")}function Mu(e){return fa(e).replace(Ou,"%3D")}function Lu(e){return Ka(e).replace(Ts,"%23").replace(Pu,"%3F")}function Fu(e){return e==null?"":Lu(e).replace(Au,"%2F")}function ur(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ju(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ns," "),o=i.indexOf("="),s=ur(o<0?i:i.slice(0,o)),l=o<0?null:ur(i.slice(o+1));if(s in t){let c=t[s];De(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function Qi(e){let t="";for(let n in e){const r=e[n];if(n=Mu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&fa(i)):[r&&fa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function $u(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=De(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Du=Symbol(""),Ji=Symbol(""),Wa=Symbol(""),js=Symbol(""),ca=Symbol("");function ln(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ft(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Qt(4,{from:n,to:t})):d instanceof Error?s(d):cu(d)?s(Qt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function Ur(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(zu(s)){const c=(s.__vccOpts||s)[t];c&&a.push(ft(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Yc(c)?c.default:c;i.components[o]=f;const p=(f.__vccOpts||f)[t];return p&&ft(p,n,r,i,o)()}))}}return a}function zu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Zi(e){const t=Qe(Wa),n=Qe(js),r=se(()=>t.resolve(ut(e.to))),a=se(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(Gt.bind(null,f));if(p>-1)return p;const g=eo(l[c-2]);return c>1&&eo(f)===g&&d[d.length-1].path!==g?d.findIndex(Gt.bind(null,l[c-2])):p}),i=se(()=>a.value>-1&&Ku(n.params,r.value.params)),o=se(()=>a.value>-1&&a.value===n.matched.length-1&&Ps(n.params,r.value.params));function s(l={}){return Uu(l)?t[ut(e.replace)?"replace":"push"](ut(e.to)).catch(pn):Promise.resolve()}return{route:r,href:se(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Hu=nn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zi,setup(e,{slots:t}){const n=Tn(Zi(e)),{options:r}=Qe(Wa),a=se(()=>({[to(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[to(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Cr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Bu=Hu;function Uu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ku(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!De(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function eo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const to=(e,t,n)=>e!=null?e:t!=null?t:n,Wu=nn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Qe(ca),a=se(()=>e.route||r.value),i=Qe(Ji,0),o=se(()=>{let c=ut(i);const{matched:f}=a.value;let d;for(;(d=f[c])&&!d.components;)c++;return c}),s=se(()=>a.value.matched[o.value]);er(Ji,se(()=>o.value+1)),er(Du,s),er(ca,a);const l=Zo();return un(()=>[l.value,s.value,e.name],([c,f,d],[p,g,A])=>{f&&(f.instances[d]=c,g&&g!==f&&c&&c===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),c&&f&&(!g||!Gt(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=a.value,f=e.name,d=s.value,p=d&&d.components[f];if(!p)return no(n.default,{Component:p,route:c});const g=d.props[f],A=g?g===!0?c.params:typeof g=="function"?g(c):g:null,L=Cr(p,X({},A,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return no(n.default,{Component:L,route:c})||L}}});function no(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const $s=Wu;function Yu(e){const t=_u(e.routes,e),n=e.parseQuery||ju,r=e.stringifyQuery||Qi,a=e.history,i=ln(),o=ln(),s=ln(),l=af(ot);let c=ot;$t&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Hr.bind(null,y=>""+y),d=Hr.bind(null,Fu),p=Hr.bind(null,ur);function g(y,I){let S,F;return Cs(y)?(S=t.getRecordMatcher(y),F=I):F=y,t.addRoute(F,S)}function A(y){const I=t.getRecordMatcher(y);I&&t.removeRoute(I)}function C(){return t.getRoutes().map(y=>y.record)}function L(y){return!!t.getRecordMatcher(y)}function b(y,I){if(I=X({},I||l.value),typeof y=="string"){const u=Br(n,y,I.path),m=t.resolve({path:u.path},I),h=a.createHref(u.fullPath);return X(u,m,{params:p(m.params),hash:ur(u.hash),redirectedFrom:void 0,href:h})}let S;if("path"in y)S=X({},y,{path:Br(n,y.path,I.path).path});else{const u=X({},y.params);for(const m in u)u[m]==null&&delete u[m];S=X({},y,{params:d(y.params)}),I.params=d(I.params)}const F=t.resolve(S,I),Y=y.hash||"";F.params=f(p(F.params));const ie=Xc(r,X({},y,{hash:Nu(Y),path:F.path})),U=a.createHref(ie);return X({fullPath:ie,hash:Y,query:r===Qi?$u(y.query):y.query||{}},F,{redirectedFrom:void 0,href:U})}function x(y){return typeof y=="string"?Br(n,y,l.value.path):X({},y)}function O(y,I){if(c!==y)return Qt(8,{from:I,to:y})}function D(y){return le(y)}function K(y){return D(X(x(y),{replace:!0}))}function re(y){const I=y.matched[y.matched.length-1];if(I&&I.redirect){const{redirect:S}=I;let F=typeof S=="function"?S(y):S;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=x(F):{path:F},F.params={}),X({query:y.query,hash:y.hash,params:"path"in F?{}:y.params},F)}}function le(y,I){const S=c=b(y),F=l.value,Y=y.state,ie=y.force,U=y.replace===!0,u=re(S);if(u)return le(X(x(u),{state:typeof u=="object"?X({},Y,u.state):Y,force:ie,replace:U}),I||S);const m=S;m.redirectedFrom=I;let h;return!ie&&Gc(r,F,S)&&(h=Qt(16,{to:m,from:F}),bt(F,F,!0,!1)),(h?Promise.resolve(h):ve(m,F)).catch(v=>Xe(v)?Xe(v,2)?v:Ce(v):J(v,m,F)).then(v=>{if(v){if(Xe(v,2))return le(X({replace:U},x(v.to),{state:typeof v.to=="object"?X({},Y,v.to.state):Y,force:ie}),I||m)}else v=at(m,F,!0,U,Y);return Pe(m,F,v),v})}function Ee(y,I){const S=O(y,I);return S?Promise.reject(S):Promise.resolve()}function ve(y,I){let S;const[F,Y,ie]=qu(y,I);S=Ur(F.reverse(),"beforeRouteLeave",y,I);for(const u of F)u.leaveGuards.forEach(m=>{S.push(ft(m,y,I))});const U=Ee.bind(null,y,I);return S.push(U),Ft(S).then(()=>{S=[];for(const u of i.list())S.push(ft(u,y,I));return S.push(U),Ft(S)}).then(()=>{S=Ur(Y,"beforeRouteUpdate",y,I);for(const u of Y)u.updateGuards.forEach(m=>{S.push(ft(m,y,I))});return S.push(U),Ft(S)}).then(()=>{S=[];for(const u of y.matched)if(u.beforeEnter&&!I.matched.includes(u))if(De(u.beforeEnter))for(const m of u.beforeEnter)S.push(ft(m,y,I));else S.push(ft(u.beforeEnter,y,I));return S.push(U),Ft(S)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),S=Ur(ie,"beforeRouteEnter",y,I),S.push(U),Ft(S))).then(()=>{S=[];for(const u of o.list())S.push(ft(u,y,I));return S.push(U),Ft(S)}).catch(u=>Xe(u,8)?u:Promise.reject(u))}function Pe(y,I,S){for(const F of s.list())F(y,I,S)}function at(y,I,S,F,Y){const ie=O(y,I);if(ie)return ie;const U=I===ot,u=$t?history.state:{};S&&(F||U?a.replace(y.fullPath,X({scroll:U&&u&&u.scroll},Y)):a.push(y.fullPath,Y)),l.value=y,bt(y,I,S,U),Ce()}let ze;function Nt(){ze||(ze=a.listen((y,I,S)=>{if(!Fn.listening)return;const F=b(y),Y=re(F);if(Y){le(X(Y,{replace:!0}),F).catch(pn);return}c=F;const ie=l.value;$t&&au(Ui(ie.fullPath,S.delta),Rr()),ve(F,ie).catch(U=>Xe(U,12)?U:Xe(U,2)?(le(U.to,F).then(u=>{Xe(u,20)&&!S.delta&&S.type===On.pop&&a.go(-1,!1)}).catch(pn),Promise.reject()):(S.delta&&a.go(-S.delta,!1),J(U,F,ie))).then(U=>{U=U||at(F,ie,!1),U&&(S.delta&&!Xe(U,8)?a.go(-S.delta,!1):S.type===On.pop&&Xe(U,20)&&a.go(-1,!1)),Pe(F,ie,U)}).catch(pn)}))}let vt=ln(),an=ln(),ce;function J(y,I,S){Ce(y);const F=an.list();return F.length?F.forEach(Y=>Y(y,I,S)):console.error(y),Promise.reject(y)}function G(){return ce&&l.value!==ot?Promise.resolve():new Promise((y,I)=>{vt.add([y,I])})}function Ce(y){return ce||(ce=!y,Nt(),vt.list().forEach(([I,S])=>y?S(y):I()),vt.reset()),y}function bt(y,I,S,F){const{scrollBehavior:Y}=e;if(!$t||!Y)return Promise.resolve();const ie=!S&&iu(Ui(y.fullPath,0))||(F||!S)&&history.state&&history.state.scroll||null;return as().then(()=>Y(y,I,ie)).then(U=>U&&ru(U)).catch(U=>J(U,y,I))}const Re=y=>a.go(y);let _e;const Mt=new Set,Fn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:L,getRoutes:C,resolve:b,options:e,push:D,replace:K,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:an.add,isReady:G,install(y){const I=this;y.component("RouterLink",Bu),y.component("RouterView",$s),y.config.globalProperties.$router=I,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ut(l)}),$t&&!_e&&l.value===ot&&(_e=!0,D(a.location).catch(Y=>{}));const S={};for(const Y in ot)S[Y]=se(()=>l.value[Y]);y.provide(Wa,I),y.provide(js,Tn(S)),y.provide(ca,l);const F=y.unmount;Mt.add(y),y.unmount=function(){Mt.delete(y),Mt.size<1&&(c=ot,ze&&ze(),ze=null,l.value=ot,_e=!1,ce=!1),F()}}};return Fn}function Ft(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function qu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Gt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Gt(c,l))||a.push(l))}return[n,r,a]}const Ya=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Vu={},Xu={class:"navClass"},Gu={class:"buttonHeader"},Qu={name:"challengesStyle",class:"outerstyling"},Ju={class:"buttonHeader"};function Zu(e,t){const n=Zr("font-awesome-icon"),r=Zr("RouterLink");return En(),cr("div",Xu,[$e("h2",Gu,[oe(r,{to:"/profile"},{default:Wt(()=>[oe(n,{icon:"fa-solid fa-user"})]),_:1})]),$e("h2",Qu,[oe(r,{to:"/",class:"challengesStyle"},{default:Wt(()=>[oe(n,{icon:"fa-solid fa-question"})]),_:1})]),$e("h2",Ju,[oe(r,{to:"/leaderboard"},{default:Wt(()=>[oe(n,{icon:"fa-solid fa-list"})]),_:1})])])}const ed=Ya(Vu,[["render",Zu],["__scopeId","data-v-c3a40e00"]]),td={class:"currentItem"},nd={key:0,class:"navStyling"},rd=nn({__name:"App",setup(e){var t=sessionStorage.getItem("isAuthLogin");return(n,r)=>(En(),cr(Ke,null,[$e("header",null,[$e("div",td,[oe(ut($s))])]),ut(t)==="True"?(En(),cr("div",nd,[oe(ed)])):oc("",!0)],64))}});const ad=Ya(rd,[["__scopeId","data-v-a63ca03d"]]),id="modulepreload",od=function(e){return"/"+e},ro={},xt=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=od(i),i in ro)return;ro[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let f=a.length-1;f>=0;f--){const d=a[f];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":id,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((f,d)=>{c.addEventListener("load",f),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},sd={created(){sessionStorage.getItem("reloaded")!=="true"&&(sessionStorage.setItem("reloaded","true"),location.reload())}};const Ds=e=>(gf("data-v-6749541c"),e=e(),vf(),e),ld=Ds(()=>$e("br",null,null,-1)),fd=Ds(()=>$e("br",null,null,-1));function cd(e,t,n,r,a,i){const o=Zr("RouterLink");return En(),cr("main",null,[$e("h1",null,[oe(o,{to:"/easy"},{default:Wt(()=>[oa("Makkelijk")]),_:1})]),ld,$e("h1",null,[oe(o,{to:"/difficult"},{default:Wt(()=>[oa("Moeilijk")]),_:1})]),fd])}const ud=Ya(sd,[["render",cd],["__scopeId","data-v-6749541c"]]),zs=Yu({history:fu("/"),routes:[{path:"/",name:"home",component:ud},{path:"/leaderboard",name:"leaderboard",component:()=>xt(()=>import("./LeaderboardView.d38d72ae.js"),["assets/LeaderboardView.d38d72ae.js","assets/axios.0a901153.js","assets/LeaderboardView.564aeb5f.css"])},{path:"/profile",name:"profile",component:()=>xt(()=>import("./ProfileView.d990d68c.js"),["assets/ProfileView.d990d68c.js","assets/axios.0a901153.js","assets/ProfileView.9d731ef9.css"])},{path:"/login",name:"login",component:()=>xt(()=>import("./LoginView.0194624d.js"),["assets/LoginView.0194624d.js","assets/axios.0a901153.js","assets/LoginView.950b2350.css"])},{path:"/register",name:"register",component:()=>xt(()=>import("./RegisterView.c1ecd8db.js"),["assets/RegisterView.c1ecd8db.js","assets/axios.0a901153.js","assets/RegisterView.ac3d1957.css"])},{path:"/easy",name:"easy",component:()=>xt(()=>import("./EasyView.cf4dee4d.js"),["assets/EasyView.cf4dee4d.js","assets/axios.0a901153.js","assets/EasyView.57a2d016.css"])},{path:"/difficult",name:"difficult",component:()=>xt(()=>import("./DifficultView.8ed02aee.js"),[])},{path:"/history",name:"history",component:()=>xt(()=>import("./HistoryView.3328cb3a.js"),["assets/HistoryView.3328cb3a.js","assets/axios.0a901153.js","assets/HistoryView.a2d26113.css"])}]});zs.beforeEach(async(e,t)=>{if(!sessionStorage.getItem("isAuthLogin")&&e.name!=="login")return{name:"login"};if(sessionStorage.getItem("isAuthLogin")&&e.name==="login")return{name:"/"}});function ao(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ao(Object(n),!0).forEach(function(r){me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ao(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dr(e){return dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dr(e)}function dd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function io(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function md(e,t,n){return t&&io(e.prototype,t),n&&io(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qa(e,t){return hd(e)||vd(e,t)||Hs(e,t)||yd()}function Nn(e){return pd(e)||gd(e)||Hs(e)||bd()}function pd(e){if(Array.isArray(e))return ua(e)}function hd(e){if(Array.isArray(e))return e}function gd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Hs(e,t){if(!!e){if(typeof e=="string")return ua(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ua(e,t)}}function ua(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function bd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var oo=function(){},Va={},Bs={},Us=null,Ks={mark:oo,measure:oo};try{typeof window<"u"&&(Va=window),typeof document<"u"&&(Bs=document),typeof MutationObserver<"u"&&(Us=MutationObserver),typeof performance<"u"&&(Ks=performance)}catch{}var _d=Va.navigator||{},so=_d.userAgent,lo=so===void 0?"":so,pt=Va,ne=Bs,fo=Us,Un=Ks;pt.document;var rt=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",Ws=~lo.indexOf("MSIE")||~lo.indexOf("Trident/"),Kn,Wn,Yn,qn,Vn,Ze="___FONT_AWESOME___",da=16,Ys="fa",qs="svg-inline--fa",It="data-fa-i2svg",ma="data-fa-pseudo-element",xd="data-fa-pseudo-element-pending",Xa="data-prefix",Ga="data-icon",co="fontawesome-i2svg",wd="async",Ed=["HTML","HEAD","STYLE","SCRIPT"],Vs=function(){try{return!0}catch{return!1}}(),te="classic",fe="sharp",Qa=[te,fe];function Mn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[te]}})}var Pn=Mn((Kn={},me(Kn,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),me(Kn,fe,{fa:"solid",fass:"solid","fa-solid":"solid"}),Kn)),Sn=Mn((Wn={},me(Wn,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),me(Wn,fe,{solid:"fass"}),Wn)),Cn=Mn((Yn={},me(Yn,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),me(Yn,fe,{fass:"fa-solid"}),Yn)),kd=Mn((qn={},me(qn,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),me(qn,fe,{"fa-solid":"fass"}),qn)),Ad=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Xs="fa-layers-text",Od=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Pd=Mn((Vn={},me(Vn,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),me(Vn,fe,{900:"fass"}),Vn)),Gs=[1,2,3,4,5,6,7,8,9,10],Sd=Gs.concat([11,12,13,14,15,16,17,18,19,20]),Cd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rn=new Set;Object.keys(Sn[te]).map(Rn.add.bind(Rn));Object.keys(Sn[fe]).map(Rn.add.bind(Rn));var Rd=[].concat(Qa,Nn(Rn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ot.GROUP,Ot.SWAP_OPACITY,Ot.PRIMARY,Ot.SECONDARY]).concat(Gs.map(function(e){return"".concat(e,"x")})).concat(Sd.map(function(e){return"w-".concat(e)})),gn=pt.FontAwesomeConfig||{};function Id(e){var t=ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Td(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ne&&typeof ne.querySelector=="function"){var Nd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Nd.forEach(function(e){var t=qa(e,2),n=t[0],r=t[1],a=Td(Id(n));a!=null&&(gn[r]=a)})}var Qs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ys,replacementClass:qs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gn.familyPrefix&&(gn.cssPrefix=gn.familyPrefix);var Jt=T(T({},Qs),gn);Jt.autoReplaceSvg||(Jt.observeMutations=!1);var M={};Object.keys(Qs).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Jt[e]=n,vn.forEach(function(r){return r(M)})},get:function(){return Jt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Jt.cssPrefix=t,vn.forEach(function(n){return n(M)})},get:function(){return Jt.cssPrefix}});pt.FontAwesomeConfig=M;var vn=[];function Md(e){return vn.push(e),function(){vn.splice(vn.indexOf(e),1)}}var st=da,qe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ld(e){if(!(!e||!rt)){var t=ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ne.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ne.head.insertBefore(t,r),e}}var Fd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function In(){for(var e=12,t="";e-- >0;)t+=Fd[Math.random()*62|0];return t}function rn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ja(e){return e.classList?rn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Js(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Js(e[n]),'" ')},"").trim()}function Ir(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Za(e){return e.size!==qe.size||e.x!==qe.x||e.y!==qe.y||e.rotate!==qe.rotate||e.flipX||e.flipY}function $d(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Dd(e){var t=e.transform,n=e.width,r=n===void 0?da:n,a=e.height,i=a===void 0?da:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ws?l+="translate(".concat(t.x/st-r/2,"em, ").concat(t.y/st-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/st,"em), calc(-50% + ").concat(t.y/st,"em)) "):l+="translate(".concat(t.x/st,"em, ").concat(t.y/st,"em) "),l+="scale(".concat(t.size/st*(t.flipX?-1:1),", ").concat(t.size/st*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var zd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Zs(){var e=Ys,t=qs,n=M.cssPrefix,r=M.replacementClass,a=zd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var uo=!1;function Kr(){M.autoAddCss&&!uo&&(Ld(Zs()),uo=!0)}var Hd={mixout:function(){return{dom:{css:Zs,insertCss:Kr}}},hooks:function(){return{beforeDOMElementCreation:function(){Kr()},beforeI2svg:function(){Kr()}}}},et=pt||{};et[Ze]||(et[Ze]={});et[Ze].styles||(et[Ze].styles={});et[Ze].hooks||(et[Ze].hooks={});et[Ze].shims||(et[Ze].shims=[]);var Le=et[Ze],el=[],Bd=function e(){ne.removeEventListener("DOMContentLoaded",e),mr=1,el.map(function(t){return t()})},mr=!1;rt&&(mr=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),mr||ne.addEventListener("DOMContentLoaded",Bd));function Ud(e){!rt||(mr?setTimeout(e,0):el.push(e))}function Ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Js(e):"<".concat(t," ").concat(jd(r),">").concat(i.map(Ln).join(""),"</").concat(t,">")}function mo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Kd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Wr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Kd(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function Wd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function pa(e){var t=Wd(e);return t.length===1?t[0].toString(16):null}function Yd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function po(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ha(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=po(t);typeof Le.hooks.addPack=="function"&&!a?Le.hooks.addPack(e,po(t)):Le.styles[e]=T(T({},Le.styles[e]||{}),i),e==="fas"&&ha("fa",t)}var Xn,Gn,Qn,Dt=Le.styles,qd=Le.shims,Vd=(Xn={},me(Xn,te,Object.values(Cn[te])),me(Xn,fe,Object.values(Cn[fe])),Xn),ei=null,tl={},nl={},rl={},al={},il={},Xd=(Gn={},me(Gn,te,Object.keys(Pn[te])),me(Gn,fe,Object.keys(Pn[fe])),Gn);function Gd(e){return~Rd.indexOf(e)}function Qd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Gd(a)?a:null}var ol=function(){var t=function(i){return Wr(Dt,function(o,s,l){return o[l]=Wr(s,i,{}),o},{})};tl=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),nl=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),il=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Dt||M.autoFetchSvg,r=Wr(qd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});rl=r.names,al=r.unicodes,ei=Tr(M.styleDefault,{family:M.familyDefault})};Md(function(e){ei=Tr(e.styleDefault,{family:M.familyDefault})});ol();function ti(e,t){return(tl[e]||{})[t]}function Jd(e,t){return(nl[e]||{})[t]}function Pt(e,t){return(il[e]||{})[t]}function sl(e){return rl[e]||{prefix:null,iconName:null}}function Zd(e){var t=al[e],n=ti("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ht(){return ei}var ni=function(){return{prefix:null,iconName:null,rest:[]}};function Tr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?te:n,a=Pn[r][e],i=Sn[r][e]||Sn[r][a],o=e in Le.styles?e:null;return i||o||null}var ho=(Qn={},me(Qn,te,Object.keys(Cn[te])),me(Qn,fe,Object.keys(Cn[fe])),Qn);function Nr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},me(t,te,"".concat(M.cssPrefix,"-").concat(te)),me(t,fe,"".concat(M.cssPrefix,"-").concat(fe)),t),o=null,s=te;(e.includes(i[te])||e.some(function(c){return ho[te].includes(c)}))&&(s=te),(e.includes(i[fe])||e.some(function(c){return ho[fe].includes(c)}))&&(s=fe);var l=e.reduce(function(c,f){var d=Qd(M.cssPrefix,f);if(Dt[f]?(f=Vd[s].includes(f)?kd[s][f]:f,o=f,c.prefix=f):Xd[s].indexOf(f)>-1?(o=f,c.prefix=Tr(f,{family:s})):d?c.iconName=d:f!==M.replacementClass&&f!==i[te]&&f!==i[fe]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var p=o==="fa"?sl(c.iconName):{},g=Pt(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Dt.far&&Dt.fas&&!M.autoFetchSvg&&(c.prefix="fas")}return c},ni());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===fe&&(Dt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Pt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ht()||"fas"),l}var em=function(){function e(){dd(this,e),this.definitions={}}return md(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),ha(s,o[s]);var l=Cn[te][s];l&&ha(l,o[s]),ol()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),go=[],zt={},Yt={},tm=Object.keys(Yt);function nm(e,t){var n=t.mixoutsTo;return go=e,zt={},Object.keys(Yt).forEach(function(r){tm.indexOf(r)===-1&&delete Yt[r]}),go.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),dr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){zt[o]||(zt[o]=[]),zt[o].push(i[o])})}r.provides&&r.provides(Yt)}),n}function ga(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=zt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Tt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=zt[e]||[];a.forEach(function(i){i.apply(null,n)})}function tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Yt[e]?Yt[e].apply(null,t):void 0}function va(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ht();if(!!t)return t=Pt(n,t)||t,mo(ll.definitions,n,t)||mo(Le.styles,n,t)}var ll=new em,rm=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Tt("noAuto")},am={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rt?(Tt("beforeI2svg",t),tt("pseudoElements2svg",t),tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Ud(function(){om({autoReplaceSvgRoot:n}),Tt("watch",t)})}},im={icon:function(t){if(t===null)return null;if(dr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Pt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Tr(t[0]);return{prefix:r,iconName:Pt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Ad))){var a=Nr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ht(),iconName:Pt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ht();return{prefix:i,iconName:Pt(i,t)||t}}}},Oe={noAuto:rm,config:M,dom:am,parse:im,library:ll,findIconDefinition:va,toHtml:Ln},om=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(Le.styles).length>0||M.autoFetchSvg)&&rt&&M.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Mr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!rt){var r=ne.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function sm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Za(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Ir(T(T({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function lm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function ri(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,A=r.found?r:n,C=A.width,L=A.height,b=a==="fak",x=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(ve){return d.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(d.classes).join(" "),O={children:[],attributes:T(T({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(L)})},D=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/L*16*.0625,"em")}:{};g&&(O.attributes[It]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(f||In())},children:[l]}),delete O.attributes.title);var K=T(T({},O),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:T(T({},D),d.styles)}),re=r.found&&n.found?tt("generateAbstractMask",K)||{children:[],attributes:{}}:tt("generateAbstractIcon",K)||{children:[],attributes:{}},le=re.children,Ee=re.attributes;return K.children=le,K.attributes=Ee,s?lm(K):sm(K)}function vo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[It]="");var f=T({},o.styles);Za(a)&&(f.transform=Dd({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Ir(f);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function fm(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ir(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Yr=Le.styles;function ba(e){var t=e[0],n=e[1],r=e.slice(4),a=qa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var cm={found:!1,width:512,height:512};function um(e,t){!Vs&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ya(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=ht()),new Promise(function(r,a){if(tt("missingIconAbstract"),n==="fa"){var i=sl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Yr[t]&&Yr[t][e]){var o=Yr[t][e];return r(ba(o))}um(e,t),r(T(T({},cm),{},{icon:M.showMissingIcons&&e?tt("missingIconAbstract")||{}:{}}))})}var bo=function(){},_a=M.measurePerformance&&Un&&Un.mark&&Un.measure?Un:{mark:bo,measure:bo},cn='FA "6.2.1"',dm=function(t){return _a.mark("".concat(cn," ").concat(t," begins")),function(){return fl(t)}},fl=function(t){_a.mark("".concat(cn," ").concat(t," ends")),_a.measure("".concat(cn," ").concat(t),"".concat(cn," ").concat(t," begins"),"".concat(cn," ").concat(t," ends"))},ai={begin:dm,end:fl},rr=function(){};function yo(e){var t=e.getAttribute?e.getAttribute(It):null;return typeof t=="string"}function mm(e){var t=e.getAttribute?e.getAttribute(Xa):null,n=e.getAttribute?e.getAttribute(Ga):null;return t&&n}function pm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function hm(){if(M.autoReplaceSvg===!0)return ar.replace;var e=ar[M.autoReplaceSvg];return e||ar.replace}function gm(e){return ne.createElementNS("http://www.w3.org/2000/svg",e)}function vm(e){return ne.createElement(e)}function cl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?gm:vm:n;if(typeof e=="string")return ne.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(cl(o,{ceFn:r}))}),a}function bm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ar={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(cl(a),n)}),n.getAttribute(It)===null&&M.keepOriginalSource){var r=ne.createComment(bm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ja(n).indexOf(M.replacementClass))return ar.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ln(s)}).join(`
`);n.setAttribute(It,""),n.innerHTML=o}};function _o(e){e()}function ul(e,t){var n=typeof t=="function"?t:rr;if(e.length===0)n();else{var r=_o;M.mutateApproach===wd&&(r=pt.requestAnimationFrame||_o),r(function(){var a=hm(),i=ai.begin("mutate");e.map(a),i(),n()})}}var ii=!1;function dl(){ii=!0}function xa(){ii=!1}var pr=null;function xo(e){if(!!fo&&!!M.observeMutations){var t=e.treeCallback,n=t===void 0?rr:t,r=e.nodeCallback,a=r===void 0?rr:r,i=e.pseudoElementsCallback,o=i===void 0?rr:i,s=e.observeMutationsRoot,l=s===void 0?ne:s;pr=new fo(function(c){if(!ii){var f=ht();rn(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!yo(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&yo(d.target)&&~Cd.indexOf(d.attributeName))if(d.attributeName==="class"&&mm(d.target)){var p=Nr(Ja(d.target)),g=p.prefix,A=p.iconName;d.target.setAttribute(Xa,g||f),A&&d.target.setAttribute(Ga,A)}else pm(d.target)&&a(d.target)})}}),rt&&pr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ym(){!pr||pr.disconnect()}function _m(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function xm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Nr(Ja(e));return a.prefix||(a.prefix=ht()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Jd(a.prefix,e.innerText)||ti(a.prefix,pa(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function wm(e){var t=rn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||In()):(t["aria-hidden"]="true",t.focusable="false")),t}function Em(){return{iconName:null,title:null,titleId:null,prefix:null,transform:qe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=xm(e),r=n.iconName,a=n.prefix,i=n.rest,o=wm(e),s=ga("parseNodeAttributes",{},e),l=t.styleParser?_m(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:qe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var km=Le.styles;function ml(e){var t=M.autoReplaceSvg==="nest"?wo(e,{styleParser:!1}):wo(e);return~t.extra.classes.indexOf(Xs)?tt("generateLayersText",e,t):tt("generateSvgReplacementMutation",e,t)}var gt=new Set;Qa.map(function(e){gt.add("fa-".concat(e))});Object.keys(Pn[te]).map(gt.add.bind(gt));Object.keys(Pn[fe]).map(gt.add.bind(gt));gt=Nn(gt);function Eo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rt)return Promise.resolve();var n=ne.documentElement.classList,r=function(d){return n.add("".concat(co,"-").concat(d))},a=function(d){return n.remove("".concat(co,"-").concat(d))},i=M.autoFetchSvg?gt:Qa.map(function(f){return"fa-".concat(f)}).concat(Object.keys(km));i.includes("fa")||i.push("fa");var o=[".".concat(Xs,":not([").concat(It,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(It,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=rn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ai.begin("onTree"),c=s.reduce(function(f,d){try{var p=ml(d);p&&f.push(p)}catch(g){Vs||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(p){ul(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),d(p)})})}function Am(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ml(e).then(function(n){n&&ul([n],t)})}function Om(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:va(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:va(a||{})),e(r,T(T({},n),{},{mask:a}))}}var Pm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?qe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,p=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,C=n.classes,L=C===void 0?[]:C,b=n.attributes,x=b===void 0?{}:b,O=n.styles,D=O===void 0?{}:O;if(!!t){var K=t.prefix,re=t.iconName,le=t.icon;return Mr(T({type:"icon"},t),function(){return Tt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?x["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(A||In()):(x["aria-hidden"]="true",x.focusable="false")),ri({icons:{main:ba(le),mask:l?ba(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:re,transform:T(T({},qe),a),symbol:o,title:p,maskId:f,titleId:A,extra:{attributes:x,styles:D,classes:L}})})}},Sm={mixout:function(){return{icon:Om(Pm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Eo,n.nodeCallback=Am,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ne:r,i=n.callback,o=i===void 0?function(){}:i;return Eo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,A){Promise.all([ya(a,s),f.iconName?ya(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var L=qa(C,2),b=L[0],x=L[1];g([n,ri({icons:{main:b,mask:x},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ir(s);l.length>0&&(a.style=l);var c;return Za(o)&&(c=tt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Cm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Mr({type:"layer"},function(){Tt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Nn(i)).join(" ")},children:o}]})}}}},Rm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return Mr({type:"counter",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),fm({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Nn(s))}})})}}}},Im={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?qe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,p=r.styles,g=p===void 0?{}:p;return Mr({type:"text",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),vo({content:n,transform:T(T({},qe),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Nn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ws){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,vo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Tm=new RegExp('"',"ug"),ko=[1105920,1112319];function Nm(e){var t=e.replace(Tm,""),n=Yd(t,0),r=n>=ko[0]&&n<=ko[1],a=t.length===2?t[0]===t[1]:!1;return{value:pa(a?t[0]:t),isSecondary:r||a}}function Ao(e,t){var n="".concat(xd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=rn(e.children),o=i.filter(function(le){return le.getAttribute(ma)===t})[0],s=pt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Od),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?fe:te,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Sn[p][l[2].toLowerCase()]:Pd[p][c],A=Nm(d),C=A.value,L=A.isSecondary,b=l[0].startsWith("FontAwesome"),x=ti(g,C),O=x;if(b){var D=Zd(C);D.iconName&&D.prefix&&(x=D.iconName,g=D.prefix)}if(x&&!L&&(!o||o.getAttribute(Xa)!==g||o.getAttribute(Ga)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var K=Em(),re=K.extra;re.attributes[ma]=t,ya(x,g).then(function(le){var Ee=ri(T(T({},K),{},{icons:{main:le,mask:ni()},prefix:g,iconName:O,extra:re,watchable:!0})),ve=ne.createElement("svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=Ee.map(function(Pe){return Ln(Pe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Mm(e){return Promise.all([Ao(e,"::before"),Ao(e,"::after")])}function Lm(e){return e.parentNode!==document.head&&!~Ed.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ma)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Oo(e){if(!!rt)return new Promise(function(t,n){var r=rn(e.querySelectorAll("*")).filter(Lm).map(Mm),a=ai.begin("searchPseudoElements");dl(),Promise.all(r).then(function(){a(),xa(),t()}).catch(function(){a(),xa(),n()})})}var Fm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Oo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ne:r;M.searchPseudoElements&&Oo(a)}}},Po=!1,jm={mixout:function(){return{dom:{unwatch:function(){dl(),Po=!0}}}},hooks:function(){return{bootstrap:function(){xo(ga("mutationObserverCallbacks",{}))},noAuto:function(){ym()},watch:function(n){var r=n.observeMutationsRoot;Po?xa():xo(ga("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},So=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},$m={mixout:function(){return{parse:{transform:function(n){return So(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=So(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},qr={x:0,y:0,width:"100%",height:"100%"};function Co(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Dm(e){return e.tag==="g"?e.children:[e]}var zm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Nr(a.split(" ").map(function(o){return o.trim()})):ni();return i.prefix||(i.prefix=ht()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,p=o.icon,g=$d({transform:l,containerWidth:d,iconWidth:c}),A={tag:"rect",attributes:T(T({},qr),{},{fill:"white"})},C=f.children?{children:f.children.map(Co)}:{},L={tag:"g",attributes:T({},g.inner),children:[Co(T({tag:f.tag,attributes:T(T({},f.attributes),g.path)},C))]},b={tag:"g",attributes:T({},g.outer),children:[L]},x="mask-".concat(s||In()),O="clip-".concat(s||In()),D={tag:"mask",attributes:T(T({},qr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,b]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Dm(p)},D]};return r.push(K,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(x,")")},qr)}),{children:r,attributes:a}}}},Hm={provides:function(t){var n=!1;pt.matchMedia&&(n=pt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Bm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Um=[Hd,Sm,Cm,Rm,Im,Fm,jm,$m,zm,Hm,Bm];nm(Um,{mixoutsTo:Oe});Oe.noAuto;var pl=Oe.config,Km=Oe.library;Oe.dom;var hr=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var Wm=Oe.icon;Oe.layer;var Ym=Oe.text;Oe.counter;function Ro(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ro(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ro(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gr(e){return gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gr(e)}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Vm(e,t){if(e==null)return{};var n=qm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function wa(e){return Xm(e)||Gm(e)||Qm(e)||Jm()}function Xm(e){if(Array.isArray(e))return Ea(e)}function Gm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qm(e,t){if(!!e){if(typeof e=="string")return Ea(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ea(e,t)}}function Ea(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Jm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hl={exports:{}};(function(e){(function(t){var n=function(b,x,O){if(!c(x)||d(x)||p(x)||g(x)||l(x))return x;var D,K=0,re=0;if(f(x))for(D=[],re=x.length;K<re;K++)D.push(n(b,x[K],O));else{D={};for(var le in x)Object.prototype.hasOwnProperty.call(x,le)&&(D[b(le,O)]=n(b,x[le],O))}return D},r=function(b,x){x=x||{};var O=x.separator||"_",D=x.split||/(?=[A-Z])/;return b.split(D).join(O)},a=function(b){return A(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(x,O){return O?O.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var x=a(b);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(b,x){return r(b,x).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},c=function(b){return b===Object(b)},f=function(b){return s.call(b)=="[object Array]"},d=function(b){return s.call(b)=="[object Date]"},p=function(b){return s.call(b)=="[object RegExp]"},g=function(b){return s.call(b)=="[object Boolean]"},A=function(b){return b=b-0,b===b},C=function(b,x){var O=x&&"process"in x?x.process:x;return typeof O!="function"?b:function(D,K){return O(D,b,K)}},L={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,x){return n(C(a,x),b)},decamelizeKeys:function(b,x){return n(C(o,x),b,x)},pascalizeKeys:function(b,x){return n(C(i,x),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=L:t.humps=L})(Zm)})(hl);var ep=hl.exports,tp=["class","style"];function np(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ep.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function rp(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return oi(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=rp(f);break;case"style":l.style=np(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Vm(n,tp);return Cr(e.tag,Ne(Ne(Ne({},t),{},{class:a.class,style:Ne(Ne({},a.style),o)},a.attrs),s),r)}var gl=!1;try{gl=!0}catch{}function ap(){if(!gl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function bn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}function ip(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},xe(t,"fa-".concat(e.size),e.size!==null),xe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),xe(t,"fa-pull-".concat(e.pull),e.pull!==null),xe(t,"fa-swap-opacity",e.swapOpacity),xe(t,"fa-bounce",e.bounce),xe(t,"fa-shake",e.shake),xe(t,"fa-beat",e.beat),xe(t,"fa-fade",e.fade),xe(t,"fa-beat-fade",e.beatFade),xe(t,"fa-flash",e.flash),xe(t,"fa-spin-pulse",e.spinPulse),xe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Io(e){if(e&&gr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(hr.icon)return hr.icon(e);if(e===null)return null;if(gr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var op=nn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=se(function(){return Io(t.icon)}),i=se(function(){return bn("classes",ip(t))}),o=se(function(){return bn("transform",typeof t.transform=="string"?hr.transform(t.transform):t.transform)}),s=se(function(){return bn("mask",Io(t.mask))}),l=se(function(){return Wm(a.value,Ne(Ne(Ne(Ne({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});un(l,function(f){if(!f)return ap("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=se(function(){return l.value?oi(l.value.abstract[0],{},r):null});return function(){return c.value}}});nn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=pl.familyPrefix,i=se(function(){return["".concat(a,"-layers")].concat(wa(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Cr("div",{class:i.value},r.default?r.default():[])}}});nn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=pl.familyPrefix,i=se(function(){return bn("classes",[].concat(wa(t.counter?["".concat(a,"-layers-counter")]:[]),wa(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=se(function(){return bn("transform",typeof t.transform=="string"?hr.transform(t.transform):t.transform)}),s=se(function(){var c=Ym(t.value.toString(),Ne(Ne({},o.value),i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=se(function(){return oi(s.value,{},r)});return function(){return l.value}}});var sp={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]},lp={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},fp={prefix:"fas",iconName:"question",icon:[320,512,[10067,10068,61736],"3f","M96 96c-17.7 0-32 14.3-32 32s-14.3 32-32 32s-32-14.3-32-32C0 75 43 32 96 32h97c70.1 0 127 56.9 127 127c0 52.4-32.2 99.4-81 118.4l-63 24.5 0 18.1c0 17.7-14.3 32-32 32s-32-14.3-32-32V301.9c0-26.4 16.2-50.1 40.8-59.6l63-24.5C240 208.3 256 185 256 159c0-34.8-28.2-63-63-63H96zm48 384c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z"]};Km.add(sp,lp,fp);const si=Hc(ad);si.use(Wc());si.use(zs);si.component("font-awesome-icon",op).mount("#app");export{Ke as F,Ya as _,$e as a,Zr as b,cr as c,oe as d,oa as e,oc as f,up as g,pp as h,dp as i,En as o,zs as r,cp as t,mp as v,Wt as w};
