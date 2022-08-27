({
    doInit : function(component, event, helper) {
    
           var accIdFromVf=component.get("v.AccIDFromVfPage");
           component.set("v.AccIDFromVfPage1", accIdFromVf);
           //alert('Id of record from Vf page'+accIdFromVf);
    }
   })