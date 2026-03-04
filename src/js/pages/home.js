document.addEventListener('DOMContentLoaded', () => {
	const track = document.querySelector('.contenedor_carrusel');

	if (!track) {
		return;
	}

	let slides = Array.from(track.children);

	if (slides.length < 2) {
		return;
	}

	const firstClone = slides[0].cloneNode(true);
	firstClone.setAttribute('aria-hidden', 'true');
	track.appendChild(firstClone);

	slides = Array.from(track.children);

	let currentIndex = 0;
	const intervalMs = 5500; // MODIFICA ESTE VALOR (milisegundos entre imágenes)
	const transitionMs = 600;

	const goToSlide = () => {
		track.style.transform = `translateX(-${currentIndex * 100}%)`;
	};

	setInterval(() => {
		currentIndex += 1;
		track.style.transition = `transform ${transitionMs}ms ease`;
		goToSlide();

		if (currentIndex === slides.length - 1) {
			setTimeout(() => {
				track.style.transition = 'none';
				currentIndex = 0;
				goToSlide();
			}, transitionMs);
		}
	}, intervalMs);
});
