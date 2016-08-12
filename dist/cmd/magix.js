/*Magix3.1.1 Licensed MIT*/define("magix",["$"],function(n){var t,e=n("$"),r=function(n,t){n?seajs.use(n,t):t&&t()},i=function(){},o=function(n,t,e,r,o){return i[x]=t[x],o=new i,P(o,e),P(n,r),o.constructor=n,n[x]=o,n},a=e.isPlainObject,u=e.isArray,f=function(n,t){e(n).html(t)},c=function(n,t,r,i){t&&!c[n]&&(c[n]=1,r=e(w+j),r.length?(i=r.prop("styleSheet"),i?i.cssText+=t:r.append(t)):e("head").append('<style id="'+j+'">'+t+"</style>"))},s=0,$="",h=[],d=h.slice,l=function(){},p=",",v=null,m=window,g=document,w="#",y="",b="object",x="prototype",k="/",V=/[#?].*$/,q=/([^=&?\/#]+)=?([^&#?]*)/g,S=/(?!^)=|&/,I=function(n){return(n||"mx_")+s++},j=I(),T=I(),U={rootId:I(),defaultView:T,error:function(n){throw n}},H=U.hasOwnProperty,A=function(n){return typeof n==b?n:g.getElementById(n)},O=function(n,t,e){if(n=A(n),t=A(t),n&&t&&(e=n==t,!e))try{e=t.contains?t.contains(n):16&t.compareDocumentPosition(n)}catch(r){}return e},P=function(n,t,e){for(e in t)n[e]=t[e];return n},Z=function(n,t,e,r,i,o){for(u(n)||(n=[n]),u(t)||(t=[t]),r=0;o=n[r];r++)try{i=o&&o.apply(e,t)}catch(a){U.error(a)}return i},M=function(n,t){return n&&H.call(n,t)},E=function(n,t){return t.f-n.f||t.t-n.t},L=function(n,t,e,r){r=this,r.c=[],r.b=0|t||5,r.x=r.b+(n||20),r.r=e};P(L[x],{get:function(n){var t=this,e=t.c,r=e[y+n];return r&&(r.f++,r.t=s++,r=r.v),r},each:function(n,t,e,r,i){for(e=this,r=e.c,i=r.length-1;i>-1;i--)n(r[i].v,t,e)},set:function(n,t){var e=this,r=e.c,i=y+n,o=r[i],a=e.b;if(!o){if(r.length>=e.x)for(r.sort(E);a--;)o=r.pop(),o.f>0&&e.del(o.o);o={o:n},r.push(o),r[i]=o}o.v=t,o.f=1,o.t=s++},del:function(n){n=y+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=$,delete t[n],r&&Z(r,e.o,e))},has:function(n){return M(this.c,y+n)}});var N,C=new L,D=function(n,t,e){try{e=decodeURIComponent(e)}catch(r){}N[t]=e},J=function(n){var t,e=C.get(n);return e||(N={},t=n.replace(V,$),n==t&&S.test(t)&&(t=$),n.replace(t,$).replace(q,D),C.set(n,e={a:t,b:N})),{path:e.a,params:P({},e.b)}},R=function(n,t,e){var r,i,o,a=[];for(i in t)r=t[i]+$,(!e||r||M(e,i))&&(r=encodeURIComponent(r),a.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+a.join("&")),n},B=function(n,t){var e,r,i,o={};if(n&&(i=n.length))for(e=0;i>e;e++)r=n[e],o[t&&r?r[t]:r]=t?r:(0|o[r])+1;return o},F=Object.keys||function(n,t,e){t=[];for(e in n)M(n,e)&&t.push(e);return t},K={config:function(n,t){return t=U,n&&(t=a(n)?P(t,n):t[n]),t},boot:function(n){P(U,n),r(U.ini,function(t){P(U,t),P(U,n),r(U.exts,function(){ln.on("changed",Sn),ln.bind()})})},toMap:B,toTry:Z,toUrl:R,parseUrl:J,mix:P,has:M,keys:F,inside:O,node:A,applyStyle:c,guid:I,Cache:L},Q="on",_={fire:function(n,t,e,r){var i,o,a,u,f=y+n,c=this,s=c[f];if(t||(t={}),t.type||(t.type=n),s)for(i=s.length,o=i-1;i--;)a=r?i:o-i,u=s[a],u.d?(s.splice(a,1),o--):Z(u.f,t,c);s=c[Q+n],s&&Z(s,t,c),e&&c.off(n)},on:function(n,t){var e=this,r=y+n,i=e[r]||(e[r]=[]);i.push({f:t})},off:function(n,t){var e,r,i=y+n,o=this,a=o[i];if(t){if(a)for(e=a.length;e--;)if(r=a[e],r.f==t&&!r.d){r.d=1;break}}else delete o[i],delete o[Q+n]}};K.Event=_;var z,G,W,X,Y,nn,tn="path",en="view",rn="params",on=new L,an=new L,un=m.location,fn={params:{},href:$},cn=/(?:^https?:\/\/[^\/]+|#.*$)/gi,sn=/^[^#]*#?!?/,$n=function(n,t,e){if(n){e=this[rn],n=(n+$).split(p);for(var r=0;r<n.length&&!(t=M(e,n[r]));r++);}return t},hn=function(n){if(W||(W=U.routes||{},X=U.unmatchView,Y=U.defaultView,nn=U.defaultPath||k,W[nn]||(W[nn]=Y)),!n[en]){var t=n.hash[tn]||ln.edge&&n.query[tn]||nn;n[tn]=t,n[en]=W[t]||X||Y}},dn=function(n,t){var e=n.href,r=t.href,i=e+y+r,o=an.get(i);if(!o){var a,u,f,c;o={isParam:$n,force:!n.href},o[rn]=c={};var s,$,h=n[rn],d=t[rn],l=[tn,en].concat(F(h),F(d));for(s=l.length-1;s>=0;s--)$=l[s],1==s&&(h=n,d=t,c=o),u=h[$],f=d[$],u!=f&&(c[$]={from:u,to:f},a=1);an.set(i,o={a:a,b:o})}return o},ln=P({update:function(n,t,e,r){n=R(n,t,e.query[rn]),n!=e.srcHash&&(n="#!"+n,r?un.replace(n):un.hash=n)},parse:function(n){n=n||un.href;var t,e,r,i,o=on.get(n);return o||(t=n.replace(cn,$),e=n.replace(sn,$),r=J(t),i=J(e),o={href:n,srcQuery:t,srcHash:e,query:r,hash:i,params:P(P({},r[rn]),i[rn])},hn(o),on.set(n,o)),o},diff:function(){var n=ln.parse(),t=dn(fn,fn=n);return t.a&&(G=fn[rn],ln.fire("changed",z=t.b)),z},to:function(n,t,e){!t&&a(n)&&(t=n,n=$);var r=J(n),i=r[rn],o=r[tn],u=fn[tn];if(P(i,t),o)for(u in fn.query[rn])M(i,u)||(i[u]=$);else G&&(o=u,i=P(P({},G),i));ln.update(o,G=i,fn,e)}},_);K.Router=ln,ln.bind=function(){var n,t=ln.parse().srcHash;e(m).on("hashchange",function(e,r){r=ln.parse(),n=r.srcHash,n!=t&&(e={backward:function(){e.p=1,un.hash="#!"+t},forward:function(){e.p=1,t=n,ln.diff()},prevent:function(){e.p=1},location:r},ln.fire("change",e),e.p||e.forward())}),m.onbeforeunload=function(n){n=n||m.event;var t={};return ln.fire("pageunload",t),t.msg?(n&&(n.returnValue=t.msg),t.msg):void 0},ln.diff()};var pn,vn,mn=/\{(.+)\}/,gn=function(n,t,e){n.$d||n.$h||n.$cc!=n.$rc||(n.$cr||(n.$cr=1,n.$ca=0,n.fire("created")),t=n.id,e=bn[n.pId],e&&!M(e.$r,t)&&(e.$r[t]=1,e.$rc++,gn(e)))},wn=function(n,t,e,r){t||(t={}),!n.$ca&&n.$cr&&(n.$cr=0,n.$ca=1,n.fire("alter",t),e=n.id,r=bn[n.pId],r&&M(r.$r,e)&&(r.$rc--,delete r.$r[e],wn(r,t)))},yn=function(n,e){return pn||(t=g.body,n=U.rootId,e=A(n),e||(t.id=n),pn=new In(n)),pn},bn={},xn=function(n,t){M(bn,n)||(bn[n]=t,In.fire("add",{vframe:t}))},kn=function(n,t,e){for(t=n.$il;t.length;)e=t.shift(),e.r||n.invoke(e.n,e.a),delete t[e.k]},Vn=function(n,t,e){e=bn[n],e&&(delete bn[n],In.fire("remove",{vframe:e,fcc:t}))},qn=function(n,t){if(n&&(t=n.$v)&&t.$s>0){var e=rt(t);e&&t.render();for(var r=n.children(),i=r.length,o=0;i>o;)qn(bn[r[o++]])}},Sn=function(n){var t,e=yn();(t=n.view)?e.mountView(t.to):qn(e)},In=function(n,t,e){e=this,e.id=n,e.$c={},e.$cc=0,e.$rc=0,e.$s=1,e.$r={},e.$il=[],e.pId=t,xn(n,e)};P(In,P({root:yn,all:function(){return bn},get:function(n){return bn[n]}},_)),P(P(In[x],_),{mountView:function(n,t){var e,i,o,a=this,u=A(a.id);!a.$a&&u&&(a.$a=1,a.$t=u.innerHTML),a.unmountView(),a.$d=0,u&&n&&(a.path=n,e=J(n),i=++a.$s,r(e.path,function(n){if(i==a.$s){et(n);var r,u,f=e.params,c=a.parent();if(c=c&&c.$v,c=c&&c.$updater)for(r in f)u=f[r],u=u.match(mn),u&&(f[r]=c.get(u[1]));var s=P(f,t);o=new n({owner:a,id:a.id},s),a.$v=o,Yn(o),o.init(s),o.render(),o.tmpl||o.$p||o.endUpdate()}}))},unmountView:function(){var n,t,e=this,r=e.$v;e.$il=[],r&&(vn||(t=1,vn={id:e.id}),e.$d=1,e.unmountZone(0,1),wn(e,vn),e.$v=0,it(r),n=A(e.id),n&&e.$a&&f(n,e.$t),t&&(vn=0)),e.$s++},mountVframe:function(n,t,e){var r,i=this;return wn(i),r=bn[n],r||(M(i.$c,n)||(i.$cl=$,i.$cc++),i.$c[n]=n,r=new In(n,i.id)),r.mountView(t,e),r},mountZone:function(n,t){var r,i,o,a=this;n=n||a.id;var u=e(w+n+" [mx-view]");for(a.$h=1,a.unmountZone(n,1),r=u.length-1;r>=0;r--)i=u[r],o=i.id||(i.id=I()),a.mountVframe(o,i.getAttribute("mx-view"),t);a.$h=0,gn(a)},unmountVframe:function(n,t){var e,r,i,o=this;n=n?o.$c[n]:o.id,e=bn[n],e&&(r=e.$cr,i=e.pId,e.unmountView(),Vn(n,r),e.id=e.pId=$,e=bn[i],e&&M(e.$c,n)&&(delete e.$c[n],e.$cl=$,e.$cc--,t||gn(e)))},unmountZone:function(n,t){var e,r=this,i=r.$c;for(e in i)(!n||e!=n&&O(e,n))&&r.unmountVframe(e,1);t||gn(r)},parent:function(n,t){for(t=this,n=n>>>0||1;t&&n--;)t=bn[t.pId];return t},children:function(n){return n=this,n.$cl||(n.$cl=F(n.$c))},invoke:function(n,t){var e,r,i,o,a,u,f=this;return(r=f.$v)&&r.$p?e=(i=r[n])&&Z(i,t,r):(a=f.$il,o=a[u=y+n],o&&(o.r=1),o={n:n,a:t,k:u},a.push(o),a[u]=o),e}}),K.Vframe=In;var jn=function(n,t){t=n.data,Z(t.f,n,t.v)},Tn=function(n,t,r,i,o,a){i?e(n).off(t,o,r):e(n).on(t,o,a,r)},Un="parentNode",Hn=new L(30,10),An=/([^\(]+)\(([\s\S]*)?\)/,On={},Pn=function(n){for(var e,r,i,o,a,u,f,c,s,$,d=n.target,l=n.type,p="mx-"+l,v=[];d!=t&&1==d.nodeType;){if(e=d.getAttribute(p)){if(v=[],a=d.$f,!a)for(u=d;u=u[Un];)if(M(bn,f=u.id)){d.$f=a=f;break}a?(i=bn[a],o=i&&i.$v,o&&o.$s>0&&(c=Hn.get(e),c||(c=e.match(An)||h,c={n:c[1],i:c[2]},c.p=c.i&&Z(Function("return "+c.i))||{},Hn.set(e,c)),s=c.n+y+l,$=o[s],$&&(n.current=d,n.currentTarget=d,n.params=c.p,Z($,n,o)))):U.error(Error("bad:"+e))}if((r=d.$)&&r[l]||n.mxStop||n.isPropagationStopped())break;v.push(d),d=d[Un]||t}for(;d=v.pop();)r=d.$||(d.$={}),r[l]=1},Zn=function(n,e){var r=0|On[n],i=r>0?1:0;r+=e?-i:i,r||(Tn(t,n,Pn,e),e||(r=1)),On[n]=r},Mn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},En=/\\|'|\r|\n|\u2028|\u2029/g,Ln=function(n){return"\\"+Mn[n]},Nn=/<%=([\s\S]+?)%>|<%!([\s\S]+?)%>|<%([\s\S]+?)%>|$/g,Cn=function(n){var t=0,e="$p+='";n.replace(Nn,function(r,i,o,a,u){return e+=n.slice(t,u).replace(En,Ln),t=u+r.length,i?e+="'+\n(($t=("+i+"))==null?'':$e($t))+\n'":o?e+="'+\n(($t=("+o+"))==null?'':$t)+\n'":a&&(e+="';\n"+a+"\n$p+='"),r}),e+="';\n",e="with($mx){\n"+e+"}\n",e="var $t,$p='',$em={'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;','\\'':'&#x27;','`':'&#x60;'},$er=/[&<>\"'`]/g,$ef=function(m){return $em[m]},$e=function(v){v=v==null?'':''+v;return v.replace($er,$ef)};\n"+e+"return $p;\n";var r;try{r=Function("$mx",e)}catch(i){throw i.source=e,i}return r},Dn=new L,Jn=function(n,t){var e=Dn.get(n);return e||(e=Cn(n),Dn.set(n,e)),e(t)},Rn=/\u001f/g,Bn=/@(\d+)\-\u001f/g,Fn=JSON.stringify,Kn=function(n,t,e,r){var i=n.$v,o=i.tmpl,a=i.tmplData,u=i.id,f=function(n,t){return Jn(n,t).replace(Rn,u)};if(t||!n.$rd)if(n.$rd&&e&&a)for(var c,s,$,h,d,l,p,v,m={},g=function(n){var t=n.id||(n.id=I("n"));if(!m[t]){m[t]=1;var e=s.view&&bn[t];if(h)for(var o=s.attrs.length-1;o>=0;o--){var a=s.attrs[o],u=f(a.v,r);a.p?n[a.n]=u:n.setAttribute(a.n,u)}e&&e.unmountView(),s.tmpl&&$&&i.setHTML(t,f(s.tmpl,r)),e&&e.mountView(f(s.view,r))}},w=a.length-1;w>=0;w--){if($=0,h=0,s=a[w],d=1,p=s.mask,c=s.pKeys)for(l=c.length;--l>=0;)if(M(e,c[l])){d=0;break}if(d){for(c=s.keys,l=c.length,d=0;--l>=0;)if(M(e,c[l])){if(d=1,!p||$&&h){$=s.tmpl,h=s.attrs;break}v=p.charAt(l),$=$||1&v,h=h||2&v}if(d){d="#"+u+" "+s.selector.replace(Rn,u);var y=document.querySelectorAll(d);for(l=0;l<y.length;)g(y[l++])}}}else{var b,x,k=function(n,t){return b[t].tmpl};if(a){if(!a.$)for(a.$=b={},x=a.length;x>0;){var V=a[--x];V.guid&&(b[V.guid]=V,V.tmpl=V.tmpl.replace(Bn,k),delete V.guid)}b=a.$}n.$rd=1;var q=o.replace(Bn,k);i.setHTML(u,f(q,r))}},Qn=function(n){var t=this;t.$v=n,t.$data={},t.$json={}},_n=Qn.prototype;P(_n,_),P(_n,{get:function(n){var t=this.$data;return n&&(t=t[n]),t},set:function(n){var t=this;return P(t.$data,n),t},digest:function(){var n,t,e,r,i,o=this,a=o.$data,u=o.$json,f={};for(e in a)t=a[e],i=0,r=Fn(t),M(u,e)?(i=r!=u[e],u[e]=r):(u[e]=r,i=1),i&&(f[e]=n=1);return Kn(o,n,f,a),n&&(o.fire("changed",{keys:f}),delete o.$lss),o},snapshot:function(){var n=this;return n.$ss=Fn(n.$json),n},altered:function(){var n=this;return n.$ss?(n.$lss||(n.$lss=JSON.stringify(n.$json)),n.$ss!=n.$lss):!0}});var zn=/^(\$?)([^<]+)<([^>]+)>$/,Gn=function(n,t){var e,r,i=n.$r;for(e in i)r=i[e],(t||r.x)&&Wn(i,e,1)},Wn=function(n,t,e){var r,i,o=n[t];return o&&(i=o.e,r=i.destroy,r&&e&&Z(r,h,i),delete n[t]),i},Xn=function(n,t,e){t=n.render,n.render=function(){e=this,e.$s>0&&(e.$s++,e.fire("rendercall"),Gn(e),Z(t,d.call(arguments),e))}},Yn=function(n,t){var e,r,i=n.$eo;for(e in i)Zn(e,t);for(i=n.$el,e=i.length;e--;)r=i[e],Tn(r.e||w+n.id,r.n,jn,t,r.s,{v:n,f:r.f})},nt=[],tt={win:m,doc:g},et=function(n){if(!n[y]){n[y]=1;var t,e,r,i,o,a,u,f,c=n[x],s={},$=[];for(u in c)if(t=c[u],e=u.match(zn))for(a=e[1],r=e[2],i=e[3].split(p);f=i.pop();)a?(o=tt[r],$.push({f:t,s:o?v:" "+r,n:f,e:o})):(s[f]=1,c[r+y+f]=t);Xn(c),c.$eo=s,c.$el=$}},rt=function(n){var t,e=n.$l;return e.f&&(e.p&&(t=z.path),t||(t=z.isParam(e.k))),t},it=function(n){n.$s>0&&(n.$s=0,n.fire("destroy",0,1,1),Gn(n,1),Yn(n,1)),n.$s--},ot=function(n,t){t=this,P(t,n),t.$l={k:[]},t.$r={},t.$s=1,Z(nt,n,t),t.$updater=new Qn(t)},at=ot[x];P(ot,{merge:function(n,t){t=n&&n.ctor,t&&nt.push(t),P(at,n)},extend:function(n,t){var e=this;n=n||{};var r=n.ctor,i=[];r&&i.push(r);var a=function(n,t){e.call(this,n,t),Z(i,t,this)},u=n.mixins;if(u)for(var f,c=u.length;--c>=0;)f=u[c],r=f.ctor,r&&i.push(r),P(n,r);return a.extend=e.extend,o(a,e,n,t)}}),P(P(at,_),{render:l,init:l,beginUpdate:function(n,t){t=this,t.$s>0&&t.$p&&t.owner.unmountZone(n,1)},endUpdate:function(n,t,e,r){t=this,t.$s>0&&(r=t.$p,t.$p=1,e=t.owner,e.mountZone(n),r||kn(e))},wrapAsync:function(n,t){var e=this,r=e.$s;return function(){r>0&&r==e.$s&&n&&n.apply(t||e,arguments)}},observe:function(n,t){var e,r,i=this;e=i.$l,e.f=1,r=e.k,t&&(e.p=t),n&&(e.k=r.concat((n+$).split(p)))},capture:function(n,t,e,r,i){return r=this.$r,Wn(r,n,1),i={e:t,x:e},r[n]=i,t},release:function(n,t){return Wn(this.$r,n,t)},leaveTip:function(n,t){var e=this,r=function(r){r.prevent(),e.$tipped||(t.call(e)?(e.$tipped=!0,window.confirm(n)?(e.$tipped=!1,r.forward()):(e.$tipped=!1,r.backward())):r.forward())},i=function(r){t.call(e)&&(r.msg=n)};ln.on("change",r),ln.on("pageunload",i),e.on("destroy",function(){ln.off("change",r),ln.off("pageunload",i)})},share:function(n,t){var e=this;e.$sd||(e.$sd={}),e.$sd[n]=t},getShared:function(n){var t,e=this,r=e.$sd;if(r&&(t=M(r,n)))return r[n];var i=e.owner.parent();return i?i.invoke("getShared",n):void 0},setHTML:function(n,t){var e,r=this;r.beginUpdate(n),r.$s>0&&(e=A(n),e&&f(e,t)),r.endUpdate(n)}}),K.View=ot;var ut=e.type,ft=e.proxy,ct=e.now||Date.now,st=JSON.stringify,$t=function(){this.id=I("b"),this.$={}};P($t[x],{get:function(n,t,e){var r=this,i=arguments.length,o=i>=2,a=r.$,f=a;if(i){for(var c,s=u(n)?d.call(n):(n+$).split(".");(c=s.shift())&&f;)f=f[c];c&&(f=e)}return o&&ut(t)!=ut(f)&&(U.error(Error("type neq:"+n+"\n"+st(a))),f=t),f},set:function(n,t){var e,r=this;a(n)||(e={},e[n]=t,n=e),P(r.$,n)}});var ht=1,dt=2,lt=function(n,t,e){e=this[n],delete this[n],Z(e,t,e.e)},pt=function(n,t,e,r,i,o){var a=[],u=v,f=0;return function(c,s){var $,h=this;f++;var d=h.$m,l=d.k;a[c+1]=h;var p={bag:h,error:s};if(s)u=s,t.fire("fail",p),$=1;else if(!o.has(l)){l&&o.set(l,h),d.t=ct();var m=d.a;m&&Z(m,h,h),d.x&&t.clear(d.x),t.fire("done",p),$=1}if(!e.$o){var g=f==r;g&&(e.$b=0,i==dt&&(a[0]=u,Z(n,a,e))),i==ht&&Z(n,[s?s:v,h,g,c],e)}$&&t.fire("end",p)}},vt=function(n,t,e,r,i){if(n.$o)return n;if(n.$b)return n.enqueue(function(){vt(this,t,e,r,i)});n.$b=1;var o=n.constructor,a=o.$r;u(t)||(t=[t]);for(var f,c=t.length,s=pt(e,o,n,c,r,o.$c),$=0;c>$;$++)if(f=t[$]){var h,d=o.get(f,i),l=d.e,p=l.$m.k,v=ft(s,l,$);p&&a[p]?a[p].push(v):d.u?(p&&(h=[v],h.e=l,a[p]=h,v=ft(lt,a,p)),o.$s(l,v)):v()}return n},mt=function(){var n=this;n.id=I("s"),n.$q=[]};P(mt[x],{all:function(n,t){return vt(this,n,t,dt)},save:function(n,t){return vt(this,n,t,dt,1)},one:function(n,t){return vt(this,n,t,ht)},enqueue:function(n){var t=this;return t.$o||(t.$q.push(n),t.dequeue(t.$a)),t},dequeue:function(){var n=this,t=d.call(arguments);n.$b||n.$o||(n.$b=1,setTimeout(function(){if(n.$b=0,!n.$o){var e=n.$q.shift();e&&Z(e,n.$a=t,n)}},0))},destroy:function(n){n=this,n.$o=1,n.$q=0}});var gt=function(n,t,e){return e=[st(t),st(n)],e.join(y)},wt=function(n,t,e,r){r=n&&n.$m,r&&t[r.n]&&e.del(r.k)},yt=P({add:function(n){var t=this,e=t.$m;u(n)||(n=[n]);for(var r,i,o=n.length-1;o>-1;o--)r=n[o],r&&(i=r.name,r.cache=0|r.cache,e[i]=r)},create:function(n){var t=this,e=t.meta(n),r=e.cache,i=new $t;i.set(e),i.$m={n:e.name,a:e.after,x:e.cleans,k:r&&gt(e,n)},a(n)&&i.set(n);var o=e.before;return o&&Z(o,i,i),t.fire("begin",{bag:i}),i},meta:function(n){var t=this,e=t.$m,r=n.name||n,i=e[r];return i||n},get:function(n,t){var e,r,i=this;return t||(e=i.cached(n)),e||(e=i.create(n),r=1),{e:e,u:r}},clear:function(n){this.$c.each(wt,B((n+$).split(p)))},cached:function(n){var t,e,r=this,i=r.$c,o=r.meta(n),a=o.cache;if(a&&(e=gt(o,n)),e){var u=r.$r,f=u[e];f?t=f.e:(t=i.get(e),t&&a>0&&ct()-t.$m.t>a&&(t=0))}return t}},_);mt.extend=function(n,t,e){var r=this,i=function(){r.call(this)};return i.$s=n,i.$c=new L(t,e),i.$r={},i.$m={},o(i,r,v,yt)},K.Service=mt;var bt=function(n,t){var e=this,r=n&&n.ctor,i=function(){var n=this,t=arguments;e.apply(n,t),r&&r.apply(n,t)};return i.extend=bt,o(i,e,n,t)};return P(l[x],_),l.extend=bt,K.Base=l,define(T,function(){return ot.extend()}),K});