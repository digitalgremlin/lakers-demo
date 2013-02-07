# Place holder/example file
$$("body") {
add_class("_home")
remove(".//br")
table_dump(".//table")
remove(".//div[@id='headlines']")
remove(".//div[@id='shopcontent']")
remove(".//div[@class='promos']")

$$("#shop_menu > div"){

	add_class("baller1")
}

$$("#bottommenu > div"){

	add_class("baller2")
}

$$("ul"){
add_class("_listhome")
}

$$("#shop_menu"){
	$$(".baller1") {
	attribute("data-ur-set", "toggler")
	$$("h2"){
	attributes(class: "_category", 
	data-ur-toggler-component: "button")
	wrap_text_children("div")
	}
		$$("ul") {
			attribute("data-ur-toggler-component", "content")
	$$("> li") {
	attribute("class", "_subcategory")
	}
		}
	}
}

$$("#bottommenu"){
	$$(".baller2") {
	attribute("data-ur-set", "toggler")
	$$("h2"){
	attributes(class: "_categoryfooter",
	data-ur-toggler-component: "button")
	wrap_text_children("div")
	}
		$$("ul") {		
		attribute("data-ur-toggler-component", "content")
	$$("> li") {
	attribute("class", "_subcategory")
	}
		}
	}
}

$$("h2"){
add_class("_navhome")
}
}