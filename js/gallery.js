
console.log("Loading");
console.log($("#thumb"));

var gal = function() {
	console.log("Starting");
    var files = {'jpg':64};
    var html = "", src;
	for (var ext in files){
	     for (var i = 0; i < files[ext]; i++){
	         img_src = "imgs/gallery/gallery\u0020(" + (i+1) + ")." + ext;
	         thumb_src = "imgs/gallery/thumbs/gallery\u0020(" + (i+1) + ").thumb." + ext;
	         // html += '<li><a href="#"><img src="'+ src +'" width=100 height=100/></a></li>';
	         html += '<div id="thumb"><a href="' + img_src + '" class="highslide" onclick="return hs.expand(this)"><img src="' + thumb_src + '" title="Click to enlarge" /></a></div>';
	     }
	    $(".highslide-gallery").prepend(html );
	}
};
gal();
// $(document).ready(); ​
/*
*/