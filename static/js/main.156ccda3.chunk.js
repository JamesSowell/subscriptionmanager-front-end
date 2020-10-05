(this["webpackJsonpsubscriptionmanager-front-end"]=this["webpackJsonpsubscriptionmanager-front-end"]||[]).push([[0],{13:function(e,a,t){e.exports=t(21)},18:function(e,a,t){},19:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(10),i=t.n(r),c=(t(18),t(3)),o=t(4),l=t(6),m=t(5),u=function(e){var a=e.onRouteChange;return e.isSignedIn?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return a("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return a("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),s.a.createElement("p",{onClick:function(){return a("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},b=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("https://enigmatic-wave-54910.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.hasOwnProperty("email")&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e("register")},href:"#0",className:"f6 link dim black db pointer"},"Register")))))}}]),t}(s.a.Component),p=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitSignIn=function(){fetch("https://enigmatic-wave-54910.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then((function(e){return e.json()})).then((function(e){e.hasOwnProperty("email")&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={email:"",password:"",name:""},n}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),t}(s.a.Component),d=t(11),h=t(2),f=t(1),g=t(22);var v=function(e){var a=e.addSub,t=e.userEmail,r=Object(n.useState)({id:"",sub_name:"",sub_price:"",user_email:t}),i=Object(h.a)(r,2),c=i[0],o=i[1];return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c.sub_name.trim()&&c.sub_price.trim()&&fetch("https://enigmatic-wave-54910.herokuapp.com/addsubscription",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({subName:c.sub_name,subPrice:c.sub_price,userEmail:c.user_email})}).then((function(e){return e.json()})).then((function(e){e.sub_name&&(console.log(e.sub_name,e.sub_price),a(Object(f.a)(Object(f.a)({},c),{},{id:Object(g.a)()})),o({sub_name:"",sub_price:"",user_email:t}))}))}},s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-15",name:"sub_name",type:"text",placeholder:"Name",value:c.sub_name,onChange:function(e){o(Object(f.a)(Object(f.a)({},c),{},{sub_name:e.target.value}))}}),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-15",name:"sub_name",type:"number",placeholder:"Price per month",value:c.sub_price,onChange:function(e){o(Object(f.a)(Object(f.a)({},c),{},{sub_price:e.target.value}))}}),s.a.createElement("button",{type:"submit"},"submit")))};var E=function(e){var a=e.sub,t=e.removeSub;return s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("ol",{style:{color:"DarkSlateGrey"},className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-15"},a.sub_name," $",a.sub_price),s.a.createElement("button",{onClick:function(){fetch("https://enigmatic-wave-54910.herokuapp.com/deletesubscription",{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({subName:a.sub_name,userEmail:a.user_email})}).then((function(e){return e.json()})).then((function(e){"sub erased"==e&&t(a.id)}))}},"X"))};var w=function(e){var a=e.subs,t=e.removeSub;return s.a.createElement("ul",null,a.map((function(e){return s.a.createElement(E,{key:e.id,sub:e,removeSub:t})})))};var y=function(e){var a=e.addSub,t=e.userEmail,r=Object(n.useState)({id:"",sub_name:"",sub_price:"",user_email:t,isLoaded:!1}),i=Object(h.a)(r,2),c=i[0],o=i[1];return Object(n.useEffect)((function(){fetch("https://enigmatic-wave-54910.herokuapp.com/getsubscriptions",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c.user_email})}).then((function(e){return e.json()})).then((function(e){if(e)for(var a=0;a<e.length;a++)o({sub_name:e[a].sub_name,sub_price:e[a].sub_price,user_email:t});o(Object(f.a)(Object(f.a)({},c),{},{isLoaded:!0}))}))}),[]),Object(n.useEffect)((function(){c.sub_name&&c.sub_price&&(a(Object(f.a)(Object(f.a)({},c),{},{id:Object(g.a)()})),console.log(c.sub_name,c.sub_price,c.user_email))}),[c]),s.a.createElement("div",null,s.a.createElement("legend",{className:"f3 white ba w-15 pa2 fw6 ph0 mh0 pv2  b--black  f6 dib ba bg-black hover-white w-15"},"Your Subscriptions"))};var N=function(e){var a=e.subs,t=Object(n.useState)(0),r=Object(h.a)(t,2),i=r[0],c=r[1];return Object(n.useEffect)((function(){for(var e=0,t=0;t<a.length;t++)e+=parseInt(a[t].sub_price);c(e)}),[a]),Object(n.useEffect)((function(){console.log(i)}),[i]),s.a.createElement("p",{className:" Gray b pa ph3 pv2 input-reset ba b--black f6 dib"},"TOTAL COST PER MONTH: $",i)};var j=function(e){var a=e.userEmail,t=Object(n.useState)([]),r=Object(h.a)(t,2),i=r[0],c=r[1];function o(e){c([e].concat(Object(d.a)(i)))}return s.a.createElement("div",null,s.a.createElement("p",{className:"black f3"}," Add your subscription and price per month"),s.a.createElement(v,{addSub:o,userEmail:a}),s.a.createElement(N,{subs:i}),s.a.createElement(y,{addSub:o,userEmail:a}),s.a.createElement(w,{subs:i,removeSub:function(e){c(i.filter((function(a){return a.id!==e})))}}))},O=function(e){var a=e.name;e.email;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",{className:"black f3"},"Welcome ".concat(a,", here are your")),s.a.createElement("div",{className:"blue f1"},"SUBSCRIPTIONS")))};var k=function(e){var a=e.userEmail,t=Object(n.useState)(a),r=Object(h.a)(t,2),i=r[0];return r[1],s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){fetch("https://enigmatic-wave-54910.herokuapp.com/deleteaccount",{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}).then((function(e){return e.json()})).then((function(e){"successfully erased User"==e&&window.location.reload(!1)})).catch((function(e){return console.log("ok so this didn't work")}))},className:"f4 link dim red underline pa1 pointer"},"DELETE YOUR ACCOUNT"))},C=(t(19),{route:"signin",isSignedIn:!1,user:{name:"",email:""}}),S=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).loadUser=function(a){e.setState({user:{name:a.name,email:a.email}})},e.onRouteChange=function(a){"signout"===a?e.setState(C):"home"===a&&e.setState({isSignedIn:!0}),e.setState({route:a})},e.state=C,e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.isSignedIn,t=e.route;return s.a.createElement("div",{className:"App"},s.a.createElement(u,{onRouteChange:this.onRouteChange,isSignedIn:a}),"home"===t?s.a.createElement("div",null,s.a.createElement(k,{userEmail:this.state.user.email}),s.a.createElement(O,{name:this.state.user.name,email:this.state.user.email}),s.a.createElement(j,{userEmail:this.state.user.email})):"signin"===t?s.a.createElement(b,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement(p,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(20);i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.156ccda3.chunk.js.map