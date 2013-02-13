$$("body") {
add_class("_search")
remove(".//br")
table_dump(".//table")
remove(".//div[@id='header']")

$$("#shop_menu > div"){
add_class("_baller1")
}
$$("#bottommenu"){
add_class("_bottommenu")

$$(" > div"){
	add_class("_baller2")
}
}

$$(".tabs"){
add_class("hidden")
}
$$("#mainnav .content .menu .first"){
attribute("class", "_topnav")
}

$$("#mainnav"){
insert_after("div", class: "_ditto" )
}



$$("._ditto"){
 insert_javascript("breadcrumbs2();")
 inject(">> ")

}

$$("#mainbodysub > h1:first-of-type"){
copy_to("//div[contains(concat(' ', @class, ' '), ' _ditto')]")
add_class("_search_title")
}


$$("._ditto > h1"){
name() {
    set("span")
  }
}

$$("._topnav"){
inner("<div>")
attribute("data-ur-set", "toggler")

$$("div:first-of-type"){
inject("Site Menu")
attribute("data-ur-toggler-component", "button")
insert_bottom("span", class: "_icon_category")
}

insert("div", class: "_main_menu_drop"){
attribute("data-ur-toggler-component", "content")
}


}

$$("#mainnav .content .menu"){
remove("./li[contains(concat(' ', @class, ' '), ' leaf ')]")
}

$$("#shopcontent + *"){
remove()
}


$$("#shop_menu"){
move_to("//div[contains(concat(' ', @class, ' '), ' _main_menu_drop')]")
$$("._baller1") {
attribute("data-ur-set", "toggler")

$$("h2"){
attributes(class: "_category_title", 
data-ur-toggler-component: "button")
wrap_text_children("div"){
insert("span", class: "_icon_category")
}

}

$$("ul") {
	attribute("data-ur-toggler-component", "content")
	
$$("> li") {
attribute("class", "_subcategory")

$$("> a"){
insert_bottom("span", class: "_icon_subcategory")
}
	
}
}
}
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

$$("._section_title"){
insert_after("div", class: "clear")
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



