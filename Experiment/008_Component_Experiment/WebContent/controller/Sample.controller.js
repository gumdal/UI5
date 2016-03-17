sap.ui.define ([
                "sap/ui/core/mvc/Controller"
		],
                function(Controller) {
	"use strict";
	return Controller.extend("008_Component_Experiment.controller.Sample", {
		onInit:function()
		{
			alert("Controller Initialized!");
		}
	});
});
