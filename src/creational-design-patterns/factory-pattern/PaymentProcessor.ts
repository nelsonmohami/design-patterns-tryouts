type PaymentMethodType = 'paypal' | 'stripe' | 'bank_transfer';

abstract class PaymentProcessor {
    
    constructor(protected readonly amount: number) {}

    abstract processPayment(): void;
}

class PayPalProcessor extends PaymentProcessor {
   
    processPayment(): void {
        console.log(`Processing payment of ${this.amount} using PayPal. \nThe fee is ${this.amount * 0.025}`);
    }
}

class StripeProcessor extends PaymentProcessor {
    processPayment(): void {
        console.log(`Processing payment of ${this.amount} using Stripe. \nThe fee is ${this.amount * 0.015}`);
    }
}

class BankTransferProcessor extends PaymentProcessor {
    processPayment(): void {
        console.log(`Processing payment of ${this.amount} using Bank Transfer. \nThe fee is ${this.amount * 0.01}`);
    }
}

class PaymentProcessorFactory {
    static createProcessor(paymentMethod: PaymentMethodType, amount: number): PaymentProcessor {
        switch (paymentMethod) {
            case 'paypal':
                return new PayPalProcessor(amount);
            case 'stripe':
                return new StripeProcessor(amount);
            case 'bank_transfer':
                return new BankTransferProcessor(amount);
            default:
                throw new Error(`Invalid payment method: ${paymentMethod}`);
        }
    }
}

export { PaymentProcessorFactory };
