import { LightningElement, track,api } from 'lwc';
import getRelatedAccount from '@salesforce/apex/AccountControler.getRelatedAccount';

export default class ChooseAccount extends LightningElement {
    @api getAccId;
    searchKey = '';
    searchKey2 = '';
    accountName= [];
    accounts;
    handleKeyChange(event) {
        this.searchKey = event.target.value;
        
        console.log(this.searchKey);
        if(this.searchKey && this.searchKey2)
            this.handleSearch();
    }
    handleKeyChange2(event) {

        this.searchKey2 = event.target.value;
        console.log(this.searchKey2);
        if(this.searchKey && this.searchKey2)
            this.handleSearch();
    }

    handleSearch() {
        console.log(this.searchKey + " STR "  +this.searchKey2)
        this.accounts = [];
        getRelatedAccount({ searchKey: this.searchKey , searchKey2: this.searchKey2 })
            .then((data) => {
                console.log("Data",data);
                this.accounts = data.map((record) => ({
                    value: record.Id,
                    label: record.Name
                }));
                this.error = undefined;
            })
            .catch((error) => {
                console.log(error);
            })
            
    }

    handleRecordSelected(event){
        const value = event.target.value;
        this.getAccId = event.target.value;
        window.console.log('getAccId ' + this.getAccId);
       const myCustomEventItem = new CustomEvent('myeventdemo',{
            detail: {value}
       });
       
       this.dispatchEvent(myCustomEventItem);
    }
}