'use strict';

var mars = Object.create(null);

let marsInfo =
	`<div class="planet">
			<h1>Mars</h1>
			<p>First Record: 2nd Millenium BC</p>
			<p>Mass: 641,693,000,000,000 billion kg</p>
			<p>Equitorial Diameter: 120,536 km</p>
			<p>Distance from Sun: 227,940,000 km</p>
			<p>Atmosphere: mainly carbon dioxide</p>
			<p>Known Moons: 2</p>
			<p>Orbiting Satellites: 6</p>
	</div>`;

	mars.outputTo = function(domElement) {
		domElement.append(marsInfo);
	};

module.exports = mars;