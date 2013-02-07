$$('body') {
 add_class("_bodynew")
 $$("#full"){
 add_class("_header")
 }
 $$("._header"){
 inject_top( read("header.html") )
 }
 $$("#mw_header") {
insert("div", class: "_icons_bar") {
insert("div", class: "sprites-search")
insert("div", class: "sprites-white-info")
insert("div", class: "sprites-white-cart")
}
}
 }