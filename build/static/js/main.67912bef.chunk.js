(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a(77)},43:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(14),c=a.n(l),r=(a(43),a(7)),i=a(8),m=a(10),s=a(9),u=a(11),p=a(81),h=a(36),d=a(13),f=a(18),E=a(16),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={nom:"",email:"",password:"",photo_profil:""},a.onChange=a.onChange.bind(Object(E.a)(Object(E.a)(a))),a.handleUploadImage=a.handleUploadImage.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleUploadImage",value:function(e){var t=this;e.preventDefault();var a=new FormData;a.append("photo_profil",this.uploadInput.files[0]),a.append("nom",this.state.nom),a.append("email",this.state.email),a.append("password",this.state.password),fetch("https://mandeha18.herokuapp.com/profil",{method:"POST",body:a}).then(function(e){e.json().then(function(e){t.setState({photo_profil:"https://mandeha18.herokuapp.com/profil/".concat(e.photo_profil)}),console.log("ity ilay body.fil",e.photo_profil)}),fetch("https://mandeha18.herokuapp.com/profil",{method:"GET",body:a}).then(function(e){e.json().then(function(e){t.setState({photo_profil:"https://mandeha18.herokuapp.com/profil/".concat(e.photo_profil)}),console.log("ity ilay body.fil",e.photo_profil)})})})}},{key:"render",value:function(){var e=this;return o.a.createElement("form",{onSubmit:this.handleUploadImage},o.a.createElement(d.c,{label:"Nom",type:"text",icon:"user",value:this.state.value,onChange:this.onChange,name:"nom",size:"sm"}),o.a.createElement(d.c,{label:"Email",type:"email",value:this.state.value,onChange:this.onChange,name:"email",size:"sm"}),o.a.createElement(d.c,{label:"Password",type:"password",value:this.state.value,onChange:this.onChange,name:"password",size:"sm"}),o.a.createElement("br",null),o.a.createElement("input",{ref:function(t){e.uploadInput=t},type:"file",name:"photo_profil"}),o.a.createElement("button",null,"Ajouter"))}}]),t}(o.a.Component),v=(a(51),a(52),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={count:0},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"addOne",value:function(){this.setState({count:this.state.count+1})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("span",null)," ",o.a.createElement("label",{id:"coeur"},this.state.count,"\u2764",o.a.createElement("input",{type:"button",onClick:function(){return e.addOne()}})))}}]),t}(n.Component)),O=a(24),j=a(35),g=(a(53),function(e){return o.a.createElement("div",null,e.coms.length>0?e.coms.map(function(e){return o.a.createElement("div",null,e,o.a.createElement("hr",null))}):"")}),y=(a(54),function(e){var t=Object(n.useState)([]),a=Object(O.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(0),i=Object(O.a)(r,2),m=i[0],s=i[1];return o.a.createElement("button",{onClick:function(){Object(j.confirmAlert)({customUI:function(e){var t=e.onClose;return o.a.createElement("div",{id:"bt",className:"custom-ui"},o.a.createElement("div",{className:"fermer"},o.a.createElement("button",{id:"flot",onClick:t},"X")),o.a.createElement("div",null,o.a.createElement("form",{id:"coms",onSubmit:function(e){e.preventDefault();var t=document.forms.coms.elements.input.value;!function(e,t){c(e.concat([t]))}(l,t),document.getElementById("io").innerHTML+=t+"<br/>",document.getElementById("entre").value="",s(m+1)}},o.a.createElement("input",{name:"input",type:"text",id:"entre",placeholder:l.commentaire}),o.a.createElement("button",{id:"com"},"comment"))),o.a.createElement("div",{id:"io"}),o.a.createElement(g,{coms:l}))}})}},"comment ",m)}),k=a(19),w=a.n(k),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={profil:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.a.get("https://mandeha18.herokuapp.com/profil").then(function(t){console.log("i am a response",t),e.setState({profil:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement(d.d,null,o.a.createElement("div",{className:"card-deck"},this.state.profil.length>0?this.state.profil.map(function(e){var t;return o.a.createElement(d.a,{md:"4",className:"colone"},o.a.createElement("div",{className:"card"},o.a.createElement("img",(t={src:"https://mandeha18.herokuapp.com/user/"+e.photo_profil,alt:"pdp"},Object(f.a)(t,"alt","upload images"),Object(f.a)(t,"width"," 250"),Object(f.a)(t,"height","250"),t)),o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},e.nom),o.a.createElement("p",null,e.email)),o.a.createElement("div",{className:"card-footer"},o.a.createElement(y,null),o.a.createElement(v,null))))}):""))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={profil:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.a.get("http://localhost:8080"+this.props.location.pathname).then(function(t){console.log("i am a response",t),e.setState({id:t.data._id}),e.setState({nam:t.data.nom}),console.log("i am a response",t.data.email),e.setState({mail:t.data.email}),e.setState({mdp:t.data.password}),e.setState({photo:t.data.photo_profil})}).catch(function(e){console.log(e)})}},{key:"liste",value:function(){return o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("h2",null,"profil")),o.a.createElement("tr",null,o.a.createElement("th",null,"ID"),o.a.createElement("th",null,"NOM"),o.a.createElement("th",null,"EMAIL"),o.a.createElement("th",null,"PASSWORD"),o.a.createElement("th",null,"PHOTO"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,this.state.id),o.a.createElement("td",null,this.state.nam),o.a.createElement("td",null,this.state.mail),o.a.createElement("td",null,this.state.mdp),o.a.createElement("td",null,o.a.createElement("img",{alt:"pdp",width:"50px",height:"50px",src:"http://localhost:8080/user/"+this.state.photo}))))))}},{key:"render",value:function(){return o.a.createElement("div",null,this.liste())}}]),t}(n.Component),I=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement(d.b,null,o.a.createElement("div",{className:"container"},o.a.createElement(h.a,{path:"/",component:b}),o.a.createElement(h.a,{path:"/",component:C}),o.a.createElement(h.a,{path:"/profil/:profilId",exact:!0,component:S}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(73),a(74),a(75),a(76);c.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.67912bef.chunk.js.map