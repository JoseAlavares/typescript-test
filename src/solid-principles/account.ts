import PaymentProcess from './payment-process'

export default class Account {
    // private paymentProcess: PaymentProcess
    public accountID: number
    public balance: number

    constructor(accountID: number, balance: number) {
        // this.paymentProcess = paymentProcess
        this.balance = balance
        this.accountID = accountID
    }

    public getAccountData(): any {
        return {
            id: this.accountID,
            balance: this.balance
        }
    }

    public deposit(amount: number): void {
        if (amount <= 0) throw new Error('The amount cant be less or equal to cero')

        this.balance += amount
    }

    public retire(amount: number): boolean {
        if (amount > this.balance) throw new Error('You cant retire this amount from your account your balance is less than the amount')

        this.balance -= amount
        return true
    }
}