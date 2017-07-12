'use strict';

var uranus = Object.create(null);

let uranusInfo =
	`<div class="planet">
		<h1>Uranus</h1>
		<p>First Record: March 13th 1781 by William Herschels</p>
		<p>Mass: 86,810,300,000,000,000 billion kg</p>
		<p>Equitorial Diameter: 51,118 km</p>
		<p>Distance from Sun: 2.871 billion km</p>
		<p>Surface Temperature: -197 °C</p>
		<p>Known Moons: 27</p>
		<p>Orbiting Satellites: None</p>
	</div>`;

	uranus.outputTo = function(domElement) {
		domElement.append(uranusInfo);
	};

module.exports = uranus;