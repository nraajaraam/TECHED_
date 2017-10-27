jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 POHeader in the list
// * All 3 POHeader have at least one POItem

sap.ui.require([
	"sap/ui/test/Opa5",
	"development/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"development/test/integration/pages/App",
	"development/test/integration/pages/Browser",
	"development/test/integration/pages/Master",
	"development/test/integration/pages/Detail",
	"development/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "development.view."
	});

	sap.ui.require([
		"development/test/integration/MasterJourney",
		"development/test/integration/NavigationJourney",
		"development/test/integration/NotFoundJourney",
		"development/test/integration/BusyJourney",
		"development/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});