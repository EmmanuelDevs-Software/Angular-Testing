export class Calculator {
    
    public multiply(numberA:number, numberB:number):number{
        return numberA * numberB;
    }

    public divide(numberA:number, numberB:number):number{
        if(numberB === 0){
            return null;
        }
        return numberA / numberB;
    }
}
