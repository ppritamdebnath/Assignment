import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners,fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
export default class Sibling2 extends LightningElement {
    valueGotFromA = '';
    @wire(CurrentPageReference) pageRef1;
    connectedCallback(){
      registerListener('carselected', this.diplaySelectedCar, this);
    }
  
    disconnectedCallback() {
      unregisterAllListeners(this);
    }
  
    diplaySelectedCar(carName) {
      this.valueGotFromA = carName;
    }

  

  sendDataToComponentA(event) {
    fireEvent(this.pageRef1 ,'carselected1', event.target.value);
  }
}