import PaymentProcess from "./payment-process"

export default abstract class Invoice {
    protected readonly paymentProcess: PaymentProcess
    public invoiceID: number
    public amount: number
    public paid: boolean

    constructor(paymentProcess: PaymentProcess, invoiceID: number, amount: number) {
        this.paymentProcess = paymentProcess
        this.invoiceID = invoiceID
        this.amount = amount
        this.paid = false
    }
}