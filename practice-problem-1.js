
let stringInput1 = "Learning JavaScript is fun!";

let findInput = stringInput1.includes("JavaScript");
let findFunIndex = stringInput1.indexOf("fun");

let stringInput2 = " CODE BOOTCAMP ";

let lowerCaseAndTrim = stringInput2.toLowerCase().trim();
let replaceString = stringInput2.replace("BOOTCAMP", "Javascript");

let stringInput3 = "Coding is fun and educational";

let splitString = stringInput3.split(" ");

let stringInput4 = "Bootcamp";

let getFirstChar = stringInput4.charAt(0);
let extractWord = stringInput4.slice(stringInput4.indexOf("camp"));

let advanceString = `Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50`;

let customerLine = advanceString.split("\n")[0];
let getCustomerName = customerLine.split(": ")[1];

let orderLine = advanceString.split("\n")[1];
let fruitLine = orderLine.split(": ")[1];
let fruitArray = fruitLine.split(", ");

let totalLine = advanceString.split("\n")[2];
let totalUpperCase = totalLine.toUpperCase();

console.log({
    findInput,
    findFunIndex,
    lowerCaseAndTrim,
    replaceString,
    splitString,
    getFirstChar,
    extractWord,
    getCustomerName,
    fruitArray,
    totalUpperCase
});