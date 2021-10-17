const sliderSlides = document.querySelectorAll(".slider-item");
const sliderControls = document.querySelectorAll(".toggle-button");

let slideIndex = 0;
showSlides(slideIndex);

for (let i =0; i < sliderControls.length; i++ ) {
    sliderControls[i].addEventListener("click", function () {
        showSlides(i);
    });
}

function showSlides(n) {
	for (let i = 0; i < sliderSlides.length; i++) {
		if (sliderSlides[i].classList.contains("slider-current")) {
			sliderSlides[i].classList.remove("slider-current");
		}
	}

	for (let i = 0; i < sliderControls.length; i++) {
		if (sliderControls[i].classList.contains("toggle-current")) {
			sliderControls[i].classList.remove("toggle-current");
		}
	}

	sliderSlides[n].classList.add("slider-current");
	sliderControls[n].classList.add("toggle-current");
}
