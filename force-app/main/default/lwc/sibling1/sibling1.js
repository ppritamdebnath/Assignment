import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners,fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
export default class Sibling1 extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    valueGotFromB = '';
 

  sendDataToComponentB(event) {
    fireEvent(this.pageRef ,'carselected', event.target.value);
  }



    connectedCallback(){
      registerListener('carselected1', this.diplaySelectedCar, this);
    }
  
    disconnectedCallback() {
      unregisterAllListeners(this);
    }
  
    diplaySelectedCar(carName) {
      this.valueGotFromB = carName;
    }
}