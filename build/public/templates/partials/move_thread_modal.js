!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function c(t,e,o,a,n){var s=t.__escape;return'<div id="move_thread_modal" class="modal" tabindex="-1" role="dialog" aria-labelledby="Move Topic" aria-hidden="true">\n\t<div class="modal-dialog">\n\t\t<div class="modal-content">\n\t\t\t<div class="modal-header">\n\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n\t\t\t\t<h3>[[topic:move_topic]]</h3>\n\t\t\t</div>\n\t\t\t<div class="modal-body">\n\t\t\t\t<div component="category-selector" class="btn-group '+(o(e&&e.pullRight)?"pull-right":"")+'">\n\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\t\t<span component="category-selector-selected">'+(o(e&&e.selectedCategory)?'<span class="fa-stack" style="'+s(n(e,t,"generateCategoryBackground",[o(e&&e.selectedCategory)]))+'"><i class="fa fa-fw fa-stack-1x '+s(o(e&&e.selectedCategory&&e.selectedCategory.icon))+'" style="color: '+s(o(e&&e.selectedCategory&&e.selectedCategory.color))+';"></i></span> '+s(o(e&&e.selectedCategory&&e.selectedCategory.name)):"\n\t\t[[topic:thread_tools.select_category]]")+'</span> <span class="caret"></span>\n\t</button>\n\t<div component="category-selector-search" class="hidden">\n\t\t<input type="text" class="form-control" autocomplete="off">\n\t</div>\n\t<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">\n\t\t<li component="category/no-matches" role="presentation" class="category hidden">\n\t\t\t<a role="menu-item">[[search:no-matches]]</a>\n\t\t</li>\n\t\t'+c.blocks.categories(t,e,o,a,n)+'\n\t</ul>\n</div>\n\t\t\t</div>\n\t\t\t<div class="modal-footer">\n\t\t\t\t<button type="button" class="btn btn-default" data-dismiss="modal" id="move_thread_cancel">[[global:buttons.close]]</button>\n\t\t\t\t<button type="button" class="btn btn-primary" id="move_thread_commit" disabled>[[topic:confirm_move]]</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'}return c.blocks={categories:function(n,s,c,t,r){var i=n.__escape;return t(c(s&&s.categories),function(t,e,o,a){return'\n\t\t<li role="presentation" class="category '+(c(s&&s.categories&&s.categories[t]&&s.categories[t].disabledClass)?"disabled":"")+'" data-cid="'+i(c(s&&s.categories&&s.categories[t]&&s.categories[t].cid))+'" data-name="'+i(c(s&&s.categories&&s.categories[t]&&s.categories[t].name))+'" data-parent-cid="'+i(c(s&&s.categories&&s.categories[t]&&s.categories[t].parentCid))+'">\n\t\t\t<a role="menu-item">'+i(c(s&&s.categories&&s.categories[t]&&s.categories[t].level))+'<span component="category-markup">'+(c(s&&s.categories&&s.categories[t]&&s.categories[t].icon)?'<span class="fa-stack" style="'+i(r(s,n,"generateCategoryBackground",[c(a)]))+'"><i style="color: '+i(c(s&&s.categories&&s.categories[t]&&s.categories[t].color))+';" class="fa fa-stack-1x fa-fw '+i(c(s&&s.categories&&s.categories[t]&&s.categories[t].icon))+'"></i></span>':"")+" "+i(c(s&&s.categories&&s.categories[t]&&s.categories[t].name))+"</span></a>\n\t\t</li>\n\t\t"},function(){return""})}},c});