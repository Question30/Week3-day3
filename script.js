//Static Methods and Properties
class Governor{
    static state = " "

    static setState(state){
        this.state =state;
    }

    static getState(){
        console.log(this.state);
    }
}

Governor.setState("New York");
Governor.getState();

//Inheritance
class Person{
    constructor(name, age, weight){
        this.name =name;
        this.age= age;
        this.weight = weight;
    }

    walk(){
        console.log("Walking...");
    }

    speak(){
        console.log(`Hello my name is ${this.name}`);
    }

    sleep(){
        console.log("Sleeping...");
    }
}

class PostalWorker extends Person{
    deliverMail(){
        console.log("Delivering mail...");
    }

    speak(){
        console.log(`Hello my name is ${this.name} and I am a Postal Worker`);
    }

    sortMail(){
        console.log("Sorting mail...");
    }
}

class Chef extends Person{
    cook(){
        console.log("Cooking");
    }

    prep(){
        console.log("Prepping");
    }

    speak(){
        console.log(`Hello my name is ${this.name} and I am a Chef`);
    }

}

const newPerson =new Person("Alex, 29, 210");

const postalWorker = new PostalWorker("John, 35, 180");

const newChef = new Chef("Gordon, 56, 170")

newPerson.sleep();
newPerson.speak();
newPerson.walk();

postalWorker.sleep();
postalWorker.speak();
postalWorker.walk();
postalWorker.sortMail();
postalWorker.deliverMail();

newChef.sleep();
newChef.speak();
newChef.walk();
newChef.cook();
newChef.prep();


// Bank Accounts

class BankAccount {
    constructor(){
        this.ownerName = " ";
        this.balance = 0;
        this.acctNum = 0;
    }

    deposit(num){
        this.balance += num;
        console.log(`Depositing....${num}`);
        this.checkBalance();
    }

    withdraw(num){
        if(num > this.balance){
            console.log(`Denied...`);
            this.checkBalance();
        }else{
            this.balance -= num;
            console.log(`withdrawing ${num}`);
            this.checkBalance();
        }
    }

    checkBalance(){
        console.log(`Balance: ${this.balance}`);
    }
}

class CheckingAccount extends BankAccount{
    constructor(){
        super();
        this.overdraftEnabled = false;
    }

    withdraw(num){
        if(num > this.balance){
            this.overdraftEnabled = true;
            this.balance -= num;
            console.log(`Warning....Account going into overdraft.`);
            this.checkBalance();
        }else{
            this.balance -= num;
            console.log(`withdrawing ${num}.`);
            this.checkBalance();
        }
    }
}

class SavingsAccount extends BankAccount{
    withdraw(){
        console.log("This account cannot be withdrawn from.");
    }   
}

const account = new BankAccount();
const checking = new CheckingAccount();
const savings = new SavingsAccount();

account.deposit(1000);
account.withdraw(500);
account.withdraw(700);

checking.deposit(200);
checking.withdraw(100);
checking.withdraw(200);

savings.deposit(1000);
savings.withdraw(100);
savings.checkBalance();