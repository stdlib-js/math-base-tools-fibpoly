// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,y,"e-0$1"),r.alternate&&(t=l.call(t,g,"$1."),t=l.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,_=isNaN,E=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,n,t,a,o,f,c,s,l,p,y,g,d;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))f+=t;else{if(e=void 0!==t.precision,!(t=U(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,y=t.width,g=t.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),f+=t.arg||"",c+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function S(r){var e,n,t,i;for(n=[],i=0,t=I.exec(r);t;)(e=r.slice(i,I.lastIndex-t[0].length)).length&&n.push(e),n.push(N(t)),i=I.lastIndex,t=I.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function F(r){var e,n;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[S(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return x.apply(null,e)}var j=Object.prototype,k=j.toString,T=j.__defineGetter__,O=j.__defineSetter__,V=j.__lookupGetter__,$=j.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===k.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=j,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function L(r,e){var n,t;if((t=r.length)<2||0===e)return 0===t?0:r[0];for(n=r[t-=1]*e+r[t-1],t-=2;t>=0;)n=n*e+r[t],t-=1;return n}var W=Function;function C(r){var e,n,t,i;if(r.length>500)return function(e){return L(r,e)};if(e="return function evalpoly(x){",0===(n=r.length))e+="return 0.0;";else if(1===n)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],t=n-1,i=1;i<n;i++)e+="+x*",i<t&&(e+="("),e+=r[i];for(i=0;i<t-1;i++)e+=")";e+=";"}return e+="}",new W(e+="//# sourceURL=evalpoly.factory.js")()}function P(r){return r!=r}H(L,"factory",C);var R=Math.floor;function Z(r){return R(r)===r}function M(r){return Z(r/2)}function X(r){return M(r>0?r-1:r+1)}var Y=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY;function z(r){return r===Y||r===q}var B=Math.sqrt;function D(r){return Math.abs(r)}var J,K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,er="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof er?er.toStringTag:"",tr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Q.call(r);n=r[nr],a=nr,e=null!=(i=r)&&rr.call(i,a);try{r[nr]=void 0}catch(e){return Q.call(r)}return t=Q.call(r),e?r[nr]=n:delete r[nr],t}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ir&&n instanceof Uint32Array||"[object Uint32Array]"===tr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,fr=J,cr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,lr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),n=e,r=(cr&&n instanceof Float64Array||"[object Float64Array]"===tr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,yr=ur,gr="function"==typeof Uint8Array,dr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,256,257]),n=e,r=(gr&&n instanceof Uint8Array||"[object Uint8Array]"===tr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var hr,wr=pr,br="function"==typeof Uint16Array,mr="function"==typeof Uint16Array?Uint16Array:null,Ar="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,e,n;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===tr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er={uint16:hr,uint8:wr};(_r=new Er.uint16(1))[0]=4660;var Ur,xr,Ir=52===new Er.uint8(_r.buffer)[0];!0===Ir?(Ur=1,xr=0):(Ur=0,xr=1);var Nr={HIGH:Ur,LOW:xr},Sr=new yr(1),Fr=new fr(Sr.buffer),jr=Nr.HIGH,kr=Nr.LOW;function Tr(r,e,n,t){return Sr[0]=r,e[t]=Fr[jr],e[t+n]=Fr[kr],e}function Or(r){return Tr(r,[0,0],1,0)}H(Or,"assign",Tr);var Vr=!0===Ir?0:1,$r=new yr(1),Gr=new fr($r.buffer);function Hr(r,e){return $r[0]=r,Gr[Vr]=e>>>0,$r[0]}function Lr(r){return 0|r}var Wr,Cr,Pr=2147483647,Rr=2147483648,Zr=!0===Ir?1:0,Mr=new yr(1),Xr=new fr(Mr.buffer);function Yr(r){return Mr[0]=r,Xr[Zr]}!0===Ir?(Wr=1,Cr=0):(Wr=0,Cr=1);var qr={HIGH:Wr,LOW:Cr},zr=new yr(1),Br=new fr(zr.buffer),Dr=qr.HIGH,Jr=qr.LOW;function Kr(r,e){return Br[Dr]=r,Br[Jr]=e,zr[0]}var Qr=[0,0];function re(r,e){var n,t;return Or.assign(r,Qr,1,0),n=Qr[0],n&=Pr,t=Yr(e),Kr(n|=t&=Rr,Qr[1])}var ee=1072693247,ne=1e300,te=1e-300,ie=!0===Ir?1:0,ae=new yr(1),oe=new fr(ae.buffer);function ue(r,e){return ae[0]=r,oe[ie]=e>>>0,ae[0]}var fe=1023,ce=1048575,se=1048576,le=1072693248,pe=536870912,ye=524288,ge=20,de=9007199254740992,ve=.9617966939259756,he=.9617967009544373,we=-7.028461650952758e-9,be=[1,1.5],me=[0,.5849624872207642],Ae=[0,1.350039202129749e-8],_e=1.4426950408889634,Ee=1.4426950216293335,Ue=1.9259629911266175e-8,xe=1023,Ie=-1023,Ne=-1074,Se=22250738585072014e-324,Fe=4503599627370496;function je(r,e,n,t){return P(r)||z(r)?(e[t]=r,e[t+n]=0,e):0!==r&&D(r)<Se?(e[t]=r*Fe,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return je(r,[0,0],1,0)}),"assign",je);var ke=2146435072,Te=2220446049250313e-31,Oe=2148532223,Ve=[0,0],$e=[0,0];function Ge(r,e){var n,t;return 0===e||0===r||P(r)||z(r)?r:(je(r,Ve,1,0),r=Ve[0],e+=Ve[1],e+=function(r){var e=Yr(r);return(e=(e&ke)>>>20)-fe|0}(r),e<Ne?re(0,r):e>xe?r<0?q:Y:(e<=Ie?(e+=52,t=Te):t=1,Or.assign(r,$e,1,0),n=$e[0],n&=Oe,t*Kr(n|=e+fe<<20,$e[1])))}var He=.6931471805599453,Le=1048575,We=1048576,Ce=1071644672,Pe=20,Re=.6931471824645996,Ze=-1.904654299957768e-9,Me=1072693247,Xe=1105199104,Ye=1139802112,qe=1083179008,ze=1072693248,Be=1083231232,De=3230714880,Je=31,Ke=1e300,Qe=1e-300,rn=8008566259537294e-32,en=[0,0],nn=[0,0];function tn(r,e){var n,t,i,a,o,u,f,c,s,l,p,y,g,d;if(P(r)||P(e))return NaN;if(Or.assign(e,en,1,0),o=en[0],0===en[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return B(r);if(-.5===e)return 1/B(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:D(r)<1==(e===Y)?0:Y}(r,e)}if(Or.assign(r,en,1,0),a=en[0],0===en[1]){if(0===a)return function(r,e){return e===q?Y:e===Y?0:e>0?X(e)?r:0:X(e)?re(Y,r):Y}(r,e);if(1===r)return 1;if(-1===r&&X(e))return-1;if(z(r))return r===q?tn(-0,-e):e<0?0:Y}if(r<0&&!1===Z(e))return(r-r)/(r-r);if(i=D(r),n=a&Pr|0,t=o&Pr|0,f=o>>>Je|0,u=(u=a>>>Je|0)&&X(e)?-1:1,t>Xe){if(t>Ye)return function(r,e){return(Yr(r)&Pr)<=ee?e<0?ne*ne:te*te:e>0?ne*ne:te*te}(r,e);if(n<Me)return 1===f?u*Ke*Ke:u*Qe*Qe;if(n>ze)return 0===f?u*Ke*Ke:u*Qe*Qe;p=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Ue-a*_e)-((t=Hr(t=(o=Ee*i)+u,0))-o),r[0]=t,r[1]=n,r}(nn,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,v,h,w,b,m,A,_,E;return m=0,n<se&&(m-=53,n=Yr(e*=de)),m+=(n>>ge)-fe|0,n=(A=n&ce|0)|le|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=se),o=Hr(i=(w=(e=ue(e,n))-(c=be[_]))*(b=1/(e+c)),0),t=(n>>1|pe)+ye,f=ue(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Hr(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=Hr(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=he*l,d=(y=we*l+(b-(l-w))*ve+Ae[_])-((g=Hr(g=p+y+(s=me[_])+(v=m),0))-v-s-p),r[0]=g,r[1]=d,r}(nn,i,n);if(y=(l=(e-(c=Hr(e,0)))*p[0]+e*p[1])+(s=c*p[0]),Or.assign(y,en,1,0),g=Lr(en[0]),d=Lr(en[1]),g>=qe){if(0!=(g-qe|d))return u*Ke*Ke;if(l+rn>y-s)return u*Ke*Ke}else if((g&Pr)>=Be){if(0!=(g-De|d))return u*Qe*Qe;if(l<=y-s)return u*Qe*Qe}return y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Pr|0)>>Pe)-fe|0,c=0,s>Ce&&(i=ue(0,((c=r+(We>>l+1)>>>0)&~(Le>>(l=((c&Pr)>>Pe)-fe|0)))>>>0),c=(c&Le|We)>>Pe-l>>>0,r<0&&(c=-c),e-=i),r=Lr(r=Yr(f=1-((f=(a=(i=Hr(i=n+e,0))*Re)+(o=(n-(i-e))*He+i*Ze))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Pe>>>0)>>Pe<=0?Ge(f,c):ue(f,r)}(g,s,l),u*y}var an=9007199254740991,on=2147483647;function un(r,e){var n,t,i,a,o,u,f;if(P(r)||P(e))return NaN;if(!Z(r)||!Z(e))return NaN;if(e<0)return 0;if(t=1,r<0&&(r=-r+e-1,X(e)&&(t*=-1)),e>r)return 0;if(0===e||e===r)return t;if(1===e||e===r-1)return t*r;for(r-e<e&&(e=r-e),f=R(an/r),n=1,o=1;o<=e&&!(n>f);o++)n*=r,n/=o,r-=1;return o>e?t*n:(i=un(r,e-o+1))===Y?t*i:(u=function(r,e){return P(r)||P(e)||r===Y||e===Y||r===q||e===q?NaN:Z(r)&&Z(e)?(r<0&&(r=-r),e<0&&(e=-e),r<=on&&e<=on?function(r,e){var n,t=0;if(0===r)return e;if(0===e)return r;for(;0==(1&r)&&0==(1&e);)r>>>=1,e>>>=1,t+=1;for(;0==(1&r);)r>>>=1;for(;e;){for(;0==(1&e);)e>>>=1;r>e&&(n=e,e=r,r=n),e-=r}return r<<t}(r,e):function(r,e){var n,t=1;if(0===r)return e;if(0===e)return r;for(;r%2==0&&e%2==0;)r/=2,e/=2,t*=2;for(;r%2==0;)r/=2;for(;e;){for(;e%2==0;)e/=2;r>e&&(n=e,e=r,r=n),e-=r}return t*r}(r,e)):NaN}(i,a=un(e,e-o+1)),t*(n/=a/=u)*(i/=u))}var fn={};function cn(r){var e,n;if(void 0===(e=fn[r])){for(e=[],n=0;n<r;n++)e.push(0);for(n=r-1;n>=0;n-=2)e[n]=un((r+n-1)/2,n);fn[r]=e}return e}function sn(r,e){var n,t;return t=L(cn(n=D(r)),e),r>=0?t:tn(-1,n-1)*t}return H(sn,"factory",(function(r){var e,n,t,i;return e=cn(n=D(r)),t=C(e),i=tn(-1,n-1),r>=0||1===i?t:function(r){return-1*t(r)}})),sn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).fibpoly=e();
//# sourceMappingURL=browser.js.map
