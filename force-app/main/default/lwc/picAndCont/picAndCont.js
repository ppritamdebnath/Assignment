import { LightningElement, wire,api,track } from 'lwc';
import getContactList from '@salesforce/apex/AccountControler.getContactList';
import getPictureList from '@salesforce/apex/AccountControler.getPictureList';
export default class PicAndCont extends LightningElement {
    contactOptions;
    pictureList;
    error;
    recordId;
    @api searchKey1;
    @track accountId;
    handleChangeAction(event){
        this.accountId = event.detail;
        window.console.log('accountId ' + this.accountId);
        this.handleSearch();
      }
      handleSearch() {
        getContactList({ searchKey: this.accountId })
            .then((data) => {
                console.log("Under")
                this.contactOptions = data.map((record) => ({
                    value: record.Id,
                    label: record.Name
                }));
                console.log("this.contactOptions",+this.contactOptions.lebel);
                this.error = undefined;

                getPictureList({ searchKey: this.accountId })
                    .then((result) => {
                        console.log("Under1");
                        this.pictureList = result;
                        this.error = undefined;
                    })
            })
            
    }

    handleContactSelected(event) {

        this.searchKey1 = event.target.value;
        window.console.log('searchKey1 ' + this.searchKey1);
       const myCustomEventItem1 = new CustomEvent('select',{
            detail: this.searchKey1
       });
       this.dispatchEvent(myCustomEventItem1);
    }
        

        
}