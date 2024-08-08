import Currency from "./3-currency";
export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }
    get amount() {
        return this._amount;
    }
    set amount(val) {
        if (typeof(val) !== "number") {
            throw new TypeError("amount must be a number");
        }
        this._amount = val;
    }
    get currency() {
        return this._currency;
    }
    set currency(val) {
        this._currency = val;
    }
    displayFullPrice() {
        //return `${this._amount} ${new Currency(this._currency.code, this._currency.name).displayFullCurrency()}`;//
        return `${this.amount} ${this._currency.name} ${this._currency._code}`;
    }
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}