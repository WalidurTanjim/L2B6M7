"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Access modifiers: public, protected, private
class BankAccount {
    accountNo;
    accountHolder;
    accountType;
    currentBalance;
    isActive;
    constructor(accountNo, accountHolder, accountType, currentBalance, isActive) {
        this.accountNo = accountNo;
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.currentBalance = currentBalance;
        this.isActive = isActive;
    }
    ;
    addBalance(amount) {
        this.currentBalance = this.currentBalance + amount;
    }
    ;
}
;
// AnotherAccount class
class AnotherAccount extends BankAccount {
    constructor(accountNo, accountHolder, accountType, currentBalance, isActive) {
        super(accountNo, accountHolder, accountType, currentBalance, isActive);
    }
    ;
    changeActivityStatus(status) {
        this.isActive = status;
    }
    ;
}
;
const result1 = new BankAccount(12567840, "Walidur Tanjim", "Savings", 500, true);
const result2 = new BankAccount(15499823, "MD. Walid", "Savings", 1000, true);
const result3 = new AnotherAccount(12056973, "Another Walid1", "Savings", 20000, true);
// result1.addBalance(50);
// result2.addBalance(550);
// result2.addBalance(100);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// result3.changeActivityStatus(false);
// console.log(result3);
