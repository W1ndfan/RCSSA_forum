define("ace/snippets/css",["require","exports","module"],function(n,t,e){"use strict";t.snippetText="snippet .\n\t${1} {\n\t\t${2}\n\t}\nsnippet !\n\t !important\nsnippet bdi:m+\n\t-moz-border-image: url(${1}) ${2:0} ${3:0} ${4:0} ${5:0} ${6:stretch} ${7:stretch};\nsnippet bdi:m\n\t-moz-border-image: ${1};\nsnippet bdrz:m\n\t-moz-border-radius: ${1};\nsnippet bxsh:m+\n\t-moz-box-shadow: ${1:0} ${2:0} ${3:0} #${4:000};\nsnippet bxsh:m\n\t-moz-box-shadow: ${1};\nsnippet bdi:w+\n\t-webkit-border-image: url(${1}) ${2:0} ${3:0} ${4:0} ${5:0} ${6:stretch} ${7:stretch};\nsnippet bdi:w\n\t-webkit-border-image: ${1};\nsnippet bdrz:w\n\t-webkit-border-radius: ${1};\nsnippet bxsh:w+\n\t-webkit-box-shadow: ${1:0} ${2:0} ${3:0} #${4:000};\nsnippet bxsh:w\n\t-webkit-box-shadow: ${1};\nsnippet @f\n\t@font-face {\n\t\tfont-family: ${1};\n\t\tsrc: url(${2});\n\t}\nsnippet @i\n\t@import url(${1});\nsnippet @m\n\t@media ${1:print} {\n\t\t${2}\n\t}\nsnippet bg+\n\tbackground: #${1:FFF} url(${2}) ${3:0} ${4:0} ${5:no-repeat};\nsnippet bga\n\tbackground-attachment: ${1};\nsnippet bga:f\n\tbackground-attachment: fixed;\nsnippet bga:s\n\tbackground-attachment: scroll;\nsnippet bgbk\n\tbackground-break: ${1};\nsnippet bgbk:bb\n\tbackground-break: bounding-box;\nsnippet bgbk:c\n\tbackground-break: continuous;\nsnippet bgbk:eb\n\tbackground-break: each-box;\nsnippet bgcp\n\tbackground-clip: ${1};\nsnippet bgcp:bb\n\tbackground-clip: border-box;\nsnippet bgcp:cb\n\tbackground-clip: content-box;\nsnippet bgcp:nc\n\tbackground-clip: no-clip;\nsnippet bgcp:pb\n\tbackground-clip: padding-box;\nsnippet bgc\n\tbackground-color: #${1:FFF};\nsnippet bgc:t\n\tbackground-color: transparent;\nsnippet bgi\n\tbackground-image: url(${1});\nsnippet bgi:n\n\tbackground-image: none;\nsnippet bgo\n\tbackground-origin: ${1};\nsnippet bgo:bb\n\tbackground-origin: border-box;\nsnippet bgo:cb\n\tbackground-origin: content-box;\nsnippet bgo:pb\n\tbackground-origin: padding-box;\nsnippet bgpx\n\tbackground-position-x: ${1};\nsnippet bgpy\n\tbackground-position-y: ${1};\nsnippet bgp\n\tbackground-position: ${1:0} ${2:0};\nsnippet bgr\n\tbackground-repeat: ${1};\nsnippet bgr:n\n\tbackground-repeat: no-repeat;\nsnippet bgr:x\n\tbackground-repeat: repeat-x;\nsnippet bgr:y\n\tbackground-repeat: repeat-y;\nsnippet bgr:r\n\tbackground-repeat: repeat;\nsnippet bgz\n\tbackground-size: ${1};\nsnippet bgz:a\n\tbackground-size: auto;\nsnippet bgz:ct\n\tbackground-size: contain;\nsnippet bgz:cv\n\tbackground-size: cover;\nsnippet bg\n\tbackground: ${1};\nsnippet bg:ie\n\tfilter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${1}',sizingMethod='${2:crop}');\nsnippet bg:n\n\tbackground: none;\nsnippet bd+\n\tborder: ${1:1px} ${2:solid} #${3:000};\nsnippet bdb+\n\tborder-bottom: ${1:1px} ${2:solid} #${3:000};\nsnippet bdbc\n\tborder-bottom-color: #${1:000};\nsnippet bdbi\n\tborder-bottom-image: url(${1});\nsnippet bdbi:n\n\tborder-bottom-image: none;\nsnippet bdbli\n\tborder-bottom-left-image: url(${1});\nsnippet bdbli:c\n\tborder-bottom-left-image: continue;\nsnippet bdbli:n\n\tborder-bottom-left-image: none;\nsnippet bdblrz\n\tborder-bottom-left-radius: ${1};\nsnippet bdbri\n\tborder-bottom-right-image: url(${1});\nsnippet bdbri:c\n\tborder-bottom-right-image: continue;\nsnippet bdbri:n\n\tborder-bottom-right-image: none;\nsnippet bdbrrz\n\tborder-bottom-right-radius: ${1};\nsnippet bdbs\n\tborder-bottom-style: ${1};\nsnippet bdbs:n\n\tborder-bottom-style: none;\nsnippet bdbw\n\tborder-bottom-width: ${1};\nsnippet bdb\n\tborder-bottom: ${1};\nsnippet bdb:n\n\tborder-bottom: none;\nsnippet bdbk\n\tborder-break: ${1};\nsnippet bdbk:c\n\tborder-break: close;\nsnippet bdcl\n\tborder-collapse: ${1};\nsnippet bdcl:c\n\tborder-collapse: collapse;\nsnippet bdcl:s\n\tborder-collapse: separate;\nsnippet bdc\n\tborder-color: #${1:000};\nsnippet bdci\n\tborder-corner-image: url(${1});\nsnippet bdci:c\n\tborder-corner-image: continue;\nsnippet bdci:n\n\tborder-corner-image: none;\nsnippet bdf\n\tborder-fit: ${1};\nsnippet bdf:c\n\tborder-fit: clip;\nsnippet bdf:of\n\tborder-fit: overwrite;\nsnippet bdf:ow\n\tborder-fit: overwrite;\nsnippet bdf:r\n\tborder-fit: repeat;\nsnippet bdf:sc\n\tborder-fit: scale;\nsnippet bdf:sp\n\tborder-fit: space;\nsnippet bdf:st\n\tborder-fit: stretch;\nsnippet bdi\n\tborder-image: url(${1}) ${2:0} ${3:0} ${4:0} ${5:0} ${6:stretch} ${7:stretch};\nsnippet bdi:n\n\tborder-image: none;\nsnippet bdl+\n\tborder-left: ${1:1px} ${2:solid} #${3:000};\nsnippet bdlc\n\tborder-left-color: #${1:000};\nsnippet bdli\n\tborder-left-image: url(${1});\nsnippet bdli:n\n\tborder-left-image: none;\nsnippet bdls\n\tborder-left-style: ${1};\nsnippet bdls:n\n\tborder-left-style: none;\nsnippet bdlw\n\tborder-left-width: ${1};\nsnippet bdl\n\tborder-left: ${1};\nsnippet bdl:n\n\tborder-left: none;\nsnippet bdlt\n\tborder-length: ${1};\nsnippet bdlt:a\n\tborder-length: auto;\nsnippet bdrz\n\tborder-radius: ${1};\nsnippet bdr+\n\tborder-right: ${1:1px} ${2:solid} #${3:000};\nsnippet bdrc\n\tborder-right-color: #${1:000};\nsnippet bdri\n\tborder-right-image: url(${1});\nsnippet bdri:n\n\tborder-right-image: none;\nsnippet bdrs\n\tborder-right-style: ${1};\nsnippet bdrs:n\n\tborder-right-style: none;\nsnippet bdrw\n\tborder-right-width: ${1};\nsnippet bdr\n\tborder-right: ${1};\nsnippet bdr:n\n\tborder-right: none;\nsnippet bdsp\n\tborder-spacing: ${1};\nsnippet bds\n\tborder-style: ${1};\nsnippet bds:ds\n\tborder-style: dashed;\nsnippet bds:dtds\n\tborder-style: dot-dash;\nsnippet bds:dtdtds\n\tborder-style: dot-dot-dash;\nsnippet bds:dt\n\tborder-style: dotted;\nsnippet bds:db\n\tborder-style: double;\nsnippet bds:g\n\tborder-style: groove;\nsnippet bds:h\n\tborder-style: hidden;\nsnippet bds:i\n\tborder-style: inset;\nsnippet bds:n\n\tborder-style: none;\nsnippet bds:o\n\tborder-style: outset;\nsnippet bds:r\n\tborder-style: ridge;\nsnippet bds:s\n\tborder-style: solid;\nsnippet bds:w\n\tborder-style: wave;\nsnippet bdt+\n\tborder-top: ${1:1px} ${2:solid} #${3:000};\nsnippet bdtc\n\tborder-top-color: #${1:000};\nsnippet bdti\n\tborder-top-image: url(${1});\nsnippet bdti:n\n\tborder-top-image: none;\nsnippet bdtli\n\tborder-top-left-image: url(${1});\nsnippet bdtli:c\n\tborder-corner-image: continue;\nsnippet bdtli:n\n\tborder-corner-image: none;\nsnippet bdtlrz\n\tborder-top-left-radius: ${1};\nsnippet bdtri\n\tborder-top-right-image: url(${1});\nsnippet bdtri:c\n\tborder-top-right-image: continue;\nsnippet bdtri:n\n\tborder-top-right-image: none;\nsnippet bdtrrz\n\tborder-top-right-radius: ${1};\nsnippet bdts\n\tborder-top-style: ${1};\nsnippet bdts:n\n\tborder-top-style: none;\nsnippet bdtw\n\tborder-top-width: ${1};\nsnippet bdt\n\tborder-top: ${1};\nsnippet bdt:n\n\tborder-top: none;\nsnippet bdw\n\tborder-width: ${1};\nsnippet bd\n\tborder: ${1};\nsnippet bd:n\n\tborder: none;\nsnippet b\n\tbottom: ${1};\nsnippet b:a\n\tbottom: auto;\nsnippet bxsh+\n\tbox-shadow: ${1:0} ${2:0} ${3:0} #${4:000};\nsnippet bxsh\n\tbox-shadow: ${1};\nsnippet bxsh:n\n\tbox-shadow: none;\nsnippet bxz\n\tbox-sizing: ${1};\nsnippet bxz:bb\n\tbox-sizing: border-box;\nsnippet bxz:cb\n\tbox-sizing: content-box;\nsnippet cps\n\tcaption-side: ${1};\nsnippet cps:b\n\tcaption-side: bottom;\nsnippet cps:t\n\tcaption-side: top;\nsnippet cl\n\tclear: ${1};\nsnippet cl:b\n\tclear: both;\nsnippet cl:l\n\tclear: left;\nsnippet cl:n\n\tclear: none;\nsnippet cl:r\n\tclear: right;\nsnippet cp\n\tclip: ${1};\nsnippet cp:a\n\tclip: auto;\nsnippet cp:r\n\tclip: rect(${1:0} ${2:0} ${3:0} ${4:0});\nsnippet c\n\tcolor: #${1:000};\nsnippet ct\n\tcontent: ${1};\nsnippet ct:a\n\tcontent: attr(${1});\nsnippet ct:cq\n\tcontent: close-quote;\nsnippet ct:c\n\tcontent: counter(${1});\nsnippet ct:cs\n\tcontent: counters(${1});\nsnippet ct:ncq\n\tcontent: no-close-quote;\nsnippet ct:noq\n\tcontent: no-open-quote;\nsnippet ct:n\n\tcontent: normal;\nsnippet ct:oq\n\tcontent: open-quote;\nsnippet coi\n\tcounter-increment: ${1};\nsnippet cor\n\tcounter-reset: ${1};\nsnippet cur\n\tcursor: ${1};\nsnippet cur:a\n\tcursor: auto;\nsnippet cur:c\n\tcursor: crosshair;\nsnippet cur:d\n\tcursor: default;\nsnippet cur:ha\n\tcursor: hand;\nsnippet cur:he\n\tcursor: help;\nsnippet cur:m\n\tcursor: move;\nsnippet cur:p\n\tcursor: pointer;\nsnippet cur:t\n\tcursor: text;\nsnippet d\n\tdisplay: ${1};\nsnippet d:mib\n\tdisplay: -moz-inline-box;\nsnippet d:mis\n\tdisplay: -moz-inline-stack;\nsnippet d:b\n\tdisplay: block;\nsnippet d:cp\n\tdisplay: compact;\nsnippet d:ib\n\tdisplay: inline-block;\nsnippet d:itb\n\tdisplay: inline-table;\nsnippet d:i\n\tdisplay: inline;\nsnippet d:li\n\tdisplay: list-item;\nsnippet d:n\n\tdisplay: none;\nsnippet d:ri\n\tdisplay: run-in;\nsnippet d:tbcp\n\tdisplay: table-caption;\nsnippet d:tbc\n\tdisplay: table-cell;\nsnippet d:tbclg\n\tdisplay: table-column-group;\nsnippet d:tbcl\n\tdisplay: table-column;\nsnippet d:tbfg\n\tdisplay: table-footer-group;\nsnippet d:tbhg\n\tdisplay: table-header-group;\nsnippet d:tbrg\n\tdisplay: table-row-group;\nsnippet d:tbr\n\tdisplay: table-row;\nsnippet d:tb\n\tdisplay: table;\nsnippet ec\n\tempty-cells: ${1};\nsnippet ec:h\n\tempty-cells: hide;\nsnippet ec:s\n\tempty-cells: show;\nsnippet exp\n\texpression()\nsnippet fl\n\tfloat: ${1};\nsnippet fl:l\n\tfloat: left;\nsnippet fl:n\n\tfloat: none;\nsnippet fl:r\n\tfloat: right;\nsnippet f+\n\tfont: ${1:1em} ${2:Arial},${3:sans-serif};\nsnippet fef\n\tfont-effect: ${1};\nsnippet fef:eb\n\tfont-effect: emboss;\nsnippet fef:eg\n\tfont-effect: engrave;\nsnippet fef:n\n\tfont-effect: none;\nsnippet fef:o\n\tfont-effect: outline;\nsnippet femp\n\tfont-emphasize-position: ${1};\nsnippet femp:a\n\tfont-emphasize-position: after;\nsnippet femp:b\n\tfont-emphasize-position: before;\nsnippet fems\n\tfont-emphasize-style: ${1};\nsnippet fems:ac\n\tfont-emphasize-style: accent;\nsnippet fems:c\n\tfont-emphasize-style: circle;\nsnippet fems:ds\n\tfont-emphasize-style: disc;\nsnippet fems:dt\n\tfont-emphasize-style: dot;\nsnippet fems:n\n\tfont-emphasize-style: none;\nsnippet fem\n\tfont-emphasize: ${1};\nsnippet ff\n\tfont-family: ${1};\nsnippet ff:c\n\tfont-family: ${1:'Monotype Corsiva','Comic Sans MS'},cursive;\nsnippet ff:f\n\tfont-family: ${1:Capitals,Impact},fantasy;\nsnippet ff:m\n\tfont-family: ${1:Monaco,'Courier New'},monospace;\nsnippet ff:ss\n\tfont-family: ${1:Helvetica,Arial},sans-serif;\nsnippet ff:s\n\tfont-family: ${1:Georgia,'Times New Roman'},serif;\nsnippet fza\n\tfont-size-adjust: ${1};\nsnippet fza:n\n\tfont-size-adjust: none;\nsnippet fz\n\tfont-size: ${1};\nsnippet fsm\n\tfont-smooth: ${1};\nsnippet fsm:aw\n\tfont-smooth: always;\nsnippet fsm:a\n\tfont-smooth: auto;\nsnippet fsm:n\n\tfont-smooth: never;\nsnippet fst\n\tfont-stretch: ${1};\nsnippet fst:c\n\tfont-stretch: condensed;\nsnippet fst:e\n\tfont-stretch: expanded;\nsnippet fst:ec\n\tfont-stretch: extra-condensed;\nsnippet fst:ee\n\tfont-stretch: extra-expanded;\nsnippet fst:n\n\tfont-stretch: normal;\nsnippet fst:sc\n\tfont-stretch: semi-condensed;\nsnippet fst:se\n\tfont-stretch: semi-expanded;\nsnippet fst:uc\n\tfont-stretch: ultra-condensed;\nsnippet fst:ue\n\tfont-stretch: ultra-expanded;\nsnippet fs\n\tfont-style: ${1};\nsnippet fs:i\n\tfont-style: italic;\nsnippet fs:n\n\tfont-style: normal;\nsnippet fs:o\n\tfont-style: oblique;\nsnippet fv\n\tfont-variant: ${1};\nsnippet fv:n\n\tfont-variant: normal;\nsnippet fv:sc\n\tfont-variant: small-caps;\nsnippet fw\n\tfont-weight: ${1};\nsnippet fw:b\n\tfont-weight: bold;\nsnippet fw:br\n\tfont-weight: bolder;\nsnippet fw:lr\n\tfont-weight: lighter;\nsnippet fw:n\n\tfont-weight: normal;\nsnippet f\n\tfont: ${1};\nsnippet h\n\theight: ${1};\nsnippet h:a\n\theight: auto;\nsnippet l\n\tleft: ${1};\nsnippet l:a\n\tleft: auto;\nsnippet lts\n\tletter-spacing: ${1};\nsnippet lh\n\tline-height: ${1};\nsnippet lisi\n\tlist-style-image: url(${1});\nsnippet lisi:n\n\tlist-style-image: none;\nsnippet lisp\n\tlist-style-position: ${1};\nsnippet lisp:i\n\tlist-style-position: inside;\nsnippet lisp:o\n\tlist-style-position: outside;\nsnippet list\n\tlist-style-type: ${1};\nsnippet list:c\n\tlist-style-type: circle;\nsnippet list:dclz\n\tlist-style-type: decimal-leading-zero;\nsnippet list:dc\n\tlist-style-type: decimal;\nsnippet list:d\n\tlist-style-type: disc;\nsnippet list:lr\n\tlist-style-type: lower-roman;\nsnippet list:n\n\tlist-style-type: none;\nsnippet list:s\n\tlist-style-type: square;\nsnippet list:ur\n\tlist-style-type: upper-roman;\nsnippet lis\n\tlist-style: ${1};\nsnippet lis:n\n\tlist-style: none;\nsnippet mb\n\tmargin-bottom: ${1};\nsnippet mb:a\n\tmargin-bottom: auto;\nsnippet ml\n\tmargin-left: ${1};\nsnippet ml:a\n\tmargin-left: auto;\nsnippet mr\n\tmargin-right: ${1};\nsnippet mr:a\n\tmargin-right: auto;\nsnippet mt\n\tmargin-top: ${1};\nsnippet mt:a\n\tmargin-top: auto;\nsnippet m\n\tmargin: ${1};\nsnippet m:4\n\tmargin: ${1:0} ${2:0} ${3:0} ${4:0};\nsnippet m:3\n\tmargin: ${1:0} ${2:0} ${3:0};\nsnippet m:2\n\tmargin: ${1:0} ${2:0};\nsnippet m:0\n\tmargin: 0;\nsnippet m:a\n\tmargin: auto;\nsnippet mah\n\tmax-height: ${1};\nsnippet mah:n\n\tmax-height: none;\nsnippet maw\n\tmax-width: ${1};\nsnippet maw:n\n\tmax-width: none;\nsnippet mih\n\tmin-height: ${1};\nsnippet miw\n\tmin-width: ${1};\nsnippet op\n\topacity: ${1};\nsnippet op:ie\n\tfilter: progid:DXImageTransform.Microsoft.Alpha(Opacity=${1:100});\nsnippet op:ms\n\t-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=${1:100})';\nsnippet orp\n\torphans: ${1};\nsnippet o+\n\toutline: ${1:1px} ${2:solid} #${3:000};\nsnippet oc\n\toutline-color: ${1:#000};\nsnippet oc:i\n\toutline-color: invert;\nsnippet oo\n\toutline-offset: ${1};\nsnippet os\n\toutline-style: ${1};\nsnippet ow\n\toutline-width: ${1};\nsnippet o\n\toutline: ${1};\nsnippet o:n\n\toutline: none;\nsnippet ovs\n\toverflow-style: ${1};\nsnippet ovs:a\n\toverflow-style: auto;\nsnippet ovs:mq\n\toverflow-style: marquee;\nsnippet ovs:mv\n\toverflow-style: move;\nsnippet ovs:p\n\toverflow-style: panner;\nsnippet ovs:s\n\toverflow-style: scrollbar;\nsnippet ovx\n\toverflow-x: ${1};\nsnippet ovx:a\n\toverflow-x: auto;\nsnippet ovx:h\n\toverflow-x: hidden;\nsnippet ovx:s\n\toverflow-x: scroll;\nsnippet ovx:v\n\toverflow-x: visible;\nsnippet ovy\n\toverflow-y: ${1};\nsnippet ovy:a\n\toverflow-y: auto;\nsnippet ovy:h\n\toverflow-y: hidden;\nsnippet ovy:s\n\toverflow-y: scroll;\nsnippet ovy:v\n\toverflow-y: visible;\nsnippet ov\n\toverflow: ${1};\nsnippet ov:a\n\toverflow: auto;\nsnippet ov:h\n\toverflow: hidden;\nsnippet ov:s\n\toverflow: scroll;\nsnippet ov:v\n\toverflow: visible;\nsnippet pb\n\tpadding-bottom: ${1};\nsnippet pl\n\tpadding-left: ${1};\nsnippet pr\n\tpadding-right: ${1};\nsnippet pt\n\tpadding-top: ${1};\nsnippet p\n\tpadding: ${1};\nsnippet p:4\n\tpadding: ${1:0} ${2:0} ${3:0} ${4:0};\nsnippet p:3\n\tpadding: ${1:0} ${2:0} ${3:0};\nsnippet p:2\n\tpadding: ${1:0} ${2:0};\nsnippet p:0\n\tpadding: 0;\nsnippet pgba\n\tpage-break-after: ${1};\nsnippet pgba:aw\n\tpage-break-after: always;\nsnippet pgba:a\n\tpage-break-after: auto;\nsnippet pgba:l\n\tpage-break-after: left;\nsnippet pgba:r\n\tpage-break-after: right;\nsnippet pgbb\n\tpage-break-before: ${1};\nsnippet pgbb:aw\n\tpage-break-before: always;\nsnippet pgbb:a\n\tpage-break-before: auto;\nsnippet pgbb:l\n\tpage-break-before: left;\nsnippet pgbb:r\n\tpage-break-before: right;\nsnippet pgbi\n\tpage-break-inside: ${1};\nsnippet pgbi:a\n\tpage-break-inside: auto;\nsnippet pgbi:av\n\tpage-break-inside: avoid;\nsnippet pos\n\tposition: ${1};\nsnippet pos:a\n\tposition: absolute;\nsnippet pos:f\n\tposition: fixed;\nsnippet pos:r\n\tposition: relative;\nsnippet pos:s\n\tposition: static;\nsnippet q\n\tquotes: ${1};\nsnippet q:en\n\tquotes: '\\201C' '\\201D' '\\2018' '\\2019';\nsnippet q:n\n\tquotes: none;\nsnippet q:ru\n\tquotes: '\\00AB' '\\00BB' '\\201E' '\\201C';\nsnippet rz\n\tresize: ${1};\nsnippet rz:b\n\tresize: both;\nsnippet rz:h\n\tresize: horizontal;\nsnippet rz:n\n\tresize: none;\nsnippet rz:v\n\tresize: vertical;\nsnippet r\n\tright: ${1};\nsnippet r:a\n\tright: auto;\nsnippet tbl\n\ttable-layout: ${1};\nsnippet tbl:a\n\ttable-layout: auto;\nsnippet tbl:f\n\ttable-layout: fixed;\nsnippet tal\n\ttext-align-last: ${1};\nsnippet tal:a\n\ttext-align-last: auto;\nsnippet tal:c\n\ttext-align-last: center;\nsnippet tal:l\n\ttext-align-last: left;\nsnippet tal:r\n\ttext-align-last: right;\nsnippet ta\n\ttext-align: ${1};\nsnippet ta:c\n\ttext-align: center;\nsnippet ta:l\n\ttext-align: left;\nsnippet ta:r\n\ttext-align: right;\nsnippet td\n\ttext-decoration: ${1};\nsnippet td:l\n\ttext-decoration: line-through;\nsnippet td:n\n\ttext-decoration: none;\nsnippet td:o\n\ttext-decoration: overline;\nsnippet td:u\n\ttext-decoration: underline;\nsnippet te\n\ttext-emphasis: ${1};\nsnippet te:ac\n\ttext-emphasis: accent;\nsnippet te:a\n\ttext-emphasis: after;\nsnippet te:b\n\ttext-emphasis: before;\nsnippet te:c\n\ttext-emphasis: circle;\nsnippet te:ds\n\ttext-emphasis: disc;\nsnippet te:dt\n\ttext-emphasis: dot;\nsnippet te:n\n\ttext-emphasis: none;\nsnippet th\n\ttext-height: ${1};\nsnippet th:a\n\ttext-height: auto;\nsnippet th:f\n\ttext-height: font-size;\nsnippet th:m\n\ttext-height: max-size;\nsnippet th:t\n\ttext-height: text-size;\nsnippet ti\n\ttext-indent: ${1};\nsnippet ti:-\n\ttext-indent: -9999px;\nsnippet tj\n\ttext-justify: ${1};\nsnippet tj:a\n\ttext-justify: auto;\nsnippet tj:d\n\ttext-justify: distribute;\nsnippet tj:ic\n\ttext-justify: inter-cluster;\nsnippet tj:ii\n\ttext-justify: inter-ideograph;\nsnippet tj:iw\n\ttext-justify: inter-word;\nsnippet tj:k\n\ttext-justify: kashida;\nsnippet tj:t\n\ttext-justify: tibetan;\nsnippet to+\n\ttext-outline: ${1:0} ${2:0} #${3:000};\nsnippet to\n\ttext-outline: ${1};\nsnippet to:n\n\ttext-outline: none;\nsnippet tr\n\ttext-replace: ${1};\nsnippet tr:n\n\ttext-replace: none;\nsnippet tsh+\n\ttext-shadow: ${1:0} ${2:0} ${3:0} #${4:000};\nsnippet tsh\n\ttext-shadow: ${1};\nsnippet tsh:n\n\ttext-shadow: none;\nsnippet tt\n\ttext-transform: ${1};\nsnippet tt:c\n\ttext-transform: capitalize;\nsnippet tt:l\n\ttext-transform: lowercase;\nsnippet tt:n\n\ttext-transform: none;\nsnippet tt:u\n\ttext-transform: uppercase;\nsnippet tw\n\ttext-wrap: ${1};\nsnippet tw:no\n\ttext-wrap: none;\nsnippet tw:n\n\ttext-wrap: normal;\nsnippet tw:s\n\ttext-wrap: suppress;\nsnippet tw:u\n\ttext-wrap: unrestricted;\nsnippet t\n\ttop: ${1};\nsnippet t:a\n\ttop: auto;\nsnippet va\n\tvertical-align: ${1};\nsnippet va:bl\n\tvertical-align: baseline;\nsnippet va:b\n\tvertical-align: bottom;\nsnippet va:m\n\tvertical-align: middle;\nsnippet va:sub\n\tvertical-align: sub;\nsnippet va:sup\n\tvertical-align: super;\nsnippet va:tb\n\tvertical-align: text-bottom;\nsnippet va:tt\n\tvertical-align: text-top;\nsnippet va:t\n\tvertical-align: top;\nsnippet v\n\tvisibility: ${1};\nsnippet v:c\n\tvisibility: collapse;\nsnippet v:h\n\tvisibility: hidden;\nsnippet v:v\n\tvisibility: visible;\nsnippet whsc\n\twhite-space-collapse: ${1};\nsnippet whsc:ba\n\twhite-space-collapse: break-all;\nsnippet whsc:bs\n\twhite-space-collapse: break-strict;\nsnippet whsc:k\n\twhite-space-collapse: keep-all;\nsnippet whsc:l\n\twhite-space-collapse: loose;\nsnippet whsc:n\n\twhite-space-collapse: normal;\nsnippet whs\n\twhite-space: ${1};\nsnippet whs:n\n\twhite-space: normal;\nsnippet whs:nw\n\twhite-space: nowrap;\nsnippet whs:pl\n\twhite-space: pre-line;\nsnippet whs:pw\n\twhite-space: pre-wrap;\nsnippet whs:p\n\twhite-space: pre;\nsnippet wid\n\twidows: ${1};\nsnippet w\n\twidth: ${1};\nsnippet w:a\n\twidth: auto;\nsnippet wob\n\tword-break: ${1};\nsnippet wob:ba\n\tword-break: break-all;\nsnippet wob:bs\n\tword-break: break-strict;\nsnippet wob:k\n\tword-break: keep-all;\nsnippet wob:l\n\tword-break: loose;\nsnippet wob:n\n\tword-break: normal;\nsnippet wos\n\tword-spacing: ${1};\nsnippet wow\n\tword-wrap: ${1};\nsnippet wow:no\n\tword-wrap: none;\nsnippet wow:n\n\tword-wrap: normal;\nsnippet wow:s\n\tword-wrap: suppress;\nsnippet wow:u\n\tword-wrap: unrestricted;\nsnippet z\n\tz-index: ${1};\nsnippet z:a\n\tz-index: auto;\nsnippet zoo\n\tzoom: 1;\n",t.scope="css"});(function(){window.require(["ace/snippets/css"],function(n){if(typeof module=="object"&&typeof exports=="object"&&module){module.exports=n}})})();
//# sourceMappingURL=css.js.map