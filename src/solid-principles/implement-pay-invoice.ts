import WaterInvoicePay from "./water-invoice-pay"
import Account from "./account"
import PaypalPayment from "./paypal-payment"
import BankPayment from "./bank-payment"

const account = new Account(1119010, 200000)
const waterInvoicePay = new WaterInvoicePay(new PaypalPayment(), 109289, 1500)
// const waterInvoicePay = new WaterInvoicePay(new BankPayment(), 109289, 1500)
const accountData = account.getAccountData()

if (accountData.balance && accountData.balance > waterInvoicePay.amount) {
    // You can pay the invoice
    const amountToPay = waterInvoicePay.amount
    waterInvoicePay.pay(amountToPay)
    // waterInvoicePay.pay(100)
    account.retire(amountToPay)
    console.log('Datos de la cuenta', account.getAccountData())
    console.log('Saldo pendiente en la factura', waterInvoicePay.amount)
    console.log(`La factura: ${waterInvoicePay.amount == 0 ? 'si esta pagada' : 'no esta pagada'}`)
} 
