$$('body') {
 
$$('#full'){
insert_bottom("footer", class: "_footer") {
inject_bottom( read("footer.html") )

$$("._footersocial"){
insert("img" , src: asset("images/ls-footer-social.jpg"))
}

}

remove("//div[@id='bottomcap']")
remove("//div[@id='footerarea']")



}
}
