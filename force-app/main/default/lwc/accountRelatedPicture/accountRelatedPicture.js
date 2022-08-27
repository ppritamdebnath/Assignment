import { LightningElement,wire,track,api } from 'lwc';
import fetchAccount from '@salesforce/apex/AccountControler.fetchAccount';
export default class AccountRelatedPicture extends LightningElement {
    @track multiple = false;
    searchKey = '';
    @track accounts ;
    @api recordId;
    @track isShowModal = false;
    @wire(fetchAccount,{accId:'$recordId'})
    wiredUsers({
        error,
        data
    }) {
            if (data) {
                this.accounts = data;
                console.log(data);
                console.log(JSON.stringify(data, null, '\t'));
                
                data.forEach(function (item, key) {
                    console.log(key); 
                    console.log(item); 
                });
                
            } else if (error) {
                this.error = error;
            }
        }

        showModalBox(event) {  
            this.isShowModal = true;

            let account = this.accounts.find(({Id}) => Id ===  event.currentTarget.dataset.id);
            let pictureData = account.Picture_Fields__r.find(({Id}) => Id ===  event.currentTarget.dataset.value);
            this.searchKey=pictureData;
            console.log("SearchKey"+JSON.stringify(this.searchKey));
        }
    
        hideModalBox() {
            this.isShowModal = false;
        }


    }