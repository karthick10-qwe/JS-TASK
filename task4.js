// SECTION 1 – Real-Time Function Logic

// 1. Payroll System:
// Create calculateSalary(basicSalary, bonusPercentage)
// - Calculate bonus
// - Deduct 5% tax
// - Return final salary
// - Print full salary breakdown

function calculateSalary(basicSalary, bonusPercentage) {
    let bonus = (basicSalary * bonusPercentage) / 100;
    let grossSalary = basicSalary + bonus;
    let tax = grossSalary * 0.05;
    let finalSalary = grossSalary - tax;

    console.log("---- Salary Breakdown ----");
    console.log("Basic Salary: ₹" + basicSalary);
    console.log("Bonus (" + bonusPercentage + "%): ₹" + bonus);
    console.log("Gross Salary: ₹" + grossSalary);
    console.log("Tax (5%): ₹" + tax);
    console.log("Final Salary: ₹" + finalSalary);

    return finalSalary;
}

calculateSalary(40000, 10);

// ----------------------------------------------------------------------------------------------------

// 2. Student Result System:
// Create generateResult(name, marksArray)
// - Calculate total
// - Calculate average
// - Decide Grade (A/B/C/Fail)
// - Return result object

function generateResult(name, marksArray) {
    let total = marksArray.reduce((sum, m) => sum + m, 0);
    let average = total / marksArray.length;

    let grade;

    if (average >= 75) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 40) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    return {
        name: name,
        total: total,
        average: average,
        grade: grade
    };
}

console.log(generateResult("karthick", [80, 85, 70, 65]));

// ----------------------------------------------------------------------------------------------------

// SECTION 2 – Scope & Hoisting (Debugging)

// 3. Debug This Code:
// function demo(){
// if(true){
// var a = 10;
// let b = 20;
// }
// console.log(a);
// console.log(b);
// }

// Questions:
// - What will happen?
// --> When you call the function, console.log(a) prints 10, but console.log(b) throws error.

// - Why?
// - Fix it properly.
// --> Because var is function-scoped while let is block-scoped, so a is accessible outside the if block but b is not.

function demo() {
    let b;
    if (true) {
        var a = 10;
        b = 20;
    }
    console.log(a);
    console.log(b);
}
demo();

// -------------------------------------------------------------------------------------------------

// 4. Hoisting Analysis:
// console.log(x);
// var x = 100;
// console.log(y);
// let y = 200;
// Predict output and explain.

// -->Predict output :
// undefined
// ReferenceError: Cannot access 'y' before initialization

// -->Explanation :
// var is moved to the top and given a default value (undefined), so JavaScript can print it.
// let is moved to the top but not given any value, so using it before declaration causes an error.

// ----------------------------------------------------------------------------------------------------

// SSECTION 3 – Callback & Higher Order (Industry Simulation)

// 5. Order Processing System:
// Create processOrder(orderId, callback)
// - Print "Order Processed"
// - Call generateInvoice(orderId)

function generateInvoice(orderId) {
    console.log("Invoice generated for order:", orderId);
}

function processOrder(orderId, callback) {
    console.log("Order Processed");
    callback(orderId);
}

processOrder(1075, generateInvoice);

// -------------------------------------------------------------------------------------------------

// 6. Bank Transaction System:
// Create transaction(amount, type, callback)
// - If deposit → add
// - If withdraw → subtract
// - Call sendSMS()

let balance = 0;

function sendSMS(message) {
    console.log("SMS:", message);
}

function transaction(amount, type, callback) {
    if (type === "deposit") {
        balance += amount;
        console.log("Deposited:", amount);
    } else if (type === "withdraw") {
        balance -= amount;
        console.log("Withdrawn:", amount);
    } else {
        console.log("Invalid transaction type");
        return;
    }

    callback(`Your current balance is ${balance}`);
}

transaction(1000, "deposit", sendSMS);
transaction(500, "withdraw", sendSMS);

// -------------------------------------------------------------------------------------------------

// SECTION 4 – Currying (E-Commerce)

// 7. Dynamic Price Builder:
// Create priceBuilder(basePrice)(discount)(tax)
// Return final price
// Example: priceBuilder(2000)(15)(18)

