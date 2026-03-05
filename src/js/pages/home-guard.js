(() => {
	try {
		const introSeen = window.sessionStorage.getItem('godella_intro_seen');
		if (!introSeen) {
			window.location.replace('intro.html');
		}
	} catch (error) {
	}
})();
