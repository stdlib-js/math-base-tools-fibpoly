"use strict";var o=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var c=o(function(G,v){
var h={};v.exports=h
});var u=o(function(H,f){
var d=require('@stdlib/math-base-special-binomcoef/dist'),s=c();function m(a){var r,e;if(r=s[a],r===void 0){for(r=[],e=0;e<a;e++)r.push(0);for(e=a-1;e>=0;e-=2)r[e]=d((a+e-1)/2,e);s[a]=r}return r}f.exports=m
});var q=o(function(I,n){
var w=require('@stdlib/math-base-tools-evalpoly/dist'),O=require('@stdlib/math-base-special-pow/dist'),R=require('@stdlib/math-base-special-abs/dist'),g=u();function j(a,r){var e,i,t;return i=R(a),e=g(i),t=w(e,r),a>=0?t:O(-1,i-1)*t}n.exports=j
});var y=o(function(J,p){
var k=require('@stdlib/math-base-tools-evalpoly/dist').factory,z=require('@stdlib/math-base-special-pow/dist'),A=require('@stdlib/math-base-special-abs/dist'),B=u();function C(a){var r,e,i,t;if(e=A(a),r=B(e),i=k(r),t=z(-1,e-1),a>=0||t===1)return i;return x;function x(b){return-1*i(b)}}p.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=q(),E=y();D(l,"factory",E);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
