!function(n){"object"==typeof module&&module.exports?module.exports=n():"function"==typeof define&&define.amd&&define(n)}(function(){function n(n,a,t,i,e){n.__escape;return t(a&&a.config&&a.config.loggedIn)?'\n<div class="btn-group topic-watch-dropdown bottom-sheet" component="topic/watch">\n\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\n\n\t\t<span component="category/watching/menu" '+(t(a&&a.isWatched)?"":'class="hidden"')+'><i class="fa fa-fw fa-inbox"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:watching]]</span></span>\n\n\t\t<span component="category/notwatching/menu" '+(t(a&&a.isNotWatched)?"":'class="hidden"')+'><i class="fa fa-fw fa-clock-o"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:not-watching]]</span></span>\n\n\t\t<span component="category/ignoring/menu" '+(t(a&&a.isIgnored)?"":'class="hidden"')+'><i class="fa fa-fw fa-eye-slash"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:ignoring]]</span></span>\n\n\t\t<span class="caret"></span>\n\t</button>\n\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t<li><a href="#" component="category/watching" data-state="watching"><i component="category/watching/check" class="fa fa-fw '+(t(a&&a.isWatched)?"fa-check":"")+'"></i><i class="fa fa-fw fa-inbox"></i> [[category:watching]]<p class="help-text"><small>[[category:watching.description]]</small></p></a></li>\n\n\t\t<li><a href="#" component="category/notwatching" data-state="notwatching"><i component="category/notwatching/check" class="fa fa-fw '+(t(a&&a.isNotWatched)?"fa-check":"")+'"></i><i class="fa fa-fw fa-clock-o"></i> [[category:not-watching]]<p class="help-text"><small>[[category:not-watching.description]]</small></p></a></li>\n\n\t\t<li><a href="#" component="category/ignoring" data-state="ignoring"><i component="category/ignoring/check" class="fa fa-fw '+(t(a&&a.isIgnored)?"fa-check":"")+'"></i><i class="fa fa-fw fa-eye-slash"></i> [[category:ignoring]]<p class="help-text"><small>[[category:ignoring.description]]</small></p></a></li>\n\t</ul>\n</div>\n':""}return n.blocks={},n});