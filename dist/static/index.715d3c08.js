var e=Object.assign;import{p as t,a as o,r as a,w as n,t as r,g as s,E as i,b as l,o as c,c as d,d as m,F as u,e as p,f as g,h,T as f,i as y,j as _,k as v,l as k,m as b,n as w,q,u as A,s as E,Q as $,A as L}from"./vendor.1759d468.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const a=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,r)=>{const s=new URL(e,a);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),n(l)},onload(){o(self[t].moduleMap[s]),n(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/static/");const P={setup(){const{proxy:t}=s(),o=a({current:"/",href:window.location.href,darkIcon:"el-icon-sunny",iconOptions:[{name:"mini",qr:"mini"},{name:"h5",qr:"fe_h5"},{name:"share",qr:""},{name:"change_bg",qr:""}],menu:[{title:"首页",id:"",path:"/"},{title:"html/css",id:"HTML_CSS",path:"/markdown"},{title:"JS",id:"JS",path:"/markdown"},{title:"Vue",id:"Vue",path:"/markdown"},{title:"React",id:"React",path:"/markdown"},{title:"TypeScript",id:"TypeScript",path:"/markdown"},{title:"Node",id:"Node",path:"/markdown"},{title:"Electron",id:"Electron",path:"/markdown"},{title:"Webpack",id:"Webpack",path:"/markdown"},{title:"Vite",id:"Vite",path:"/markdown"},{title:"其它",id:"other",path:"/markdown"}]});n((()=>t.$route),((e,t)=>{o.href=window.location.href,o.current=e.query.id}));const l=(e,t)=>{document.querySelectorAll(e).forEach(((e,o)=>{e.style.filter=t?"invert(100%) hue-rotate(180deg)":""}))};return e(e({},r(o)),{copy:()=>{t.$utils.copy(o.href),t.$message.success("复制成功")},changeBG:async e=>{if("change_bg"===e){(await i.get("https://img.xjh.me/random_img.php?type=bg&ctype=nature")).data.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi,((e,t)=>{t||(t=require("./assets/img/bg.jpg")),document.documentElement.style.setProperty("--bg",`url(${t})`)}))}},changeDark:()=>{"el-icon-sunny"===o.darkIcon?o.darkIcon="el-icon-moon":o.darkIcon="el-icon-sunny";let e=[".bgchild","img",".el-popover",".el-affix",".md-fences"];document.querySelector(".bgchild").style.filter?e.forEach((e=>{l(e)})):e.forEach((e=>{l(e,!0)}))}})}},j=_("data-v-095c052e");t("data-v-095c052e");const C={class:"layout_flex"},x={class:"darkAndWhite"},O={class:"main"},R={class:"left"},I={key:2};o();const V=j(((e,t,o,a,n,r)=>{const s=l("el-menu-item"),i=l("el-menu"),_=l("router-view"),v=l("el-input"),k=l("el-popover");return c(),d("div",null,[m("div",C,[m(i,{"default-active":e.current,class:"el-menu-demo",mode:"horizontal",router:""},{default:j((()=>[(c(!0),d(u,null,p(e.menu,(e=>(c(),d(s,{index:e.id,key:e.path,route:{path:e.path,query:{id:e.id}}},{default:j((()=>[g(h(e.title),1)])),_:2},1032,["index","route"])))),128)),m("div",x,[m("i",{class:e.darkIcon,onClick:t[1]||(t[1]=(...e)=>a.changeDark&&a.changeDark(...e))},null,2)])])),_:1},8,["default-active"]),m("div",O,[m(f,{name:"el-zoom-in-center"},{default:j((()=>[m(_,{key:e.$router.path})])),_:1})])]),m("div",R,[(c(!0),d(u,null,p(e.iconOptions,(o=>(c(),d("div",{key:o.name},[m(k,{placement:"left",trigger:"hover",width:"100"},{reference:j((()=>[m("div",{class:"icon",onClick:e=>a.changeBG(o.name)},[m("img",{src:e.$img+o.name+"_icon.png",alt:""},null,8,["src"])],8,["onClick"])])),default:j((()=>[o.qr?(c(),d("img",{key:0,class:"qr",style:{width:"120px"},src:e.$img+o.qr+".png",alt:""},null,8,["src"])):y("",!0),o.qr||"share"!==o.name?y("",!0):(c(),d(v,{key:1,modelValue:e.href,"onUpdate:modelValue":t[3]||(t[3]=t=>e.href=t)},{append:j((()=>[m("i",{class:"el-icon-copy-document",onClick:t[2]||(t[2]=(...e)=>a.copy&&a.copy(...e))})])),_:1},8,["modelValue"])),"change_bg"===o.name?(c(),d("span",I,"切换背景")):y("",!0)])),_:2},1024)])))),128))])])}));P.render=V,P.__scopeId="data-v-095c052e";const S={components:{Layout:P},setup(){const{proxy:e}=s();return e.$utils.IsPC()||(window.location.href="https://remons.gitee.io/fe_mobile/"),{}}},U=_("data-v-1176eb7a");t("data-v-1176eb7a");const M={class:"bg"},D={class:"bgchild"};o();const T=U(((e,t,o,a,n,r)=>{const s=l("Layout");return c(),d("div",M,[m("div",D,[m(s)])])}));let z;S.render=T,S.__scopeId="data-v-1176eb7a";const B={},F=function(e,t){if(!t)return e();if(void 0===z){const e=document.createElement("link").relList;z=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in B)return;B[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":z,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise((e=>{a.addEventListener("load",e)})):void 0}))).then((()=>e()))},N=[{path:"/",name:"Home",component:()=>F((()=>__import__("./index.4d4f818f.js")),["/static/index.4d4f818f.js","/static/index.bfc01c4b.css","/static/vendor.1759d468.js"]),meta:{title:"个人介绍",icon:"UserOutlined"}},{path:"/markdown",name:"markdown",component:()=>F((()=>__import__("./index.5b6c5ede.js")),["/static/index.5b6c5ede.js","/static/index.8859c352.css","/static/vendor.1759d468.js"])}],W=v({history:k(),routes:N});var H=b({modules:{Loading:{namespaced:!0,state:{loading:!1},mutations:{openLoading(e){e.loading=!0},closeLoading(e){e.loading=!1}},actions:{}}}});const J={setup:()=>({})},Q=_("data-v-83af7dd2");t("data-v-83af7dd2");const G={style:{"margin-top":"50px",color:"#fff"}},K=g(" 开发中...... "),X=g("回首页");o();const Y=Q(((e,t,o,a,n,r)=>{const s=l("router-link"),i=l("a-button"),u=l("a-empty");return c(),d("div",G,[m(u,{image:"https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original","image-style":{height:"200px"}},{description:Q((()=>[K])),default:Q((()=>[m(i,{type:"primary"},{default:Q((()=>[m(s,{to:"/"},{default:Q((()=>[X])),_:1})])),_:1})])),_:1})])}));J.render=Y,J.__scopeId="data-v-83af7dd2";const Z=i.create({baseURL:"/feq",timeout:2e4});Z._requestCount=0,Z.interceptors.request.use((e=>(Z._requestCount++,e)),(e=>{console.log(e),Promise.reject(e)})),Z.interceptors.response.use((e=>{Z._requestCount--,Z._requestCount;return e.data}),(e=>{Z._requestCount--,Z._requestCount,Promise.reject(e)}));let ee={service:Z}.service;var te={HOME:{getFileOption:e=>ee({url:`/summarize/html/${e}.html`,method:"get"})}};const oe=w(S);oe.component("Empty",J),oe.config.globalProperties.$api=te,oe.config.globalProperties.$img="https://remons.gitee.io/feq/summarize/website/assets/img/",oe.config.globalProperties.$utils=q,oe.config.globalProperties.$store=A(),oe.config.globalProperties.$route=E(),oe.config.globalProperties.$message=$,oe.config.globalProperties.NODE_ENV="production",oe.use(H).use(W).use(L).mount("#app");
