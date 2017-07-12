'use strict';

let $ = require("jquery");
// let Handlebars = require('hbsfy/runtime');

let domElement = $("#domElement");

// let planetsTemplate = require('../templates/planets.hbs');
// $(document).ready( function(){
// 	$.ajax({
// 		url: "data/planets.json"
// 	})
// 	.done( function(planets){
// 		printPlanets(planets);
// 		console.log('hi');
// 	})
// 	.fail( function(error){
// 		console.log('!', error.responseText);
// 	});
// });

// function printPlanets(planets) {
// 	$("#domElement").append(planetsTemplate(planets));
// }

let planetsPrint = {
	mercury: require("./mercury"),
	venus: require("./venus"),
	earth: require("./earth"),
	mars: require("./mars"),
	jupiter: require("./jupiter"),
	saturn: require("./saturn"),
	uranus: require("./uranus"),
	neptune: require("./neptune")
};

planetsPrint.mercury.outputTo(domElement);
planetsPrint.venus.outputTo(domElement);
planetsPrint.earth.outputTo(domElement);
planetsPrint.mars.outputTo(domElement);
planetsPrint.jupiter.outputTo(domElement);
planetsPrint.saturn.outputTo(domElement);
planetsPrint.uranus.outputTo(domElement);
planetsPrint.neptune.outputTo(domElement);