!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function t(t,r,a,n,o){return'<div id="crop-picture-modal" class="modal" tabindex="-1" role="dialog" aria-labelledby="crop-picture" aria-hidden="true">\r\n\t<div class="modal-dialog">\r\n\t\t<div class="modal-content">\r\n\t\t\t<div class="modal-header">\r\n\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\r\n\t\t\t\t<h3 id="crop-picture">[[user:crop_picture]]</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class="modal-body">\r\n\t\t\t\t<div id="upload-progress-box" class="progress hide">\r\n\t\t\t\t\t<div id="upload-progress-bar" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="cropper">\r\n\t\t\t\t\t<img id="cropped-image" crossorigin="anonymous" src="'+(0,t.__escape)(a(r&&r.url))+'">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<hr />\r\n\r\n\t\t\t\t<div class="btn-group">\r\n\t\t\t\t\t<button class="btn btn-primary rotate" data-degrees="-45"><i class="fa fa-rotate-left"></i></button>\r\n\t\t\t\t\t<button class="btn btn-primary rotate" data-degrees="45"><i class="fa fa-rotate-right"></i></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="btn-group">\r\n\t\t\t\t\t<button class="btn btn-primary flip" data-option="-1" data-method="scaleX"><i class="fa fa-arrows-h"></i></button>\r\n\t\t\t\t\t<button class="btn btn-primary flip" data-option="1" data-method="scaleY"><i class="fa fa-arrows-v"></i></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="btn-group">\r\n\t\t\t\t\t<button class="btn btn-primary reset"><i class="fa fa-refresh"></i></button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="modal-footer">\r\n\t\t\t\t<button class="btn btn-default" data-dismiss="modal" aria-hidden="true">Close</button>\r\n\t\t\t\t<button class="btn btn-primary upload-btn '+(a(r&&r.allowSkippingCrop)?"":"hidden")+'">[[user:upload_picture]]</button>\r\n\t\t\t\t<button class="btn btn-primary crop-btn">[[user:upload_cropped_picture]]</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n'}return t.blocks={},t});