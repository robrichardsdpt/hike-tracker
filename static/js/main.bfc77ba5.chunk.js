(this["webpackJsonphike-tracker-react"]=this["webpackJsonphike-tracker-react"]||[]).push([[0],{183:function(e,t,a){},218:function(e,t,a){},256:function(e,t,a){},265:function(e,t,a){},266:function(e,t,a){},285:function(e,t,a){},286:function(e,t,a){},287:function(e,t,a){},322:function(e,t,a){},323:function(e,t,a){},325:function(e,t,a){},326:function(e,t,a){},458:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(45),s=a.n(i),c=(a(256),a(244)),r=a(15),l=a(22),o=a(93),d=a(246),h=a(1),u=function(e){var t=e.user,a=e.component,n=e.render,i=Object(d.a)(e,["user","component","render"]);return t&&n?Object(h.jsx)(l.b,Object(o.a)(Object(o.a)({},i),{},{render:n})):Object(h.jsx)(l.b,Object(o.a)(Object(o.a)({},i),{},{render:function(e){return t?Object(h.jsx)(a,Object(o.a)({},e)):Object(h.jsx)(l.a,{to:"/"})}}))},j=a(162),b=(a(265),function(e){var t=e.variant,a=e.heading,i=e.message,s=Object(n.useState)(!0),c=Object(r.a)(s,2),l=c[0],o=c[1];Object(n.useEffect)((function(){setInterval((function(){return o(!1)}),3e3)}),[]);return Object(h.jsx)(j.a,{dismissible:!0,show:l,variant:t,onClose:function(){return o(!1)},children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(j.a.Heading,{children:a}),Object(h.jsx)("p",{className:"alert-body",children:i})]})})}),m=a(243),O=a(30),p=a(135),f=(a(266),Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)(O.b,{to:"/home",className:"navbar-link",children:"home"}),Object(h.jsx)(O.b,{to:"/create",className:"navbar-link",children:"create"}),Object(h.jsx)(O.b,{to:"/profile",className:"navbar-link",children:"profile"}),Object(h.jsx)(O.b,{to:"/sign-out",className:"navbar-link",children:"sign out"})]})),x=Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)(O.b,{to:"/sign-up",className:"navbar-link",children:"Sign Up"}),Object(h.jsx)(O.b,{to:"/sign-in",className:"navbar-link",children:"Sign In"})]}),g=function(e){var t=e.user;return Object(h.jsxs)(p.a,{className:"navbar",expand:"md",children:[Object(h.jsx)(O.b,{to:"/home",className:"navbar-link",children:"a hike from boston."}),Object(h.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(p.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(m.a,{className:"ml-auto",children:[t&&Object(h.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),t?f:x]})})]})},v=a(35),k=a(76),N=a(77),w=a(78),C=a(86),y="https://stormy-plains-65398.herokuapp.com",T="http://localhost:4741",S="localhost"===window.location.hostname?T:y,E=a(32),P=a.n(E),I=function(e){return P()({url:S+"/sign-in",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},A="Succesfully registered! You've been signed in as well.",H="Registration failed. All fields need to be filled out, Email may be taken, or Passwords may not match.",M="Welcome!",L="Failed to sign in. Check your email and password and try again.",D="Come back soon!",W=a(21),U=(a(285),function(e){Object(w.a)(a,e);var t=Object(C.a)(a);function a(){var e;return Object(k.a)(this,a),(e=t.call(this)).handleChange=function(t){return e.setState(Object(v.a)({},t.target.name,t.target.value))},e.onSignUp=function(t){t.preventDefault();var a,n=e.props,i=n.msgAlert,s=n.history,c=n.setUser;(a=e.state,P()({method:"POST",url:S+"/sign-up",data:{credentials:{firstName:a.firstName,lastName:a.lastName,role:a.role,email:a.email,password:a.password,password_confirmation:a.passwordConfirmation}}})).then((function(){return I(e.state)})).then((function(e){return c(e.data.user)})).then((function(){return i({heading:"Sign Up Success",message:A,variant:"success"})})).then((function(){return s.push("/home")})).catch((function(t){e.setState({email:"",password:"",passwordConfirmation:""}),i({heading:"Sign Up Failed with error: "+t.message,message:H,variant:"danger"})}))},e.state={firstName:"",lastName:"",role:"",email:"",password:"",passwordConfirmation:""},e}return Object(N.a)(a,[{key:"render",value:function(){var e=this.state,t=(e.firstName,e.lastName,e.role,e.email),a=e.password,n=e.passwordConfirmation;return Object(h.jsx)("div",{className:"row sign-up",children:Object(h.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5 mb-5",children:[Object(h.jsx)("h3",{children:"Sign Up"}),Object(h.jsxs)(W.a,{onSubmit:this.onSignUp,children:[Object(h.jsxs)(W.a.Group,{controlId:"email",children:[Object(h.jsx)(W.a.Label,{children:"Email address"}),Object(h.jsx)(W.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(h.jsxs)(W.a.Group,{controlId:"password",children:[Object(h.jsx)(W.a.Label,{children:"Password"}),Object(h.jsx)(W.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(h.jsxs)(W.a.Group,{controlId:"passwordConfirmation",children:[Object(h.jsx)(W.a.Label,{children:"Password Confirmation"}),Object(h.jsx)(W.a.Control,{required:!0,name:"passwordConfirmation",value:n,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(h.jsx)("button",{className:"sign-up-button",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component)),F=Object(l.f)(U),G=(a(286),function(e){Object(w.a)(a,e);var t=Object(C.a)(a);function a(){var e;return Object(k.a)(this,a),(e=t.call(this)).handleChange=function(t){return e.setState(Object(v.a)({},t.target.name,t.target.value))},e.onSignIn=function(t){t.preventDefault();var a=e.props,n=a.msgAlert,i=a.history,s=a.setUser;I(e.state).then((function(e){return s(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:M,variant:"success"})})).then((function(){return i.push("/home")})).catch((function(t){e.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+t.message,message:L,variant:"danger"})}))},e.state={email:"",password:""},e}return Object(N.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(h.jsx)("div",{className:"row sign-in",children:Object(h.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5 mb-5",children:[Object(h.jsx)("h3",{children:"Sign In"}),Object(h.jsxs)(W.a,{onSubmit:this.onSignIn,children:[Object(h.jsxs)(W.a.Group,{controlId:"email",children:[Object(h.jsx)(W.a.Label,{children:"Email address"}),Object(h.jsx)(W.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(h.jsxs)(W.a.Group,{controlId:"password",children:[Object(h.jsx)(W.a.Label,{children:"Password"}),Object(h.jsx)(W.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(h.jsx)("button",{className:"sign-in-button",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component)),Y=Object(l.f)(G),R=function(e){Object(w.a)(a,e);var t=Object(C.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,a=e.history,n=e.clearUser;(function(e){return P()({url:S+"/sign-out",method:"DELETE",headers:{Authorization:"Token token=".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:D,variant:"success"})})).finally((function(){return a.push("/")})).finally((function(){return n()}))}},{key:"render",value:function(){return""}}]),a}(n.Component),K=Object(l.f)(R),z=(a(287),a(241)),q=a(164),B=Object(l.f)((function(e){var t=e.user,a=e.show,i=e.setShow,s=Object(n.useState)({oldPassword:"",newPassword:""}),c=Object(r.a)(s,2),l=c[0],o=c[1],d=function(e){e.persist(),o((function(t){var a=Object(v.a)({},e.target.name,e.target.value);return Object.assign({},t,a)}))};return Object(h.jsx)(z.a,{show:a,children:Object(h.jsxs)("div",{className:"change-password",children:[Object(h.jsx)("h3",{children:"Change Password"}),Object(h.jsxs)(W.a,{onSubmit:function(e){e.preventDefault(),function(e,t){return P()({url:S+"/change-password",method:"PATCH",headers:{Authorization:"Token token=".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})}(l,t).then((function(){return i(!1)})).then((function(){return alert("success")})).catch((function(e){alert("error creating password ",e),o({oldPassword:"",newPassword:""})}))},children:[Object(h.jsxs)(W.a.Group,{controlId:"oldPassword",children:[Object(h.jsx)(W.a.Label,{children:"Old password"}),Object(h.jsx)(W.a.Control,{required:!0,name:"oldPassword",value:l.oldPassword,type:"password",placeholder:"Old Password",onChange:d})]}),Object(h.jsxs)(W.a.Group,{controlId:"newPassword",children:[Object(h.jsx)(W.a.Label,{children:"New Password"}),Object(h.jsx)(W.a.Control,{required:!0,name:"newPassword",value:l.newPassword,type:"password",placeholder:"New Password",onChange:d})]}),Object(h.jsx)(q.a,{variant:"primary",type:"submit",children:"Submit"}),Object(h.jsx)(q.a,{variant:"dark",onClick:function(){return i(!1)},children:"Cancel"})]})]})})})),_=a(223),J=a.n(_),V=(a(322),function(e){var t=e.user,a=e.msgAlert,i=Object(n.useState)({}),s=Object(r.a)(i,2),c=s[0],l=s[1],o={bucketName:"hike-tracker",region:"us-east-2",accessKeyId:"AKIAIT5L3BM622WTYWYQ",secretAccessKey:"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"},d=new J.a(o),u=function(e){e.persist(),l((function(t){var a=Object(v.a)({},e.target.name,e.target.value);return Object.assign({},t,a)}))};return console.log(c),Object(h.jsx)("div",{className:"create-hike-container",children:Object(h.jsxs)("form",{id:"create-hike",onSubmit:function(e){e.preventDefault(),P()({url:"".concat(S,"/hikes/"),method:"POST",headers:{Authorization:"Token token=".concat(t.token)},data:{hike:c}}).then((function(){return a({heading:"Hike Created!",variant:"success"})})).then((function(){return l({})})).catch((function(){return a({heading:"Unable to create hike!",variant:"failure"})}))},children:[Object(h.jsx)("h2",{className:"create-hike-title",children:"Create a Hike"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Date:"}),Object(h.jsx)("input",{className:"create-hike-input",name:"date",id:"date",type:"date",onChange:u,placeholder:"When did you go?"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Trails:"}),Object(h.jsx)("input",{className:"create-hike-input",name:"trails",id:"trails",type:"text",onChange:u,placeholder:"What trail did you hit?"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Distance (miles):"}),Object(h.jsx)("input",{className:"create-hike-input",name:"distance",id:"distance",type:"number",step:"0.1",min:"0",onChange:u,placeholder:"How far in miles?"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Elevation (in feet):"}),Object(h.jsx)("input",{className:"create-hike-input",name:"elevation",id:"elevation",type:"number",step:"0.1",min:"0",onChange:u,placeholder:"How high in feet?"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Time taken(HH:MM:SS):"}),Object(h.jsx)("input",{className:"create-hike-input",name:"timeTaken",id:"timeTaken",type:"text",onChange:u,placeholder:"How long in HH:MM:SS?"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Mountains Climbed:"}),Object(h.jsx)("input",{className:"create-hike-input",name:"mountainsClimbed",id:"mountainsClimbed",type:"text",onChange:u,placeholder:"Which peaks?"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Who did you hike with?:"}),Object(h.jsx)("input",{className:"create-hike-input",name:"hikedWith",type:"text",onChange:u,placeholder:"Who'd you drag along?"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Add a picture:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{className:"create-hike-input",name:"picture",type:"file",onChange:function(e){var t=e.target.files[0];d.uploadFile(t).then((function(t){return l((function(a){var n=Object(v.a)({},e.target.name,t.location);return Object.assign({},a,n)}))})).catch((function(e){return console.error(e)}))}}),Object(h.jsx)("label",{className:"create-hike-label",children:"Trail Notes:"}),Object(h.jsx)("textarea",{className:"create-hike-input",name:"trailNotes",onChange:u,placeholder:"Any field notes?"}),Object(h.jsx)("button",{className:"create-hike-button",children:"Create Hike!"})]})})}),Q=(a(323),a(224)),Z=a.n(Q),X=(a(183),function(e){var t=e.hike,a=e.user,n=e.profile,i=e.handleUpdateClick;return console.log(n),Object(h.jsxs)("div",{className:"hike-card",children:[Object(h.jsxs)("div",{className:"date-title",children:[Object(h.jsx)("div",{children:Object(h.jsx)("h3",{children:Object(h.jsx)(Z.a,{format:"MM/DD/YYYY",children:t.date})})}),Object(h.jsx)("div",{children:Object(h.jsxs)("h4",{children:["    ",t.owner.email===a.email&&Object(h.jsx)("div",{className:"click-to-edit",id:t._id,onClick:i,children:"..."})]})})]}),t.picture&&Object(h.jsx)("div",{className:"hike-picture-container"}),Object(h.jsxs)("div",{className:"hike-information",children:[!1===n&&Object(h.jsxs)("div",{className:"hike-information-row",children:[Object(h.jsx)("div",{className:"hike-information-label",children:"HIKER:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.owner.email})]}),Object(h.jsxs)("div",{className:"hike-information-row",children:[Object(h.jsx)("div",{className:"hike-information-label",children:"TRAIL:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.trails})]}),t.mountainsClimbed&&Object(h.jsxs)("div",{className:"hike-information-row",children:[Object(h.jsx)("div",{className:"hike-information-label",children:"SUMMITS:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.mountainsClimbed})]}),t.distance&&Object(h.jsxs)("div",{className:"hike-information-row",children:[Object(h.jsx)("div",{className:"hike-information-label",children:"DISTANCE:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.distance})]}),t.elevation&&Object(h.jsxs)("div",{className:"hike-information-row",children:[Object(h.jsx)("div",{className:"hike-information-label",children:"ELEVATION GAIN:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.elevation})]}),t.timeTaken&&Object(h.jsxs)("div",{className:"hike-information-row",children:[Object(h.jsx)("div",{className:"hike-information-label",children:"TIME TAKEN:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.timeTaken})]}),t.hikedWith&&Object(h.jsxs)("div",{className:"hike-information-row",children:[Object(h.jsx)("div",{className:"hike-information-label",children:"HIKED WITH:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.hikedWith})]}),t.trailNotes&&Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"hike-information-label",children:"TRAIL NOTES:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.trailNotes})]})]})]})}),$=(a(325),function(e){var t=e.user,a=e.hikeId,i=e.show,s=e.handleClose,c=Object(n.useState)({}),l=Object(r.a)(c,2),o=l[0],d=l[1],u=Object(n.useState)(!1),j=Object(r.a)(u,2),b=j[0],m=j[1],O=Object(n.useState)(!1),p=Object(r.a)(O,2),f=p[0],x=p[1],g=function(e){e.persist(),d((function(t){var a=Object(v.a)({},e.target.name,e.target.value);return Object.assign({},t,a)}))};return Object(n.useEffect)((function(){P()({url:"".concat(S,"/hikes/").concat(a),method:"GET",headers:{Authorization:"Token token=".concat(t.token)}}).then((function(e){return d(e.data.hike)}))}),[f]),console.log(o),Object(h.jsx)("div",{children:Object(h.jsxs)(z.a,{show:i,onHide:s,className:"edit-hike-container",children:[Object(h.jsx)(z.a.Header,{closeButton:!0,className:"edit-hike-title",children:Object(h.jsx)(z.a.Title,{children:"Edit Hike"})}),Object(h.jsxs)(z.a.Body,{className:"edit-hike-body",children:[Object(h.jsxs)("form",{id:"edit-hike",onSubmit:function(e){e.preventDefault(),P()({url:"".concat(S,"/hikes/").concat(a),method:"PATCH",headers:{Authorization:"Token token=".concat(t.token)},data:{hike:o}}).then((function(){return s()})).then((function(){return x(!0)})).catch((function(e){return console.error(e)}))},children:[Object(h.jsx)("label",{className:"edit-hike-label",children:"Date:"}),Object(h.jsx)("input",{className:"edit-hike-input",name:"date",id:"date",type:"date",onChange:g,value:o.date}),Object(h.jsx)("label",{className:"edit-hike-label",children:"Trails:"}),Object(h.jsx)("input",{className:"edit-hike-input",name:"trails",id:"trails",type:"text",onChange:g,value:o.trails}),Object(h.jsx)("label",{className:"edit-hike-label",children:"Distance (miles):"}),Object(h.jsx)("input",{className:"edit-hike-input",name:"distance",id:"distance",type:"number",step:"0.1",min:"0",onChange:g,value:o.distance}),Object(h.jsx)("label",{className:"edit-hike-label",children:"Elevation (in feet):"}),Object(h.jsx)("input",{className:"edit-hike-input",name:"elevation",id:"elevation",type:"number",step:"0.1",min:"0",onChange:g,value:o.elevation}),Object(h.jsx)("label",{className:"edit-hike-label",children:"Time taken(HH:MM:SS):"}),Object(h.jsx)("input",{className:"edit-hike-input",name:"timeTaken",id:"timeTaken",type:"text",onChange:g,value:o.timeTaken}),Object(h.jsx)("label",{className:"edit-hike-label",children:"Mountains Climbed:"}),Object(h.jsx)("input",{className:"edit-hike-input",name:"mountainsClimbed",id:"mountainsClimbed",type:"text",onChange:g,value:o.mountainsClimbed}),Object(h.jsx)("label",{className:"edit-hike-label",children:"Who did you hike with?:"}),Object(h.jsx)("input",{className:"edit-hike-input",name:"hikedWith",type:"text",onChange:g,value:o.hikedWith}),Object(h.jsx)("label",{className:"edit-hike-label",children:"Trail Notes:"}),Object(h.jsx)("textarea",{className:"edit-hike-input",name:"trailNotes",onChange:g,value:o.trailNotes}),Object(h.jsx)("input",{type:"submit",className:"edit-hike-button",value:"Save Changes"})]}),Object(h.jsxs)("div",{className:"delete-button-container",children:[Object(h.jsx)("button",{className:"edit-hike-button-delete",onClick:function(){return m(!0)},children:"Delete"}),b&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{className:"edit-hike-button-delete warning",onClick:function(e){e.preventDefault(),P()({url:"".concat(S,"/hikes/").concat(a),method:"DELETE",headers:{Authorization:"Token token=".concat(t.token)}}).then((function(){return m(!0)})).then((function(){return s()})).catch((function(e){return console.error(e)}))},children:"Confirm Delete!"}),Object(h.jsx)("button",{className:"edit-hike-button-delete",onClick:function(){return m(!1)},children:"Cancel"})]})]})]})]})})}),ee=a.p+"static/media/SearchLogo.b1f781b9.svg",te=(a(326),function(e){var t=e.handleSearchContents;return Object(h.jsxs)("div",{className:"search-bar-container",children:[Object(h.jsx)("img",{src:ee}),Object(h.jsx)("input",{type:"text",onChange:t,className:"search-input"})]})}),ae=function(e){var t=e.user,a=Object(n.useState)([]),i=Object(r.a)(a,2),s=i[0],c=i[1],l=Object(n.useState)(),o=Object(r.a)(l,2),d=o[0],u=o[1],j=Object(n.useState)(!1),b=Object(r.a)(j,2),m=b[0],O=b[1],p=Object(n.useState)(""),f=Object(r.a)(p,2),x=f[0],g=f[1],v=function(e){u(e.target.id),O(!0),console.log(e.target.id)};Object(n.useEffect)((function(){P()({url:"".concat(S,"/hikes/"),method:"GET",params:{owner:"all"}}).then((function(e){return c(e.data.hikes)}))}),[m]);var k=x.toLowerCase(),N=s.filter((function(e){var t,a,n;return(null===(t=e.mountainsClimbed)||void 0===t?void 0:t.toLowerCase().includes(k))||e.trails.toLowerCase().includes(k)||(null===(a=e.hikedWith)||void 0===a?void 0:a.toLowerCase().includes(k))||(null===(n=e.trailNotes)||void 0===n?void 0:n.toLowerCase().includes(k))})).map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(X,{hike:e,user:t,profile:!1,setHikeId:u,handleUpdateClick:v})},e._id)}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"search-container",children:Object(h.jsx)(te,{handleSearchContents:function(e){g(e.target.value)}})}),Object(h.jsx)("div",{className:"hike-grid",children:N}),d&&Object(h.jsx)($,{show:m,handleClose:function(){return O(!1)},setHikeId:u,hikeId:d,user:t})]})},ne=function(e){var t=e.user;e.msgAlert;return Object(h.jsx)("div",{className:"home",children:Object(h.jsx)(ae,{user:t})})},ie=a(79),se=a(465),ce=a(245),re=a(238),le=function(e){var t=e.hikes,a=e.totalPeaks,n=t.length,i=[{name:"Remaining",value:a-n},{name:"Completed",value:n}],s=["#0088FE","#00C49F"],c=Math.PI/180;return Object(h.jsxs)("div",{children:[Object(h.jsx)(se.a,{width:200,height:200,children:Object(h.jsx)(ce.a,{data:i,cx:100,cy:100,labelLine:!1,label:function(e){var t=e.cx,a=e.cy,n=e.midAngle,i=e.innerRadius,s=e.outerRadius,r=e.percent,l=(e.index,i+.5*(s-i)),o=t+l*Math.cos(-n*c),d=a+l*Math.sin(-n*c);return Object(h.jsx)("text",{x:o,y:d,fill:"white",textAnchor:o>t?"start":"end",dominantBaseline:"central",children:"".concat((100*r).toFixed(0),"%")})},outerRadius:80,fill:"#8884d8",dataKey:"value",children:i.map((function(e,t){return Object(h.jsx)(re.a,{fill:s[t%s.length]},"cell-".concat(t))}))})}),Math.floor(n/a*100)," % toward goal"]})},oe=a.p+"static/media/amc4000.f8ab384b.gif",de=(a(98),function(e){var t=e.mountainsTable,a=ie.listOfNH4k.filter((function(e){return t[e]>=1})),n=a.length?"You have hiked ".concat(a.length,"/48 4000 foot mountains in NH's White Mountains!"):"Get started on your 48!";return Object(h.jsxs)("div",{className:"patch-card",children:[Object(h.jsx)("h2",{children:"NH 48 4k footers"}),48!==a.length&&Object(h.jsx)(le,{hikes:a,totalPeaks:48}),48===a.length&&Object(h.jsx)("div",{className:"patch-image-container",children:Object(h.jsx)("img",{src:oe,className:"patch-image",alt:"patch"})}),n]})}),he=a.p+"static/media/ne67.11ccdc14.jpg",ue=function(e){var t=e.mountainsTable,a=ie.listOfNE4k.filter((function(e){return t[e]>=1})),n=a.length?"You have hiked ".concat(a.length,"/67 4000 foot mountains in New England!"):"Get started on your 67!";return Object(h.jsxs)("div",{className:"patch-card",children:[Object(h.jsx)("h2",{children:"NE 67 4k footers"}),67!==a.length&&Object(h.jsx)(le,{hikes:a,totalPeaks:67}),67===a.length&&Object(h.jsx)("div",{className:"patch-image-container",children:Object(h.jsx)("img",{src:he,className:"patch-image",alt:"patch"})}),n]})},je=a.p+"static/media/ne100.9317fc08.jpg",be=function(e){var t=e.mountainsTable,a=ie.listOf100.filter((function(e){return t[e]>=1})),n=a.length?"You have hiked ".concat(a.length,"/100 of the hundred highest in New England!"):"Get started on your 100!";return Object(h.jsxs)("div",{className:"patch-card",children:[Object(h.jsx)("h2",{children:"NE 100 Highest"}),100!==a.length&&Object(h.jsx)(le,{hikes:a,totalPeaks:100}),100===a.length&&Object(h.jsx)("div",{className:"patch-image-container",children:Object(h.jsx)("img",{src:je,className:"patch-image",alt:"patch"})}),n]})},me=a.p+"static/media/washington.689708b7.jpeg",Oe=function(e){var t=e.mountainsTable;return Object(h.jsxs)("div",{className:"patch-card",children:[Object(h.jsx)("h2",{children:"Mount Washington"}),t.washington&&Object(h.jsx)("div",{className:"patch-image-container",children:Object(h.jsx)("img",{src:me,className:"patch-image",alt:"patch"})}),t.washington&&Object(h.jsx)("div",{children:"You have hiked Mount Washington.  This is the highest summit in the Northeast!"})]})},pe=function(e){var t=e.completed,a=e.total,n=[{name:"Remaining",value:a-t},{name:"Completed",value:t}],i=["#FE8800","#9FC49F"],s=Math.PI/180;return Object(h.jsxs)("div",{children:[Object(h.jsx)(se.a,{width:200,height:200,children:Object(h.jsx)(ce.a,{data:n,cx:100,cy:100,labelLine:!1,label:function(e){var t=e.cx,a=e.cy,n=e.midAngle,i=e.innerRadius,c=e.outerRadius,r=e.percent,l=(e.index,i+.5*(c-i)),o=t+l*Math.cos(-n*s),d=a+l*Math.sin(-n*s);return Object(h.jsx)("text",{x:o,y:d,fill:"white",textAnchor:o>t?"start":"end",dominantBaseline:"central",children:"".concat((100*r).toFixed(0),"%")})},outerRadius:80,fill:"#8884d8",dataKey:"value",children:n.map((function(e,t){return Object(h.jsx)(re.a,{fill:i[t%i.length]},"cell-".concat(t))}))})}),Math.floor(t/a*100)," % toward goal"]})},fe=function(e){var t=e.totalDistance;return Object(h.jsxs)("div",{className:"patch-card",children:[Object(h.jsx)("h2",{children:"Century Patch"}),t>=100&&Object(h.jsx)("div",{className:"patch-image-container",children:Object(h.jsx)("img",{src:he,className:"patch-image",alt:"patch"})}),100!==t&&Object(h.jsx)(pe,{completed:t,total:100}),100!==t&&Object(h.jsxs)("div",{children:["You have ",100-t," to go."]}),"Keep hiking!"]})},xe=function(e){var t=e.totalElevation;return Object(h.jsxs)("div",{className:"patch-card",children:[Object(h.jsx)("h2",{children:"Elevation Century Patch"}),t>=1e5&&Object(h.jsx)("div",{className:"patch-image-container",children:Object(h.jsx)("img",{src:he,className:"patch-image",alt:"patch"})}),1e5!==t&&Object(h.jsx)(pe,{completed:t,total:1e5}),1e5!==t&&Object(h.jsxs)("div",{children:["You have ",1e5-t," to go."]}),"Keep hiking!"]})},ge=function(e){var t=e.mountainsTable,a=e.totalDistance,n=e.totalElevation;return console.log(t),Object(h.jsxs)("div",{className:"patch-grid",children:[Object(h.jsx)(de,{mountainsTable:t}),Object(h.jsx)(ue,{mountainsTable:t}),Object(h.jsx)(be,{mountainsTable:t}),t.washington?Object(h.jsx)(Oe,{mountainsTable:t}):"",Object(h.jsx)(fe,{totalDistance:a}),Object(h.jsx)(xe,{totalElevation:n})]})},ve=a(95),ke=(a(218),function(e){var t=e.user,a=e.hikes;Object(ve.mountainsClimbedToTable)(a);var n=Object(ve.hikeTotalDistance)(a),i=Object(ve.hikeTotalElevation)(a);return Object(h.jsxs)("div",{className:"profile-information",children:[Object(h.jsx)("h3",{children:t.email}),Object(h.jsxs)("h4",{children:["Hikes logged: ",a.length]}),Object(h.jsxs)("h4",{children:["Total distance: ",n," miles "]}),Object(h.jsxs)("h4",{children:["Total distance climbed: ",i," feet"]}),ve.mountainsTable&&Object(h.jsx)(ge,{mountainsTable:ve.mountainsTable,totalDistance:n,totalElevation:i})]})}),Ne=function(e){var t=e.user,a=Object(n.useState)([]),i=Object(r.a)(a,2),s=i[0],c=i[1],l=Object(n.useState)(),o=Object(r.a)(l,2),d=o[0],u=o[1],j=Object(n.useState)(!1),b=Object(r.a)(j,2),m=b[0],O=b[1],p=Object(n.useState)(""),f=Object(r.a)(p,2),x=f[0],g=f[1],v=function(e){u(e.target.id),O(!0),console.log(e.target.id)};Object(n.useEffect)((function(){P()({url:"".concat(S,"/hikes/"),method:"GET",params:{owner:t._id}}).then((function(e){return c(e.data.hikes)}))}),[m]);var k=x.toLowerCase(),N=s.filter((function(e){var t,a,n;return(null===(t=e.mountainsClimbed)||void 0===t?void 0:t.toLowerCase().includes(k))||e.trails.toLowerCase().includes(k)||(null===(a=e.hikedWith)||void 0===a?void 0:a.toLowerCase().includes(k))||(null===(n=e.trailNotes)||void 0===n?void 0:n.toLowerCase().includes(k))})).map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(X,{hike:e,user:t,profile:!0,handleUpdateClick:v})},e._id)}));return Object(h.jsxs)("div",{className:"profile-container",children:[Object(h.jsx)("div",{className:"profile-info",children:Object(h.jsx)(ke,{user:t,hikes:s})}),Object(h.jsx)("div",{className:"search-container",children:Object(h.jsx)(te,{handleSearchContents:function(e){g(e.target.value)}})}),Object(h.jsx)("div",{className:"hike-grid",children:N}),d&&Object(h.jsx)($,{show:m,handleClose:function(){return O(!1)},setHikeId:u,hikeId:d,user:t})]})},we=a.p+"static/media/Fallroad.72096ce9.jpg",Ce=a.p+"static/media/Presidentials.99fa18b7.jpg",ye=a.p+"static/media/Waterfall.9c75224f.jpg",Te=a.p+"static/media/huntingtonravine.275b035f.jpg",Se=a.p+"static/media/lincolnwoods.36941192.jpg",Ee=a.p+"static/media/rainbow.fba53408.jpg",Pe=a.p+"static/media/trail.30876bd2.jpg",Ie=a.p+"static/media/washingtoncrawford.bed568f3.jpg",Ae=a.p+"static/media/river.66e9fd67.jpg",He=a.p+"static/media/sunrisepemi.71a2bb3c.jpg",Me=a.p+"static/media/winterwhites.34ada9b5.jpg",Le=a.p+"static/media/bluewinter.9a44beb1.jpg",De=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)([]),o=Object(r.a)(s,2),d=o[0],j=o[1],m=function(){return i(null)},O=function(e){var t=e.heading,a=e.message,n=e.variant;j([].concat(Object(c.a)(d),[{heading:t,message:a,variant:n}]))},p=[Ce,we,ye,Te,Se,Ee,Pe,Ie,Ae,Me,Le,Ae,He],f=Math.floor(Math.random()*p.length),x={backgroundImage:"url(".concat(p[f],")"),height:"90vh",margin:"0 auto",overflow:"scroll",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100%"};return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)(g,{user:a}),Object(h.jsxs)("main",{style:x,children:[Object(h.jsx)(l.b,{path:"/sign-up",render:function(){return Object(h.jsx)(F,{msgAlert:O,setUser:i})}}),Object(h.jsx)(l.b,{path:"/sign-in",render:function(){return Object(h.jsx)(Y,{msgAlert:O,setUser:i})}}),Object(h.jsx)(u,{user:a,path:"/home",render:function(){return Object(h.jsx)(ne,{msgAlert:O,clearUser:m,user:a})}}),Object(h.jsx)(u,{user:a,path:"/create",render:function(){return Object(h.jsx)(V,{msgAlert:O,user:a})}}),Object(h.jsx)(u,{user:a,path:"/sign-out",render:function(){return Object(h.jsx)(K,{msgAlert:O,clearUser:m,user:a})}}),Object(h.jsx)(u,{user:a,path:"/change-password",render:function(){return Object(h.jsx)(B,{msgAlert:O,user:a})}}),Object(h.jsx)(u,{user:a,path:"/profile",render:function(){return Object(h.jsx)(Ne,{user:a})}}),d.map((function(e,t){return Object(h.jsx)(b,{heading:e.heading,variant:e.variant,message:e.message},t)}))]})]})};a(457);s.a.render(Object(h.jsx)(O.a,{children:Object(h.jsx)(De,{})}),document.getElementById("root"))},79:function(e,t){var a=["washington","adams","jefferson","monroe","madison","lafayette","lincoln","south twin","carter dome","moosilauke","eisenhower","north twin","carrigain","bond","middle carter","west bond","garfield","liberty","south carter","wildcat a","hancock","south kinsman","field","osceola","flume","south hancock","pierce","north kinsman","willey","bondcliff","zealand","north tripyramid","cabot","east osceola","middle tripyramid","cannon","hale","jackson","tom","wildcat d","moriah","passaconaway","owl's head","galehead","whiteface","waumbek","isolation","tecumseh"],n=["baxter","hamlin","sugarloaf","crocker","old speck","north brother","bigelow west","saddleback","bigelow avery","abraham","south crocker","saddleback horn","redington","spaulding"],i=["mansfield","killington","camel's hump","ellen","abraham"],s=[].concat(a,i,n),c=[].concat(a,n,i,["sandwich","south brother","snow mountain","pico peak","the bulge","stratton","nancy","the horn","weeks","south weeks","goose eye","vose spur","fort","jay peak","white cap","boundary peak","equinox","mendon peak","east sleeper","bread loaf","peak above the nubble","bigelow, south horn","coe","east kennebago","wilson","big jay","snow","baldpate","kennebago divide","scar ridge","elephant","dorset","cannon balls"]);e.exports={listOfNH4k:a,listOfME4k:n,listOfVT4k:i,listOfNE4k:s,listOf100:c}},95:function(e,t){var a={};console.log(a),e.exports={hikeTotalDistance:function(e){return e.reduce((function(e,t){return e+t.distance}),0)},hikeTotalElevation:function(e){return e.reduce((function(e,t){return e+t.elevation}),0)},mountainsClimbedToTable:function(e){var t=e.map((function(e){var t;return null===(t=e.mountainsClimbed)||void 0===t?void 0:t.toLowerCase()}));for(var n in t.forEach((function(e){return a[e]?a[e]++:a[e]=1})),console.log(a),a)if(n||delete a[n],n.includes(" and ")){for(var i=n.split(" and "),s=0;s<i.length;s++)a[i[s]]=a[n];delete a[n]}else if(n.includes(", ")){for(var c=n.split(", "),r=0;r<c.length;r++)a[c[r]]=a[n];delete a[n]}},mountainsTable:a}},98:function(e,t,a){}},[[458,1,2]]]);
//# sourceMappingURL=main.bfc77ba5.chunk.js.map