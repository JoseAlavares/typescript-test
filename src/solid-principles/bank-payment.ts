import PaymentProcess from './payment-process'

export default class BankPayment extends PaymentProcess {
    constructor() {
        super('bank')
    }

    public pay(amount: number): void {
        // return amount > 0
        console.log('You use your bank to apply a payment')
    }

    public getMethodName(): string {
        return this.methodName
    }
}