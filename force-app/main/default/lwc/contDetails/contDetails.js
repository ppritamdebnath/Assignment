import { LightningElement, wire, api,track } from 'lwc';
import getSingleContact from '@salesforce/apex/AccountControler.getSingleContact';
export default class ContDetails extends LightningElement {
    @api recordId;
    @track contactId;
    contacts;

    showContact(event){
        this.contactId = event.detail;
        window.console.log('contactId ' + this.contactId);
        this.handleSearch();
      }

      handleSearch() {

        getSingleContact({ searchKey: this.contactId })
                    .then((result) => {
                        console.log("Under1");
                        this.contacts = result;
                        this.error = undefined;
                    })
            
    }


}