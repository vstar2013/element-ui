!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ElCarousel",[],t):"object"==typeof exports?exports.ElCarousel=t():e.ElCarousel=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var i={};return t.m=e,t.c=i,t.p="/dist/",t(0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ElCarouselItem=t.ElCarousel=void 0,t.default=function(e){e.component(r.default.name,r.default),e.component(o.default.name,o.default)};var a=i(2),r=n(a),s=i(8),o=n(s);t.ElCarousel=r.default,t.ElCarouselItem=o.default},function(e,t,i){var n=i(3)(i(4),i(7),null,null,null);e.exports=n.exports},function(e,t){e.exports=function(e,t,i,n,a){var r,s=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(r=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),n&&(l._scopeId=n);var c;if(a?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=c):i&&(c=i),c){var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{esModule:r,exports:s,options:l}}},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=i(5),r=n(a),s=i(6);t.default={name:"ElCarousel",props:{initialIndex:{type:Number,default:0},height:String,trigger:{type:String,default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:String,indicator:{type:Boolean,default:!0},arrow:{type:String,default:"hover"},type:String},data:function(){return{items:[],activeIndex:-1,containerWidth:0,timer:null,hover:!1}},computed:{hasLabel:function(){return this.items.some(function(e){return e.label.toString().length>0})}},watch:{items:function(e){e.length>0&&this.setActiveItem(this.initialIndex)},activeIndex:function(e,t){this.resetItemPosition(t),this.$emit("change",e,t)},autoplay:function(e){e?this.startTimer():this.pauseTimer()}},methods:{handleMouseEnter:function(){this.hover=!0,this.pauseTimer()},handleMouseLeave:function(){this.hover=!1,this.startTimer()},itemInStage:function(e,t){var i=this.items.length;return t===i-1&&e.inStage&&this.items[0].active||e.inStage&&this.items[t+1]&&this.items[t+1].active?"left":!!(0===t&&e.inStage&&this.items[i-1].active||e.inStage&&this.items[t-1]&&this.items[t-1].active)&&"right"},handleButtonEnter:function(e){var t=this;this.items.forEach(function(i,n){e===t.itemInStage(i,n)&&(i.hover=!0)})},handleButtonLeave:function(){this.items.forEach(function(e){e.hover=!1})},updateItems:function(){this.items=this.$children.filter(function(e){return"ElCarouselItem"===e.$options.name})},resetItemPosition:function(e){var t=this;this.items.forEach(function(i,n){i.translateItem(n,t.activeIndex,e)})},playSlides:function(){this.activeIndex<this.items.length-1?this.activeIndex++:this.activeIndex=0},pauseTimer:function(){clearInterval(this.timer)},startTimer:function(){this.interval<=0||!this.autoplay||(this.timer=setInterval(this.playSlides,this.interval))},setActiveItem:function(e){if("string"==typeof e){var t=this.items.filter(function(t){return t.name===e});t.length>0&&(e=this.items.indexOf(t[0]))}if(e=Number(e),!isNaN(e)&&e===Math.floor(e)){var i=this.items.length;e<0?this.activeIndex=i-1:e>=i?this.activeIndex=0:this.activeIndex=e}},prev:function(){this.setActiveItem(this.activeIndex-1)},next:function(){this.setActiveItem(this.activeIndex+1)},handleIndicatorClick:function(e){this.activeIndex=e},handleIndicatorHover:function(e){"hover"===this.trigger&&e!==this.activeIndex&&(this.activeIndex=e)}},created:function(){var e=this;this.throttledArrowClick=(0,r.default)(300,!0,function(t){e.setActiveItem(t)}),this.throttledIndicatorHover=(0,r.default)(300,function(t){e.handleIndicatorHover(t)})},mounted:function(){var e=this;this.updateItems(),this.$nextTick(function(){(0,s.addResizeListener)(e.$el,e.resetItemPosition),e.initialIndex<e.items.length&&e.initialIndex>=0&&(e.activeIndex=e.initialIndex),e.startTimer()})},beforeDestroy:function(){this.$el&&(0,s.removeResizeListener)(this.$el,this.resetItemPosition)}}},function(e,t){e.exports=function(e,t,i,n){function a(){function a(){s=Number(new Date),i.apply(l,u)}function o(){r=void 0}var l=this,c=Number(new Date)-s,u=arguments;n&&!r&&a(),r&&clearTimeout(r),void 0===n&&c>e?a():t!==!0&&(r=setTimeout(n?o:a,void 0===n?e-c:e))}var r,s=0;return"boolean"!=typeof t&&(n=i,i=t,t=void 0),a}},function(e,t){"use strict";t.__esModule=!0;var i="undefined"==typeof window,n=function(){if(!i){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return window.setTimeout(e,20)};return function(t){return e(t)}}}(),a=function(){if(!i){var e=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.clearTimeout;return function(t){return e(t)}}}(),r=function(e){var t=e.__resizeTrigger__,i=t.firstElementChild,n=t.lastElementChild,a=i.firstElementChild;n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,a.style.width=i.offsetWidth+1+"px",a.style.height=i.offsetHeight+1+"px",i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight},s=function(e){return e.offsetWidth!==e.__resizeLast__.width||e.offsetHeight!==e.__resizeLast__.height},o=function(e){var t=this;r(this),this.__resizeRAF__&&a(this.__resizeRAF__),this.__resizeRAF__=n(function(){s(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach(function(i){i.call(t,e)}))})},l=i?{}:document.attachEvent,c="Webkit Moz O ms".split(" "),u="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),d="resizeanim",h=!1,f="",m="animationstart";if(!l&&!i){var v=document.createElement("fakeelement");if(void 0!==v.style.animationName&&(h=!0),h===!1)for(var _="",p=0;p<c.length;p++)if(void 0!==v.style[c[p]+"AnimationName"]){_=c[p],f="-"+_.toLowerCase()+"-",m=u[p],h=!0;break}}var g=!1,w=function(){if(!g&&!i){var e="@"+f+"keyframes "+d+" { from { opacity: 0; } to { opacity: 0; } } ",t=f+"animation: 1ms "+d+";",n=e+"\n      .resize-triggers { "+t+' visibility: hidden; opacity: 0; }\n      .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1 }\n      .resize-triggers > div { background: #eee; overflow: auto; }\n      .contract-trigger:before { width: 200%; height: 200%; }',a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n)),a.appendChild(r),g=!0}};t.addResizeListener=function(e,t){if(!i)if(l)e.attachEvent("onresize",t);else{if(!e.__resizeTrigger__){"static"===getComputedStyle(e).position&&(e.style.position="relative"),w(),e.__resizeLast__={},e.__resizeListeners__=[];var n=e.__resizeTrigger__=document.createElement("div");n.className="resize-triggers",n.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',e.appendChild(n),r(e),e.addEventListener("scroll",o,!0),m&&n.addEventListener(m,function(t){t.animationName===d&&r(e)})}e.__resizeListeners__.push(t)}},t.removeResizeListener=function(e,t){l?e.detachEvent("onresize",t):(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||(e.removeEventListener("scroll",o),e.__resizeTrigger__=!e.removeChild(e.__resizeTrigger__)))}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"el-carousel",class:{"el-carousel--card":"card"===e.type},on:{mouseenter:function(t){t.stopPropagation(),e.handleMouseEnter(t)},mouseleave:function(t){t.stopPropagation(),e.handleMouseLeave(t)}}},[i("div",{staticClass:"el-carousel__container",style:{height:e.height}},[i("transition",{attrs:{name:"carousel-arrow-left"}},["never"!==e.arrow?i("button",{directives:[{name:"show",rawName:"v-show",value:"always"===e.arrow||e.hover,expression:"arrow === 'always' || hover"}],staticClass:"el-carousel__arrow el-carousel__arrow--left",on:{mouseenter:function(t){e.handleButtonEnter("left")},mouseleave:e.handleButtonLeave,click:function(t){t.stopPropagation(),e.throttledArrowClick(e.activeIndex-1)}}},[i("i",{staticClass:"el-icon-arrow-left"})]):e._e()]),e._v(" "),i("transition",{attrs:{name:"carousel-arrow-right"}},["never"!==e.arrow?i("button",{directives:[{name:"show",rawName:"v-show",value:"always"===e.arrow||e.hover,expression:"arrow === 'always' || hover"}],staticClass:"el-carousel__arrow el-carousel__arrow--right",on:{mouseenter:function(t){e.handleButtonEnter("right")},mouseleave:e.handleButtonLeave,click:function(t){t.stopPropagation(),e.throttledArrowClick(e.activeIndex+1)}}},[i("i",{staticClass:"el-icon-arrow-right"})]):e._e()]),e._v(" "),e._t("default")],2),e._v(" "),"none"!==e.indicatorPosition?i("ul",{staticClass:"el-carousel__indicators",class:{"el-carousel__indicators--labels":e.hasLabel,"el-carousel__indicators--outside":"outside"===e.indicatorPosition||"card"===e.type}},e._l(e.items,function(t,n){return i("li",{staticClass:"el-carousel__indicator",class:{"is-active":n===e.activeIndex},on:{mouseenter:function(t){e.throttledIndicatorHover(n)},click:function(t){t.stopPropagation(),e.handleIndicatorClick(n)}}},[i("button",{staticClass:"el-carousel__button"},[e.hasLabel?i("span",[e._v(e._s(t.label))]):e._e()])])})):e._e()])},staticRenderFns:[]}},function(e,t,i){var n=i(3)(i(9),i(10),null,null,null);e.exports=n.exports},function(e,t){"use strict";t.__esModule=!0;var i=.83;t.default={name:"ElCarouselItem",props:{name:String,label:{type:[String,Number],default:""}},data:function(){return{hover:!1,translate:0,scale:1,active:!1,ready:!1,inStage:!1,animating:!1}},methods:{processIndex:function(e,t,i){return 0===t&&e===i-1?-1:t===i-1&&0===e?i:e<t-1&&t-e>=i/2?i+1:e>t+1&&e-t>=i/2?-2:e},calculateTranslate:function(e,t,n){return this.inStage?n*((2-i)*(e-t)+1)/4:e<t?-(1+i)*n/4:(3+i)*n/4},translateItem:function(e,t,n){var a=this.$parent.$el.offsetWidth,r=this.$parent.items.length;"card"!==this.$parent.type&&void 0!==n&&(this.animating=e===t||e===n),e!==t&&r>2&&(e=this.processIndex(e,t,r)),"card"===this.$parent.type?(this.inStage=Math.round(Math.abs(e-t))<=1,this.active=e===t,this.translate=this.calculateTranslate(e,t,a),this.scale=this.active?1:i):(this.active=e===t,this.translate=a*(e-t)),this.ready=!0},handleItemClick:function(){var e=this.$parent;if(e&&"card"===e.type){var t=e.items.indexOf(this);e.setActiveItem(t)}}},created:function(){this.$parent&&this.$parent.updateItems()},destroyed:function(){this.$parent&&this.$parent.updateItems()}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.ready,expression:"ready"}],staticClass:"el-carousel__item",class:{"is-active":e.active,"el-carousel__item--card":"card"===e.$parent.type,"is-in-stage":e.inStage,"is-hover":e.hover,"is-animating":e.animating},style:{msTransform:"translateX("+e.translate+"px) scale("+e.scale+")",webkitTransform:"translateX("+e.translate+"px) scale("+e.scale+")",transform:"translateX("+e.translate+"px) scale("+e.scale+")"},on:{click:e.handleItemClick}},["card"===e.$parent.type?i("div",{directives:[{name:"show",rawName:"v-show",value:!e.active,expression:"!active"}],staticClass:"el-carousel__mask"}):e._e(),e._v(" "),e._t("default")],2)},staticRenderFns:[]}}])});