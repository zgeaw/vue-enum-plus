!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.vueEnum=r():e.vueEnum=r()}("undefined"!=typeof self?self:this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="/dist/",r(r.s=0)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={};n.install=function(e,r){var t=r.enumInfo||{},n={};n.getDesc=function(e,r){if(!t.hasOwnProperty(e))return"";var n=t[e];for(var o in n)if(n[o].value===r)return n[o].desc},n.getList=function(e){if(!t.hasOwnProperty(e))return[];var r=[],n=t[e];for(var o in n){var u=(n[o].value,n[o].desc,{});for(var f in n[o])u[f]=n[o][f];r.push(u)}return r},n.getValueDesc=function(e){if(!t.hasOwnProperty(e))return{};var r={},n=t[e];for(var o in n)r[n[o].value]=n[o].desc;return r},e.prototype.$enum=n},r.default=n}])});