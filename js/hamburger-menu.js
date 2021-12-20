$(".hamburger-menu").on("click", () => {
	$(".slide-in-menu").toggleClass("menu-open");
	$(".top-bar").toggleClass("tilt-down");
	$(".middle-bar").toggleClass("hide");
	$(".bottom-bar").toggleClass("tilt-up");
});
