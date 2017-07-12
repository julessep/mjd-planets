'use strict';

var earth = Object.create(null);

let earthInfo =
	`<div class="planet">
		<h1>Earth</h1>
		<p>First Record: A long time ago by Earthlings.</p>
		<p>Mass: 5,972,190,000,000,000 billion kg</p>
		<p>Equitorial Diameter: 12,756 km</p>
		<p>Distance from Sun: 149.6 million km</p>
		<p>Surface Temperature: -88 to 58° C</p>
		<p>Known Moons: 1</p>
		<p>Orbiting Satellites: 31</p>
	</div>`;

	earth.outputTo = function(domElement) {
		domElement.append(earthInfo);
	};

module.exports = earth;