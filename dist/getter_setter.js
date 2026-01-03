"use strict";
// Getter & Setter
// Getter
// Setter
Object.defineProperty(exports, "__esModule", { value: true });
// Access modifiers
class BankAccount {
    accountNumber;
    accountHolder;
    balance;
    accountType;
    // constructor
    constructor(accountNumber, accountHolder, balance, accountType) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.accountType = accountType;
    }
    ;
    // methods
    // updateBalance(value: number): void {
    //     this.balance = this.balance + value;
    //     console.log(`Total balance is: ${this.balance}`);
    // }
    // setter: to add value
    set updateBalance(value) {
        this.balance = this.balance + value;
    }
    // getBalance(){
    //     return this.balance;
    // }
    // getter: to get value
    get getBalance() {
        return this.balance;
    }
}
;
// StudentBankAccount class
class StudentBankAccount extends BankAccount {
    test() {
        console.log(`Student account balance is: ${this.balance}`);
    }
}
// instance
const walidurTanjim = new BankAccount(123, 'Walidur Tanjim', 100000, "Savings");
// walidurTanjim.updateBalance(5700);
// setter: update balance using setter
walidurTanjim.updateBalance = 6000;
const studentAcount = new StudentBankAccount(123, "Student Walid", 50000, "Savings");
studentAcount.test();
// console.log(walidurTanjim.getBalance());
// getter: get balance using getter
console.log(walidurTanjim.getBalance);
