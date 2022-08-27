import { api, LightningElement } from 'lwc';

 export default class RecordEditForm extends LightningElement {
  @api picturedata;

     handleSuccess(){
         if(this.recordId !== null){
             this.dispatchEvent(new ShowToastEvent({
                     title: "SUCCESS!",
                     message: "New record has been created.",
                    variant: "success",
                 }),  
            );    
          }
     } 
    }