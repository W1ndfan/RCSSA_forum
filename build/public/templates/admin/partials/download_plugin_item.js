!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function t(t,n,o,a,d){var l=t.__escape;return'\t\t\t\t\t<li id="'+l(o(n&&n.download&&n.download.id))+'" data-plugin-id="'+l(o(n&&n.download&&n.download.id))+'" class="clearfix">\r\n\t\t\t\t\t\t<div class="pull-right">\r\n\t\t\t\t\t\t\t<button data-action="toggleActive" class="btn btn-success hidden"><i class="fa fa-power-off"></i> [[admin/extend/plugins:plugin-item.activate]]</button>\r\n\t\t\t\t\t\t\t<button data-action="toggleInstall" data-installed="0" class="btn btn-success"><i class="fa fa-download"></i> [[admin/extend/plugins:plugin-item.install]]</button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<h2><strong>'+l(o(n&&n.download&&n.download.name))+"</strong></h2>\r\n\r\n\t\t\t\t\t\t"+(o(n&&n.download&&n.download.description)?"\r\n\t\t\t\t\t\t<p>"+l(o(n&&n.download&&n.download.description))+"</p>\r\n\t\t\t\t\t\t":"")+'\r\n\r\n\t\t\t\t\t\t<small>[[admin/extend/plugins:plugin-item.latest]] <strong class="latestVersion">'+l(o(n&&n.download&&n.download.latest))+"</strong></small>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t"+(o(n&&n.download&&n.download.isCompatible)?'\r\n\t\t\t\t\t\t\t<i class="fa fa-check text-success"></i> [[admin/extend/plugins:plugin-item.compatible, '+l(o(n&&n.version))+"]]\r\n\t\t\t\t\t\t\t":'\r\n\t\t\t\t\t\t\t<i class="fa fa-question text-warning"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\r\n\t\t\t\t\t\t\t')+"\r\n\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t\t"+(o(n&&n.download&&n.download.url)?'\r\n\t\t\t\t\t\t<p>[[admin/extend/plugins:plugin-item.more-info]] <a target="_blank" href="'+l(o(n&&n.download&&n.download.url))+'">'+l(o(n&&n.download&&n.download.url))+"</a></p>\r\n\t\t\t\t\t\t":"")+"\r\n\t\t\t\t\t</li>\r\n"}return t.blocks={},t});