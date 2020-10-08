sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
], function(Controller, MessageToast) {
    "use strict";

    return Controller.extend("test1234.controller.Main", {
        onInit: function(oEvent){

        },

    onSelectionChanged: function (oEvent) {
        var oSegment = oEvent.getParameter("segment");
        MessageToast.show("The selection changed: " + oSegment.getLabel() + " " + ((oSegment.getSelected()) ? "selected" : "not selected"));
    }
    });
});
