(function () {
	var page = document.body.getAttribute('data-page') || 'home';

	var nav = [
		{ id: 'home', label: 'Home', href: 'index.html' },
		{ id: 'publications', label: 'Publications', href: 'publications.html' },
		{ id: 'education', label: 'Education & Experience', href: 'education.html' },
		{ id: 'talks', label: 'Talks', href: 'talks.html' },
		{ id: 'teaching', label: 'Teaching & Service', href: 'teaching.html' },
		{ id: 'awards', label: 'Awards & Honors', href: 'awards.html' },
		// { id: 'gallery', label: 'Gallery', href: 'gallery.html' },
		{ id: 'beyond', label: 'Fun', href: 'beyond-research.html' }
	];

	var navHtml = nav.map(function (item) {
		var cls = item.id === page ? ' class="active"' : '';
		return '<a href="' + item.href + '"' + cls + '>' + item.label + '</a>';
	}).join('');

	var savedTheme = localStorage.getItem('theme') || 'dark';
	var initialIcon = savedTheme === 'light' ? 'fa-sun' : 'fa-moon';

	document.write(
		'<header class="topbar">' +
			'<div class="topbar-inner">' +
				'<nav class="top-nav">' + navHtml + '</nav>' +
				'<div class="topbar-actions">' +
					'<button id="search-trigger" class="search-trigger" title="Search (Ctrl/Cmd K)" aria-label="Search">' +
						'<i class="fas fa-search"></i>' +
					'</button>' +
					'<button id="theme-toggle" class="theme-toggle" title="Switch between light and dark theme" aria-label="Switch between light and dark theme">' +
						'<i class="fas ' + initialIcon + '"></i>' +
					'</button>' +
				'</div>' +
			'</div>' +
		'</header>'
	);

	document.getElementById('theme-toggle').addEventListener('click', function () {
		var isLight = document.documentElement.classList.toggle('light-theme');
		localStorage.setItem('theme', isLight ? 'light' : 'dark');
		this.querySelector('i').className = 'fas ' + (isLight ? 'fa-sun' : 'fa-moon');
	});

	window.addEventListener('DOMContentLoaded', function () {
		var footer = document.createElement('p');
		footer.className = 'footer-note';
		footer.textContent = 'Last updated: September 2026';
		document.body.appendChild(footer);
	});
})();
