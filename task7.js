// TASK 1 – Custom Digital Clock
// Create a live digital clock using:
// - new Date()
// - getHours()
// - getMinutes()
// - getSeconds()
// - setInterval()
// Format:
// Current Time: 14 : 05 : 09
// (Add leading zero if value < 10)

function updateClock() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    console.log("Current Time: " + hours + " : " + minutes + " : " + seconds);
}

setInterval(updateClock, 1000);
updateClock();


// TASK 2 – Find Current Day Name
// Use getDay()
// Array:
// ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// Print:
// Today is Friday

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let today = new Date();

let dayIndex = today.getDay();

console.log("Today is " + days[dayIndex]);

// TASK 3 – Age Calculator (Basic)
// let birthYear = 2003
// Use getFullYear()
// Print:
// Your age is 23

let birthYear = 2003;

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log("Your age is " + age);

// TASK 4 – Create Specific Date
// Create:
// 15 August 2020
// 10:30:45 AM
// Using:
// - new Date()
// - setFullYear()
// - setMonth()
// - setDate()
// - setHours()
// - setMinutes()
// - setSeconds()
// Print using:
// toLocaleString()

let customDate = new Date();

customDate.setFullYear(2020);
customDate.setMonth(7);       
customDate.setDate(15);

customDate.setHours(10);
customDate.setMinutes(30);
customDate.setSeconds(45);

console.log(customDate.toLocaleString());

// SECTION 2 – setTimeout & setInterval

// TASK 5 – Delayed Message
// Use setTimeout()
// After 3 seconds print:
// Welcome Naveen ■

setTimeout(function() {
    console.log("Welcome Naveen ■");
}, 3000);  




// TASK 6 – Stop Interval After 5 Seconds
// Output:
// 1
// 2
// 3
// 4
// 5
// Stopped
// Use:
// - setInterval()
// - clearInterval()

let count = 1;

let interval = setInterval(function() {
    
    console.log(count);
    count++;

    if (count > 5) {
        clearInterval(interval);
        console.log("Stopped");
    }

}, 1000);

// TASK 7 – Simple Promise
// If number > 10 → resolve("Valid number")
// Else → reject("Invalid number")
// Handle using:
// .then()
// .catch()
// .finally()

let number = 15;   

let checkNumber = new Promise(function(resolve, reject) {

    if (number > 10) {
        resolve("Valid number");
    } else {
        reject("Invalid number");
    }

});

checkNumber
    .then(function(message) {
        console.log(message);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log("Promise completed");
    });


// SECTION 4 – Fetch API Task

// TASK 8 – Fetch Product Prices
// API:
// https://fakestoreapi.com/products
// Print only:
// Product: <title>
// Price: <price>
// -----------------

fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        data.forEach(function(product) {
            console.log("Product: " + product.title);
            console.log("Price: " + product.price);
            console.log("-----------------");
        });

    })
    .catch(function(error) {
        console.log("Error:", error);
    });



// SECTION 5 – Execution Order Task

// function one(){
// console.log("one");
// }
// function two(){
// console.log("two");
// }
// function three(){
// console.log("three");
// }
// one()
// setTimeout(two,0)
// three()
// Predict Output and Explain Why.

function one(){
    console.log("one");
}

function two(){
    console.log("two");
}

function three(){
    console.log("three");
}

one();
setTimeout(two, 0);
three();