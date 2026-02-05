//Part 1 – Logical & Ternary Operator

///Q1: Check whether a number is between 10 and 50
//INPUT :let num = 25;

let num = 25
if (num > 10 && num < 50) {
  console.log("Valid Number");
} else {
  console.log("Invalid Number");
}

//OUTPUT:

    //Valid Number

//Explanation:

//25 > 10 and 25 < 50
//Both conditions are true, so AND (&&) returns true.

//Q2: Check if user is eligible to log in
//INPUT condition:
   
    // username must be "admin"
    // password must be "1234"
    // USe logical AND


let username = "admin";
let password = "1234";

if (username == "admin" && password == "1234") {
  console.log("Login Successful");
} else {
  console.log("Login Failed");
}

//Output:

     //Login Successful

//Explanation:

//Both username and password match → AND condition is true.

//Q3: Using ternary operator (Check if a number iseven or odd)

let num1 = 17;
let result = (num1 % 2 === 0) ? "Even" : "Odd";
console.log(result);

//Output:

     //Odd

///Explanation:

//17 % 2 gives 1, not 0, so condition is false → "Odd".

//Q4: What is the output?

console.log((10 === "10") || (5 > 2 && !(3 < 1)));
//Step-by-step:
10 === "10"  //false (strict equality, different types)
5 > 2  //true
3 < 1 // false
!(3 < 1) ///true
//true && true → true
//false || true → true

//output:

     //true


//PART 2  Type Conversion

//Q5: Find the output

console.log("5" + 2);
console.log("5" - 2);
console.log("5" * 2);
console.log("5" / 2);

//Outputs:

    //52
    //3
    //10
    //2.5
    
//Explanation:

//"5" + 2 → string concatenation → "52"
//"5" - 2 → JS converts string to number → 5 - 2 = 3
//"5" * 2 → 10
//"5" / 2 → 2.5

//Q6: Explicit conversion

let value = "100";

// Convert to Number
let numValue = Number(value);
console.log(numValue);

// Convert to Boolean
let boolValue = Boolean(value);
console.log(boolValue);
//Output:

    //100
    //true

//Explanation:

//"100" → Number → 100
//Non-empty string → Boolean → true

//Q7: Boolean conversion

console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(0));
console.log(Boolean([]));
//Output:

    //false
    //true
    //false
    //true 

//Explanation:

//"" → empty string → false
//" " → space is not empty → true
//0 → false
//[] → empty array is an object → true

//PART 3 – Conditional Statements

//Q8: Grade program

//If mark >=90 - Grade A
//If mark >=75 - Grade B
//If mark >=50 - Grade C
//Else - Fail  use if,else if.

let marks = 80;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

//Output:

    //Grade B

//Explanation:
//Marks = 80 → greater than 75 but less than 90 → Grade B

//Q9: Traffic Signal Program using switch case
//"RED" - Stop
//"YELLOW" - Ready
//"GREEN" - Goo Goo
//Default - Invalid Signal

let signal = "green";

switch (signal) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Goo Goo");
    break;
  default:
    console.log("Invalid Signal");
}

//Output:

    //Goo Goo

//Explanation:
//The value "yellow" matches its case, so "Goo Goo" is printed.

//Q10: Nested if – Check eligibility
 //age = 20;
 //height = 165;
 //weight = 55;
 //If All True - "selected"
 //Else - show which condition failed

let age = 20;
let height = 165;
let weight = 55;

if (age >= 18) {
  if (height >= 160) {
    if (weight >= 50) {
      console.log("Selected");
    } else {
      console.log("Weight condition failed");
    }
  } else {
    console.log("Height condition failed");
  }
} else {
  console.log("Age condition failed");
}

//Output:

    //Selected

//Explanation:
//All three conditions are true, so the candidate is selected.

//PART 4 – Loops

//Q11: Print numbers from 1 to 20 (for loop)

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//Output:

    //1 2 3 ... 20

//Explanation:
//Loop starts at 1 and runs until 20.

//Q12: Print only odd numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//Output:

     //1 3 5 7 9 11 13 15 17 19

//Explanation:
//Odd numbers give remainder 1 when divided by 2.

//Q13: Using while loop print number from 10 to 1

let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

//Output:

    //10 9 8 7 6 5 4 3 2 1

//Explanation:
//Loop decreases value by 1 each time.

//Q14: Using do-while loop print number from 1 to 5

let j = 1;

do {
  console.log(i);
  i++;
} while (j <= 5);

//Output:

    //1 2 3 4 5

//Explanation:
//do-while executes at least once before checking condition. 

//Q15: Using for-of loop print each character from :

let word = "STACKLY";

for (let char of word) {
  console.log(char);
}

//Output:

    //S
    //T
    //A
    //C
    //K
    //L
    //Y

//Explanation:
//for-of iterates over each character of the string.

//Q16: Using for-in loop print both key and value from
    //let student = {
    //name: "Arun",
    //course: "MERN",
    // duration: "6 months"
   //}

let student = {
  name: "Arun",
  course: "MERN",
  duration: "6 months"
};

for (let key in student) {
  console.log(key + ": " + student[key]);
} 

//Output:

    //name: Arun
    //course: MERN
    //duration: 6 months

//Explanation:
//for-in loops through object keys.

//Real-Time Questions

//RT-1: Login System (AND + Ternary)
//If username = "admin" AND password = "1234" - login success
//Else = "invalid credentials" Use operator + ternary

let username1 = "admin";
let password1 = "1234";

let result1 = (username1 === "admin" && password1 === "1234")
  ? "Login Success"
  : "Invalid Credentials";

console.log(result1);

//Output:

    //Login Success

//Explanation:
//Both conditions are true → ternary returns success message.

//RT-2: Salary Bonus System
//If employe salary > 50000 AND experience > 3  years
//Eligible for bonus
//Else - Not eligible

let salary = 60000;
let experience = 4;

if (salary > 50000 && experience > 3) {
  console.log("Eligible for bonus");
} else {
  console.log("Not eligible");
}

//Output:

    //Eligible for bonus

//Explanation:
//Salary and experience both meet criteria.

//RT-3: Shopping Discount
 //If cart amount :
 //>= 5000 - 20% discount
 //>= 2000 - 10% discoun
 //< 2000 - No discoun   Use if-else ,if

let amount = 5200;

if (amount >= 5000) {
  console.log("20% Discount");
} else if (amount >= 2000) {
  console.log("10% Discount");
} else {
  console.log("No Discount");
}

//Output:

    //20% Discount

//Explanation:
//Amount is greater than 5000, so highest discount applies.

//RT-4: Even Number Counter (1 to 50)

let count = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    count++;
  }
}

console.log("Even numbers count:", count);
//Output:

    //Even numbers count: 25

//Explanation:
//Between 1 and 50, every second number is even.
//So total even numbers = 50 ÷ 2 = 25.

//RT-5: Dynamic Greeting System
//If hour between
//1-6 - Good Morning
//7-12 -  Morning
//13-16 - Goog afternoon
//17-19 - Goog evening
//Else - Goog night

let hour = 15;

if (hour >= 1 && hour <= 6) {
  console.log("Good Morning");
} else if (hour >= 7 && hour <= 12) {
  console.log("Morning");
} else if (hour >= 13 && hour <= 16) {
  console.log("Good Afternoon");
} else if (hour >= 17 && hour <= 19) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}

//Output:

    //Good Afternoon

//Explanation:
//Hour = 15, which falls between 13 and 16, so Good Afternoon is printed.