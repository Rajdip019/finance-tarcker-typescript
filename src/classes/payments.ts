import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter{
    recipient : string;
    details : string;
    amount : number;

    constructor(r: string , d: string, a:number){
        this.recipient = r;
        this.details = d;
        this.amount = a
    }
    format(){
        return`${this.recipient} is owed ₹${this.amount} for ${this.details}`;
    }
}