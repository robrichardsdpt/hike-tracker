(this["webpackJsonphike-tracker-react"]=this["webpackJsonphike-tracker-react"]||[]).push([[0],{172:function(e,t,a){},207:function(e,t,a){},243:function(e,t,a){},252:function(e,t,a){},253:function(e,t,a){},272:function(e,t,a){},273:function(e,t,a){},274:function(e,t,a){},275:function(e,t,a){},276:function(e,t,a){},409:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(42),s=a.n(i),c=(a(243),a(231)),r=a(20),o=a(21),l=a(87),d=a(233),h=a(1),j=function(e){var t=e.user,a=e.component,n=e.render,i=Object(d.a)(e,["user","component","render"]);return t&&n?Object(h.jsx)(o.b,Object(l.a)(Object(l.a)({},i),{},{render:n})):Object(h.jsx)(o.b,Object(l.a)(Object(l.a)({},i),{},{render:function(e){return t?Object(h.jsx)(a,Object(l.a)({},e)):Object(h.jsx)(o.a,{to:"/"})}}))},u=a(153),b=(a(252),function(e){var t=e.variant,a=e.heading,i=e.message,s=Object(n.useState)(!0),c=Object(r.a)(s,2),o=c[0],l=c[1];Object(n.useEffect)((function(){setInterval((function(){return l(!1)}),3e3)}),[]);return Object(h.jsx)(u.a,{dismissible:!0,show:o,variant:t,onClose:function(){return l(!1)},children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(u.a.Heading,{children:a}),Object(h.jsx)("p",{className:"alert-body",children:i})]})})}),m=a(230),O=a(28),f=a(128),p=(a(253),Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)(O.b,{to:"/home",className:"navbar-link",children:"home"}),Object(h.jsx)(O.b,{to:"/create",className:"navbar-link",children:"create"}),Object(h.jsx)(O.b,{to:"/profile",className:"navbar-link",children:"profile"}),Object(h.jsx)(O.b,{to:"/sign-out",className:"navbar-link",children:"sign out"})]})),x=Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)(O.b,{to:"/sign-up",className:"navbar-link",children:"Sign Up"}),Object(h.jsx)(O.b,{to:"/sign-in",className:"navbar-link",children:"Sign In"})]}),g=function(e){var t=e.user;return Object(h.jsxs)(f.a,{className:"navbar",expand:"md",children:[Object(h.jsx)(O.b,{to:"/home",className:"navbar-link",children:"a hike from boston."}),Object(h.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(f.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(m.a,{className:"ml-auto",children:[t&&Object(h.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),t?p:x]})})]})},v=a(43),k=a(70),w=a(71),N=a(72),y=a(80),C="https://aqueous-atoll-85096.herokuapp.com",T="http://localhost:4741",S="localhost"===window.location.hostname?T:C,E=a(40),P=a.n(E),I=function(e){return P()({url:S+"/sign-in",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},A="Succesfully registered! You've been signed in as well.",M="Registration failed. All fields need to be filled out, Email may be taken, or Passwords may not match.",H="Welcome!",D="Failed to sign in. Check your email and password and try again.",U="Come back soon!",W=a(19),F=(a(272),function(e){Object(N.a)(a,e);var t=Object(y.a)(a);function a(){var e;return Object(k.a)(this,a),(e=t.call(this)).handleChange=function(t){return e.setState(Object(v.a)({},t.target.name,t.target.value))},e.onSignUp=function(t){t.preventDefault();var a,n=e.props,i=n.msgAlert,s=n.history,c=n.setUser;(a=e.state,P()({method:"POST",url:S+"/sign-up",data:{credentials:{firstName:a.firstName,lastName:a.lastName,role:a.role,email:a.email,password:a.password,password_confirmation:a.passwordConfirmation}}})).then((function(){return I(e.state)})).then((function(e){return c(e.data.user)})).then((function(){return i({heading:"Sign Up Success",message:A,variant:"success"})})).then((function(){return s.push("/home")})).catch((function(t){e.setState({email:"",password:"",passwordConfirmation:""}),i({heading:"Sign Up Failed with error: "+t.message,message:M,variant:"danger"})}))},e.state={firstName:"",lastName:"",role:"",email:"",password:"",passwordConfirmation:""},e}return Object(w.a)(a,[{key:"render",value:function(){var e=this.state,t=(e.firstName,e.lastName,e.role,e.email),a=e.password,n=e.passwordConfirmation;return Object(h.jsx)("div",{className:"row sign-up",children:Object(h.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5 mb-5",children:[Object(h.jsx)("h3",{children:"Sign Up"}),Object(h.jsxs)(W.a,{onSubmit:this.onSignUp,children:[Object(h.jsxs)(W.a.Group,{controlId:"email",children:[Object(h.jsx)(W.a.Label,{children:"Email address"}),Object(h.jsx)(W.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(h.jsxs)(W.a.Group,{controlId:"password",children:[Object(h.jsx)(W.a.Label,{children:"Password"}),Object(h.jsx)(W.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(h.jsxs)(W.a.Group,{controlId:"passwordConfirmation",children:[Object(h.jsx)(W.a.Label,{children:"Password Confirmation"}),Object(h.jsx)(W.a.Control,{required:!0,name:"passwordConfirmation",value:n,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(h.jsx)("button",{className:"sign-up-button",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component)),L=Object(o.f)(F),G=(a(273),function(e){Object(N.a)(a,e);var t=Object(y.a)(a);function a(){var e;return Object(k.a)(this,a),(e=t.call(this)).handleChange=function(t){return e.setState(Object(v.a)({},t.target.name,t.target.value))},e.onSignIn=function(t){t.preventDefault();var a=e.props,n=a.msgAlert,i=a.history,s=a.setUser;I(e.state).then((function(e){return s(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:H,variant:"success"})})).then((function(){return i.push("/home")})).catch((function(t){e.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+t.message,message:D,variant:"danger"})}))},e.state={email:"",password:""},e}return Object(w.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(h.jsx)("div",{className:"row sign-in",children:Object(h.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5 mb-5",children:[Object(h.jsx)("h3",{children:"Sign In"}),Object(h.jsxs)(W.a,{onSubmit:this.onSignIn,children:[Object(h.jsxs)(W.a.Group,{controlId:"email",children:[Object(h.jsx)(W.a.Label,{children:"Email address"}),Object(h.jsx)(W.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(h.jsxs)(W.a.Group,{controlId:"password",children:[Object(h.jsx)(W.a.Label,{children:"Password"}),Object(h.jsx)(W.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(h.jsx)("button",{className:"sign-in-button",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component)),R=Object(o.f)(G),Y=function(e){Object(N.a)(a,e);var t=Object(y.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,a=e.history,n=e.clearUser;(function(e){return P()({url:S+"/sign-out",method:"DELETE",headers:{Authorization:"Token token=".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:U,variant:"success"})})).finally((function(){return a.push("/")})).finally((function(){return n()}))}},{key:"render",value:function(){return""}}]),a}(n.Component),q=Object(o.f)(Y),K=(a(274),a(228)),z=a(155),_=Object(o.f)((function(e){var t=e.user,a=e.show,i=e.setShow,s=Object(n.useState)({oldPassword:"",newPassword:""}),c=Object(r.a)(s,2),o=c[0],l=c[1],d=function(e){e.persist(),l((function(t){var a=Object(v.a)({},e.target.name,e.target.value);return Object.assign({},t,a)}))};return Object(h.jsx)(K.a,{show:a,children:Object(h.jsxs)("div",{className:"change-password",children:[Object(h.jsx)("h3",{children:"Change Password"}),Object(h.jsxs)(W.a,{onSubmit:function(e){e.preventDefault(),function(e,t){return P()({url:S+"/change-password",method:"PATCH",headers:{Authorization:"Token token=".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})}(o,t).then((function(){return i(!1)})).then((function(){return alert("success")})).catch((function(e){alert("error creating password ",e),l({oldPassword:"",newPassword:""})}))},children:[Object(h.jsxs)(W.a.Group,{controlId:"oldPassword",children:[Object(h.jsx)(W.a.Label,{children:"Old password"}),Object(h.jsx)(W.a.Control,{required:!0,name:"oldPassword",value:o.oldPassword,type:"password",placeholder:"Old Password",onChange:d})]}),Object(h.jsxs)(W.a.Group,{controlId:"newPassword",children:[Object(h.jsx)(W.a.Label,{children:"New Password"}),Object(h.jsx)(W.a.Control,{required:!0,name:"newPassword",value:o.newPassword,type:"password",placeholder:"New Password",onChange:d})]}),Object(h.jsx)(z.a,{variant:"primary",type:"submit",children:"Submit"}),Object(h.jsx)(z.a,{variant:"dark",onClick:function(){return i(!1)},children:"Cancel"})]})]})})})),B=(a(275),function(e){var t=e.user,a=e.msgAlert,i=Object(n.useState)({}),s=Object(r.a)(i,2),c=s[0],o=s[1],l=function(e){e.persist(),o((function(t){var a=Object(v.a)({},e.target.name,e.target.value);return Object.assign({},t,a)}))};return console.log(c),Object(h.jsx)("div",{className:"create-hike-container",children:Object(h.jsxs)("form",{id:"create-hike",onSubmit:function(e){e.preventDefault(),P()({url:"".concat(S,"/hikes/"),method:"POST",headers:{Authorization:"Token token=".concat(t.token)},data:{hike:c}}).then((function(){return a({heading:"Hike Created!",variant:"success"})})).then((function(){return o({})})).catch((function(){return a({heading:"Unable to create hike!",variant:"failure"})}))},children:[Object(h.jsx)("h2",{className:"create-hike-title",children:"Create a Hike"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Date:"}),Object(h.jsx)("input",{className:"create-hike-input",name:"date",id:"date",type:"date",onChange:l,placeholder:"When did you go?"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Trails:"}),Object(h.jsx)("input",{className:"create-hike-input",name:"trails",id:"trails",type:"text",onChange:l,placeholder:"What trail did you hit?"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Distance (miles):"}),Object(h.jsx)("input",{className:"create-hike-input",name:"distance",id:"distance",type:"number",step:"0.1",min:"0",onChange:l,placeholder:"How far in miles?"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Elevation (in feet):"}),Object(h.jsx)("input",{className:"create-hike-input",name:"elevation",id:"elevation",type:"number",step:"0.1",min:"0",onChange:l,placeholder:"How high in feet?"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Time taken(HH:MM:SS):"}),Object(h.jsx)("input",{className:"create-hike-input",name:"timeTaken",id:"timeTaken",type:"text",onChange:l,placeholder:"How long in HH:MM:SS?"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Mountains Climbed:"}),Object(h.jsx)("input",{className:"create-hike-input",name:"mountainsClimbed",id:"mountainsClimbed",type:"text",onChange:l,placeholder:"Which peaks?"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Who did you hike with?:"}),Object(h.jsx)("input",{className:"create-hike-input",name:"hikedWith",type:"text",onChange:l,placeholder:"Who'd you drag along?"}),Object(h.jsx)("label",{className:"create-hike-label",children:"Elevation"}),Object(h.jsx)("textarea",{className:"create-hike-input",name:"trailNotes",onChange:l,placeholder:"Any field notes?"}),Object(h.jsx)("button",{className:"create-hike-button",children:"Create Hike!"})]})})}),J=(a(276),a(211)),V=a.n(J),Q=(a(172),function(e){var t=e.hike,a=e.user,n=e.profile;return console.log(n),Object(h.jsxs)("div",{className:"hike-card",children:[Object(h.jsxs)("div",{className:"date-title",children:[Object(h.jsx)("div",{children:Object(h.jsx)("h3",{children:Object(h.jsx)(V.a,{format:"MM/DD/YYYY",children:t.date})})}),Object(h.jsx)("div",{children:Object(h.jsxs)("h4",{children:["    ",t.owner.email===a.email&&Object(h.jsx)("div",{className:"click-to-edit",onClick:function(){console.log("click")},children:"..."})]})})]}),t.picture&&Object(h.jsx)("div",{className:"hike-picture-container"}),Object(h.jsxs)("div",{className:"hike-information",children:[!1===n&&Object(h.jsxs)("div",{className:"hike-information-row",children:[Object(h.jsx)("div",{className:"hike-information-label",children:"HIKER:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.owner.email})]}),Object(h.jsxs)("div",{className:"hike-information-row",children:[Object(h.jsx)("div",{className:"hike-information-label",children:"TRAIL:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.trails})]}),t.mountainsClimbed&&Object(h.jsxs)("div",{className:"hike-information-row",children:[Object(h.jsx)("div",{className:"hike-information-label",children:"SUMMITS:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.mountainsClimbed})]}),t.distance&&Object(h.jsxs)("div",{className:"hike-information-row",children:[Object(h.jsx)("div",{className:"hike-information-label",children:"DISTANCE:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.distance})]}),t.elevation&&Object(h.jsxs)("div",{className:"hike-information-row",children:[Object(h.jsx)("div",{className:"hike-information-label",children:"ELEVATION GAIN:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.elevation})]}),t.timeTaken&&Object(h.jsxs)("div",{className:"hike-information-row",children:[Object(h.jsx)("div",{className:"hike-information-label",children:"TIME TAKEN:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.timeTaken})]}),t.hikedWith&&Object(h.jsxs)("div",{className:"hike-information-row",children:[Object(h.jsx)("div",{className:"hike-information-label",children:"HIKED WITH:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.hikedWith})]}),t.trailNotes&&Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"hike-information-label",children:"TRAIL NOTES:"}),Object(h.jsx)("div",{className:"hike-information-data",children:t.trailNotes})]})]})]})}),X=function(e){var t=e.user,a=Object(n.useState)([]),i=Object(r.a)(a,2),s=i[0],c=i[1];Object(n.useEffect)((function(){P()({url:"".concat(S,"/hikes/"),method:"GET",params:{owner:"all"}}).then((function(e){return c(e.data.hikes)}))}),[]);var o=s.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(Q,{hike:e,user:t,profile:!1})},e._id)}));return Object(h.jsx)("div",{className:"hike-grid",children:o})},Z=function(e){var t=e.user;e.msgAlert;return Object(h.jsx)("div",{className:"home",children:Object(h.jsx)(X,{user:t})})},$=a(73),ee=a(415),te=a(232),ae=a(225),ne=function(e){var t=e.hikes,a=e.totalPeaks,n=t.length,i=[{name:"Remaining",value:a-n},{name:"Completed",value:n}],s=["#0088FE","#00C49F"],c=Math.PI/180;return Object(h.jsxs)("div",{children:[Object(h.jsx)(ee.a,{width:200,height:200,children:Object(h.jsx)(te.a,{data:i,cx:100,cy:100,labelLine:!1,label:function(e){var t=e.cx,a=e.cy,n=e.midAngle,i=e.innerRadius,s=e.outerRadius,r=e.percent,o=(e.index,i+.5*(s-i)),l=t+o*Math.cos(-n*c),d=a+o*Math.sin(-n*c);return Object(h.jsx)("text",{x:l,y:d,fill:"white",textAnchor:l>t?"start":"end",dominantBaseline:"central",children:"".concat((100*r).toFixed(0),"%")})},outerRadius:80,fill:"#8884d8",dataKey:"value",children:i.map((function(e,t){return Object(h.jsx)(ae.a,{fill:s[t%s.length]},"cell-".concat(t))}))})}),Math.floor(n/a*100)," % toward goal"]})},ie=a.p+"static/media/amc4000.f8ab384b.gif",se=(a(93),function(e){var t=e.mountainsTable,a=$.listOfNH4k.filter((function(e){return t[e]>=1})),n=a.length?"You have hiked ".concat(a.length,"/48 4000 foot mountains in NH's White Mountains!"):"Get started on your 48!";return Object(h.jsxs)("div",{className:"patch-card",children:[Object(h.jsx)("h2",{children:"NH 48 4k footers"}),48!==a.length&&Object(h.jsx)(ne,{hikes:a,totalPeaks:48}),48===a.length&&Object(h.jsx)("div",{className:"patch-image-container",children:Object(h.jsx)("img",{src:ie,className:"patch-image",alt:"patch"})}),n]})}),ce=a.p+"static/media/ne67.11ccdc14.jpg",re=function(e){var t=e.mountainsTable,a=$.listOfNE4k.filter((function(e){return t[e]>=1})),n=a.length?"You have hiked ".concat(a.length,"/67 4000 foot mountains in New England!"):"Get started on your 67!";return Object(h.jsxs)("div",{className:"patch-card",children:[Object(h.jsx)("h2",{children:"NE 67 4k footers"}),67!==a.length&&Object(h.jsx)(ne,{hikes:a,totalPeaks:67}),67===a.length&&Object(h.jsx)("div",{className:"patch-image-container",children:Object(h.jsx)("img",{src:ce,className:"patch-image",alt:"patch"})}),n]})},oe=a.p+"static/media/ne100.9317fc08.jpg",le=function(e){var t=e.mountainsTable,a=$.listOf100.filter((function(e){return t[e]>=1})),n=a.length?"You have hiked ".concat(a.length,"/100 of the hundred highest in New England!"):"Get started on your 100!";return Object(h.jsxs)("div",{className:"patch-card",children:[Object(h.jsx)("h2",{children:"NE 100 Highest"}),100!==a.length&&Object(h.jsx)(ne,{hikes:a,totalPeaks:100}),100===a.length&&Object(h.jsx)("div",{className:"patch-image-container",children:Object(h.jsx)("img",{src:oe,className:"patch-image",alt:"patch"})}),n]})},de=a.p+"static/media/washington.689708b7.jpeg",he=function(e){var t=e.mountainsTable;return Object(h.jsxs)("div",{className:"patch-card",children:[Object(h.jsx)("h2",{children:"Mount Washington"}),t.washington&&Object(h.jsx)("div",{className:"patch-image-container",children:Object(h.jsx)("img",{src:de,className:"patch-image",alt:"patch"})}),t.washington&&Object(h.jsx)("div",{children:"You have hiked Mount Washington.  This is the highest summit in the Northeast!"})]})},je=function(e){var t=e.completed,a=e.total,n=[{name:"Remaining",value:a-t},{name:"Completed",value:t}],i=["#FE8800","#9FC49F"],s=Math.PI/180;return Object(h.jsxs)("div",{children:[Object(h.jsx)(ee.a,{width:200,height:200,children:Object(h.jsx)(te.a,{data:n,cx:100,cy:100,labelLine:!1,label:function(e){var t=e.cx,a=e.cy,n=e.midAngle,i=e.innerRadius,c=e.outerRadius,r=e.percent,o=(e.index,i+.5*(c-i)),l=t+o*Math.cos(-n*s),d=a+o*Math.sin(-n*s);return Object(h.jsx)("text",{x:l,y:d,fill:"white",textAnchor:l>t?"start":"end",dominantBaseline:"central",children:"".concat((100*r).toFixed(0),"%")})},outerRadius:80,fill:"#8884d8",dataKey:"value",children:n.map((function(e,t){return Object(h.jsx)(ae.a,{fill:i[t%i.length]},"cell-".concat(t))}))})}),Math.floor(t/a*100)," % toward goal"]})},ue=function(e){var t=e.totalDistance;return Object(h.jsxs)("div",{className:"patch-card",children:[Object(h.jsx)("h2",{children:"Century Patch"}),t>=100&&Object(h.jsx)("div",{className:"patch-image-container",children:Object(h.jsx)("img",{src:ce,className:"patch-image",alt:"patch"})}),100!==t&&Object(h.jsx)(je,{completed:t,total:100}),100!==t&&Object(h.jsxs)("div",{children:["You have ",100-t," to go."]}),"Keep hiking!"]})},be=function(e){var t=e.totalElevation;return Object(h.jsxs)("div",{className:"patch-card",children:[Object(h.jsx)("h2",{children:"Elevation Century Patch"}),t>=1e5&&Object(h.jsx)("div",{className:"patch-image-container",children:Object(h.jsx)("img",{src:ce,className:"patch-image",alt:"patch"})}),1e5!==t&&Object(h.jsx)(je,{completed:t,total:1e5}),1e5!==t&&Object(h.jsxs)("div",{children:["You have ",1e5-t," to go."]}),"Keep hiking!"]})},me=function(e){var t=e.mountainsTable,a=e.totalDistance,n=e.totalElevation;return console.log(t),Object(h.jsxs)("div",{className:"patch-grid",children:[Object(h.jsx)(se,{mountainsTable:t}),Object(h.jsx)(re,{mountainsTable:t}),Object(h.jsx)(le,{mountainsTable:t}),t.washington?Object(h.jsx)(he,{mountainsTable:t}):"",Object(h.jsx)(ue,{totalDistance:a}),Object(h.jsx)(be,{totalElevation:n})]})},Oe=a(89),fe=(a(207),function(e){var t=e.user,a=e.hikes;Object(Oe.mountainsClimbedToTable)(a);var n=Object(Oe.hikeTotalDistance)(a),i=Object(Oe.hikeTotalElevation)(a);return Object(h.jsxs)("div",{className:"profile-information",children:[Object(h.jsx)("h3",{children:t.email}),Object(h.jsxs)("h4",{children:["Hikes logged: ",a.length]}),Object(h.jsxs)("h4",{children:["Total distance: ",n," miles "]}),Object(h.jsxs)("h4",{children:["Total distance climbed: ",i," feet"]}),Oe.mountainsTable&&Object(h.jsx)(me,{mountainsTable:Oe.mountainsTable,totalDistance:n,totalElevation:i})]})}),pe=function(e){var t=e.user,a=Object(n.useState)([]),i=Object(r.a)(a,2),s=i[0],c=i[1];Object(n.useEffect)((function(){P()({url:"".concat(S,"/hikes/"),method:"GET",params:{owner:t._id}}).then((function(e){return c(e.data.hikes)}))}),[]);var o=s.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(Q,{hike:e,user:t,profile:!0})},e._id)}));return Object(h.jsxs)("div",{className:"profile-container",children:[Object(h.jsx)("div",{className:"profile-info",children:Object(h.jsx)(fe,{user:t,hikes:s})}),Object(h.jsx)("div",{className:"hike-grid",children:o})]})},xe=a.p+"static/media/Fallroad.72096ce9.jpg",ge=a.p+"static/media/Presidentials.99fa18b7.jpg",ve=a.p+"static/media/Waterfall.9c75224f.jpg",ke=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)([]),l=Object(r.a)(s,2),d=l[0],u=l[1],m=function(){return i(null)},O=function(e){var t=e.heading,a=e.message,n=e.variant;u([].concat(Object(c.a)(d),[{heading:t,message:a,variant:n}]))},f=[ge,xe,ve],p=Math.floor(Math.random()*f.length),x={backgroundImage:"url(".concat(f[p],")"),height:"90vh",margin:"0 auto",overflow:"scroll",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100%"};return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)(g,{user:a}),Object(h.jsxs)("main",{style:x,children:[Object(h.jsx)(o.b,{path:"/sign-up",render:function(){return Object(h.jsx)(L,{msgAlert:O,setUser:i})}}),Object(h.jsx)(o.b,{path:"/sign-in",render:function(){return Object(h.jsx)(R,{msgAlert:O,setUser:i})}}),Object(h.jsx)(j,{user:a,path:"/home",render:function(){return Object(h.jsx)(Z,{msgAlert:O,clearUser:m,user:a})}}),Object(h.jsx)(j,{user:a,path:"/create",render:function(){return Object(h.jsx)(B,{msgAlert:O,user:a})}}),Object(h.jsx)(j,{user:a,path:"/sign-out",render:function(){return Object(h.jsx)(q,{msgAlert:O,clearUser:m,user:a})}}),Object(h.jsx)(j,{user:a,path:"/change-password",render:function(){return Object(h.jsx)(_,{msgAlert:O,user:a})}}),Object(h.jsx)(j,{user:a,path:"/profile",render:function(){return Object(h.jsx)(pe,{user:a})}}),d.map((function(e,t){return Object(h.jsx)(b,{heading:e.heading,variant:e.variant,message:e.message},t)}))]})]})};a(408);s.a.render(Object(h.jsx)(O.a,{children:Object(h.jsx)(ke,{})}),document.getElementById("root"))},73:function(e,t){var a=["washington","adams","jefferson","monroe","madison","lafayette","lincoln","south twin","carter dome","moosilauke","eisenhower","north twin","carrigain","bond","middle carter","west bond","garfield","liberty","south carter","wildcat a","hancock","south kinsman","field","osceola","flume","south hancock","pierce","north kinsman","willey","bondcliff","zealand","north tripyramid","cabot","east osceola","middle tripyramid","cannon","hale","jackson","tom","wildcat d","moriah","passaconaway","owl's head","galehead","whiteface","waumbek","isolation","tecumseh"],n=["baxter","hamlin","sugarloaf","crocker","old speck","north brother","bigelow west","saddleback","bigelow avery","abraham","south crocker","saddleback horn","redington","spaulding"],i=["mansfield","killington","camel's hump","ellen","abraham"],s=[].concat(a,i,n),c=[].concat(a,n,i,["sandwich","south brother","snow mountain","pico peak","the bulge","stratton","nancy","the horn","weeks","south weeks","goose eye","vose spur","fort","jay peak","white cap","boundary peak","equinox","mendon peak","east sleeper","bread loaf","peak above the nubble","bigelow, south horn","coe","east kennebago","wilson","big jay","snow","baldpate","kennebago divide","scar ridge","elephant","dorset","cannon balls"]);e.exports={listOfNH4k:a,listOfME4k:n,listOfVT4k:i,listOfNE4k:s,listOf100:c}},89:function(e,t){var a={};console.log(a),e.exports={hikeTotalDistance:function(e){return e.reduce((function(e,t){return e+t.distance}),0)},hikeTotalElevation:function(e){return e.reduce((function(e,t){return e+t.elevation}),0)},mountainsClimbedToTable:function(e){var t=e.map((function(e){return e.mountainsClimbed.toLowerCase()}));for(var n in t.forEach((function(e){return a[e]?a[e]++:a[e]=1})),console.log(a),a)if(n||delete a[n],n.includes(" and ")){for(var i=n.split(" and "),s=0;s<i.length;s++)a[i[s]]=a[n];delete a[n]}else if(n.includes(", ")){for(var c=n.split(", "),r=0;r<c.length;r++)a[c[r]]=a[n];delete a[n]}},mountainsTable:a}},93:function(e,t,a){}},[[409,1,2]]]);
//# sourceMappingURL=main.68891a78.chunk.js.map