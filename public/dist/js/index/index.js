!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=3)}([,function(e,t){e.exports=jQuery},function(e,t,n){var o,i;!function(a,l){"use strict";o=[n(1)],void 0===(i=function(e){return t=e,o=(n=a).document,i=a.Math,r="."+(s="fullpage-wrapper"),c="fp-responsive",d="fp-notransition",f="fp-destroyed",u="fp-enabled",v="fp-viewing",g="fp-completely",S=(w="."+(m="fp-section"))+(p="."+(h="active")),x="."+(b="fp-tableCell"),y="#fp-nav",C="fp-tooltip",O=(k="."+(T="fp-slide"))+p,A="."+(L="fp-slides"),M="."+(I="fp-slidesContainer"),E="fp-table",z=(R="."+(B="fp-slidesNav"))+" a",D=(H=".fp-controlArrow")+"."+(P="fp-prev"),j=H+".fp-next",q=t(n),F=t(o),void(t.fn.fullpage=function(e){if(t("html").hasClass(u))jt();else{var a=t("html, body"),V=t("body"),Y=t.fn.fullpage;e=t.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:t.fn.fp_scrolloverflow?t.fn.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},e);var N,X,$,U,W=!1,_=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),K="ontouchstart"in n||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,Q=t(this),G=q.height(),J=!1,Z=!0,ee=!0,te=[],ne={m:{up:!0,down:!0,left:!0,right:!0}};ne.k=t.extend(!0,{},ne.m);var oe,ie,ae,le,se,re,ce,de=n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},fe={touchmove:"ontouchmove"in n?"touchmove":de.move,touchstart:"ontouchstart"in n?"touchstart":de.down},ue='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',ve=t.extend(!0,{},e);jt(),t.extend(t.easing,{easeInOutCubic:function(e,t,n,o,i){return(t/=i/2)<1?o/2*t*t*t+n:o/2*((t-=2)*t*t+2)+n}}),t(this).length&&(Y.version="2.9.6",Y.setAutoScrolling=ke,Y.setRecordHistory=Oe,Y.setScrollingSpeed=Le,Y.setFitToSection=Ae,Y.setLockAnchors=function(t){e.lockAnchors=t},Y.setMouseWheelScrolling=Ie,Y.setAllowScrolling=Me,Y.setKeyboardScrolling=Ee,Y.moveSectionUp=Be,Y.moveSectionDown=Re,Y.silentMoveTo=ze,Y.moveTo=He,Y.moveSlideRight=Pe,Y.moveSlideLeft=De,Y.fitToSection=Ye,Y.reBuild=je,Y.setResponsive=qe,Y.destroy=function(n){ke(!1,"internal"),Me(!1),Ee(!1),Q.addClass(f),clearTimeout(le),clearTimeout(ae),clearTimeout(ie),clearTimeout(se),clearTimeout(re),q.off("scroll",Ve).off("hashchange",st).off("resize",gt),F.off("keydown",ct).off("keyup",dt).off("click touchstart",y+" a").off("mouseenter",y+" li").off("mouseleave",y+" li").off("click touchstart",z).off("mouseover",e.normalScrollElements).off("mouseout",e.normalScrollElements),t(w).off("click touchstart",H),clearTimeout(le),clearTimeout(ae),n&&function(){zt(0),Q.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){et(t(this),"src")}),Q.find("img[data-srcset]").each(function(){et(t(this),"srcset")}),t(y+", "+R+", "+H).remove(),t(w).css({height:"","background-color":"",padding:""}),t(k).css({width:""}),Q.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),a.css({overflow:"",height:""}),t("html").removeClass(u),V.removeClass(c),t.each(V.get(0).className.split(/\s+/),function(e,t){0===t.indexOf(v)&&V.removeClass(t)}),t(w+", "+k).each(function(){e.scrollOverflowHandler&&e.scrollOverflowHandler.remove(t(this)),t(this).removeClass(E+" "+h),t(this).attr("style",t(this).data("fp-styles"))}),St(Q),Q.find(x+", "+M+", "+A).each(function(){t(this).replaceWith(this.childNodes)}),Q.css({"-webkit-transition":"none",transition:"none"}),a.scrollTop(0);var n=[m,T,I];t.each(n,function(e,n){t("."+n).removeClass(n)})}()},Y.shared={afterRenderActions:Fe},e.css3&&(e.css3=function(){var e,t=o.createElement("p"),i={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var a in o.body.insertBefore(t,null),i)t.style[a]!==l&&(t.style[a]="translate3d(1px,1px,1px)",e=n.getComputedStyle(t).getPropertyValue(i[a]));return o.body.removeChild(t),e!==l&&0<e.length&&"none"!==e}()),e.scrollBar=e.scrollBar||e.hybrid,Te=Q.find(e.sectionSelector),e.anchors.length||(e.anchors=Te.filter("[data-anchor]").map(function(){return t(this).data("anchor").toString()}).get()),e.navigationTooltips.length||(e.navigationTooltips=Te.filter("[data-tooltip]").map(function(){return t(this).data("tooltip").toString()}).get()),Q.css({height:"100%",position:"relative"}),Q.addClass(s),t("html").addClass(u),G=q.height(),Q.removeClass(f),Q.find(e.sectionSelector).addClass(m),Q.find(e.slideSelector).addClass(T),t(w).each(function(n){var o,i,a,l,s=t(this),c=s.find(k),d=c.length;s.data("fp-styles",s.attr("style")),a=s,(l=n)||0!==t(S).length||a.addClass(h),U=t(S),a.css("height",G+"px"),e.paddingTop&&a.css("padding-top",e.paddingTop),e.paddingBottom&&a.css("padding-bottom",e.paddingBottom),void 0!==e.sectionsColor[l]&&a.css("background-color",e.sectionsColor[l]),void 0!==e.anchors[l]&&a.attr("data-anchor",e.anchors[l]),o=s,i=n,void 0!==e.anchors[i]&&o.hasClass(h)&&bt(e.anchors[i],i),e.menu&&e.css3&&t(e.menu).closest(r).length&&t(e.menu).appendTo(V),0<d?function(n,o,i){var a,l=100*i,s=100/i;o.wrapAll('<div class="'+I+'" />'),o.parent().wrap('<div class="'+L+'" />'),n.find(M).css("width",l+"%"),1<i&&(e.controlArrows&&((a=n).find(A).after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'),"#fff"!=e.controlArrowColor&&(a.find(j).css("border-color","transparent transparent transparent "+e.controlArrowColor),a.find(D).css("border-color","transparent "+e.controlArrowColor+" transparent transparent")),e.loopHorizontal||a.find(D).hide()),e.slidesNavigation&&function(t,n){t.append('<div class="'+B+'"><ul></ul></div>');var o=t.find(R);o.addClass(e.slidesNavPosition);for(var i=0;i<n;i++)o.find("ul").append('<li><a href="#"><span></span></a></li>');o.css("margin-left","-"+o.width()/2+"px"),o.find("li").first().find("a").addClass(h)}(n,i)),o.each(function(n){t(this).css("width",s+"%"),e.verticalCentered&&yt(t(this))});var r=n.find(O);r.length&&(0!==t(S).index(w)||0===t(S).index(w)&&0!==r.index())?Rt(r,"internal"):o.eq(0).addClass(h)}(s,c,d):e.verticalCentered&&yt(s)}),e.fixedElements&&e.css3&&t(e.fixedElements).appendTo(V),e.navigation&&function(){V.append('<div id="fp-nav"><ul></ul></div>');var n=t(y);n.addClass(function(){return e.showActiveTooltip?"fp-show-active "+e.navigationPosition:e.navigationPosition});for(var o=0;o<t(w).length;o++){var i="";e.anchors.length&&(i=e.anchors[o]);var a='<li><a href="#'+i+'"><span></span></a>',l=e.navigationTooltips[o];void 0!==l&&""!==l&&(a+='<div class="'+C+" "+e.navigationPosition+'">'+l+"</div>"),a+="</li>",n.find("ul").append(a)}t(y).css("margin-top","-"+t(y).height()/2+"px"),t(y).find("li").eq(t(S).index(w)).find("a").addClass(h)}(),Q.find('iframe[src*="youtube.com/embed/"]').each(function(){var e,n,o;n="enablejsapi=1",o=(e=t(this)).attr("src"),e.attr("src",o+(/\?/.test(o)?"&":"?")+n)}),e.scrollOverflow?oe=e.scrollOverflowHandler.init(e):Fe(),Me(!0),ke(e.autoScrolling,"internal"),mt(),Et(),"complete"===o.readyState&&lt(),q.on("load",lt),q.on("scroll",Ve).on("hashchange",st).blur(function(){$=Z=!1}).resize(gt),F.keydown(ct).keyup(dt).on("click touchstart",y+" a",function(e){e.preventDefault();var n=t(this).parent().index();Je(t(w).eq(n))}).on("click touchstart",z,function(e){e.preventDefault();var n=t(this).closest(w).find(A),o=n.find(k).eq(t(this).closest("li").index());ht(n,o)}).on("click",".fp-tooltip",function(){t(this).prev().trigger("click")}),t(w).on("click touchstart",H,function(){var e=t(this).closest(w);t(this).hasClass(P)?ne.m.left&&De(e):ne.m.right&&Pe(e)}),e.normalScrollElements&&(F.on("mouseenter touchstart",e.normalScrollElements,function(){Me(!1)}),F.on("mouseleave touchend",e.normalScrollElements,function(){Me(!0)})));var he=!1,pe=0,ge=0,me=0,we=0,Se=0,be=(new Date).getTime(),xe=0,ye=0,Ce=G}var Te;function ke(n,o){n||zt(0),Dt("autoScrolling",n,o);var i=t(S);e.autoScrolling&&!e.scrollBar?(a.css({overflow:"hidden",height:"100%"}),Oe(ve.recordHistory,"internal"),Q.css({"-ms-touch-action":"none","touch-action":"none"}),i.length&&zt(i.position().top)):(a.css({overflow:"visible",height:"initial"}),Oe(!1,"internal"),Q.css({"-ms-touch-action":"","touch-action":""}),i.length&&a.scrollTop(i.position().top))}function Oe(e,t){Dt("recordHistory",e,t)}function Le(e,t){Dt("scrollingSpeed",e,t)}function Ae(e,t){Dt("fitToSection",e,t)}function Ie(e){e?(function(){var e,t="";n.addEventListener?e="addEventListener":(e="attachEvent",t="on");var i="onwheel"in o.createElement("div")?"wheel":o.onmousewheel!==l?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==i?o[e](t+"MozMousePixelScroll",Ke,!1):o[e](t+i,Ke,!1)}(),Q.on("mousedown",ft).on("mouseup",ut)):(o.addEventListener?(o.removeEventListener("mousewheel",Ke,!1),o.removeEventListener("wheel",Ke,!1),o.removeEventListener("MozMousePixelScroll",Ke,!1)):o.detachEvent("onmousewheel",Ke),Q.off("mousedown",ft).off("mouseup",ut))}function Me(n,o){void 0!==o?(o=o.replace(/ /g,"").split(","),t.each(o,function(e,t){Pt(n,t,"m")})):(Pt(n,"all","m"),n?(Ie(!0),(_||K)&&(e.autoScrolling&&V.off(fe.touchmove).on(fe.touchmove,Xe),t(r).off(fe.touchstart).on(fe.touchstart,We).off(fe.touchmove).on(fe.touchmove,$e))):(Ie(!1),(_||K)&&(e.autoScrolling&&V.off(fe.touchmove),t(r).off(fe.touchstart).off(fe.touchmove))))}function Ee(n,o){void 0!==o?(o=o.replace(/ /g,"").split(","),t.each(o,function(e,t){Pt(n,t,"k")})):(Pt(n,"all","k"),e.keyboardScrolling=n)}function Be(){var n=t(S).prev(w);n.length||!e.loopTop&&!e.continuousVertical||(n=t(w).last()),n.length&&Je(n,null,!0)}function Re(){var n=t(S).next(w);n.length||!e.loopBottom&&!e.continuousVertical||(n=t(w).first()),n.length&&Je(n,null,!1)}function ze(e,t){Le(0,"internal"),He(e,t),Le(ve.scrollingSpeed,"internal")}function He(e,t){var n=kt(e);void 0!==t?Ot(e,t):0<n.length&&Je(n)}function Pe(e){Qe("right",e)}function De(e){Qe("left",e)}function je(n){if(!Q.hasClass(f)){J=!0,G=q.height(),t(w).each(function(){var n=t(this).find(A),o=t(this).find(k);e.verticalCentered&&t(this).find(x).css("height",Ct(t(this))+"px"),t(this).css("height",G+"px"),1<o.length&&ht(n,n.find(O))}),e.scrollOverflow&&oe.createScrollBarForAll();var o=t(S).index(w);o&&ze(o+1),J=!1,t.isFunction(e.afterResize)&&n&&e.afterResize.call(Q),t.isFunction(e.afterReBuild)&&!n&&e.afterReBuild.call(Q)}}function qe(n){var o=V.hasClass(c);n?o||(ke(!1,"internal"),Ae(!1,"internal"),t(y).hide(),V.addClass(c),t.isFunction(e.afterResponsive)&&e.afterResponsive.call(Q,n)):o&&(ke(ve.autoScrolling,"internal"),Ae(ve.autoScrolling,"internal"),t(y).show(),V.removeClass(c),t.isFunction(e.afterResponsive)&&e.afterResponsive.call(Q,n))}function Fe(){var n,o=t(S);o.addClass(g),tt(o),nt(o),e.scrollOverflow&&e.scrollOverflowHandler.afterLoad(),(!(n=kt(rt().section))||n.length&&n.index()===U.index())&&t.isFunction(e.afterLoad)&&e.afterLoad.call(o,o.data("anchor"),o.index(w)+1),t.isFunction(e.afterRender)&&e.afterRender.call(Q)}function Ve(){var n,i,a,l,s,r;if(!e.autoScrolling||e.scrollBar){var c=q.scrollTop(),d=(a=pe<(i=c)?"down":"up",xe=pe=i,a),f=0,u=c+q.height()/2,v=V.height()-q.height()===c,p=o.querySelectorAll(w);if(v)f=p.length-1;else if(c)for(var m=0;m<p.length;++m){p[m].offsetTop<=u&&(f=m)}else f=0;if(l=d,r=(s=t(S).position().top)+q.height(),("up"==l?r>=q.scrollTop()+q.height():s<=q.scrollTop())&&(t(S).hasClass(g)||t(S).addClass(g).siblings().removeClass(g)),!(n=t(p).eq(f)).hasClass(h)){he=!0;var b,x,y=t(S),C=y.index(w)+1,T=xt(n),k=n.data("anchor"),L=n.index(w)+1,A=n.find(O);A.length&&(x=A.data("anchor"),b=A.index()),ee&&(n.addClass(h).siblings().removeClass(h),t.isFunction(e.onLeave)&&e.onLeave.call(y,C,L,T),t.isFunction(e.afterLoad)&&e.afterLoad.call(n,k,L),it(y),tt(n),nt(n),bt(k,L-1),e.anchors.length&&(N=k),At(b,x,k,L)),clearTimeout(se),se=setTimeout(function(){he=!1},100)}e.fitToSection&&(clearTimeout(re),re=setTimeout(function(){e.fitToSection&&t(S).outerHeight()<=G&&Ye()},e.fitToSectionDelay))}}function Ye(){ee&&(J=!0,Je(t(S)),J=!1)}function Ne(n){if(ne.m[n]){var o="down"===n?Re:Be;if(e.scrollOverflow){var i=e.scrollOverflowHandler.scrollable(t(S)),a="down"===n?"bottom":"top";if(0<i.length){if(!e.scrollOverflowHandler.isScrolled(a,i))return!0;o()}else o()}else o()}}function Xe(t){var n=t.originalEvent;e.autoScrolling&&Ue(n)&&t.preventDefault()}function $e(n){var o=n.originalEvent,a=t(o.target).closest(w);if(Ue(o)){e.autoScrolling&&n.preventDefault();var l=Bt(o);we=l.y,Se=l.x,a.find(A).length&&i.abs(me-Se)>i.abs(ge-we)?!W&&i.abs(me-Se)>q.outerWidth()/100*e.touchSensitivity&&(Se<me?ne.m.right&&Pe(a):ne.m.left&&De(a)):e.autoScrolling&&ee&&i.abs(ge-we)>q.height()/100*e.touchSensitivity&&(we<ge?Ne("down"):ge<we&&Ne("up"))}}function Ue(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function We(t){var n=t.originalEvent;if(e.fitToSection&&a.stop(),Ue(n)){var o=Bt(n);ge=o.y,me=o.x}}function _e(e,t){for(var n=0,o=e.slice(i.max(e.length-t,1)),a=0;a<o.length;a++)n+=o[a];return i.ceil(n/t)}function Ke(o){var l=(new Date).getTime(),s=t(".fp-completely").hasClass("fp-normal-scroll");if(e.autoScrolling&&!$&&!s){var r=(o=o||n.event).wheelDelta||-o.deltaY||-o.detail,c=i.max(-1,i.min(1,r)),d=void 0!==o.wheelDeltaX||void 0!==o.deltaX,f=i.abs(o.wheelDeltaX)<i.abs(o.wheelDelta)||i.abs(o.deltaX)<i.abs(o.deltaY)||!d;149<te.length&&te.shift(),te.push(i.abs(r)),e.scrollBar&&(o.preventDefault?o.preventDefault():o.returnValue=!1);var u=l-be;if(be=l,200<u&&(te=[]),ee){var v=_e(te,10);_e(te,70)<=v&&f&&Ne(c<0?"down":"up")}return!1}e.fitToSection&&a.stop()}function Qe(n,o){var i=(void 0===o?t(S):o).find(A),a=i.find(k).length;if(!(!i.length||W||a<2)){var l=i.find(O),s=null;if(!(s="left"===n?l.prev(k):l.next(k)).length){if(!e.loopHorizontal)return;s="left"===n?l.siblings(":last"):l.siblings(":first")}W=!0,ht(i,s,n)}}function Ge(){t(O).each(function(){Rt(t(this),"internal")})}function Je(n,o,a){if(void 0!==n){var l,s,c={element:n,callback:o,isMovementUp:a,dtop:(p=(v=(u=n).position()).top,g=v.top>xe,m=p-G+u.outerHeight(),b=e.bigSectionsDestination,u.outerHeight()>G?(g||b)&&"bottom"!==b||(p=m):(g||J&&u.is(":last-child"))&&(p=m),xe=p),yMovement:xt(n),anchorLink:n.data("anchor"),sectionIndex:n.index(w),activeSlide:n.find(O),activeSection:t(S),leavingSection:t(S).index(w)+1,localIsResizing:J};if(!(c.activeSection.is(n)&&!J||e.scrollBar&&q.scrollTop()===c.dtop&&!n.hasClass("fp-auto-height"))){if(c.activeSlide.length&&(l=c.activeSlide.data("anchor"),s=c.activeSlide.index()),t.isFunction(e.onLeave)&&!c.localIsResizing){var d=c.yMovement;if(void 0!==a&&(d=a?"up":"down"),!1===e.onLeave.call(c.activeSection,c.leavingSection,c.sectionIndex+1,d))return}e.autoScrolling&&e.continuousVertical&&void 0!==c.isMovementUp&&(!c.isMovementUp&&"up"==c.yMovement||c.isMovementUp&&"down"==c.yMovement)&&((f=c).isMovementUp?t(S).before(f.activeSection.nextAll(w)):t(S).after(f.activeSection.prevAll(w).get().reverse()),zt(t(S).position().top),Ge(),f.wrapAroundElements=f.activeSection,f.dtop=f.element.position().top,f.yMovement=xt(f.element),f.leavingSection=f.activeSection.index(w)+1,f.sectionIndex=f.element.index(w),c=f),c.localIsResizing||it(c.activeSection),e.scrollOverflow&&e.scrollOverflowHandler.beforeLeave(),n.addClass(h).siblings().removeClass(h),tt(n),e.scrollOverflow&&e.scrollOverflowHandler.onLeave(),ee=!1,At(s,l,c.anchorLink,c.sectionIndex),function(n){if(e.css3&&e.autoScrolling&&!e.scrollBar){Tt("translate3d(0px, -"+i.round(n.dtop)+"px, 0px)",!0),e.scrollingSpeed?(clearTimeout(ae),ae=setTimeout(function(){Ze(n)},e.scrollingSpeed)):Ze(n)}else{var o=(a=n,l={},e.autoScrolling&&!e.scrollBar?(l.options={top:-a.dtop},l.element=r):(l.options={scrollTop:a.dtop},l.element="html, body"),l);t(o.element).animate(o.options,e.scrollingSpeed,e.easing).promise().done(function(){e.scrollBar?setTimeout(function(){Ze(n)},30):Ze(n)})}var a,l}(c),N=c.anchorLink,bt(c.anchorLink,c.sectionIndex)}}var f,u,v,p,g,m,b}function Ze(n){var o;(o=n).wrapAroundElements&&o.wrapAroundElements.length&&(o.isMovementUp?t(".fp-section:first").before(o.wrapAroundElements):t(".fp-section:last").after(o.wrapAroundElements),zt(t(S).position().top),Ge()),t.isFunction(e.afterLoad)&&!n.localIsResizing&&e.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),e.scrollOverflow&&e.scrollOverflowHandler.afterLoad(),n.localIsResizing||nt(n.element),n.element.addClass(g).siblings().removeClass(g),ee=!0,t.isFunction(n.callback)&&n.callback.call(this)}function et(e,t){e.attr(t,e.data(t)).removeAttr("data-"+t)}function tt(n){var o;e.lazyLoading&&at(n).find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]").each(function(){if(o=t(this),t.each(["src","srcset"],function(e,t){var n=o.attr("data-"+t);void 0!==n&&n&&et(o,t)}),o.is("source")){var e=o.closest("video").length?"video":"audio";o.closest(e).get(0).load()}})}function nt(e){var n=at(e);n.find("video, audio").each(function(){var e=t(this).get(0);e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),n.find('iframe[src*="youtube.com/embed/"]').each(function(){var e=t(this).get(0);e.hasAttribute("data-autoplay")&&ot(e),e.onload=function(){e.hasAttribute("data-autoplay")&&ot(e)}})}function ot(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function it(e){var n=at(e);n.find("video, audio").each(function(){var e=t(this).get(0);e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),n.find('iframe[src*="youtube.com/embed/"]').each(function(){var e=t(this).get(0);/youtube\.com\/embed\//.test(t(this).attr("src"))&&!e.hasAttribute("data-keepplaying")&&t(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function at(e){var n=e.find(O);return n.length&&(e=t(n)),e}function lt(){var t=rt(),n=t.section,o=t.slide;n&&(e.animateAnchor?Ot(n,o):ze(n,o))}function st(){if(!he&&!e.lockAnchors){var t=rt(),n=t.section,o=t.slide,i=void 0===N,a=void 0===N&&void 0===o&&!W;n&&n.length&&(n&&n!==N&&!i||a||!W&&X!=o)&&Ot(n,o)}}function rt(){var e,t,o=n.location.hash;if(o.length){var i=o.replace("#","").split("/"),a=-1<o.indexOf("#/");e=a?"/"+i[1]:decodeURIComponent(i[0]);var l=a?i[2]:i[1];l&&l.length&&(t=decodeURIComponent(l))}return{section:e,slide:t}}function ct(n){clearTimeout(ce);var o=t(":focus"),i=n.which;9===i?function(e){var n=e.shiftKey,o=t(":focus"),i=t(S),a=i.find(O),l=(a.length?a:i).find(ue).not('[tabindex="-1"]');function s(e){return e.preventDefault(),l.first().focus()}o.length?o.closest(S,O).length||(o=s(e)):s(e),(!n&&o.is(l.last())||n&&o.is(l.first()))&&e.preventDefault()}(n):o.is("textarea")||o.is("input")||o.is("select")||"true"===o.attr("contentEditable")||""===o.attr("contentEditable")||!e.keyboardScrolling||!e.autoScrolling||(-1<t.inArray(i,[40,38,32,33,34])&&n.preventDefault(),$=n.ctrlKey,ce=setTimeout(function(){!function(e){var n=e.shiftKey;if(ee||!([37,39].indexOf(e.which)<0))switch(e.which){case 38:case 33:ne.k.up&&Be();break;case 32:if(n&&ne.k.up){Be();break}case 40:case 34:ne.k.down&&Re();break;case 36:ne.k.up&&He(1);break;case 35:ne.k.down&&He(t(w).length);break;case 37:ne.k.left&&De();break;case 39:ne.k.right&&Pe()}}(n)},150))}function dt(e){Z&&($=e.ctrlKey)}function ft(e){2==e.which&&(ye=e.pageY,Q.on("mousemove",vt))}function ut(e){2==e.which&&Q.off("mousemove")}function vt(e){ee&&(e.pageY<ye&&ne.m.up?Be():e.pageY>ye&&ne.m.down&&Re()),ye=e.pageY}function ht(n,o,a){var l,s,r=n.closest(w),c={slides:n,destiny:o,direction:a,destinyPos:o.position(),slideIndex:o.index(),section:r,sectionIndex:r.index(w),anchorLink:r.data("anchor"),slidesNav:r.find(R),slideAnchor:Mt(o),prevSlide:r.find(O),prevSlideIndex:r.find(O).index(),localIsResizing:J};c.xMovement=(l=c.prevSlideIndex)==(s=c.slideIndex)?"none":s<l?"left":"right",c.localIsResizing||(ee=!1),e.onSlideLeave&&!c.localIsResizing&&"none"!==c.xMovement&&t.isFunction(e.onSlideLeave)&&!1===e.onSlideLeave.call(c.prevSlide,c.anchorLink,c.sectionIndex+1,c.prevSlideIndex,c.direction,c.slideIndex)?W=!1:(o.addClass(h).siblings().removeClass(h),c.localIsResizing||(it(c.prevSlide),tt(o)),!e.loopHorizontal&&e.controlArrows&&(r.find(D).toggle(0!==c.slideIndex),r.find(j).toggle(!o.is(":last-child"))),r.hasClass(h)&&!c.localIsResizing&&At(c.slideIndex,c.slideAnchor,c.anchorLink,c.sectionIndex),function(t,n,o){var a=n.destinyPos;if(e.css3){var l="translate3d(-"+i.round(a.left)+"px, 0px, 0px)";wt(t.find(M)).css(Ht(l)),le=setTimeout(function(){pt(n)},e.scrollingSpeed,e.easing)}else t.animate({scrollLeft:i.round(a.left)},e.scrollingSpeed,e.easing,function(){pt(n)})}(n,c))}function pt(n){var o,i;o=n.slidesNav,i=n.slideIndex,o.find(p).removeClass(h),o.find("li").eq(i).find("a").addClass(h),n.localIsResizing||(t.isFunction(e.afterSlideLoad)&&e.afterSlideLoad.call(n.destiny,n.anchorLink,n.sectionIndex+1,n.slideAnchor,n.slideIndex),ee=!0,nt(n.destiny)),W=!1}function gt(){if(mt(),_){var e=t(o.activeElement);if(!e.is("textarea")&&!e.is("input")&&!e.is("select")){var n=q.height();i.abs(n-Ce)>20*i.max(Ce,n)/100&&(je(!0),Ce=n)}}else clearTimeout(ie),ie=setTimeout(function(){je(!0)},350)}function mt(){var t=e.responsive||e.responsiveWidth,n=e.responsiveHeight,o=t&&q.outerWidth()<t,i=n&&q.height()<n;t&&n?qe(o||i):t?qe(o):n&&qe(i)}function wt(t){var n="all "+e.scrollingSpeed+"ms "+e.easingcss3;return t.removeClass(d),t.css({"-webkit-transition":n,transition:n})}function St(e){return e.addClass(d)}function bt(n,o){var i,a,l;i=n,e.menu&&(t(e.menu).find(p).removeClass(h),t(e.menu).find('[data-menuanchor="'+i+'"]').addClass(h)),a=n,l=o,e.navigation&&(t(y).find(p).removeClass(h),a?t(y).find('a[href="#'+a+'"]').addClass(h):t(y).find("li").eq(l).find("a").addClass(h))}function xt(e){var n=t(S).index(w),o=e.index(w);return n==o?"none":o<n?"up":"down"}function yt(e){if(!e.hasClass(E)){var n=t('<div class="'+b+'" />').height(Ct(e));e.addClass(E).wrapInner(n)}}function Ct(t){var n=G;if(e.paddingTop||e.paddingBottom){var o=t;o.hasClass(m)||(o=t.closest(w));var i=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom"));n=G-i}return n}function Tt(e,t){t?wt(Q):St(Q),Q.css(Ht(e)),setTimeout(function(){Q.removeClass(d)},10)}function kt(e){var n=Q.find(w+'[data-anchor="'+e+'"]');if(!n.length){var o=void 0!==e?e-1:0;n=t(w).eq(o)}return n}function Ot(e,t){var n,o,i,a=kt(e);if(a.length){var l=(n=t,(i=(o=a).find(k+'[data-anchor="'+n+'"]')).length||(n=void 0!==n?n:0,i=o.find(k).eq(n)),i);e===N||a.hasClass(h)?Lt(l):Je(a,function(){Lt(l)})}}function Lt(e){e.length&&ht(e.closest(A),e)}function At(t,n,o,i){var a="";e.anchors.length&&!e.lockAnchors&&(t?(void 0!==o&&(a=o),void 0===n&&(n=t),It(a+"/"+(X=n))):(void 0!==t&&(X=n),It(o))),Et()}function It(t){if(e.recordHistory)location.hash=t;else if(_||K)n.history.replaceState(l,l,"#"+t);else{var o=n.location.href.split("#")[0];n.location.replace(o+"#"+t)}}function Mt(e){var t=e.data("anchor"),n=e.index();return void 0===t&&(t=n),t}function Et(){var e=t(S),n=e.find(O),o=Mt(e),i=Mt(n),a=String(o);n.length&&(a=a+"-"+i),a=a.replace("/","-").replace("#","");var l=new RegExp("\\b\\s?"+v+"-[^\\s]+\\b","g");V[0].className=V[0].className.replace(l,""),V.addClass(v+"-"+a)}function Bt(t){var n=[];return n.y=void 0!==t.pageY&&(t.pageY||t.pageX)?t.pageY:t.touches[0].pageY,n.x=void 0!==t.pageX&&(t.pageY||t.pageX)?t.pageX:t.touches[0].pageX,K&&Ue(t)&&(e.scrollBar||!e.autoScrolling)&&(n.y=t.touches[0].pageY,n.x=t.touches[0].pageX),n}function Rt(e,t){Le(0,"internal"),void 0!==t&&(J=!0),ht(e.closest(A),e),void 0!==t&&(J=!1),Le(ve.scrollingSpeed,"internal")}function zt(t){var n=i.round(t);e.css3&&e.autoScrolling&&!e.scrollBar?Tt("translate3d(0px, -"+n+"px, 0px)",!1):e.autoScrolling&&!e.scrollBar?Q.css("top",-n):a.scrollTop(n)}function Ht(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Pt(e,n,o){"all"!==n?ne[o][n]=e:t.each(Object.keys(ne[o]),function(t,n){ne[o][n]=e})}function Dt(t,n,o){e[t]=n,"internal"!==o&&(ve[t]=n)}function jt(){t("html").hasClass(u)?qt("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(e.continuousVertical&&(e.loopTop||e.loopBottom)&&(e.continuousVertical=!1,qt("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),e.scrollBar&&e.scrollOverflow&&qt("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),!e.continuousVertical||!e.scrollBar&&e.autoScrolling||(e.continuousVertical=!1,qt("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),e.scrollOverflow&&!e.scrollOverflowHandler&&(e.scrollOverflow=!1,qt("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),t.each(["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax"],function(t,n){e[n]&&qt("warn","fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: "+n)}),t.each(e.anchors,function(e,n){var o=F.find("[name]").filter(function(){return t(this).attr("name")&&t(this).attr("name").toLowerCase()==n.toLowerCase()}),i=F.find("[id]").filter(function(){return t(this).attr("id")&&t(this).attr("id").toLowerCase()==n.toLowerCase()});(i.length||o.length)&&(qt("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),i.length&&qt("error",'"'+n+'" is is being used by another element `id` property'),o.length&&qt("error",'"'+n+'" is is being used by another element `name` property'))}))}function qt(e,t){console&&console[e]&&console[e]("fullPage: "+t)}});var t,n,o,i,l,s,r,c,d,f,u,v,h,p,g,m,w,S,b,x,y,C,T,k,O,L,A,I,M,E,B,R,z,H,P,D,j,q,F}.apply(t,o))||(e.exports=i)}("undefined"!=typeof window?window:this)},function(e,t,n){"use strict";n(2);var o=$("#fullpage"),i=o.find(".section");o.fullpage({scrollingSpeed:1e3,anchors:["furlosophy","byebyefur","fooddict"," scratcher","pills","addiction","aboot","contact"],afterLoad:function(e,t){i.removeClass("transition-active"),setTimeout(function(){i.eq(t-1).addClass("transition-active")},50)}}),$(".first-netxt").click(function(){o.fullpage.moveSectionDown()}),$(".js-nav a").click(function(){$(".js-nav a").removeClass("active"),$(this).addClass("active")}),$(".swiper-btns").on("click","i",function(){var e=$(this).parent().prev(),t=e.find(".swiper-slide").length,n=e.find(".swiper-slide.active"),o=$(this).hasClass("cd-icon-arrow-left")?n.prev():n.next();if(0!=o.length){0==o.length&&(o=$(this).hasClass("cd-icon-arrow-left")?e.find(".swiper-slide").eq(t-1):e.find(".swiper-slide").eq(0));var i=0;switch(o.index()+1){case 1:break;case t:i=o.position().left-(e.width()-o.width()+40);break;default:i=o.position().left-(e.width()-o.width()+40)/2}e.find(".swiper-wrapper").animate({marginLeft:"-"+i},600,"swing"),n.removeClass("active"),o.addClass("active");var a=$(this).closest(".section");a.removeClass("transition-active"),setTimeout(function(){a.find(".title").html(o.data("title")),a.find(".description").html(o.data("description")),a.find(".sub-description").html(o.data("subDescription")),a.addClass("transition-active")},800)}})}]);