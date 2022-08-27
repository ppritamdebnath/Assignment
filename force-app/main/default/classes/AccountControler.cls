public with sharing class AccountControler {
    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccount(String accId) {
        
        return [SELECT Id,Name,(SELECT Id,Name,OwnerId,UserId__c,Picture_Url__c FROM Picture_Fields__r ) FROM Account WHERE Id =:accId];
    }

    @AuraEnabled
    public static list<Picture_Field__c> getRelatedList(Id recordId)
    {
        List<Picture_Field__c> conlist = [SELECT Id, Name,Picture_Url__c,Account__c FROM Picture_Field__c WHERE Account__c=: recordId ];
        return conlist;
    }

    @AuraEnabled(cacheable=true)
    public static list<Account> getRelatedAccount(String searchKey , String searchKey2){
        List<Account> listOfAccount = new List<Account>();
        listOfAccount = [SELECT Id,Name,Type,Create_Date__c
        FROM Account WHERE Type =:searchKey AND Create_Date__c =:searchKey2];
        return listOfAccount;
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(String searchKey) {
        return [
            SELECT Id, Name, Title, Phone, Email,AccountId
            FROM Contact
            WHERE AccountId =:searchKey
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Picture_Field__c> getPictureList(String searchKey) {
        return [
            SELECT Id,Name,Picture_Url__c,Account__c 
            FROM Picture_Field__c
            WHERE Account__c =:searchKey
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getSingleContact(String searchKey) {
        return [
            SELECT Id, Name, Title, Phone, Email,AccountId
            FROM Contact
            WHERE Id =:searchKey
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<String> getRelatedObjects() {
        List<String> listOfString = new List<String>();
        for ( ChildRelationship r: Account.SObjectType.getDescribe().getChildRelationships())
        {
            if(string.valueOf( r.getChildSObject() ) == 'Contact' || string.valueOf( r.getChildSObject() ) == 'Opportunity' || string.valueOf( r.getChildSObject() ) == 'Lead'){
                listOfString.add(string.valueOf( r.getChildSObject() ));
            }
            
        } 
        ///system.debug( string.valueOf( r.getChildSObject() ) );
	    system.debug('listOfString'+listOfString);
        return listOfString;
    }

    @AuraEnabled(cacheable=true)
    public static Map<String,String> checkRequiredField( String strObjName ) {
        
        SObjectType objType = Schema.getGlobalDescribe().get( strObjName );
        Map<String,String> mapOfFieldAndType = new Map<String,String>();
        Map < String, Schema.SObjectField > mapFields = objType.getDescribe().fields.getMap();
        List<String> listOfRequiredField = new List<String>();
        for( String strField : mapFields.keySet() ) {
            
            SObjectField field = mapFields.get( strField );
            Schema.DescribeFieldResult fieldResult = field.getDescribe();
            
            if ( !fieldResult.isNillable() && !fieldResult.isDefaultedOnCreate() ) {
                String fieldName = fieldResult.getLabel();
                listOfRequiredField.add(fieldName);
                Schema.DisplayType fielddataType = mapFields.get(strField).getDescribe().getType();
                mapOfFieldAndType.put(fieldName,String.valueOf(fielddataType));
                system.debug( fieldResult.getLabel()+ fielddataType  + 'is required.' );
            }
            
        }
        return mapOfFieldAndType;
    }

    @AuraEnabled
    public static List<Contact> saveContact (List<Contact> con) {
        system.debug(con);
        insert con;
        return con;
    }

    @AuraEnabled
    public static List<Lead> saveLead (List<Lead> lead) {

        insert lead;
        return lead;
    }

    @AuraEnabled
    public static List<Opportunity> saveOpportunity (List<Opportunity> opp) {

        insert opp;
        return opp;
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts() {
        
        return [SELECT Id, Name, Type, Rating, Phone, Website, AnnualRevenue FROM Account LIMIT 5];
    }


}