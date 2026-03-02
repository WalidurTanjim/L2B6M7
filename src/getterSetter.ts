// OOP: getter, setter
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

     // addBalance(amount: number) {
     //      this.currentBalance = this.currentBalance + amount;
     // };
     set addBalance(amount: number){
          this.currentBalance = this.currentBalance + amount;
     };

     get getBalance(){
          return `Your current balance is: ${this?.currentBalance}`;
     };
};

const result1 = new BankAccount(1203657984, "Walidur Tanjim", "Savings", 5000, true);
result1.addBalance = 1500;
// console.log(result1);

// const totalBalance = result1.getBalance;
// console.log(totalBalance);
