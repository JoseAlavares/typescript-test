export default abstract class PaymentProcess {
    public methodName: string

    constructor(methodName: string) {
        this.methodName = methodName
    }

    abstract pay(amount: number): void
    abstract getMethodName(): string
}