!function(){var e={623:function(){Webflow.push((function(){var e=new Swiper(".gallery-thumbs1",{spaceBetween:20,slidesPerView:2,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,breakpoints:{767:{slidesPerView:4,spaceBetween:20}}});new Swiper(".gallery-top1",{spaceBetween:10,thumbs:{swiper:e}}),e=new Swiper(".gallery-thumbs2",{spaceBetween:20,slidesPerView:2,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,breakpoints:{767:{slidesPerView:4,spaceBetween:20}}}),new Swiper(".gallery-top2",{spaceBetween:10,thumbs:{swiper:e}})}))},156:function(){Webflow.push((function(){let e=document.querySelector('[data-accordion="faq-accordion"]').querySelectorAll(".home-faq-accordion-box");e.forEach((t=>{t.querySelector(".home-faq-accordion-answer"),t.addEventListener("click",(t=>{t.currentTarget.classList.contains("open")?t.currentTarget.classList.remove("open"):(e.forEach((e=>{e.classList.remove("open")})),t.currentTarget.classList.add("open"))}))}))}))},859:function(){Webflow.push((function(){let e=document.querySelector('[data-accordion="process-accordion"]').querySelectorAll(".home-process-accordion-box");e.forEach((t=>{t.querySelector(".home-process-accordion-answer"),t.addEventListener("click",(t=>{t.currentTarget.classList.contains("open")?t.currentTarget.classList.remove("open"):(e.forEach((e=>{e.classList.remove("open")})),t.currentTarget.classList.add("open"))}))}))}))},954:function(){Webflow.push((function(){function e(e){var t=document.getElementById(e);if(function(e){var t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||document.documentElement.clientWidth,r=t.top<=n&&t.top+t.height>=0,i=t.left<=o&&t.left+t.width>=0;return r&&i}(t)&&!t.getAttribute("data-visible")){t.setAttribute("data-visible",!0);var n=parseInt(t.textContent),o=0,r=setInterval((function(){o>n?clearInterval(r):(t.textContent=o,o+=1)}),100)}}window.addEventListener("scroll",(function(){e("home-projects-completed-numbers"),e("home-projects-opening-numbers")}))}))},546:function(){Webflow.push((function(){window.addEventListener("scroll",(function t(){window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100>=30&&(function(){const t=document.cookie.split("; ");for(const n of t){const[t,o]=n.split("=");if("popup"===t||!0===e)return!0}return!1}()||(document.querySelector(".section_popup").style.display="flex",document.querySelector(".section_popup").style.opacity="1"),window.removeEventListener("scroll",t))}));let e=!1;$("#download-pdf-btn").on("click",(function(t){t.preventDefault(),e=!0,document.querySelector(".section_popup").style.display="flex",document.querySelector(".section_popup").style.opacity="1"})),$("#wf-form-Popup-form").on("submit",(function(e){const t=new Date;t.setTime(t.getTime()+864e5),document.cookie="popup=some_value; expires="+t.toUTCString()+"; path=/"}))}))},335:function(){Webflow.push((function(){new Swiper(".home-slider-projects",{direction:"horizontal",loop:!1,slidesPerView:1,spaceBetween:20,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}))},307:function(e,t,n){"use strict";var o=n(81),r=n.n(o),i=n(645),s=n.n(i)()(r());s.push([e.id,".home-faq-accordion-plus-wrapper,.home-proposition-box-button-plus,.main-menu-hamburger-wrapper,.w-nav-button{-webkit-user-select:none;user-select:none}@keyframes scroll{0%{transform:translateX(0)}to{transform:translateX(calc(-100% - 1rem))}}.home-hero-marquee-content{animation:scroll 20s linear infinite}.home-process-tabs-menu .home-process-tab-id{transition:all .2s}.home-process-tabs-menu .w--current .home-process-tab-id,.home-process-tabs-menu .w--current .home-process-tab-name{color:#f8744c}.home-process-tabs-menu .home-process-tab-name{transition:all .2s}.section_home-courts .tab-content-cta{width:-moz-fit-content;width:fit-content}.section_home-courts .w-tab-content{overflow:visible}.home-faq-accordion-box-answer{transition:all .2s}.open .home-faq-accordion-box-answer{max-height:1500px}.home-process-accordion-answer{transition:all .2s}.open .home-process-accordion-answer{max-height:1000px}.open .home-process-accordion-question{transform:translateX(30px)}.open .home-process-accordion-question .home-process-tab-id,.open .home-process-accordion-question .home-process-tab-name{color:#f8744c}.open .home-faq-horizontal-line{transform:translate3d(-50%,-50%,0) scaleX(1) rotateX(0deg) rotateY(0deg) rotate(180deg) skew(0deg,0deg);transform-style:preserve-3d}.open .home-faq-vertical-line{transform:translate3d(-50%,-50%,0) scaleX(1) rotateX(0deg) rotateY(0deg) rotate(90deg) skew(0deg,0deg);transform-style:preserve-3d}.home-faq-accordion-box{width:calc(50% - 10px)}@media screen and (max-width:568px){.home-faq-accordion-box{width:100%}}.home-process-tabs-menu .w--current .home-process-tab-id,.home-process-tabs-menu .w--current .home-process-tab-name{color:#f8744c!important}@media screen and (max-width:1250px){.home-contact-title{font-size:4rem}}.home-hero-spinning-circle{align-items:center;display:grid;height:100%;justify-items:center;width:100%}.home-hero-spinning-circle .home-hero-spinning-text{fill:#333;font-size:17px;font-weight:400;letter-spacing:7.2px;text-transform:uppercase}.home-hero-spinning-circle .home-hero-spinning-image{position:absolute}#rotatingText{animation-duration:10s;animation-iteration-count:infinite;animation-name:rotate-circle;animation-timing-function:linear;aspect-ratio:1/1;max-width:30%}@keyframes rotate-circle{to{transform:rotate(1turn)}}.home-projects-swiper-arrows .swiper-button-next:after,.home-projects-swiper-arrows .swiper-button-prev:after{color:#fff;font-size:30px}.home-projects-swiper-arrows .swiper-button-next,.home-projects-swiper-arrows .swiper-button-prev{background-color:#f8744c;border-radius:50%;height:64px;width:64px}.section_home-projects .home-projects-slider-padding .container-large{transform:translateX(-20px)}@media screen and (max-width:1370px){.section_home-projects .home-projects-slider-padding .container-large{transform:none}}",""]),t.Z=s},645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(s[a]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);o&&s[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},81:function(e){"use strict";e.exports=function(e){return e[1]}},379:function(e){"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},s=[],c=0;c<e.length;c++){var a=e[c],u=o.base?a[0]+o.base:a[0],p=i[u]||0,l="".concat(u," ").concat(p);i[u]=p+1;var d=n(l),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==d)t[d].references++,t[d].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}s.push(l)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var c=n(i[s]);t[c].references--}for(var a=o(e,r),u=0;u<i.length;u++){var p=n(i[u]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=a}}},569:function(e){"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.nc=void 0,function(){"use strict";var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),s=n.n(i),c=n(565),a=n.n(c),u=n(216),p=n.n(u),l=n(589),d=n.n(l),m=n(307),f={};f.styleTagTransform=d(),f.setAttributes=a(),f.insert=s().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,n(623),n(335),n(156),n(546),n(859),n(954)}()}();