({
    getAccountData : function(component) {        
        var action=component.get('c.getAllAccounts');        
        action.setCallback(this,function(response){   
            if(response.getState()=='SUCCESS'){
                component.set("v.acclist",response.getReturnValue());                
            }
        });
        $A.enqueueAction(action);        
    },
    
    convertListToCSV : function(component, sObjectList){
        if (sObjectList == null || sObjectList.length == 0) {
            return null;  
        }        
        var columnEnd = ',';
        var lineEnd =  '\n';
        // Get the CSV header from the list.
        var keys = new Set();
        sObjectList.forEach(function(record){
            Object.keys(record).forEach(function(key){
                if(component.get("v.exportWithId")){                    
                    keys.add(key);
                }
                else{
                    if(key!="Id")
                        keys.add(key);
                }
            });
        });        
        keys = Array.from(keys);
        var csvString = '';
        csvString += keys.join(columnEnd);
        csvString += lineEnd;
        for(var i=0; i < sObjectList.length; i++){
            var counter = 0;
            for(var sTempkey in keys) {
                var skey = keys[sTempkey];
                // add , after every value except the first.
                if(counter > 0){
                    csvString += columnEnd;
                }
                // If the column is undefined, leave it as blank in the CSV file.
                var value = sObjectList[i][skey] === undefined ? '' : sObjectList[i][skey];
                csvString += '"'+ value +'"';
                counter++;
            }
            csvString += lineEnd;
        }
        return csvString;
    },
    
    showToast:function(title,type,message){
        var toastEvent = $A.get("e.force:showToast");
        if(toastEvent){
            toastEvent.setParams({"title": title,"type": type,"message": message}).fire();
        }
        else{
            alert(message);
        }
    },
 })