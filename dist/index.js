!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueSvgIcon=e():t.VueSvgIcon=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="dist/",e(e.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){var i=n(2)(n(3),n(4),null,null,null);t.exports=i.exports},function(t,e){t.exports=function(t,e,n,i,o){var r,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),i&&(c._scopeId=i);var l;if(o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):n&&(l=n),l){var u=c.functional,f=u?c.render:c.beforeCreate;u?c.render=function(t,e){return l.call(e),f(t,e)}:c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:r,exports:s,options:c}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={},o=[],r="",s="",a="svg";e.default={data:function(){return{loaded:!1}},props:{icon:String,name:String,width:{type:String,default:""},height:{type:String,default:""},scale:String,dir:String,fill:{type:Boolean,default:!0},color:String,original:{type:Boolean,default:!1}},computed:{clazz:function(){var t=a+"-icon";return this.fill&&(t+=" "+a+"-fill"),this.dir&&(t+=" "+a+"-"+this.dir),t},iconName:function(){return this.name||this.icon},iconData:function(){return this.iconName&&this.loaded?i[this.iconName]:null},colors:function(){return this.color?this.color.split(" "):""},path:function(){var t=this,e="";return this.iconData?(e=this.iconData.data,this.original&&(e=function(t){var e=/_fill=\"|_stroke="/gi;return t.replace(e,function(t){return t&&t.slice(1)})}(e)),this.colors&&this.colors.length>0&&(e=function(e){var n=/<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi,i=0;return e.replace(n,function(e){var n=t.colors[i++]||t.colors[t.colors.length-1],o=t.fill;return n&&"_"===n?e:(n&&0===n.indexOf("r-")&&(o=!o,n=n.split("r-")[1]),e+(o?"fill":"stroke")+'="'+n+'" '+(o?"stroke":"fill")+'="none" ')})}(e))):o.push({name:this.iconName,component:this}),e},box:function(){var t=this.width||16,e=this.width||16;return this.iconData?this.iconData.viewBox?this.iconData.viewBox:"0 0 "+this.iconData.width+" "+this.iconData.height:"0 0 "+parseFloat(t)+" "+parseFloat(e)},style:function(){var t=/^\d+$/,e=Number(this.scale),n=void 0,i=void 0;return!isNaN(e)&&this.iconData?(n=Number(this.iconData.width)*e+"px",i=Number(this.iconData.height)*e+"px"):(n=t.test(this.width)?this.width+"px":this.width,i=t.test(this.height)?this.height+"px":this.height),{width:n||r,height:i||s}}},created:function(){i[this.iconName]&&(this.loaded=!0)},install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.tagName||"svgicon";e.classPrefix&&(a=e.classPrefix),e.defaultWidth&&(r=e.defaultWidth),e.defaultHeight&&(s=e.defaultHeight),t.component(n,this)},register:function(t){for(var e in t)!function(e){i[e]||(i[e]=t[e]),o=o.filter(function(t,n){return t.name===e&&t.component.$set(t.component,"loaded",!0),t.name!==e})}(e)},icons:i}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",preserveAspectRatio:'xMidYMid slice',viewBox:t.box},domProps:{innerHTML:t._s(t.path)}})},staticRenderFns:[]}}])});