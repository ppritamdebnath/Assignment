({
    loadCountries: function (component, event, helper) {
        var action = component.get("c.fetchAccount");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS') {
                component.set('v.countries', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
});