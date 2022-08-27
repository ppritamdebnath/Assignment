({
    doInIt : function(component, event, helper) {
        //console.log("v.childValue");
        // var OName = component.get("!v.childValue");
        // console.log(OName);
    
},

getEvents : function(component, event, helper) {

    component.set('v.columns', [
        {label: 'Opportunity name', fieldName: 'Name', type: 'text', editable: true, typeAttributes: { required: true }},
        {label: 'Last Modified Date', fieldName: 'LastModifiedDate', type: 'Date', typeAttributes: { currencyCode: 'USD'}, editable: true, typeAttributes: { required: true } }
    ]);

    component.set('v.columns1', [
        {label: 'Name', fieldName: 'Name', type: 'text', editable: true, typeAttributes: { required: true }},
        {
            label: 'Phone', fieldName: 'Phone', type: 'Phone', editable: true
        },
        {label: 'Email', fieldName: 'Email', type: 'Email', editable: true },
         {label: 'Last Modified Date', fieldName: 'LastModifiedDate', type: 'Date', typeAttributes: { currencyCode: 'USD'}, editable: true, typeAttributes: { required: true } }
    ]);

    component.set('v.columnsForAccount', [
        {label: 'Name', fieldName: 'Name', type: 'text', editable: true, typeAttributes: { required: true }},
        {
            label: 'Phone', fieldName: 'Phone', type: 'Phone', editable: true
        },
        {label: 'Email', fieldName: 'Email__c', type: 'Email', editable: true },
         {label: 'Last Modified Date', fieldName: 'LastModifiedDate', type: 'Date', typeAttributes: { currencyCode: 'USD'}, editable: true, typeAttributes: { required: true } }
    ]);

    component.set('v.columnsForLead', [
        {label: 'Name', fieldName: 'Name', type: 'text', editable: true, typeAttributes: { required: true }},
        {
            label: 'Phone', fieldName: 'Phone', type: 'number', editable: true
        },
        {label: 'Email', fieldName: 'Email', type: 'Email', editable: true },
         {label: 'Last Modified Date', fieldName: 'LastModifiedDate', type: 'Date', typeAttributes: { currencyCode: 'USD'}, editable: true, typeAttributes: { required: true } }
    ]);
    var evtValue = event.getParam("parentVar");
    component.set("v.childValue",evtValue);
    console.log("evtValue" + evtValue);

    var action = component.get("c.method1");
    action.setParams
    ({
     strObjName: evtValue
    });
       action.setCallback(this, function(response){
           var state = response.getState();
           if(state === "SUCCESS")
           {
    var response = response.getReturnValue();
    component.set("v.accountList", response.accountList); 
    component.set("v.contactList", response.contactList); 
    component.set("v.leadList", response.leadsList);  
    component.set("v.opportunityList", response.opportunityList);  
           }
           else if(state === "ERROR")
           {
            var error = response.getError();
            if(error)
            {
                console.log("error"+errors);
            }
           }
       });
         $A.enqueueAction(action);
     
},

updateSelectedText : function(component, event, helper){
        
    var selectedRows = event.getParam('selectedRows'); 
    var setRows = [];
    for ( var i = 0; i < selectedRows.length; i++ ) {
        
        setRows.push(selectedRows[i]);


    }
    component.set("v.selectedAccts", setRows);
    
},
getMessage : function(component, event) {
    var records1 = component.get("v.selectedAccts");
    if (records1) {
        return records1;
    }
    return "";
}
})