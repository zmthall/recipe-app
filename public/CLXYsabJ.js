import M from"./BnEPV0XJ.js";import{_ as L}from"./CWG5Wsg1.js";import{_ as A}from"./OalPmBX7.js";import{_ as S}from"./CQaj25-J.js";import{p as U,f as B,r as m,u as C,g as V,n as b,h as D,o as p,w as c,b as l,a as e,c as f,i as E,j as g,k as y,v as N,l as t,m as j,d,t as G}from"./84vSVqtI.js";import{u as T}from"./xfXn7Fqi.js";import{u as $}from"./D11aCxYz.js";const P=U("/images/login-logo.png"),R={class:"max-sm:w-full sm:rounded-md max-sm:px-4 max-sm:py-8 shadow-main fixed top-1/2 -translate-y-1/2 bg-brand-background-primary/80 sm:w-3/4 sm:p-8 sm:left-1/2 sm:-translate-x-1/2 md:w-1/2"},W={class:"shadow-inner-main p-8 my-8 font-open-sans text-brand-text-dark bg-brand-white rounded-lg"},F={class:"flex flex-col"},H={class:"flex flex-col"},I={class:"relative w-full"},O=["type"],q={key:0,class:"text-center text-brand-error"},z={key:1,class:"text-center"},no=B({__name:"login",setup(J){T({title:"MenuMate | User Login",meta:[{name:"description",content:"Log in to MenuMate to access your saved recipes, custom cookbooks, shopping lists, and meal plans. Simple, fast, and secure access to your kitchen tools."}]});const n=m(""),s=m(""),a=m(!1),i=$(),u=C(),w=async()=>{await i.loginUserWithEmail(n.value,s.value),b({path:"/dashboard"})},_=async()=>{await i.loginUserWithGoogle(),b({path:"/dashboard"})};return V(async()=>{await i.resolvedAuth()&&u.authenticated&&b({path:"/dashboard"})}),(K,o)=>{const x=M,v=L,h=A,k=S;return p(),D(k,null,{default:c(()=>[l(h,null,{default:c(()=>[e("div",R,[o[11]||(o[11]=e("img",{src:P,alt:"MenuMate Login Logo",class:"w-4/6 mx-auto",width:"300px"},null,-1)),e("div",W,[e("form",{onSubmit:E(w,["prevent"]),class:"flex flex-col"},[e("div",F,[o[3]||(o[3]=e("label",{class:"font-extrabold text-xs mb-2"},"Email:",-1)),g(e("input",{type:"text",id:"email",autocomplete:"email","onUpdate:modelValue":o[0]||(o[0]=r=>y(n)?n.value=r:null),placeholder:"email@email.com",class:"p-2 border-2 bg-gray-50/50 border-brand-border/50 hover:border-brand-primary/50 hover:bg-brand-secondary/10 focus:outline-none focus:border-brand-primary/50 focus:bg-brand-secondary/10 rounded-md mb-4"},null,512),[[N,t(n)]])]),e("div",H,[o[4]||(o[4]=e("label",{class:"font-extrabold text-xs mb-2"},"Password:",-1)),e("div",I,[g(e("input",{type:t(a)?"text":"password",id:"password",autocomplete:"current-password","onUpdate:modelValue":o[1]||(o[1]=r=>y(s)?s.value=r:null),placeholder:"●●●●●●●●●●",class:"p-2 border-2 w-full bg-gray-50/50 border-brand-border/50 hover:border-brand-primary/50 hover:bg-brand-secondary/10 focus:outline-none focus:border-brand-primary/50 focus:bg-brand-secondary/10 rounded-md mb-4"},null,8,O),[[j,t(s)]]),e("button",{type:"button",onClick:o[2]||(o[2]=r=>a.value=!t(a)),class:"absolute right-3 top-1 text-brand-link p-2 hover:text-brand-accent","aria-label":"hide/show password"},[l(x,{name:t(a)?"mdi:eye-off":"mdi:eye"},null,8,["name"])])])]),o[5]||(o[5]=e("button",{type:"submit",class:"xs:w-4/6 max-xs:w-full mx-auto my-2 bg-brand-primary py-3 rounded-lg border-2 border-brand-accent font-bold text-brand-text-dark hover:bg-brand-secondary transition-colors duration-300 ease-in-out"}," Login ",-1))],32),o[7]||(o[7]=e("div",{class:"flex justify-center items-center gap-4"},[e("span",{class:"w-1/3 h-[1px] bg-brand-border/50 inline-block"}),e("span",null,"or"),e("span",{class:"w-1/3 h-[1px] bg-brand-border/50 inline-block"})],-1)),e("button",{onClick:_,class:"flex gap-2 justify-center items-center xs:w-4/6 max-sm:w-full mx-auto mt-2 py-3 rounded-lg border-2 border-brand-accent text-brand-text-dark hover:bg-gray-100 transition-colors duration-300 ease-in-out"},[l(x,{name:"logos:google-icon",class:"flex"}),o[6]||(o[6]=d("Login with Google "))])]),t(u).error?(p(),f("p",q,G(t(u).error),1)):(p(),f("p",z,[o[9]||(o[9]=d(" Don't have an account? ")),l(v,{to:"/register",class:"text-brand-link underline hover:text-brand-accent"},{default:c(()=>o[8]||(o[8]=[d("Sign-up")])),_:1}),o[10]||(o[10]=d(" now! "))]))])]),_:1})]),_:1})}}});export{no as default};
