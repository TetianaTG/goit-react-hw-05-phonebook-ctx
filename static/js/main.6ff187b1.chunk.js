(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=n(8),l=n(10),u=n(1),m=n(2),s=n(4),h=n(3),p=n(18),b=n(5),f=n.n(b),g=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.onSubmit,style:{marginLeft:"30px"}},r.a.createElement("h2",null,"Phonebook"),r.a.createElement("input",{className:f.a.inputName,type:"text",name:"name",value:this.props.name,onChange:this.props.onChange,placeholder:"Enter name...",required:!0}),r.a.createElement("input",{className:f.a.inputNumber,type:"tel",name:"number",value:this.props.number,onChange:this.props.onChange,placeholder:"Number...",required:!0}),r.a.createElement("button",{type:"submit"},"Add contact"))}}]),n}(a.Component),d=n(9),C=n.n(d),y=function(e){var t=e.contact,n=t.id,a=t.name,o=t.number,c=e.deleteContact;return r.a.createElement("li",null,r.a.createElement("span",null,a,": "),r.a.createElement("span",null,o),r.a.createElement("button",{type:"button",className:C.a.btnDelete,onClick:function(){return c(n)}},"Delete"))},v=function(e){var t=e.filter,n=e.onChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{marginLeft:"30px"}},"Find contacts by name"),r.a.createElement("input",{style:{marginLeft:"30px"},type:"text",name:"filter",value:t,onChange:n}))},E=function(e){var t=e.contacts,n=e.filter,a=e.onChange,o=e.deleteContact;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{marginLeft:"30px"}},"Contacts"),r.a.createElement(v,{filter:n,onChange:a}),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(y,{contact:e,key:e.id,deleteContact:o})}))))},k=Object(a.createContext)(),O={light:{fontColor:"black",bodybg:"white"},dark:{fontColor:"white",bodybg:"black"}},j=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).toggleTheme=function(){e.setState((function(e){return"light"===e.theme?{theme:"dark",themeConfig:O.dark}:{theme:"light",themeConfig:O.light}}))},e.state={theme:"light",themeConfig:O.light,toggleTheme:e.toggleTheme},e}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(k.Provider,{value:this.state},this.props.children)}}]),n}(a.Component);j.Consumer=k.Consumer;var S=j,N=function(e){return function(t){return r.a.createElement(S.Consumer,null,(function(n){return console.log(n),r.a.createElement(e,Object.assign({},t,{theme:n.theme,themeConfig:n.themeConfig,toggleTheme:n.toggleTheme}))}))}}(function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number,o=n.contacts,c={id:Object(p.a)(),name:a,number:r};o.find((function(e){return e.name===c.name&&c.name}))?alert("".concat(c.name," already exists")):e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[c])}})),e.setState({name:"",number:""})},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(i.a)({},a,r))},e.filterByName=function(){return e.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e.state.filter.toLowerCase())}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.filterByName();console.log(this.props);var t=this.props.themeConfig,n=t.fontColor,a=t.bodybg,o=this.state.filter;return r.a.createElement("div",{style:{color:n,background:a}},r.a.createElement("button",{type:"submit",style:{marginLeft:"30px",marginTop:"30px"},onClick:this.props.toggleTheme},"Change theme"),r.a.createElement(g,{onSubmit:this.handleSubmit,onChange:this.handleChange,name:this.state.name,number:this.state.number}),r.a.createElement(E,{contacts:e,filter:o,onChange:this.handleChange,deleteContact:this.deleteContact}))}}]),n}(a.Component));c.a.render(r.a.createElement(S,null,r.a.createElement(N,null)),document.getElementById("root"))},5:function(e,t,n){e.exports={btn:"Phonebook_btn__1UFp6",inputName:"Phonebook_inputName__3ASW-",inputNumber:"Phonebook_inputNumber__1T-La"}},9:function(e,t,n){e.exports={btnDelete:"Contact_btnDelete__2vbP_"}}},[[11,1,2]]]);
//# sourceMappingURL=main.6ff187b1.chunk.js.map