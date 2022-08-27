({
    handleCreateAccount : function(component, event, helper) {
        component.find("picForm").submit();
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'Action Details',
            message: 'Picture Details Saved Successfully!!!!',
            duration:' 4000',
            key: 'info_alt',
            type: 'info',
            mode: 'dismissible'
        });
        toastEvent.fire();

    }
})