(function () {
	function buildModal() {
		var overlay = document.createElement('div');
		overlay.id = 'search-overlay';
		overlay.className = 'search-overlay';
		overlay.innerHTML =
			'<div class="search-modal">' +
				'<div class="search-input-row">' +
					'<i class="fas fa-search"></i>' +
					'<input type="text" id="search-input" placeholder="Search the site..." autocomplete="off">' +
					'<button id="search-close" aria-label="Close search">&times;</button>' +
				'</div>' +
				'<ul id="search-results" class="search-results"></ul>' +
			'</div>';
		document.body.appendChild(overlay);
		return overlay;
	}

	function filterIndex(query) {
		var q = query.trim().toLowerCase();
		if (!q) return [];
		var index = window.SEARCH_INDEX || [];
		return index.filter(function (item) {
			return (item.title + ' ' + item.section + ' ' + item.snippet).toLowerCase().indexOf(q) !== -1;
		}).slice(0, 20);
	}

	function renderResults(results, container) {
		if (!results.length) {
			container.innerHTML = '<li class="search-empty">No matches found.</li>';
			return;
		}
		container.innerHTML = results.map(function (item) {
			return '<li><a href="' + item.url + '">' +
				'<div class="search-result-section">' + item.section + '</div>' +
				'<div class="search-result-title">' + item.title + '</div>' +
				'<div class="search-result-snippet">' + item.snippet + '</div>' +
			'</a></li>';
		}).join('');
	}

	document.addEventListener('DOMContentLoaded', function () {
		var overlay = buildModal();
		var input = document.getElementById('search-input');
		var results = document.getElementById('search-results');
		var trigger = document.getElementById('search-trigger');

		function openSearch() {
			overlay.classList.add('open');
			input.value = '';
			results.innerHTML = '';
			setTimeout(function () { input.focus(); }, 0);
		}

		function closeSearch() {
			overlay.classList.remove('open');
		}

		if (trigger) trigger.addEventListener('click', openSearch);
		document.getElementById('search-close').addEventListener('click', closeSearch);
		overlay.addEventListener('click', function (e) {
			if (e.target === overlay) closeSearch();
		});

		input.addEventListener('input', function () {
			renderResults(filterIndex(input.value), results);
		});

		document.addEventListener('keydown', function (e) {
			var isTyping = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA';
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
				e.preventDefault();
				if (overlay.classList.contains('open')) { closeSearch(); } else { openSearch(); }
			} else if (e.key === '/' && !isTyping) {
				e.preventDefault();
				openSearch();
			} else if (e.key === 'Escape' && overlay.classList.contains('open')) {
				closeSearch();
			}
		});
	});
})();
