jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"development/test/integration/NavigationJourneyPhone",
		"development/test/integration/NotFoundJourneyPhone",
		"development/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});