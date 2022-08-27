({
    doInit : function(component, event, helper){
        component.set("v.sObjectName", 'Account');

    //     var action = component.get("c.fetchRecordType");
    //     action.setCallback(this, function(response){
    //        var state = response.getState();
    //        if(state === "SUCCESS")
    //        {
    //             var response = response.getReturnValue();
    //             component.set("v.recordType1", response);  
    //        }
    //        else if(state === "ERROR")
    //        {
    //         var error = response.getError();
    //         if(error)
    //         {
    //             console.log("error"+error);
    //         }
    //        }
    //    });
    //      $A.enqueueAction(action);
    },
    handleSubmit : function(component, event, helper) {
        //var recrdTypeId = $A.get("$Label.c.Customer_Account");
        // var recrdTypeId= component.get("v.recordType1")
        // component.set("v.recordType", recrdTypeId);
        var action = component.get("c.fetchRecordType");
        action.setCallback(this, function(response){
           var state = response.getState();
           if(state === "SUCCESS")
           {
                var response = response.getReturnValue();
                component.set("v.recordType", response);  
           }
           else if(state === "ERROR")
           {
            var error = response.getError();
            if(error)
            {
                console.log("error"+error);
            }
           }
       });
         $A.enqueueAction(action);
    }
})