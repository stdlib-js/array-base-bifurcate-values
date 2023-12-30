"use strict";var l=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=l(function(p,h){
var g=require('@stdlib/array-base-resolve-getter/dist');function c(r,e){var u,v,a,n,i,s,t;if(a=r.length,e.length!==a)throw new RangeError("invalid argument. The first and second arguments must have the same length.");if(a===0)return[];for(u=g(r),v=g(e),n=[[],[]],t=0;t<a;t++)s=u(r,t),i=v(e,t),i?n[0].push(s):n[1].push(s);return n}h.exports=c
});var f=o();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
