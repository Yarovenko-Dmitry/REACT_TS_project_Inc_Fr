(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{133:function(e,a,t){},183:function(e,a,t){e.exports=t(214)},188:function(e,a,t){},192:function(e,a,t){},214:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),o=t.n(c);t(188),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(8),l=t(23),s=(t(192),t(251)),u=t(282),d=t(255),m=t(256),p=t(163),g=t(276),f=t(253),b=Object(s.a)((function(e){return Object(u.a)({btn:{margin:e.spacing(1),color:"#e4b61a",borderColor:"#e4b61a",textDecoration:"none"}})})),E=function(e){var a=e.link,t=e.name,n=b();return r.a.createElement(l.b,{to:a,style:{textDecoration:"none"}},r.a.createElement(f.a,{variant:"outlined",className:n.btn,size:"small"},t))},h=Object(s.a)((function(e){return Object(u.a)({marginAutoItem:{margin:"auto"},navbar:{backgroundColor:"#2c3258"},btn:{margin:e.spacing(1),color:"#e4b61a",borderColor:"#e4b61a",textDecoration:"none"}})})),v=function(){var e=h();return r.a.createElement(d.a,{position:"static",className:e.navbar},r.a.createElement(m.a,null,r.a.createElement(p.a,{variant:"h6"},"Cards"),r.a.createElement(g.a,{className:e.marginAutoItem},r.a.createElement(E,{link:"/profile",name:"Profile"}),r.a.createElement(E,{link:"/login",name:"login"}),r.a.createElement(E,{link:"/register",name:"register"}),r.a.createElement(E,{link:"/passwordRecovery",name:"Recovery"}),r.a.createElement(E,{link:"/set-new-password",name:"New password"}),r.a.createElement(E,{link:"/packs",name:"Packs of cards"}),r.a.createElement(E,{link:"/\u0441ards",name:"\u0421ards"}),r.a.createElement(E,{link:"/learn",name:"Learn"}))))},C=t(14),O=t(283),w=t(258),j=t(281),k=t(263),y=t(280),S=t(265),P=t(216),x=t(257),R=t(156),N=t.n(R),T=t(52),_=t(85),A=t.n(_),D=t(110),M=t(11),I=t(155),q=t.n(I).a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0"}),L=function(e,a,t,n){return q.get("/cards/pack?page=".concat(e,"&pageCount=").concat(a,"&min=").concat(t,"&max=").concat(n))},G=function(e,a,t,n){return q.get("/cards/pack?page=".concat(e,"&pageCount=").concat(a,"&min=").concat(t,"&max=").concat(n))},U=function(e){return q.post("/cards/pack",{cardsPack:{name:e}})},W=function(e){return q.delete("/cards/pack?id=".concat(e))},z=function(e,a){return q.put("/cards/pack",{cardsPack:{_id:e,name:a}})},F=function(e,a,t){return q.get("/cards/card?cardsPack_id=".concat(e,"&page=").concat(a,"&pageCount=").concat(t))},Y=function(e,a){return q.put("/cards/grade",{grade:a,card_id:e})},B=function(e,a,t){return q.post("/cards/card",{card:{cardsPack_id:e,question:a,answer:t}})},V=function(e){return q.delete("/cards/card?id=".concat(e))},Z=function(e,a,t){return q.put("/cards/card",{card:{_id:e,question:a,answer:t}})},$=function(e){return q.post("/auth/forgot/",{email:e,from:"password-reset-server <noreply@noreply.it>",message:"\n\t\t\t\t\t<div style=\"background-color: lime; padding: 15px\">\n\t\t\t\t\tpassword recovery link: \n\t\t\t\t\t<a href='http://localhost:3000/#/set-new-password/$token$'>link</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t"})},Q=function(e,a){return q.post("/auth/set-new-password",{password:e,resetPasswordToken:a})},H=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return q.post("auth/login",{email:e,password:a,rememberMe:t})},J=function(){return q.delete("auth/me")},K=function(e){return q.post("/auth/register",Object(M.a)({},e))},X={isAuth:!1,userProfile:{_id:"",email:"",name:"",avatar:"",publicCardPacksCount:0,created:"YYYY-MM-DD",updated:"YYYY-MM-DD",isAdmin:!1,verified:!1,rememberMe:!1,error:""}},ee=function(e){return{type:"login/SET_USER_DATA",data:e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"login/SET_USER_DATA":return Object(M.a)({},e,{userProfile:a.data,isAuth:!0});case"login/LOGOUT":return Object(M.a)({},e,{isAuth:!1});case"login/AUTH-ME":return Object(M.a)({},e,{isAuth:a.isAuth,userProfile:a.userProfile});default:return e}},te=Object(s.a)((function(e){return{submit:{margin:e.spacing(3,0,2),backgroundColor:"#e4b61a","&:hover":{backgroundColor:"#2c3258"}}}})),ne=function(e){var a=e.disable,t=e.name,n=te();return r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.submit,disabled:a},t)},re=Object(s.a)((function(e){return{root:{height:"100vh"},centr:{margin:"0 auto"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ce(){var e=Object(i.c)((function(e){return e.login.isAuth})),a=re(),t=Object(i.b)(),n=Object(T.a)({initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e){var a=e.email,n=e.password,r=e.rememberMe;t(function(e,a){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(n){H(e,a,t).then((function(e){n(ee(e.data))}))}}(a,n,r))}});return e?r.a.createElement(C.a,{to:"/profile"}):r.a.createElement(x.a,{container:!0,component:"main",className:a.root},r.a.createElement(w.a,null),r.a.createElement(x.a,{item:!0,xs:12,sm:8,md:5,className:a.centr,component:P.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement(O.a,{className:a.avatar},r.a.createElement(N.a,null)),r.a.createElement(p.a,{component:"h1",variant:"h5"},"Login"),r.a.createElement("form",{onSubmit:n.handleSubmit,className:a.form,noValidate:!0},r.a.createElement(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:n.handleChange,value:n.values.email}),r.a.createElement(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:n.handleChange,value:n.values.password}),r.a.createElement(k.a,{control:r.a.createElement(y.a,{id:"rememberMe",name:"rememberMe",onChange:n.handleChange,value:n.values.rememberMe,color:"primary"}),label:"Remember me"}),r.a.createElement(ne,{name:"Log in"}),r.a.createElement(x.a,{container:!0},r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(l.b,{to:"/passwordRecovery"},r.a.createElement(S.a,{variant:"body2"},"Forgot password?"))),r.a.createElement(x.a,{item:!0},r.a.createElement(l.b,{to:"/register"},r.a.createElement(S.a,{variant:"body2"},"Don't have an account? Sign Up"))))))))}var oe=t(261),ie=t(262),le=t(266),se={isRegistered:!1},ue=function(){var e=Object(i.b)(),a=Object(i.c)((function(e){return e.register.isRegistered})),t=Object(T.a)({validate:function(e){return e.email?e.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:""},onSubmit:function(a){var t;e((t=a,function(){var e=Object(D.a)(A.a.mark((function e(a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K(t);case 3:e.sent,a({type:"register/SET-IS-REGISTERED",value:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()))}});return a?r.a.createElement(C.a,{to:"/login"}):r.a.createElement(x.a,{container:!0,justify:"center"},r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement("form",{onSubmit:t.handleSubmit},r.a.createElement(oe.a,null,r.a.createElement(ie.a,null,r.a.createElement("p",null,"Registration")),r.a.createElement(le.a,null,r.a.createElement(j.a,Object.assign({label:"Email",margin:"normal"},t.getFieldProps("email"))),t.errors.email?r.a.createElement("div",null,t.errors.email):null,r.a.createElement(j.a,Object.assign({type:"password",label:"Password",margin:"normal"},t.getFieldProps("password"))),t.errors.password?r.a.createElement("div",null,t.errors.email):null,r.a.createElement(f.a,{type:"submit",variant:"contained",color:"primary"},"Register"))))))},de=t(120),me={error:"",success:!1,loading:!1},pe=function(e){return{type:"pwRecovery/SET_ERROR",error:e}},ge=function(e){return{type:"pwRecovery/SET_SUCCESS",success:e}},fe=function(e){return{type:"pwRecovery/SET_LOADING",loading:e}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"pwRecovery/SET_ERROR":return Object(M.a)({},e,{error:a.error});case"pwRecovery/SET_SUCCESS":return Object(M.a)({},e,{success:a.success});case"pwRecovery/SET_LOADING":return Object(M.a)({},e,{loading:a.loading});default:return e}},Ee=t(4),he=Object(Ee.a)({root:{"& input:valid + fieldset":{borderColor:"green",borderWidth:2},"& input:valid:focus + fieldset":{borderLeftWidth:6,padding:"4px !important"}}})(j.a),ve=Object(s.a)((function(e){return{input:{marginBottom:"10px"}}})),Ce=function(e){var a=e.error,t=void 0!==a&&a,n=e.formik,c=e.type,o=e.label,i=e.value,l=e.onChange,s=ve();return r.a.createElement(he,Object.assign({className:s.input,error:t,helperText:t,label:o,fullWidth:!0,required:!0,variant:"outlined",type:c},n,{onChange:function(e){l(e.currentTarget.value)},value:i}))},Oe=t(157),we=t.n(Oe),je=t(267),ke=Object(s.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:"#2c3258"},form:{width:"100%",marginTop:e.spacing(3)}}})),ye=function(e){var a=e.onsubmit,t=e.children,n=e.title;var c=ke();return r.a.createElement(je.a,{component:"main",maxWidth:"xs"},r.a.createElement(w.a,null),r.a.createElement("div",{className:c.paper},r.a.createElement(O.a,{className:c.avatar},r.a.createElement(we.a,null)),r.a.createElement(p.a,{component:"h1",variant:"h5"},n),r.a.createElement("form",{className:c.form,onSubmit:function(){a()}},r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(x.a,{item:!0,xs:12},t)))))},Se=function(){var e=Object(i.b)(),a=Object(T.a)({validateOnBlur:!0,validateOnChange:!1,validate:function(e){return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)?void 0:{email:"Invalid email address"}:{email:"Email is required"}},initialValues:{email:""},onSubmit:function(a){var t=a.email;e(function(e){return function(a){a(fe(!0)),$(e).then((function(e){a(ge(e.data.success)),a(pe("")),a(fe(!1))})).catch((function(e){var t=e.response,n=(t.request,Object(de.a)(t,["request"]));return a(ge(!1)),a(fe(!1)),a(pe(n.data.error))}))}}(t.trim()))}}),t=Object(i.c)((function(e){return e.pwRecoveryRequest.error})),n=(Object(i.c)((function(e){return e.pwRecoveryRequest.success})),Object(i.c)((function(e){return e.pwRecoveryRequest.loading})));return r.a.createElement(ye,{onsubmit:a.handleSubmit,title:"Reset password"},a.errors.email?r.a.createElement("div",null,a.errors.email):null,t?r.a.createElement("div",null,t):null,r.a.createElement(Ce,{error:!!a.errors.email,formik:Object(M.a)({},a.getFieldProps("email")),type:"email",label:"Enter your email"}),r.a.createElement(ne,{name:"Send",disable:n}))},Pe=t(89),xe={error:"",success:!1,loading:!1},Re=function(e){return{type:"pwCreation/SET_SUCCESS",success:e}},Ne=function(e){return{type:"pwCreation/SET_LOADING",loading:e}},Te=function(e){return{type:"pwCreation/SET_ERROR",error:e}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"pwCreation/SET_SUCCESS":return Object(M.a)({},e,{success:a.success});case"pwCreation/SET_LOADING":return Object(M.a)({},e,{loading:a.loading});case"pwCreation/SET_ERROR":return Object(M.a)({},e,{error:a.error});default:return e}},Ae=function(){var e=Pe.a().shape({password:Pe.c().required("This field is required"),changepassword:Pe.c().when("password",{is:function(e){return!!(e&&e.length>0)},then:Pe.c().oneOf([Pe.b("password")],"Both password need to be the same")})}),a=Object(C.h)().token,t=Object(i.b)(),n=Object(T.a)({validateOnBlur:!0,validateOnChange:!1,initialValues:{password:"",changepassword:""},validationSchema:e,onSubmit:function(e){var n=e.password;t(function(e,a){return function(t){t(Ne(!0)),Q(e,a).then((function(e){200===e.status&&(t(Re(!0)),t(Te("")),t(Ne(!1)))})).catch((function(e){var a=e.response,n=(a.request,Object(de.a)(a,["request"]));return t(Re(!1)),t(Ne(!1)),t(Te(n.data.error))}))}}(n,a))}}),c=Object(i.c)((function(e){return e.passwordUpdate.error})),o=Object(i.c)((function(e){return e.passwordUpdate.success})),l=Object(i.c)((function(e){return e.passwordUpdate.loading}));return o?(window.confirm("Your password has been changed!"),r.a.createElement(C.a,{to:"/login"})):r.a.createElement(ye,{onsubmit:n.handleSubmit,title:"Set new password"},n.errors.password?r.a.createElement("div",null,n.errors.password):null,c?r.a.createElement("div",null,c):null,r.a.createElement(Ce,{error:!!n.errors.password,formik:Object(M.a)({},n.getFieldProps("password")),type:"password",label:"Enter new password"}),n.errors.changepassword?r.a.createElement("div",null,n.errors.changepassword):null,r.a.createElement(Ce,{error:!!n.errors.changepassword,formik:Object(M.a)({},n.getFieldProps("changepassword")),type:"password",label:"Confirm new password"}),r.a.createElement(ne,{name:"Send",disable:l}))},De=t(133),Me=t.n(De),Ie=Object(s.a)((function(e){return{submit:{margin:e.spacing(3,0,2),backgroundColor:"#e4b61a","&:hover":{backgroundColor:"#2c3258"}}}})),qe=function(){var e=Object(i.c)((function(e){return e.login.isAuth})),a=Object(i.c)((function(e){return e.login.userProfile})),t=a.email,n=a.name,c=a.avatar,o=a.publicCardPacksCount,l=a.created,s=Object(i.b)(),u=Ie();if(!e)return r.a.createElement(C.a,{to:"/login"});return r.a.createElement("div",{className:Me.a.profileBlock},r.a.createElement("div",{className:Me.a.profileHeader},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,"Profile ",n),r.a.createElement("div",null,"Profile email ",t),r.a.createElement("div",null,"Profile avatar ",c),r.a.createElement("div",null,"Profile publicCardPacksCount ",o),r.a.createElement("div",null,"Profile created ",l),r.a.createElement("button",{type:"submit",onClick:function(){s((function(e){J().then((function(a){"logOut success \u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"===a.data.info&&e({type:"login/LOGOUT"})}))}))},className:u.submit},"Log out")),")"))},Le=t(13),Ge=t(161),Ue=t(275),We={cardPacks:[],page:0,pageCount:10,minCardsCount:0,maxCardsCount:20,cardPacksTotalCount:1},ze=function(e,a,t){return{type:"packs/SET_RANGE",cardPacks:e.cardPacks,page:e.page,pageCount:e.pageCount,cardPacksTotalCount:e.cardPacksTotalCount,minCardsCount:a,maxCardsCount:t}},Fe=function(e,a){return function(t,n){var r=n().packsReducer,c=r.minCardsCount,o=r.maxCardsCount;L(e,a,c,o).then((function(e){t(ze(e.data,c,o))})).catch((function(e){console.log(e.response.data.error)}))}},Ye=t(264),Be=t(95),Ve=t.n(Be),Ze=t(279),$e=t(268),Qe=t(217),He=t(269),Je=Object(Ge.a)(),Ke=Object(s.a)((function(e){return Object(u.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},button:{width:"250px",alignContent:"center"}})}));function Xe(e){var a=e.isOpen,t=e.handleClose,n=e.title,c=e.children,o=Ke();function i(){t()}return r.a.createElement("div",null,r.a.createElement(Ze.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:o.modal,open:a,onClose:i,closeAfterTransition:!0,BackdropComponent:$e.a,BackdropProps:{timeout:500}},r.a.createElement(Qe.a,{in:a},r.a.createElement("div",{className:o.paper},r.a.createElement(He.a,null,r.a.createElement(f.a,{onClick:function(){return i()},color:"primary"},"Close")),r.a.createElement(p.a,{style:{padding:Je.spacing(2)},component:"h3",variant:"h3"},n),c))))}var ea=t(285),aa=Object(s.a)({root:{width:"80%",display:"flex",justifyContent:"space-between",alignItems:"center"},button:{width:"100px",alignContent:"center"},slider:{marginRight:"30px"}});function ta(e){var a=e.minRange,t=e.maxRange,n=aa(),c=r.a.useState([a,t]),o=Object(Le.a)(c,2),l=o[0],s=o[1],u=Object(i.b)();return r.a.createElement("div",{className:n.root},r.a.createElement(ea.a,{className:n.slider,value:l,min:a,step:5,max:t,onChange:function(e,a){a&&s(a)},"aria-labelledby":"range-slider",valueLabelDisplay:"on"}),r.a.createElement(f.a,{onClick:function(){var e,a;u((e=l[0],a=l[1],function(t,n){var r=n().packsReducer,c=r.page,o=r.pageCount;G(c,o,e,a).then((function(n){t(ze(n.data,e,a))})).catch((function(e){console.log(e.response.data.error)}))}))},variant:"contained",color:"primary",className:n.button},"APPLY"))}var na=t(278);Object(Ge.a)().spacing(2);var ra=Object(s.a)({pagination:{display:"flex",justifyContent:"center",marginTop:"20px"}}),ca=function(e){var a=e.count,t=e.page,n=e.rowsPerPageOptions,c=e.onChangePage,o=e.rowsPerPage,i=e.onChangeRowsPerPage,l=ra();return r.a.createElement("div",null,r.a.createElement(na.a,{className:l.pagination,component:"div",count:a,page:t,rowsPerPageOptions:n,onChangePage:function(e,a){c(a)},rowsPerPage:o,onChangeRowsPerPage:function(e){i(+e.target.value)}}))},oa=t(271),ia=t(274),la=t(270),sa=t(272),ua=t(273);Object(Ge.a)().spacing(2);var da=Object(s.a)({table:{minWidth:650},heading:{fontWeight:"bold"}}),ma=function(e){var a=e.heading,t=e.children,n=da();return r.a.createElement(oa.a,{className:n.table,"aria-label":"simple table"},r.a.createElement(sa.a,null,r.a.createElement(ua.a,null,a.map((function(e){return r.a.createElement(la.a,{className:n.heading,align:e.align},e.name)})))),r.a.createElement(ia.a,null,t))},pa={cards:[],cardsTotalCount:0,maxGrade:0,minGrade:0,page:1,pageCount:4,id:""},ga=function(e,a){return{type:"cards/SET_CARDS",data:e,id:a}},fa=function(e){return function(a,t){var n=t().cardsReducer,r=n.page,c=n.pageCount;F(e,r,c).then((function(t){a(ga(t.data,e))})).catch((function(e){console.log(e.response.data.error)}))}},ba=function(e,a){return function(t,n){var r=n().cardsReducer.id;F(r,e,a).then((function(e){t(ga(e.data,r))})).catch((function(e){console.log(e.response.data.error)}))}},Ea=t(117),ha=t.n(Ea),va=t(118),Ca=t.n(va),Oa=t(116),wa=t.n(Oa),ja=Object(Ge.a)(),ka=Object(s.a)({padding:{padding:0},button:{width:"250px",alignContent:"center"},margin:{marginLeft:ja.spacing(5)},distance:{width:"150px"}}),ya=r.a.memo((function(){var e=Object(C.g)(),a=ka(),t=Object(n.useState)(1),c=Object(Le.a)(t,2),o=c[0],l=c[1],s=Object(n.useState)(4),u=Object(Le.a)(s,2),d=u[0],m=u[1],g=Object(n.useState)(""),b=Object(Le.a)(g,2),E=b[0],h=b[1],v=Object(n.useState)(""),O=Object(Le.a)(v,2),w=O[0],j=O[1],k=Object(n.useState)(""),y=Object(Le.a)(k,2),S=y[0],R=y[1],N=Object(n.useState)(!1),T=Object(Le.a)(N,2),_=T[0],A=T[1],D=Object(n.useState)(!1),M=Object(Le.a)(D,2),I=M[0],q=M[1],L=Object(i.c)((function(e){return e.packsReducer})),G=L.cardPacks,F=L.page,Y=L.pageCount,B=L.cardPacksTotalCount,V=Object(i.c)((function(e){return e.login})),Z=V.isAuth,$=V.userProfile,Q=Object(i.b)(),H=$.email;Object(n.useEffect)((function(){Q(Fe(o,d))}),[Y,F]);var J=function(e){Q(function(e){return function(a,t){var n=t().packsReducer,r=n.page,c=n.pageCount;W(e).then((function(e){a(Fe(r,c))})).catch((function(e){console.log(e.response.data.error)}))}}(e))},K=function(e){R(e),q(!0),function(e){var a=G.find((function(a){return a._id===e}));j(a.name)}(e)},X=Object(n.useCallback)((function(){return"rgb("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())+")"}),[]);return Z?r.a.createElement("div",null,r.a.createElement(Ue.a,{component:P.a},r.a.createElement(x.a,{style:{marginTop:ja.spacing(2)},container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(x.a,{item:!0,xs:5},r.a.createElement(p.a,{className:a.margin,variant:"h3"},"Packs")),r.a.createElement(x.a,{item:!0,xs:3},r.a.createElement(ta,{maxRange:20,minRange:0})),r.a.createElement(x.a,{item:!0,xs:3},r.a.createElement(f.a,{onClick:function(){A(!0)},variant:"contained",color:"primary",className:a.button,startIcon:r.a.createElement(Ve.a,null)},"ADD PACK"))),r.a.createElement(ma,{heading:[{name:"Name",align:"inherit"},{name:"Card Count",align:"center"},{name:"To learn",align:"center"},{name:"Open",align:"right"},{name:"Delete",align:"center"},{name:"Modify",align:"left"},{name:"Updated",align:"right"}]},G.map((function(t){return r.a.createElement(ua.a,{key:t._id},r.a.createElement(la.a,{className:a.distance,component:"th",scope:"row"},t.name),r.a.createElement(la.a,{align:"center"},t.cardsCount),r.a.createElement(la.a,{align:"center"},r.a.createElement(Ye.a,{style:{color:X()},onClick:function(){return a=t._id,e.push("/learn"),void Q(fa(a));var a},className:a.padding,"aria-label":"learn"},r.a.createElement(wa.a,{fontSize:"small"}))),r.a.createElement(la.a,{align:"right"},r.a.createElement(Ye.a,{style:{color:X()},onClick:function(){return a=t._id,e.push("/\u0441ards"),void Q(fa(a));var a},className:a.padding,"aria-label":"add"},r.a.createElement(Ve.a,{fontSize:"small"}))),r.a.createElement(la.a,{align:"center"},r.a.createElement(Ye.a,{style:{color:H!==t.user_name?"#303030":X()},disabled:H!==t.user_name,className:a.padding,"aria-label":"delete",onClick:function(){return J(t._id)}},r.a.createElement(ha.a,{fontSize:"small"}))),r.a.createElement(la.a,{align:"left"},r.a.createElement(Ye.a,{style:{color:H!==t.user_name?"#303030":X()},disabled:H!==t.user_name,onClick:function(){return K(t._id)},className:a.padding,"aria-label":"modify"},r.a.createElement(Ca.a,{fontSize:"small"}))),r.a.createElement(la.a,{align:"right"},t.updated.slice(0,-14)))})))),r.a.createElement(ca,{count:B,page:F-1,rowsPerPageOptions:[4,10,20],onChangePage:function(e){l(e+1),Q(Fe(e+1,d))},rowsPerPage:Y,onChangeRowsPerPage:function(e){m(e),Q(Fe(o,e))}}),r.a.createElement(Xe,{handleClose:function(){A(!1)},isOpen:_,title:"Add new pack"},r.a.createElement("form",{onSubmit:function(){var e;Q((e=E,function(a,t){var n=t().packsReducer,r=n.page,c=n.pageCount;U(e).then((function(e){a(Fe(r,c))})).catch((function(e){console.log(e.response.data.error)}))})),A(!1)}},r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(Ce,{value:E,type:"text",label:"Set new name",onChange:h}),r.a.createElement(ne,{name:"Send"})))),r.a.createElement(Xe,{handleClose:function(){q(!1)},isOpen:I,title:"Modify pack name"},r.a.createElement("form",{onSubmit:function(){var e,a;Q((e=S,a=w,function(t,n){var r=n().packsReducer,c=r.page,o=r.pageCount;z(e,a).then((function(e){t(Fe(c,o))})).catch((function(e){console.log(e.response.data.error)}))})),q(!1)}},r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(Ce,{value:w,type:"text",label:"Set new pack name",onChange:j}),r.a.createElement(ne,{name:"Send updated pack name"}))))):r.a.createElement(C.a,{to:"/login"})})),Sa=Object(s.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),Pa=function(){var e=Sa();return r.a.createElement(je.a,{component:"main",maxWidth:"xs"},r.a.createElement(w.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(p.a,{component:"h1",variant:"h1"},"404"),r.a.createElement(p.a,{component:"h1",variant:"h4"},"This page doesnt exist"),r.a.createElement(l.b,{to:"/profile"},r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Go back"))))},xa=Object(Ge.a)();xa.spacing(2);var Ra=Object(s.a)({padding:{padding:0},button:{width:"250px",alignContent:"center"},margin:{marginLeft:xa.spacing(5)},distance:{width:"150px"}}),Na=function(){var e=Ra(),a=Object(i.b)(),t=Object(i.c)((function(e){return e.cardsReducer})),c=Object(i.c)((function(e){return e.login})),o=c.isAuth,l=(c.userProfile,t.cards),s=t.cardsTotalCount,u=t.page,d=t.pageCount,m=(t.id,Object(i.c)((function(e){return e.packsReducer.cardPacks})),Object(n.useState)(1)),g=Object(Le.a)(m,2),b=g[0],E=g[1],h=Object(n.useState)(4),v=Object(Le.a)(h,2),O=v[0],w=v[1],j=Object(n.useState)(""),k=Object(Le.a)(j,2),y=k[0],S=k[1],R=Object(n.useState)(""),N=Object(Le.a)(R,2),T=N[0],_=N[1],A=Object(n.useState)(""),D=Object(Le.a)(A,2),M=D[0],I=D[1],q=Object(n.useState)(""),L=Object(Le.a)(q,2),G=L[0],U=L[1],W=Object(n.useState)(!1),z=Object(Le.a)(W,2),F=z[0],Y=z[1],$=Object(n.useState)(!1),Q=Object(Le.a)($,2),H=Q[0],J=Q[1],K=Object(n.useState)(""),X=Object(Le.a)(K,2),ee=X[0],ae=X[1],te=Object(n.useState)(!0),re=Object(Le.a)(te,2),ce=re[0],oe=(re[1],function(){a(function(e,a){return function(t,n){var r=n().cardsReducer.id;B(r,e,a).then((function(e){t(fa(r))})).catch((function(e){console.log(e.response.data.error)}))}}(y,T)),Y(!1)}),ie=Object(C.g)(),le=function(e){var t;a((t=e,function(e,a){var n=a().cardsReducer.id;V(t).then((function(a){e(fa(n))})).catch((function(e){console.log(e.response.data.error)}))}))},se=function(e){ae(e),J(!0),function(e){var a=l.find((function(a){return a._id===e}));I(a.question),U(a.answer)}(e)},ue=Object(n.useCallback)((function(){return"rgb("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())+")"}),[]);return o?r.a.createElement("div",null,r.a.createElement(Ue.a,{component:P.a},r.a.createElement(x.a,{style:{marginTop:xa.spacing(2)},container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(x.a,{item:!0,xs:7},r.a.createElement(p.a,{className:e.margin,variant:"h3"},"Cards")),ce?r.a.createElement(x.a,{item:!0,xs:2},r.a.createElement(f.a,{onClick:function(){Y(!0)},variant:"contained",color:"primary",className:e.button,startIcon:r.a.createElement(Ve.a,null)},"ADD CARD")):null,r.a.createElement(x.a,{item:!0,xs:2},r.a.createElement(f.a,{onClick:function(){ie.push("/learn")},variant:"contained",color:"primary",className:e.button,startIcon:r.a.createElement(wa.a,null)},"To learn"))),r.a.createElement(ma,{heading:[{name:"Question",align:"inherit"},{name:"Answer",align:"center"},{name:"Grade",align:"center"},{name:"Delete",align:"center"},{name:"Modify",align:"left"},{name:"Updated",align:"right"}]},l.map((function(a){return r.a.createElement(ua.a,{key:a._id},r.a.createElement(la.a,{className:e.distance,component:"th",scope:"row"},a.question),r.a.createElement(la.a,{align:"center"},a.answer),r.a.createElement(la.a,{align:"center"},a.grade),r.a.createElement(la.a,{align:"center"},r.a.createElement(Ye.a,{style:{color:ue()},className:e.padding,"aria-label":"delete",onClick:function(){return le(a._id)}},r.a.createElement(ha.a,{fontSize:"small"}))),r.a.createElement(la.a,{align:"left"},r.a.createElement(Ye.a,{style:{color:ue()},className:e.padding,"aria-label":"modify",onClick:function(){return se(a._id)}},r.a.createElement(Ca.a,{fontSize:"small"}))),r.a.createElement(la.a,{align:"right"},a.updated.slice(0,-14)))})))),r.a.createElement(ca,{count:s,page:u-1,rowsPerPageOptions:[4,10,20],onChangePage:function(e){E(e+1),a(ba(e+1,O))},rowsPerPage:d,onChangeRowsPerPage:function(e){w(e),a(ba(b,e))}}),r.a.createElement(Xe,{handleClose:function(){Y(!1)},isOpen:F,title:"Add new card"},r.a.createElement("form",{onSubmit:function(){return oe()}},r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(Ce,{value:y,type:"text",label:"Enter question",onChange:S}),r.a.createElement(Ce,{value:T,type:"text",label:"Enter answer",onChange:_}),r.a.createElement(ne,{name:"Send"})))),r.a.createElement(Xe,{handleClose:function(){J(!1)},isOpen:H,title:"Modify card QA"},r.a.createElement("form",{onSubmit:function(){a(function(e,a,t){return function(n,r){var c=r().cardsReducer.id;Z(e,a,t).then((function(e){n(fa(c))})).catch((function(e){console.log(e.response.data.error)}))}}(ee,M,G)),J(!1)}},r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(Ce,{value:M,type:"text",label:"Set new question",onChange:I}),r.a.createElement(Ce,{value:G,type:"text",label:"Set new answer",onChange:U}),r.a.createElement(ne,{name:"Send updated card QA"}))))):r.a.createElement(C.a,{to:"/login"})},Ta=t(88),_a=t.n(Ta),Aa=t(159),Da=t.n(Aa),Ma=Object(Ge.a)();Ma.spacing(2);var Ia=Object(s.a)({padding:{padding:0},buttonControl:{width:"300px",height:"40px",alignContent:"center",borderRadius:"10px",background:"#2c3258",border:"1px solid #e4b61a",margin:"40px",color:"#e4b61a"},buttonGrade:{color:"#e4b61a",margin:"8px",borderColor:"#e4b61a",textDecoration:"none",padding:"3px 9px",fontSize:"0.8125rem",border:"1px solid #e4b61a"},margin:{marginLeft:Ma.spacing(5)},card:{width:"300px",height:"400px",margin:"40px",border:"1px solid #e4b61a",borderRadius:"34px",transformStyle:"preserve-3d",position:"relative",background:"white",display:"flex",alignItems:"center",justifyContent:"center"}}),qa=["\u043d\u0435 \u0437\u043d\u0430\u043b","\u0437\u0430\u0431\u044b\u043b","\u0434\u043e\u043b\u0433\u043e \u0434\u0443\u043c\u0430\u043b","\u043f\u0435\u0440\u0435\u043f\u0443\u0442\u0430\u043b","\u0437\u043d\u0430\u043b"],La=function(e){var a=e.reduce((function(e,a){return e+(6-a.grade)*(6-a.grade)}),0),t=Math.random()*a,n=e.reduce((function(e,a,n){var r=e.sum+(6-a.grade)*(6-a.grade);return{sum:r,id:r<t?n:e.id}}),{sum:0,id:-1});return e[n.id+1]},Ga=function(e){var a=Ia(),t=Object(i.b)(),c=Object(n.useState)(!0),o=Object(Le.a)(c,2),l=o[0],s=o[1],u=Object(n.useState)(!0),d=Object(Le.a)(u,2),m=(d[0],d[1],Object(n.useState)(!1)),p=Object(Le.a)(m,2),g=p[0],b=p[1],E=Object(n.useState)(!0),h=Object(Le.a)(E,2),v=h[0],O=h[1],w=Object(i.c)((function(e){return e.cardsReducer})).cards,j=Object(C.h)().id,k=Object(n.useState)({_id:"fake",cardsPack_id:"",answer:"answer fake",question:"question fake",grade:1,shots:0,type:"",rating:0,more_id:"",created:"",updated:""}),y=Object(Le.a)(k,2),S=y[0],P=y[1];Object(n.useEffect)((function(){return v&&(t(fa(j)),O(!1)),w.length>0&&P(La(w)),function(){}}),[t,j,w,v]);var x=function(e){var a,n;t((a=S._id,n=e+1,function(e,t){var r=t().cardsReducer.id;Y(a,n).then((function(a){e(fa(r))})).catch((function(e){console.log(e.response.data.error)}))}))};return r.a.createElement("div",{className:_a.a.cards_wrapper},l?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:_a.a.card_container},r.a.createElement(Da.a,{isFlipped:g,flipDirection:"horizontal"},r.a.createElement("div",{className:"".concat(a.card," ").concat(_a.a.card),onMouseEnter:function(){b(!0)}},r.a.createElement("h2",{className:_a.a.title},S.question)),r.a.createElement("div",{className:a.card,onMouseDown:function(){b(!1)}},r.a.createElement("h2",{className:_a.a.title},S.answer)))),r.a.createElement("div",null,r.a.createElement(f.a,{onClick:function(){return s(!1)},className:a.buttonControl},"check"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:a.card},S.answer),qa.map((function(e,t){return r.a.createElement(f.a,{key:"grade-"+t,onClick:function(){return x(t)},className:a.buttonGrade},e)})),r.a.createElement("div",null,r.a.createElement(f.a,{onClick:function(){s(!0),w.length>0&&P(La(w))},className:a.buttonControl},"next")))))};var Ua=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(v,null)),r.a.createElement(C.d,null,r.a.createElement(C.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(qe,null)}}),r.a.createElement(C.b,{path:"/login",render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(C.b,{path:"/register",render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(C.b,{path:"/passwordRecovery",render:function(){return r.a.createElement(Se,null)}}),r.a.createElement(C.b,{path:"/set-new-password/:token?",render:function(){return r.a.createElement(Ae,null)}}),r.a.createElement(C.b,{path:"/packs",render:function(){return r.a.createElement(ya,null)}}),r.a.createElement(C.b,{path:"/\u0441ards",render:function(){return r.a.createElement(Na,null)}}),r.a.createElement(C.b,{path:"/learn",render:function(){return r.a.createElement(Ga,null)}}),r.a.createElement(C.b,{path:"*",render:function(){return r.a.createElement(Pa,null)}})))},Wa=t(82),za=t(160),Fa={isInitialized:!1},Ya=Object(Wa.c)({register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"register/SET-IS-REGISTERED":return Object(M.a)({},e,{isRegistered:a.value});default:return e}},pwRecoveryRequest:be,passwordUpdate:_e,login:ae,packsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"packs/SET_PACKS":return Object(M.a)({},e,{cardPacks:a.cardsPacks,page:a.page,pageCount:a.pageCount,cardPacksTotalCount:a.cardPacksTotalCount,minCardsCount:a.minCardsCount,maxCardsCount:a.maxCardsCount});case"packs/SET_PAGE":return Object(M.a)({},e,{page:a.page,pageCount:a.pageCount});case"packs/SET_RANGE":return Object(M.a)({},e,{cardPacks:a.cardPacks,page:a.page,pageCount:a.pageCount,cardPacksTotalCount:a.cardPacksTotalCount,minCardsCount:a.minCardsCount,maxCardsCount:a.maxCardsCount});default:return e}},cardsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pa,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"cards/SET_CARDS":return Object(M.a)({},e,{},a.data,{id:a.id});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fa,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"APP/INITIALIZE-APP":return Object(M.a)({},e,{isInitialized:a.isInitialized});default:return Object(M.a)({},e)}}}),Ba=Object(Wa.d)(Ya,Object(Wa.a)(za.a));window.store=Ba,o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(i.a,{store:Ba},r.a.createElement(Ua,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,a,t){e.exports={cards_wrapper:"Learn_cards_wrapper__3oG6C"}}},[[183,1,2]]]);
//# sourceMappingURL=main.5f5f9b96.chunk.js.map