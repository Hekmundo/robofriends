(this.webpackJsonprobotron=this.webpackJsonprobotron||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),o=n.n(s),a=(n(13),n(3)),i=n(0),h=function(e){var t=e.name,n=e.email,r=e.id;return Object(i.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow vw2 shadow-5 tc",children:[Object(i.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:t}),Object(i.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(i.jsx)("div",{children:t.map((function(e){return Object(i.jsx)(h,{id:e.id,name:e.name,email:e.email},e.id)}))})},b=function(e){var t=e.onSearchChange;return Object(i.jsx)("div",{className:"pa2",children:Object(i.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},l=function(e){return Object(i.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})},d=n(5),u=n(6),O=n(8),f=n(7),p=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return!0===this.state.hasError?Object(i.jsx)("h1",{children:"Ooops. That is not good"}):this.props.children}}]),n}(r.Component);n(15);var x=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),o=Object(a.a)(s,2),h=o[0],d=o[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);var u=n.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return n.length?Object(i.jsxs)("div",{className:"tc",children:[Object(i.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(i.jsx)(b,{onSearchChange:function(e){d(e.target.value)}}),Object(i.jsx)(l,{children:Object(i.jsx)(p,{children:Object(i.jsx)(j,{robots:u})})})]}):Object(i.jsx)("h1",{children:"Loading..."})};n(16);o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d2942a1f.chunk.js.map