sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
   "use strict";
   return UIComponent.extend("008_Component_Experiment_With_Binding.Component", {

	   metadata : {
			rootView: "008_Component_Experiment_With_Binding.view.Sample"
		},
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         
         // Create the object for binding:
			var jsObject = {
					recipient : {
						name: "Hello World"
					}
			};
			var jsonModel = new JSONModel(jsObject);
			this.setModel(jsonModel);
	}
   });
});