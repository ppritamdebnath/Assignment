({
    getList : function(cmp) {
        var action = cmp.get("c.getRelatedObjects");
        console.log("action" + action);
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                 //cmp.set("v.ObjectList", response.getReturnValue());
                 let objects = response.getReturnValue().map((record) => ({
                    value: record,
                    label: record
                }));
                cmp.set("v.ObjectList", objects);

            }else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
     }
})