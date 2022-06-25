var I=Object.defineProperty,x=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var r=(s,o,e)=>o in s?I(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,m=(s,o)=>{for(var e in o||(o={}))D.call(o,e)&&r(s,e,o[e]);if(u)for(var e of u(o))E.call(o,e)&&r(s,e,o[e]);return s},h=(s,o)=>x(s,j(o));import{j as p}from"./data.aa207368.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a,f as l,g as t,t as n,p as k,k as B,b as S,F as $,m as y,n as C}from"./index.cc51c358.js";const F={props:["education"]},i=s=>(k("data-v-05404b42"),s=s(),B(),s),J={class:"education-item"},L=["src"],N={class:"name"},P={class:"location"},w=i(()=>t("label",null,"Location",-1)),A={class:"major"},G=i(()=>t("label",null,"Major",-1)),M={class:"degree"},O=i(()=>t("label",null,"Degree",-1)),T={class:"gpa"},U=i(()=>t("label",null,"GPA",-1)),V={class:"period"},q=i(()=>t("label",null,"Period",-1)),z={class:"desc"},H=i(()=>t("label",null,"Description",-1));function K(s,o,e,c,d,_){return a(),l("div",J,[t("img",{src:e.education.url,class:"logo"},null,8,L),t("div",N,[t("p",null,n(e.education.name),1)]),t("div",P,[w,t("p",null,n(e.education.location),1)]),t("div",A,[G,t("p",null,n(e.education.major),1)]),t("div",M,[O,t("p",null,n(e.education.degree),1)]),t("div",T,[U,t("p",null,n(e.education.gpa),1)]),t("div",V,[q,t("p",null,n(e.education.period),1)]),t("div",z,[H,t("p",null,n(e.education.desc),1)])])}var Q=v(F,[["render",K],["__scopeId","data-v-05404b42"]]);const R={components:{EducationItem:Q},data(){return{educations:p.educations,universities:p.universities}},methods:{combineJson(){return this.educations.reduce((o,e)=>{let c=this.universities.find(d=>d.code==e.code);return c&&o.push(h(m({},e),{name:c.name,url:c.url,location:c.location})),o},[])}}},W={class:"education-container"},X=t("h1",{class:"title"},"EDUCATION",-1),Y={class:"education-list"};function Z(s,o,e,c,d,_){const f=S("education-item");return a(),l("div",W,[X,t("div",Y,[(a(!0),l($,null,y(_.combineJson(),(b,g)=>(a(),C(f,{education:b,index:g},null,8,["education","index"]))),256))])])}var ne=v(R,[["render",Z]]);export{ne as default};