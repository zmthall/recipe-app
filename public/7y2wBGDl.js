import{_ as w}from"./DDuV-A_D.js";import{_ as C}from"./C6x-OfU-.js";import U from"./DmkadAb5.js";import{f as L,u as M,r as k,O as N,g as $,c as m,o as l,a as e,b as t,T as h,l as s,w as n,j,U as A,h as B,F as v,V as F,d as r,n as S,W as V,t as z,_ as H,s as O}from"./Dbft-iZl.js";import{u as I}from"./l6W8Rbu3.js";import{u as P}from"./BiNwnOBg.js";const R={class:"flex justify-between items-center p-4 shadow-md bg-brand-primary/20 backdrop-blur-md sticky top-0 left-0 z-10"},D={class:"sm:hidden"},E={class:"flex items-center gap-6 max-sm:w-3/4 max-sm:justify-center max-sm:border-y-2 max-sm:border-brand-border/50 py-8"},G={class:"flex items-center max-sm:w-full"},W={class:"flex gap-6 max-sm:flex-col max-sm:w-full"},q={key:0,class:"text-brand-link hover:text-brand-secondary font-extrabold max-sm:text-center"},J=L({__name:"TheHeader",setup(f){const o=M(),p=I(),d=k(!1),a=k(void 0),b=N(()=>o.authenticated?{path:"/dashboard"}:{path:"/"});$(async()=>{await P(()=>o.authResolved).toBe(!0),a.value=[{name:"Home",url:b.value,visible:!0},{name:"Contact",url:{path:"/contact"},visible:!o.authenticated},{name:"About Us",url:{path:"/about"},visible:!o.authenticated},{name:"Meal Planner",url:{path:"/meal-planner"},visible:o.authenticated},{name:"Grocery List",url:{path:"/grocery-list"},visible:o.authenticated},{name:"Cook Books",url:{path:"/cook-books"},visible:o.authenticated},{name:"Recipes",url:{path:"/recipes"},visible:o.authenticated}]});const i=()=>{p.logoutUser(),S({path:"/login"})},T=()=>{d.value=!0,document.body.classList.add("nav-open")},c=()=>{d.value=!1,document.body.classList.remove("nav-open")};return(ot,u)=>{const g=w,x=C,y=U;return l(),m("header",R,[e("div",{class:h(["sm:hidden fixed top-0 left-0 bg-black/90 backdrop-blur-md w-full h-dvh",{hidden:!s(d)}]),onClick:c},null,2),t(x,{to:s(b)},{default:n(()=>[t(g,{format:"webp",width:"100px",src:"/images/logo.png",alt:"Menu Mate Logo"})]),_:1},8,["to"]),e("div",D,[e("button",{onClick:T},[t(y,{name:"icon-park-outline:hamburger-button",class:"size-8"})])]),e("div",{class:h(["max-sm:fixed max-sm:transition-transform max-sm:duration-500 max-sm:ease-in-out max-sm:top-0 max-sm:right-0 max-sm:h-dvh max-sm:w-[400px] sm:w-max max-xs:w-full max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col max-sm:bg-brand-background-primary max-sm:shadow-main",{"max-sm:translate-x-[100%]":!s(d),"max-sm:translate-x-0":s(d)}])},[e("button",{onClick:c,class:"sm:hidden max-sm:top-4 max-sm:right-4 max-sm:px-2 max-sm:absolute max-sm:text-3xl max-sm:hover:text-gray-500"},[t(y,{name:"material-symbols:close-rounded",class:"size-10"})]),t(x,{to:s(b),class:"sm:hidden max-sm:my-20",onClick:c},{default:n(()=>[t(g,{width:"200px",src:"/images/logo.png",alt:"Menu Mate Logo"})]),_:1},8,["to"]),j(e("div",E,[e("nav",G,[e("ul",W,[(l(!0),m(v,null,F(s(a),_=>(l(),m(v,{key:_.name},[_.visible?(l(),m("li",q,[t(x,{to:_.url,onClick:c},{default:n(()=>[r(z(_.name),1)]),_:2},1032,["to"])])):V("",!0)],64))),128)),e("li",{class:h(["text-brand-link hover:text-brand-secondary font-extrabold max-sm:text-center sm:hidden",{hidden:s(o).authenticated}])},[t(x,{to:{path:"/login"},onClick:c},{default:n(()=>u[0]||(u[0]=[r("Login")])),_:1})],2),e("li",{class:h(["text-brand-link hover:text-brand-secondary font-extrabold max-sm:text-center sm:hidden",{hidden:s(o).authenticated}])},[t(x,{to:{path:"/register"},onClick:c},{default:n(()=>u[1]||(u[1]=[r("Register")])),_:1})],2),e("li",{class:h(["text-brand-link hover:text-brand-secondary font-extrabold max-sm:text-center border-t-2 border-brand-border/25 w-full pt-8 sm:hidden",{hidden:!s(o).authenticated}])},[e("button",{onClick:i},"Logout")],2)])]),s(o).authenticated?(l(),m("button",{key:1,class:"px-6 py-2 border-2 border-brand-primary rounded-lg hover:bg-brand-secondary hover:text-brand-white transition-colors duration-300 ease-in-out max-sm:hidden",onClick:i},"Logout")):(l(),B(x,{key:0,to:"/login",class:"px-6 py-2 border-2 max-sm:hidden border-brand-primary rounded-lg hover:bg-brand-secondary hover:text-brand-white transition-colors duration-300 ease-in-out"},{default:n(()=>u[2]||(u[2]=[r("Login")])),_:1}))],512),[[A,s(a)]])],2)])}}}),K=Object.assign(J,{__name:"UiTheHeader"}),Q={class:"bg-brand-primary/20 backdrop-blur-md pt-12 pb-8 text-brand-text-medium"},X={class:"max-w-7xl mx-auto px-10 flex flex-col items-center text-center space-y-12"},Y={class:"flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium tracking-wide uppercase"},Z=L({__name:"TheFooter",setup(f){const o=M(),p=N(()=>o.authenticated?{path:"/dashboard"}:{path:"/"});return(d,a)=>{const b=w,i=C;return l(),m("footer",Q,[e("div",X,[t(i,{to:s(p)},{default:n(()=>[t(b,{src:"/images/logo.png",alt:"MenuMate Logo",width:"120",class:"mx-auto"})]),_:1},8,["to"]),e("nav",Y,[t(i,{to:"/policy/terms",class:"hover:underline hover:text-brand-text-dark transition"},{default:n(()=>a[0]||(a[0]=[r("Terms")])),_:1}),t(i,{to:"/policy/usage",class:"hover:underline hover:text-brand-text-dark transition"},{default:n(()=>a[1]||(a[1]=[r("Usage Policy")])),_:1}),t(i,{to:"/policy/privacy",class:"hover:underline hover:text-brand-text-dark transition"},{default:n(()=>a[2]||(a[2]=[r("Privacy")])),_:1}),t(i,{to:"/policy/accessibility",class:"hover:underline hover:text-brand-text-dark transition"},{default:n(()=>a[3]||(a[3]=[r("Accessibility")])),_:1}),t(i,{to:"/contact",class:"hover:underline hover:text-brand-text-dark transition"},{default:n(()=>a[4]||(a[4]=[r("Contact")])),_:1})]),a[5]||(a[5]=e("div",{class:"text-xs text-brand-text-medium"},[r(" © 2025 "),e("span",{class:"font-semibold text-brand-text-dark"},"MenuMate"),r(". All rights reserved. ")],-1))])])}}}),tt=Object.assign(Z,{__name:"UiTheFooter"}),et={};function at(f,o){const p=K,d=tt;return l(),m(v,null,[t(p),e("div",null,[O(f.$slots,"default")]),t(d)],64)}const mt=H(et,[["render",at]]);export{mt as default};
