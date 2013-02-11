$$('body') {

$$("#full"){
add_class("_header")
}

$$("._header"){
inject_top( read("header.html") )
}

$$("#mw_header") {
attributes(data-ur-set: "tabs", data-ur-closeable: "true")

insert("div", class: "_icons_bar") {
insert("div", class: "sprites-white-search", data-ur-tabs-component: "button", data-ur-tab-id: "search"){
wrap("span")
}

insert("div", class: "sprites-white-info", data-ur-tabs-component: "button", data-ur-tab-id: "info"){
wrap("span")
}

insert("div", class: "sprites-white-cart", data-ur-tabs-component: "button", data-ur-tab-id: "cart"){
wrap("span")
}

}

$$("#mw_logo"){
insert("img", src: asset("images/logo.png"))
}

$$("._info_tab, ._cart_tab"){
insert("img", src: asset("images/tab_bar.jpg"))
}

}

$$(".container-inline"){
attributes(data-ur-tabs-component: "content", data-ur-tab-id: "search")
insert("span", class: "_search_tab"){
insert("img", src: asset("images/tab_bar.jpg"))
}

move_to("//div[@id='mw_bottom']", "bottom")
add_class("_search")

$$(".form-text"){
attribute("value", "Search")
}



}
}