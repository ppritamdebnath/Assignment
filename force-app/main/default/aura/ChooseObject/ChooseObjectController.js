({
    onChange: function (component, event, helper) {
        //alert(component.find('select').get('v.value') + ' Is Selected Object.');
        var appEvent = $A.get("e.c:ParentChildEvent"); 
        console.log(component.find('select').get('v.value'));
        appEvent.setParams({"parentVar" : component.find('select').get('v.value')});
        appEvent.fire(); 
        //console
    },
    showSelectedName : function(component, event, helper) {
    
    var childCmp = component.find("childComponent");
    var records = childCmp.GetMessageFromChildMethod();
    component.set("v.recordList", records);
}
    
})