var e=Object.assign;import{r as t,w as o,k as r,t as n,p as a,a as l,g as i,b as s,x as c,y as u,o as d,c as h,d as m,F as p,e as L,j as f}from"./vendor.314b8895.js";const T={setup(){let a=[],l=!1;const{proxy:s}=i(),c=t({html:"",authorList:[]});o((()=>s.$route),((e,t)=>{e.path+e.query.id!==t.path+t.query.id&&(a=[],c.authorList=[],e.query.id&&u())}));const u=async()=>{c.html="";let e=await s.$api.HOME.getFileOption(s.$route.query.id);c.html=e,s.$nextTick((()=>{[...document.querySelectorAll("#write a")].filter((e=>e.outerHTML.includes("#"))).forEach((e=>{e.onclick=e=>{let t=c.authorList.findIndex((t=>decodeURIComponent(e.target.parentNode.hash).replace("#","")===t.innerText));return t>=0&&L(t),!1}})),document.querySelectorAll(".md-fences").forEach((e=>{let t=document.createElement("div");t.setAttribute("class","copy_code"),t.onclick=e=>{s.$utils.copy(e.target.parentElement),s.$message.success("复制成功")},e.appendChild(t)})),d(),s.$route.query.index&&L(s.$route.query.index)}))};r((()=>{let e=document.querySelector(".md");s.$utils.watchScroll(h,500,e),u()}));const d=()=>{let e=[];a=[];let t=document.querySelectorAll(".md .md-header-anchor");t.forEach(((o,r)=>{if("H2"!==o.parentNode.nodeName||1==t.length){const{innerText:t,nodeName:n,offsetTop:a,outerHTML:l}=o.parentNode;e.push({outerHTML:l.replace(/<a.*?>([\s\S]*)<\/a>/,""),innerText:t,nodeName:n,offsetTop:a,classActive:!1,index:r})}})),c.authorList=e,a=e},h=()=>{if(l){let e=document.querySelector(".md").scrollTop||document.documentElement.scrollTop,t=Math.max(...a.map(((t,o)=>{if(e>=t.offsetTop)return o})).filter((e=>void 0!==e)));m(),t>=0&&(c.authorList[t].classActive=!0,p(t))}l=!0,s.$nextTick((()=>{let e=document.querySelector(".active");e&&e.scrollIntoView({behavior:"smooth"})}))},m=()=>{c.authorList.forEach((e=>{e.classActive=!1}))},p=e=>{const{$route:t}=s;s.$router.replace({path:t.path,query:{id:t.query.id,index:e}})},L=(e,t)=>{let o,r;m(),c.authorList[e]?(c.authorList[e].classActive=!0,o=c.authorList[e].innerText):(c.authorList[t].classActive=!0,o=c.authorList[t].innerText),p(e),l=!1,document.querySelectorAll(".md-header-anchor").forEach((e=>{e.parentNode.innerText===o&&(r=e)})),r&&r.scrollIntoView({behavior:"smooth"})};return e(e({},n(c)),{scrollTo:L,submit:()=>{s.$prompt("请输入标题","提示",{}).then((({value:e})=>{e&&(c.authorList=c.authorList.filter((t=>t.innerText.toLowerCase().includes(e.toLowerCase())))),0==c.authorList.length&&d()})),d()},handleClick:e=>{s.$utils.viewImg()}})}},g=f("data-v-023bfe8e");a("data-v-023bfe8e");const v={class:"flex","element-loading-text":"加载页面中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255,255, 255, 0.4)"},x={class:"author","element-loading-text":"加载目录中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255,255, 255, 0.2)"};l();const y=g(((e,t,o,r,n,a)=>{const l=s("el-button"),i=s("el-backtop"),f=c("loading");return u((d(),h("div",v,[u(m("div",x,[m(l,{icon:"el-icon-search",size:"mini",class:"search",circle:"",onClick:r.submit},null,8,["onClick"]),(d(!0),h(p,null,L(e.authorList,((e,t)=>(d(),h("div",{class:{active:e.classActive},key:e.outerHTML,onClick:o=>r.scrollTo(e.index,t),innerHTML:e.outerHTML},null,10,["onClick","innerHTML"])))),128))],512),[[f,!e.authorList.length]]),m("div",{class:"md",innerHTML:e.html,onClick:t[1]||(t[1]=(...e)=>r.handleClick&&r.handleClick(...e))},null,8,["innerHTML"]),m(i,{target:".md"})],512)),[[f,!e.html]])}));T.render=y,T.__scopeId="data-v-023bfe8e";export default T;
