// Getter & Setter
// Getter
// Setter

// Access modifiers

class BankAccount {
    readonly accountNumber: number;
    readonly accountHolder: string;
    protected balance: number;
    readonly accountType: string;

    // constructor
    constructor(accountNumber: number, accountHolder: string, balance: number, accountType: string){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.accountType = accountType;
    };

    // methods
    updateBalance(value: number): void {
        this.balance = this.balance + value;
        console.log(`Total balance is: ${this.balance}`);
    }

    getBalance(){
        return this.balance;
    }
};


// StudentBankAccount class
class StudentBankAccount extends BankAccount {
    test(){
        console.log(`Student account balance is: ${this.balance}`);
    }
}



// instance
const walidurTanjim = new BankAccount(123, 'Walidur Tanjim', 100000, "Savings");
walidurTanjim.updateBalance(5700);


const studentAcount = new StudentBankAccount(123, "Student Walid", 50000, "Savings");
studentAcount.test();


console.log(walidurTanjim.getBalance());