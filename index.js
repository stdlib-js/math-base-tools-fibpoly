// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r,n){var t,e;if((e=r.length)<2||0===n)return 0===e?0:r[0];for(t=r[e-=1]*n+r[e-1],e-=2;e>=0;)t=t*n+r[e],e-=1;return t}function y(r){var n,t,e,o;if(r.length>500)return function(n){return l(r,n)};if(n="return function evalpoly(x){",0===(t=r.length))n+="return 0.0;";else if(1===t)n+="return "+r[0]+";";else{for(n+="if(x===0.0){return "+r[0]+";}",n+="return "+r[0],e=t-1,o=1;o<t;o++)n+="+x*",o<e&&(n+="("),n+=r[o];for(o=0;o<e-1;o++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new Function(n)()}function p(r){return r!=r}c(l,"factory",y);var v=Math.floor;function s(r){return v(r)===r}function b(r){return s(r/2)}function d(r){return b(r>0?r-1:r+1)}var w=Number.POSITIVE_INFINITY,A=Number.NEGATIVE_INFINITY;function _(r){return r===w||r===A}var m=Math.sqrt;function h(r){return Math.abs(r)}var g,U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),j=Object.prototype.toString,N=Object.prototype.hasOwnProperty,I="function"==typeof Symbol?Symbol.toStringTag:"",O=U&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return j.call(r);t=r[I],u=I,n=null!=(o=r)&&N.call(o,u);try{r[I]=void 0}catch(n){return j.call(r)}return e=j.call(r),n?r[I]=t:delete r[I],e}:function(r){return j.call(r)},S="function"==typeof Uint32Array,F="function"==typeof Uint32Array?Uint32Array:null,E="function"==typeof Uint32Array?Uint32Array:void 0;g=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(S&&t instanceof Uint32Array||"[object Uint32Array]"===O(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var T,H=g,G="function"==typeof Float64Array,x="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x([1,3.14,-3.14,NaN]),t=n,r=(G&&t instanceof Float64Array||"[object Float64Array]"===O(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,M=T,V="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,k="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,256,257]),t=n,r=(V&&t instanceof Uint8Array||"[object Uint8Array]"===O(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var Y,q=L,C="function"==typeof Uint16Array,R="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;Y=function(){var r,n,t;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,65536,65537]),t=n,r=(C&&t instanceof Uint16Array||"[object Uint16Array]"===O(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D={uint16:Y,uint8:q};(B=new D.uint16(1))[0]=4660;var J,K,Q=52===new D.uint8(B.buffer)[0];!0===Q?(J=1,K=0):(J=0,K=1);var X={HIGH:J,LOW:K},Z=new M(1),$=new H(Z.buffer),rr=X.HIGH,nr=X.LOW;function tr(r,n,t,e){return Z[0]=r,n[e]=$[rr],n[e+t]=$[nr],n}function er(r){return tr(r,[0,0],1,0)}c(er,"assign",tr);var or=!0===Q?0:1,ur=new M(1),ir=new H(ur.buffer);function fr(r,n){return ur[0]=r,ir[or]=n>>>0,ur[0]}function ar(r){return 0|r}var cr,lr,yr=2147483647,pr=!0===Q?1:0,vr=new M(1),sr=new H(vr.buffer);function br(r){return vr[0]=r,sr[pr]}!0===Q?(cr=1,lr=0):(cr=0,lr=1);var dr={HIGH:cr,LOW:lr},wr=new M(1),Ar=new H(wr.buffer),_r=dr.HIGH,mr=dr.LOW;function hr(r,n){return Ar[_r]=r,Ar[mr]=n,wr[0]}var gr=[0,0];function Ur(r,n){var t,e;return er.assign(r,gr,1,0),t=gr[0],t&=yr,e=br(n),hr(t|=e&=2147483648,gr[1])}var jr=!0===Q?1:0,Nr=new M(1),Ir=new H(Nr.buffer);function Or(r,n){return Nr[0]=r,Ir[jr]=n>>>0,Nr[0]}var Sr=1023,Fr=1048576,Er=[1,1.5],Tr=[0,.5849624872207642],Hr=[0,1.350039202129749e-8];function Gr(r,n,t,e){return p(r)||_(r)?(n[e]=r,n[e+t]=0,n):0!==r&&h(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Gr(r,[0,0],1,0)}),"assign",Gr);var xr=[0,0],Pr=[0,0];function Lr(r,n){var t,e;return 0===n||0===r||p(r)||_(r)?r:(Gr(r,xr,1,0),n+=xr[1],n+=function(r){var n=br(r);return(n=(2146435072&n)>>>20)-Sr|0}(r=xr[0]),n<-1074?Ur(0,r):n>1023?r<0?A:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,er.assign(r,Pr,1,0),t=Pr[0],t&=2148532223,e*hr(t|=n+Sr<<20,Pr[1])))}var Mr=1048575,Vr=1048576,Wr=1083179008,kr=1e300,Yr=1e-300,qr=[0,0],Cr=[0,0];function Rr(r,n){var t,e,o,u,i,f,a,c,l,y,v,b,g,U;if(p(r)||p(n))return NaN;if(er.assign(n,qr,1,0),i=qr[0],0===qr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return m(r);if(-.5===n)return 1/m(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(_(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:h(r)<1==(n===w)?0:w}(r,n)}if(er.assign(r,qr,1,0),u=qr[0],0===qr[1]){if(0===u)return function(r,n){return n===A?w:n===w?0:n>0?d(n)?r:0:d(n)?Ur(w,r):w}(r,n);if(1===r)return 1;if(-1===r&&d(n))return-1;if(_(r))return r===A?Rr(-0,-n):n<0?0:w}if(r<0&&!1===s(n))return(r-r)/(r-r);if(o=h(r),t=u&yr|0,e=i&yr|0,a=i>>>31|0,f=(f=u>>>31|0)&&d(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(br(r)&yr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*kr*kr:f*Yr*Yr;if(t>1072693248)return 0===a?f*kr*kr:f*Yr*Yr;v=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=fr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Cr,o)}else v=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,s,b,d,w,A,_,m,h,g,U;return m=0,t<Fr&&(m-=53,t=br(n*=9007199254740992)),m+=(t>>20)-Sr|0,t=1072693248|(h=1048575&t|0),h<=235662?g=0:h<767610?g=1:(g=0,m+=1,t-=Fr),i=fr(o=(A=(n=Or(n,t))-(c=Er[g]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=Or(0,e+=g<<18),w=(u=o*o)*u*(0===(U=u)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=fr(a=3+(u=i*i)+(w+=(f=_*(A-i*a-i*(n-(a-c))))*(i+o)),0),b=(v=-7.028461650952758e-9*(y=fr(y=(A=i*a)+(_=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(_-(y-A))+Hr[g])-((s=fr(s=(p=.9617967009544373*y)+v+(l=Tr[g])+(d=m),0))-d-l-p),r[0]=s,r[1]=b,r}(Cr,o,t);if(b=(y=(n-(c=fr(n,0)))*v[0]+n*v[1])+(l=c*v[0]),er.assign(b,qr,1,0),g=ar(qr[0]),U=ar(qr[1]),g>=Wr){if(0!=(g-Wr|U))return f*kr*kr;if(y+8008566259537294e-32>b-l)return f*kr*kr}else if((g&yr)>=1083231232){if(0!=(g-3230714880|U))return f*Yr*Yr;if(y<=b-l)return f*Yr*Yr}return b=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&yr|0)>>20)-Sr|0,c=0,l>1071644672&&(o=Or(0,((c=r+(Vr>>y+1)>>>0)&~(Mr>>(y=((c&yr)>>20)-Sr|0)))>>>0),c=(c&Mr|Vr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=ar(r=br(a=1-((a=(u=.6931471824645996*(o=fr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Lr(a,c):Or(a,r)}(g,l,y),f*b}var zr=Math.round;function Br(r,n){var t,e;if(p(r)||p(n))return NaN;if(!s(r)||!s(n))return NaN;if(n<0)return 0;if(r<0)return t=Br(-r+n-1,n),d(n)&&(t=-t),t;if(n>r)return 0;if(0===n||n===r)return 1;if(1===n||n===r-1)return r;for(r-n<n&&(n=r-n),t=r,e=2;e<=n;e++)t*=(r-e+1)/e;return s(t)?t:zr(t)}var Dr={};function Jr(r){var n,t;if(void 0===(n=Dr[r])){for(n=[],t=0;t<r;t++)n.push(0);for(t=r-1;t>=0;t-=2)n[t]=Br((r+t-1)/2,t);Dr[r]=n}return n}function Kr(r,n){var t,e;return e=l(Jr(t=h(r)),n),r>=0?e:Rr(-1,t-1)*e}return c(Kr,"factory",(function(r){var n,t,e,o;return n=Jr(t=h(r)),e=y(n),o=Rr(-1,t-1),r>=0||1===o?e:function(r){return-1*e(r)}})),Kr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).fibpoly=n();
//# sourceMappingURL=index.js.map
