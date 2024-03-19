import { LightningElement } from 'lwc';
export default class ConditionalButton extends LightningElement {
    show = 'true';
    handleClick(){
        this.show = !this.show;
    }
}