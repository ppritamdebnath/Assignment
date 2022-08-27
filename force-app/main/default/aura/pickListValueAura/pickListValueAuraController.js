({
	
    doInit: function(component, event, helper) {        
        helper.getPicklistValues(component, event);
    },
     
    
    //handle Industry Picklist Selection
    handleOnChange : function(component, event, helper) {
        var industry = component.get("v.lead");
        component.set("v.pickListValue", industry);
        //alert(industry);
    }

})