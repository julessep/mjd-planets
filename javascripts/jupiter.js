'use strict';

var jupiter = Object.create(null);

let jupiterInfo =
	`<div class="planet">
		<h1>Jupiter</h1>
		<p>First Record: 7th or 8th Century BC by Babylonian astronomers</p>
		<p>Mass: 1,898,130,000,000,000,000 billion kg</p>
		<p>Equitorial Diameter: 142,984 km</p>
		<p>Distance from Sun: 778.5 million km</p>
		<p>Surface Temperature: -108°C</p>
		<p>Known Moons: 67</p>
		<p>Orbiting Satellites: 1</p>
	</div>`;

	jupiter.outputTo = function(domElement) {
		domElement.append(jupiterInfo);
	};

module.exports = jupiter;