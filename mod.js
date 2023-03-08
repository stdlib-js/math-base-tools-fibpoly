// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),v&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r,n){var t,e;if((e=r.length)<2||0===n)return 0===e?0:r[0];for(t=r[e-=1]*n+r[e-1],e-=2;e>=0;)t=t*n+r[e],e-=1;return t}function y(r){var n,t,e,o;if(r.length>500)return function(n){return l(r,n)};if(n="return function evalpoly(x){",0===(t=r.length))n+="return 0.0;";else if(1===t)n+="return "+r[0]+";";else{for(n+="if(x===0.0){return "+r[0]+";}",n+="return "+r[0],e=t-1,o=1;o<t;o++)n+="+x*",o<e&&(n+="("),n+=r[o];for(o=0;o<e-1;o++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new Function(n)()}function v(r){return r!=r}c(l,"factory",y);var p=Math.floor;function s(r){return p(r)===r}function b(r){return s(r/2)}function w(r){return b(r>0?r-1:r+1)}var A=Number.POSITIVE_INFINITY,_=Number.NEGATIVE_INFINITY;function d(r){return r===A||r===_}var m=Math.sqrt;function g(r){return Math.abs(r)}var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var U=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;var N="function"==typeof Symbol?Symbol.toStringTag:"";var I=h&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return U.call(r);t=r[N],u=N,n=null!=(o=r)&&j.call(o,u);try{r[N]=void 0}catch(n){return U.call(r)}return e=U.call(r),n?r[N]=t:delete r[N],e}:function(r){return U.call(r)},O="function"==typeof Uint32Array;var S="function"==typeof Uint32Array?Uint32Array:null;var F,E="function"==typeof Uint32Array?Uint32Array:void 0;F=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(O&&t instanceof Uint32Array||"[object Uint32Array]"===I(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var H=F,T="function"==typeof Float64Array;var G="function"==typeof Float64Array?Float64Array:null;var P,x="function"==typeof Float64Array?Float64Array:void 0;P=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G([1,3.14,-3.14,NaN]),t=n,r=(T&&t instanceof Float64Array||"[object Float64Array]"===I(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var L=P,M="function"==typeof Uint8Array;var V="function"==typeof Uint8Array?Uint8Array:null;var W,k="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,256,257]),t=n,r=(M&&t instanceof Uint8Array||"[object Uint8Array]"===I(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var Y=W,q="function"==typeof Uint16Array;var C="function"==typeof Uint16Array?Uint16Array:null;var R,z="function"==typeof Uint16Array?Uint16Array:void 0;R=function(){var r,n,t;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),t=n,r=(q&&t instanceof Uint16Array||"[object Uint16Array]"===I(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D={uint16:R,uint8:Y};(B=new D.uint16(1))[0]=4660;var J,K,Q=52===new D.uint8(B.buffer)[0];!0===Q?(J=1,K=0):(J=0,K=1);var X={HIGH:J,LOW:K},Z=new L(1),$=new H(Z.buffer),rr=X.HIGH,nr=X.LOW;function tr(r,n,t,e){return Z[0]=r,n[e]=$[rr],n[e+t]=$[nr],n}function er(r){return tr(r,[0,0],1,0)}c(er,"assign",tr);var or=!0===Q?0:1,ur=new L(1),ir=new H(ur.buffer);function fr(r,n){return ur[0]=r,ir[or]=n>>>0,ur[0]}function ar(r){return 0|r}var cr,lr,yr=!0===Q?1:0,vr=new L(1),pr=new H(vr.buffer);function sr(r){return vr[0]=r,pr[yr]}!0===Q?(cr=1,lr=0):(cr=0,lr=1);var br={HIGH:cr,LOW:lr},wr=new L(1),Ar=new H(wr.buffer),_r=br.HIGH,dr=br.LOW;function mr(r,n){return Ar[_r]=r,Ar[dr]=n,wr[0]}var gr=[0,0];function hr(r,n){var t,e;return er.assign(r,gr,1,0),t=gr[0],t&=2147483647,e=sr(n),mr(t|=e&=2147483648,gr[1])}var Ur=!0===Q?1:0,jr=new L(1),Nr=new H(jr.buffer);function Ir(r,n){return jr[0]=r,Nr[Ur]=n>>>0,jr[0]}var Or=[1,1.5],Sr=[0,.5849624872207642],Fr=[0,1.350039202129749e-8];function Er(r,n,t,e){return v(r)||d(r)?(n[e]=r,n[e+t]=0,n):0!==r&&g(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Er(r,[0,0],1,0)}),"assign",Er);var Hr=[0,0],Tr=[0,0];function Gr(r,n){var t,e;return 0===n||0===r||v(r)||d(r)?r:(Er(r,Hr,1,0),n+=Hr[1],n+=function(r){var n=sr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Hr[0]),n<-1074?hr(0,r):n>1023?r<0?_:A:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,er.assign(r,Tr,1,0),t=Tr[0],t&=2148532223,e*mr(t|=n+1023<<20,Tr[1])))}var Pr=1e300,xr=1e-300,Lr=[0,0],Mr=[0,0];function Vr(r,n){var t,e,o,u,i,f,a,c,l,y,p,b,h,U;if(v(r)||v(n))return NaN;if(er.assign(n,Lr,1,0),i=Lr[0],0===Lr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return m(r);if(-.5===n)return 1/m(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(d(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:g(r)<1==(n===A)?0:A}(r,n)}if(er.assign(r,Lr,1,0),u=Lr[0],0===Lr[1]){if(0===u)return function(r,n){return n===_?A:n===A?0:n>0?w(n)?r:0:w(n)?hr(A,r):A}(r,n);if(1===r)return 1;if(-1===r&&w(n))return-1;if(d(r))return r===_?Vr(-0,-n):n<0?0:A}if(r<0&&!1===s(n))return(r-r)/(r-r);if(o=g(r),t=2147483647&u|0,e=2147483647&i|0,a=i>>>31|0,f=(f=u>>>31|0)&&w(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&sr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Pr*Pr:f*xr*xr;if(t>1072693248)return 0===a?f*Pr*Pr:f*xr*xr;p=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=fr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Mr,o)}else p=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p,s,b,w,A,_,d,m,g,h,U;return m=0,t<1048576&&(m-=53,t=sr(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(g=1048575&t|0),g<=235662?h=0:g<767610?h=1:(h=0,m+=1,t-=1048576),i=fr(o=(_=(n=Ir(n,t))-(c=Or[h]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),a=Ir(0,e+=h<<18),A=(u=o*o)*u*(0===(U=u)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=fr(a=3+(u=i*i)+(A+=(f=d*(_-i*a-i*(n-(a-c))))*(i+o)),0),b=(p=-7.028461650952758e-9*(y=fr(y=(_=i*a)+(d=f*a+(A-(a-3-u))*o),0))+.9617966939259756*(d-(y-_))+Fr[h])-((s=fr(s=(v=.9617967009544373*y)+p+(l=Sr[h])+(w=m),0))-w-l-v),r[0]=s,r[1]=b,r}(Mr,o,t);if(b=(y=(n-(c=fr(n,0)))*p[0]+n*p[1])+(l=c*p[0]),er.assign(b,Lr,1,0),h=ar(Lr[0]),U=ar(Lr[1]),h>=1083179008){if(0!=(h-1083179008|U))return f*Pr*Pr;if(y+8008566259537294e-32>b-l)return f*Pr*Pr}else if((2147483647&h)>=1083231232){if(0!=(h-3230714880|U))return f*xr*xr;if(y<=b-l)return f*xr*xr}return b=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=u=Ir(0,e)),r=ar(r=sr(c=1-((c=(i=.6931471824645996*(u=fr(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?Gr(c,l):Ir(c,r)}(h,l,y),f*b}var Wr=Math.round;function kr(r,n){var t,e;if(v(r)||v(n))return NaN;if(!s(r)||!s(n))return NaN;if(n<0)return 0;if(r<0)return t=kr(-r+n-1,n),w(n)&&(t=-t),t;if(n>r)return 0;if(0===n||n===r)return 1;if(1===n||n===r-1)return r;for(r-n<n&&(n=r-n),t=r,e=2;e<=n;e++)t*=(r-e+1)/e;return s(t)?t:Wr(t)}var Yr={};function qr(r){var n,t;if(void 0===(n=Yr[r])){for(n=[],t=0;t<r;t++)n.push(0);for(t=r-1;t>=0;t-=2)n[t]=kr((r+t-1)/2,t);Yr[r]=n}return n}function Cr(r,n){var t,e;return e=l(qr(t=g(r)),n),r>=0?e:Vr(-1,t-1)*e}function Rr(r){var n,t,e,o;return n=qr(t=g(r)),e=y(n),o=Vr(-1,t-1),r>=0||1===o?e:function(r){return-1*e(r)}}c(Cr,"factory",Rr);export{Cr as default,Rr as factory};
//# sourceMappingURL=mod.js.map
