(function () {
	var VENUE_TYPE_ORDER = [
		{ key: 'conference', label: 'Refereed Conference Publications' },
		{ key: 'journal', label: 'Journal Publications' },
		{ key: 'workshop', label: 'Refereed Workshop Publications' },
		{ key: 'poster', label: 'Posters and Demos' },
		{ key: 'patent', label: 'Patents' }
	];

	var TOPIC_ORDER = [
		'5G/6G Networks',
		'Demystifying Cellular Policies',
		'AR/VR',
		'Wi-Fi Networks',
		'Systems',
		'ML'
	];

	var PUBLICATIONS = window.PUBLICATIONS_DATA;

	function styleAcceptanceRate(text) {
		return text.replace(/acceptance rate ([\d.]+%)/i, '<span class="acc-rate">Acceptance rate $1</span>');
	}

	function card(pub) {
		var venueLine = '<strong>' + pub.venueLabel + '</strong>' + (pub.venueDetail ? ', ' + styleAcceptanceRate(pub.venueDetail) : '');
		var award = pub.note ? '<p class="caward">' + pub.note + '</p>' : '';
		var titleHtml = pub.paper
			? '<a target="_blank" rel="noopener" href="' + pub.paper + '">' + pub.title + '</a>'
			: pub.title;
		var datasetHtml = pub.dataset
			? '<p class="cdataset"><a target="_blank" rel="noopener" class="dataset-link" href="' + pub.dataset + '"><i class="fas fa-database"></i> ' + (pub.datasetLabel || 'Dataset') + '</a></p>'
			: '';
		return '<li><p class="ctitle">' + titleHtml + '</p>' +
			'<p class="cvenue">' + venueLine + '</p>' +
			'<p class="cmentor">' + pub.authors + '</p>' +
			datasetHtml +
			award + '</li>';
	}

	function renderList(pubs) {
		return '<ul class="card-list">' + pubs.map(card).join('') + '</ul>';
	}

	function renderGroupedView(groups) {
		var tabs = '<div class="sub-toggle-bar">' +
			'<button class="sub-toggle-btn active" data-group="all">All</button>' +
			groups.map(function (g) {
				return '<button class="sub-toggle-btn" data-group="' + g.key + '">' + g.label + ' (' + g.items.length + ')</button>';
			}).join('') +
			'</div>';
		var sections = groups.map(function (g) {
			return '<div class="cat-section" data-group="' + g.key + '">' +
				'<p class="category-label">' + g.label + ' <span class="cat-count">(' + g.items.length + ')</span></p>' +
				renderList(g.items) +
			'</div>';
		}).join('');
		return tabs + '<div class="cat-sections">' + sections + '</div>';
	}

	function renderByYear() {
		var years = [];
		PUBLICATIONS.forEach(function (p) { if (years.indexOf(p.year) === -1) years.push(p.year); });
		years.sort(function (a, b) { return b - a; });
		var groups = years.map(function (year, i) {
			return { key: 'y' + i, label: String(year), items: PUBLICATIONS.filter(function (p) { return p.year === year; }) };
		});
		return renderGroupedView(groups);
	}

	function renderByVenueType() {
		var groups = [];
		VENUE_TYPE_ORDER.forEach(function (entry, i) {
			var items = PUBLICATIONS.filter(function (p) { return p.venueType === entry.key; });
			if (items.length) groups.push({ key: 'v' + i, label: entry.label, items: items });
		});
		return renderGroupedView(groups);
	}

	function renderByTopic() {
		var groups = [];
		TOPIC_ORDER.forEach(function (topic, i) {
			var items = PUBLICATIONS.filter(function (p) { return p.topic === topic; });
			if (items.length) groups.push({ key: 't' + i, label: topic, items: items });
		});
		return renderGroupedView(groups);
	}

	function renderSelected() {
		var items = PUBLICATIONS.filter(function (p) { return p.selected; })
			.sort(function (a, b) { return a.selected - b.selected; });
		return renderList(items);
	}

	document.getElementById('pub-view-selected').innerHTML = renderSelected();
	document.getElementById('pub-view-year').innerHTML = renderByYear();
	document.getElementById('pub-view-topic').innerHTML = renderByTopic();
	document.getElementById('pub-view-venue').innerHTML = renderByVenueType();

	document.querySelectorAll('.toggle-btn[data-view]').forEach(function (btn) {
		btn.addEventListener('click', function () {
			document.querySelectorAll('.toggle-btn[data-view]').forEach(function (b) { b.classList.remove('active'); });
			document.querySelectorAll('.pub-view').forEach(function (v) { v.classList.remove('active'); });
			btn.classList.add('active');
			document.getElementById('pub-view-' + btn.getAttribute('data-view')).classList.add('active');
		});
	});

	document.querySelectorAll('.sub-toggle-bar').forEach(function (bar) {
		var sections = bar.nextElementSibling.querySelectorAll('.cat-section');
		bar.querySelectorAll('.sub-toggle-btn').forEach(function (btn) {
			btn.addEventListener('click', function () {
				bar.querySelectorAll('.sub-toggle-btn').forEach(function (b) { b.classList.remove('active'); });
				btn.classList.add('active');
				var group = btn.getAttribute('data-group');
				sections.forEach(function (section) {
					section.style.display = (group === 'all' || section.getAttribute('data-group') === group) ? '' : 'none';
				});
			});
		});
	});
})();
