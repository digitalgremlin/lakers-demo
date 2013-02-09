$$("body") {
add_class("_content")
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

$$("#mainnav"){
insert_after("div", class: "_ditto", "Shop by Player  >>  Dwight Howard" )

}
$$("#mainarea"){
add_class("_shop")
}

$$("#product-image"){
insert_before("div", class: "_product_head")
}

$$("#productinfo"){
$("./h2[1]"){
add_class("_item_title")
move_to("//div[contains(concat(' ', @class, ' '), ' _product_head ')]", "top")
}
$$("#priceblack"){
add_class("_item_price")
move_to("//div[contains(concat(' ', @class, ' '), ' _product_head ')]", "bottom")
}
}
$$("#product-image"){
add_class("_product_image")
}


$$("._product_image > p"){
$$("> a"){
inner("TAP IMAGE TO ENLARGE")
}
}

$$("._product_image > div"){
remove()
}

$$(".product-body"){
add_class("_product_body")
}

$$("._product_body"){
$$("> p"){
remove()
}
insert_top("p", "Details:")
}


$$("._product_body"){
insert_after("div", class: "_share"){
inject_top("Share:")
insert("div", class: "_share_bar"){
insert("div", class: "sprites-ls-share-facebook")
insert("div", class: "sprites-ls-share-twitter")
insert("div", class: "sprites-ls-share-google")
insert("div", class: "sprites-ls-share-pinit")
insert("div", class: "sprites-ls-share-linkedin")
}
}
}
$$(".sprites-ls-share-facebook"){
add_class("_first")
}

$$(".meta"){
add_class("_meta")
}
$$("._meta"){
$$("ul"){
insert_top("li", "Tags:")
}
}

$$("#cartButtons .add-to-cart form > *:first-child"){
add_class("_add_to_cart")
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


}