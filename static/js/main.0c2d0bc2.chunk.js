(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),s=n(2),o=n(3),i=n(5),l=n(4),r=n(1),m=n.n(r),b=(n(12),n(0)),h=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={time:new Date},t.interval=setInterval((function(){t.setState({time:new Date}),console.log(t.state.time.toLocaleTimeString())}),1e3),t}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(t){var e=t.name;e!==this.props.name&&console.log("Clock was renamed from ".concat(e," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var t=this.props.name,e=this.state.time;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"display-2 text-center",children:"Clock \u2116".concat(t)}),Object(b.jsx)("p",{className:"display-2 text-primary text-center",children:e.toLocaleTimeString()})]})})}}]),n}(m.a.Component),j=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={clockName:0,isClockVisible:!0},t.setRandomName=function(){t.setState({clockName:Math.ceil(100*Math.random())})},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isClockVisible,n=t.clockName,c=this.setRandomName,a=this.hideClock,s=this.showClock;return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row d-flex justify-content-center",children:Object(b.jsxs)("div",{className:"col mx-auto",children:[Object(b.jsx)("h1",{className:"display-1 text-center",children:"React clock"}),e&&Object(b.jsx)(h,{name:n}),Object(b.jsxs)("div",{className:"buttons d-flex justify-content-center",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-success",onClick:s,children:"Show Clock"}),Object(b.jsx)("button",{type:"button",className:"btn btn-warning mx-2",onClick:a,children:"Hide Clock"}),Object(b.jsx)("button",{type:"button",className:"btn btn-info",onClick:c,children:"Set random name"})]})]})})})}}]),n}(m.a.Component);a.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0c2d0bc2.chunk.js.map