function priceBuilder(basePrice) {
    return function (discount) {
        return function (tax) {
            let priceAfterDiscount = basePrice - (basePrice * discount / 100);
            let finalPrice = priceAfterDiscount + (priceAfterDiscount * tax / 100);
            return finalPrice;
        };
    };
}

console.log(priceBuilder(2000)(15)(18));

// -------------------------------------------------------------------------------------------------

// SECTION 5 – IIFE (Security + Encapsulation)

// 8. Secure Company Module:

// - Store private variable companyCode
// - Expose getCompanyStatus()
// - companyCode should not be directly accessible

const Company = (function () {
    let companyCode = "CMP123";   // private variable

    function getCompanyStatus() {
        return "Company is Active. Code: " + companyCode;
    }

    return {
        getCompanyStatus
    };
})();

console.log(Company.getCompanyStatus());
console.log(Company.companyCode);

// -------------------------------------------------------------------------------------------------

// SECTION 6 – Generator (Advanced Logic)

// 9. Unique Order ID Generator:
// Generate ORD1001, ORD1002, ORD1003, etc.

function* orderIdGenerator() {
    let id = 1000;
    while (true) {
        id++;
        yield "ORD" + id;
    }
}

const gen = orderIdGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// ----------------------------------------------------------------------------------------------------

// 10. Coupon Spin System:
// Yield:
// - 10% OFF
// - 20% OFF
// - 50% OFF
// - No Luck
// - Jackpot
// Simulate multiple spins.

function* couponSpin() {
    yield "10% OFF";
    yield "20% OFF";
    yield "50% OFF";
    yield "No Luck";
    yield "Jackpot";
}

const spin = couponSpin();

console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);

// -------------------------------------------------------------------------------------------------

// SECTION 7 – Mini Project (Integrated)

// Mini E-Commerce Flow:
// - addToCart(product, price)
// - calculateTotal()
// - applyDiscount() using currying
// - generateCoupon() using generator
// - processPayment() using callback
// - Hide config using IIFE

const Shop = (function () {
    let cart = [];
    let discountPercent = 0;

    function addToCart(product, price) {
        cart.push({ product, price });
        console.log(product, "added to cart");
    }

    function calculateTotal() {
        return cart.reduce((sum, item) => sum + item.price, 0);
    }

    function applyDiscount(discount) {
        return function (total) {
            discountPercent = discount;
            return total - (total * discount / 100);
        };
    }

    function* generateCoupon() {
        yield "SAVE10";
        yield "SAVE20";
        yield "JACKPOT50";
    }

    function processPayment(amount, callback) {
        console.log("Processing payment of ₹" + amount);
        callback();
    }

    return {
        addToCart,
        calculateTotal,
        applyDiscount,
        generateCoupon,
        processPayment
    };
})();

Shop.addToCart("Mobile", 20000);
Shop.addToCart("Headphones", 2000);

let total = Shop.calculateTotal();
console.log("Total:", total);

let discountedTotal = Shop.applyDiscount(10)(total);
console.log("After Discount:", discountedTotal);

const coupon = Shop.generateCoupon();
console.log("Coupon:", coupon.next().value);

Shop.processPayment(discountedTotal, function () {
    console.log("Payment Successful");
});

// -------------------------------------------------------------------------------------------------

// Concept Questions:

// 1. Difference between function declaration & expression?
// --> A function declaration is hoisted and can be called before it is defined, whereas a function expression is not hoisted and can be used only after it is assigned to a variable.

// 2. What is higher order function?
// --> A higher-order function is a function that takes another function as an argument or returns a function as its result.

// 3. Real-time example of generator?
// --> Generating unique order IDs in an e-commerce system, where each new order needs the next ID (ORD1001, ORD1002, …) one at a time without storing all IDs in memory.

// 4. Why do we use IIFE?
// --> We use an IIFE to create a private scope so variables are not accessible globally and to avoid polluting the global namespace.

// 5. Difference between var, let, const?
// --> var is function-scoped, allows redeclaration, and is hoisted with an initial value of undefined.
// let is block-scoped, does not allow redeclaration in the same scope, and is hoisted but not initialized.
// const is block-scoped, cannot be redeclared or reassigned, and is hoisted but not initialized.