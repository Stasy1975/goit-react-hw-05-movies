"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{97:function(t,n,r){var e=r(731),a=r(184);n.Z=function(t){var n=t.item;return(0,a.jsx)("ul",{children:n&&n.map((function(t){var n=t.id,r=t.original_title;return(0,a.jsx)("li",{children:(0,a.jsx)(e.OL,{to:"/movies/".concat(n),children:r})},n)}))})}},544:function(t,n,r){r.r(n);var e=r(982),a=r(861),c=r(885),u=r(687),s=r.n(u),o=r(894),i=r(791),f=r(97),p=r(184);n.default=function(){var t=(0,i.useState)([]),n=(0,c.Z)(t,2),r=n[0],u=n[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,a.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Hg)();case 3:n=t.sent,console.log(n),u((0,e.Z)(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsx)("main",{children:(0,p.jsx)(f.Z,{item:r})})}},894:function(t,n,r){r.d(n,{Hg:function(){return s},TP:function(){return i},XT:function(){return l},tx:function(){return p},zv:function(){return f}});var e=r(861),a=r(687),c=r.n(a),u=r(44).ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"0be6852ca8cd54f03df513633364c09a"}}),s=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(),t.next=3,u.get("/trending/".concat("movie","/").concat("week"));case 3:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("/search/movie",{params:{query:n}});case 3:return r=t.sent,e=r.data,console.log(e.results),t.abrupt("return",e.results);case 9:t.prev=9,t.t0=t.catch(0),alert(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(n){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(n));case 2:return r=t.sent,e=r.data,console.log(e),t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(n,"/credits"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(n,"/reviews"));case 2:return r=t.sent,e=r.data,console.log(e.results),t.abrupt("return",e.results);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(t){return""===t||null===t?s():o(t)}}}]);
//# sourceMappingURL=544.734d3ed4.chunk.js.map