window.setTimeout(() => {
	document.body.classList.add('intro-exit');
}, 1600);

window.setTimeout(() => {
	try {
		window.sessionStorage.setItem('godella_intro_seen', '1');
	} catch (error) {
	}
	window.location.href = 'home.html';
}, 1700);
