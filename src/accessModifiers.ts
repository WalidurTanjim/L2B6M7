// Access modifiers: public, protected, private
class BankAccount {
     readonly accountNo: number;
     accountHolder: string;
     accountType: string;
     private currentBalance: number;
     protected isActive: boolean;

     constructor(accountNo: number, accountHolder: string, accountType: string, currentBalance: number, isActive: boolean){
          this.accountNo = accountNo;
          this.accountHolder = accountHolder;
          this.accountType = accountType;
          this.currentBalance = currentBalance;
          this.isActive = isActive;
     };

     addBalance(amount: number) {
          this.currentBalance = this.currentBalance + amount;
     };
};


// AnotherAccount class
class AnotherAccount extends BankAccount {
     constructor(accountNo: number, accountHolder: string, accountType: string, currentBalance: number, isActive: boolean){
          super(accountNo, accountHolder, accountType, currentBalance, isActive);
     };

     changeActivityStatus(status: boolean){
          this.isActive = status;
     };
};

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
