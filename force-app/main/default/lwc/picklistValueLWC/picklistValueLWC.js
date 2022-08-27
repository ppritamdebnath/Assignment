import { LightningElement, wire} from 'lwc';
 
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
 
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
 
import Opportunity_OBJECT from '@salesforce/schema/Opportunity';
 
import StageName_FIELD from '@salesforce/schema/Opportunity.StageName';
 
 
export default class PicklistValueLWC extends LightningElement {
    StageValue ='';
    picListValue= '';
 
    // getting the default record type id, if you dont' then it will get master
 
    @wire(getObjectInfo, { objectApiName: Opportunity_OBJECT })
 
    opportunityMetadata;
 
    // now retriving the StageName picklist values of Opportunity
 
    @wire(getPicklistValues,
 
        {
 
            recordTypeId: '$opportunityMetadata.data.defaultRecordTypeId', 
 
            fieldApiName: StageName_FIELD
 
        }
 
    )
    OpportunityPicklist;
 
    // display the selected picklist value
  
  
    handleChange(event) {
 
        this.StageValue = event.detail.value;
        this.picklistVal = this.StageValue;
      
          this.picListValue = this.StageValue ;
       
       
    }
}