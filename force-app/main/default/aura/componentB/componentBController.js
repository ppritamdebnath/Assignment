({
    handleEvent : function(component, event, helper) {
        var name =event.getParam("message");// getting the value of event attribute
        console.log('name:::'+JSON.stringify(name));
        component.set("v.ParentAttribute",name); // Setting the value of parent attribute with event attribute value
    },

    fireComponentEvent1 : function(component, event, helper) {
        //var compEvents = component.getEvent("componentEventFired");// getting the Instance of event
        var messa = component.get("v.mess1");
        var compEvents1 = $A.get("e.c:communicationEvent");
        compEvents1.setParams({ 
            message1 : messa
        });// setting the attribute of event
        compEvents1.fire();// firing the event.
    }
})