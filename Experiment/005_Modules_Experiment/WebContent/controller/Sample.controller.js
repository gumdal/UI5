sap.ui.define ([
                "sap/ui/core/mvc/Controller",
                "sap/m/MessageToast"
                ],
                function(Controller, MessageToast) {
	"use strict";
	return Controller.extend("sap.ui.005_Modules_Experiments.controller.Sample", {
		onSayHi:function()
		{
	         MessageToast.show("Hello World");
		}
	});
	
//	return Controller.extend("sap.ui.004_Controller_Experiments.webapp.controller.SampleController", {
//		onSayHi:function(){
//			alert ("Hi!");
//		}
//	});

//	return Controller.extend("", {
//		
//	});

});