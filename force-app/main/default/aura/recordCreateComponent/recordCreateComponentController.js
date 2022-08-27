({
	getValueFromLwc : function(component, event, helper) {
        var result = event.getParam('value')
		component.set("v.recordId",result);
        //handleCreate(component, event, helper, result);
	},

    myAction : function(component, event, helper) 
       {
        helper.getList(component);
    },

    handleClick : function(component,event,helper){
        var objectName = event.getParam("value");
        component.set("v.oppname",objectName);
        console.log(objectName);


        var ObjList = component.get("c.checkRequiredField");
        ObjList.setParams
           ({
            strObjName: objectName
           });
           console.log(ObjList);
           ObjList.setCallback(this, function(data) 
                              {
                                  let fieldOptins = [];
                                  //component.set("v.requiredFieldList", data.getReturnValue());
                                    let fields = data.getReturnValue();
                                for(var key in fields){
                                    fieldOptins.push({value:fields[key], key:key}); //Here we are creating the array to show on UI.
                                }
                                    component.set("v.requiredFieldList", fieldOptins);
                                  
                              });
           $A.enqueueAction(ObjList);
        //componemt.set("v.oppname",objectName);
    },


    onChange: function (component, event, helper) {
        component.set("v.recNumber",component.find('select').get('v.value'));
        console.log(component.find('select').get('v.value') );

    },

    handleCreate : function (component, event, helper) {
        var objName = component.get("v.oppname")
        var accId = component.get("v.recordId") 
        var rec = component.get("v.recNumber")
        var data = component.find("inputs").map(input=>input.get("v.value"));
        var recordsToCreate = [];
        if(objName == 'Contact'){
            for(var i =0;i<rec;i++){
                var Contact = {LastName: data[0],AccountId : accId  };
                recordsToCreate.push(Contact);
                console.log(Contact);
                console.log(recordsToCreate);
            }
            var action = component.get("c.saveContact");
            action.setParams
            ({ 
                con: recordsToCreate  
            });
            
            console.log("Hiii");
            $A.enqueueAction(action);
        }
        if(objName == 'Lead'){
            for(var i =0;i<rec;i++){
                var Lead = {LastName: data[0],Company:data[2],AccountId : accId  };
                recordsToCreate.push(Lead);
                console.log(Lead);
                console.log(recordsToCreate);
            }
            var action = component.get("c.saveLead");
            action.setParams
            ({ 
                lead: recordsToCreate  
            });
            
            console.log("Hiii");
            $A.enqueueAction(action);
        }
        if(objName == 'Opportunity'){
            for(var i =0;i<rec;i++){
                var Opportunity = {Name: data[0],StageName:data[1],	CloseDate:data[2],ForecastCategoryName:data[3],AccountId : accId  };
                recordsToCreate.push(Opportunity);
                console.log(Opportunity);
                console.log(recordsToCreate);
            }
            var action1 = component.get("c.saveOpportunity");
            action1.setParams
            ({ 
                opp: recordsToCreate  
            });
            
            console.log("Hiii Oppor");
            $A.enqueueAction(action1);
        }
        component.set(component.find("inputs").set("v.value"),NULL);
        //alert("You clicked: " + event.getSource().get("v.label") + accId + rec + data);
    },

    getMessage : function(component, event) {
        var records1 = component.get("v.contacts");
        if (records1) {
            return records1;
        }
        return "";
    }
})