document.getElementById("theme-toggle").addEventListener("click", function () {
	var darkThemeLink = document.getElementById("dark-theme-link");

	if (darkThemeLink) {
		darkThemeLink.remove();
	} else {
		var link = document.createElement("link");
		link.id = "dark-theme-link";
		link.rel = "stylesheet";
		link.href = "assets/css/dark.css";
		document.head.appendChild(link);
	}
});
