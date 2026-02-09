//TASK 1 – Employee Merge System (Spread Operator)

let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 };
let empPromotion = { role: "Developer", bonus: 10000 };

let employee = {
  ...empBasic,
  ...empPromotion,
  salary: 40000,
  experience: "2 years"
};

console.log(employee);

//Output:

  //name: "Naveen",
  //role: "Developer",
  //salary: 40000,
  //bonus: 10000,
  //experience: "2 years"


// TASK 2 – Shopping Cart (Spread + Array)

let cart1 = ["Shoes", "Shirt"];
let cart2 = ["Watch", "Cap"];

let finalCart = ["Socks", ...cart1, ...cart2, "Bag"];

console.log(finalCart);

//Output:

//["Socks", "Shoes", "Shirt", "Watch", "Cap", "Bag"]


//TASK 3 – Rest Operator Salary Calculator

function calculateTotalSalary(baseSalary, ...bonuses) {
  let totalBonus = bonuses.reduce((sum, b) => sum + b, 0);
  return baseSalary + totalBonus;
}

let result = calculateTotalSalary(30000, 2000, 3000, 5000);
console.log("Total Salary:", result);

//Output:

//Total Salary: 40000


//TASK 4 – Advanced Destructuring

let student = {
  name: "karthick",
  marks: {
    maths: 90,
    science: 85,
    english: 88
  }
};

let { name } = student;
let { maths, science } = student.marks;

console.log(`${name} scored ${maths} in maths and ${science} in science`);

//Output:

//karthick scored 90 in maths and 85 in science


// TASK 5 – Array Manipulation

let numbers = [10, 20, 30, 40, 50];

// Remove 30 and add 25
numbers.splice(2, 1, 25);

// Reverse array
numbers.reverse();

// Check if 50 exists
let exists = numbers.includes(50);

console.log("Final Array:", numbers);
console.log("50 exists:", exists);

//Output:

//Final Array: [50, 40, 25, 20, 10]
//50 exists: true


// TASK 6 – Flatten Data

let apiData = [1, 2, [3, 4], [5, 6, [7, 8]]];

let flatArray = apiData.flat(2);

console.log("Flattened Array:", flatArray);
console.log("Index of 6:", flatArray.indexOf(6));

//Output:

//Flattened Array: [1, 2, 3, 4, 5, 6, 7, 8]
//Index of 6: 5