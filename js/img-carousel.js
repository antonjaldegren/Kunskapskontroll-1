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
	$("main").append(
		`<div class="modal">
			<img src="./assets/exp-detail-${imgIndex}.jpg" alt="Image from project" />
		</div>`
	);
	$(".modal").on("click", () => {
		$(".modal").remove();
	});
});
