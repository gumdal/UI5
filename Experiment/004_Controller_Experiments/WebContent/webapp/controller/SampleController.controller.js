sap.ui.define ([
                "sap/ui/core/mvc/Controller"],
                function(Controller) {
	"use strict";
	return Controller.extend("sap.ui.004_Controller_Experiments.webapp.controller.SampleController", {
		onSayHi:function(){
			alert ("Hi!");
		}
	});
});