"use strict";define("admin/modules/colorpicker",function(){var n={};n.enable=function(n,o){(n instanceof jQuery?n:$(n)).each(function(){var n=$(this);n.ColorPicker({color:n.val()||"#000",onChange:function(i,e){n.val("#"+e);if(typeof o==="function"){o(i,e)}},onShow:function(n){$(n).css("z-index",1051)}});$(window).one("action:ajaxify.start",function(){n.ColorPickerHide()})})};return n});
//# sourceMappingURL=colorpicker.js.map