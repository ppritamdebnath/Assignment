public with sharing class recordTypeControler {
    @AuraEnabled
    public static Id fetchRecordType () {

        Id recordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('Customer Account').getRecordTypeId();
        //system.debug('devRecordTypeId' + recordTypeId);
        return recordTypeId;
    }
}