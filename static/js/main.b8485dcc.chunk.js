(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{29:function(e,t,s){},31:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},56:function(e,t,s){"use strict";s.r(t);var r=s(3),n=s(19),a=s.n(n),c=(s(29),s(0));var o=function(){return Object(c.jsx)("footer",{children:Object(c.jsx)("p",{children:"Made by Uyen with \u2764"})})};s(31);var l=function(){return Object(c.jsxs)("header",{className:"jumbotron",children:[Object(c.jsx)("h1",{children:"Employee Ebook"}),Object(c.jsx)("br",{}),Object(c.jsxs)("p",{children:["Search for an employee by first or last name",Object(c.jsx)("br",{}),"Click on the buttons to sort names alphabetically"]})]})},i=s(20),d=s(21),j=s(24),h=s(23),u=s(22),b=s.n(u),m=function(){return b.a.get("https://randomuser.me/api/?results=100")};s(49);var p=function(e){return Object(c.jsx)("div",{className:"input-group mb-3",children:Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Search for Employee","aria-label":"Search","aria-describedby":"button-addon2",value:e.search,onChange:e.handleInputChange})})},O=s(9),x=s.n(O),f=(s(50),s(5)),y=s(4);function g(e){var t=e.replace(/\D/g,""),s=t.match(/(\d{3})(\d{3})(\d{4})/),r=t.match(/(\d{2})(\d{3})(\d{3})/);return s?t.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3"):r?t.replace(/(\d{2})(\d{3})(\d{3})/,"$1-$2-$3"):e}var v=function(e){return Object(c.jsx)("div",{className:"table-container",children:Object(c.jsxs)("table",{className:"table text-center table-striped table-hover",children:[Object(c.jsx)("thead",{className:"table-head",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{id:"image-title",scope:"col",children:Object(c.jsxs)("span",{children:["Image ",Object(c.jsx)(f.a,{icon:y.c})]})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("button",{className:"btn dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",onClick:e.sortByFirstName,children:"First Name"})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("button",{className:"btn dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",onClick:e.sortByLastName,children:"Last Name"})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsxs)("span",{children:["Phone ",Object(c.jsx)(f.a,{icon:y.d})]})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsxs)("span",{children:["Email ",Object(c.jsx)(f.a,{icon:y.b})]})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsxs)("span",{children:["DOB ",Object(c.jsx)(f.a,{icon:y.a})]})})]})}),Object(c.jsx)("tbody",{children:e.results.map((function(t){return t.name.first.toLowerCase().includes(e.search.toLowerCase())||t.name.last.toLowerCase().includes(e.search.toLowerCase())&&""!==e.search||""===e.search?Object(c.jsxs)("tr",{className:"table-row",children:[Object(c.jsx)("th",{scope:"row",children:Object(c.jsx)("img",{src:t.picture.thumbnail,alt:"Employee picture"})}),Object(c.jsx)("td",{children:t.name.first}),Object(c.jsx)("td",{children:t.name.last}),Object(c.jsx)("td",{children:g(t.phone)}),Object(c.jsx)("td",{children:t.email}),Object(c.jsx)("td",{children:x()(t.dob.date.substring(0,10),"mmmm dS, yyyy")})]},t.login.uuid):void 0}))})]})})},w=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(i.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={order:"not sorted",search:"",results:[]},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.sortByFirstName=function(){var t=e.state.results.sort((function(e,t){return e.name.first.toLowerCase()<t.name.first.toLowerCase()?-1:e.name.first.toLowerCase()>t.name.first.toLowerCase()?1:0}));"not sorted"===e.state.order?e.setState({order:"sorted",results:t}):"sorted"===e.state.order&&e.setState({order:"not sorted",results:t.reverse()})},e.sortByLastName=function(){var t=e.state.results.sort((function(e,t){return e.name.last.toLowerCase()<t.name.last.toLowerCase()?-1:e.name.last.toLowerCase()>t.name.last.toLowerCase()?1:0}));"not sorted"===e.state.order?e.setState({order:"sorted",results:t}):"sorted"===e.state.order&&e.setState({order:"not sorted",results:t.reverse()})},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;m().then((function(t){console.log(t),e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(p,{search:this.state.search,handleInputChange:this.handleInputChange}),Object(c.jsx)(v,{results:this.state.results,search:this.state.search,sortByFirstName:this.sortByFirstName,sortByLastName:this.sortByLastName})]})}}]),s}(r.Component);var C=function(e){return Object(c.jsx)("main",{className:"wrapper",children:e.children})};var N=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{}),Object(c.jsx)(C,{children:Object(c.jsx)(w,{})}),Object(c.jsx)(o,{})]})};s(55);a.a.render(Object(c.jsx)(N,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.b8485dcc.chunk.js.map