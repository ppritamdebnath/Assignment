public with sharing class wrapperClassController {
    @AuraEnabled 
    public static wrapper method1( String strObjName){
        wrapper wrp = new wrapper();
   if(strObjName == 'Account'){
    List<Account> accList = [SELECT Id,Name,LastModifiedDate,Phone,	Email__c FROM Account];
    wrp.accountList = new List<Account>(accList);
   }
   else if(strObjName == 'Contact'){
    List<Contact> conList = [SELECT Id,Name,LastModifiedDate,Phone,Email FROM Contact LIMIT 10];
    wrp.contactList = new List<Contact>(conList);
   }
   else if(strObjName == 'Lead'){
    List<Lead> leadList = [SELECT Id,Name,LastModifiedDate,Phone,Email FROM Lead];
    wrp.leadsList = new List<Lead>(leadList);
   }
   else if(strObjName == 'Opportunity'){
    List<Opportunity> oppoList = [SELECT Id,Name,LastModifiedDate FROM Opportunity];
    wrp.opportunityList = new List<Opportunity>(oppoList);
   }
        return wrp;
    }


    
    public class wrapper{
        @AuraEnabled public List<Account> accountList;
        @AuraEnabled public List<Contact> contactList;
        @AuraEnabled public List<Lead> leadsList;
        @AuraEnabled public List<Opportunity> opportunityList;
    }  
}