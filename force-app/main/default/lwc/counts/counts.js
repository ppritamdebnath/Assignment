import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import RECORD_SELECTED_CHANNEL from '@salesforce/messageChannel/Record_Selected__c';
export default class Counts extends LightningElement {
    publisherMessage = '';
    subscription = null;
 
    @wire(MessageContext)
    messageContext;
 
    connectedCallback() {
        this.handleSubscribe();
    }
 
    handleSubscribe() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.messageContext, RECORD_SELECTED_CHANNEL, (message) => {
            console.log(message.message);
            this.publisherMessage = message.message;
            //this.ShowToast('Success', message.message, 'success', 'dismissable');
        });
    }
 
    // ShowToast(title, message, variant, mode){
    //     const evt = new ShowToastEvent({
    //         title: title,
    //         message:message,
    //         variant: variant,
    //         mode: mode
    //     });
    //     this.dispatchEvent(evt);
    // }
}