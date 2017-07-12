'use strict';

var neptune = Object.create(null);

let neptuneInfo =
	`<div class="planet">
		<h1>Neptune</h1>
		<p>First Record: September 23rd 1846</p>
		<p>Mass: 102,410,000,000,000,000 billion kg</p>
		<p>Equitorial Diameter: 49,528 km</p>
		<p>Distance from Sun: 4.498 billion km</p>
		<p>Surface Temperature: -201 °C</p>
		<p>Known Moons: 14</p>
		<p>Orbiting Satellites: None</p>
	</div>`;

	neptune.outputTo = function(domElement) {
		domElement.append(neptuneInfo);
	};

module.exports = neptune;