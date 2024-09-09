document.getElementById("theme-toggle").addEventListener("click", function () {
	var darkThemeLink = document.getElementById("dark-theme-link");
	var body = document.body;

	if (darkThemeLink) {
		darkThemeLink.remove();
		body.classList.remove("dark-theme");
	} else {
		var link = document.createElement("link");
		link.id = "dark-theme-link";
		link.rel = "stylesheet";
		link.href = "assets/css/dark.css";
		document.head.appendChild(link);
		body.classList.add("dark-theme");
	}
});
