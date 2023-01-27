"use strict";
class Balance {
    constructor() {
        this.records = [];
        this.balance = 0;
        this.records = [];
    }
    addIncome(amount, description) {
        this.balance += amount;
        this.records.push({ date: new Date(), amount, description });
    }
    addExpense(amount, description) {
        this.balance -= amount;
        this.records.push({ date: new Date(), amount, description });
    }
    getBalance() {
        return this.balance;
    }
    getRecords() {
        return this.records;
    }
}
class Income extends Balance {
    constructor() {
        super();
    }
    addIncome(amount, description) {
        super.addIncome(amount, description);
    }
    getIncomeRecords() {
        return this.getRecords().filter(record => record.amount > 0);
    }
}
class Expense extends Balance {
    constructor() {
        super();
    }
    addExpense(amount, description) {
        super.addExpense(amount, description);
    }
    getExpenseRecords() {
        return this.getRecords().filter(record => record.amount < 0);
    }
}
const income = new Income();
const expense = new Expense();
income.addIncome(100, "Salary");
income.addIncome(50, "Freelance work");
expense.addExpense(50, "Grocery shopping");
expense.addExpense(30, "Gas");
console.log(income.getIncomeRecords());
console.log(expense.getExpenseRecords());
console.log(income.getBalance());
console.log(expense.getBalance());
// question two anagrams
function isAnagram(wordOne, wordTwo) {
    // convert to lowercase
    wordOne = wordOne.toLowerCase();
    wordTwo = wordTwo.toLowerCase();
    // sort the characters 
    wordOne = wordOne.split('').sort().join('');
    wordTwo = wordTwo.split('').sort().join('');
    // check if the sorted words are equal
    return wordOne === wordTwo;
}
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
//   question three 
class Person {
    constructor(value) {
        this.property = value;
    }
    static create(value) {
        return new Person(value);
    }
}
const instance = Person.create("I am Samuel");
console.log(instance.property); // "I am Samuel"
