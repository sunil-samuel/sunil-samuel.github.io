var home = {
	index: function() {
		$(".menu-items")
			.slicknav({
				label: "",
				closeOnClick: true,
				removeClasses: true,
				duration: 500,
				brand: "Sunil Samuel (<a href='https://github.com/sunil-samuel'>https://https://github.com/sunil-samuel</a>)"
			});
			
		$(".main-widget").load("pages/index.html");
	}
}