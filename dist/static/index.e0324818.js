var e=Object.assign;import{p as t,a as o,r as a,w as r,t as n,g as s,b as i,o as l,c,d,F as u,e as p,f as m,h as f,T as h,i as g,j as _,k as v,l as y,E as w,m as k,n as b,u as $,q,Q as A,A as L}from"./vendor.1bd1272e.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const a=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,n)=>{const s=new URL(e,a);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){n(new Error(`Failed to import: ${e}`)),r(l)},onload(){o(self[t].moduleMap[s]),r(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/static/");const E={setup(){const{proxy:t}=s(),o=a({current:"/",href:window.location.href,iconOptions:[{name:"mini",qr:"mini"},{name:"h5",qr:"fe_h5"},{name:"share",qr:""}],menu:[{title:"首页",id:"",path:"/"},{title:"html/css",id:"HTML_CSS",path:"/markdown"},{title:"JS",id:"JS",path:"/markdown"},{title:"Vue",id:"Vue",path:"/markdown"},{title:"React",id:"React",path:"/markdown"},{title:"TypeScript",id:"TypeScript",path:"/markdown"},{title:"Node",id:"Node",path:"/markdown"},{title:"Electron",id:"Electron",path:"/markdown"},{title:"Webpack",id:"Webpack",path:"/markdown"},{title:"Vite",id:"Vite",path:"/markdown"},{title:"其它",id:"other",path:"/markdown"}]});r((()=>t.$route),((e,t)=>{o.href=window.location.href,o.current=e.query.id}));return e(e({},n(o)),{copy:()=>{t.$utils.copy(o.href),t.$message.success("复制成功")}})}},P=g("data-v-1629d52c");t("data-v-1629d52c");const j={class:"layout_flex"},O={class:"main"},C={class:"left"},R={class:"icon"};o();const x=P(((e,t,o,a,r,n)=>{const s=i("el-menu-item"),g=i("el-menu"),_=i("router-view"),v=i("el-input"),y=i("el-popover");return l(),c("div",null,[d("div",j,[d(g,{"default-active":e.current,class:"el-menu-demo",mode:"horizontal",router:""},{default:P((()=>[(l(!0),c(u,null,p(e.menu,(e=>(l(),c(s,{index:e.id,key:e.path,route:{path:e.path,query:{id:e.id}}},{default:P((()=>[m(f(e.title),1)])),_:2},1032,["index","route"])))),128))])),_:1},8,["default-active"]),d("div",O,[d(h,null,{default:P((()=>[d(_,{key:e.$router.path})])),_:1})])]),d("div",C,[(l(!0),c(u,null,p(e.iconOptions,(o=>(l(),c(y,{placement:"left",trigger:"hover",width:"100",key:o.name},{reference:P((()=>[d("div",R,[d("img",{src:e.$img+o.name+"_icon.png",alt:""},null,8,["src"])])])),default:P((()=>[o.qr?(l(),c("img",{key:0,class:"qr",style:{width:"120px"},src:e.$img+o.qr+".png",alt:""},null,8,["src"])):(l(),c(v,{key:1,modelValue:e.href,"onUpdate:modelValue":t[2]||(t[2]=t=>e.href=t)},{append:P((()=>[d("i",{class:"el-icon-copy-document",onClick:t[1]||(t[1]=(...e)=>a.copy&&a.copy(...e))})])),_:1},8,["modelValue"]))])),_:2},1024)))),128))])])}));E.render=x,E.__scopeId="data-v-1629d52c";const V={components:{Layout:E},setup(){const{proxy:e}=s();return e.$utils.IsPC()||(window.location.href="https://remons.gitee.io/fe_mobile/"),{}}},U=g("data-v-5a620463");t("data-v-5a620463");const M={class:"bg"},S={class:"bgchild"};o();const I=U(((e,t,o,a,r,n)=>{const s=i("Layout");return l(),c("div",M,[d("div",S,[d(s)])])}));let T;V.render=I,V.__scopeId="data-v-5a620463";const F={},N=function(e,t){if(!t)return e();if(void 0===T){const e=document.createElement("link").relList;T=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in F)return;F[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":T,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise((e=>{a.addEventListener("load",e)})):void 0}))).then((()=>e()))},z=[{path:"/",name:"Home",component:()=>N((()=>__import__("./index.856f521e.js")),["/static/index.856f521e.js","/static/index.bfc01c4b.css","/static/vendor.1bd1272e.js"]),meta:{title:"个人介绍",icon:"UserOutlined"}},{path:"/markdown",name:"markdown",component:()=>N((()=>__import__("./index.c6eca5a3.js")),["/static/index.c6eca5a3.js","/static/index.734b4315.css","/static/vendor.1bd1272e.js"])}],D=_({history:v(),routes:z});var H=y({modules:{Loading:{namespaced:!0,state:{loading:!1},mutations:{openLoading(e){e.loading=!0},closeLoading(e){e.loading=!1}},actions:{}}}});const J={setup:()=>({})},Q=g("data-v-83af7dd2");t("data-v-83af7dd2");const W={style:{"margin-top":"50px",color:"#fff"}},B=m(" 开发中...... "),G=m("回首页");o();const K=Q(((e,t,o,a,r,n)=>{const s=i("router-link"),u=i("a-button"),p=i("a-empty");return l(),c("div",W,[d(p,{image:"https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original","image-style":{height:"200px"}},{description:Q((()=>[B])),default:Q((()=>[d(u,{type:"primary"},{default:Q((()=>[d(s,{to:"/"},{default:Q((()=>[G])),_:1})])),_:1})])),_:1})])}));J.render=K,J.__scopeId="data-v-83af7dd2";const X=w.create({baseURL:"/feq",timeout:2e4});X._requestCount=0,X.interceptors.request.use((e=>(X._requestCount++,e)),(e=>{console.log(e),Promise.reject(e)})),X.interceptors.response.use((e=>{X._requestCount--,X._requestCount;return e.data}),(e=>{X._requestCount--,X._requestCount,Promise.reject(e)}));let Y={service:X}.service;var Z={HOME:{getFileOption:e=>Y({url:`/summarize/html/${e}.html`,method:"get"})}};const ee=k(V);ee.component("Empty",J),ee.config.globalProperties.$api=Z,ee.config.globalProperties.$img="https://remons.gitee.io/feq/summarize/website/assets/img/",ee.config.globalProperties.$utils=b,ee.config.globalProperties.$store=$(),ee.config.globalProperties.$route=q(),ee.config.globalProperties.$message=A,ee.config.globalProperties.NODE_ENV="production",ee.use(H).use(D).use(L).mount("#app");