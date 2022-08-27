public class HiApex {
	public static void fetchUsers() {
        String userId = UserInfo.getUserId();
        System.debug('Current User Id : ' +userId);
        List<User> LU = [SELECT Id,Name,(SELECT Id,Name,OwnerId,UserId__c,Picture_Url__c FROM Picture_Fields__r ) FROM User WHERE Id=:userId];
    	System.debug('LU' + LU);
    }
}