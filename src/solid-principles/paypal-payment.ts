import PaymentProcess from './payment-process'

export default class PaypalPayment extends PaymentProcess {
    constructor() {
        super('paypal')
    }

    public pay(amount: number): void {
        // return amount > 0
        console.log('You use your paypal account to apply a payment')
    }

    public getMethodName(): string {
        return this.methodName
    }
}