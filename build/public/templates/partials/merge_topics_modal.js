!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,n,i,e,o){t.__escape;return'<div class="panel panel-primary merge-topic-card">\n\t<div class="panel-heading">\n\t\t<h3 class="panel-title">[[topic:thread_tools.merge_topics]]</h3>\n\t</div>\n\t<div class="panel-body">\n\t\t<p>\n\t\t\t[[topic:merge_topics_instruction]]<br />\n\t\t\t<div class="topics-section">\n\t\t\t\t'+s.blocks.topics(t,n,i,e,o)+'\n\t\t\t</div>\n\t\t</p>\n\t</div>\n\t<div class="panel-footer">\n\t\t&nbsp;\n\t\t<div class="btn-group pull-right">\n\t\t\t<button class="btn btn-link btn-xs" id="merge_topics_cancel">[[global:buttons.close]]</button>\n\t\t\t<button class="btn btn-primary btn-xs" id="merge_topics_confirm" disabled>[[topic:thread_tools.merge]]</button>\n\t\t</div>\n\t</div>\n</div>'}return s.blocks={topics:function(t,i,e,n){var o=t.__escape;return n(e(i&&i.topics),function(t,n){return"\n\t\t\t\t"+(n?'\n\t\t\t\t<i class="fa fa-chevron-up"></i><br/>\n\t\t\t\t':"")+"\n\t\t\t\t<span>"+o(e(i&&i.topics&&i.topics[t]&&i.topics[t].title))+"</span><br/>\n\t\t\t\t"},function(){return""})}},s});