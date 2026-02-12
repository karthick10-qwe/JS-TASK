//SECTION 1 – Array Higher Order Methods

//Task 1 – forEach()

let subjects = ["Maths", "Science", "English", "History"];

let result = subjects.forEach((sub, index) => {
  console.log(`Subject ${index + 1}: ${sub}`);
});

console.log(result);

//Output


//Subject 1: Maths
//Subject 2: Science
//Subject 3: English
//Subject 4: History
//undefined

//Explanation

//forEach() is used only for iteration
//It does not return anything, so result is undefined

//Task 2 – map()

let prices = [100, 200, 300, 400];

let gstPrices = prices.map(price => price + price * 0.10);

console.log(gstPrices);

//Output


//[110, 220, 330, 440]

//Explanation

//map() returns a new array
//Each value is increased by 10% GST

//Task 3 – filter()

let students = [
  { name: "A", marks: 45 },
  { name: "B", marks: 75 },
  { name: "C", marks: 35 },
  { name: "D", marks: 85 }
];

let passedStudents = students.filter(stu => stu.marks > 50);

console.log(passedStudents);

//Output

//[{ name: "B", marks: 75 }, { name: "D", marks: 85 }]

//Explanation

//filter() returns elements that satisfy the condition
//Only students with marks above 50 are included

//Task 4 – find()

let firstPassed = students.find(stu => stu.marks > 50);

console.log(firstPassed);

//Output

//{ name: "B", marks: 75 }

//Explanation

//find() returns only the first match
//filter() returns all matches

//Task 5 – reduce()

let cart = [
  { item: "Shirt", price: 1000 },
  { item: "Shoes", price: 2000 },
  { item: "Watch", price: 3000 }
];

let totalPrice = cart.reduce((sum, curr) => {
  return sum + curr.price + curr.price * 0.05;
}, 0);

console.log(totalPrice);

//Output

//6300

//Explanation

//reduce() accumulates values into a single result
//Added 5% tax inside reduce

//Task 6 – some()

let numbers = [1, 3, 5, 7, 8];

let hasEven = numbers.some(num => num % 2 === 0);

console.log(hasEven);

//Output

//true

//Explanation

//some() returns true if at least one element matches the condition

//Task 7 – every()

let ages = [22, 25, 19, 30];

let allAbove18 = ages.every(age => age > 18);

console.log(allAbove18);

//Output

//true

//Explanation
//every() checks if all elements satisfy the condition

//Task 8 – sort()

let salaries = [50000, 10000, 70000, 30000];

console.log(salaries.sort((a, b) => a - b)); // Ascending
console.log(salaries.sort((a, b) => b - a)); // Descending

//Output


//[10000, 30000, 50000, 70000]
//[70000, 50000, 30000, 10000]

//Explanation
//Default sort() treats numbers as strings
//Comparator function fixes this issue

//Task 9 – Array Conversion

let arr = [10, 20, 30, 40];

console.log(arr.toString());
console.log(arr.join("-"));

//Output


//10,20,30,40
//10-20-30-40

//Explanation

//toString() uses commas
//join() allows custom separators


//SECTION 2 – String Methods

//Task 10 – charAt() & charCodeAt()

let word = "Developer";

console.log(word.charAt(4));
console.log(word.charCodeAt(4));

//Output

//l
//108

//Explanation

//charAt() gets character
//charCodeAt() gets ASCII value

//Task 11 – slice()

let company = "StacklyCompany";

console.log(company.slice(0, 8));

//Output

//Stackly

//Task 12 – Case Conversion

let userInput = "javaScript";

console.log(userInput.toUpperCase());
console.log(userInput.toLowerCase());

//Output

//JAVASCRIPT
//javascript

//Task 13 – trim()

let email = "   naveen@gmail.com   ";

console.log(email.trim());

//Output

//naveen@gmail.com

//Task 14 – includes()

let message = "Welcome to JavaScript Training";

console.log(message.includes("JavaScript"));

//Output

//true

//Task 15 – split()

let movie = "spider-man-no-way-home";

console.log(movie.split("-"));

//Output

//["spider", "man", "no", "way", "home"]

//Task 16 – indexOf() & lastIndexOf()

let text = "programming";

console.log(text.indexOf("m")); //indexOf
console.log(text.lastIndexOf("m")); //lastIndexOf

//Output

//6
//7

//Task 17 – replace()

let tech = "I love python";

console.log(tech.replace("python", "javascript"));


//Output

//I love javascript


//Task 18 – startsWith() & endsWith()

let filename = "report.pdf";

console.log(filename.startsWith("report"));//startswith
console.log(filename.endsWith(".pdf"));//endswith

//Output

//true
//true

//Task 19 – repeat()

let star = "*";

console.log(star.repeat(10));

//Output

//**********

// FINAL TEAM CHALLENGE – Employee Report System

let employees = [
  { name: "Naveen", salary: 50000 },
  { name: "Arun", salary: 30000 },
  { name: "Kiran", salary: 70000 }
];

console.log(employees.map(emp => emp.name.toUpperCase()));
console.log(employees.filter(emp => emp.salary > 40000));
console.log(employees.find(emp => emp.salary > 60000));
console.log(employees.reduce((sum, emp) => sum + emp.salary, 0));
console.log(employees.map(emp => emp.salary).sort((a, b) => b - a));

//Output

//["NAVEEN", "ARUN", "KIRAN"]
//[{ name: "Naveen", salary: 50000 }, { name: "Kiran", salary: 70000 }]
//{ name: "Kiran", salary: 70000 }
//150000
//[70000, 50000, 30000]

