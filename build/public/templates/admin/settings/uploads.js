!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function t(t,e,s,l,n){return'<div class="settings">\r\n\t<div class="row">\r\n\t\t<div class="col-sm-2 col-xs-12 content-header">\r\n\t\t\t[[admin/admin:settings-header-contents]]\r\n\t\t</div>\r\n\t\t<div class="col-sm-10 col-xs-12">\r\n\t\t\t<nav class="section-content">\r\n\t\t\t\t<ul></ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">\r\n\t\t[[admin/settings/uploads:posts]]\r\n\t</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form>\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="privateUploads">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/uploads:private]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="stripEXIFData">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/uploads:strip-exif-data]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="privateUploadsExtensions">[[admin/settings/uploads:private-extensions]]</label>\r\n\t\t\t\t<input type="text" class="form-control" value="" data-field="privateUploadsExtensions" placeholder="">\r\n\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t[[admin/settings/uploads:private-uploads-extensions-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-xs-6">\r\n\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t<label for="resizeImageWidthThreshold">[[admin/settings/uploads:resize-image-width-threshold]]</label>\r\n\t\t\t\t\t\t<input type="text" class="form-control" value="2000" data-field="resizeImageWidthThreshold" placeholder="2000">\r\n\t\t\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t\t\t[[admin/settings/uploads:resize-image-width-threshold-help]]\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-xs-6">\r\n\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t<label for="resizeImageWidth">[[admin/settings/uploads:resize-image-width]]</label>\r\n\t\t\t\t\t\t<input type="text" class="form-control" value="760" data-field="resizeImageWidth" placeholder="760">\r\n\t\t\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t\t\t[[admin/settings/uploads:resize-image-width-help]]\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="resizeImageQuality">[[admin/settings/uploads:resize-image-quality]]</label>\r\n\t\t\t\t<input type="text" class="form-control" value="60" data-field="resizeImageQuality" placeholder="60">\r\n\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t[[admin/settings/uploads:resize-image-quality-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="maximumFileSize">[[admin/settings/uploads:max-file-size]]</label>\r\n\t\t\t\t<input type="text" class="form-control" value="2048" data-field="maximumFileSize">\r\n\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t[[admin/settings/uploads:max-file-size-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="rejectImageWidth">[[admin/settings/uploads:reject-image-width]]</label>\r\n\t\t\t\t<input type="text" class="form-control" value="5000" data-field="rejectImageWidth" placeholder="5000">\r\n\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t[[admin/settings/uploads:reject-image-width-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="rejectImageHeight">[[admin/settings/uploads:reject-image-height]]</label>\r\n\t\t\t\t<input type="text" class="form-control" value="5000" data-field="rejectImageHeight" placeholder="5000">\r\n\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t[[admin/settings/uploads:reject-image-height-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="allowTopicsThumbnail">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/uploads:allow-topic-thumbnails]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="topicThumbSize">[[admin/settings/uploads:topic-thumb-size]]</label>\r\n\t\t\t\t<input type="text" class="form-control" value="120" data-field="topicThumbSize">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="allowedFileExtensions">[[admin/settings/uploads:allowed-file-extensions]]</label>\r\n\t\t\t\t<input type="text" class="form-control" value="" data-field="allowedFileExtensions" data-field-type="tagsinput" />\r\n\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t[[admin/settings/uploads:allowed-file-extensions-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">\r\n\t\t[[admin/settings/uploads:profile-avatars]]\r\n\t</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form>\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="allowProfileImageUploads">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/uploads:allow-profile-image-uploads]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="profile:convertProfileImageToPNG">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/uploads:convert-profile-image-png]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/uploads:default-avatar]]</label>\r\n\t\t\t\t<div class="input-group">\r\n\t\t\t\t\t<input id="defaultAvatar" type="text" class="form-control" placeholder="A custom image to use instead of user icons" data-field="defaultAvatar" />\r\n\t\t\t\t\t<span class="input-group-btn">\r\n\t\t\t\t\t\t<input data-action="upload" data-target="defaultAvatar" data-route="'+(0,t.__escape)(s(e&&e.config&&e.config.relative_path))+'/api/admin/uploadDefaultAvatar" type="button" class="btn btn-default" value="[[admin/settings/uploads:upload]]"></input>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="profileImageDimension">[[admin/settings/uploads:profile-image-dimension]]</label>\r\n\t\t\t\t<input id="profileImageDimension" type="text" class="form-control" data-field="profileImageDimension" placeholder="200" />\r\n\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t[[admin/settings/uploads:profile-image-dimension-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/uploads:max-profile-image-size]]</label>\r\n\t\t\t\t<input type="text" class="form-control" placeholder="Maximum size of uploaded user images in kibibytes" data-field="maximumProfileImageSize" />\r\n\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t[[admin/settings/uploads:max-profile-image-size-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/uploads:max-cover-image-size]]</label>\r\n\t\t\t\t<input type="text" class="form-control" placeholder="Maximum size of uploaded cover images in kibibytes" data-field="maximumCoverImageSize" />\r\n\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t[[admin/settings/uploads:max-cover-image-size-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="profile:keepAllUserImages">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/uploads:keep-all-user-images]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/uploads:profile-covers]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form>\r\n\t\t\t<label for="profile:defaultCovers"><strong>[[admin/settings/uploads:default-covers]]</strong></label>\r\n\t\t\t<p class="help-block">\r\n\t\t\t\t[[admin/settings/uploads:default-covers-help]]\r\n\t\t\t</p>\r\n\t\t\t<input type="text" class="form-control input-lg" id="profile:defaultCovers" data-field="profile:defaultCovers" data-field-type="tagsinput" value="/assets/images/cover-default.png" placeholder="https://example.com/group1.png, https://example.com/group2.png" />\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\r\n\t<i class="material-icons">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire([\'admin/settings\'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t\tSettings.populateTOC();\r\n\t});\r\n<\/script>\r\n\r\n'}return t.blocks={},t});