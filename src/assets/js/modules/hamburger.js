const hamburger = () => {
	const button = document.getElementById('js-hamburger');
	const account = document.getElementById('js-account');

	function handleHamburgerClick() {
		button.classList.toggle('active');
		account.classList.toggle('active');
	}

	button.addEventListener('click', handleHamburgerClick);

	if (module.hot) {
		module.hot.dispose(() => {
			hamburger.removeEventListener('click', handleHamburgerClick);
		});
	}
};

export default hamburger;
