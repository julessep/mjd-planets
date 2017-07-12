'use strict';

var saturn = Object.create(null);

let saturnInfo =
	`<div class="planet">
		<h1>Saturn</h1>
		<p>First Record: 8th Century BC by Assyrians</p>
		<p>Mass: 568,319,000,000,000,000 billion kg</p>
		<p>Equitorial Diameter: 12,756 km</p>
		<p>Distance from Sun: 1.429 billion km</p>
		<p>Surface Temperature: -139 °C</p>
		<p>Known Moons: 62</p>
		<p>Orbiting Satellites: 1</p>
	</div>`;

	saturn.outputTo = function(domElement) {
		domElement.append(saturnInfo);
	};

module.exports = saturn;