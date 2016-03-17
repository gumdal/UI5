sap.ui.define ([
                "sap/ui/core/mvc/Controller"
		],
                function(Controller) {
	"use strict";
	return Controller.extend("008_Component_Experiment_With_Binding.controller.Sample", {
		onInit:function()
		{

		},
		showModelObject:function()
		{
			alert ("Show method invoked!");
			this.getView().byId("TextLabel").setText(this.getView().getModel().getProperty("/recipient/name"));
		}
	});
});
