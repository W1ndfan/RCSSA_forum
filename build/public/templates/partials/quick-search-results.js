!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(t,s,o,e,n){var p=t.__escape;return a.blocks.posts(t,s,o,e,n)+"\n"+(o(s&&s.multiplePages)?'\n<li class="text-center">\n\t<a href="'+p(o(s&&s.url))+'">\n\t\t[[search:see-more-results, '+p(o(s&&s.matchCount))+"]]\n\t</a>\n</li>\n":"")}return a.blocks={posts:function(e,n,p,t,a){var r=e.__escape;return t(p(n&&n.posts),function(t,s,o){return'\n<li>\n\t<a href="'+r(p(n&&n.config&&n.config.relative_path))+"/post/"+r(p(n&&n.posts&&n.posts[t]&&n.posts[t].pid))+'">\n\t\t'+r(a(n,e,"buildAvatar",[p(n&&n.posts&&n.posts[t]&&n.posts[t].user),"sm",p(n&&n.true)]))+'\n\t\t<span class="quick-search-title">'+r(p(n&&n.posts&&n.posts[t]&&n.posts[t].topic&&n.posts[t].topic.title))+'</span>\n\t\t<br/>\n\t\t<p class="snippet">\n\t\t'+r(p(n&&n.posts&&n.posts[t]&&n.posts[t].snippet))+'\n\t\t</p>\n\t\t<small class="post-info pull-right">\n\t\t\t<span class="fa-stack" style="'+r(a(n,e,"generateCategoryBackground",[p(n&&n.posts&&n.posts[t]&&n.posts[t].category)]))+'"><i style="color:'+r(p(n&&n.posts&&n.posts[t]&&n.posts[t].category&&n.posts[t].category.color))+';" class="fa '+r(p(n&&n.posts&&n.posts[t]&&n.posts[t].category&&n.posts[t].category.icon))+' fa-stack-1x"></i></span> '+r(p(n&&n.posts&&n.posts[t]&&n.posts[t].category&&n.posts[t].category.name))+' &bull;\n\t\t\t<span class="timeago" title="'+r(p(n&&n.posts&&n.posts[t]&&n.posts[t].timestampISO))+'"></span>\n\t\t</small>\n\t </a>\n</li>\n'+(s===o-1?"":'\n<li role="separator" class="divider"></li>\n')+"\n"},function(){return""})}},a});