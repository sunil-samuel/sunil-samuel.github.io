var home = {
	brand: "Sunil Samuel (<a href='https://github.com/sunil-samuel'>https://https://github.com/sunil-samuel</a>)",
	index: function() {
		$(".menu-items").slicknav({
			label: "",
			closeOnClick: true,
			removeClasses: false,
			duration: 100,
			brand: home.brand
		});
		//
		// Check if this URL has a hash inside it.
		var mainUrl = location.href;
		var index = mainUrl.indexOf("#");
		if (index >= 0) {
			var mainUrl = mainUrl.substring(index+1);
			$(".main-widget").load(mainUrl);
		} else {
			$(".main-widget").load("pages/index.html");
		} { }
		$("a.menu-ref").off("click").on("click", function() {
			var url = $(this).attr("href");
			url = url.replaceAll("#", "");
			$(".main-widget").load(url);
			$(".menu-items").slicknav("close");
			return false;
		});
	}
}