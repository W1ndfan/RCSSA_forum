"use strict";define("forum/topic",["forum/infinitescroll","forum/topic/threadTools","forum/topic/postTools","forum/topic/events","forum/topic/posts","forum/topic/images","navigator","sort","components","storage"],function(t,o,a,i,e,n,r,c,s,p){var l={};var f="";$(window).on("action:ajaxify.start",function(t,o){if(l.replaceURLTimeout){clearTimeout(l.replaceURLTimeout);l.replaceURLTimeout=0}if(!String(o.url).startsWith("topic/")){r.disable();s.get("navbar/title").find("span").text("").hide();app.removeAlert("bookmark");i.removeListeners();require(["search"],function(t){if(t.topicDOM.active){t.topicDOM.end()}})}});l.init=function(){var n=ajaxify.data.tid;$(window).trigger("action:topic.loading");app.enterRoom("topic_"+n);e.onTopicPageLoad(s.get("post"));a.init(n);o.init(n);i.init();c.handleSort("topicPostSort","user.setTopicSort","topic/"+ajaxify.data.slug);if(!config.usePagination){t.init($('[component="topic"]'),e.loadMorePosts)}m();g();h();k();r.init('[component="post"]',ajaxify.data.postcount,l.toTop,l.toBottom,l.navigatorCallback);d(n);$(window).on("scroll",v);u();$(window).trigger("action:topic.loaded",ajaxify.data)};function u(){$(".topic-search").off("click").on("click",".prev",function(){require(["search"],function(t){t.topicDOM.prev()})}).on("click",".next",function(){require(["search"],function(t){t.topicDOM.next()})});if(config.topicSearchEnabled){require(["mousetrap"],function(t){t.bind(["command+f","ctrl+f"],function(t){var o=ajaxify.currentPage.match(/^topic\/([\d]+)/);var a;if(o){t.preventDefault();a=o[1];$("#search-fields input").val("in:topic-"+a+" ");app.prepareSearch()}})})}}l.toTop=function(){r.scrollTop(0)};l.toBottom=function(){socket.emit("topics.postcount",ajaxify.data.tid,function(t,o){if(t){return app.alertError(t.message)}r.scrollBottom(o-1)})};function d(t){var o=ajaxify.data.bookmark||p.getItem("topic:"+t+":bookmark");var a=ajaxify.data.postIndex;if(a>1){if(s.get("post/anchor",a-1).length){return r.scrollToPostIndex(a-1,true,0)}}else if(o&&(!config.usePagination||config.usePagination&&ajaxify.data.pagination.currentPage===1)&&ajaxify.data.postcount>ajaxify.data.bookmarkThreshold){app.alert({alert_id:"bookmark",message:"[[topic:bookmark_instructions]]",timeout:0,type:"info",clickfn:function(){r.scrollToIndex(parseInt(o-1,10),true)},closefn:function(){p.removeItem("topic:"+t+":bookmark")}});setTimeout(function(){app.removeAlert("bookmark")},1e4)}}function m(){s.get("topic").on("click","blockquote .toggle",function(){var t=$(this).parent("blockquote");var o=$(this);t.toggleClass("uncollapsed");var a=!t.hasClass("uncollapsed");o.toggleClass("fa-angle-down",a).toggleClass("fa-angle-up",!a)})}function g(){s.get("topic").on("click",'[component="post/parent"]',function(t){var o=$(this).attr("data-topid");var a=$('[component="topic"]>[component="post"][data-pid="'+o+'"]');if(a.length){t.preventDefault();r.scrollToIndex(a.attr("data-index"),true);return false}})}function h(){var t=$("#content .dropdown-menu").parent();$(t).on("show.bs.dropdown",function(){var t=this.getBoundingClientRect().top>$(window).height()/2;$(this).toggleClass("dropup",t)})}function k(){$('[component="topic"]').on("click",'[component="post/reply-count"]',function(){var t=$(this);require(["forum/topic/replies"],function(o){o.init(t)})})}function v(){var t=s.get("navbar/title").find("span");if($(window).scrollTop()>50&&t.hasClass("hidden")){t.html(ajaxify.data.title).removeClass("hidden")}else if($(window).scrollTop()<=50&&!t.hasClass("hidden")){t.html("").addClass("hidden")}if($(window).scrollTop()>300){app.removeAlert("bookmark")}}l.navigatorCallback=function(t,o){var a=ajaxify.removeRelativePath(window.location.pathname.slice(1));if(!a.startsWith("topic")){return}if(r.scrollActive){return}var i="topic/"+ajaxify.data.slug+(t>1?"/"+t:"");if(i!==f){if(l.replaceURLTimeout){clearTimeout(l.replaceURLTimeout)}l.replaceURLTimeout=setTimeout(function(){if(t>=o&&app.user.uid){socket.emit("topics.markAsRead",[ajaxify.data.tid])}x(t);l.replaceURLTimeout=0;if(history.replaceState){var a=window.location.search||"";if(!config.usePagination){a=a&&!/^\?page=\d+$/.test(a)?a:""}history.replaceState({url:i+a},null,window.location.protocol+"//"+window.location.host+RELATIVE_PATH+"/"+i+a)}f=i},500)}};function x(t){var o="topic:"+ajaxify.data.tid+":bookmark";var a=ajaxify.data.bookmark||p.getItem(o);if(config.topicPostSort==="newest_to_oldest"){t=Math.max(1,ajaxify.data.postcount-t+2)}if(ajaxify.data.postcount>ajaxify.data.bookmarkThreshold&&(!a||parseInt(t,10)>parseInt(a,10)||ajaxify.data.postcount<parseInt(a,10))){if(app.user.uid){socket.emit("topics.bookmark",{tid:ajaxify.data.tid,index:t},function(o){if(o){return app.alertError(o.message)}ajaxify.data.bookmark=t})}else{p.setItem(o,t)}}if(!a||parseInt(t,10)>=parseInt(a,10)){app.removeAlert("bookmark")}}return l});
//# sourceMappingURL=topic.js.map