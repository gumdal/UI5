sap.ui.define([
   "sap/ui/core/UIComponent"
], function (UIComponent) {
   "use strict";
   return UIComponent.extend("008_Component_Experiment.Component", {

	   metadata : {
			rootView: "008_Component_Experiment.view.Sample"
		},
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
	}
   });
});