import Invoice from "./invoice"
import InvoicePay from "./interfaces/invoice-pay"
import PaymentProcess from "./payment-process"

export default class WaterInvoicePay extends Invoice implements InvoicePay {
    constructor(paymentProcess: PaymentProcess, invoiceID: number, amount: number) {
        super(paymentProcess, invoiceID, amount)
    }

    public pay(amountToPay: number): boolean {
        console.log(this.paymentProcess.pay(amountToPay))
        if (!!this.paid) throw new Error('This invoice was paided')
        if (this.amount < amountToPay) throw new Error('The pay is greater than the amount of the invoice')

        if (this.amount == 0) this.paid = true
        this.amount -= amountToPay

        return true
    }

}