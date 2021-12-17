let imgIndex = 1;

function setImg() {
	$(".img-indicator-container svg").removeClass("current");
	$(`.img-indicator-${imgIndex}`).addClass("current");
	$(".img-container img").attr("src", `./assets/exp-detail-${imgIndex}.jpg`);
}

$(".left svg").on("click", () => {
	imgIndex === 1 ? (imgIndex = 5) : imgIndex--;
	setImg();
});

$(".right svg").on("click", () => {
	imgIndex === 5 ? (imgIndex = 1) : imgIndex++;
	setImg();
});

$(".img-container img").on("click", () => {
	$(".modal").css("display", "flex");
	$(".modal img").attr("src", `./assets/exp-detail-${imgIndex}.jpg`);
});

$(".modal").on("click", () => {
	$(".modal").css("display", "none");
});
