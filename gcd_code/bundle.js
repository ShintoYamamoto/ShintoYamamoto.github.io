(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(601),o=n.n(r),i=n(314),s=n.n(i)()(o());s.push([e.id,"body{\n    padding: 0px;\n    margin: 0px;\n}\n#app {\n    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: 400;\n  \n    color: #0f0f0f;\n    background-color: #f6f6f6;\n  \n    font-synthesis: none;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-text-size-adjust: 100%;\n\n    width: 100vw;\n    height: 100vh;\n  }\n  \n  a {\n    font-weight: 500;\n    color: #646cff;\n    text-decoration: inherit;\n  }\n  \n  a:hover {\n    color: #535bf2;\n  }\n  \n  h1 {\n    text-align: center;\n  }\n  \n  input,\n  textarea,\n  button {\n    border-radius: 8px;\n    border: 1px solid transparent;\n    padding: 0.6em 1.2em;\n    font-size: 1em;\n    font-weight: 500;\n    font-family: inherit;\n    color: #0f0f0f;\n    background-color: #ffffff;\n    transition: border-color 0.25s;\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\n    outline: none;\n  }\n  \n  button {\n    cursor: pointer;\n  }\n  \n  button:hover {\n    border-color: #396cd8;\n  }\n  button:active {\n    border-color: #396cd8;\n    background-color: #e8e8e8;\n  }\n  \n  input,\n  button {\n    outline: none;\n  }\n  \n  @media (prefers-color-scheme: dark) {\n    #app {\n      color: #f6f6f6;\n      background-color: #2f2f2f;\n    }\n  \n    a:hover {\n      color: #24c8db;\n    }\n  \n    input,\n    textarea,\n    button {\n      color: #ffffff;\n      background-color: #0f0f0f98;\n    }\n    button:active {\n      background-color: #0f0f0f69;\n    }\n  }\n  ",""]);const a=s},775:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(601),o=n.n(r),i=n(314),s=n.n(i)()(o());s.push([e.id,".trContainer{\n    width: 80%;\n    height: 40%;\n    margin: auto;\n    display: flex;\n    justify-content: space-between;\n    & > div{\n        width: 45%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        & > h1{\n            line-height: 2rem;\n            flex-grow: 0;\n        }\n        & > .translator{\n            width: 100%;\n            height: 1fr;\n            margin: 0px;\n            flex-grow: 1;\n        }\n    }\n}",""]);const a=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var h=[].concat(e[c]);r&&s[h[0]]||(void 0!==i&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=i),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),o&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=o):h[4]="".concat(o)),t.push(h))}},t}},601:e=>{e.exports=function(e){return e[1]}},511:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(72),o=n.n(r),i=n(825),s=n.n(i),a=n(659),l=n.n(a),c=n(56),h=n.n(c),u=n(540),d=n.n(u),f=n(113),p=n.n(f),m=n(208),v={};v.styleTagTransform=p(),v.setAttributes=h(),v.insert=l().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=d(),o()(m.A,v);const g=m.A&&m.A.locals?m.A.locals:void 0},686:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(72),o=n.n(r),i=n(825),s=n.n(i),a=n(659),l=n.n(a),c=n(56),h=n.n(c),u=n(540),d=n.n(u),f=n(113),p=n.n(f),m=n(775),v={};v.styleTagTransform=p(),v.setAttributes=h(),v.insert=l().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=d(),o()(m.A,v);const g=m.A&&m.A.locals?m.A.locals:void 0},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var l=e[a],c=r.base?l[0]+r.base:l[0],h=i[c]||0,u="".concat(c," ").concat(h);i[c]=h+1;var d=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var p=o(f,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:p,references:1})}s.push(u)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var l=r(e,o),c=0;c<i.length;c++){var h=n(i[c]);0===t[h].references&&(t[h].updater(),t.splice(h,1))}i=l}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},859:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(100),i=r(n(660));n(511);class s extends o.Narve.Component{constructor(){super("div",{id:"app"}),this.children.set(new i.default(5,"#AIU"))}}t.default=s},927:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(100),i=r(n(859));window.onload=()=>{o.Narve.q("body").children.set(new i.default)}},660:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(100);n(686);class o extends r.Narve.Component{constructor(e,t){super("div",{class:"trContainer"}),this.mesArea=(0,r.nr)("textarea",{class:"translator"}),this.codeArea=(0,r.nr)("textArea",{class:"translator"}),this.n=5,this.children.set((0,r.nr)("div",{},(0,r.nr)("h1",{},"ひらがな"),this.mesArea),(0,r.nr)("div",{},(0,r.nr)("h1",{},"コード"),this.codeArea)),this.n=e,this.chars="#AIU"===t?function(){let e="ぁ".charCodeAt(0),t="";for(;e<="ゖ".charCodeAt(0);)t+=(n=e,String.fromCharCode(n)),e++;var n;return t}():t,this.charTable=function(e,t){let n=[];for(var r=1,o=0;o<e.length;++r,o+=t)n[r]=" "+e.substring(o,o+t);return n}(this.chars,this.n),this.mesArea.elem.oninput=e=>{this.mesArea.elem instanceof HTMLTextAreaElement&&(console.log(this.mesArea.elem.value),this.onMesChanged(this.mesArea.elem.value))},this.codeArea.elem.oninput=e=>{this.codeArea.elem instanceof HTMLTextAreaElement&&this.onCodeChanged(this.codeArea.elem.value)}}onMesChanged(e){let t=[],n=[];for(let r of e){const e=this.chars.indexOf(r);-1!==e&&(t.push(Math.floor(e/this.n)+1),n.push(e%this.n+1))}const[r,o]=i(t),[s,a]=i(n);this.setCode(`(${r},${o})(${s},${a})`)}onCodeChanged(e){console.log(e);const t=function(e){var t;const n=/\((\d+),(\d+)\)\((\d+),(\d+)\)/;return(null===(t=e.match(/\((\d+),(\d+)\)\((\d+),(\d+)\)/g))||void 0===t?void 0:t.map((e=>{var t;return null===(t=e.match(n))||void 0===t?void 0:t.slice(1,5).map((e=>Number.parseInt(e)))})).filter((e=>void 0!==e)).filter((e=>4===e.length)).map((e=>[e[0],e[1],e[2],e[3]])))||[[0,0,0,0]]}(e);console.log("p",t);let n=t.map((e=>{const t=s([e[0],e[1]]),n=s([e[2],e[3]]);if(t.length===n.length)return t.map(((e,t)=>{const r=n[t];return this.charTable[e][r]})).join("")})).filter((e=>void 0!==e)).join("");this.setMes(n)}setMes(e){this.mesArea.elem instanceof HTMLTextAreaElement&&(this.mesArea.elem.value=e)}setCode(e){this.codeArea.elem instanceof HTMLTextAreaElement&&(this.codeArea.elem.value=e)}}function i(e){let t=2,n=1;e.reverse();for(let r of e)n=t*r+n,[t,n]=[n,t];return[t,n]}function s(e){let t=e[0],n=e[1],r=[];for(t<n&&([t,n]=[n,t]);n>1;)r.push(Math.floor(t/n)),t%=n,[t,n]=[n,t];return r}t.default=o},100:(e,t)=>{function n(e,t,n){void 0===e&&(e="div");let r=document.createElement(e);return t&&Object.entries(t).forEach((([e,t])=>{r.setAttribute(e,t)})),void 0!==n&&(Array.isArray(n)?n.forEach((e=>{r.appendChild(e)})):"string"==typeof n?r.innerHTML=n.replace(/&/g,"&lt;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"):r.appendChild(n)),r}function r(e){let n;try{n=s(e.elem.cloneNode(!0))}catch(n){return console.error("deepClone",e),(0,t.nr)()}return n}function o(e){let t=new i.Component;return t.querySelector(e),t}var i;function s(e){let t=Object();for(let n=0;n<e.attributes.length;n++)t[e.attributes[n].name]=e.attributes[n].value;let n=new i.Component;if(n.elem=e,0===e.children.length)return n;for(let t=0;t<e.children.length;t++)n.children.push(s(e.children[t]));return n}Object.defineProperty(t,"__esModule",{value:!0}),t.Narve=t.nr=void 0,t.nr=function(e,t,...n){return new i.Component(e,t,...n)},function(e){e.q=o;class t{constructor(t,r,...o){this.children=new a(this),this.elem=n(t,r||{}),o.every((t=>t instanceof e.Component))?this.children.set(...o):this.elem.innerHTML=o.join("")}querySelector(e){const t=document.querySelector(e);return null===t?null:(this.elem=t||n("div"),this.children=s(this.elem).children,this)}replaceWith(e){e instanceof t?(this.elem.replaceWith(e.elem),this.elem=e.elem,this.children=e.children):(this.elem.replaceWith(e),this.elem=e,this.children=s(e).children)}removeElem(){this.elem.remove()}}e.Component=t}(i||(t.Narve=i={}));class a extends Array{constructor(e){super(),Object.setPrototypeOf(this,a.prototype),this.parent=e}copyWithin(e,t,n){if(e=this.__REG_START__(e),t=this.__REG_START__(t),n=this.__REG_END__(n),t>=this.length)return this;if(n<=t)return this;if(e===t)return this;if(e<t)for(let r=0;r<n-t&&!(r+t>=this.length)&&!(r+e>=this.length);r++)this.replace(r+e,this[r+t]);else for(let r=n-t-1;r>=0;r--)r+t>=this.length||r+e>=this.length||this.replace(r+e,this[r+t]);return this}fill(e,t,n){if(t=this.__REG_START__(t),n=this.__REG_END__(n),t>=this.length||n<=t)return this;for(let r=t;r<n;r++)this.replace(r,e);return this}pop(){const e=super.pop();if(void 0!==e)return e.removeElem(),e}push(...e){return super.push(...e),e.forEach((e=>{this.parent.elem.insertAdjacentElement("beforeend",e.elem)})),this.length}reverse(){let e=0,t=this.length-1;for(;t-e>0;){const n=r(this[e]);this.replace(e,r(this[t])),this.replace(t,n),e++,t--}return this}shift(){const e=super.shift();if(void 0!==e)return e.removeElem(),e}sort(e){return[...this.map((e=>r(e)))].sort(((t,n)=>e(t,n))).forEach(((e,t)=>this.replace(t,e))),this}splice(e,t,...n){return this.delete(e,t),this.insert(e,...n),this}unshift(...e){return e.forEach((e=>this.parent.elem.insertAdjacentElement("afterbegin",e.elem))),super.unshift(...e),this.length}replace(e,t){(e=this.__REG_START__(e))>=this.length&&(e=this.length-1),this[e].replaceWith(t.elem.isConnected?r(t):t)}delete(e,t){if((e=this.__REG_START__(e))>=this.length)return[];void 0===t&&(t=this.length-e);const n=super.splice(e,t);return n.forEach((e=>e.removeElem())),n}insert(e,...t){if((e=this.__REG_START__(e))>=this.length)return console.warn('The value of index is too large. "insert" is regarded as "append"'),void this.push(...t);const n=this[e].elem;return t.forEach((e=>{n.before(e.elem)})),super.splice(e,0,...t),this}set(...e){this.delete(0),this.push(...e)}__REG_START__(e){return void 0===e&&(e=0),e<0&&(e+=this.length),e<0&&(e=0),e}__REG_END__(e){return(void 0===e||e>=this.length)&&(e=this.length),e<0&&(e+=this.length),e<0&&(e=0),e}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(927)})();