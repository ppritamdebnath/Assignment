({
    myAction : function(component, event, helper) 
       {
           var PicList = component.get("c.getRelatedList");
           PicList.setParams
           ({
               recordId: component.get("v.recordId")
           });
           console.log(PicList);
           PicList.setCallback(this, function(data) 
                              {
                                  
                                  component.set("v.PictureList", data.getReturnValue());
                                  console.log("data.getReturnValue()[0].Id",+data.getReturnValue()[0].Id)
                                  component.set("v.picId",data.getReturnValue()[0].id);
                                  
                              });
           $A.enqueueAction(PicList);
    },
    
    PerformAction : function(component, event, helper) {
        component.set("v.openmodel",true);
        
        console.log("OpenModal"+ component.get("v.openmodel"));

    },
    closeModal:function(component,event,helper){    
        var cmpTarget = component.find('editDialog');
        var cmpBack = component.find('overlay');
        $A.util.removeClass(cmpBack,'slds-backdrop--open');
        $A.util.removeClass(cmpTarget, 'slds-fade-in-open');
        component.set('v.openmodel',false);
        
    }
       
   })