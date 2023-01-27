
// question one 
interface Record {
    date: Date;
    amount: number;
    description: string;
  }
  
  class Balance {
      private balance: number;
      private records: Record<Date, {amount: number, description: string}> = [];

  
      constructor() {
          this.balance = 0;
          this.records = [];
      }
  
      public addIncome(amount: number, description: string) {
          this.balance += amount;
          this.records.push({ date: new Date(), amount, description });
      }
  
      public addExpense(amount: number, description: string) {
          this.balance -= amount;
          this.records.push({ date: new Date(), amount, description });
      }
  
      public getBalance() {
          return this.balance;
      }
  
      public getRecords() {
          return this.records;
      }
  }
  
  class Income extends Balance {
      constructor() {
          super();
      }
  
      public addIncome(amount: number, description: string) {
          super.addIncome(amount, description);
      }
  
      public getIncomeRecords() {
          return this.getRecords().filter(record => record.amount > 0);
      }
  }
  
  class Expense extends Balance {
      constructor() {
          super();
      }
  
      public addExpense(amount: number, description: string) {
          super.addExpense(amount, description);
      }
  
      public getExpenseRecords() {
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
function isAnagram(wordOne: string, wordTwo: string) {
    // convert to lowercase
    wordOne = wordOne.toLowerCase();
    wordTwo = wordTwo.toLowerCase();
  
    // sort the characters 
    wordOne =  wordOne.split('').sort().join('');
    wordTwo = wordTwo.split('').sort().join('');
  
    // check if the sorted words are equal
    return  wordOne ===  wordTwo ;
  }
  
  console.log(isAnagram('listen', 'silent')); // true
  console.log(isAnagram('hello', 'world')); // false
  


//   question three 
class Person {
    public property: string;
  
    private constructor(value: string) {
      this.property = value;
    }
  
    public static create(value: string) {
      return new Person(value);
    }
  }
  
  const instance = Person.create("I am Samuel");
  console.log(instance.property); // "I am Samuel"
  