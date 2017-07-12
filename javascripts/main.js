'use strict';

let $ = require("jquery");

let domElement = $("#domElement");

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