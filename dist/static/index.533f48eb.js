var e=Object.assign;import{r as t,w as o,o as r,t as a,p as l,a as s,g as i,b as c,c as n,d as u,e as d,F as h,f as m,i as p,H as v,I as L,j as T}from"./vendor.31214579.js";const y={setup(){let l=[],s=!1;const{proxy:c}=i(),n=t({html:"",authorList:[]});o((()=>c.$route),((e,t)=>{e.path+e.query.id!==t.path+t.query.id&&(l=[],n.authorList=[],e.query.id&&([".author",".md"].forEach((e=>{document.querySelector(e).scrollTop=0})),u()))}));const u=async()=>{n.html="";let e=await c.$api.HOME.getFileOption(c.$route.query.id);n.html=e,c.$nextTick((()=>{[...document.querySelectorAll("#write a")].filter((e=>e.outerHTML.includes("#"))).forEach((e=>{e.onclick=e=>{let t=n.authorList.findIndex((t=>decodeURIComponent(e.target.parentNode.hash).replace("#","")===t.innerText));return t>=0&&v(t),!1}})),document.querySelectorAll(".md-fences").forEach((e=>{let t=document.createElement("div");t.setAttribute("class","copy_code"),t.onclick=e=>{c.$utils.copy(e.target.parentElement),c.$message.success("复制成功")},e.appendChild(t)})),d(),c.$route.query.index&&v(c.$route.query.index)}))};r((()=>{let e=document.querySelector(".md");c.$utils.watchScroll(h,500,e),u()}));const d=()=>{let e=[];l=[];let t=document.querySelectorAll(".md .md-header-anchor");t.forEach(((o,r)=>{if("H2"!==o.parentNode.nodeName||1==t.length){const{innerText:t,nodeName:a,offsetTop:l,outerHTML:s}=o.parentNode;e.push({outerHTML:s.replace(/<a.*?>([\s\S]*)<\/a>/,""),innerText:t,nodeName:a,offsetTop:l,classActive:!1,index:r})}})),n.authorList=e,l=e},h=()=>{if(s){let e=document.querySelector(".md").scrollTop||document.documentElement.scrollTop,t=Math.max(...l.map(((t,o)=>{if(e>=t.offsetTop)return o})).filter((e=>void 0!==e)));m(),t>=0&&(n.authorList[t].classActive=!0,p(t))}s=!0,c.$nextTick((()=>{let e=document.querySelector(".active");e&&e.scrollIntoView({behavior:"smooth"})}))},m=()=>{n.authorList.forEach((e=>{e.classActive=!1}))},p=e=>{const{$route:t}=c;c.$router.replace({path:t.path,query:{id:t.query.id,index:e}})},v=(e,t)=>{var o;let r;m(),n.authorList[e]?(n.authorList[e].classActive=!0,r=n.authorList[e].innerText):(n.authorList[t].classActive=!0,r=n.authorList[t].innerText),p(e),s=!1;let a=null==(o=[...document.querySelectorAll(".md-header-anchor")].filter((e=>e.parentNode.innerText===r&&e)))?void 0:o[0];a&&a.scrollIntoView({behavior:"smooth"})};return e(e({},a(n)),{scrollTo:v,submit:()=>{c.$prompt("请输入标题","提示",{}).then((({value:e})=>{e&&(n.authorList=n.authorList.filter((t=>t.innerText.toLowerCase().includes(e.toLowerCase())))),0==n.authorList.length&&d()})),d()},handleClick:e=>{c.$utils.viewImg()}})}},f=T("data-v-77a796e1");l("data-v-77a796e1");const x={class:"flex"},g={class:"author"},k={key:0,class:"tc",style:{width:"100%"}},q={class:"tc",style:{width:"100%",background:"rgba(255, 255, 255, 0.5)",margin:"0 20px"}};s();const $=f(((e,t,o,r,a,l)=>{const s=c("el-button"),i=c("el-empty"),T=c("el-backtop");return n(),u("div",x,[d("div",g,[d(s,{icon:"el-icon-search",size:"mini",class:"search",circle:"",onClick:r.submit},null,8,["onClick"]),(n(!0),u(h,null,m(e.authorList,((e,t)=>(n(),u("div",{class:{active:e.classActive},key:e.outerHTML,onClick:o=>r.scrollTo(e.index,t),innerHTML:e.outerHTML},null,10,["onClick","innerHTML"])))),128)),0==e.authorList.length?(n(),u("div",k,[d(i,{"image-size":200,description:"暂无数据"})])):p("",!0)]),v(d("div",{class:"md",innerHTML:e.html,onClick:t[1]||(t[1]=(...e)=>r.handleClick&&r.handleClick(...e))},null,8,["innerHTML"]),[[L,e.html]]),v(d("div",q,[d(i,{"image-size":200,description:"暂无数据"})],512),[[L,!e.html]]),d(T,{target:".md"})])}));y.render=$,y.__scopeId="data-v-77a796e1";export default y;
