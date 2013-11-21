"undefined"==typeof toolkit&&(toolkit={}),toolkit.skycons=function(){function t(){var t,e=document,n=(e.documentElement,e.body),i=!1,o=e.createElement("p"),s=e.createElement("style"),a='#testbefore:before { content: "before"; }';return s.type="text/css",o.id="testbefore",s.styleSheet?s.styleSheet.cssText=a:s.appendChild(e.createTextNode(a)),n.appendChild(s),n.appendChild(o),t=e.getElementById("testbefore").offsetHeight,t>=1&&(i=!0),n.removeChild(s),n.removeChild(o),i}function e(t,e){var n=t.innerHTML,o=i[e];t.innerHTML='<span style="font-family: \'skycons\'" class="ie7-skycon">'+o+"</span>"+n}function n(){if(!t()){var n,i,o,s=document.getElementsByTagName("*");for(n=0;o=s[n],o;n+=1)i=o.className,i=i.match(/skycon-[^\s'"]+/),i&&e(o,i[0])}}var i={"skycon-sky":"&#xf100;","skycon-chevron-down":"&#xf101;","skycon-sky-plus":"&#xf102;","skycon-tv":"&#xf103;","skycon-twitter-reply":"&#xf104;","skycon-arrow-down-left":"&#xf105;","skycon-chevron-up":"&#xf106;","skycon-chevron":"&#xf107;","skycon-facebook":"&#xf108;","skycon-tick":"&#xf109;","skycon-remote-record":"&#xf10a;","skycon-warning":"&#xf10b;","skycon-carousel-play":"&#xf10c;","skycon-arrow-left":"&#xf10d;","skycon-chevron-left":"&#xf10e;","skycon-on-demand":"&#xf10f;","skycon-user-profile":"&#xf110;","skycon-search":"&#xf111;","skycon-twitter-retweet":"&#xf112;","skycon-volume":"&#xf113;","skycon-twitter-favourite":"&#xf114;","skycon-expand":"&#xf115;","skycon-carousel-pause":"&#xf116;","skycon-mouse":"&#xf117;","skycon-share":"&#xf118;","skycon-never-miss":"&#xf119;","skycon-mail":"&#xf11a;","skycon-sky-go":"&#xf11b;","skycon-twitter-follow":"&#xf11c;","skycon-minify":"&#xf11d;","skycon-twitter":"&#xf11e;","skycon-close":"&#xf11f;","skycon-menu":"&#xf120;","skycon-phone":"&#xf121;","skycon-cloud":"&#xf122;","skycon-video-play":"&#xf123;","skycon-google-plus":"&#xf124;"};return{add:e,init:n}}(),"function"==typeof window.define&&window.define.amd&&define("utils/skycons",[],function(){return toolkit.skycons}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.hashmanager=function(){function t(){$(window).on("hashchange",e);var t=document.documentMode,n="onhashchange"in window&&(void 0===t||t>7);n||(a.hash=document.location.hash,setInterval(function(){document.location.hash!==a.hash&&$(window).trigger("hashchange")},200)),a.windowLoaded=!0}function e(t){var e,n;t=s("string"==typeof t?t:location.hash),t?(e=a.globalHashList[t],n="callback",a.lastExecutor=t):a.lastExecutor&&(e=a.globalHashList[a.lastExecutor],n="undo"),e&&"function"==typeof e[n]&&e[n](t)}function n(){var t=window.location;"pushState"in history?(location.hash="!",history.pushState("",document.title,t.pathname+t.search)):location.hash="!"}function i(t){location.hash="!"+t}function o(t,n,i){var o=a.globalHashList;$(t).each(function(t,r){if(r=s(r),o[r]){var d="hashManager: hash ("+r+") already exists";throw new Error(d)}o[r]={callback:n,undo:i},a.windowLoaded&&r===s(location.hash)&&e(r)})}function s(t){return t.replace(/[#!]/g,"")}var a={globalHashList:{},hasLoaded:!1,windowLoaded:!1,lastExecutor:null,hash:null};return t(),{register:o,change:i,remove:n,onHashChange:e,cleanHash:s}}(),"function"==typeof window.define&&window.define.amd&&define("utils/hashmanager",[],function(){return toolkit.hashmanager}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.popup=function(){function t(t){var e=t.url,n=t.width||400,i=t.height||n,o=t.top||screen.height/2-i/2,s=t.left||screen.width/2-n/2,a=t.title||"Sky";return window.open(e,a,"top="+o+",left="+s+",width="+n+",height="+i)}function e(){$("body").on("click","[data-popup]",function(e){e.preventDefault();var n=$.extend($(this).data("popup"),{url:$(this).attr("href")});t(n)})}return{init:e,open:t}}(),"function"==typeof window.define&&window.define.amd&&define("utils/popup",[],function(){return toolkit.popup}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.diff=function(){function t(t){var n=t.oldRoute,i=t.newRoute;s(),$("a[data-diff]").each(function(){e(n,i,$(this).attr("data-diff"))})}function e(t,e,n){var o,s,a=n.split("/")[n.split("/").length-1],r=e+"/"+n+".html",d=t+"/"+n+".html";o=$.ajax({crossDomain:!0,url:r,cache:!1}),s=$.ajax({crossDomain:!0,url:d,cache:!1}),$.when(o,s).done(function(t,e){var n=$('<div class="togglee" data-toggle="'+a+'"><table id="'+a+'-table"></table></div>');n.append($('<textarea id="'+a+'" class="hidden latest"></textarea>').val(t)).append($('<textarea id="old-'+a+'" class=hidden></textarea>').val(e)),$("[data-diff-container]").append('<h3 class="has-toggle wiki-h3 smaller" id="'+a+'-header"><span class="toggler" for="'+a+'"></span>'+a+"</h3>").append(n),i(a,e[0].split("\n"),t[0].split("\n"))})}function n(t,e,i,s,a,r){if(a>0&&r>0&&i[r-1]===s[a-1])n(t,e,i,s,a-1,r-1),o(t,a,r," ",i[r-1]);else if(a>0&&(0===r||e[r][a-1]>=e[r-1][a]))n(t,e,i,s,a-1,r),o(t,a,"","+",s[a-1]);else{if(!(r>0&&(0===a||e[r][a-1]<e[r-1][a])))return;n(t,e,i,s,a,r-1),o(t,"",r,"-",i[r-1],"")}}function i(t,e,i){var o,s,a=new Array(e.length+1);for(s=0;s<a.length;s++)for(a[s]=new Array(i.length+1),o=0;o<a[s].length;o++)a[s][o]=0;for(s=1;s<a.length;s++)for(o=1;o<a[s].length;o++)a[s][o]=e[s-1]===i[o-1]?1+a[s-1][o-1]:Math.max(a[s-1][o],a[s][o-1]);try{n(t,a,e,i,o-1,s-1)}catch(r){alert(r)}}function o(t,e,n,i,o){var s=document.getElementById(t+"-table"),a=document.getElementById(t+"-header"),r=document.createElement("tr"),d=document.createElement("td"),c=document.createElement("td"),l=document.createElement("td"),h=document.createTextNode(n),u=document.createTextNode(e),f=document.createTextNode(i+" "+o);"+"===i?(r.className="add",$(a).addClass("add")):"-"===i&&(r.className="del",$(a).addClass("del")),d.className="codekolom",c.className="codekolom",l.className="bredecode",d.appendChild(h),c.appendChild(u),l.appendChild(f),r.appendChild(d),r.appendChild(c),r.appendChild(l),s.appendChild(r)}function s(){$(".sky-form .error").text(""),$(".togglee").remove(),$(".has-toggle").remove()}return t}(),"function"==typeof window.define&&window.define.amd&&define("utils/diff",[],function(){return toolkit.diff}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.inPageNav=function(t){function e(t){this.$tabContainer=t,this.$tabs=t.find("li[role=tab]"),this.$tabTargets=t.find("div[role=tabpanel]"),this.$showMore=t.find(".dropdown-tab-select > a"),this.$moreTabsContainer=t.find(".dropdown-tab-select"),this.$moreTabsLink=t.find(".more-tabs"),this.numberOfTabsToShow=0,this.saveTabOrder(),this.bindEvents(),this.initTabs()}function n(t){var e=[];t.find("li").each(function(){e.push($(this).attr("data-position"))}),e.sort(),$.each(e,function(){t.find('li[data-position="'+this+'"]').appendTo(t)})}e.prototype={bindEvents:function(){var e=this;t.register(this.getHashList(),this.changeTab.bind(e)),this.$tabs.on("click",function(){e.changeTab($(this).find("a").attr("href"))}),this.$showMore.on("click",this.toggleShowMore.bind(e)),$("body").on("click",this.hideMore.bind(e)),$(window).bind("skycom.resizeend",this.initTabs.bind(e))},getHashList:function(){var t=[];return this.$tabs.each(function(){t.push($(this).attr("aria-controls"))}),t},saveTabOrder:function(){this.$tabs.each(function(t){$(this).attr("data-position",t)})},initTabs:function(){this.moveTabsToList(),this.moveTabsToDropdown()},changeTab:function(t){t=t.replace("#!","");var e=$("#"+t+"-tab"),n=$("#"+t);this.$tabTargets.add(this.$tabs).removeClass("selected"),e.add(n).addClass("selected"),this.initTabs()},hideMore:function(t){$(t.target).closest(this.$showMore).length||this.toggleShowMore("hide")},toggleShowMore:function(t){var e=this.$moreTabsLink.hasClass("dropdown-tab-selected")||"hide"===t?"remove":"add";this.$showMore.add(this.$moreTabsLink)[e+"Class"]("dropdown-tab-selected")},getNumberOfTabsToShow:function(){var t=this.$tabContainer.outerWidth(!0)-this.$moreTabsContainer.show().outerWidth(!0)-this.$tabs.filter(".selected").outerWidth(!0),e=0,n=0;return this.$tabs.not(".selected").attr("style","float:left").each(function(){e+=$(this).outerWidth(!0),e>t||n++}),this.$tabs.add(this.$moreTabsContainer).removeAttr("style"),n},moveTabsToList:function(){var t=this;this.$tabs.each(function(){$(this).appendTo(t.$tabContainer.find(".tabs"))}),n(this.$tabContainer.find(".tabs")),this.numberOfTabsToShow=this.getNumberOfTabsToShow()},moveTabsToDropdown:function(){var t=this;this.$tabs.not(".selected").each(function(e){e<t.numberOfTabsToShow||($(this).appendTo(t.$moreTabsLink),t.$moreTabsContainer.show())}),n(this.$moreTabsLink)}},$.fn.inPageNav=function(t){return this.each(function(){new e($(this),t)})}}(toolkit.hashmanager),"function"==typeof window.define&&window.define.amd&&define("modules/inPageNav",["utils/hashmanager"],function(){return toolkit.inPageNav}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.share=function(){function t(){i.shareCount.on("click keypress",e)}function e(t){t.preventDefault();var e=$(this).parent(),n="keypress "+("ontouchend"in document.documentElement?"touchend":"click");("click"===t.type||"touchend"===t.type||"keypress"===t.type&&13===t.which)&&(e.toggleClass("active"),i.document.on(n,function o(t){$.contains(e[0],t.target)||(e.removeClass("active"),i.document.off(n,o))}))}function n(){t()}var i={document:$(document),shareCount:$(".share-popup .summary")};return{init:n,toggleSharePopover:e}}(),"function"==typeof window.define&&window.define.amd&&define("modules/share",[],function(){return toolkit.share}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.video=function(t,e){function n(t,e){t.attr("data-video-id")&&(this.$container=t,this.options={token:e.token,freewheel:e.displayAdverts,animationSpeed:void 0!==e.animationSpeed?e.animationSpeed:500,autoplay:!1,videoId:t.attr("data-video-id"),onPlay:e.onPlay,closeCallback:e.closeCallback},this.bindEvents())}return n.prototype={bindEvents:function(){var t=this;t.$container.on("click",".play-video",function(e){t.createWrapper(),t.play(e)})},bindWrapperEvents:function(){var t=this;e("body").one("keydown",t.stopOnEscape.bind(t)),t.$wrapper.one("click touchstart",".close",t.stop.bind(t)),t.$player.one("ended webkitendfullscreen",t.stop.bind(t))},createWrapper:function(){this.$container.append('<div class="video-wrapper"><a href="#!" class="close"><i class="skycon-close" aria-hidden=true></i><span class="speak">Close</span></a><div class="videocontrolcontainer"><video></video><img class="posterFrame"/></div></div>'),this.$container.find(".posterFrame").on("error",function(){this.src=options.placeHolderImage}),this.$container.append('<div class="video-overlay"></div>'),this.$player=this.$container.find("video"),this.$wrapper=this.$container.find(".video-wrapper"),this.$wrapper.attr("id","video-"+this.options.videoId),this.bindWrapperEvents()},removeWrapper:function(){this.$wrapper.removeClass("playing-video").remove()},play:function(t){t&&t.preventDefault();var e=this;e.options.onPlay&&e.options.onPlay(),this.showCanvas(function(){e.$player.sky_html5player(e.options),setTimeout(function(){sky.html5player.play()},1333)})},stopOnEscape:function(t){27===t.keyCode&&(t.preventDefault(),this.stop())},stop:function(n){n&&n.preventDefault();var i=this;e(t).off("skycom.resizeend",i.resizeContainer),sky.html5player.close(this.$wrapper),this.hideCanvas()},showCanvas:function(n){var i,o=this.$container,s=o.find(".video-overlay"),a=o.find(".video-wrapper"),r=o.find(".play-video"),d=o.find(".video-wrapper .close"),c=0===this.options.animationSpeed?0:this.options.animationSpeed||500,l=this;this.originalHeight=o.height(),a.addClass("playing-video"),s.fadeIn(c,function(){r.fadeOut(c),i=l.calculateHeight(),o.animate({height:i},c,function(){e(t).on("skycom.resizeend",e.proxy(l.resizeContainer,l)),a.show(),s.fadeOut(c,function(){d.addClass("active")}),n()})})},calculateHeight:function(){return Math.round(9*(this.$container.width()/16))},resizeContainer:function(){this.$container.animate({height:this.calculateHeight()},250)},hideCanvas:function(){var t=this,e=this.$container,n=e.find(".video-overlay"),i=e.find(".video-wrapper"),o=e.find(".play-video"),s=e.find(".video-wrapper .close"),a=0===this.options.animationSpeed?0:this.options.animationSpeed||500,r=this.originalHeight;n.fadeIn(a,function(){s.removeClass("active"),e.animate({height:r},a,function(){e.css({height:"auto"}),t.options.closeCallback&&t.options.closeCallback(),o.fadeIn(a),n.hide(),i.fadeOut(a,t.removeWrapper.bind(t))})})}},e.fn.video=function(t){return this.each(function(){new n(e(this),t)})},n}(window,jQuery),"function"==typeof window.define&&window.define.amd&&define("modules/video",[],function(){return toolkit.video}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.carousel=function(t,e){function n(t,e){this.options=e,this.$viewport=t,this.$slideContainer=t.find(".skycom-carousel-container"),this.$slides=this.$slideContainer.find(">"),this.currentIndex=0,this.slideCount=this.$slides.length,this.timerId=!1,this.touchReset(),this.bindEvents(),this.initialiseVideos()}var i=function(){return"WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix}(),o=function(){var t=document.body.style;return void 0!==t.transform||void 0!==t.WebkitTransform||void 0!==t.MozTransform||void 0!==t.OTransform}();n.prototype={unbindTouchEvents:function(){this.$slideContainer.off("touchstart touchmove touchend touchcancel")},bindTouchEvents:function(){this.$slideContainer.on("touchstart",this.touchstart.bind(this)).on("touchmove",this.touchmove.bind(this)).on("touchend",this.touchend.bind(this)).on("touchcancel",this.touchReset.bind(this))},bindEvents:function(){this.bindTouchEvents(),this.$slideContainer.find("a").on("click",this.pause.bind(this))},unbindEvents:function(){this.unbindTouchEvents(),this.$slideContainer.find("a").off("click")},setOffset:function(t,e){var n=this.$slideContainer.removeClass("animate");return e&&n.addClass("animate"),i?n.css("transform","translate3d("+t+"%,0,0) scale3d(1,1,1)"):o?n.css("transform","translate("+t+"%,0)"):e?n.animate({left:2*t+"%"},600):n.css({left:2*t+"%"}),this},toggleTermsContent:function(){this.pause();var t=0===this.$viewport.next(".terms-content").find(".terms").length;this[t?"showTermsContent":"hideTermsContent"]()},showTermsContent:function(){this.hideTermsContent();var t=e(this.$slides[this.currentIndex]).find(".terms");t.length&&this.$viewport.next(".terms-content").append(t.clone(!0).removeClass("speak").attr("aria-hidden","true")).fadeIn(200)},hideTermsContent:function(){this.$viewport.next(".terms-content").fadeOut(200,function(){e(this).find(".terms").remove()})},showTermsLink:function(t){this.hideTermsLink();var n=e(this.$slides[t]).find(".terms");n.length&&this.$viewport.find(".terms-link").removeClass("hidden").fadeIn(200)},hideTermsLink:function(){this.$viewport.find(".terms-link").fadeOut(200),this.hideTermsContent()},initialiseVideos:function(){var t=this;this.$slides.video({token:"8D5B12D4-E1E6-48E8-AF24-F7B13050EE85",displayAdverts:!1,onPlay:function(){t.pause(),t.$viewport.find(".actions, .indicators, .terms-link").fadeOut(500)},closeCallback:function(){t.$viewport.find(".actions, .indicators, .terms-link").fadeIn(500)}})},moveSlide:function(t){var e,n,i=this,o=this.$slides;return n=t.index>=this.slideCount?0:t.index<0?this.slideCount-1:t.index,e=t.index>this.currentIndex&&!t.reverse?"left":"right",o.filter(":not(:eq("+this.currentIndex+"))").hide(),o.eq(this.currentIndex).css("float",e),o.eq(n).show().css("float","left"==e?"right":"left"),this.setOffset(t.start,!1),"undefined"!=typeof t.end&&(setTimeout(function(){i.setOffset(t.end,!0),i.showTermsLink(n),i.$viewport.trigger("change",n)},20),this.currentIndex=n,"function"==typeof t.callback&&t.callback(n)),n},"goto":function(t,e,n){return e!==!1&&this.pause(),t!==this.currentIndex?(t>this.currentIndex?this.moveSlide({index:t,start:0,end:-50,callback:n}):this.moveSlide({index:t,start:-50,end:0,callback:n}),this):void 0},next:function(t,e){return this.goto(this.currentIndex+1,t,e),this.$viewport.find(".indicators, .actions").css("display","block"),this},previous:function(){return this.goto(this.currentIndex-1),this.$viewport.find(".indicators, .actions").css("display","block"),this},play:function(t,e){var n=this,i=this.options.interval;return n.timerId=setTimeout(function(){n.next(!1),n.timerId=setTimeout(function t(){n.next(!1,function(){n.timerId=setTimeout(t,i)})},i)},e||this.options.onPlayDelay),this.$viewport.trigger("playing"),"function"==typeof t&&t(),this},pause:function(t){return clearTimeout(this.timerId),this.$viewport.trigger("paused"),"function"==typeof t&&t(),this},touchstart:function(t){var e=t.originalEvent.touches[0];this.pause(),this.swipe.start={x:e.pageX,y:e.pageY}},touchmove:function(t){var e,n=this.swipe,i=t.originalEvent.touches[0],o=i.pageX-n.start.x,s=i.pageY-n.start.y,a=Math.abs(o)>Math.abs(s),r=0>o?this.currentIndex+1:this.currentIndex-1;n.start&&a!==!1&&(t.preventDefault(),e=100*(o/this.$slideContainer.outerWidth(!0)),o>0&&(e-=50),this.swipe.positionAsPercentage=e,this.moveSlide({index:r,start:e}))},touchend:function(t){if(this.swipe.start){var e=this.swipe,n=e.positionAsPercentage,i=t.originalEvent.changedTouches[0],o=i.pageX-e.start.x,s=null,a=75;if(Math.abs(o)>a&&(s=0>o?"left":"right"),"left"===s)this.moveSlide({index:this.currentIndex+1,start:n,end:-50}),this.$viewport.find(".next").trigger("toolkit.track");else if("right"===s)this.moveSlide({index:this.currentIndex-1,start:n,end:0}),this.$viewport.find(".previous").trigger("toolkit.track");else if(0!==n){var r,d=o>0?n+50:n,c=this.currentIndex,l=0;0>d?this.currentIndex=c+1>=this.slideCount?0:c+1:(this.currentIndex-=1,l=-50,d-=50),r=0===this.currentIndex&&c===this.slideCount-1,this.moveSlide({index:c,start:d,end:l,reverse:r})}this.touchReset()}},touchReset:function(){this.swipe={start:!1,positionAsPercentage:0}}},e.fn.skycom_carousel=function(t){var i=e.extend(!0,{carousel:{actions:[{id:"play",label:"Play Carousel",icon:"carousel-play"},{id:"pause",label:"Pause Carousel",icon:"carousel-pause"},{id:"previous",label:"Previous",icon:"chevron-left",speak:!0},{id:"next",label:"Next",icon:"chevron",speak:!0}],autoplay:!0,startSlideIndex:0,onPlayDelay:500,interval:6e3}},t),o={actions:function(t,n){var i,o,s,a,r,d,c="",l=n.actions,h=n.onclick;if(n.count<=1)return this;for(s in l)d=l[s],i=d.id,a="next"==i||"previous"==i?" hidden-touch ":"",r="skycon-"+d.icon,o=d.speak?'<span class="speak">'+d.label+"</span>":d.label,c+='<a href="#" class="skycom-internal supportive '+a+i+'" >',c+='<span class="semi-circle"><i class="'+r+'" aria-hidden="true"></i></span>'+o,c+="</a>";return t.find(".skycom-carousel-container").before('<div class="actions">'+c+"</div>"),t.find("> .actions > *").each(function(t){e(this).attr("data-action",l[t].id).on("click",function(e){h(l[t].id),e.preventDefault()})}),this},indicators:function(t,n){var i,o,s=n.count,a=n.onclick,r='<div class="indicators"><div class="container">',d=' class="active"';if(1>=s)return this;for(o=s;o--;)r+="<span"+d+' data-tracking data-tracking-label="indicator"></span>',d="";return i=e(r+"</div></div>").on("click","span",function(t){a(e(t.currentTarget).index())}),t.append(i),this},terms:function(t){var n=e('<a href="#!" class="terms-link carousel-content cushioned hidden black internal-link supportive" aria-hidden="true">Terms and Conditions</a>'),i=e('<div class="terms-content carousel-content  cushioned hidden"></div>');return t.find(".terms").length&&(t.append(n),t.after(i),t.addClass("has-terms")),this},video:function(t){return t.append('<div class="video-overlay"></div>'),this}};return this.each(function(){var t=e(this),s=new n(t,i.carousel),a=function(e){o.indicators(t,{count:e.slideCount,onclick:function(t){e.goto(t)}}).terms(t).actions(t,{count:e.slideCount,actions:i.carousel.actions,onclick:function(t){e[t]()}})};a(s),t.on("click",".terms-link",function(){s.toggleTermsContent()}).on("change",function(e,n){n=n||0,t.find(".indicators .container > *").removeClass("active").eq(n).addClass("active"),s.$slides.removeClass("active").find("a").attr("tabindex",-1),s.$slides.eq(n).addClass("active").find("a").removeAttr("tabindex")}).on("playing",function(){t.removeClass("paused").addClass("playing")}).on("paused",function(){t.removeClass("playing").addClass("paused")}).on("pause",function(){s.pause()}).on("play",function(){s.play()}).on("refresh",function(e,n){s.$slides=s.$slideContainer.find(">"),s.slideCount=s.$slides.length,t.find(".indicators").remove(),t.find(".actions").remove(),t.find(".video-overlay").remove(),a(s),n=parseInt(n,10),isNaN(n)||0>n?n=0:n>s.slideCount-1&&(n=s.slideCount-1),n>s.currentIndex?s.moveSlide({index:n,start:0,end:-50}):s.moveSlide({index:n,start:-50,end:0})}).on("keyup",function(t){switch(t.keyCode){case 9:s.pause();break;case 37:s.previous();break;case 39:s.next()}}).find(".toggle-terms").on("click",function(){s.$viewport.toggleClass("showing-tandcs")}),s.slideCount>1?(s[i.carousel.autoplay===!0?"play":"pause"](!1,i.carousel.interval),s.goto(i.carousel.startSlideIndex,!1),s.showTermsLink(0),t.trigger("change")):s.unbindTouchEvents()})}}(window,jQuery,toolkit.video),"function"==typeof window.define&&window.define.amd&&define("modules/carousel",["modules/video"],function(){return toolkit.carousel}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.main=function(){function t(){var t=function(){$(document.body).addClass("window-loaded")},e=setTimeout(t,5e3);$(window).load(function(){clearTimeout(e),t()})}t()}(),toolkit.modules=function(){var t=function(t){var e,n=$.extend({skycons:!1,share:!1,popup:!1,inPageNav:!1,datepicker:!1},t);for(e in n)(n[e]||!t)&&toolkit[e]&&toolkit[e].init&&toolkit[e].init()};return{init:t}}(),"function"==typeof window.define&&window.define.amd&&define("modules",[],function(){return toolkit.modules}),"function"==typeof window.define&&window.define.amd&&define("toolkit",["utils/skycons","utils/hashmanager","utils/popup","utils/diff","modules","modules/inPageNav","modules/share","modules/video","modules/carousel"],function(t,e,n,i,o,s,a,r,d){return{modules:o,skycons:t,hashmanager:e,popup:n,diff:i,inPageNav:s,share:a,video:r,carousel:d}});