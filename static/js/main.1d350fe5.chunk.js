(this.webpackJsonpvisualiser=this.webpackJsonpvisualiser||[]).push([[0],{16:function(e,n,t){},17:function(e,n,t){},18:function(e,n,t){},20:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),s=t(11),c=t.n(s),i=(t(16),t(4)),u=t(5),o=t(8),h=t(7),l=(t(17),t(10)),p=t(2),f=function(e){var n=[];return e.length<=1?e:(v(Object(p.a)(e),0,e.length-1,n),n)};function v(e,n,t,r){if(n<t){var a=Math.floor(n+(t-n)/2);v(e,n,a,r),v(e,a+1,t,r),function(e,n,t,r,a){for(var s=[],c=[],i=t-n+1,u=r-t,o=0;o<i;o++)s[o]=e[n+o];for(var h=0;h<u;h++)c[h]=e[t+1+h];var l=0,p=0,f=n;for(;l<i&&p<u;){var v={a:n+l,b:t+1+p};if(a.push(v),a.push(v),s[l]<=c[p]){e[f]=s[l];var j={k:f,p:s[l]};a.push(j),l++}else{e[f]=c[p];var b={k:f,p:c[p]};a.push(b),p++}f++}for(;l<i;){var d={a:n+l,b:-2};a.push(d),a.push(d);var O={k:f,p:s[l]};a.push(O),e[f++]=s[l++]}for(;p<u;){var g={a:t+1+p,b:-1};a.push(g),a.push(g);var m={k:f,p:c[p]};a.push(m),e[f++]=c[p++]}}(e,n,a,t,r)}}function j(e){var n=[];return b(Object(p.a)(e),0,e.length-1,n),n}function b(e,n,t,r){if(n<t){var a=function(e,n,t,r){var a=e[n],s=n-1,c=t+1;for(;;){do{s++,r.push([s,n]),r.push([s,n])}while(e[s]<a);do{c--,r.push([c,n]),r.push([c,n])}while(e[c]>a);if(s>=c)return c;r.push([s,c,e[s],e[c]]);var i=e[s];e[s]=e[c],e[c]=i}}(e,n,t,r);b(e,n,a,r),b(e,a+1,t,r)}}function d(e){var n=[];return function(e,n,t){!function(e,n,t){for(var r=(n-2)/2;r>=0;r--)O(e,n,r,t)}(e,n,t);for(var r=n-1;r>=1;r--){t.push([0,r]),t.push([0,r]),t.push([0,r,e[0],e[r]]);var a=e[r];e[r]=e[0],e[0]=a,O(e,r,0,t)}}(Object(p.a)(e),e.length,n),n}function O(e,n,t,r){var a=t,s=2*t+1,c=2*t+2;if(s<n&&e[s]>e[a]){var i=[a,s];a=s,r.push(i),r.push(i)}if(c<n&&e[c]>e[a]){var u=[a,c];a=c,r.push(u),r.push(u)}if(a!==t){var o=[t,a,e[t],e[a]];r.push(o);var h=e[a];e[a]=e[t],e[t]=h,O(e,n,a,r)}}t(18);var g=t(0),m=function(e){return Object(g.jsxs)("div",{className:"containerControl",children:[Object(g.jsxs)("div",{className:"temp",children:[Object(g.jsx)("label",{className:"Clabel",children:"Size"}),Object(g.jsx)("input",{type:"range",min:"50",max:"220",onChange:e.sizeChanger})]}),Object(g.jsxs)("div",{className:"temp",children:[Object(g.jsx)("label",{className:"Clabel",children:"Speed"}),Object(g.jsx)("input",{type:"range",min:"2",max:"20",onChange:e.speedChanger})]}),Object(g.jsxs)("div",{className:"temp",children:[Object(g.jsx)("label",{className:"Clabel",children:"Color"}),Object(g.jsx)("input",{type:"color",onChange:e.colorChanger})]})]})},x=(t(20),t.p+"static/media/logo.269bfc74.png"),C=(r.Component,function(e){Object(o.a)(t,e);var n=Object(h.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)("h1",{children:"Hello World"})})}}]),t}(r.Component)),k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root")),k()}},[[21,1,2]]]);
//# sourceMappingURL=main.1d350fe5.chunk.js.map