public with sharing class UserChieldControler {
    @AuraEnabled(cacheable=true)
    public static List<User> fetchUsers() {
        String userId = UserInfo.getUserId();
        System.debug('Current User Id : ' +userId);
        List<User> listOfUsers = [SELECT Id,Name,(SELECT Id,Name,OwnerId,UserId__c,Picture_Url__c FROM Picture_Fields__r ) FROM User WHERE Id=:userId];
        return listOfUsers;
    }
}