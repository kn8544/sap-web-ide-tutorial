/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"gitest/gittest/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});