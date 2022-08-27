({
    // myAction : function(component, event, helper) {

    // },

    doInit : function(component, event, helper){
        var childCmp = component.find("showViewDetails");
        var records = childCmp.GetMessageFromChildMethod();
        component.set("v.recordList", records);
    }
})