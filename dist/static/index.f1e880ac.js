var e=Object.assign;import{r as t,w as o,s as l,t as a,p as n,a as r,g as i,b as s,v as c,x as u,o as d,c as m,d as h,y as p,F as f,e as T,i as g}from"./vendor.c015448b.js";const L={setup(){let n=[],r=!1;const{proxy:s}=i(),c=t({html:"",authorList:[],title:""});o((()=>s.$route),((e,t)=>{e.path+e.query.id!==t.path+t.query.id&&(c.title="",n=[],c.authorList=[],e.query.id&&s.$nextTick((()=>{u()})))}));const u=async()=>{c.html="";let e=await s.$api.HOME.getFileOption(s.$route.query.id);c.html=e;let t=null;t&&clearTimeout(t),t=setTimeout((()=>{d()}),1e3)};l((()=>{let e=document.querySelector(".md");s.$utils.watchScroll(m,500,e),u()}));const d=()=>{let e=[];n=[];let t=document.querySelectorAll(".md .md-header-anchor");t.forEach((o=>{"H2"===o.parentNode.nodeName&&1!=t.length||e.push({outerHTML:o.parentNode.outerHTML,innerText:o.parentNode.innerText,nodeName:o.parentNode.nodeName,offsetTop:o.parentNode.offsetTop,classActive:!1})})),c.authorList=e;let o=s.$route.query.index;o&&(f(o),c.authorList[o].classActive=!0),n=e},m=()=>{if(r){let e=document.querySelector(".md").scrollTop||document.documentElement.scrollTop,t=n.findIndex((t=>t.offsetTop>e));h(),t>0&&(c.authorList[t].classActive=!0,p(t)),s.$nextTick((()=>{let e=document.querySelector(".author"),t=document.querySelector(".author .active");Number(t.offsetTop)>window.innerHeight-150&&(e.scrollTop=Number(t.offsetTop)-100)}))}r=!0},h=()=>{c.authorList.forEach((e=>{e.classActive=!1}))},p=e=>{const{$route:t}=s;s.$router.replace({path:t.path,query:{id:t.query.id,index:e}})},f=e=>{let t=document.querySelector(".md");h(),c.authorList[e].classActive=!0,p(e),r=!1,t.scrollTop=c.authorList[e].offsetTop-100};return e(e({},a(c)),{scrollTo:f,submit:()=>{d(),c.title&&(c.authorList=c.authorList.filter((e=>e.innerText.includes(c.title)))),0==c.authorList.length&&d()}})}},v=g("data-v-cf360e5e");n("data-v-cf360e5e");const y={class:"flex","element-loading-text":"加载页面中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255,255, 255, 0.4)"},x={class:"author","element-loading-text":"加载目录中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255,255, 255, 0.2)"};r();const b=v(((e,t,o,l,a,n)=>{const r=s("el-button"),i=s("el-input"),g=s("el-affix"),L=s("el-backtop"),b=c("loading");return u((d(),m("div",y,[u(h("div",x,[e.authorList.length?(d(),m(g,{key:0,offset:60},{default:v((()=>[h(i,{size:"mini",onChange:l.submit,modelValue:e.title,"onUpdate:modelValue":t[1]||(t[1]=t=>e.title=t),placeholder:"请输入标题"},{append:v((()=>[h(r,{onClick:l.submit,icon:"el-icon-search"},null,8,["onClick"])])),_:1},8,["onChange","modelValue"])])),_:1})):p("",!0),(d(!0),m(f,null,T(e.authorList,((e,t)=>(d(),m("div",{class:{active:e.classActive},key:e.outerHTML,onClick:e=>l.scrollTo(t),innerHTML:e.outerHTML},null,10,["onClick","innerHTML"])))),128))],512),[[b,!e.authorList.length]]),h("div",{class:"md",innerHTML:e.html,onClick:t[2]||(t[2]=t=>e.$utils.viewImg())},null,8,["innerHTML"]),h(L,{target:".md"})],512)),[[b,!e.html]])}));L.render=b,L.__scopeId="data-v-cf360e5e";export default L;