(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"52dC":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n("gnXo")}])},gnXo:function(e,t,n){"use strict";n.r(t);var s=n("ln6h"),r=n.n(s),o=n("eVuF"),u=n.n(o);function a(e,t,n,s,r,o,a){try{var i=e[o](a),c=i.value}catch(l){return void n(l)}i.done?t(c):u.a.resolve(c).then(s,r)}function i(e){return function(){var t=this,n=arguments;return new u.a(function(s,r){var o=e.apply(t,n);function u(e){a(o,s,r,u,i,"next",e)}function i(e){a(o,s,r,u,i,"throw",e)}u(void 0)})}}var c=n("q1tI"),l=n.n(c),p=l.a.createElement,f=function(e){var t=e.post.snippet;return p("div",{className:"post w-1/2 sm-w-1/3 md:w-1/4"},p("div",{className:"post-thumbnails"},p("img",{src:t.thumbnails,alt:""})),p("div",{className:"post-title"},t.title))},d=l.a.createElement,w=function(e){return d("div",{className:"posts-grid"},e.posts&&e.posts.map(function(e,t){return d(f,{key:"video-".concat(t),post:e})}))},m=n("zgjP"),h=n.n(m),v=l.a.createElement,g=function(e){return v("section",{className:"page-section h-full"},v(w,{posts:e.posts}))};g.getInitialProps=i(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("http://localhost:3000/api/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",{posts:n});case 7:case"end":return e.stop()}},e)}));t.default=g},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,s){var r=new XMLHttpRequest,o=[],u=[],a={},i=function(){return{ok:2==(r.status/100|0),statusText:r.statusText,status:r.status,url:r.responseURL,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(JSON.parse(r.responseText))},blob:function(){return Promise.resolve(new Blob([r.response]))},clone:i,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}};for(var c in r.open(t.method||"get",e,!0),r.onload=function(){r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){o.push(t=t.toLowerCase()),u.push([t,n]),a[t]=a[t]?a[t]+","+n:n}),n(i())},r.onerror=s,r.withCredentials="include"==t.credentials,t.headers)r.setRequestHeader(c,t.headers[c]);r.send(t.body||null)})}},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["52dC",1,0]]]);