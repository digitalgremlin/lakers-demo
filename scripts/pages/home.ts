# Place holder/example file
$$("body") {
add_class("_home")
remove(".//br")
table_dump(".//table")
remove(".//div[@id='headlines']")
remove(".//div[@id='shopcontent']")
remove(".//div[@class='promos']")
$$("#rightcolumn"){
add_class("_hidden")
}

$$("#shop_menu > div"){

	add_class("_baller1")
}

$$("#bottommenu > div"){

	add_class("_baller2")
}

$$("ul"){
add_class("_listhome")
}

$$("#container"){
insert_top("div", class: "_banner_bar"){
insert("div", class: "_facebook_social"){
inject_top("<a href='http://www.facebook.com/pages/LakersStorecom/139157679446876' >"){

insert("img", src: asset("images/ls-facebook-icon.png")){
add_class("_social")
}
}

}
}
}
$$("#shop_menu"){
	$$("._baller1") {
	attribute("data-ur-set", "toggler")
	$$("h2"){
	attributes(class: "_category", 
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

$$("h2"){
add_class("_navhome")
}
remove(".//div[@id='logo']")
remove(".//div[@id='mainnav']")
remove(".//div[@id='header_right']")

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