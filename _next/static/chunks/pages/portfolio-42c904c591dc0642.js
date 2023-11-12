(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{5505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});var r=n(8754)._(n(7294)).default.createContext({})},1342:function(e,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,r=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==r&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},1597:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return d},default:function(){return h}});var r=n(4788),o=n(8754),a=n(1757)._(n(7294)),i=o._(n(7271)),c=n(5505),u=n(236),s=n(1342);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(3766);var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n,o,i,c,u=t.inAmpMode;return e.reduce(l,[]).reverse().concat(d(u).reverse()).filter((n=new Set,o=new Set,i=new Set,c={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var a=e.key.slice(e.key.indexOf("$")+1);n.has(a)?t=!1:n.add(a)}switch(e.type){case"title":case"base":o.has(e.type)?t=!1:o.add(e.type);break;case"meta":for(var u=0,s=f.length;u<s;u++){var d=f[u];if(e.props.hasOwnProperty(d)){if("charSet"===d)i.has(d)?t=!1:i.add(d);else{var l=e.props[d],p=c[d]||new Set;("name"!==d||!r)&&p.has(l)?t=!1:(p.add(l),c[d]=p)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!u&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var o=r._({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,a.default.cloneElement(e,o)}return a.default.cloneElement(e,{key:n})})}var h=function(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});var r=n(1757)._(n(7294)),o=r.useLayoutEffect,a=r.useEffect;function i(e){var t=e.headManager,n=e.reduceComponentsToState;function i(){if(t&&t.mountedInstances){var o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}return o(function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=i),function(){t&&(t._pendingUpdate=i)}}),a(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},3766:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});var n=function(e){}},6739:function(e,t,n){"use strict";n.r(t);var r=n(9008),o=n.n(r),a=n(9034),i=n.n(a),c=n(5893);t.default=function(){return(0,c.jsxs)("div",{className:i().container,children:[(0,c.jsxs)(o(),{children:[(0,c.jsx)("title",{children:"Johnny Heintz Portfolio"}),(0,c.jsx)("meta",{name:"description",content:"A portfolio of software developer work."}),(0,c.jsx)("link",{rel:"icon",href:"/not-johns-linktree/favicon.png"})]}),(0,c.jsxs)("main",{className:i().main,children:[(0,c.jsx)("h1",{className:i().title,children:"Johnny Heintz"}),(0,c.jsx)("p",{className:i().description,children:"A Portfolio"}),(0,c.jsx)("a",{href:"https://jorune.dev",style:{fontSize:"1.25rem",textDecoration:"underline"},children:"Contact Information and Social Media"}),(0,c.jsxs)("div",{className:i().grid,children:[(0,c.jsxs)("a",{href:"https://github.com/jorune00/Automation",className:i().card,rel:"noreferrer",target:"_blank",children:[(0,c.jsx)("h2",{children:"Automation Projects"}),(0,c.jsx)("p",{children:"Python scripts for automating tasks. Network automation, NetDevOps"})]}),(0,c.jsxs)("a",{href:"https://github.com/jorune00/QR_code",className:i().card,rel:"noreferrer",target:"_blank",children:[(0,c.jsx)("h2",{children:"QR Code Generator"}),(0,c.jsx)("p",{children:"Python program that generates a QR code for a given website URL, or any value"})]}),(0,c.jsxs)("a",{href:"https://github.com/jorune00/Hex2Dec_quiz",className:i().card,rel:"noreferrer",target:"_blank",children:[(0,c.jsx)("h2",{children:"Hex2Dec"}),(0,c.jsx)("p",{children:"Practice your hexadecimal to decimal. Good fun for any Network Engineer!"})]}),(0,c.jsxs)("a",{href:"https://github.com/jorune00/weather",className:i().card,rel:"noreferrer",target:"_blank",children:[(0,c.jsx)("h2",{children:"Weather data scraping"}),(0,c.jsx)("p",{children:"Just goofing with web scraping using Beautiful Soup and Python"})]}),(0,c.jsxs)("a",{href:"https://github.com/jorune00",className:i().card,rel:"noreferrer",target:"_blank",children:[(0,c.jsx)("h2",{children:"GitHub"}),(0,c.jsx)("p",{children:"All of my other projects!"})]})]})]}),(0,c.jsx)("footer",{className:i().footer,children:"Powered by Developers Like You!"})]})}},5073:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return n(6739)}])},9034:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K","footer-a":"Home_footer-a__olFEj",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,n){e.exports=n(1597)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5073)}),_N_E=e.O()}]);