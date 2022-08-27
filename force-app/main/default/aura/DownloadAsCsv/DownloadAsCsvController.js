({
    doInit : function (component, event, helper) {      
        helper.getAccountData(component);     
    },
    
    downloadSelectedCase :function(component, event, helper){
        var recordsList=component.get("v.acclist");
        var csv = helper.convertListToCSV(component, recordsList);
        if (csv == null){return;}
        // Create a temporal <a> html tag to download the CSV file
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_self';
        hiddenElement.download ='AccountExportData.csv';;
        document.body.appendChild(hiddenElement);
        // using click() js function to download csv file
        hiddenElement.click();
    },
    
   
 })