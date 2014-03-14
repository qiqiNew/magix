define("magix/magix",function(){var e=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,t=/\/[^\/]*$/,r=/[#?].*$/,n="",i=/([^=&?\/#]+)=?([^&=#?]*)/g,a="pathname",o=/^https?:\/\//i,c=0,f="/",s="vframe",u="\n",v=window.console,d=v&&v.error,p=function(){},l={tagName:s,rootId:"magix_vf_root",progress:p,coded:1,execError:function(e){d&&v.error(e)}},m=l.hasOwnProperty,h=function(e,t){return e?m.call(e,t):e},g=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=V.isObject(t)?y(e,t):h(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},x=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},w=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(0|t||5),void 0):new w(e,t)},y=function(e,t,r){for(var n in t)r&&h(r,n)||(e[n]=t[n]);return e};y(w.prototype,{get:function(e){var t,r=this,n=r.c;return e=a+e,h(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=c++,t=t.v)),t},set:function(e,t,r){var n=this,i=n.c,o=a+e,f=i[o];if(!h(i,o)){if(i.length>=n.b){i.sort(x);for(var s=n.b-n.x;s--;)f=i.pop(),delete i[f.k],f.m&&E(f.m,f.o,f)}f={},i.push(f),i[o]=f}return f.o=e,f.k=o,f.v=t,f.f=1,f.t=c++,f.m=r,t},del:function(e){e=a+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=n,delete t[e],r.m&&(E(r.m,r.o,r),r.m=n))},has:function(e){return e=a+e,h(this.c,e)}});var b=w(60),C=w(),E=function(e,t,r,n,i,a){for(V.isArray(e)||(e=[e]),t&&(V.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){l.execError(o)}return i},V={mix:y,has:h,safeExec:E,noop:p,config:g(l),start:function(e){var t=this;y(l,e),t.libRequire(["magix/router","magix/vom",l.iniFile],function(r,n,i){l=y(l,i,e),l["!tnc"]=l.tagName!=s,r.on("!ul",n.locChged),r.on("changed",n.locChged),n.on("progress",l.progress),t.libRequire(l.extensions,r.start)})},keys:Object.keys||function(e){var t=[];for(var r in e)h(e,r)&&t.push(r);return t},local:g({}),path:function(i,a){var c=i+u+a,s=C.get(c);if(!s){if(o.test(a))s=a;else if(i=i.replace(r,n).replace(t,n)+f,a.charAt(0)==f){var v=o.test(i)?8:0,d=i.indexOf(f,v);s=i.substring(0,d)+a}else s=i+a;for(;e.test(s);)s=s.replace(e,"$1/");C.set(c,s)}return s},pathToObject:function(e,t){var c=e+u+t,s=b.get(c);if(!s){s={};var v={},d=n;r.test(e)?d=e.replace(r,n):~e.indexOf("=")||(d=e);var p=e.replace(d,n);if(d&&o.test(d)){var l=d.indexOf(f,8);d=~l?d.substring(l):f}p.replace(i,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(i){}v[r]=n}),s[a]=d,s.params=v,b.set(c,s)}return s},objectToPath:function(e,t,r){var n,i=e[a],o=[],c=e.params;for(var f in c)n=c[f],(!r||n||h(r,f))&&(t&&(n=encodeURIComponent(n)),o.push(f+"="+n));return o.length&&(i=i+"?"+o.join("&")),i},listToMap:function(e,t){var r,n,i,a={};if(V.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:w},M=Object.prototype.toString;return y(V,{libRequire:function(e,t){V.isArray(e)||(e=[e]),e?require(e,t):t&&t()},isArray:$.isArray,isFunction:$.isFunction,isObject:function(e){return"[object Object]"==M.call(e)},isString:function(e){return"[object String]"==M.call(e)},isNumber:function(e){return"[object Number]"==M.call(e)},extend:function(e,t,r,n){e.superclass=t.prototype,t.prototype.constructor=t;var i=function(){};return i.prototype=t.prototype,e.prototype=new i,V.mix(e.prototype,r),V.mix(e,n),e.prototype.constructor=e,e}})}),define("magix/router",["magix/magix","magix/event"],function(e,t){var r,n,i,a,o=window,c="",f="pathname",s="view",u=e.has,v=e.mix,d=e.keys,p=e.config(),l=e.cache(),m=e.cache(40),h={params:{},href:c},g=/#.*$/,x=/^[^#]*#?!?/,w="params",y=p.nativeHistory,b=p.coded,C=function(t,r,n){if(t){n=this[w],e.isString(t)&&(t=t.split(","));for(var i=0;t.length>i&&!(r=u(n,t[i]));i++);}return r},E=function(){return this[f]},V=function(){return this[s]},M=function(e,t,r,n){return r=this,n=r[w],arguments.length>1?n[e]=t:n[e]},I=function(t){var r=e.pathToObject(t,b),n=r[f];return n&&a&&(r[f]=e.path(o.location[f],n)),r},j=v({viewInfo:function(t,r){var i,a;if(!n){n={rs:p.routes||{},nf:p.notFoundView};var o=p.defaultView;n.dv=o;var s=p.defaultPathname||c;i=n.rs,n.f=e.isFunction(i),n.f||i[s]||!o||(i[s]=o),n[f]=s}return t||(t=n[f]),i=n.rs,a=n.f?i.call(p,t,r):i[t],{view:a||n.nf||n.dv,pathname:t}},start:function(){var e=j,t=o.history;i=y&&t.pushState,a=y&&!i,i?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||o.location.href;var r=j,n=l.get(e);if(!n){var i=e.replace(g,c),a=e.replace(x,c),u=I(i),d=I(a),p={};v(p,u[w]),v(p,d[w]),n={get:M,set:M,href:e,refHref:h.href,srcQuery:i,srcHash:a,query:u,hash:d,params:p},l.set(e,n)}if(t&&!n[s]){var m;m=y?n.hash[f]||n.query[f]:n.hash[f];var b=r.viewInfo(m,n);v(n,b)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=m.get(i);if(!a){var o,c,u;a={},a[s]=u,a[f]=u,a[w]={};var v,p,l=[f,s];for(v=1;v>=0;v--)p=l[v],c=e[p],u=t[p],c!=u&&(a[p]={from:c,to:u},o=1);var h=e[w],g=t[w];for(l=d(h).concat(d(g)),v=l.length-1;v>=0;v--)p=l[v],c=h[p],u=g[p],c!=u&&(a[w][p]={from:c,to:u},o=1);a.occur=o,a.isParam=C,a.isPathname=E,a.isView=V,m.set(i,a)}return a},route:function(){var e=j,t=e.parseQH(0,1),n=!h.get,i=e.getChged(h,t);h=t,i.occur&&(r=t,e.fire("changed",{location:t,changed:i,force:n}))},navigate:function(t,n,o){var s=j;if(!n&&e.isObject(t)&&(n=t,t=c),n&&(t=e.objectToPath({params:n,pathname:t},b)),t){var d=I(t),p={};if(p[w]=v({},d[w]),p[f]=d[f],p[f]){if(a){var l=r.query[w];for(var m in l)u(l,m)&&!u(p[w],m)&&(p[w][m]=c)}}else{var h=v({},r[w]);p[w]=v(h,p[w]),p[f]=r[f]}var g,x=e.objectToPath(p,b,r.query[w]);g=i?x!=r.srcQuery:x!=r.srcHash,g&&(i?(s.poped=1,history[o?"replaceState":"pushState"](c,c,x),s.route()):(v(p,r,p),p.srcHash=x,p.hash={params:p[w],pathname:p[f]},s.fire("!ul",{loc:r=p}),x="#!"+x,o?location.replace(x):location.hash=x))}}},t);return j.useState=function(){var e=j,t=location.href;$(o).on("popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())})},j.useHash=function(){$(o).on("hashchange",j.route)},j}),define("magix/body",["magix/magix"],function(e){var t,r=e.has,n=e.mix,i={},a=document.body,o={},c=String.fromCharCode(26),f="mx-ei",s="mx-owner",u="addEventListener",v="removeEventListener",d=a[u],p={},l=65536,m="on",h=",",g=function(e){return e.id||(e.id="mx-e-"+l--)},x=function(e,t,r){return e&&e.setAttribute&&(r?e.setAttribute(t,r):r=e.getAttribute(t)),r},w=function(){this.returnValue=!1},y=function(){this.cancelBubble=!0},b={special:function(e){n(i,e)},process:function(e){if(e=e||window.event,e&&!e[m]){var n=e.target||e.srcElement||a;for(e[m]=1;n&&1!=n.nodeType;)n=n.parentNode;var i=n,o=e.type,u=p[o]||(p[o]=RegExp(h+o+"(?:,|$)"));if(!u.test(x(n,f))){for(var v,l,b="mx-"+o,C=[];i&&(v=x(i,b),l=x(i,f),!v&&!u.test(l));)C.push(i),i=i.parentNode;if(v){var E,V=v.split(c);if(V.length>1&&(E=V[0],v=V.pop()),E=E||x(i,s),!E)for(var M=i,$=t.all();M;){if(r($,M.id)){x(i,s,E=M.id);break}M=M.parentNode}if(!E)throw Error("bad:"+v);var I=t.get(E),j=I&&I.view;j&&(d||(e.preventDefault=w,e.stopPropagation=y),j.processEvent({info:v,se:e,st:o,tId:g(n),cId:g(i)}))}else for(var k;C.length;)k=C.shift(),l=x(k,f)||m,u.test(l)||(l=l+h+o,x(k,f,l))}}},act:function(e,r,n){var c=o[e]||0,f=c>0?1:0,s=b.process;if(c+=r?-f:f,!c){n&&(t=n);var p=i[e];p?b.lib(a,e,r,s):d?a[r?v:u](e,s,!1):a[m+e]=r?null:s,r||(c=1)}o[e]=c}},C={focus:2,blur:2,mouseenter:2,mouseleave:2};return b.special(C),b.lib=function(e,t,r,n){var i=C[t];1==i?$(e)[r?"off":"on"](t,n):$(e)[(r?"un":"")+"delegate"]("[mx-"+t+"]",t,n)},b}),define("magix/event",["magix/magix"],function(e){var t=function(e){return"~"+e},r=e.safeExec,n={fire:function(e,n,i,a){var o=t(e),c=this,f=c[o];if(f){n||(n={}),n.type||(n.type=e);for(var s,u,v=f.length,d=v-1;v--;)s=a?v:d-v,u=f[s],(u.d||u.r)&&(f.splice(s,1),d--),u.d||r(u.f,n,c)}i&&delete c[o]},on:function(e,r,n){var i=t(e),a=this[i]||(this[i]=[]),o={f:r};isNaN(n)?(o.r=n,a.push(o)):a.splice(0|n,0,o)},off:function(e,r){var n=t(e),i=this[n];if(i)if(r){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==r&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,r){this.on(e,r,t)}};return n}),define("magix/vframe",["magix/magix","magix/event","magix/view"],function(e,t,r){var n,i,a,o,c,f=document,s=f.body,u=65536,v=e.safeExec,d=[],p=e.mix,l=e.config("tagName"),m=e.config("rootId"),h=e.config("!tnc"),g=e.has,x=h?"mx-vframe":"mx-defer",w=s.contains,y=h&&s.querySelectorAll,b=" "+l+"[mx-vframe]",C="alter",E="created",V=function(e){return"object"==typeof e?e:f.getElementById(e)},M=function(e,t,r){return t=V(e),t&&(r=y?f.querySelectorAll("#"+t.id+b):t.getElementsByTagName(l)),r||d},$=function(e){return e.id||(e.id="magix_vf_"+u--)},I=function(e,t,r){if(e=V(e),t=V(t),e&&t)if(e!==t)try{r=w?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},j=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=c};return p(j,{root:function(e,t,r){if(!n){a=t,o=r,c=e;var i=V(m);i||(i=f.createElement(l),i.id=m,s.appendChild(i)),n=new j(m),e.add(n)}return n}}),p(p(j.prototype,t),{mountView:function(t,n){var i=this,f=V(i.id);if(f._bak?f._chgd=1:(f._bak=1,f._tmpl=f.innerHTML),i.unmountView(),t){var s=e.pathToObject(t),u=s.pathname,v=--i.sign;e.libRequire(u,function(e){if(v==i.sign){r.prepare(e);var t=new e({owner:i,id:i.id,$:V,path:u,vom:c,location:a});i.view=t,t.on("interact",function(e){e.tmpl||(f._chgd&&(f.innerHTML=f._tmpl),i.mountZoneVframes()),t.on("primed",function(){i.viewPrimed=1,i.fire("viewMounted")}),t.on("rendered",function(){i.mountZoneVframes()}),t.on("prerender",function(){i.unmountZoneVframes(0,1)||i.cAlter()})},0),n=n||{},t.load(p(n,s.params,n),o)}})}},unmountView:function(){var e=this;if(e.view){i||(i={}),e.unmountZoneVframes(0,1),e.cAlter(i),e.view.oust();var t=V(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,e.viewPrimed&&(delete e.viewPrimed,e.fire("viewUnmounted")),i=0}e.sign--},mountVframe:function(e,t,r){var n=this;n.fcc&&n.cAlter();var i=c.get(e);return i||(i=new j(e),i.pId=n.id,g(n.cM,e)||n.cC++,n.cM[e]=1,c.add(i)),i.mountView(t,r),i},mountZoneVframes:function(e,t){var r=this,n=e||r.id;r.unmountZoneVframes(n,1);var i=M(n),a=i.length,o={};if(a)for(var c,f,s,u,v=0;a>v;v++)if(c=i[v],f=$(c),!g(o,f)&&(s=c.getAttribute("mx-view"),u=!c.getAttribute(x),u=u!=h,u||s)){r.mountVframe(f,s,t);for(var d,p=M(c),l=0,m=p.length;m>l;l++)d=p[l],o[$(d)]=1}r.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=c.get(e);if(n){var i=n.fcc;n.unmountView(),c.remove(e,i);var a=c.get(n.pId);a&&g(a.cM,e)&&(delete a.cM[e],a.cC--,t||a.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i=this,a=i.cM;for(n in a)e?I(n,e)&&i.unmountVframe(n,r=1):i.unmountVframe(n,r=1);return t||i.cCreated(),r},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(E,e),t.fire(E,e)),c.vfCreated();var n=t.id,i=c.get(t.pId);i&&!g(i.rM,n)&&(i.rM[n]=i.cM[n],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;e||(e={});var r=t.fcc;if(delete t.fcc,!t.fca&&r){var n=t.view,i=t.id;n&&(t.fca=1,n.fire(C,e),t.fire(C,e));var a=c.get(t.pId);a&&g(a.rM,i)&&(a.rC--,delete a.rM[i],a.cAlter(e))}},locChged:function(){var t=this,r=t.view;if(t.viewInited&&r.sign>0){var n=r.olChanged(o),i={location:a,changed:o,prevent:function(){this.cs=d},to:function(t){t=t||d,e.isString(t)&&(t=t.split(",")),this.cs=t}};n&&v(r.locationChange,i,r);for(var f,s=i.cs||e.keys(t.cM),u=0,p=s.length;p>u;u++)f=c.get(s[u]),f&&f.locChged()}}}),j}),define("magix/view",["magix/magix","magix/event","magix/body"],function(e,t,r){var n=e.safeExec,i=e.has,a=",",o=[],c=e.noop,f=e.mix,s="~",u=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},v=e.cache(40),d="<",p=">",l=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,m=String.fromCharCode(26),h={prevent:function(e){e=e||this.srcEvent,e.preventDefault()},stop:function(e){e=e||this.srcEvent,e.stopPropagation()},halt:function(e){this.prevent(e),this.stop(e)}},g=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,x=/(\w+):([^,]+)/g,w=/([$\w]+)<([\w,]+)>/,y=function(e){var t=this;f(t,e),t.sign=1,n(y.ms,[e],t)};y.ms=[],y.prepare=function(e){if(!e[s]){e[s]=1;var t,r,n,i,o,f=e.prototype,v={};for(var l in f)if(t=f[l],r=l.match(w))for(n=r[1],i=r[2],i=i.split(a),o=i.length-1;o>-1;o--)r=i[o],v[r]=1,f[n+d+r+p]=t;else"render"==l&&t!=c&&(f[l]=u(t));i&&(f.$evts=v)}},y.mixin=function(e,t){t&&y.ms.push(t),f(y.prototype,e)},f(f(y.prototype,t),{render:c,locationChange:c,init:c,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,i=e.sign,a=function(a){if(i>0&&i==e.sign){t&&(e.template=e.wrapMxEvent(a)),e.dEvts(),e.fire("interact",{tmpl:t},1),n(e.init,r,e),e.fire("inited",0,1),e.owner.viewInited=1,n(e.render,o,e);var c=!t&&!e.rendered;c&&(e.rendered=1,e.fire("primed",0,1))}};t?e.fetchTmpl(e.path,a):a()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=1),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(l,"$&"+this.id+m)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign>0&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(t){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;e.isObject(t)&&(r.pn=t.pathname,t=t.keys),t&&(r.keys=i.concat((t+"").split(a)))},olChanged:function(e){var t=this,r=t.$ol,n=1;if(r&&(r.pn&&(n=e.isPathname()),!n)){var i=r.keys;n=e.isParam(i)}return n},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.dEvts(1)),e.sign--},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign>0){var r=e.info,i=e.se,a=v.get(r);a||(a=r.match(g),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(x,function(e,t,r){a.p[t]=r}),v.set(r,a));var o=a.n+d+e.st+p,c=t[o];if(c){var f=h[a.f];f&&f.call(h,i),n(c,{currentId:e.cId,targetId:e.tId,type:e.st,srcEvent:i,halt:h.halt,prevent:h.prevent,stop:h.stop,params:a.p},t)}}},dEvts:function(e){var t=this,n=t.$evts,i=t.vom;for(var a in n)r.act(a,e,i)}});var b,C="?t="+Date.now(),E={},V={};return y.prototype.fetchTmpl=function(e,t){var r=this,a="template"in r;if(a)t(r.template);else if(i(E,e))t(E[e]);else{var o=e.indexOf("/");if(!b){var c=e.substring(0,o);b=require.s.contexts._.config.paths[c]}e=e.substring(o+1);var f=b+e+".html",s=V[f],u=function(r){t(E[e]=r)};s?s.push(u):(s=V[f]=[u],$.ajax({url:f+C,success:function(e){n(s,e),delete V[f]},error:function(e,t){n(s,t),delete V[f]}}))}},y.extend=function(t,r,i){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&n(r,arguments,this)};return o.extend=a.extend,e.extend(o,a,t,i)},y}),define("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e,t,r){var n=t.has,i=t.mix,a=0,o=0,c=0,f=0,s={},u={},v={},d=t.mix({all:function(){return s},add:function(e){n(s,e.id)||(a++,s[e.id]=e,d.fire("add",{vframe:e}))},get:function(e){return s[e]},remove:function(e,t){var r=s[e];r&&(a--,t&&o--,delete s[e],d.fire("remove",{vframe:r}))},vfCreated:function(){if(!f){o++;var e=o/a;e>c&&d.fire("progress",{percent:c=e},f=1==e)}},locChged:function(t){var r,n=t.loc;if(n?r=1:n=t.location,i(u,n),!r){i(v,t.changed);var a=e.root(d,u,v);v.view?a.mountView(n.view):a.locChged()}}},r);return d}),document.createElement("vframe");