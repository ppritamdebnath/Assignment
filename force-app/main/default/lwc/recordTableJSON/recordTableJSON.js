import { LightningElement, track, wire  } from 'lwc';
//import getAccount from '../accountData.JSON';

export default class RecordTableJESON extends LightningElement {

    @track age;
    @track gender;
    @track type;
    @track place;
    fiterdAccount = [];
    //@wire(getAccount)
     accounts = [
        {
            Id : 'Acc1',
            Name: 'Wheelworks',
            Type: 'Hot',
            Age: 'Below 20',
            Gender: 'Male',
            Place: '3'
        },
        {
            Id : "Acc2",
            Name: "Wheelworks1",
            Type: "Cold",
            Age: "More Than 25",
            Gender: "Male",
            Place: "2"
        },
        {
            Id : "Acc3",
            Name: "Wheelworks2",
            Type: "Normal",
            Age: "20-25",
            Gender: "Female",
            Place: "1"
        },
        {
            Id : "Acc4",
             Name: "Wheelworks3",
             Type: "Hot",
             Age: "20-25",
             Gender: "Female",
             Place: "3"
         },
         {
            Id : "Acc5",
             Name: "Wheelworks4",
             Type: "Cold",
             Age: "20-25",
             Gender: "Male",
             Place: "2"
         },
         {
            Id : "Acc6",
             Name: "Wheelworks5",
             Type: "Normal",
             Age: "20-25",
             Gender: "Male",
             Place: "1"
         },
         {
            Id : "Acc7",
             Name: "Wheelworks6",
             Type: "Hot",
             Age: "20-25",
             Gender: "Female",
             Place: "3"
         },
         {
            Id : "Acc8",
             Name: "Wheelworks7",
             Type: "Cold",
             Age: "20-25",
             Gender: "Female",
             Place: "2"
         },
         {
            Id : "Acc9",
             Name: "Wheelworks8",
             Type: "Normal",
             Age: "20-25",
             Gender: "Male",
             Place: "1"
         },
         {
            Id : "Acc10",
             Name: "Wheelworks9",
             Type: "Hot",
             Age: "20-25",
             Gender: "Male",
             Place: "3"
         },
         {
            Id : "Acc11",
             Name: "Wheelworks10",
             Type: "Cold",
             Age: "Below 20",
             Gender: "Female",
             Place: "2"
         },
         {
            Id : "Acc12",
             Name: "Wheelworks11",
             Type: "Normal",
             Age: "More Than 25",
             Gender: "Female",
             Place: "1"
         },
         {
            Id : "Acc13",
             Name: "Wheelworks12",
             Type: "Hot",
             Age: "20-25",
             Gender: "Male",
             Place: "3"
         },
         {
            Id : "Acc14",
             Name: "Wheelworks13",
             Type: "Cold",
             Age: "More Than 25",
             Gender: "Male",
             Place: "2"
         },
         {
            Id : "Acc15",
             Name: "Wheelworks14",
             Type: "Normal",
             Age: "20-25",
             Gender: "Female",
             Place: "1"
         }
    ];
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
        var result = this.accounts.filter(eachAccount => {
            return ( eachAccount.Type == this.type && eachAccount.Gender == this.gender && eachAccount.Place == this.place && eachAccount.Age == this.age) 
        });
        console.log(result);
        this.fiterdAccount = result;
    }

    connectedCallback() {
        
    }

    

}