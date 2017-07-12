'use strict';

var venus = Object.create(null);

let venusInfo =
	`<div class="planet">
		<h1>Venus</h1>
		<p>First Record: 14th Century BC by Babylonian astronomers</p>
		<p>Mass: 4,867,320,000,000,000 billion kg</p>
		<p>Equitorial Diameter: 12,104 km</p>
		<p>Distance from Sun: 108.2 million km</p>
		<p>Surface Temperature: 462° C</p>
		<p>Known Moons: None</p>
		<p>Orbiting Satellites: 1</p>
	</div>`;

	venus.outputTo = function(domElement) {
		domElement.append(venusInfo);
	};

module.exports = venus;