/*!3.8.8 MIT kooboy_li@163.com*/module.exports=(()=>{let e,t=require("$"),r=t.isPlainObject,i=t.isArray,n=0,o="",l=[],a=",",f=null,s=window,d=document,$=t(d),h=s.setTimeout,u="changed",c="change",p="pageunload",g="value",b="mxs",m="#",v=function(){},y=JSON.stringify,w="\x1e",x="object",k="prototype",V="params",A="path",T="mx-view",I=/[#?].*$/,S=/([^=&?\/#]+)=?([^&#?]*)/g,C=/(?!^)=|&/,N=e=>(e||"mx_")+n++,q=N(),H={rootId:N(),defaultView:q,error(e){throw e}},O=e=>typeof e==x?e:d.getElementById(e),P=e=>!e||typeof e!=x,U=(e,t,r)=>{let i,n,o,l=0;for(o in e)i=e[o],n=t[o],P(i)&&n===i||(r[o]=1,l=1),t[o]=i;return l},j=(e,t,r)=>{if(e=O(e),t=O(t),e&&t&&!(r=e==t))try{r=16==(16&t.compareDocumentPosition(e))}catch(e){}return r},{assign:E,keys:L,hasOwnProperty:M}=Object,Z=t("head"),R=(e,t)=>{t&&!R[e]&&(R[e]=1,Z.append(`<style>${t}`))},B=e=>e.id||(e.$a=1,e.id=N()),D=(e,t,r,n,o)=>{t=t||l,i(e)||(e=[e]),i(t)||(t=[t]);for(o of e)try{n=o&&o.apply(r,t)}catch(e){H.error(e)}return n},z=(e,t)=>e&&M.call(e,t),F=(e,t,r)=>{let i,n;if(!r&&P(t))(i=t+o)[0]==w&&(t=e[i]);else for(i in t)n=t[i],r&&!P(n)&&F(e,n,r),i[0]==w&&(delete t[i],i=e[i]),t[i]=(n+o)[0]==w?e[n]:n;return t},J=(e,t)=>t.f-e.f||t.t-e.t,Q=function(e,t,r,i){(i=this).c=[],i.b=t||5,i.x=i.b+(e||20),i.r=r};E(Q[k],{get(e){let t=this.c[w+e];return t&&(t.f++,t.t=n++,t=t.v),t},each(e,t,r,i,n){i=(r=this).c;for(n of i)e(n.v,t,r)},set(e,t){let r=this,i=r.c,o=w+e,l=i[o],a=r.b;if(!l){if(i.length>=r.x)for(i.sort(J);a--;)(l=i.pop()).f>0&&r.del(l.o);l={o:e},i.push(l),i[o]=l}l.v=t,l.f=1,l.t=n++},del(e){e=w+e;let t=this.c,r=t[e],i=this.r;r&&(r.f=-1,r.v=o,delete t[e],i&&D(i,r.o))},has(e){return z(this.c,w+e)}});let X,_=t.isFunction,G=(e,t)=>{let r=H.views||v;if(r[q]||(r[q]=X),!e)return t();i(e)||(e=[e]);let n,o=[],l=0,a=()=>{l||t.apply(he,o)},f=(e,t,r)=>{(e=e(r=(e=>{o[t]||(l--,o[t]=e,a())}))).then&&e.then(r)};for(let t=0;t<e.length;t++)n=r[e[t]],_(n)&&!n.extend?(l++,f(n,t)):o[t]=r[e[t]];a()},K=function(){},W=(e,t,r,i,n)=>(K[k]=t[k],n=new K,E(n,r),E(e,i),n.constructor=e,e[k]=n,e),Y=t.find||t.zepto,ee=Y.matchesSelector||Y.matches,te=(e,t)=>{t=e.data,e.eventTarget=t.e,D(t.f,e,t.v)},re=(e,r,i,n,o)=>{o&&(r+=`.${o.i}`),n?t(e).off(r,i):t(e).on(r,o,i)};let ie,ne=new Q,oe=0,le=(e,t,r)=>{try{r=decodeURIComponent(r)}catch(e){}ie[t]=r},ae=e=>{let t,r=ne.get(e);return r||(ie={},e==(t=e.replace(I,o))&&C.test(t)&&(t=o),e.replace(t,o).replace(S,le),ne.set(e,r={a:t,b:ie})),{path:r.a,params:{...r.b}}},fe=(e,t,r)=>{let i,n,l,a=[];for(n in t)i=t[n]+o,(!r||i||z(r,n))&&(i=encodeURIComponent(i),a.push(l=n+"="+i));return l&&(e+=(e&&(~e.indexOf("?")?"&":"?"))+a.join("&")),e},se=(e,t)=>{let r,i={};if(e)for(r of e)i[t&&r?r[t]:r]=t?r:1+(0|i[r]);return i},de=new Q,$e=(e,t,r)=>(de.has(e)?r=de.get(e):(r=D(Function(`return ${e}`)),e.indexOf(w)>-1?F(t,r,1):de.set(e,r)),r),he={config:(e,t)=>(t=H,e&&(t=r(e)?E(t,e):t[e]),t),boot(e){E(H,e),G(H.ini,t=>{E(H,t,e),G(H.exts,()=>{Re.on(u,Je),ye.on(u,Je),oe=1,Ee()})})},toMap:se,toTry:D,toUrl:fe,parseUrl:ae,mix:E,has:z,keys:L,inside:j,node:O,applyStyle:R,guid:N,use:G,Cache:Q,nodeId:B},ue={fire(e,t,r,i){let n,l,a,f,s=this,d=s[w+e];if(t||(t={}),t.type||(t.type=e),d)for(l=(n=d.length)-1;n--;)(f=d[a=i?n:l-n]).f?(f.x=1,D(f.f,t,s),f.x=o):f.x||(d.splice(a,1),l--);(d=s[`on${e}`])&&D(d,t,s),r&&s.off(e)},on(e,t){let r=w+e;(this[r]||(this[r]=[])).push({f:t})},off(e,t){let r,i=w+e,n=this,l=n[i];if(t){if(l)for(r of l)if(r.f==t){r.f=o;break}}else delete n[i],delete n[`on${e}`]}};he.Event=ue;let ce={},pe={},ge={},be=0,me=e=>{e=(e+o).split(",");for(let t of e)z(pe,t)?pe[t]++:pe[t]=1;return e},ve=e=>{let t,r;for(t of e)z(pe,t)&&((r=--pe[t])||(delete pe[t],delete ce[t]))};let ye={get(e){let t=e?ce[e]:ce;return t},set(e){return be=U(e,ce,ge)||be,this},digest(e){e&&ye.set(e),be&&(be=0,this.fire(u,{keys:ge}),ge={})},diff:()=>ge,clean:e=>({ctor(){e=me(e),this.on("destroy",()=>ve(e))}}),...ue};he.State=ye;let we,xe,ke,Ve,Ae,Te,Ie="view",Se=new Q,Ce=new Q,Ne=s.location,qe=0,He={query:{},params:{},href:o},Oe=/(?:^.*\/\/[^\/]+|#.*$)/gi,Pe=/^[^#]*#?!?/,Ue=function(e){return this[V][e]||o},je=(e,t)=>{e=`#!${e}`,t?Ne.replace(e):Ne.hash=e},Ee=()=>{let e,t,r=Me().srcHash;re(s,"hashchange",(i,n,l)=>{t||(n=Me(),(e=n.srcHash)!=r&&(l=(()=>{i.p=1,r=e,t=o,je(e),Ze()}),i={reject(){i.p=1,t=o,je(r)},resolve:l,prevent(){t=1}},Re.fire(c,i),t||i.p||l()))}),re(s,"beforeunload",(e,t,r)=>{if(e=e||s.event,t={},Re.fire(p,t),r=t.msg)return e&&(e.returnValue=r),r}),Ze()},Le=d.title,Me=e=>{e=e||Ne.href;let t,i,n,l,a,f=Se.get(e);return f||(t=e.replace(Oe,o),i=e.replace(Pe,o),n=ae(t),l=ae(i),a={...n[V],...l[V]},f={get:Ue,href:e,srcQuery:t,srcHash:i,query:n,hash:l,params:a},oe&&(((e,t)=>{if(xe||(xe=H.routes||{},ke=H.unmatchView,Ve=H.defaultView,Ae=H.defaultPath||"/",Te=H.rewrite),!e[Ie]){let i=e.hash[A]||Ae;Te&&(i=Te(i,e[V],xe)),t=xe[i]||ke||Ve,e[A]=i,e[Ie]=t,r(t)&&E(e,t)}})(f),Se.set(e,f))),f},Ze=()=>{let e=Me(),t=((e,t)=>{let r=e.href,i=t.href,n=r+w+i,o=Ce.get(n);if(!o){let i,l;o={params:l={},force:!r};let a,f=e[V],s=t[V],d=L(f).concat(L(s)),$=e=>{let t=f[e],r=s[e];t!=r&&(l[e]={from:t,to:r},i=1)};for(a of d)$(a);f=e,s=t,l=o,$(A),$(Ie),Ce.set(n,o={a:i,b:o})}return o})(He,He=e);return!qe&&t.a&&((we=t.b)[A]&&(d.title=e.title||Le),Re.fire(u,we)),qe=0,we},Re={parse:Me,diff:Ze,to(e,t,i,n){!t&&r(e)&&(t=e,e=o);let l=ae(e),a=l[V],f=l[A],s=He[A],d=He[V],$=He.query[V];if(E(a,t),f)for(s in $)z(a,s)||(a[s]=o);else d&&(f=s,a={...d,...a});var h,u,c,p;u=He,c=i,p=n,(h=fe(h=f,a,$))!=u.srcHash&&(qe=p,je(h,c))},...ue};he.Router=Re;let Be,De,ze=0,Fe=(e,t,r,i,n,o)=>{if(e&&e.$a!=ze&&(r=e.$v)&&r.$a>1){(t?((e,t,r)=>{let i,n=e.$os;if(n)for(i of n)if(r=z(t,i))break;return r})(r,t):Ut(r))&&r.$b(),n=e.children();for(o of n)Fe(Ge[o],t)}},Je=(e,t,r)=>{t=_e(),(r=e[Ie])?t.mountView(r.to):(ze=n++,Fe(t,e.keys))},Qe=e=>{if(!e.$b&&!e.$d&&e.$cc==e.$rc){e.$cr||(e.$cr=1,e.$ca=0,e.fire("created"));let t,{id:r,pId:i}=e;(t=Ge[i])&&!z(t.$e,r)&&(t.$e[r]=1,t.$rc++,Qe(t))}},Xe=(e,t)=>{if(!e.$ca&&e.$cr){e.$cr=0,e.$ca=1,e.fire("alter",t);let r,{id:i,pId:n}=e;(r=Ge[n])&&z(r.$e,i)&&(r.$rc--,delete r.$e[i],Xe(r,t))}},_e=t=>(Be||(e=d.body,t=H.rootId,O(t)||(e.id=t),Be=new Ye(t)),Be),Ge={},Ke=(e,t,r)=>{for(t=e.$f;t.length;)(r=t.shift()).r||e.invoke(r.n,r.a),delete t[r.k]},We=[],Ye=function(e,t,r){var i,n;(r=this).id=e,r.$c={},r.$cc=0,r.$rc=0,r.$g=1,r.$e={},r.$f=[],r.pId=t,n=r,z(Ge,i=e)||(Ge[i]=n,Ye.fire("add",{vframe:n}),(i=O(i))&&(i.vframe=n))};E(Ye,{all:()=>Ge,get:e=>Ge[e]},ue),E(Ye[k],ue,{mountView(e,t){let r,i,n,o,l,a,f=this,{id:s,pId:d,$g:$}=f,h=O(s);!f.$h&&h&&(f.$h=1,f.$i=h.innerHTML),f.unmountView(),f.$b=0,h&&e&&(f[A]=e,r=ae(e),n=r[A],i=++$,o=r[V],a=(a=(a=(a=Ge[d])&&a.$v)&&a.$d)&&a.$a,e.indexOf(w)>0&&F(a,o),f.$n=r[A],E(o,t),G(n,e=>{if(i==f.$g){if(!e)return H.error(Error(`id:${s} cannot load:${n}`));l=Pt(e),n=new e(s,f,o,l),f.$v=n,f.$a=ze,Nt(n),D(n.init,o,n),n.$b(),n.$e||(f.$h=0,n.$f||n.endUpdate())}}))},unmountView(){let e,r,i=this,{$v:n,id:o}=i;i.$f=[],n&&(De||(r=1,De={id:o}),i.$b=1,i.unmountZone(0,1),Xe(i,De),i.$v=0,n.$a>0&&(n.$a=0,delete nt[o],delete ot[o],n.fire("destroy",0,1,1),It(n,1),Nt(n,1),n.owner=0),n.$a--,(e=O(o))&&i.$h&&t(e).html(i.$i),r&&(De=0)),i.$g++},mountVframe(e,t,r){let i,n=this,o=n.id,l=n.$c;return Xe(n,{id:e}),(i=Ge[e])||(z(l,e)||(n.$o=0,n.$cc++),l[e]=e,(i=We.pop())?Ye.call(i,e,o):i=new Ye(e,o)),i.mountView(t,r),i},mountZone(e,r){let i,n,o=this,l=[];e=e||o.id;let a=t(`#${e} [${T}]`);o.$d=1;for(i of a)i.$b||i.getAttribute("mx-slot")==o.id||(n=B(i),i.$b=1,l.push([n,i.getAttribute(T)]));for([n,i]of l)o.mountVframe(n,i);o.$d=0,r||Qe(o)},unmountVframe(e,t){let r;if(e=e?this.$c[e]:this.id,r=Ge[e]){let{$cr:l,pId:a}=r;r.unmountView(),n=l,(o=Ge[i=e])&&(delete Ge[i],Ye.fire("remove",{vframe:o,fcc:n}),(i=O(i))&&(i.$b=0,i.vframe=0,i.$a=0)),r.id=r.pId=r.$c=r.$e=0,r.$h=0,r.off("alter"),r.off("created"),We.push(r),(r=Ge[a])&&z(r.$c,e)&&(delete r.$c[e],r.$o=0,r.$cc--,t||Qe(r))}var i,n,o},unmountZone(e,t){let r,i=this;for(r in i.$c)(!e||r!=e&&j(r,e))&&i.unmountVframe(r,1);t||Qe(i)},parent(e,t){for(t=this,e=e>>>0||1;t&&e--;)t=Ge[t.pId];return t},children(e){return(e=this).$o||(e.$o=L(e.$c))},invoke(e,t){let r,i,n,o,l,a=this.$f;return(i=this.$v)&&i.$f?r=(n=i[e])&&D(n,t,i):((o=a[l=w+e])&&(o.r=t===o.a),o={n:e,a:t,k:l},a.push(o),a[l]=o),r}}),he.Vframe=Ye,t.fn.invokeView=function(e,t){if(this.length){let r=this[0],i=r.vframe;if(void 0===t)return i&&i.invoke(e);for(r of this)(i=r.vframe)&&i.invoke(e,t)}};let et=new Q(30,10),tt=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,rt={},it={},nt={},ot={},lt=0,at=(t,r)=>{let i,n,o,a,f,s,d=[],$=t,h=t.getAttribute(`mx-${r}`),u=[],c=m,p=0;if(h&&((f=et.get(h))||(f={v:(f=h.match(tt)||l)[1],n:f[2],i:f[3]},et.set(h,f)),f={...f,r:h}),f&&!f.v||it[r]){if((o=ot[n=$.$d])&&1==o[$.$e]&&(s=1,c=n),!s){for(u.push($);$!=e&&($=$.parentNode);){if(Ge[n=$.id]||(o=ot[n=$.$d])&&1==o[$.$e]){c=n;break}u.push($)}for(h of u)(n=ot[c])||(n=ot[c]={}),n[o=h.$e||(h.$e=++lt)]=1,h.$d=c}if(c!=m){$=t.id,Ge[$]&&(p=c=$);do{if((i=Ge[c])&&(s=i.$v)){a=(o=s.$so)[r];for(n in a)o={r:n,v:c,n:n},n?!p&&ee(t,n)&&d.push(o):p&&d.unshift(o);if(s.$e&&!p){f&&!f.v&&(f.v=c);break}p=0}}while(i&&(c=i.pId))}}return f&&d.push(f),d},ft=t=>{let r,i,n,o,l,a,f,s,{target:d,type:$}=t,h=[];for(;d!=e;){if((r=at(d,$)).length){h=[];for(let{v:e,r:i,n:h,i:u}of r){if(f!=e){if(f&&t.isPropagationStopped())break;f=e}(o=(n=Ge[e])&&n.$v)?(a=o[l=h+w+$])&&(t.eventTarget=d,s=u?$e(u,o.$d.$a):{},t[V]=s,D(a,t,o)):t.stopPropagation()}}if((i=nt[a=d.$d])&&(i=i[d.$e])&&i[$]||t.isPropagationStopped()){h.length&&h.push(a);break}h.push(d),f=d.id,Ge[f]&&h.push(f),d=d.parentNode||e}if(a=h.length)for(i=m;a--;)(o=h[a]).nodeType?((r=nt[i])||(r=nt[i]={}),(s=r[f=o.$e||(o.$e=++lt)])||(s=r[f]={},o.$d=i),s[$]=1):i=o},st=(t,r,i)=>{let n=0|rt[t],o=i?-1:1;n&&i!==n||re(e,t,ft,i),rt[t]=n+o,r&&(it[t]=(0|it[t])+o)},dt="http://www.w3.org/2000/svg",$t={option:[1,"<select multiple>"],thead:[1,"<table>"],col:[2,"<table><colgroup>"],tr:[2,"<table><tbody>"],td:[3,"<table><tbody><tr>"],area:[1,"<map>"],param:[1,"<object>"],g:[1,`<svg xmlns="${dt}">`],all:[0,""]},ht=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;$t.optgroup=$t.option,$t.tbody=$t.tfoot=$t.colgroup=$t.caption=$t.thead,$t.th=$t.td;let ut=d.implementation.createHTMLDocument(o),ct=ut.createElement("base");ct.href=d.location.href,ut.head.appendChild(ct);let pt=(e,t)=>{let r=B(t);e.$c[r]?e.unmountVframe(r,1):e.unmountZone(r,1)},gt={INPUT:[g,"checked"],TEXTAREA:[g],OPTION:["selected"]},bt=(e,t)=>(1==e.nodeType&&(e.$f?t=e.$g:((t=e.$a?o:e.id)||(t=e.getAttribute(b)),t||(t=e.getAttribute(T))&&(t=ae(t)[A]),e.$f=1,e.$g=t)),t),mt=(e,t,r,i,n,o)=>{let l,a,f,s,d,$=e.lastChild,h=t.firstChild,u=0,c={},p={};for(;$;)u++,(f=bt($))&&(f=c[f]||(c[f]=[])).push($),$=$.previousSibling,h&&((f=bt(h))&&(p[f]=1),h=h.nextSibling);for(;h;)(f=bt(h))&&(p[f]=1),h=h.nextSibling;for(h=t.firstChild,d=t.childNodes.length<u,$=e.firstChild;h;)u--,l=h,h=h.nextSibling,(s=c[f=bt(l)])&&(s=s.pop())?(s!=$?d&&$.nextSibling==s?(e.appendChild($),$=s.nextSibling):e.insertBefore(s,$):$=$.nextSibling,vt(s,l,e,r,i,n,o)):$?(f=bt(a=$))&&c[f]&&p[f]?(u++,r.c=1,e.insertBefore(l,a)):($=$.nextSibling,vt(a,l,e,r,i,n,o)):(e.appendChild(l),r.c=1);for(;u-- >0;)a=e.lastChild,pt(i,a),e.removeChild(a),r.c=1},vt=(e,t,r,i,n,l,f)=>{if(((e,t)=>{let r,i=e.nodeName,n=gt[i],o=0;if(n)for(r of n)e[r]!=t[r]&&(o=1,e[r]=t[r]);return o})(e,t)||1==e.nodeType&&e.hasAttribute("mxv")||!e.isEqualNode||!e.isEqualNode(t))if(e.nodeName===t.nodeName)if(1===e.nodeType){let r=t.getAttribute(b);if(r&&r==e.getAttribute(b))return;let s,d,$,h,u,c,p,m,v=t.getAttribute(T),y=t.innerHTML,x=t.getAttribute("mxa"),k=!x||x!=e.getAttribute("mxa"),I=Ge[e.id],S=v&&ae(v);if(v&&I&&I.$n==S[A]&&(h=I.$v)){if(c=y!=I.$i,m=p=v!=I[A],$=e.getAttribute("mxv"),!c&&!m&&$){u=$.split(a);for($ of u)if(z(f,$)){m=1;break}}m||c?($=h.$g)?(u=S[V],v.indexOf(w)>-1&&F(l,u),I.$i=y,I[A]=v,S={node:t,html:y,deep:!h.$e,inner:c,query:m},k=1,D($,[u,S],h)&&i.v.push(h),s=S.deep):(d=1,s=1):k=1}else s=1,d=I;d&&(i.c=1,I.unmountVframe(0,1)),k&&((e,t,r,i)=>{let n,l,a,f;delete e.$f;let s=e.attributes,d=t.attributes;for(l=s.length;l--;)n=s[l].name,t.hasAttribute(n)||("id"==n?i||r.d.push([e,o]):(r.c=1,e.removeAttribute(n)));for(l=d.length;l--;)a=(n=d[l]).name,f=n[g],e.getAttribute(a)!=f&&("id"==a?r.d.push([e,f]):(r.c=1,e.setAttribute(a,f)))})(e,t,i,I&&v),s&&mt(e,t,i,n,l,f)}else e.nodeValue!==t.nodeValue&&(i.c=1,e.nodeValue=t.nodeValue);else pt(n,e),r.replaceChild(t,e),i.c=1},yt=function(e){this.$b=e,this.$c=1,this.$a={vId:e,[w]:1},this.$k={}};E(yt[k],{get(e,t){return t=this.$a,e&&(t=t[e]),t},set(e){let t=this;return t.$c=U(e,t.$a,t.$k)||t.$c,t},digest(e){let t=this.set(e),r=t.$k,i=t.$c;t.$c=0,t.$k={},e=t.$a;let n,o,l=t.$b,a=Ge[l],f=a&&a.$v,s={d:[],v:[]},d=O(l);if(i&&f&&f.$a>0&&(n=f.$e)){delete nt[l],delete ot[l],o=((e,t)=>{let r=ut.createElement("div"),i=dt==t.namespaceURI?"g":(ht.exec(e)||[0,""])[1].toLowerCase(),n=$t[i]||$t.all;r.innerHTML=n[1]+e;let o=n[0];for(;o--;)r=r.lastChild;return r})(n(e,l),d),mt(d,o,s,a,e,r);for(o of s.d)o[0].id=o[1];for(o of s.v)o.$b();!s.c&&f.$f||f.endUpdate(l),s.c&&$.trigger({type:"htmlchanged",vId:l}),f.fire("domready")}return Promise.resolve()},snapshot(){return this.$d=y(this.$a),this},altered(){let e=this;if(e.$d)return e.$d!=y(e.$a)},translate(e){return F(this.$a,e,1)},parse(e){return $e(e,this.$a)}});let wt="default",xt="slot",kt=/\s+slot(\s*=\s*"[^"]*")?/g,Vt={from(e){let t,r,i,n={},o=e.nodeType,l=o?e.childNodes:e.a;for(t of l)(o?t.nodeType==o&&t.hasAttribute(xt):z(t.b,xt))&&(i=1,n[r=(o?t.getAttribute(xt):t.b[xt])||wt]=(o?t.outerHTML:t.c).replace(kt,""));return i||(n[wt]=(o?e.innerHTML:e.d).replace(kt,"")),n}};he.Slot=Vt;let At=/^(\$?)([^<]*)<([^>]+)>$/,Tt=(e,t,r)=>(e.a?r=e:((r=function(e){D(r.a,e,this)}).a=[e],r.b=1),r.a=r.a.concat(t.a||t),r),It=(e,t)=>{let r,i,n=e.$r;for(r in n)i=n[r],(t||i.x)&&St(n,r,1)},St=(e,t,r,i)=>{let n,o,a=e[t];return a&&a!=i&&((n=(o=a.e).destroy)&&r&&D(n,l,o),delete e[t]),o},Ct=(e,t,r,i,n)=>{i=e[t],e[t]=e[r]=function(...e){(n=this).$a>0&&(n.$a++,n.fire("rendercall"),It(n),D(i,e,n))}},Nt=(e,t)=>{let r,{$eo:i,$so:n,$el:o,id:l}=e;for(r in i)st(r,n[r],t);for(r of o)re(r.e,r.n,te,t,{i:l,v:e,f:r.f,e:r.e})},qt=[],Ht={win:s,doc:d},Ot=(e,t,r)=>{let i,n,o,l,a={};for(n of e)for(i in n)o=n[i],l=a[i],"ctor"!=i?(At.test(i)&&(l?o=Tt(l,o):o.b=1),a[i]=o):r.push(o);for(i in a)z(t,i)||(t[i]=a[i])},Pt=e=>{if(!e[w]){e[w]=[];let t,r,i,n,o,l,f,s,d,$=e[k],h={},u=[],c={};(r=$.mixins)&&Ot(r,$,e[w]);for(f in $)if(t=$[f],r=f.match(At)){[,l,i,n]=r,n=n.split(a);for(s of n){if(o=Ht[i],d=1,l){if(o){u.push({f:t,e:o,n:s});continue}d=2,(o=c[s])||(o=c[s]={}),o[i]=1}h[s]=h[s]|d,(o=$[s=i+w+s])?o.b&&(t.b?$[s]=Tt(t,o):z($,f)&&($[s]=t)):$[s]=t}}Ct($,"render","$b"),$.$eo=h,$.$el=u,$.$so=c,$.$e=$.tmpl,$.$g=$.assign}return e[w]},Ut=e=>{let t,r,i,n=e.$l;if(n.f&&(n.p&&(t=we[A]),!t&&n.k)){i=we[V];for(r of n.k)if(t=z(i,r))break}return t},jt=function(e,t,r,i){(i=this).owner=t,i.id=e,i.$l={k:[]},i.$r={},i.$a=1,i.updater=i.$d=new yt(i.id),D(qt,r,i)},Et=jt[k];E(jt,{merge(...e){Ot(e,Et,qt)},extend(e,t){let r=this,i=(e=e||{}).ctor,n=[];i&&n.push(i);let o=function(e,t,i,o){r.call(this,e,t,i),D(n.concat(o),i,this)};return o.extend=r.extend,W(o,r,e,t)}}),E(Et,ue,{init:v,beginUpdate(e,t){(t=this).$a>0&&t.$f&&t.owner.unmountZone(e,1)},endUpdate(e,t,r,i,n){(r=this).$a>0&&(e=e||r.id,t?n=t:(n=r.$f,r.$f=1),(i=r.owner).mountZone(e,t),n||h(r.wrapAsync(Ke),0,i))},wrapAsync(e,t){let r=this,i=r.$a;return(...n)=>{if(i>0&&i==r.$a)return e.apply(t||r,n)}},observeLocation(e,t){let i;(i=this.$l).f=1,r(e)&&(t=e[A],e=e[V]),i.p=t,e&&(i.k=(e+o).split(a))},observeState(e){this.$os=(e+o).split(a)},capture(e,t,r,i){return i=this.$r,t?(St(i,e,1,t),i[e]={e:t,x:r}):t=(i=i[e])&&i.e,t},release(e,t){return St(this.$r,e,t)},leaveTip(e,t){let r=this,i=n=>{let o="a",l="b";n.type!=c&&(o="b",l="a"),i[o]?(n.prevent(),n.reject()):t()&&(n.prevent(),i[l]=1,r.leaveConfirm(()=>{i[l]=0,n.resolve()},()=>{i[l]=0,n.reject()},e))},n=r=>{t()&&(r.msg=e)};Re.on(c,i),Re.on(p,n),r.on("unload",i),r.on("destroy",()=>{Re.off(c,i),Re.off(p,n)})},render:v}),he.View=jt;let Lt=t.type,Mt=t.now||Date.now,Zt=function(){this.id=N("b"),this.$={}};E(Zt[k],{get(e,t,r){let n,l=t!=r,a=this.$;if(e){let t,n=i(e)?e.slice():(e+o).split(".");for(;(t=n.shift())&&a;)a=a[t];t&&(a=r)}return l&&(n=Lt(t))!=Lt(a)&&(a=t),a},set(e,t){r(e)||(e={[e]:t}),E(this.$,e)}});let Rt=function(e,t,r){(r=this[e])&&(delete this[e],D(r,t,r.e))},Bt=(e,t,r,i,n,o)=>{let l=[],a=f,s=0;return function(d,$){let h,u=this;s++;let c=u.$b,p=c.k;l[d+1]=u;let g,b={bag:u,error:$};if($?(a=$,t.fire("fail",b),h=1):o.has(p)||(p&&o.set(p,u),c.t=Mt(),(g=c.a)&&D(g,u,u),(g=c.x)&&t.clear(g),t.fire("done",b),h=1),!r.$d){let t=s==i;t&&(r.$e=0,2==n&&(l[0]=a,D(e,l,r))),1==n&&D(e,[$||f,u,t,d],r)}h&&t.fire("end",b)}},Dt=(e,t,r,n,o)=>{if(e.$d)return e;if(e.$e)return e.enqueue(Dt.bind(e,e,t,r,n,o));e.$e=1,i(t)||(t=[t]);let l=e.constructor,a=0,f=l.$f,s=Bt(r,l,e,t.length,n,l.$c);for(let e of t)if(e){let t,r=l.get(e,o),i=r.e,n=i.$b.k,d=s.bind(i,a++);n&&f[n]?f[n].push(d):r.u?(n&&((t=[d]).e=i,f[n]=t,d=Rt.bind(f,n)),l.$s(i,d)):d()}return e},zt=function(){let e=this;e.id=N("s"),e.$g=[]};E(zt[k],{all(e,t){return Dt(this,e,t,2)},save(e,t){return Dt(this,e,t,2,1)},one(e,t){return Dt(this,e,t,1)},enqueue(e){let t=this;return t.$d||(t.$g.push(e),t.dequeue(t.$h)),t},dequeue(...e){let t,r=this;r.$e||r.$d||(r.$e=1,h(()=>{r.$e=0,r.$d||(t=r.$g.shift())&&D(t,r.$h=e)},0))},destroy(e){(e=this).$d=1,e.$g=0}});let Ft=(e,t)=>[y(t),y(e)].join(w),Jt=(e,t,r,i)=>{(i=e&&e.$b)&&t[i.n]&&r.del(i.k)},Qt={add(e){let t,r=this.$b;i(e)||(e=[e]);for(t of e)if(t){let{name:e,cache:i}=t;t.cache=0|i,r[e]=t}},create(e){let t=this.meta(e),i=0|e.cache||t.cache,n=new Zt;n.set(t),n.$b={n:t.name,a:t.after,x:t.cleans,k:i&&Ft(t,e)},r(e)&&n.set(e);let o=t.before;return o&&D(o,n,n),this.fire("begin",{bag:n}),n},meta(e){return this.$b[e.name||e]||e},get(e,t){let r,i,n=this;return t||(r=n.cached(e)),r||(r=n.create(e),i=1),{e:r,u:i}},clear(e){this.$c.each(Jt,se((e+o).split(a)))},cached(e){let t,r,i=this,n=i.$c,o=i.meta(e),l=0|e.cache||o.cache;if(l&&(r=Ft(o,e)),r){let e=i.$f[r];e?t=e.e:(t=n.get(r))&&Mt()-t.$b.t>l&&(n.del(r),t=0)}return t},...ue};return zt.extend=((e,t,r)=>{let i=function(){zt.call(this)};return i.$s=e,i.$c=new Q(t,r),i.$f={},i.$b={},W(i,zt,f,Qt)}),he.Service=zt,E(v[k],ue),v.extend=function e(t,r){let i=this,n=t&&t.ctor,o=function(...e){i.apply(this,e),n&&n.apply(this,e)};return o.extend=e,W(o,i,t,r)},he.Base=v,X=jt.extend(),he.addView=((e,t)=>{(H.views=H.views||{})[e]=t}),he})();