!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,n,a,e,l){t.__escape;return'<div class="row" id="navigation">\r\n\t<div class="col-lg-9">\r\n\t\t<div class="clearfix">\r\n\t\t\t<ul id="active-navigation" class="nav navbar-nav">\r\n\t\t\t\t'+i.blocks.navigation(t,n,a,e,l)+'\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\r\n\t\t<hr/>\r\n\r\n\t\t<ul id="enabled">\r\n\t\t\t'+i.blocks.enabled(t,n,a,e,l)+'\r\n\t\t</ul>\r\n\t</div>\r\n\r\n\t<div class="col-lg-3">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-heading">[[admin/general/navigation:available-menu-items]]</div>\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<ul id="available">\r\n\t\t\t\t\t<li data-id="custom" class="clearfix">\r\n\t\t\t\t\t\t<div data-id="custom" class="drag-item alert alert-success pull-left">\r\n\t\t\t\t\t\t\t<i class="fa fa-fw fa-plus-circle"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>[[admin/general/navigation:custom-route]]</strong>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t'+i.blocks.available(t,n,a,e,l)+'\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\r\n\t<i class="material-icons">save</i>\r\n</button>'}return i.blocks={navigation:function(t,n,a,e){var l=t.__escape;return e(a(n&&n.navigation),function(t){return'\r\n\t\t\t\t<li data-index="'+l(a(n&&n.navigation&&n.navigation[t]&&n.navigation[t].index))+'" class="'+l(a(n&&n.navigation&&n.navigation[t]&&n.navigation[t].class))+" "+(a(n&&n.navigation&&n.navigation[t]&&n.navigation[t].selected)?" active ":"")+'">\r\n\t\t\t\t\t<a href="#" title="'+l(a(n&&n.navigation&&n.navigation[t]&&n.navigation[t].route))+'" id="'+l(a(n&&n.navigation&&n.navigation[t]&&n.navigation[t].id))+'">\r\n\t\t\t\t\t\t<i class="fa fa-fw '+(a(n&&n.navigation&&n.navigation[t]&&n.navigation[t].iconClass)?l(a(n&&n.navigation&&n.navigation[t]&&n.navigation[t].iconClass)):"")+'"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t'},function(){return""})},enabled:function(t,a,e,l){var i=t.__escape;return l(e(a&&a.enabled),function(n){return'\r\n\t\t\t<li data-index="'+i(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].index))+'" class="well '+(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].selected)?"":"hidden")+'">\r\n\t\t\t\t<form>\r\n\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t<div class="col-sm-1">\r\n\t\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t\t<label>[[admin/general/navigation:icon]]</label>\r\n\t\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t\t<span class="iconPicker"><i class="fa fa-2x '+i(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].iconClass))+'"></i>\r\n\t\t\t\t\t\t\t\t\t<a class="change-icon-link '+(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].iconClass)?"hidden":"")+'" href="#">[[admin/general/navigation:change-icon]]</a>\r\n\t\t\t\t\t\t\t\t\t<input class="form-control" type="hidden" name="iconClass" value="'+i(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].iconClass))+'" />\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class="col-sm-3">\r\n\t\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t\t<label>[[admin/general/navigation:route]]</label>\r\n\t\t\t\t\t\t\t\t<input class="form-control" type="text" name="route" value="'+i(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].route))+'" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class="col-sm-4">\r\n\t\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t\t<label>[[admin/general/navigation:class]]</label>\r\n\t\t\t\t\t\t\t\t<input class="form-control" type="text" name="class" value="'+i(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].class))+'" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class="col-sm-4">\r\n\t\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t\t<label>[[admin/general/navigation:id]]</label>\r\n\t\t\t\t\t\t\t\t<input class="form-control" type="text" name="id" value="'+i(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].id))+'" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t<div class="col-sm-4">\r\n\t\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t\t<label>[[admin/general/navigation:text]]</label>\r\n\t\t\t\t\t\t\t\t<input class="form-control unescape" type="text" name="text" value="'+i(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].text))+'" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="col-sm-4">\r\n\t\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t\t<label>[[admin/general/navigation:text-class]]</label>\r\n\t\t\t\t\t\t\t\t<input class="form-control" type="text" name="textClass" value="'+i(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].textClass))+'" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class="col-sm-4">\r\n\t\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t\t<label>[[admin/general/navigation:tooltip]]</label>\r\n\t\t\t\t\t\t\t\t<input class="form-control unescape" type="text" name="title" value="'+i(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].title))+'" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<strong>[[admin/general/navigation:groups]]</strong>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<select name="groups" class="form-control" size="10" multiple>\r\n\t\t\t\t\t\t\t'+(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].enabled&&a.enabled[n].enabled.groups)?l(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].enabled&&a.enabled[n].enabled.groups),function(t){return'\r\n\t\t\t\t\t\t\t<option value="'+i(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].enabled&&a.enabled[n].enabled.groups&&a.enabled[n].enabled.groups[t]&&a.enabled[n].enabled.groups[t].displayName))+'"'+(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].enabled&&a.enabled[n].enabled.groups&&a.enabled[n].enabled.groups[t]&&a.enabled[n].enabled.groups[t].selected)?" selected":"")+">"+i(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].enabled&&a.enabled[n].enabled.groups&&a.enabled[n].enabled.groups[t]&&a.enabled[n].enabled.groups[t].displayName))+"</option>\r\n\t\t\t\t\t\t\t"},function(){return""}):l(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].groups),function(t){return'\r\n\t\t\t\t\t\t\t<option value="'+i(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].groups&&a.enabled[n].groups[t]&&a.enabled[n].groups[t].displayName))+'"'+(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].groups&&a.enabled[n].groups[t]&&a.enabled[n].groups[t].selected)?" selected":"")+">"+i(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].groups&&a.enabled[n].groups[t]&&a.enabled[n].groups[t].displayName))+"</option>\r\n\t\t\t\t\t\t\t"},function(){return""}))+'\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class="checkbox">\r\n\t\t\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" name="property:targetBlank" '+(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].properties&&a.enabled[n].properties.targetBlank)?"checked":"")+'/>\r\n\t\t\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/general/navigation:open-new-window]]</strong></span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<button class="btn btn-danger delete">[[admin/general/navigation:btn.delete]]</button>\r\n\t\t\t\t\t'+(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].enabled)?'\r\n\t\t\t\t\t<button class="btn btn-warning toggle">[[admin/general/navigation:btn.disable]]</button>\r\n\t\t\t\t\t':'\r\n\t\t\t\t\t<button class="btn btn-success toggle">[[admin/general/navigation:btn.enable]]</button>\r\n\t\t\t\t\t')+'\r\n\t\t\t\t\t<input type="hidden" name="enabled" value="'+i(e(a&&a.enabled&&a.enabled[n]&&a.enabled[n].enabled))+'" />\r\n\t\t\t\t</form>\r\n\t\t\t</li>\r\n\t\t\t'},function(){return""})},available:function(t,a,e,n){var l=t.__escape;return n(e(a&&a.available),function(t,n){return'\r\n\t\t\t\t\t<li data-id="'+l(n)+'" class="clearfix">\r\n\t\t\t\t\t\t<div data-id="'+l(n)+'" class="drag-item alert '+(e(a&&a.available&&a.available[t]&&a.available[t].core)?"alert-warning":"alert-info")+' pull-left">\r\n\t\t\t\t\t\t\t<i class="fa fa-fw '+(e(a&&a.available&&a.available[t]&&a.available[t].iconClass)?l(e(a&&a.available&&a.available[t]&&a.available[t].iconClass)):"fa-navicon")+'"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>'+l(e(a&&a.available&&a.available[t]&&a.available[t].text))+"</strong> "+l(e(a&&a.available&&a.available[t]&&a.available[t].route))+" <br/>\r\n\t\t\t\t\t\t\t"+(e(a&&a.available&&a.available[t]&&a.available[t].core)?" [[admin/general/navigation:core]] ":" [[admin/general/navigation:plugin]] ")+"\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t"},function(){return""})}},i});