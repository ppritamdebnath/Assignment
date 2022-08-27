public class Utility {
    
    public static void checkRequiredField( String strObjName ) {
        
        SObjectType objType = Schema.getGlobalDescribe().get( strObjName );
        Map < String, Schema.SObjectField > mapFields = objType.getDescribe().fields.getMap();
        
        for( String strField : mapFields.keySet() ) {
            
            SObjectField field = mapFields.get( strField );
            Schema.DescribeFieldResult fieldResult = field.getDescribe();
            
            if ( !fieldResult.isNillable() && !fieldResult.isDefaultedOnCreate() ) {
                system.debug( fieldResult.getLabel() + 'is required.' );
            }
            
        }
        
    }
    
}