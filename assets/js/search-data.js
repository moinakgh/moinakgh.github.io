/* Sitewide search index. Publications are pulled live from window.PUBLICATIONS_DATA
   (assets/js/publications-data.js, loaded before this file on every page) so there's
   a single source of truth; everything else is hand-authored per page. */
(function () {
	var index = [
		{ title: 'About Moinak Ghoshal', section: 'Home', url: 'index.html', snippet: 'Postdoctoral Research Scientist, Columbia University. Research on network support for low-latency AR/VR and cloud-based gaming over 5G networks, and Internet measurement.' },

		{ title: 'Ph.D., Northeastern University', section: 'Education', url: 'education.html', snippet: "Dept. of Electrical and Computer Engineering, 2020–2026. Thesis: Dissecting 5G in the Wild: Performance, Coverage, and Support for Next-Gen Applications." },
		{ title: 'M.S., Northeastern University', section: 'Education', url: 'education.html', snippet: 'Electrical and Computer Engineering, 2020–2022. Thesis: Can 5G mmWave Support Multi-User AR?' },
		{ title: 'B.Tech, Maulana Abul Kalam Azad University of Technology', section: 'Education', url: 'education.html', snippet: 'Information Technology, 2013–2017.' },

		{ title: 'Research Assistant, Institute for Intelligent Networked Systems (INSI)', section: 'Experience', url: 'education.html', snippet: 'Northeastern University & University at Buffalo, January 2020 – August 2026. Advised by Dr. Dimitrios Koutsonikolas.' },
		{ title: 'Research Associate Intern, Hewlett Packard Labs', section: 'Experience', url: 'education.html', snippet: 'Milpitas, CA, May 2025 – April 2026.' },
		{ title: 'Research Intern, Futurewei Technologies', section: 'Experience', url: 'education.html', snippet: 'Addison, TX, May 2024 – September 2024.' },
		{ title: 'R&I Intern, InterDigital', section: 'Experience', url: 'education.html', snippet: 'Los Altos, CA, May 2023 – September 2023.' },
		{ title: 'R&D Engineer, Software, Keysight Technologies', section: 'Experience', url: 'education.html', snippet: 'Kolkata, India, August 2017 – January 2020.' },

		{ title: 'EECE 7374 · Fundamentals of Computer Networks', section: 'Teaching', url: 'teaching.html', snippet: 'Teaching Assistant, Northeastern University. Fall 2022, Spring 2022, Fall 2023, Fall 2024, Fall 2025.' },
		{ title: 'EECE 7364 · Mobile and Wireless Networks', section: 'Teaching', url: 'teaching.html', snippet: 'Teaching Assistant, Northeastern University. Spring 2025.' },
		{ title: 'CSE 489/589 · Modern Networking Concepts', section: 'Teaching', url: 'teaching.html', snippet: 'Teaching Assistant, University at Buffalo. Fall 2020.' },

		{ title: 'TPC Co-Chair, ACM S3 Workshop', section: 'Academic Service', url: 'teaching.html', snippet: 'ACM MobiCom 2025.' },
		{ title: 'Publicity Chair, ACM WiNTECH / MobiCom', section: 'Academic Service', url: 'teaching.html', snippet: 'ACM WiNTECH 2026, ACM MobiCom 2027.' },
		{ title: 'Journal & Conference Reviewing', section: 'Academic Service', url: 'teaching.html', snippet: 'IEEE/ACM ToN, IEEE TMC, Elsevier COMCOM, IEEE Networking Letters, IEEE COMMAG, IJCS, IEEE MILCOM, IEEE LCN, IEEE ICC, IEEE PIMRC.' },

		{ title: 'Best Community Paper Runner-Up', section: 'Awards & Honors', url: 'awards.html', snippet: 'ACM CoNEXT, 2025.' },
		{ title: 'Outstanding Ph.D. Research Award', section: 'Awards & Honors', url: 'awards.html', snippet: 'Northeastern University, College of Engineering, 2024.' },
		{ title: 'Best Dataset Award', section: 'Awards & Honors', url: 'awards.html', snippet: 'Passive and Active Measurement Conference (PAM), 2021.' },
		{ title: 'Travel/Conference Grant', section: 'Awards & Honors', url: 'awards.html', snippet: 'ACM SIGCOMM (2022), IEEE/IFIP NETWORKING (2024).' },
		{ title: 'Spot Award', section: 'Awards & Honors', url: 'awards.html', snippet: 'Keysight Technologies, Q4 2017, Q1 2018.' },

		{ title: 'Invited Talk: Dissecting 5G in the Wild', section: 'Talks', url: 'talks.html', snippet: 'Rensselaer Polytechnic Institute, TU Munich, Virginia Tech, and Columbia University, 2026.' },
		{ title: 'Invited Talks at Hewlett Packard Labs', section: 'Talks', url: 'talks.html', snippet: 'Replication: Performance of Cellular Networks on the Wheels; A First Large-Scale Study of Operational 5G Standalone Networks. December 2026.' },
		{ title: 'Conference & Workshop Presentations', section: 'Talks', url: 'talks.html', snippet: 'ACM MobiSys 2025 Rising Stars Forum, IFIP/IEEE NETWORKING 2024, ACM IMC 2023, MASCOTS 2023, IEEE CoG 2022, IEEE WoWMoM 2022, PAM 2022, ACM SIGCOMM 5G-MeMU 2022.' },

		{ title: 'Music', section: 'Fun', url: 'beyond-research.html', snippet: 'YouTube and SoundCloud.' }

		// { title: 'Gallery', section: 'Gallery', url: 'gallery.html', snippet: 'Photos from conferences, internships, and lab life — Ph.D. defense, awards, IMC, IFIP Networking, WoWMoM, HPE/Futurewei/InterDigital internships, and NU WiNS Lab outings.' }
	];

	(window.PUBLICATIONS_DATA || []).forEach(function (pub) {
		index.push({
			title: pub.title,
			section: 'Publications',
			url: 'publications.html',
			snippet: pub.venueLabel + (pub.venueDetail ? ', ' + pub.venueDetail : '') + ' · ' + pub.year
		});
	});

	window.SEARCH_INDEX = index;
})();
