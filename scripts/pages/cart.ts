$$("body") {
add_class("_cart")
remove(".//br")
table_dump(".//table")
remove(".//div[@id='header']")
remove(".//div[@id='breadcrumbholder']")
remove(".//div[contains(concat(' ', @class, ' '), ' more-product-images ')]")

$$("#bottommenu > div"){
	add_class("_baller2")
}

$$("#mainnav .content .menu .first"){
attribute("class", "_topnav")
}

$$("#mainnav"){
insert_after("div", class: "_ditto" )

}

$$("._ditto"){
 inject("<a href='/' >Shop Main </a> &nbsp;>>")
}

$$("._topnav"){
inner("<div>")
attribute("data-ur-set", "toggler")

$$("div"){
inject("Site Menu")
attribute("data-ur-toggler-component", "button")
insert_bottom("span", class: "_icon_category")
}

move_here("//div[contains(concat(' ', @class, ' '), ' _ditto ')]"){
insert_bottom("span", class: "_icon_subcategory")
wrap("span"){
attribute("data-ur-toggler-component", "content")
}

}
} 

$$("#mainnav .content .menu"){
remove("./li[contains(concat(' ', @class, ' '), ' leaf ')]")
}

$$("#shopcontent + *"){
remove()
}

$$("#shop_menu"){
remove()
}

$$(".promos"){
remove()
}

$$("#mainarea"){
add_class("_shop")
}

$$("#bottommenu"){

$$("._baller2") {
attribute("data-ur-set", "toggler")

$$("h2"){
attributes(class: "_categoryfooter",
data-ur-toggler-component: "button")

wrap_text_children("div"){
insert("span", class: "_icon_category")
}

}
$$("ul") {		
attribute("data-ur-toggler-component", "content")

$$("> li") {
attribute("class", "_subcategoryfooter")

$$("> a"){

insert_bottom("span", class: "_icon_subcategory")
}

}
}
}
}

$$("#edit-panes-quotes-quote-button"){
attribute("value") {
    value() { set("calculate") }
  }
}

$$("#edit-panes-cert-apply"){
attribute("value") {
    value() { set("apply code") }
  }
}

$$("ul"){
add_class("_listhome")
}

$$("#bottom_col2 ul"){
add_class("_other")
}

$$("#bottom_col3 ._listhome > li"){
move_to("//*[contains(concat(' ', @class, ' '), ' _other ')]")
}

$$("#bottom_col3"){
remove()
}



}