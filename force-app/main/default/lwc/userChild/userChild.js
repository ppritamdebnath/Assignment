/*import { LightningElement, wire } from 'lwc';
import getUserList from '@salesforce/apex/UserChieldControler.fetchUsers';
import getPicture from '@salesforce/apex/UserChieldControler.fetchPictures';
export default class UserChild extends LightningElement {
    @wire(getUserList) users;
    @wire(getPicture) pictures;
}*/




import { LightningElement, track, wire } from 'lwc';
import getUserList from '@salesforce/apex/UserChieldControler.fetchUsers';
export default class UserChild extends LightningElement {

@track multiple = false;
@track users ;

@wire(getUserList) 
wiredUsers({
    error,
    data
}) {
        if (data) {
            this.users = data;
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

}