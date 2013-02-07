$$('body') {
 add_class("_bodynew")
 $$("#full"){
 add_class("_header")
 }
 $$("._header"){
 inject_top( read("header.html") )
 }
 }