!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function l(t,a,n,r,e){var s=t.__escape;return'<div class="tags row">\r\n\t<div class="col-lg-9">\r\n\t\t<div class="panel panel-default tag-management">\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t'+(n(a&&a.tags&&a.tags.length)?"":"\r\n\t\t\t\t[[admin/manage/tags:none]]\r\n\t\t\t\t")+'\r\n\r\n\t\t\t\t<div class="tag-list">\r\n\t\t\t\t\t'+l.blocks.tags(t,a,n,r,e)+'\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="col-lg-3 acp-sidebar">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-heading">[[admin/manage/tags:create-modify]]</div>\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<p>[[admin/manage/tags:description]]</p>\r\n\t\t\t\t<button class="btn btn-primary btn-block" id="create">[[admin/manage/tags:create]]</button>\r\n\t\t\t\t<button class="btn btn-primary btn-block" id="modify">[[admin/manage/tags:modify]]</button>\r\n\t\t\t\t<button class="btn btn-primary btn-block" id="rename">[[admin/manage/tags:rename]]</button>\r\n\t\t\t\t<button class="btn btn-warning btn-block" id="deleteSelected">[[admin/manage/tags:delete]]</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<input class="form-control" type="text" id="tag-search" placeholder="[[admin/manage/tags:search]]"/><br/>\r\n\t\t\t\t[[admin/manage/tags:settings, '+s(n(a&&a.config&&a.config.relative_path))+'/admin/settings/tags]]\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="modal fade" id="create-modal">\r\n\t\t<div class="modal-dialog">\r\n\t\t\t<div class="modal-content">\r\n\t\t\t\t<div class="modal-header">\r\n\t\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\r\n\t\t\t\t\t<h4 class="modal-title">[[admin/manage/tags:create]]</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="modal-body">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t<label for="create-tag-name">[[admin/manage/tags:name]]</label>\r\n\t\t\t\t\t\t\t<input type="text" class="form-control" id="create-tag-name" placeholder="[[admin/manage/tags:name]]" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="modal-footer">\r\n\t\t\t\t\t<button type="button" class="btn btn-primary" id="create-modal-go">[[admin/manage/tags:create]]</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="rename-modal hidden">\r\n\t\t<div class="form-group">\r\n\t\t\t<label for="value">[[admin/manage/tags:name]]</label>\r\n\t\t\t<input id="value" data-name="value" value="" class="form-control" />\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n'}return l.blocks={tags:function(t,a,n,r){var e=t.__escape;return r(n(a&&a.tags),function(t){return'\r\n\t\t\t\t\t<div class="tag-row" data-tag="'+e(n(a&&a.tags&&a.tags[t]&&a.tags[t].valueEscaped))+'">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<span class="mdl-chip mdl-chip--contact tag-item" data-tag="'+e(n(a&&a.tags&&a.tags[t]&&a.tags[t].valueEscaped))+'" style="\r\n\t\t\t\t\t\t\t\t'+(n(a&&a.tags&&a.tags[t]&&a.tags[t].color)?"color: "+e(n(a&&a.tags&&a.tags[t]&&a.tags[t].color))+";":"")+"\r\n\t\t\t\t\t\t\t\t"+(n(a&&a.tags&&a.tags[t]&&a.tags[t].bgColor)?"background-color: "+e(n(a&&a.tags&&a.tags[t]&&a.tags[t].bgColor))+";":"")+'">\r\n\t\t\t\t\t\t\t    <span class="mdl-chip__contact mdl-color--light-blue mdl-color-text--white tag-topic-count">'+e(n(a&&a.tags&&a.tags[t]&&a.tags[t].score))+'</span>\r\n\t\t\t\t\t\t\t    <span class="mdl-chip__text">'+e(n(a&&a.tags&&a.tags[t]&&a.tags[t].valueEscaped))+'</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="tag-modal hidden">\r\n\t\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t\t<label for="bgColor">[[admin/manage/tags:bg-color]]</label>\r\n\t\t\t\t\t\t\t\t<input id="bgColor" placeholder="#ffffff" data-name="bgColor" value="'+e(n(a&&a.tags&&a.tags[t]&&a.tags[t].bgColor))+'" class="form-control category_bgColor" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t\t<label for="color">[[admin/manage/tags:text-color]]</label>\r\n\t\t\t\t\t\t\t\t<input id="color" placeholder="#a2a2a2" data-name="color" value="'+e(n(a&&a.tags&&a.tags[t]&&a.tags[t].color))+'" class="form-control category_color" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t'},function(){return""})}},l});