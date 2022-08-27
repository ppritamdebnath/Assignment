import { LightningElement, track, api  } from 'lwc';
//import testFileJSON from './recordTableJESON.JSON';

export default class RecordTableJESON extends LightningElement {

    @track age;
    @track gender;
    @track type;
    @track place;
    accounts;
    //@track terFileData = testFileJSON();
    takeinputtype(event){
        console.log("Under");
        this.type = event.target.value;
        console.log(this.type);
    }
    takeinputgender(event){
        console.log("Under");
        this.gender = event.target.value;
        console.log(this.gender);
    }
    takeinputage(event){
        console.log("Under");
        this.age = event.target.value;
        console.log(this.age);
    }
    takeinputplace(event){
        console.log("Under");
        this.place = event.target.value;
        console.log(this.place);
    }
    handleClick(event){
        console.log(this.type);
        console.log(this.gender);
        console.log(this.age);
        console.log(this.place);
    }
}