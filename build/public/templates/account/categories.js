!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function o(t,e,n,a,i){var s=t.__escape;return'<div class="account">\n\t'+(n(e&&e.breadcrumbs&&e.breadcrumbs.length)?'\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\n\t'+o.blocks.breadcrumbs(t,e,n,a,i)+"\n</ol>\n":"")+'\n\n\n<div class="cover" component="account/cover" style="background-image: url('+s(n(e&&e["cover:url"]))+"); background-position: "+s(n(e&&e["cover:position"]))+';">\n\t<div class="avatar-wrapper" data-uid="'+s(n(e&&e.uid))+'">\n\t\t'+(n(e&&e.picture)?'\n\t\t<img src="'+s(n(e&&e.picture))+'" class="avatar avatar-xl avatar-rounded" />\n\t\t':'\n\t\t<div class="avatar avatar-xl avatar-rounded" style="background-color: '+s(n(e&&e["icon:bgColor"]))+';" title="'+s(n(e&&e.username))+'">'+s(n(e&&e["icon:text"]))+"</div>\n\t\t")+'\n\t\t<i component="user/status" class="fa fa-circle status '+s(n(e&&e.status))+'" title="[[global:'+s(n(e&&e.status))+']]"></i>\n\n\t\t'+(n(e&&e.loggedIn)?"\n\t\t"+(n(e&&e.isSelf)?"":'\n\t\t<button class="btn-morph fab '+(n(e&&e.isFollowing)?"heart":"plus")+'" title="'+(n(e&&e.isFollowing)?"[[global:unfollow]]":"[[global:follow]]")+'">\n\t\t\t<span>\n\t\t\t\t<span class="s1"></span>\n\t\t\t\t<span class="s2"></span>\n\t\t\t\t<span class="s3"></span>\n\t\t\t</span>\n\t\t</button>\n\t\t')+"\n\t\t":"")+'\n\t</div>\n\n\t<div class="container">\n\t\t<div class="btn-group account-fab bottom-sheet">\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n\t\t<i class="fa fa-ellipsis-v"></i>\n\t</button>\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t'+(n(e&&e.loggedIn)?"\n\t\t"+(n(e&&e.isSelf)?"":"\n\t\t"+(n(e&&e.banned)?"":"\n\t\t"+(n(e&&e.config&&e.config.disableChat)?"":'\n\t\t<li class="'+(n(e&&e.hasPrivateChat)?"":"hidden")+'">\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+s(n(e&&e.username))+']]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+s(n(e&&e.username))+"]]</a>\n\t\t</li>\n\t\t")+'\n\t\t<li>\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/block" href="#">'+(n(e&&e.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\n\t\t</li>\n\t\t<li class="divider"></li>\n\t\t')+"\n\t\t")+"\n\t\t":"")+'\n\t\t<li>\n\t\t\t<a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\n\t\t</li>\n\t\t'+(n(e&&e.showHidden)?'\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/edit">[[user:edit]]</a></li>\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/settings">[[user:settings]]</a></li>\n\t\t':"")+"\n\n\t\t"+(n(e&&e.isSelf)?"":"\n\t\t"+(n(e&&e.canBan)?'\n\t\t<li class="'+(n(e&&e.banned)?"hide":"")+'">\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\n\t\t</li>\n\t\t<li class="'+(n(e&&e.banned)?"":"hide")+'">\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t"+(n(e&&e.isAdmin)?'\n\t\t<li>\n\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t")+'\n\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/following">[[user:following]]</a></li>\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/followers">[[user:followers]]</a></li>\n\t\t'+(n(e&&e.showHidden)?'\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/blocks">[[user:blocks]]</a></li>\n\t\t':"")+'\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/topics">[[global:topics]]</a></li>\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/posts">[[global:posts]]</a></li>\n\t\t'+(n(e&&e["reputation:disabled"])?"":'\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/best">[[global:best]]</a></li>\n\t\t')+'\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/groups">[[global:header.groups]]</a></li>\n\n\t\t'+(n(e&&e.showHidden)?'\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/categories">[[user:watched_categories]]</a></li>\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/watched">[[user:watched]]</a></li>\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/ignored">[[user:ignored]]</a></li>\n\t\t'+(n(e&&e["reputation:disabled"])?"":'\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/upvoted">[[global:upvoted]]</a></li>\n\t\t'+(n(e&&e["downvote:disabled"])?"":'\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/downvoted">[[global:downvoted]]</a></li>\n\t\t')+"\n\t\t")+'\n\t\t<li><a href="'+s(n(e&&e.config&&e.config.relative_path))+"/user/"+s(n(e&&e.userslug))+'/uploads">[[global:uploads]]</a></li>\n\t\t':"")+"\n\n\t\t"+o.blocks.profile_links(t,e,n,a,i)+"\n\t</ul>\n</div>\n\n\n\t\t"+(n(e&&e.allowCoverPicture)?"\n\t\t"+(n(e&&e.canEdit)?'\n\t\t<div class="controls">\n\t\t\t<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>\n\t\t\t<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>\n\t\t\t<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>\n\t\t</div>\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\n\t\t':"")+"\n\t\t":"")+'\n\t</div>\n</div>\n\n\n\t<div class="row">\n\t\t<h1>'+s(n(e&&e.title))+'</h1>\n\t\t<div class="col-lg-12">\n\t\t\t<div class="btn-group bottom-sheet" component="category/watch/all">\n\t\t\t\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\n\t\t\t\t\t<span>[[user:change_all]]</span>\n\t\t\t\t\t<span class="caret"></span>\n\t\t\t\t</button>\n\t\t\t\t<ul class="dropdown-menu">\n\t\t\t\t\t<li><a href="#" component="category/watching" data-state="watching"><i class="fa fa-fw fa-inbox"></i> [[category:watching]]<p class="help-text"><small>[[category:watching.description]]</small></p></a></li>\n\t\t\t\t\t<li><a href="#" component="category/notwatching" data-state="notwatching"><i class="fa fa-fw fa-clock-o"></i> [[category:not-watching]]<p class="help-text"><small>[[category:not-watching.description]]</small></p></a></li>\n\t\t\t\t\t<li><a href="#" component="category/ignoring" data-state="ignoring"><i class="fa fa-fw fa-eye-slash"></i> [[category:ignoring]]<p class="help-text"><small>[[category:ignoring.description]]</small></p></a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="col-lg-12">\n\t\t\t<ul class="categories" itemscope itemtype="http://www.schema.org/ItemList">\n\t\t\t\t'+o.blocks.categories(t,e,n,a,i)+"\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n"}return o.blocks={breadcrumbs:function(t,a,i,e){var s=t.__escape;return e(i(a&&a.breadcrumbs),function(t,e,n){return"\n\t<li"+(e===n-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(e===n-1?'class="active"':"")+'>\n\t\t<meta itemprop="position" content="'+s(e)+'" />\n\t\t'+(e===n-1?"":'<a href="'+s(i(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].url))+'" itemprop="item">')+'\n\t\t\t<span itemprop="name">\n\t\t\t\t'+s(i(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].text))+"\n\t\t\t\t"+(e===n-1?"\n\t\t\t\t"+(i(a&&a["feeds:disableRSS"])?"":"\n\t\t\t\t"+(i(a&&a.rssFeedUrl)?'<a target="_blank" href="'+s(i(a&&a.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(e===n-1?"":"</a>")+"\n\t</li>\n\t"},function(){return""})},profile_links:function(t,n,a,e){var i=t.__escape;return e(a(n&&n.profile_links),function(t,e){return"\n\t\t"+(0===e?'\n\t\t<li class="divider"></li>\n\t\t':"")+'\n\t\t<li id="'+i(a(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].id))+'" class="plugin-link '+(a(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].public)?"public":"private")+'"><a href="'+i(a(n&&n.config&&n.config.relative_path))+"/user/"+i(a(n&&n.userslug))+"/"+i(a(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].route))+'">'+(a(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].icon)?'<i class="fa fa-fw '+i(a(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].icon))+'"></i> ':"")+i(a(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].name))+"</a></li>\n\t\t"},function(){return""})},categories:function(i,s,o,t,c){var l=i.__escape;return t(o(s&&s.categories),function(t,e,n,a){return'\n\t\t\t\t<li component="categories/category" data-cid="'+l(o(s&&s.categories&&s.categories[t]&&s.categories[t].cid))+'" data-parent-cid="'+l(o(s&&s.categories&&s.categories[t]&&s.categories[t].parentCid))+'" class="row clearfix">\n\t<meta itemprop="name" content="'+l(o(s&&s.categories&&s.categories[t]&&s.categories[t].name))+'">\n\n\t<div class="content col-xs-12 col-md-10 col-sm-12 depth-'+l(o(s&&s.categories&&s.categories[t]&&s.categories[t].depth))+'">\n\t\t<div class="icon pull-left" style="'+l(c(s,i,"generateCategoryBackground",[o(a)]))+'">\n\t\t\t<i class="fa fa-fw '+l(o(s&&s.categories&&s.categories[t]&&s.categories[t].icon))+'"></i>\n\t\t</div>\n\n\t\t<h2 class="title">\n\t\t\t'+(o(s&&s.categories&&s.categories[t]&&s.categories[t].isSection)?"\n"+l(o(s&&s.categories&&s.categories[t]&&s.categories[t].name))+"\n":"\n"+(o(s&&s.categories&&s.categories[t]&&s.categories[t].link)?'\n<a href="'+l(o(s&&s.categories&&s.categories[t]&&s.categories[t].link))+'" itemprop="url">\n':'\n<a href="'+l(o(s&&s.config&&s.config.relative_path))+"/category/"+l(o(s&&s.categories&&s.categories[t]&&s.categories[t].slug))+'" itemprop="url">\n')+"\n"+l(o(s&&s.categories&&s.categories[t]&&s.categories[t].name))+"\n</a>\n")+"\n\t\t</h2>\n\t\t<div>\n\t\t\t"+(o(s&&s.categories&&s.categories[t]&&s.categories[t].descriptionParsed)?'\n\t\t\t<div class="description">\n\t\t\t\t'+l(o(s&&s.categories&&s.categories[t]&&s.categories[t].descriptionParsed))+"\n\t\t\t</div>\n\t\t\t":"")+"\n\t\t</div>\n\t</div>\n\n\t"+(o(s&&s.config&&s.config.loggedIn)?'\n<div class="btn-group topic-watch-dropdown bottom-sheet" component="topic/watch">\n\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\n\n\t\t<span component="category/watching/menu" '+(o(s&&s.categories&&s.categories[t]&&s.categories[t].isWatched)?"":'class="hidden"')+'><i class="fa fa-fw fa-inbox"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:watching]]</span></span>\n\n\t\t<span component="category/notwatching/menu" '+(o(s&&s.categories&&s.categories[t]&&s.categories[t].isNotWatched)?"":'class="hidden"')+'><i class="fa fa-fw fa-clock-o"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:not-watching]]</span></span>\n\n\t\t<span component="category/ignoring/menu" '+(o(s&&s.categories&&s.categories[t]&&s.categories[t].isIgnored)?"":'class="hidden"')+'><i class="fa fa-fw fa-eye-slash"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:ignoring]]</span></span>\n\n\t\t<span class="caret"></span>\n\t</button>\n\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t<li><a href="#" component="category/watching" data-state="watching"><i component="category/watching/check" class="fa fa-fw '+(o(s&&s.categories&&s.categories[t]&&s.categories[t].isWatched)?"fa-check":"")+'"></i><i class="fa fa-fw fa-inbox"></i> [[category:watching]]<p class="help-text"><small>[[category:watching.description]]</small></p></a></li>\n\n\t\t<li><a href="#" component="category/notwatching" data-state="notwatching"><i component="category/notwatching/check" class="fa fa-fw '+(o(s&&s.categories&&s.categories[t]&&s.categories[t].isNotWatched)?"fa-check":"")+'"></i><i class="fa fa-fw fa-clock-o"></i> [[category:not-watching]]<p class="help-text"><small>[[category:not-watching.description]]</small></p></a></li>\n\n\t\t<li><a href="#" component="category/ignoring" data-state="ignoring"><i component="category/ignoring/check" class="fa fa-fw '+(o(s&&s.categories&&s.categories[t]&&s.categories[t].isIgnored)?"fa-check":"")+'"></i><i class="fa fa-fw fa-eye-slash"></i> [[category:ignoring]]<p class="help-text"><small>[[category:ignoring.description]]</small></p></a></li>\n\t</ul>\n</div>\n':"")+"\n</li>\n\n\t\t\t\t"},function(){return""})}},o});