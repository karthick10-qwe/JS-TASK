//JavaScript Day 2 Assignment

//Topics Covered: Printing Statements, Console Methods, Data Types, Operators, Arrays, Objects
//Instructions: No loops. No conditional statements. Only use topics covered in class.
//Submission Deadline: Tomorrow – End of Day (EOD)


//1) Welcome Program
//- Ask user name using prompt().
//- Show alert: Hi , Welcome to JavaScript Training.
//- Print the same message in console.

//Ans: 
let userName = prompt("Enter your name:");
let welcomeMsg = "Hi " + userName + ", Welcome to JavaScript Training.";

alert(welcomeMsg);
console.log(welcomeMsg);



//2) Console Methods Practice
//- Print 500 using console.log(), console.warn(), console.error().
//- Use console.clear().


//Ans: 
console.log(500);
console.warn(500);
console.error(500);

// This will clear the console history above it
//console.clear();



//3) Data Type Identification
//- Create string, number, boolean, undefined, and null variables.
//- Print value and type using typeof.


//Ans:
let str = "Hello";
let num = 42;
let isTrue = true;
let empty;
let nothing = null;

console.log("Value:", str, "| Type:", typeof str);
console.log("Value:", num, "| Type:", typeof num);
console.log("Value:", isTrue, "| Type:", typeof isTrue);
console.log("Value:", empty, "| Type:", typeof empty);
console.log("Value:", nothing, "| Type:", typeof nothing); // Note: returns 'object'



//4) Arithmetic Operations
//- Use let a = 20 and let b = 5.
//- Perform +, -, *, /, %, ** and print results.


//Ans: 
let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder (%):", a % b);
console.log("Exponentiation (**):", a ** b);



//5) Increment & Decrement
//- Demonstrate pre-increment, post-increment, pre-decrement, post-decrement.
//- Print variables clearly.


//Ans: 
let x = 10;

console.log("Initial:", x);
console.log("Post-increment (x++):", x++); // Prints 10, then becomes 11
console.log("After Post-increment:", x);

console.log("Pre-increment (++x):", ++x); // Becomes 12, then prints 12

console.log("Post-decrement (x--):", x--); // Prints 12, then becomes 11
console.log("After Post-decrement:", x);

console.log("Pre-decrement (--x):", --x); // Becomes 10, then prints 10





//6) Assignment Operators
//- Use let num = 10.
//- Perform +=, -=, *=, /=, %= and print results.


//Ans:
let numVar = 10;

numVar += 5; console.log("+= Result:", numVar);
numVar -= 2; console.log("-= Result:", numVar);
numVar *= 3; console.log("*= Result:", numVar);
numVar /= 2; console.log("/= Result:", numVar);
numVar %= 4; console.log("%= Result:", numVar);


//7) Array Access
//- Create array ['HTML','CSS','JavaScript','React'].
//- Print first element, second element, last element (using length), and total elements.


//Ans:
let tech = ['HTML', 'CSS', 'JavaScript', 'React'];

console.log("First Element:", tech[0]);
console.log("Second Element:", tech[1]);
console.log("Last Element:", tech[tech.length - 1]);
console.log("Total Elements:", tech.length);



//8) Modify Array
//- Add one element at end.
//- Remove last element.
//- Print updated array.


//Ans:
let tools = ['VS Code', 'Git'];

tools.push('GitHub'); // Add to end
console.log("After Push:", tools);

tools.pop(); // Remove last
console.log("After Pop:", tools);



//9) Student Object
//- Create object with name, age, course, city.
//- Print values using dot notation.


//Ans:
let student = {
    name: "Karthick.S",
    age: 25,
    course: "FullStack development",
    city: "coimbatore"
};

console.log("Student Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
console.log("City:", student.city);




//10) Nested Object Practice
//- Create company object with nested trainer object.
//- Print company name, trainer name, trainer subject.


//Ans:
let company = {
    compName: "Stackly",
    trainer: {
        tName: "Naveen Kumar",
        subject: "javascript"
    }
};

console.log("Company:", company.compName);
console.log("Trainer:", company.trainer.tName);
console.log("Subject:", company.trainer.subject);