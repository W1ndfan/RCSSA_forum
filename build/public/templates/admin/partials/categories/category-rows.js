!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function s(e,r,a,i,c){return'<ul data-cid="'+(0,e.__escape)(a(r&&r.cid))+'">\r\n'+s.blocks.categories(e,r,a,i,c)+'\r\n<li class="children-placeholder"></li>\r\n</ul>\r\n'}return s.blocks={categories:function(e,r,a,i){var c=e.__escape;return i(a(r&&r.categories),function(e){return'\r\n    <li data-cid="'+c(a(r&&r.categories&&r.categories[e]&&r.categories[e].cid))+'" '+(a(r&&r.categories&&r.categories[e]&&r.categories[e].disabled)?'class="disabled"':"")+'>\r\n        <div class="row category-row">\r\n            <div class="col-md-9">\r\n                <div class="clearfix">\r\n                    <div class="toggle">\r\n                        <i class="fa fa-minus"></i>\r\n                    </div>\r\n                    <div class="icon" style="\r\n                        color: '+c(a(r&&r.categories&&r.categories[e]&&r.categories[e].color))+";\r\n                        background-color: "+c(a(r&&r.categories&&r.categories[e]&&r.categories[e].bgColor))+";\r\n                        "+(a(r&&r.categories&&r.categories[e]&&r.categories[e].backgroundImage)?"\r\n                        background-image: url('"+c(a(r&&r.categories&&r.categories[e]&&r.categories[e].backgroundImage))+"');\r\n                        ":"")+'\r\n                    ">\r\n                        <i data-name="icon" value="'+c(a(r&&r.categories&&r.categories[e]&&r.categories[e].icon))+'" class="fa '+c(a(r&&r.categories&&r.categories[e]&&r.categories[e].icon))+'"></i>\r\n                    </div>\r\n                    <div class="information">\r\n                        <h5 class="category-header">'+c(a(r&&r.categories&&r.categories[e]&&r.categories[e].name))+'</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="col-md-3">\r\n                <div class="clearfix pull-right text-right">\r\n                    <div class="btn-group">\r\n                        <button data-cid="'+c(a(r&&r.categories&&r.categories[e]&&r.categories[e].cid))+'" data-action="toggle" data-disabled="'+c(a(r&&r.categories&&r.categories[e]&&r.categories[e].disabled))+'" class="btn btn-sm '+(a(r&&r.categories&&r.categories[e]&&r.categories[e].disabled)?"btn-primary":"btn-danger")+'">\r\n                            '+(a(r&&r.categories&&r.categories[e]&&r.categories[e].disabled)?"\r\n                            [[admin/manage/categories:enable]]\r\n                            ":"\r\n                            [[admin/manage/categories:disable]]\r\n                            ")+'\r\n                        </button>\r\n                        <a href="./categories/'+c(a(r&&r.categories&&r.categories[e]&&r.categories[e].cid))+'/analytics" class="btn btn-default btn-sm">\r\n                            <i class="fa fa-line-chart"></i>\r\n                        </a>\r\n                        <a href="./categories/'+c(a(r&&r.categories&&r.categories[e]&&r.categories[e].cid))+'" class="btn btn-default btn-sm">\r\n                            [[admin/manage/categories:edit]]\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n'},function(){return""})}},s});