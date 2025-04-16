import M from"./BnEPV0XJ.js";import{_ as S}from"./CWG5Wsg1.js";import{_ as U}from"./OalPmBX7.js";import{_ as A}from"./CQaj25-J.js";import{p as C,f as V,u as B,r as u,c as m,b as n,w as b,o as p,a as o,i as N,j as f,k as g,v as R,l as t,m as j,d,t as D,n as y}from"./84vSVqtI.js";import{u as E}from"./xfXn7Fqi.js";import{u as G}from"./D11aCxYz.js";const L=C("/images/register-logo.png"),T={class:"max-sm:w-full sm:rounded-md max-sm:px-4 max-sm:py-8 shadow-main fixed top-1/2 -translate-y-1/2 bg-brand-background-primary/80 sm:w-3/4 sm:p-8 sm:left-1/2 sm:-translate-x-1/2 md:w-1/2"},$={class:"shadow-inner-main p-8 my-8 font-open-sans text-brand-text-dark bg-brand-white rounded-lg"},P={class:"flex flex-col"},z={class:"flex flex-col"},F={class:"relative w-full"},H=["type"],I={key:0,class:"text-center text-brand-error"},O={key:1,class:"text-center"},oe=V({__name:"register",setup(W){E({title:"MenuMate | User Registration",meta:[{name:"description",content:"Sign up for MenuMate to create custom cookbooks, save your favorite recipes, and plan meals with ease. Start organizing your cooking life today."}]});const i=B(),c=G(),r=u(""),s=u(""),a=u(!1),w=async()=>{i.user?y({path:"/"}):(await c.loginUserWithGoogle(),y({path:"/dashboard"}))},_=async()=>{await c.registerUser(r.value,s.value)};return(q,e)=>{const x=M,v=S,h=U,k=A;return p(),m("div",null,[n(k,null,{default:b(()=>[n(h,null,{default:b(()=>[o("div",T,[e[11]||(e[11]=o("img",{src:L,alt:"MenuMate Registration Logo",class:"w-4/6 mx-auto",width:"300px"},null,-1)),o("div",$,[o("form",{onSubmit:N(_,["prevent"]),class:"flex flex-col"},[o("div",P,[e[3]||(e[3]=o("label",{class:"font-extrabold text-xs mb-2"},"Email:",-1)),f(o("input",{type:"text",id:"email","onUpdate:modelValue":e[0]||(e[0]=l=>g(r)?r.value=l:null),autocomplete:"email",placeholder:"email@email.com",class:"p-2 border-2 bg-gray-50/50 border-brand-border/50 hover:border-brand-primary/50 hover:bg-brand-secondary/10 focus:outline-none focus:border-brand-primary/50 focus:bg-brand-secondary/10 rounded-md mb-4"},null,512),[[R,t(r)]])]),o("div",z,[e[4]||(e[4]=o("label",{class:"font-extrabold text-xs mb-2"},"Password:",-1)),o("div",F,[f(o("input",{type:t(a)?"text":"password",id:"password",autocomplete:"current-password","onUpdate:modelValue":e[1]||(e[1]=l=>g(s)?s.value=l:null),placeholder:"●●●●●●●●●●",class:"p-2 border-2 w-full bg-gray-50/50 border-brand-border/50 hover:border-brand-primary/50 hover:bg-brand-secondary/10 focus:outline-none focus:border-brand-primary/50 focus:bg-brand-secondary/10 rounded-md mb-4"},null,8,H),[[j,t(s)]]),o("button",{type:"button",onClick:e[2]||(e[2]=l=>a.value=!t(a)),class:"absolute right-3 top-1 text-brand-link hover:text-brand-accent p-2","aria-label":"show/hide password"},[n(x,{name:t(a)?"mdi:eye-off":"mdi:eye"},null,8,["name"])])])]),e[5]||(e[5]=o("button",{type:"submit",class:"xs:w-4/6 max-xs:w-full mx-auto my-2 bg-brand-primary py-3 rounded-lg border-2 border-brand-accent font-bold text-brand-text-dark hover:bg-brand-secondary transition-colors duration-300 ease-in-out"}," Sign Up ",-1))],32),e[7]||(e[7]=o("div",{class:"flex justify-center items-center gap-4"},[o("span",{class:"w-1/3 h-[1px] bg-brand-border/50 inline-block"}),o("span",null,"or"),o("span",{class:"w-1/3 h-[1px] bg-brand-border/50 inline-block"})],-1)),o("button",{onClick:w,class:"flex gap-2 justify-center items-center xs:w-4/6 max-xs:w-full mx-auto mt-2 py-3 rounded-lg border-2 md:w-5/6 md2:w-4/6 border-brand-accent text-brand-text-dark hover:bg-gray-100 transition-colors duration-300 ease-in-out"},[n(x,{name:"logos:google-icon"}),e[6]||(e[6]=d("Sign up with Google "))])]),t(i).error?(p(),m("p",I,D(t(i).error),1)):(p(),m("p",O,[e[9]||(e[9]=d(" Already have an account? ")),n(v,{to:"/login",class:"text-brand-link underline font-semibold hover:text-brand-accent"},{default:b(()=>e[8]||(e[8]=[d("login here")])),_:1}),e[10]||(e[10]=d(". "))]))])]),_:1})]),_:1})])}}});export{oe as default};
