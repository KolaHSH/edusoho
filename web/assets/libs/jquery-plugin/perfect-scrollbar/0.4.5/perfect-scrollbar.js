define("jquery-plugin/perfect-scrollbar/0.4.5/perfect-scrollbar",["$","jquery-plugin/mousewheel/3.0.6/mousewheel"],function(a){var b=a("$");a("jquery-plugin/mousewheel/3.0.6/mousewheel"),function(a){var b={wheelSpeed:10,wheelPropagation:!1,minScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0};a.fn.perfectScrollbar=function(c,d){return this.each(function(){var e=a.extend(!0,{},b),f=a(this);if("object"==typeof c?a.extend(!0,e,c):d=c,"update"===d)return f.data("perfect-scrollbar-update")&&f.data("perfect-scrollbar-update")(),f;if("destroy"===d)return f.data("perfect-scrollbar-destroy")&&f.data("perfect-scrollbar-destroy")(),f;if(f.data("perfect-scrollbar"))return f.data("perfect-scrollbar");f.addClass("ps-container");var g,h,i,j,k,l,m,n,o,p,q=a("<div class='ps-scrollbar-x-rail'></div>").appendTo(f),r=a("<div class='ps-scrollbar-y-rail'></div>").appendTo(f),s=a("<div class='ps-scrollbar-x'></div>").appendTo(q),t=a("<div class='ps-scrollbar-y'></div>").appendTo(r),u=parseInt(q.css("bottom"),10),v=parseInt(r.css("right"),10),w=function(){var a=parseInt(p*(l-j)/(j-o),10);f.scrollTop(a),q.css({bottom:u-a})},x=function(){var a=parseInt(n*(k-i)/(i-m),10);f.scrollLeft(a),r.css({right:v-a})},y=function(a){return e.minScrollbarLength&&(a=Math.max(a,e.minScrollbarLength)),a},z=function(){q.css({left:f.scrollLeft(),bottom:u-f.scrollTop(),width:i}),r.css({top:f.scrollTop(),right:v-f.scrollLeft(),height:j}),s.css({left:n,width:m}),t.css({top:p,height:o})},A=function(){i=f.width(),j=f.height(),k=f.prop("scrollWidth"),l=f.prop("scrollHeight"),k>i?(g=!0,m=y(parseInt(i*i/k,10)),n=parseInt(f.scrollLeft()*(i-m)/(k-i),10)):(g=!1,m=0,n=0,f.scrollLeft(0)),l>j?(h=!0,o=y(parseInt(j*j/l,10)),p=parseInt(f.scrollTop()*(j-o)/(l-j),10)):(h=!1,o=0,p=0,f.scrollTop(0)),p>=j-o&&(p=j-o),n>=i-m&&(n=i-m),z()},B=function(a,b){var c=a+b,d=i-m;n=0>c?0:c>d?d:c,q.css({left:f.scrollLeft()}),s.css({left:n})},C=function(a,b){var c=a+b,d=j-o;p=0>c?0:c>d?d:c,r.css({top:f.scrollTop()}),t.css({top:p})},D=function(){var b,c;s.bind("mousedown.perfect-scrollbar",function(a){c=a.pageX,b=s.position().left,q.addClass("in-scrolling"),a.stopPropagation(),a.preventDefault()}),a(document).bind("mousemove.perfect-scrollbar",function(a){q.hasClass("in-scrolling")&&(x(),B(b,a.pageX-c),a.stopPropagation(),a.preventDefault())}),a(document).bind("mouseup.perfect-scrollbar",function(){q.hasClass("in-scrolling")&&q.removeClass("in-scrolling")}),b=c=null},E=function(){var b,c;t.bind("mousedown.perfect-scrollbar",function(a){c=a.pageY,b=t.position().top,r.addClass("in-scrolling"),a.stopPropagation(),a.preventDefault()}),a(document).bind("mousemove.perfect-scrollbar",function(a){r.hasClass("in-scrolling")&&(w(),C(b,a.pageY-c),a.stopPropagation(),a.preventDefault())}),a(document).bind("mouseup.perfect-scrollbar",function(){r.hasClass("in-scrolling")&&r.removeClass("in-scrolling")}),b=c=null},F=function(){var a=function(a,b){var c=f.scrollTop();if(0===c&&b>0&&0===a)return!e.wheelPropagation;if(c>=l-j&&0>b&&0===a)return!e.wheelPropagation;var d=f.scrollLeft();return 0===d&&0>a&&0===b?!e.wheelPropagation:d>=k-i&&a>0&&0===b?!e.wheelPropagation:!0},b=!1;f.bind("mousewheel.perfect-scrollbar",function(c,d,i,j){e.useBothWheelAxes?h&&!g?j?f.scrollTop(f.scrollTop()-j*e.wheelSpeed):f.scrollTop(f.scrollTop()+i*e.wheelSpeed):g&&!h&&(i?f.scrollLeft(f.scrollLeft()+i*e.wheelSpeed):f.scrollLeft(f.scrollLeft()-j*e.wheelSpeed)):(f.scrollTop(f.scrollTop()-j*e.wheelSpeed),f.scrollLeft(f.scrollLeft()+i*e.wheelSpeed)),A(),b=a(i,j),b&&c.preventDefault()}),f.bind("MozMousePixelScroll.perfect-scrollbar",function(a){b&&a.preventDefault()})},G=function(){var b=function(a,b){var c=f.scrollTop();if(0===c&&b>0&&0===a)return!1;if(c>=l-j&&0>b&&0===a)return!1;var d=f.scrollLeft();return 0===d&&0>a&&0===b?!1:d>=k-i&&a>0&&0===b?!1:!0},c=!1;f.bind("mouseenter.perfect-scrollbar",function(){c=!0}),f.bind("mouseleave.perfect-scrollbar",function(){c=!1});var d=!1;a(document).bind("keydown.perfect-scrollbar",function(a){if(c){var g=0,h=0;switch(a.which){case 37:g=-3;break;case 38:h=3;break;case 39:g=3;break;case 40:h=-3;break;default:return}f.scrollTop(f.scrollTop()-h*e.wheelSpeed),f.scrollLeft(f.scrollLeft()+g*e.wheelSpeed),A(),d=b(g,h),d&&a.preventDefault()}})},H=function(){var a=function(a){a.stopPropagation()};t.bind("click.perfect-scrollbar",a),r.bind("click.perfect-scrollbar",function(a){var b=parseInt(o/2,10),c=a.pageY-r.offset().top-b,d=j-o,e=c/d;0>e?e=0:e>1&&(e=1),f.scrollTop((l-j)*e),A()}),s.bind("click.perfect-scrollbar",a),q.bind("click.perfect-scrollbar",function(a){var b=parseInt(m/2,10),c=a.pageX-q.offset().left-b,d=i-m,e=c/d;0>e?e=0:e>1&&(e=1),f.scrollLeft((k-i)*e),A()})},I=function(){var b=function(a,b){f.scrollTop(f.scrollTop()-b),f.scrollLeft(f.scrollLeft()-a),A()},c={},d=0,e={},g=null,h=!1;a(window).bind("touchstart.perfect-scrollbar",function(){h=!0}),a(window).bind("touchend.perfect-scrollbar",function(){h=!1}),f.bind("touchstart.perfect-scrollbar",function(a){var b=a.originalEvent.targetTouches[0];c.pageX=b.pageX,c.pageY=b.pageY,d=(new Date).getTime(),null!==g&&clearInterval(g),a.stopPropagation()}),f.bind("touchmove.perfect-scrollbar",function(a){if(!h&&1===a.originalEvent.targetTouches.length){var f=a.originalEvent.targetTouches[0],g={};g.pageX=f.pageX,g.pageY=f.pageY;var i=g.pageX-c.pageX,j=g.pageY-c.pageY;b(i,j),c=g;var k=(new Date).getTime();e.x=i/(k-d),e.y=j/(k-d),d=k,a.preventDefault()}}),f.bind("touchend.perfect-scrollbar",function(){clearInterval(g),g=setInterval(function(){return Math.abs(e.x)<.01&&Math.abs(e.y)<.01?(clearInterval(g),void 0):(b(30*e.x,30*e.y),e.x*=.8,e.y*=.8,void 0)},10)})},J=function(){f.unbind(".perfect-scrollbar"),a(window).unbind(".perfect-scrollbar"),a(document).unbind(".perfect-scrollbar"),f.data("perfect-scrollbar",null),f.data("perfect-scrollbar-update",null),f.data("perfect-scrollbar-destroy",null),s.remove(),t.remove(),q.remove(),r.remove(),s=t=i=j=k=l=m=n=u=o=p=v=null},K=function(b){f.addClass("ie").addClass("ie"+b);var c=function(){var b=function(){a(this).addClass("hover")},c=function(){a(this).removeClass("hover")};f.bind("mouseenter.perfect-scrollbar",b).bind("mouseleave.perfect-scrollbar",c),q.bind("mouseenter.perfect-scrollbar",b).bind("mouseleave.perfect-scrollbar",c),r.bind("mouseenter.perfect-scrollbar",b).bind("mouseleave.perfect-scrollbar",c),s.bind("mouseenter.perfect-scrollbar",b).bind("mouseleave.perfect-scrollbar",c),t.bind("mouseenter.perfect-scrollbar",b).bind("mouseleave.perfect-scrollbar",c)},d=function(){z=function(){s.css({left:n+f.scrollLeft(),bottom:u,width:m}),t.css({top:p+f.scrollTop(),right:v,height:o}),s.hide().show(),t.hide().show()},w=function(){var a=parseInt(p*l/j,10);f.scrollTop(a),s.css({bottom:u}),s.hide().show()},x=function(){var a=parseInt(n*k/i,10);f.scrollLeft(a),t.hide().show()}};6===b&&(c(),d())},L="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,M=function(){var a=navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);a&&"msie"===a[1]&&K(parseInt(a[2],10)),A(),D(),E(),H(),L&&I(),f.mousewheel&&F(),e.useKeyboard&&G(),f.data("perfect-scrollbar",f),f.data("perfect-scrollbar-update",A),f.data("perfect-scrollbar-destroy",J)};return M(),f})}}(b)});
