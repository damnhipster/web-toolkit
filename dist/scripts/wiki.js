"undefined"==typeof toolkit&&(toolkit={}),toolkit.skycons=function(){function e(){var e,t=document,n=(t.documentElement,t.body),i=!1,r=t.createElement("p"),o=t.createElement("style"),s='#testbefore:before { content: "before"; }';return o.type="text/css",r.id="testbefore",o.styleSheet?o.styleSheet.cssText=s:o.appendChild(t.createTextNode(s)),n.appendChild(o),n.appendChild(r),e=t.getElementById("testbefore").offsetHeight,e>=1&&(i=!0),n.removeChild(o),n.removeChild(r),i}function t(e,t){var n=e.innerHTML,r=i[t];e.innerHTML='<span style="font-family: \'skycons\'" class="ie7-skycon">'+r+"</span>"+n}function n(){if(!e()){var n,i,r,o=document.getElementsByTagName("*");for(n=0;r=o[n],r;n+=1)i=r.className,i=i.match(/skycon-[^\s'"]+/),i&&t(r,i[0])}}var i={"skycon-sky":"&#xf100;","skycon-twitter-reply":"&#xf101;","skycon-chevron":"&#xf102;","skycon-facebook":"&#xf103;","skycon-remote-record":"&#xf104;","skycon-warning":"&#xf105;","skycon-carousel-play":"&#xf106;","skycon-user-profile":"&#xf107;","skycon-search":"&#xf108;","skycon-twitter-retweet":"&#xf109;","skycon-volume":"&#xf10a;","skycon-twitter-favourite":"&#xf10b;","skycon-expand":"&#xf10c;","skycon-carousel-pause":"&#xf10d;","skycon-share":"&#xf10e;","skycon-never-miss":"&#xf10f;","skycon-mail":"&#xf110;","skycon-sky-go":"&#xf111;","skycon-twitter-follow":"&#xf112;","skycon-minify":"&#xf113;","skycon-twitter":"&#xf114;","skycon-close":"&#xf115;","skycon-menu":"&#xf116;","skycon-google-plus":"&#xf117;"};return{add:t,init:n}}(),"function"==typeof window.define&&window.define.amd&&define("utils/skycons",[],function(){return toolkit.skycons}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.hashmanager=function(){function e(){$(window).on("hashchange",t);var e=document.documentMode,n="onhashchange"in window&&(void 0===e||e>7);n||(s.hash=document.location.hash,setInterval(function(){document.location.hash!==s.hash&&$(window).trigger("hashchange")},200)),s.windowLoaded=!0}function t(e){var t,n;e=o("string"==typeof e?e:location.hash),e?(t=s.globalHashList[e],n="callback",s.lastExecutor=e):s.lastExecutor&&(t=s.globalHashList[s.lastExecutor],n="undo"),t&&"function"==typeof t[n]&&t[n](e)}function n(){var e=window.location;"pushState"in history?(location.hash="!",history.pushState("",document.title,e.pathname+e.search)):location.hash="!"}function i(e){location.hash="!"+e}function r(e,n,i){var r=s.globalHashList;$(e).each(function(e,a){if(a=o(a),r[a]){var u="hashManager: hash ("+a+") already exists";throw new Error(u)}r[a]={callback:n,undo:i},s.windowLoaded&&a===o(location.hash)&&t(a)})}function o(e){return e.replace(/[#!]/g,"")}var s={globalHashList:{},hasLoaded:!1,windowLoaded:!1,lastExecutor:null,hash:null};return e(),{register:r,change:i,remove:n,onHashChange:t,cleanHash:o}}(),"function"==typeof window.define&&window.define.amd&&define("utils/hashmanager",[],function(){return toolkit.hashmanager}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.popup=function(){function e(e){var t=e.url,n=e.width||400,i=e.height||n,r=e.top||screen.height/2-i/2,o=e.left||screen.width/2-n/2,s=e.title||"Sky";return window.open(t,s,"top="+r+",left="+o+",width="+n+",height="+i)}function t(){$("body").on("click","[data-popup]",function(t){t.preventDefault();var n=$.extend($(this).data("popup"),{url:$(this).attr("href")});e(n)})}return{init:t,open:e}}(),"function"==typeof window.define&&window.define.amd&&define("utils/popup",[],function(){return toolkit.popup}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.tabs=function(e){function t(){o.rememberState?e.register(n(),i):r.tabs.on("click",function(e){e.preventDefault(),i($(this).find("a").attr("href"))})}function n(){var e=[];return r.tabs.each(function(){e.push($(this).attr("aria-controls"))}),e}function i(e){r.tabTargets.add(r.tabs).removeClass("selected"),$("#"+e+"-tab").add($("#"+e)).addClass("selected")}var r={tabContainer:$("section[data-function=tabs]"),tabs:$("section[data-function=tabs] li[role=tab]"),tabTargets:$("section[data-function=tabs] div[role=tabpanel]")},o={rememberState:"true"===r.tabContainer.attr("data-remember-state")};return t(),{getHashList:n,changeTab:i}}(toolkit.hashmanager),"function"==typeof window.define&&window.define.amd&&define("modules/tabs",["utils/hashmanager"],function(){return toolkit.tabs}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.share=function(){function e(){i.shareCount.on("click keypress",t)}function t(e){e.preventDefault();var t=$(this).parent(),n="keypress "+("ontouchend"in document.documentElement?"touchend":"click");("click"===e.type||"touchend"===e.type||"keypress"===e.type&&13===e.which)&&(t.toggleClass("active"),i.document.on(n,function r(e){$.contains(t[0],e.target)||(t.removeClass("active"),i.document.off(n,r))}))}function n(){e()}var i={document:$(document),shareCount:$(".share-popup .summary")};return{init:n,toggleSharePopover:t}}(),"function"==typeof window.define&&window.define.amd&&define("modules/share",[],function(){return toolkit.share}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.carousel=function(e,t){function n(e,t){this.options=t,this.$viewport=e,this.$slideContainer=e.find(".skycom-carousel-container"),this.$slides=this.$slideContainer.find(">"),this.currentIndex=0,this.slideCount=this.$slides.length,this.timerId=!1,this.touchReset(),this.bindEvents()}function i(e,t){this.carousel=e,this.wrapper=e.$viewport.find(".video-wrapper"),this.wrapper.attr("id","video-"+t.videoId),this.videocontrolcontainer=e.$viewport.find(".videocontrolcontainer"),this.player=e.$viewport.find("video"),this.videocontrolcontainer.find("img").on("error",function(){this.src=t.placeHolderImage}),this.options=t,this.bindEvents()}var r=function(){return"WebKitCSSMatrix"in e&&"m11"in new e.WebKitCSSMatrix}(),o=function(){var e=document.body.style;return void 0!==e.transform||void 0!==e.WebkitTransform||void 0!==e.MozTransform||void 0!==e.OTransform}();n.prototype={unbindTouchEvents:function(){this.$slideContainer.off("touchstart touchmove touchend touchcancel")},bindTouchEvents:function(){this.$slideContainer.on("touchstart",this.touchstart.bind(this)).on("touchmove",this.touchmove.bind(this)).on("touchend",this.touchend.bind(this)).on("touchcancel",this.touchReset.bind(this))},bindEvents:function(){this.bindTouchEvents(),this.$slideContainer.find("a").on("click",this.pause.bind(this))},unbindEvents:function(){this.unbindTouchEvents(),this.$slideContainer.find("a").off("click")},setOffset:function(e,t){var n=this.$slideContainer.removeClass("animate");return t&&n.addClass("animate"),r?n.css("transform","translate3d("+e+"%,0,0) scale3d(1,1,1)"):o?n.css("transform","translate("+e+"%,0)"):t?n.animate({left:2*e+"%"},600):n.css({left:2*e+"%"}),this},moveSlide:function(e){var t,n,i=this,r=this.$slides;return n=e.index>=this.slideCount?0:e.index<0?this.slideCount-1:e.index,t=e.index>this.currentIndex&&!e.reverse?"left":"right",r.filter(":not(:eq("+this.currentIndex+"))").hide(),r.eq(this.currentIndex).css("float",t),r.eq(n).show().css("float","left"==t?"right":"left"),this.setOffset(e.start,!1),"undefined"!=typeof e.end&&(setTimeout(function(){i.setOffset(e.end,!0),i.$viewport.trigger("change",n)},20),this.currentIndex=n,"function"==typeof e.callback&&e.callback(n)),n},"goto":function(e,t,n){return t!==!1&&this.pause(),e!==this.currentIndex?(e>this.currentIndex?this.moveSlide({index:e,start:0,end:-50,callback:n}):this.moveSlide({index:e,start:-50,end:0,callback:n}),this):void 0},next:function(e,t){return this.goto(this.currentIndex+1,e,t),this.$viewport.find(".indicators, .actions").css("display","block"),this},previous:function(){return this.goto(this.currentIndex-1),this.$viewport.find(".indicators, .actions").css("display","block"),this},play:function(e,t){var n=this,i=this.options.interval;return n.timerId=setTimeout(function(){n.next(!1),n.timerId=setTimeout(function e(){n.next(!1,function(){n.timerId=setTimeout(e,i)})},i)},t||this.options.onPlayDelay),this.$viewport.trigger("playing"),"function"==typeof e&&e(),this},pause:function(e){return clearTimeout(this.timerId),this.$viewport.trigger("paused"),"function"==typeof e&&e(),this},touchstart:function(e){var t=e.originalEvent.touches[0];this.pause(),this.swipe.start={x:t.pageX,y:t.pageY}},touchmove:function(e){var t,n=this.swipe,i=e.originalEvent.touches[0],r=i.pageX-n.start.x,o=i.pageY-n.start.y,s=Math.abs(r)>Math.abs(o),a=0>r?this.currentIndex+1:this.currentIndex-1;n.start&&s!==!1&&(e.preventDefault(),t=100*(r/this.$slideContainer.outerWidth(!0)),r>0&&(t-=50),this.swipe.positionAsPercentage=t,this.moveSlide({index:a,start:t}))},touchend:function(e){if(this.swipe.start){var t=this.swipe,n=t.positionAsPercentage,i=e.originalEvent.changedTouches[0],r=i.pageX-t.start.x,o=null,s=75;if(Math.abs(r)>s&&(o=0>r?"left":"right"),"left"===o)this.moveSlide({index:this.currentIndex+1,start:n,end:-50}),this.$viewport.find(".next").trigger("toolkit.track");else if("right"===o)this.moveSlide({index:this.currentIndex-1,start:n,end:0}),this.$viewport.find(".previous").trigger("toolkit.track");else if(0!==n){var a,u=r>0?n+50:n,c=this.currentIndex,l=0;0>u?this.currentIndex=c+1>=this.slideCount?0:c+1:(this.currentIndex-=1,l=-50,u-=50),a=0===this.currentIndex&&c===this.slideCount-1,this.moveSlide({index:c,start:u,end:l,reverse:a})}this.touchReset()}},touchReset:function(){this.swipe={start:!1,positionAsPercentage:0}}},i.prototype={bindEvents:function(){var e=this,t=function(e){e.preventDefault()},n=function(){return e.stop(),i.off("click",t),!1},i=this.wrapper;i.on("click",t).find(".close").one("click touchstart",n),this.player.on("ended webkitendfullscreen",n)},play:function(){var e=this,t=this.carousel.$viewport.find(".actions, .indicators");this.originalHtml=this.videocontrolcontainer.html(),this.carousel.pause(),this.showCanvas(function(){t.hide(),e.carousel.unbindTouchEvents(),e.player.sky_html5player(e.options),setTimeout(function(){sky.html5player.play()},1333)})},stop:function(){var n=this,i=this.carousel.$viewport.find(".actions, .indicators");t(e).off("skycom.resizeend",n.resizeCarousel),sky.html5player.close(this.wrapper),n.videocontrolcontainer.html(n.originalHtml),this.hideCanvas(function(){n.carousel.bindTouchEvents(),i.show()})},showCanvas:function(n){var i,r=this.carousel.$viewport,o=r.find(".video-overlay"),s=r.find(".video-wrapper"),a=r.find(".play-video"),u=r.find(".video-wrapper .close"),c=500,l=this;this.originalHeight=r.height(),s.addClass("playing-video"),o.fadeIn(function(){a.fadeOut(),i=l.calculateHeightForVideo(),r.animate({height:i},c,function(){t(e).on("skycom.resizeend",t.proxy(l.resizeCarousel,l)),s.show(),o.fadeOut(c,function(){u.addClass("active")}),n()})})},calculateHeightForVideo:function(){return Math.round(9*(this.carousel.$viewport.width()/16))},resizeCarousel:function(){this.carousel.$viewport.animate({height:this.calculateHeightForVideo()},250)},hideCanvas:function(e){var t=this.carousel.$viewport,n=t.find(".video-overlay"),i=t.find(".video-wrapper"),r=t.find(".play-video"),o=t.find(".video-wrapper .close"),s=500,a=this.originalHeight;n.fadeIn(s,function(){o.removeClass("active"),t.animate({height:a},s,function(){t.css({height:"auto"}),e(),r.fadeIn(),n.hide(),i.fadeOut(),i.removeClass("playing-video")})})}},t.fn.skycom_carousel=function(e){var r=t.extend(!0,{carousel:{actions:[{id:"play",label:"Play Carousel"},{id:"pause",label:"Pause Carousel"},{id:"previous",label:"Previous"},{id:"next",label:"Next"}],autoplay:!0,startSlideIndex:0,onPlayDelay:500,interval:6e3},video:{token:"8D5B12D4-E1E6-48E8-AF24-F7B13050EE85",autoplay:!1,videoId:null,freewheel:!1,placeHolderImage:"//static.video.sky.com/posterframes/skychasky.jpg"}},e),o={actions:function(e,n){var i,r,o,s,a="",u=n.actions,c=n.onclick;if(n.count<=1)return this;for(o in u)s="",i=u[o].id,r=u[o].label,("next"==i||"previous"==i)&&(s=" hidden-touch "),a+='<a href="#" class="skycom-internal '+s+i+'" >',a+='<span class="icon-carousel-'+i+'"></span>'+r,("next"==i||"previous"==i)&&(a+='<span class="icon-carousel-'+i+'-over over"></span>'),a+="</a>";return e.find(".skycom-carousel-container").before('<div class="actions">'+a+"</div>"),e.find("> .actions > *").each(function(e){t(this).attr("data-action",u[e].id).on("click",function(t){c(u[e].id),t.preventDefault()})}),this},indicators:function(e,n){var i,r,o=n.count,s=n.onclick,a='<div class="indicators"><div class="container">',u=' class="active"';if(1>=o)return this;for(r=o;r--;)a+="<span"+u+' data-tracking data-tracking-label="indicator"></span>',u="";return i=t(a+"</div></div>").on("click","span",function(e){s(t(e.currentTarget).index())}),e.append(i),this},video:function(e){return e.append('<div class="video-overlay"></div>'),this}};return this.each(function(){var e=t(this),s=new n(e,r.carousel),a=function(t){o.indicators(e,{count:t.slideCount,onclick:function(e){t.goto(e)}}).actions(e,{count:t.slideCount,actions:r.carousel.actions,onclick:function(e){t[e]()}}).video(e)};a(s),e.on("click",".play-video",function(e){e.preventDefault(),r.video.videoId=t(this).attr("data-video-id"),r.carousel.videoAds&&(r.video.freewheel=!0);var n=new i(s,r.video);n.play()}).on("change",function(t,n){n=n||0,e.find(".indicators .container > *").removeClass("active").eq(n).addClass("active"),s.$slides.removeClass("active").find("a").attr("tabindex",-1),s.$slides.eq(n).addClass("active").find("a").removeAttr("tabindex")}).on("playing",function(){e.removeClass("paused").addClass("playing")}).on("paused",function(){e.removeClass("playing").addClass("paused")}).on("pause",function(){s.pause()}).on("play",function(){s.play()}).on("refresh",function(t,n){s.$slides=s.$slideContainer.find(">"),s.slideCount=s.$slides.length,e.find(".indicators").remove(),e.find(".actions").remove(),e.find(".video-overlay").remove(),a(s),n=parseInt(n,10),isNaN(n)||0>n?n=0:n>s.slideCount-1&&(n=s.slideCount-1),n>s.currentIndex?s.moveSlide({index:n,start:0,end:-50}):s.moveSlide({index:n,start:-50,end:0})}).on("keyup",function(e){switch(e.keyCode){case 9:s.pause();break;case 37:s.previous();break;case 39:s.next()}}).find(".toggle-terms").on("click",function(){s.$viewport.toggleClass("showing-tandcs")}),s.slideCount>1?(s[r.carousel.autoplay===!0?"play":"pause"](!1,r.carousel.interval),s.goto(r.carousel.startSlideIndex,!1),e.trigger("change")):s.unbindTouchEvents()})}}(window,jQuery),"function"==typeof window.define&&window.define.amd&&define("modules/carousel",[],function(){return toolkit.carousel}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.main=function(){function e(){var e=function(){$(document.body).addClass("window-loaded")},t=setTimeout(e,5e3);$(window).load(function(){clearTimeout(t),e()})}e()}(),toolkit.modules=function(){var e=function(e){var t,n=$.extend({skycons:!1,share:!1,popup:!1},e);for(t in n)(n[t]||!e)&&toolkit[t]&&toolkit[t].init&&toolkit[t].init()};return{init:e}}(),"function"==typeof window.define&&window.define.amd&&define("modules",[],function(){return toolkit.modules}),"function"==typeof window.define&&window.define.amd&&define("toolkit",["utils/skycons","utils/hashmanager","utils/popup","modules","modules/tabs","modules/share","modules/carousel"],function(e,t,n,i,r,o,s){return{modules:i,skycons:e,hashmanager:t,popup:n,tabs:r,share:o,carousel:s}}),"function"==typeof window.define&&window.define.amd&&define("wiki",["toolkit"],function(e){function t(){$("#hero").skycom_carousel({carousel:{autoplay:!0,videoAds:!1}}),e.modules.init()}function n(){return console.group?(console.group($($("h1").get(0)).text()),$(".wiki-section").each(function(){var e=$(this);e.find("> h2").text()&&console.groupCollapsed(e.find("> h2").text()),i(e),e.find(".sub-section").each(function(){var e=$(this);e.find("> h3").text()&&console.groupCollapsed(e.find("> h3").text()),i(e),e.find(".example").each(function(){var e=$(this);e.find("> h4").text()&&console.groupCollapsed(e.find("> h4").text()),i(e),e.find("> h4").text()&&console.groupEnd()}),e.find("> h3").text()&&console.groupEnd()}),e.find("> h2").text()&&console.groupEnd()}),console.groupEnd(),void 0):(console.log("Please use a real browser for developer notes"),void 0)}function i(e){var t=e.find("> .developer-notes"),n=e.find("> .dependencies").html(),i=e.find("> .init").html();t.each(function(){o($(this).html())}),o(n,"Dependencies"),o(i,"Initialisation"),r(e)}function r(e){var t=e.find("> .demo").attr("data-selector"),n=e.find("> .demo > "+t).not(".developer-notes");n.each(function(){o(this.outerHTML,"'"+this.tagName+"' html")})}function o(e,t){e&&e.trim().length&&(t&&console.groupCollapsed(t),console.log.apply(console,s(e.trim())),t&&console.groupEnd())}function s(e){var t=null===e.match(/<code>/gi)?0:e.match(/<code>/gi).length,n=e.replace(/<code>/gi,"%c").replace(/<\/code>/gi,"%c"),i=[n];if(n.indexOf("%c")>-1)for(var r=0;t>r;r++)i.push("background: #FDF6E3; color: #777;"),i.push("background:white; color:black;");return i}console&&n(),t()});
//# sourceMappingURL=wiki.js.map