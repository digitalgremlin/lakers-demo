
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

$$("._topnav a"){
inner() {
    replace("Home", "Site Menu") 
  }
  insert_bottom("span", class: "_icon_category")
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



$$("#mainnav"){
insert_after("div", class: "_ditto" )

}

$$("._ditto"){

insert_javascript(" breadcrumbs();")
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

}



