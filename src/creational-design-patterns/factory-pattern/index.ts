import { PaymentProcessorFactory } from "./PaymentProcessor";

const FactoryPattern = () => {
    console.log('********** Factory Pattern **********');

    const paypalPaymentProcessor = PaymentProcessorFactory.createProcessor('paypal', 120);
    const stripePaymentProcessor = PaymentProcessorFactory.createProcessor('stripe', 100);
    const bankTransferPaymentProcessor = PaymentProcessorFactory.createProcessor('bank_transfer', 130);
 
    console.log(paypalPaymentProcessor.processPayment());
    console.log(stripePaymentProcessor.processPayment());
    console.log(bankTransferPaymentProcessor.processPayment());

    console.log('********** End of Factory Pattern **********');
}

export default FactoryPattern;