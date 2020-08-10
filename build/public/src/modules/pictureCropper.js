"use strict";define("pictureCropper",["cropper"],function(e){var a={};a.show=function(e,a){var i=e.hasOwnProperty("fileSize")&&e.fileSize!==undefined?parseInt(e.fileSize,10):false;app.parseAndTranslate("partials/modals/upload_file_modal",{showHelp:e.hasOwnProperty("showHelp")&&e.showHelp!==undefined?e.showHelp:true,fileSize:i,title:e.title||"[[global:upload_file]]",description:e.description||"",button:e.button||"[[global:upload]]",accept:e.accept?e.accept.replace(/,/g,"&#44; "):""},function(i){i.modal("show");i.on("hidden.bs.modal",function(){i.remove()});var o=i.find("#uploadForm");if(e.route){o.attr("action",e.route)}i.find("#fileUploadSubmitBtn").on("click",function(){$(this).addClass("disabled");e.uploadModal=i;t(e,a);return false})})};a.handleImageCrop=function(a,t){$("#crop-picture-modal").remove();app.parseAndTranslate("modals/crop_picture",{url:utils.escapeHTML(a.url)},function(o){o.modal({backdrop:"static"}).modal("show");var r=parseInt($(window).height()/2,10);var n=document.getElementById("cropped-image");$(n).css("max-height",r);var s=new e(n,{aspectRatio:a.aspectRatio,autoCropArea:1,viewMode:1,checkCrossOrigin:true,cropmove:function(){if(a.restrictImageDimension){if(s.cropBoxData.width>a.imageDimension){s.setCropBoxData({width:a.imageDimension})}if(s.cropBoxData.height>a.imageDimension){s.setCropBoxData({height:a.imageDimension})}}},ready:function(){if(!i(s,a)){return o.modal("hide")}if(a.restrictImageDimension){var r=n.width<n.height?n.width:n.height;var d=r>a.imageDimension?a.imageDimension:r;s.setCropBoxData({width:d,height:d})}o.find(".rotate").on("click",function(){var e=this.getAttribute("data-degrees");s.rotate(e)});o.find(".flip").on("click",function(){var e=this.getAttribute("data-option");var a=this.getAttribute("data-method");if(a==="scaleX"){s.scaleX(e)}else{s.scaleY(e)}this.setAttribute("data-option",e*-1)});o.find(".reset").on("click",function(){s.reset()});o.find(".crop-btn").on("click",function(){$(this).addClass("disabled");var e=i(s,a);if(!e){return}o.find("#upload-progress-bar").css("width","100%");o.find("#upload-progress-box").show().removeClass("hide");var r={};r[a.paramName]=a.paramValue;r.imageData=e;socket.emit(a.socketMethod,r,function(e,a){if(e){o.find("#upload-progress-box").hide();o.find(".upload-btn").removeClass("disabled");o.find(".crop-btn").removeClass("disabled");return app.alertError(e.message)}t(a.url);o.modal("hide")})});o.find(".upload-btn").on("click",function(){$(this).addClass("disabled");s.destroy();s=new e(n,{viewMode:1,autoCropArea:1,ready:function(){o.find(".crop-btn").trigger("click")}})})}})})};function i(e,a){var i;try{i=a.imageType?e.getCroppedCanvas().toDataURL(a.imageType):e.getCroppedCanvas().toDataURL()}catch(e){var t=["The operation is insecure.","Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported."];if(t.indexOf(e.message)!==-1){app.alertError("[[error:cors-error]]")}else{app.alertError(e.message)}return}return i}function t(e,i){function t(a,i){if(a==="error"){e.uploadModal.find("#fileUploadSubmitBtn").removeClass("disabled")}e.uploadModal.find("#alert-"+a).translateText(i).removeClass("hide")}var o=e.uploadModal.find("#fileInput");if(!o.val()){return t("error","[[uploads:select-file-to-upload]]")}var r=o[0].files[0];var n=e.hasOwnProperty("fileSize")&&e.fileSize!==undefined?parseInt(e.fileSize,10):false;if(n&&r.size>n*1024){return app.alertError("[[error:file-too-big, "+n+"]]")}if(r.name.endsWith(".gif")){require(["uploader"],function(a){a.ajaxSubmit(e.uploadModal,i)});return}var s=new FileReader;s.addEventListener("load",function(){var t=s.result;e.uploadModal.modal("hide");a.handleImageCrop({url:t,imageType:r.type,socketMethod:e.socketMethod,aspectRatio:e.aspectRatio,allowSkippingCrop:e.allowSkippingCrop,restrictImageDimension:e.restrictImageDimension,imageDimension:e.imageDimension,paramName:e.paramName,paramValue:e.paramValue},i)},false);if(r){s.readAsDataURL(r)}}return a});
//# sourceMappingURL=pictureCropper.js.map