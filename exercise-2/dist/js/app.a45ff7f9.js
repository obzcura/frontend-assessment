(function(t){function n(n){for(var o,s,c=n[0],i=n[1],u=n[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(n);while(f.length)f.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],o=!0,c=1;c<e.length;c++){var i=e[c];0!==a[i]&&(o=!1)}o&&(r.splice(n--,1),t=s(s.s=e[0]))}return t}var o={},a={app:0},r=[];function s(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=o,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)s.d(e,o,function(n){return t[n]}.bind(null,o));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=i;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";e("85ec")},"0899":function(t,n,e){},"225e":function(t,n,e){"use strict";e("0899")},4960:function(t,n,e){"use strict";e("a315")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Banner"),e("Content")],1)},r=[],s=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner"},[e("h1",{staticClass:"banner-heading"},[t._v("Exercise 2")])])}],i={name:"Banner"},u=i,l=(e("4960"),e("2877")),p=Object(l["a"])(u,s,c,!1,null,"3811d0c1",null),f=p.exports,d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("ContentTabs",{attrs:{contents:t.data,openTab:t.openContent},on:{setTab:t.setContent}}),e("ContentBody",{attrs:{contents:t.data,openTab:t.openContent}})],1)},b=[],v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content-tab"},t._l(t.contents,(function(n,o){return e("div",{key:o,staticClass:"content-tab-item"},[e("div",{staticClass:"content-tab-title",class:{open:o===t.openTab},on:{click:function(n){return t.$emit("setTab",o)}}},[t._v(t._s(n.title))]),e("transition",{attrs:{name:"slide"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:o===t.openTab,expression:"index===openTab"}],staticClass:"content-tab-body",domProps:{innerHTML:t._s(n.content)}})])],1)})),0)},h=[],m={name:"ContentTabs",props:["contents","openTab"]},_=m,y=(e("7922"),Object(l["a"])(_,v,h,!1,null,"f6e7c5c2",null)),C=y.exports,T=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content-body-container"},[e("transition-group",{attrs:{name:"fade"}},t._l(t.contents,(function(n,o){return e("div",{directives:[{name:"show",rawName:"v-show",value:o===t.openTab,expression:"index===openTab"}],key:"item"+o,staticClass:"content-body-item",domProps:{innerHTML:t._s(n.content)}})})),0)],1)},w=[],x={name:"ContentBody",props:["contents","openTab"]},O=x,g=(e("225e"),Object(l["a"])(O,T,w,!1,null,"0fddd0b4",null)),j=g.exports,P={name:"Content",components:{ContentTabs:C,ContentBody:j},data:function(){return{data:"",openContent:0}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;this.axios.get("data.json").then((function(n){t.data=n.data})).catch((function(t){alert(t)}))},setContent:function(t){this.openContent=this.openContent===t?"":t}}},$=P,E=Object(l["a"])($,d,b,!1,null,"65a2fdf0",null),k=E.exports,B={name:"App",components:{Banner:f,Content:k}},M=B,S=(e("034f"),Object(l["a"])(M,a,r,!1,null,null,null)),D=S.exports,H=e("bc3a"),J=e.n(H),L=e("2106"),N=e.n(L);o["a"].config.productionTip=!1,o["a"].use(N.a,J.a),new o["a"]({render:function(t){return t(D)}}).$mount("#app")},7922:function(t,n,e){"use strict";e("904a")},"85ec":function(t,n,e){},"904a":function(t,n,e){},a315:function(t,n,e){}});
//# sourceMappingURL=app.a45ff7f9.js.map