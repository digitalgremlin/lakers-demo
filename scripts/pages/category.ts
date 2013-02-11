$$("body") {
add_class("_category")
remove(".//br")
table_dump(".//table")
remove(".//div[@id='header']")

$$("#bottommenu"){
add_class("_bottommenu")

$$(" > div"){
	add_class("_baller2")
}

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

$$(".view-content > div"){

$$(".views-field-field-image-cache-fid"){
add_class("_item_image")
}

$$(".views-field-title"){
add_class("_item_title")
move_to("..//div[@class='field-content']")
}

$$(".views-field-sell-price"){
add_class("_item_price")
move_to("..//div[@class='field-content']")
}

}

$$("#shopcontent"){
add_class("_shop")
}

$$(".views-row"){
add_class("_rows")
}

$$(".item-list"){
add_class("_paging")
}

$$("#mainarea"){
insert_after("div", class: "_clear")
}

$$("#mainbodysub .title"){
add_class("_section_title")
}

$$("._bottommenu"){

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



