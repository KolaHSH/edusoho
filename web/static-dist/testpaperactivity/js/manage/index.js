!function(e){function t(r,a){if(n[r])return n[r].exports;var i={i:r,l:!1,exports:{}};return 0!=a&&(n[r]=i),e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/static-dist/",t(t.s="59099e0bc35cc3625ece")}({"07a3448be5f694cdee04":function(e,t,n){e.exports=!n("457939c2e15065e32401")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"1b58d36ee38e47f1c490":function(e,t,n){var r=n("f31cab22762bc6afaacb"),a=n("f27a607058b9cc8c5827").document,i=r(a)&&r(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},"2becabd90e65528fbb02":function(e,t,n){var r=n("d30516674aade65150d3");r(r.S+r.F*!n("07a3448be5f694cdee04"),"Object",{defineProperty:n("30373b8543ac2ca8f199").f})},"30373b8543ac2ca8f199":function(e,t,n){var r=n("6c3dda553b2c45fd2161"),a=n("bb82a2b96f436781c23d"),i=n("5a32a62db759afe4c196"),o=Object.defineProperty;t.f=n("07a3448be5f694cdee04")?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),a)try{return o(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},"3c398f87808202f19beb":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.trim=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.replace(/(^\s+)|(\s+$)/g,"");return t&&(n=n.replace(/\s/g,"")),n},t.dateFormat=function(e){Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours()%24==0?24:this.getHours()%24,"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()},n={0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(e)&&(e=e.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"/u661f/u671f":"/u5468":"")+n[this.getDay()+""]));for(var r in t)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[r]:("00"+t[r]).substr((""+t[r]).length)));return e}},t.numberConvertLetter=function(e){return String.fromCharCode(e+64)},t.htmlEscape=function(e){return(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}},"4373c1ac6d15a5b2dd1f":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"457939c2e15065e32401":function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},"4602c3f5fe7ad9e3e91d":function(e,t,n){"use strict";t.__esModule=!0;var r=n("90ee69f654d94afb7eca"),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,a.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},"59099e0bc35cc3625ece":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n("7ab4a89ebadbfdecc2bf"),i=r(a),o=n("4602c3f5fe7ad9e3e91d"),c=r(o),s=n("3c398f87808202f19beb");new(function(){function e(t){(0,i.default)(this,e),this.$element=t,this.$form=this.$element.find("#step2-form"),this.$questionBankSelector=this.$element.find("#question-bank"),this.$testpaperSelector=this.$element.find("#testpaper-media"),this.$questionItemShow=this.$element.find("#questionItemShowDiv"),this.$scoreItem=this.$element.find(".js-score-form-group"),this._init()}return(0,c.default)(e,[{key:"_init",value:function(){var e=this;(0,s.dateFormat)(),this.setValidateRule(),this.initQuestionBankSelector(),this.initTestPaperSelector(),this.initSelectTestPaper(this.$testpaperSelector.select2("data")),this.initEvent(),this.initStepForm2(),window.ltc.on("getActivity",function(t){window.ltc.emit("returnActivity",{valid:e.validator.form(),data:window.ltc.getFormSerializeObject($("#step2-form"))})}),window.ltc.on("getValidate",function(t){window.ltc.emit("returnValidate",{valid:e.validator.form(),context:{score:e.$testpaperSelector.select2("data").score}}),window.ltc.emit("returnValidate",{valid:e.validator.form()})})}},{key:"setValidateRule",value:function(){$.validator.addMethod("arithmeticFloat",function(e,t){return this.optional(t)||/^[0-9]+(\.[0-9]?)?$/.test(e)},$.validator.format(Translator.trans("activity.testpaper_manage.arithmetic_float_error_hint")))}},{key:"initEvent",value:function(){var e=this;this.$element.find("#question-bank").on("change",function(t){return e.changeQuestionBank(t)}),this.$element.find("#testpaper-media").on("change",function(t){return e.changeTestPaper(t)}),this.$element.find("input[name=doTimes]").on("change",function(t){return e.showRedoInterval(t)}),this.$element.find('input[name="testMode"]').on("change",function(t){return e.startTimeCheck(t)})}},{key:"initStepForm2",value:function(){this.validator=this.$form.validate({onkeyup:!1,rules:{title:{required:!0,trim:!0,maxlength:50,course_title:!0},testpaperId:{required:!0,digits:!0,min:1},length:{required:!0,digits:!0},startTime:{required:function(){return 1==$('[name="doTimes"]:checked').val()&&"realTime"==$('[name="testMode"]:checked').val()},DateAndTime:function(){return 1==$('[name="doTimes"]:checked').val()&&"realTime"==$('[name="testMode"]:checked').val()}},redoInterval:{required:function(){return 0==$('[name="doTimes"]:checked').val()},arithmeticFloat:!0,max:1e9}},messages:{testpaperId:{required:Translator.trans("activity.testpaper_manage.media_error_hint"),min:Translator.trans("activity.testpaper_manage.media_error_hint")},redoInterval:{max:Translator.trans("activity.testpaper_manage.max_error_hint")}}})}},{key:"initSelectTestPaper",value:function(e){var t=parseInt(e.id);t?(this.getItemsTable(this.$testpaperSelector.data("getTestpaperItems"),t),$('input[name="title"]').val()||$('input[name="title"]').val(e.text),this.initScoreSlider()):($("#questionItemShowDiv").hide(),$("#score-condition").hide())}},{key:"initEmptyTestPaperSelector",value:function(){this.$testpaperSelector.select2({data:[{id:"0",text:Translator.trans("activity.testpaper_manage.media_required"),selected:!0}]})}},{key:"initAjaxTestPaperSelector",value:function(){var e=this;$.post(e.$testpaperSelector.data("url"),{},function(t){var n=[];$.each(t.testPapers,function(e,t){n.push({id:t.id,text:t.name,score:t.score})}),e.$testpaperSelector.select2({data:n,initSelection:function(e,t){var n=$("#testPaperName").val(),r=e.val(),a=$("#score-condition").data("score");parseInt(r)||(n=""),t({id:r,text:n||Translator.trans("activity.testpaper_manage.media_required"),score:a})},formatSelection:function(e){return e.text},dropdownAutoWidth:!0})})}},{key:"initQuestionBankSelector",value:function(){this.$questionBankSelector.select2({treeview:!0,dropdownAutoWidth:!0,treeviewInitState:"collapsed",placeholderOption:"first",formatResult:function(e){var t=(0,s.htmlEscape)(e.text);return e.id?'<div class="select2-result-text"><span class="select2-match"></span><span><i class="es-icon es-icon-tiku"></i>'+t+"</span></div>":t},dropdownCss:{width:""}})}},{key:"initTestPaperSelector",value:function(){$("#testPaperName").val()?this.initAjaxTestPaperSelector():this.initEmptyTestPaperSelector()}},{key:"changeQuestionBank",value:function(e){var t=$(".js-help-block");t.addClass("hidden"),this.$questionItemShow.hide(),this.$scoreItem.hide(),this.$testpaperSelector.val("0");var n=this.$questionBankSelector.select2("data"),r=n.id;if(!parseInt(r))return void this.initEmptyTestPaperSelector();var a=this.$questionBankSelector.data("url");a=a.replace(/[0-9]/,r);var i=this;$.post(a,function(e){return 0===e.totalCount?(t.addClass("color-danger").removeClass("hidden").text(Translator.trans("queston_bank.testpaper.empty_tips")).show(),void i.initEmptyTestPaperSelector()):0===e.openCount?(t.removeClass("color-danger").removeClass("hidden").text(Translator.trans("queston_bank.testpaper.no_open_tips")).show(),void i.initEmptyTestPaperSelector()):(i.$testpaperSelector.data("url",a),void i.initAjaxTestPaperSelector())}).error(function(e){cd.message({type:"danger",message:e.responseJson.error.message})})}},{key:"changeTestPaper",value:function(e){var t=this.$testpaperSelector.select2("data");this.initSelectTestPaper(t)}},{key:"showRedoInterval",value:function(e){1==$(e.currentTarget).val()?($("#lesson-redo-interval-field").closest(".form-group").hide(),$(".starttime-check-div").show()):($("#lesson-redo-interval-field").closest(".form-group").show(),$(".starttime-check-div").hide())}},{key:"startTimeCheck",value:function(e){"realTime"==$(e.currentTarget).val()?($(".starttime-input").removeClass("hidden"),this.dateTimePicker()):$(".starttime-input").addClass("hidden")}},{key:"changeCondition",value:function(e){"score"!=$(e.currentTarget).find("option:selected").val()?$(".js-score-form-group").addClass("hidden"):$(".js-score-form-group").removeClass("hidden")}},{key:"getItemsTable",value:function(e,t){$.post(e,{testpaperId:t},function(e){$("#questionItemShowTable").html(e),$("#questionItemShowDiv").show()})}},{key:"dateTimePicker",value:function(){var e=this,t=new Date,n=$("#startTime");!n.is(":visible")||""!=n.val()&&"0"!=n.val()||n.val(t.Format("yyyy-MM-dd hh:mm")),n.datetimepicker({autoclose:!0,format:"yyyy-mm-dd hh:ii",language:document.documentElement.lang,minView:"hour",endDate:new Date(Date.now()+31536e7)}).on("show",function(t){e.$form.height(e.$form.height()+270)}).on("hide",function(t){e.validator.form(),e.$form.height(e.$form.height()-270)}).on("changeDate",function(e){}),n.datetimepicker("setStartDate",t)}},{key:"initScoreSlider",value:function(){var e=0;e=this.$testpaperSelector.select2("data").score?this.$testpaperSelector.select2("data").score:$("#score-condition").data("score"),$(".js-score-total").text(e);var t=Math.round(e*$("#score-condition").data("pass"));e=parseInt(e);var n=document.getElementById("score-slider"),r={start:t,connect:[!0,!1],tooltips:[!0],step:1,range:{min:0,max:e}};this.scoreSlider&&this.scoreSlider.destroy(),this.scoreSlider=noUiSlider.create(n,r),n.noUiSlider.on("update",function(t,n){var r=t[n]/e,a=(100*r).toFixed(0);$(".noUi-tooltip").text(a+"%"),$(".js-score-tooltip").css("left",a+"%"),$(".js-passScore").text(Math.round(a/100*e)),$("#finishData").val(a/100)});var a=Translator.trans("activity.testpaper_manage.qualified_score_hint",{passScore:'<span class="js-passScore">'+t+"</span>"}),i='<div class="score-tooltip js-score-tooltip"><div class="tooltip top" role="tooltip" style="">\n      <div class="tooltip-arrow"></div>\n      <div class="tooltip-inner ">\n        '+a+"\n      </div>\n      </div></div>";$(".noUi-handle").append(i),$(".noUi-tooltip").text((t/e*100).toFixed(0)+"%"),$(".js-score-tooltip").css("left",(t/e*100).toFixed(0)+"%"),$("#score-condition").show()}}]),e}())($("#iframe-content"))},"5a32a62db759afe4c196":function(e,t,n){var r=n("f31cab22762bc6afaacb");e.exports=function(e,t){if(!r(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!r(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},"6c3dda553b2c45fd2161":function(e,t,n){var r=n("f31cab22762bc6afaacb");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},"7ab4a89ebadbfdecc2bf":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"90ee69f654d94afb7eca":function(e,t,n){e.exports={default:n("bc1908f480b427a8a004"),__esModule:!0}},"99ec8b6ce9e8b820539a":function(e,t){var n=e.exports={version:"2.5.6"};"number"==typeof __e&&(__e=n)},a0ce7130a92293994282:function(e,t,n){var r=n("e82b6e3d752b3eb55e42");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}}},bb82a2b96f436781c23d:function(e,t,n){e.exports=!n("07a3448be5f694cdee04")&&!n("457939c2e15065e32401")(function(){return 7!=Object.defineProperty(n("1b58d36ee38e47f1c490")("div"),"a",{get:function(){return 7}}).a})},bc1908f480b427a8a004:function(e,t,n){n("2becabd90e65528fbb02");var r=n("99ec8b6ce9e8b820539a").Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},d1c7bd6e35e95c182000:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},d30516674aade65150d3:function(e,t,n){var r=n("f27a607058b9cc8c5827"),a=n("99ec8b6ce9e8b820539a"),i=n("a0ce7130a92293994282"),o=n("f9e595817d8b54ee32b8"),c=n("d1c7bd6e35e95c182000"),s=function(e,t,n){var u,l,d,f=e&s.F,p=e&s.G,h=e&s.S,m=e&s.P,v=e&s.B,b=e&s.W,g=p?a:a[t]||(a[t]={}),$=g.prototype,y=p?r:h?r[t]:(r[t]||{}).prototype;p&&(n=t);for(u in n)(l=!f&&y&&void 0!==y[u])&&c(g,u)||(d=l?y[u]:n[u],g[u]=p&&"function"!=typeof y[u]?n[u]:v&&l?i(d,r):b&&y[u]==d?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(d):m&&"function"==typeof d?i(Function.call,d):d,m&&((g.virtual||(g.virtual={}))[u]=d,e&s.R&&$&&!$[u]&&o($,u,d)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},e82b6e3d752b3eb55e42:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},f27a607058b9cc8c5827:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f31cab22762bc6afaacb:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},f9e595817d8b54ee32b8:function(e,t,n){var r=n("30373b8543ac2ca8f199"),a=n("4373c1ac6d15a5b2dd1f");e.exports=n("07a3448be5f694cdee04")?function(e,t,n){return r.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}}});