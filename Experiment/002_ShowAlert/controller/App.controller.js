sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("sap.ui.demo.wt.controller.App", {
                             onShowAlert : function () {
                             alert ("Showing alert");
                             }
	});
//              onSayHi : function(){
//              alert ("Hi");
//              }
});
