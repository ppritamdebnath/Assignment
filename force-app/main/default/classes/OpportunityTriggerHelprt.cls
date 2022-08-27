public with sharing class OpportunityTriggerHelprt {
    public static void showDetails(List <Opportunity> opportunity) {
        List<Opportunity> opp = new List<Opportunity>();
        Pricebook2 standardBook = [SELECT Id FROM Pricebook2 WHERE IsStandard = true];
       List<OpportunityLineItem> lines = new List<OpportunityLineItem>();
        PricebookEntry entry = [SELECT Id, UnitPrice FROM PricebookEntry WHERE Pricebook2Id = :standardBook.Id AND Product2.ProductCode = 'DEFAULT'];
        for(Opportunity o:opportunity){
           
           if(o.StageName == 'Closed/Won'){

               lines.add(new OpportunityLineItem(PricebookEntryId=entry.Id, UnitPrice=entry.UnitPrice, Quantity=1));
           }
           insert lines;
       }
    }
}