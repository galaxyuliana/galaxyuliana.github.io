var C=Object.defineProperty,I=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var r=(t,n,e)=>n in t?C(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,u=(t,n)=>{for(var e in n||(n={}))k.call(n,e)&&r(t,e,n[e]);if(p)for(var e of p(n))j.call(n,e)&&r(t,e,n[e]);return t},h=(t,n)=>I(t,g(n));import{j as y}from"./data.aa207368.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{b as f,e as l,f as d,g as o,t as s,i as B,q as S,p as D,k as F,l as N,F as P,m as T,n as V}from"./index.7a0f4ad0.js";const $={props:["company"]},a=t=>(D("data-v-633960d8"),t=t(),F(),t),w={class:"company-item"},E={class:"company-info"},J=["src"],L={class:"name"},q={class:"location"},z=a(()=>o("label",null,"Location",-1)),G={class:"period"},H=a(()=>o("label",null,"Period",-1)),K={class:"position"},M=a(()=>o("label",null,"Position",-1)),O={class:"team"},Q=a(()=>o("label",null,"Team",-1)),R={class:"employment-type"},U=a(()=>o("label",null,"Employment Type",-1)),W={class:"desc"},X=a(()=>o("label",null,"Description",-1)),Y=N("Featured Projects");function Z(t,n,e,c,i,m){const _=f("router-link");return l(),d("div",w,[o("div",E,[o("img",{src:e.company.url,class:"logo"},null,8,J),o("div",L,[o("p",null,s(e.company.name),1)])]),o("div",q,[z,o("p",null,s(e.company.location),1)]),o("div",G,[H,o("p",null,s(e.company.period),1)]),o("div",K,[M,o("p",null,s(e.company.position),1)]),o("div",O,[Q,o("p",null,s(e.company.team),1)]),o("div",R,[U,o("p",null,s(e.company.type),1)]),o("div",W,[X,o("p",null,s(e.company.desc),1)]),B(_,{to:{name:"projectCode",params:{code:e.company.code}},class:"btn-project"},{default:S(()=>[Y]),_:1},8,["to"])])}var A=v($,[["render",Z],["__scopeId","data-v-633960d8"]]);const ee={components:{CompanyItem:A},data(){return{companies:y.companies,experiences:y.experiences}},methods:{combineJson(){return this.experiences.reduce((n,e)=>{let c=this.companies.find(i=>i.code==e.code);return c&&n.push(h(u({},e),{name:c.name,url:c.url,location:c.location})),n},[])}}},oe={class:"company-container"},ne=o("h1",null,"Company",-1),te={class:"company-list"};function se(t,n,e,c,i,m){const _=f("company-item");return l(),d("div",oe,[ne,o("div",te,[(l(!0),d(P,null,T(m.combineJson(),(x,b)=>(l(),V(_,{company:x,index:b},null,8,["company","index"]))),256))])])}var _e=v(ee,[["render",se]]);export{_e as default};