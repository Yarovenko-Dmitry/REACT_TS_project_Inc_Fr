(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l);a(89),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(37),o=a(21),s=(a(93),a(18)),u=a.n(s),m=function(){return r.a.createElement("nav",null,r.a.createElement(o.b,{to:"/profile",className:u.a.btn,activeClassName:u.a.activLink},"profile"),r.a.createElement(o.b,{to:"/login",className:u.a.btn,activeClassName:u.a.activLink},"login"),r.a.createElement(o.b,{to:"/register",className:u.a.btn,activeClassName:u.a.activLink},"registration"),r.a.createElement(o.b,{to:"/passwordRecovery",className:u.a.btn,activeClassName:u.a.activLink},"recovery"),r.a.createElement(o.b,{to:"/passwordCreation",className:u.a.btn,activeClassName:u.a.activLink},"create a new pw"))},E=a(9),d=function(){return r.a.createElement("div",null,"ProfileContainer")},p=function(){return r.a.createElement("div",null,r.a.createElement("button",null,"Select"))},b=function(){return r.a.createElement("div",null,"LoginPage",r.a.createElement(p,null))},v=a(77),f=a(143),g=a(151),h=a(147),w=a(148),y=a(149),N=a(150),k=a(55),R=a.n(k),S=a(71),j=a(78),C=a(72),O=a.n(C).a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/",headers:{"API-KEY":"7670157b-55fb-46c4-91b5-ea5772613da8"}}),L=function(e){return O.post("auth/register",e)},P={isRegistered:!1},_=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.register.isRegistered})),a=Object(v.a)({validate:function(e){},initialValues:{email:"",password:""},onSubmit:function(t){var a;e((a=t,function(){var e=Object(S.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,L(a);case 3:0===e.sent.data.resultCode&&t({type:"register/SET-IS-REGISTERED",value:!0});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}});return t?r.a.createElement(E.a,{to:"/login"}):r.a.createElement(f.a,{container:!0,justify:"center"},r.a.createElement(f.a,{item:!0,xs:4},r.a.createElement("form",{onSubmit:a.handleSubmit},r.a.createElement(g.a,null,r.a.createElement(h.a,null,r.a.createElement("p",null,"Registration")),r.a.createElement(w.a,null,r.a.createElement(y.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),r.a.createElement(y.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),r.a.createElement(N.a,{type:"submit",variant:"contained",color:"primary"},"Register"))))))},I=a(38),x=a.n(I),T=function(){return r.a.createElement("section",null,r.a.createElement("div",{className:x.a.container},r.a.createElement("div",{className:x.a.wrapper},r.a.createElement("div",{className:x.a.form},r.a.createElement("h1",null,"Forgot password?"),r.a.createElement("form",null,r.a.createElement("input",{type:"email",required:!0,placeholder:"Enter your email"}),r.a.createElement("button",{className:x.a.btn},"Send"))))))},D=function(){return r.a.createElement("div",null,"PasswordCreation")};var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(m,null)),r.a.createElement(E.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(d,null)}}),r.a.createElement(E.b,{path:"/login",render:function(){return r.a.createElement(b,null)}}),r.a.createElement(E.b,{path:"/register",render:function(){return r.a.createElement(_,null)}}),r.a.createElement(E.b,{path:"/passwordRecovery",render:function(){return r.a.createElement(T,null)}}),r.a.createElement(E.b,{path:"/passwordCreation",render:function(){return r.a.createElement(D,null)}}))},J=a(33),A=a(76),B=Object(J.c)({register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"register/SET-IS-REGISTERED":return Object(j.a)({},e,{isRegistered:t.value});default:return e}}}),G=Object(J.d)(B,Object(J.a)(A.a));window.store=G,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(i.a,{store:G},r.a.createElement(F,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},18:function(e,t,a){e.exports={btn:"Navbar_btn__2LLvD"}},38:function(e,t,a){e.exports={form:"recoveryPage_form__90bKw",btn:"recoveryPage_btn__3mJme"}},84:function(e,t,a){e.exports=a(114)},89:function(e,t,a){},93:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.2e4228f2.chunk.js.map