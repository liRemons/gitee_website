var e=Object.assign;import{p as t,a as o,r as a,w as n,t as r,g as s,E as i,b as l,o as c,c as d,d as m,F as p,e as u,f as g,h as f,T as h,i as _,j as y,k as v,l as w,m as k,n as b,q,u as $,s as A,Q as E,A as L}from"./vendor.1759d468.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const a=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,r)=>{const s=new URL(e,a);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),n(l)},onload(){o(self[t].moduleMap[s]),n(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/static/");const P={setup(){const{proxy:t}=s(),o=a({current:"/",href:window.location.href,iconOptions:[{name:"mini",qr:"mini"},{name:"h5",qr:"fe_h5"},{name:"share",qr:""},{name:"change_bg",qr:""}],menu:[{title:"首页",id:"",path:"/"},{title:"html/css",id:"HTML_CSS",path:"/markdown"},{title:"JS",id:"JS",path:"/markdown"},{title:"Vue",id:"Vue",path:"/markdown"},{title:"React",id:"React",path:"/markdown"},{title:"TypeScript",id:"TypeScript",path:"/markdown"},{title:"Node",id:"Node",path:"/markdown"},{title:"Electron",id:"Electron",path:"/markdown"},{title:"Webpack",id:"Webpack",path:"/markdown"},{title:"Vite",id:"Vite",path:"/markdown"},{title:"其它",id:"other",path:"/markdown"}]});n((()=>t.$route),((e,t)=>{o.href=window.location.href,o.current=e.query.id}));return e(e({},r(o)),{copy:()=>{t.$utils.copy(o.href),t.$message.success("复制成功")},changeBG:async e=>{if("change_bg"===e){(await i.get("http://img.xjh.me/random_img.php?type=bg&ctype=nature")).data.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi,((e,t)=>{t||(t=require("./assets/img/bg.jpg")),document.documentElement.style.setProperty("--bg",`url(${t})`)}))}}})}},j=y("data-v-d1eea5d6");t("data-v-d1eea5d6");const C={class:"layout_flex"},O={class:"main"},x={class:"left"},R={key:2};o();const V=j(((e,t,o,a,n,r)=>{const s=l("el-menu-item"),i=l("el-menu"),y=l("router-view"),v=l("el-input"),w=l("el-popover");return c(),d("div",null,[m("div",C,[m(i,{"default-active":e.current,class:"el-menu-demo",mode:"horizontal",router:""},{default:j((()=>[(c(!0),d(p,null,u(e.menu,(e=>(c(),d(s,{index:e.id,key:e.path,route:{path:e.path,query:{id:e.id}}},{default:j((()=>[g(f(e.title),1)])),_:2},1032,["index","route"])))),128))])),_:1},8,["default-active"]),m("div",O,[m(h,null,{default:j((()=>[m(y,{key:e.$router.path})])),_:1})])]),m("div",x,[(c(!0),d(p,null,u(e.iconOptions,(o=>(c(),d("div",{key:o.name},[m(w,{placement:"left",trigger:"hover",width:"100"},{reference:j((()=>[m("div",{class:"icon",onClick:e=>a.changeBG(o.name)},[m("img",{src:e.$img+o.name+"_icon.png",alt:""},null,8,["src"])],8,["onClick"])])),default:j((()=>[o.qr?(c(),d("img",{key:0,class:"qr",style:{width:"120px"},src:e.$img+o.qr+".png",alt:""},null,8,["src"])):_("",!0),o.qr||"share"!==o.name?(c(),d("span",R,"切换背景")):(c(),d(v,{key:1,modelValue:e.href,"onUpdate:modelValue":t[2]||(t[2]=t=>e.href=t)},{append:j((()=>[m("i",{class:"el-icon-copy-document",onClick:t[1]||(t[1]=(...e)=>a.copy&&a.copy(...e))})])),_:1},8,["modelValue"]))])),_:2},1024)])))),128))])])}));P.render=V,P.__scopeId="data-v-d1eea5d6";const U={components:{Layout:P},setup(){const{proxy:e}=s();return e.$utils.IsPC()||(window.location.href="https://remons.gitee.io/fe_mobile/"),{}}},M=y("data-v-f05c418a");t("data-v-f05c418a");const S={class:"bg"},I={class:"bgchild"};o();const T=M(((e,t,o,a,n,r)=>{const s=l("Layout");return c(),d("div",S,[m("div",I,[m(s)])])}));let B;U.render=T,U.__scopeId="data-v-f05c418a";const F={},N=function(e,t){if(!t)return e();if(void 0===B){const e=document.createElement("link").relList;B=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in F)return;F[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":B,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise((e=>{a.addEventListener("load",e)})):void 0}))).then((()=>e()))},z=[{path:"/",name:"Home",component:()=>N((()=>__import__("./index.4d4f818f.js")),["/static/index.4d4f818f.js","/static/index.bfc01c4b.css","/static/vendor.1759d468.js"]),meta:{title:"个人介绍",icon:"UserOutlined"}},{path:"/markdown",name:"markdown",component:()=>N((()=>__import__("./index.1d5f5baf.js")),["/static/index.1d5f5baf.js","/static/index.e8b0378c.css","/static/vendor.1759d468.js"])}],D=v({history:w(),routes:z});var H=k({modules:{Loading:{namespaced:!0,state:{loading:!1},mutations:{openLoading(e){e.loading=!0},closeLoading(e){e.loading=!1}},actions:{}}}});const J={setup:()=>({})},Q=y("data-v-83af7dd2");t("data-v-83af7dd2");const W={style:{"margin-top":"50px",color:"#fff"}},G=g(" 开发中...... "),K=g("回首页");o();const X=Q(((e,t,o,a,n,r)=>{const s=l("router-link"),i=l("a-button"),p=l("a-empty");return c(),d("div",W,[m(p,{image:"https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original","image-style":{height:"200px"}},{description:Q((()=>[G])),default:Q((()=>[m(i,{type:"primary"},{default:Q((()=>[m(s,{to:"/"},{default:Q((()=>[K])),_:1})])),_:1})])),_:1})])}));J.render=X,J.__scopeId="data-v-83af7dd2";const Y=i.create({baseURL:"/feq",timeout:2e4});Y._requestCount=0,Y.interceptors.request.use((e=>(Y._requestCount++,e)),(e=>{console.log(e),Promise.reject(e)})),Y.interceptors.response.use((e=>{Y._requestCount--,Y._requestCount;return e.data}),(e=>{Y._requestCount--,Y._requestCount,Promise.reject(e)}));let Z={service:Y}.service;var ee={HOME:{getFileOption:e=>Z({url:`/summarize/html/${e}.html`,method:"get"})}};const te=b(U);te.component("Empty",J),te.config.globalProperties.$api=ee,te.config.globalProperties.$img="https://remons.gitee.io/feq/summarize/website/assets/img/",te.config.globalProperties.$utils=q,te.config.globalProperties.$store=$(),te.config.globalProperties.$route=A(),te.config.globalProperties.$message=E,te.config.globalProperties.NODE_ENV="production",te.use(H).use(D).use(L).mount("#app");
