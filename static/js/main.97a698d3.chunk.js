(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{132:function(e,a,t){},181:function(e,a,t){e.exports=t(212)},186:function(e,a,t){},190:function(e,a,t){},212:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),o=t.n(c);t(186),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(8),l=t(23),s=(t(190),t(249)),u=t(280),m=t(253),d=t(254),p=t(161),g=t(274),f=t(251),b=Object(s.a)((function(e){return Object(u.a)({btn:{margin:e.spacing(1),color:"#e4b61a",borderColor:"#e4b61a",textDecoration:"none"}})})),E=function(e){var a=e.link,t=e.name,n=b();return r.a.createElement(l.b,{to:a,style:{textDecoration:"none"}},r.a.createElement(f.a,{variant:"outlined",className:n.btn,size:"small"},t))},h=Object(s.a)((function(e){return Object(u.a)({marginAutoItem:{margin:"auto"},navbar:{backgroundColor:"#2c3258"},btn:{margin:e.spacing(1),color:"#e4b61a",borderColor:"#e4b61a",textDecoration:"none"}})})),v=function(){var e=h();return r.a.createElement(m.a,{position:"static",className:e.navbar},r.a.createElement(d.a,null,r.a.createElement(p.a,{variant:"h6"},"Cards"),r.a.createElement(g.a,{className:e.marginAutoItem},r.a.createElement(E,{link:"/profile",name:"Profile"}),r.a.createElement(E,{link:"/login",name:"login"}),r.a.createElement(E,{link:"/register",name:"register"}),r.a.createElement(E,{link:"/passwordRecovery",name:"Recovery"}),r.a.createElement(E,{link:"/set-new-password",name:"New password"}),r.a.createElement(E,{link:"/packs",name:"Packs of cards"}),r.a.createElement(E,{link:"/\u0441ards",name:"\u0421ards"}),r.a.createElement(E,{link:"/learn",name:"Learn"}))))},C=t(14),w=t(281),O=t(256),j=t(279),k=t(261),y=t(278),S=t(263),P=t(214),x=t(255),R=t(155),N=t.n(R),T=t(52),_=t(86),A=t.n(_),I=t(110),M=t(11),D=t(154),q=t.n(D).a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0"}),L=function(e,a,t,n){return q.get("/cards/pack?page=".concat(e,"&pageCount=").concat(a,"&min=").concat(t,"&max=").concat(n))},G=function(e,a,t,n){return q.get("/cards/pack?page=".concat(e,"&pageCount=").concat(a,"&min=").concat(t,"&max=").concat(n))},U=function(e){return q.post("/cards/pack",{cardsPack:{name:e}})},W=function(e){return q.delete("/cards/pack?id=".concat(e))},z=function(e,a){return q.put("/cards/pack",{cardsPack:{_id:e,name:a}})},Y=function(e,a,t){return q.get("/cards/card?cardsPack_id=".concat(e,"&page=").concat(a,"&pageCount=").concat(t))},B=function(e,a,t){return q.post("/cards/card",{card:{cardsPack_id:e,question:a,answer:t}})},F=function(e){return q.delete("/cards/card?id=".concat(e))},V=function(e){return q.post("/auth/forgot/",{email:e,from:"password-reset-server <noreply@noreply.it>",message:"\n\t\t\t\t\t<div style=\"background-color: lime; padding: 15px\">\n\t\t\t\t\tpassword recovery link: \n\t\t\t\t\t<a href='http://localhost:3000/#/set-new-password/$token$'>link</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t"})},Z=function(e,a){return q.post("/auth/set-new-password",{password:e,resetPasswordToken:a})},$=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return q.post("auth/login",{email:e,password:a,rememberMe:t})},H=function(){return q.delete("auth/me")},J=function(e){return q.post("/auth/register",Object(M.a)({},e))},K={isAuth:!1,userProfile:{_id:"",email:"",name:"",avatar:"",publicCardPacksCount:0,created:"YYYY-MM-DD",updated:"YYYY-MM-DD",isAdmin:!1,verified:!1,rememberMe:!1,error:""}},Q=function(e){return{type:"login/SET_USER_DATA",data:e}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"login/SET_USER_DATA":return Object(M.a)({},e,{userProfile:a.data,isAuth:!0});case"login/LOGOUT":return Object(M.a)({},e,{isAuth:!1});case"login/AUTH-ME":return Object(M.a)({},e,{isAuth:a.isAuth,userProfile:a.userProfile});default:return e}},ee=Object(s.a)((function(e){return{submit:{margin:e.spacing(3,0,2),backgroundColor:"#e4b61a","&:hover":{backgroundColor:"#2c3258"}}}})),ae=function(e){var a=e.disable,t=e.name,n=ee();return r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.submit,disabled:a},t)},te=Object(s.a)((function(e){return{root:{height:"100vh"},centr:{margin:"0 auto"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ne(){var e=Object(i.c)((function(e){return e.login.isAuth})),a=te(),t=Object(i.b)(),n=Object(T.a)({initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e){var a=e.email,n=e.password,r=e.rememberMe;t(function(e,a){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(n){$(e,a,t).then((function(e){n(Q(e.data))}))}}(a,n,r))}});return e?r.a.createElement(C.a,{to:"/profile"}):r.a.createElement(x.a,{container:!0,component:"main",className:a.root},r.a.createElement(O.a,null),r.a.createElement(x.a,{item:!0,xs:12,sm:8,md:5,className:a.centr,component:P.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement(w.a,{className:a.avatar},r.a.createElement(N.a,null)),r.a.createElement(p.a,{component:"h1",variant:"h5"},"Login"),r.a.createElement("form",{onSubmit:n.handleSubmit,className:a.form,noValidate:!0},r.a.createElement(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:n.handleChange,value:n.values.email}),r.a.createElement(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:n.handleChange,value:n.values.password}),r.a.createElement(k.a,{control:r.a.createElement(y.a,{id:"rememberMe",name:"rememberMe",onChange:n.handleChange,value:n.values.rememberMe,color:"primary"}),label:"Remember me"}),r.a.createElement(ae,{name:"Log in"}),r.a.createElement(x.a,{container:!0},r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(l.b,{to:"/passwordRecovery"},r.a.createElement(S.a,{variant:"body2"},"Forgot password?"))),r.a.createElement(x.a,{item:!0},r.a.createElement(l.b,{to:"/register"},r.a.createElement(S.a,{variant:"body2"},"Don't have an account? Sign Up"))))))))}var re=t(259),ce=t(260),oe=t(264),ie={isRegistered:!1},le=function(){var e=Object(i.b)(),a=Object(i.c)((function(e){return e.register.isRegistered})),t=Object(T.a)({validate:function(e){return e.email?e.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:""},onSubmit:function(a){var t;e((t=a,function(){var e=Object(I.a)(A.a.mark((function e(a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,J(t);case 4:e.sent,a({type:"register/SET-IS-REGISTERED",value:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}()))}});return a?r.a.createElement(C.a,{to:"/login"}):r.a.createElement(x.a,{container:!0,justify:"center"},r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement("form",{onSubmit:t.handleSubmit},r.a.createElement(re.a,null,r.a.createElement(ce.a,null,r.a.createElement("p",null,"Registration")),r.a.createElement(oe.a,null,r.a.createElement(j.a,Object.assign({label:"Email",margin:"normal"},t.getFieldProps("email"))),t.errors.email?r.a.createElement("div",null,t.errors.email):null,r.a.createElement(j.a,Object.assign({type:"password",label:"Password",margin:"normal"},t.getFieldProps("password"))),t.errors.password?r.a.createElement("div",null,t.errors.email):null,r.a.createElement(f.a,{type:"submit",variant:"contained",color:"primary"},"Register"))))))},se=t(119),ue={error:"",success:!1,loading:!1},me=function(e){return{type:"pwRecovery/SET_ERROR",error:e}},de=function(e){return{type:"pwRecovery/SET_SUCCESS",success:e}},pe=function(e){return{type:"pwRecovery/SET_LOADING",loading:e}},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"pwRecovery/SET_ERROR":return Object(M.a)({},e,{error:a.error});case"pwRecovery/SET_SUCCESS":return Object(M.a)({},e,{success:a.success});case"pwRecovery/SET_LOADING":return Object(M.a)({},e,{loading:a.loading});default:return e}},fe=t(4),be=Object(fe.a)({root:{"& input:valid + fieldset":{borderColor:"green",borderWidth:2},"& input:valid:focus + fieldset":{borderLeftWidth:6,padding:"4px !important"}}})(j.a),Ee=Object(s.a)((function(e){return{input:{marginBottom:"10px"}}})),he=function(e){var a=e.error,t=void 0!==a&&a,n=e.formik,c=e.type,o=e.label,i=e.value,l=e.onChange,s=Ee();return r.a.createElement(be,Object.assign({className:s.input,error:t,helperText:t,label:o,fullWidth:!0,required:!0,variant:"outlined",type:c},n,{onChange:function(e){l(e.currentTarget.value)},value:i}))},ve=t(156),Ce=t.n(ve),we=t(265),Oe=Object(s.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:"#2c3258"},form:{width:"100%",marginTop:e.spacing(3)}}})),je=function(e){var a=e.onsubmit,t=e.children,n=e.title;var c=Oe();return r.a.createElement(we.a,{component:"main",maxWidth:"xs"},r.a.createElement(O.a,null),r.a.createElement("div",{className:c.paper},r.a.createElement(w.a,{className:c.avatar},r.a.createElement(Ce.a,null)),r.a.createElement(p.a,{component:"h1",variant:"h5"},n),r.a.createElement("form",{className:c.form,onSubmit:function(){a()}},r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(x.a,{item:!0,xs:12},t)))))},ke=function(){var e=Object(i.b)(),a=Object(T.a)({validateOnBlur:!0,validateOnChange:!1,validate:function(e){return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)?void 0:{email:"Invalid email address"}:{email:"Email is required"}},initialValues:{email:""},onSubmit:function(a){var t=a.email;e(function(e){return function(a){a(pe(!0)),V(e).then((function(e){a(de(e.data.success)),a(me("")),a(pe(!1))})).catch((function(e){var t=e.response,n=(t.request,Object(se.a)(t,["request"]));return a(de(!1)),a(pe(!1)),a(me(n.data.error))}))}}(t.trim()))}}),t=Object(i.c)((function(e){return e.pwRecoveryRequest.error})),n=(Object(i.c)((function(e){return e.pwRecoveryRequest.success})),Object(i.c)((function(e){return e.pwRecoveryRequest.loading})));return r.a.createElement(je,{onsubmit:a.handleSubmit,title:"Reset password"},a.errors.email?r.a.createElement("div",null,a.errors.email):null,t?r.a.createElement("div",null,t):null,r.a.createElement(he,{error:!!a.errors.email,formik:Object(M.a)({},a.getFieldProps("email")),type:"email",label:"Enter your email"}),r.a.createElement(ae,{name:"Send",disable:n}))},ye=t(89),Se={error:"",success:!1,loading:!1},Pe=function(e){return{type:"pwCreation/SET_SUCCESS",success:e}},xe=function(e){return{type:"pwCreation/SET_LOADING",loading:e}},Re=function(e){return{type:"pwCreation/SET_ERROR",error:e}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"pwCreation/SET_SUCCESS":return Object(M.a)({},e,{success:a.success});case"pwCreation/SET_LOADING":return Object(M.a)({},e,{loading:a.loading});case"pwCreation/SET_ERROR":return Object(M.a)({},e,{error:a.error});default:return e}},Te=function(){var e=ye.a().shape({password:ye.c().required("This field is required"),changepassword:ye.c().when("password",{is:function(e){return!!(e&&e.length>0)},then:ye.c().oneOf([ye.b("password")],"Both password need to be the same")})}),a=Object(C.h)().token,t=Object(i.b)(),n=Object(T.a)({validateOnBlur:!0,validateOnChange:!1,initialValues:{password:"",changepassword:""},validationSchema:e,onSubmit:function(e){var n=e.password;t(function(e,a){return function(t){t(xe(!0)),Z(e,a).then((function(e){200===e.status&&(t(Pe(!0)),t(Re("")),t(xe(!1)))})).catch((function(e){var a=e.response,n=(a.request,Object(se.a)(a,["request"]));return t(Pe(!1)),t(xe(!1)),t(Re(n.data.error))}))}}(n,a))}}),c=Object(i.c)((function(e){return e.passwordUpdate.error})),o=Object(i.c)((function(e){return e.passwordUpdate.success})),l=Object(i.c)((function(e){return e.passwordUpdate.loading}));return o?(window.confirm("Your password has been changed!"),r.a.createElement(C.a,{to:"/login"})):r.a.createElement(je,{onsubmit:n.handleSubmit,title:"Set new password"},n.errors.password?r.a.createElement("div",null,n.errors.password):null,c?r.a.createElement("div",null,c):null,r.a.createElement(he,{error:!!n.errors.password,formik:Object(M.a)({},n.getFieldProps("password")),type:"password",label:"Enter new password"}),n.errors.changepassword?r.a.createElement("div",null,n.errors.changepassword):null,r.a.createElement(he,{error:!!n.errors.changepassword,formik:Object(M.a)({},n.getFieldProps("changepassword")),type:"password",label:"Confirm new password"}),r.a.createElement(ae,{name:"Send",disable:l}))},_e=t(132),Ae=t.n(_e),Ie=Object(s.a)((function(e){return{submit:{margin:e.spacing(3,0,2),backgroundColor:"#e4b61a","&:hover":{backgroundColor:"#2c3258"}}}})),Me=function(){var e=Object(i.c)((function(e){return e.login.isAuth})),a=Object(i.c)((function(e){return e.login.userProfile})),t=a.email,n=a.name,c=a.avatar,o=a.publicCardPacksCount,l=a.created,s=Object(i.b)(),u=Ie();if(!e)return r.a.createElement(C.a,{to:"/login"});return r.a.createElement("div",{className:Ae.a.profileBlock},r.a.createElement("div",{className:Ae.a.profileHeader},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,"Profile ",n),r.a.createElement("div",null,"Profile email ",t),r.a.createElement("div",null,"Profile avatar ",c),r.a.createElement("div",null,"Profile publicCardPacksCount ",o),r.a.createElement("div",null,"Profile created ",l),r.a.createElement("button",{type:"submit",onClick:function(){s((function(e){H().then((function(a){"logOut success \u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"===a.data.info&&e({type:"login/LOGOUT"})}))}))},className:u.submit},"Log out")),")"))},De=t(16),qe=t(159),Le=t(273),Ge={cardPacks:[],page:0,pageCount:10,minCardsCount:0,maxCardsCount:20,cardPacksTotalCount:1},Ue=function(e,a,t){return{type:"packs/SET_RANGE",cardPacks:e.cardPacks,page:e.page,pageCount:e.pageCount,cardPacksTotalCount:e.cardPacksTotalCount,minCardsCount:a,maxCardsCount:t}},We=function(e,a){return function(t,n){var r=n().packsReducer,c=r.minCardsCount,o=r.maxCardsCount;L(e,a,c,o).then((function(e){t(Ue(e.data,c,o))})).catch((function(e){console.log(e.response.data.error)}))}},ze=t(262),Ye=t(66),Be=t.n(Ye),Fe=t(277),Ve=t(266),Ze=t(215),$e=t(267),He=Object(qe.a)(),Je=Object(s.a)((function(e){return Object(u.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},button:{width:"250px",alignContent:"center"}})}));function Ke(e){var a=e.isOpen,t=e.handleClose,n=e.title,c=e.children,o=Je();function i(){t()}return r.a.createElement("div",null,r.a.createElement(Fe.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:o.modal,open:a,onClose:i,closeAfterTransition:!0,BackdropComponent:Ve.a,BackdropProps:{timeout:500}},r.a.createElement(Ze.a,{in:a},r.a.createElement("div",{className:o.paper},r.a.createElement($e.a,null,r.a.createElement(f.a,{onClick:function(){return i()},color:"primary"},"Close")),r.a.createElement(p.a,{style:{padding:He.spacing(2)},component:"h3",variant:"h3"},n),c))))}var Qe=t(283),Xe=Object(s.a)({root:{width:"80%",display:"flex",justifyContent:"space-between",alignItems:"center"},button:{width:"100px",alignContent:"center"},slider:{marginRight:"30px"}});function ea(e){var a=e.minRange,t=e.maxRange,n=Xe(),c=r.a.useState([a,t]),o=Object(De.a)(c,2),l=o[0],s=o[1],u=Object(i.b)();return r.a.createElement("div",{className:n.root},r.a.createElement(Qe.a,{className:n.slider,value:l,min:a,step:5,max:t,onChange:function(e,a){a&&s(a)},"aria-labelledby":"range-slider",valueLabelDisplay:"on"}),r.a.createElement(f.a,{onClick:function(){var e,a;u((e=l[0],a=l[1],function(t,n){var r=n().packsReducer,c=r.page,o=r.pageCount;G(c,o,e,a).then((function(n){t(Ue(n.data,e,a))})).catch((function(e){console.log(e.response.data.error)}))}))},variant:"contained",color:"primary",className:n.button},"APPLY"))}var aa=t(276);Object(qe.a)().spacing(2);var ta=Object(s.a)({pagination:{display:"flex",justifyContent:"center",marginTop:"20px"}}),na=function(e){var a=e.count,t=e.page,n=e.rowsPerPageOptions,c=e.onChangePage,o=e.rowsPerPage,i=e.onChangeRowsPerPage,l=ta();return r.a.createElement("div",null,r.a.createElement(aa.a,{className:l.pagination,component:"div",count:a,page:t,rowsPerPageOptions:n,onChangePage:function(e,a){c(a)},rowsPerPage:o,onChangeRowsPerPage:function(e){i(+e.target.value)}}))},ra=t(269),ca=t(272),oa=t(268),ia=t(270),la=t(271);Object(qe.a)().spacing(2);var sa=Object(s.a)({table:{minWidth:650},heading:{fontWeight:"bold"}}),ua=function(e){var a=e.heading,t=e.children,n=sa();return r.a.createElement(ra.a,{className:n.table,"aria-label":"simple table"},r.a.createElement(ia.a,null,r.a.createElement(la.a,null,a.map((function(e){return r.a.createElement(oa.a,{className:n.heading,align:e.align},e.name)})))),r.a.createElement(ca.a,null,t))},ma={cards:[],cardsTotalCount:0,maxGrade:0,minGrade:0,page:1,pageCount:4,id:""},da=function(e,a){return{type:"cards/SET_CARDS",data:e,id:a}},pa=function(e){return function(a,t){var n=t().cardsReducer,r=n.page,c=n.pageCount;Y(e,r,c).then((function(t){a(da(t.data,e))})).catch((function(e){console.log(e.response.data.error)}))}},ga=function(e,a){return function(t,n){var r=n().cardsReducer.id;Y(r,e,a).then((function(e){t(da(e.data,r))})).catch((function(e){console.log(e.response.data.error)}))}},fa=t(116),ba=t.n(fa),Ea=t(117),ha=t.n(Ea),va=Object(qe.a)(),Ca=Object(s.a)({padding:{padding:0},button:{width:"250px",alignContent:"center"},margin:{marginLeft:va.spacing(5)},distance:{width:"150px"}}),wa=r.a.memo((function(){var e=Object(C.g)(),a=Ca(),t=Object(n.useState)(1),c=Object(De.a)(t,2),o=c[0],l=c[1],s=Object(n.useState)(4),u=Object(De.a)(s,2),m=u[0],d=u[1],g=Object(n.useState)(""),b=Object(De.a)(g,2),E=b[0],h=b[1],v=Object(n.useState)(""),w=Object(De.a)(v,2),O=w[0],j=w[1],k=Object(n.useState)(""),y=Object(De.a)(k,2),S=y[0],R=y[1],N=Object(n.useState)(!1),T=Object(De.a)(N,2),_=T[0],A=T[1],I=Object(n.useState)(!1),M=Object(De.a)(I,2),D=M[0],q=M[1],L=Object(i.c)((function(e){return e.packsReducer})),G=L.cardPacks,Y=L.page,B=L.pageCount,F=L.cardPacksTotalCount,V=Object(i.c)((function(e){return e.login})),Z=(V.isAuth,V.userProfile),$=Object(i.b)(),H=Z.email;Object(n.useEffect)((function(){$(We(o,m))}),[B,Y]);var J=function(e){$(function(e){return function(a,t){var n=t().packsReducer,r=n.page,c=n.pageCount;W(e).then((function(e){a(We(r,c))})).catch((function(e){console.log(e.response.data.error)}))}}(e))},K=function(e){R(e),q(!0),function(e){var a=G.find((function(a){return a._id===e}));j(a.name)}(e)},Q=Object(n.useCallback)((function(){return"rgb("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())+")"}),[]);return r.a.createElement("div",null,r.a.createElement(Le.a,{component:P.a},r.a.createElement(x.a,{style:{marginTop:va.spacing(2)},container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(x.a,{item:!0,xs:5},r.a.createElement(p.a,{className:a.margin,variant:"h3"},"Packs")),r.a.createElement(x.a,{item:!0,xs:3},r.a.createElement(ea,{maxRange:20,minRange:0})),r.a.createElement(x.a,{item:!0,xs:3},r.a.createElement(f.a,{onClick:function(){A(!0)},variant:"contained",color:"primary",className:a.button,startIcon:r.a.createElement(Be.a,null)},"ADD PACK"))),r.a.createElement(ua,{heading:[{name:"Name",align:"inherit"},{name:"Card Count",align:"center"},{name:"Learning",align:"right"},{name:"Open",align:"right"},{name:"Delete",align:"center"},{name:"Modify",align:"left"},{name:"Updated",align:"right"}]},G.map((function(t){return r.a.createElement(la.a,{key:t._id},r.a.createElement(oa.a,{className:a.distance,component:"th",scope:"row"},t.name),r.a.createElement(oa.a,{align:"center"},t.cardsCount),r.a.createElement(oa.a,{align:"right"},r.a.createElement(ze.a,{style:{color:Q()},onClick:function(){return e=t._id,void console.log("Go to learn "+e);var e},className:a.padding,"aria-label":"add"},r.a.createElement(Be.a,{fontSize:"small"}))),r.a.createElement(oa.a,{align:"right"},r.a.createElement(ze.a,{style:{color:Q()},onClick:function(){return a=t._id,e.push("/\u0441ards"),void $(pa(a));var a},className:a.padding,"aria-label":"add"},r.a.createElement(Be.a,{fontSize:"small"}))),r.a.createElement(oa.a,{align:"center"},r.a.createElement(ze.a,{style:{color:H!==t.user_name?"#303030":Q()},disabled:H!==t.user_name,className:a.padding,"aria-label":"delete",onClick:function(){return J(t._id)}},r.a.createElement(ba.a,{fontSize:"small"}))),r.a.createElement(oa.a,{align:"left"},r.a.createElement(ze.a,{style:{color:H!==t.user_name?"#303030":Q()},disabled:H!==t.user_name,onClick:function(){return K(t._id)},className:a.padding,"aria-label":"modify"},r.a.createElement(ha.a,{fontSize:"small"}))),r.a.createElement(oa.a,{align:"right"},t.updated.slice(0,-14)))})))),r.a.createElement(na,{count:F,page:Y-1,rowsPerPageOptions:[4,10,20],onChangePage:function(e){l(e+1),$(We(e+1,m))},rowsPerPage:B,onChangeRowsPerPage:function(e){d(e),$(We(o,e))}}),r.a.createElement(Ke,{handleClose:function(){A(!1)},isOpen:_,title:"Add new pack"},r.a.createElement("form",{onSubmit:function(){var e;$((e=E,function(a,t){var n=t().packsReducer,r=n.page,c=n.pageCount;U(e).then((function(e){a(We(r,c))})).catch((function(e){console.log(e.response.data.error)}))})),A(!1)}},r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(he,{value:E,type:"text",label:"Set new name",onChange:h}),r.a.createElement(ae,{name:"Send"})))),r.a.createElement(Ke,{handleClose:function(){q(!1)},isOpen:D,title:"Modify pack name"},r.a.createElement("form",{onSubmit:function(){var e,a;$((e=S,a=O,function(t,n){var r=n().packsReducer,c=r.page,o=r.pageCount;z(e,a).then((function(e){t(We(c,o))})).catch((function(e){console.log(e.response.data.error)}))})),q(!1)}},r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(he,{value:O,type:"text",label:"Set new pack name",onChange:j}),r.a.createElement(ae,{name:"Send updated pack name"})))))})),Oa=Object(s.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),ja=function(){var e=Oa();return r.a.createElement(we.a,{component:"main",maxWidth:"xs"},r.a.createElement(O.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(p.a,{component:"h1",variant:"h1"},"404"),r.a.createElement(p.a,{component:"h1",variant:"h4"},"This page doesnt exist"),r.a.createElement(l.b,{to:"/profile"},r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Go back"))))},ka=Object(qe.a)();ka.spacing(2);var ya=Object(s.a)({padding:{padding:0},button:{width:"250px",alignContent:"center"},margin:{marginLeft:ka.spacing(5)},distance:{width:"150px"}}),Sa=function(){var e=ya(),a=Object(i.b)(),t=Object(i.c)((function(e){return e.cardsReducer})),c=Object(i.c)((function(e){return e.login.isAuth})),o=t.cards,l=t.cardsTotalCount,s=t.page,u=t.pageCount,m=(t.id,Object(n.useState)(1)),d=Object(De.a)(m,2),g=d[0],b=d[1],E=Object(n.useState)(4),h=Object(De.a)(E,2),v=h[0],w=h[1],O=Object(n.useState)(""),j=Object(De.a)(O,2),k=j[0],y=j[1],S=Object(n.useState)(""),R=Object(De.a)(S,2),N=R[0],T=R[1],_=Object(n.useState)(!1),A=Object(De.a)(_,2),I=A[0],M=A[1],D=function(){a(function(e,a){return function(t,n){var r=n().cardsReducer.id;B(r,e,a).then((function(e){t(pa(r))})).catch((function(e){console.log(e.response.data.error)}))}}(k,N)),M(!1)},q=function(e){a(function(e){return function(a,t){var n=t().packsReducer,r=n.page,c=n.pageCount;F(e).then((function(e){a(We(r,c))})).catch((function(e){console.log(e.response.data.error)}))}}(e))},L=Object(n.useCallback)((function(){return"rgb("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())+")"}),[]);return c?r.a.createElement("div",null,r.a.createElement(Le.a,{component:P.a},r.a.createElement(x.a,{style:{marginTop:ka.spacing(2)},container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(x.a,{item:!0,xs:6},r.a.createElement(p.a,{className:e.margin,variant:"h3"},"Cards")),r.a.createElement(x.a,{item:!0,xs:3},r.a.createElement(f.a,{onClick:function(){M(!0)},variant:"contained",color:"primary",className:e.button,startIcon:r.a.createElement(Be.a,null)},"ADD CARD"),r.a.createElement(f.a,{onClick:function(){console.log("Go to lern")},variant:"contained",color:"primary",className:e.button,startIcon:r.a.createElement(Be.a,null)},"Go to learn"))),r.a.createElement(ua,{heading:[{name:"Question",align:"inherit"},{name:"Answer",align:"center"},{name:"Grade",align:"center"},{name:"Delete",align:"center"},{name:"Modify",align:"left"},{name:"Updated",align:"right"}]},o.map((function(a){return r.a.createElement(la.a,{key:a._id},r.a.createElement(oa.a,{className:e.distance,component:"th",scope:"row"},a.question),r.a.createElement(oa.a,{align:"center"},a.answer),r.a.createElement(oa.a,{align:"center"},a.grade),r.a.createElement(oa.a,{align:"center"},r.a.createElement(ze.a,{style:{color:L()},className:e.padding,"aria-label":"delete",onClick:function(){return q(a._id)}},r.a.createElement(ba.a,{fontSize:"small"}))),r.a.createElement(oa.a,{align:"left"},r.a.createElement(ze.a,{style:{color:L()},className:e.padding,"aria-label":"modify",onClick:function(){return console.log(a._id)}},r.a.createElement(ha.a,{fontSize:"small"}))),r.a.createElement(oa.a,{align:"right"},a.updated.slice(0,-14)))})))),r.a.createElement(na,{count:l,page:s-1,rowsPerPageOptions:[4,10,20],onChangePage:function(e){b(e+1),a(ga(e+1,v))},rowsPerPage:u,onChangeRowsPerPage:function(e){w(e),a(ga(g,e))}}),r.a.createElement(Ke,{handleClose:function(){M(!1)},isOpen:I,title:"Add new card"},r.a.createElement("form",{onSubmit:function(){return D()}},r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(he,{value:k,type:"text",label:"Enter question",onChange:y}),r.a.createElement(he,{value:N,type:"text",label:"Enter answer",onChange:T}),r.a.createElement(ae,{name:"Send"}))))):r.a.createElement(C.a,{to:"/login"})},Pa=t(67),xa=t.n(Pa),Ra=Object(qe.a)();Ra.spacing(2);var Na=Object(s.a)({padding:{padding:0},buttonControl:{width:"300px",height:"40px",alignContent:"center",borderRadius:"10px",background:"#2c3258",border:"1px solid #e4b61a",margin:"40px",color:"#e4b61a"},buttonGrade:{color:"#e4b61a",margin:"8px",borderColor:"#e4b61a",textDecoration:"none",padding:"3px 9px",fontSize:"0.8125rem",border:"1px solid #e4b61a"},margin:{marginLeft:Ra.spacing(5)},card:{width:"300px",height:"400px",margin:"40px",border:"1px solid #e4b61a",borderRadius:"34px",transformStyle:"preserve-3d",position:"relative",background:"white",display:"flex",alignItems:"center",justifyContent:"center"}}),Ta=["\u043d\u0435 \u0437\u043d\u0430\u043b","\u0437\u0430\u0431\u044b\u043b","\u0434\u043e\u043b\u0433\u043e \u0434\u0443\u043c\u0430\u043b","\u043f\u0435\u0440\u0435\u043f\u0443\u0442\u0430\u043b","\u0437\u043d\u0430\u043b"],_a=function(e){var a=e.reduce((function(e,a){return e+(6-a.grade)*(6-a.grade)}),0),t=Math.random()*a,n=e.reduce((function(e,a,n){var r=e.sum+(6-a.grade)*(6-a.grade);return{sum:r,id:r<t?n:e.id}}),{sum:0,id:-1});return console.log("test: ",a,t,n),e[n.id+1]},Aa=function(e){var a=Na(),t=Object(i.b)(),c=Object(n.useState)(!0),o=Object(De.a)(c,2),l=o[0],s=o[1],u=Object(n.useState)(!0),m=Object(De.a)(u,2),d=m[0],p=(m[1],Object(n.useState)(!0)),g=Object(De.a)(p,2),b=g[0],E=g[1],h=Object(i.c)((function(e){return e.cardsReducer})).cards,v=Object(C.h)().id,w=Object(n.useState)({_id:"fake",cardsPack_id:"",answer:"answer fake",question:"question fake",grade:1,shots:0,type:"",rating:0,more_id:"",created:"",updated:""}),O=Object(De.a)(w,2),j=O[0],k=O[1];Object(n.useEffect)((function(){return console.log("LearnContainer useEffect"),b&&(t(pa(v)),E(!1)),console.log("cards",h),h.length>0&&k(_a(h)),function(){console.log("LearnContainer useEffect off")}}),[t,v,h,b]);return r.a.createElement("div",{className:xa.a.cards_wrapper},l?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:xa.a.card_container},r.a.createElement("div",{className:"".concat(a.card," ").concat(xa.a.card),onMouseEnter:function(){},onMouseLeave:function(){}},d?r.a.createElement("h2",{className:xa.a.name},j.question):r.a.createElement("div",{className:xa.a.face},r.a.createElement("h2",{className:xa.a.back},j.answer)))),r.a.createElement("div",null,r.a.createElement(f.a,{onClick:function(){return s(!1)},className:a.buttonControl},"check"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:a.card},j.answer),Ta.map((function(e,t){return r.a.createElement(f.a,{key:"grade-"+t,onClick:function(){},className:a.buttonGrade},e)})),r.a.createElement("div",null,r.a.createElement(f.a,{onClick:function(){s(!0),h.length>0&&k(_a(h))},className:a.buttonControl},"next")))))};var Ia=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(v,null)),r.a.createElement(C.d,null,r.a.createElement(C.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Me,null)}}),r.a.createElement(C.b,{path:"/login",render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(C.b,{path:"/register",render:function(){return r.a.createElement(le,null)}}),r.a.createElement(C.b,{path:"/passwordRecovery",render:function(){return r.a.createElement(ke,null)}}),r.a.createElement(C.b,{path:"/set-new-password/:token?",render:function(){return r.a.createElement(Te,null)}}),r.a.createElement(C.b,{path:"/packs",render:function(){return r.a.createElement(wa,null)}}),r.a.createElement(C.b,{path:"/\u0441ards",render:function(){return r.a.createElement(Sa,null)}}),r.a.createElement(C.b,{path:"/learn",render:function(){return r.a.createElement(Aa,null)}}),r.a.createElement(C.b,{path:"*",render:function(){return r.a.createElement(ja,null)}})))},Ma=t(83),Da=t(158),qa={isInitialized:!1},La={},Ga=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:La,a=arguments.length>1?arguments[1]:void 0;return a.type,e},Ua=Object(Ma.c)({register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"register/SET-IS-REGISTERED":return Object(M.a)({},e,{isRegistered:a.value});default:return e}},pwRecoveryRequest:ge,passwordUpdate:Ne,login:X,packsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"packs/SET_PACKS":return Object(M.a)({},e,{cardPacks:a.cardsPacks,page:a.page,pageCount:a.pageCount,cardPacksTotalCount:a.cardPacksTotalCount,minCardsCount:a.minCardsCount,maxCardsCount:a.maxCardsCount});case"packs/SET_PAGE":return Object(M.a)({},e,{page:a.page,pageCount:a.pageCount});case"packs/SET_RANGE":return Object(M.a)({},e,{cardPacks:a.cardPacks,page:a.page,pageCount:a.pageCount,cardPacksTotalCount:a.cardPacksTotalCount,minCardsCount:a.minCardsCount,maxCardsCount:a.maxCardsCount});default:return e}},cardsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ma,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"cards/SET_CARDS":return Object(M.a)({},e,{},a.data,{id:a.id});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qa,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"APP/INITIALIZE-APP":return Object(M.a)({},e,{isInitialized:a.isInitialized});default:return Object(M.a)({},e)}},learn:Ga}),Wa=Object(Ma.d)(Ua,Object(Ma.a)(Da.a));window.store=Wa,o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(i.a,{store:Wa},r.a.createElement(Ia,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,a,t){e.exports={cards_wrapper:"Learn_cards_wrapper__3oG6C"}}},[[181,1,2]]]);
//# sourceMappingURL=main.97a698d3.chunk.js.map