(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(2281)}])},2281:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return l}});var d=c(5893),e=c(7294);function f(a){var b=a.title,c=a.children;return(0,d.jsxs)("div",{className:"py-4 px-10 w-auto flex items-center flex-col bg-white",children:[(0,d.jsx)("div",{className:"text-center text-2xl font-bold text-red-300 ",children:b}),(0,d.jsx)("div",{className:"text-white w-96 text-xl bg-red-300 rounded-md p-5",children:c})]})}var g=c(8913),h=c.n(g),i=c(4087),j=c.n(i);function k(a){var b=a.src,c=a.text,f=(0,e.useState)(!1),g=f[0],i=f[1],k=(0,e.useState)(!0),l=k[0],m=k[1],n=(0,e.useState)(0),o=n[0],p=n[1],q=(0,e.useRef)(null),r=(0,e.useRef)(0),s=(0,e.useState)(0),t=s[0],u=s[1],v=(0,e.useState)(!1),w=v[0],x=v[1],y=function(){j().cancel(r.current)},z=function(){if(!w){var a;u(null===(a=q.current)|| void 0===a?void 0:a.seek())}r.current=j()(z)},A=function(){i(!1),y()},B=function(){i(!0),z()},C=function(){i(!1),y()},D=function(){var a;p(null===(a=q.current)|| void 0===a?void 0:a.duration()),m(!0)},E=function(){x(!0)},F=function(){x(!1)},G=function(a){var b,c=a.currentTarget.value;w&&u(null===(b=q.current)|| void 0===b?void 0:b.seek(+c))};return(0,d.jsx)("div",{children:l?(0,d.jsxs)("div",{className:"flex flex-col items-start ",children:[(0,d.jsx)(h(),{src:b,playing:g,onLoad:D,ref:q,onEnd:A}),(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsx)("div",{className:"text-sm mr-2 mt-2",children:g?(0,d.jsx)("button",{onClick:C,children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:[(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}),(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"})]})}):(0,d.jsx)("button",{onClick:B,children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:[(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]})})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("input",{id:"input",className:"w-72 h-2 overflow-hidden appearance-none rounded-xl slider-thumb thumbshadow sh bg-amber-400 ",type:"range",step:"0.01",min:0,max:o&&o.toFixed(2),value:t&&t.toFixed(2),onChange:G,onMouseDown:E,onMouseUp:F}),(0,d.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,d.jsx)("div",{children:t&&t.toFixed(1)}),(0,d.jsx)("div",{children:o&&o.toFixed(1)})]})]})]}),(0,d.jsxs)("details",{className:"my-2 open:ring-2 open:bg-black open:ring-black open:shadow-lg p-3 rounded-lg",children:[(0,d.jsx)("summary",{className:"text-sm leading-6 text-white font-semibold select-none",children:"문장 확인"}),(0,d.jsx)("div",{className:"mt-2 text-base leading-6text-white",children:(0,d.jsx)("p",{children:c})})]})]}):"Loading"})}var l=function(){var a=(0,e.useState)(),b=a[0],c=a[1],g=(0,e.useState)(),h=g[0],i=g[1];return(0,e.useEffect)(function(){fetch("api/readFile").then(function(a){return a.json()}).then(function(a){c(a.data.slice(1))})},[]),(0,e.useEffect)(function(){fetch("api/script").then(function(a){return a.json()}).then(function(a){return i(a.script)})},[]),b&&b.sort(function(a,b){return a.localeCompare(b,navigator.languages[0]||navigator.language,{numeric:!0,ignorePunctuation:!0})}),(0,d.jsx)(f,{title:"영어 공부",children:h&&b?(0,d.jsx)("div",{children:null==b?void 0:b.map(function(a,b){return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"font-semibold text-sm",children:a}),(0,d.jsx)(k,{src:"sound/".concat(a),text:h["".concat(a)]})]},b)})}):(0,d.jsx)("div",{children:"Loading"})})}}},function(a){a.O(0,[282,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])