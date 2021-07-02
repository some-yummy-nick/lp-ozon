const dropdown = () => {
	function handleClickDropdown(item) {
		item.classList.toggle('active');
	}

	function handleClick(e) {
		if (e.target.closest('.dropdown')) {
			handleClickDropdown(e.target.closest('.js-dropdown'));
		} else {
			document.querySelectorAll('.js-dropdown').forEach(item => {
				item.classList.remove('active');
			});
		}
	}

	document.addEventListener('click', handleClick);
	if (module.hot) {
		module.hot.dispose(() => {
			document.removeEventListener('click', handleClick);
		});
	}
};

export default dropdown;
