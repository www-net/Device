const servicesSlides = document.querySelectorAll(".services-item");
const servicesControls = document.querySelectorAll(".services-button");

let servicesSlideIndex = 0;
showServiceSlides(servicesSlideIndex);

for (let i =0; i < servicesControls.length; i++ ) {
    servicesControls[i].addEventListener("click", function () {
        showServiceSlides(i);
    });
}

function showServiceSlides(n) {
	for (let i = 0; i < servicesSlides.length; i++) {
		if (servicesSlides[i].classList.contains("services-item-current")) {
			servicesSlides[i].classList.remove("services-item-current");
		}
	}

	for (let i = 0; i < servicesControls.length; i++) {
		if (servicesControls[i].classList.contains("services-button-current")) {
			servicesControls[i].classList.remove("services-button-current");
		}
	}

	servicesSlides[n].classList.add("services-item-current");
	servicesControls[n].classList.add("services-button-current");
}
