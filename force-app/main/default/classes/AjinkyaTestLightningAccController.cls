public with sharing class AjinkyaTestLightningAccController 
{
    @AuraEnabled
    public static list<Picture_Field__c> getRelatedList(Id recordId)
    {
        List<Picture_Field__c> Conlist = [Select id, name,Account__c from Picture_Field__c where Account__c=: recordId ];
        return Conlist;
    }
}