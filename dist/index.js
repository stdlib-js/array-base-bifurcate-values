"use strict";var l=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}}};var o=l(function(p,h){"use strict";var g=require("@stdlib/array-base-resolve-getter");function c(r,e){var a,v,n,s,i,u,t;if(n=r.length,e.length!==n)throw new RangeError("invalid argument. The first and second arguments must have the same length.");if(n===0)return[];for(a=g(r),v=g(e),s=[[],[]],t=0;t<n;t++)u=a(r,t),i=v(e,t),i?s[0].push(u):s[1].push(u);return s}h.exports=c});var f=o();module.exports=f;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
