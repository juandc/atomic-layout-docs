(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./components/Hint.jsx":function(e,n,a){"use strict";var t=a("./node_modules/react/index.js"),o=a.n(t);function r(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  margin: 2rem 0;\n  padding: 1rem;\n  background-color: ",";\n  border: 0;\n  border-style: solid;\n  border-color: rgb(56, 132, 255);\n  border-left-width: 3px;\n  border-radius: 3px;\n"]);return r=function(){return e},e}var p=a("./node_modules/styled-components/dist/styled-components.browser.esm.js").a.div(r(),function(e){switch(e.variant){case"success":return"rgb(245, 247, 249)";default:return"rgb(245, 247, 249);"}}),i=function(e){var n=e.variant,a=e.children;return o.a.createElement(p,{variant:n},a)};n.a=i,i.__docgenInfo={description:"",methods:[],displayName:"Hint"}},"./src/docs/fundamentals/responsive-props.mdx":function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d});var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js"),p=a("./components/Hint.jsx");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function s(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function l(e,n){return!n||"object"!==i(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(e){var a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(a=l(this,c(n).call(this,e))).layout=null,a}var a,t,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,o.a.Component),a=n,(t=[{key:"render",value:function(){var e=this.props,n=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"responsive-props"}},"Responsive props"),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"introduction"}},"Introduction"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Any prop alias is considered a responsive prop when its name is suffixed with a breakpoint name. Responsive props may also have an optional behavior specified."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"declaration"}},"Declaration"),o.a.createElement(r.MDXTag,{name:"p",components:n},"To declare a responsive prop follow the next schema:"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"../.gitbook/assets/responsive-prop.png",alt:"propName + ?breakpointName + ?behavior"}})),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"prop-name"}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"h3"},"Prop name")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Any of ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"prop-aliases.md"}},"Prop aliases")," can be used as a prop name part of a responsive prop."),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"breakpoint-name"}},"Breakpoint name"),o.a.createElement(r.MDXTag,{name:"p",components:n},"An optional name of the configured ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"breakpoints.md"}},"breakpoint"),"."),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"behavior"}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"h3"},"Behavior")),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"up")," ","(",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"li"},"Default"),")"," \u2014 Applies the given value from the specified breakpoint and up,"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"down")," \u2014 Applies the given value from the specified breakpoint and down,"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"only")," \u2014 Applies the given value only for the specified breakpoint.")),o.a.createElement(p.a,{variant:"success"},"Atomic layout is mobile-first. That means that by default responsive props are applied starting from the given breakpoint and ",o.a.createElement("strong",null,"up"),", unless different behavior is specified, or rewriting prop is met."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"defaults"}},"Defaults"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Default breakpoint behavior is ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"up"),","),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Default measurement unit for numeric prop values is ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"px"),","),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"When not suffixed, any prop value is applied for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"xs")," breakpoint and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"up"),".")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"examples"}},"Examples"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"gutter")," \u2014 Sets ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"grid-gap")," for all breakpoints ","(","from ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"xs")," and all the way up",")",","),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"marginVerticalMd")," \u2014 Applies ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"margin-top")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"margin-bottom")," for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"md")," breakpoint and up,"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"placeItemsLgOnly")," \u2014 Places the child items for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"lg")," breakpoint only.")))}}])&&s(a.prototype,t),i&&s(a,i),n}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-docs-fundamentals-responsive-props.cc7574a40653655c90c6.js.map