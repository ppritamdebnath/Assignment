({
    fireComponentEvent : function(component, event, helper) {
        //var compEvents = component.getEvent("componentEventFired");// getting the Instance of event
        var messa = component.get("v.mess");
        var compEvents = $A.get("e.c:communicationEvent");
        compEvents.setParams({ 
            message : messa
        });// setting the attribute of event
        compEvents.fire();// firing the event.
    },
    handleEvent1 : function(component, event, helper) {
        var name =event.getParam("message1");// getting the value of event attribute
        console.log('name:::'+JSON.stringify(name));
        component.set("v.ParentAttribute1",name); // Setting the value of parent attribute with event attribute value
    },
})