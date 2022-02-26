document.addEventListener("DOMContentLoaded", function () {
	let hideElement = document.querySelector("#hide");

	if (hideElement) {
		let lastScrollTop = 0;

		window.addEventListener("scroll", function () {
			let scrollTop = window.scrollY;
			if (scrollTop < lastScrollTop) {
				hideElement.classList.remove("scrolled-down");
				hideElement.classList.add("scrolled-up");
			} else {
				hideElement.classList.remove("scrolled-up");
				hideElement.classList.add("scrolled-down");
			}
			lastScrollTop = scrollTop;
		});
	}
});
