import { LightningElement, wire  } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import RECORD_SELECTED_CHANNEL from '@salesforce/messageChannel/Record_Selected__c';
export default class MlsSibling1 extends LightningElement {
    @wire(MessageContext)
    messageContext;
    message;
 
    handleChange(event){
        this.message = event.detail.value;
        let message1 = {message: this.message};
        publish(this.messageContext, RECORD_SELECTED_CHANNEL, message1);
    }
}