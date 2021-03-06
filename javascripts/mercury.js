'use strict';

var mercury = Object.create(null);

let mercuryInfo =
	`<div class="planet">
		<h1>Mercury</h1>
		<p>First Record: 14th Century BC by Assyrian astronomers</p>
		<p>Mass: 330,104,000,000,000 billion kg</p>
		<p>Equitorial Diameter: 4,879 km</p>
		<p>Distance from Sun: 4.498 billion km</p>
		<p>Surface Temperature: -197 °C</p>
		<p>Known Moons: None</p>
		<p>Orbiting Satellites: 1</p>
	</div>`;

	mercury.outputTo = function(domElement) {
		domElement.append(mercuryInfo);
	};

module.exports = mercury;