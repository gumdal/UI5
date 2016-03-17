sap.ui.define([
               "sap/ui/core/mvc/Controller",
               "sap/m/MessageToast",
               "sap/ui/model/json/JSONModel"
               ],
               function (Controller, MessageToast, JSONModel)
               {
					"use strict";
					return Controller.extend("006_JSON_Model_Binding_Experiment.controller.Binding",{
						onInit:function()
						{
					         // set data model on view
							var oData = {
									recipient:{
										name: "Json Data"
									}
							};
							var oDataModel = new JSONModel (oData);
							this.getView().setModel(oDataModel);
						},
						onSayHi:function()
						{
							MessageToast.show ("Hello world!");
						},
						
						stringFormatter:function(inString)
						{
							var outputString = "Hello " + inString;
							return outputString;
						}
					});
               }

);