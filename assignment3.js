// Assignment 3: Array and Array Methods

// Question1--Write a JavaScript function that takes an array of strings and returns a new array with each string capitalized

// map--return a new array
// Capitalize the first letter of the current string and concatenate with the rest of the string
// str.charAt(0).toUpperCase() extracts the first character and converts it to uppercase
// str.slice(1) extracts the rest of the string starting from the second character


// Function that capitalizes each string in the  array
const capitalizeStrings = (val) => {
    // Use map() to capitalize each string in val
    return val.map(str => str.charAt(0).toUpperCase() + str.slice(1)) // Capitalize first letter and append rest
}
const val = ["mango", "grapes", "cherry","banana","apple"]
console.log(capitalizeStrings(val))


// ---------------------------------------------------------------------------------------------------------------------
//  Question 2--Create a function that returns the second largest element in an array.

// sort---sorts the values in accesnding order
// always pass the functiom outside the sort function
// pass 2 parameters a,b


//  function to sort in descending order
function secondLargest(a, b) {
    if (a > b) {
        return -1; // Return -1 if `a` is come before `b` 
    } else if (a < b) {
        return 1; // Return 1 if `a` is come after `b` 
    } else {
        return 0; // Return 0 if `a` and `b` are equal
    }
}
const arr = [112, 10, 114, 122, 5, 77];

// Sorting the array in descending order 
arr.sort(secondLargest);
// Checking if the array has at least two elements
if (arr.length < 2) {
    console.log("Array must have at least two elements"); // Print message if array has less than 2 elements
} else {
    console.log(arr[1]); 
}


// ---------------------------------------------------------------------------------------------------------------------
// Question 3-- Write a JavaScript function that takes an array of objects and a key, and returns an array of values corresponding to that key.

// Objects are collection of key-value Pair
// they are used to store related data and functions
// console.log(Object.keys(parent))  // all keys in array format 


// Define a function named Values that takes an array of person objects (person) and a key (key)
function Values(person, key) {
    // Use map() to iterate over each object (obj) in the person array
    // and extract the value for the specified key
    return person.map(obj => obj[key]);
}
const person = [
    { name: "Shweta", age: 21 },
    { name: "Asmi", age: 19 },
    { name: "Krutika", age: 20 },
    {name:"Dipak",age:22}
];
const key = "name"; // Specify the key
// const key="age";
// Call the Values function with the person array and key,
console.log(Values(person, key));



// ---------------------------------------------------------------------------------------------------------------------
// Question 4--Calculate the factorial of every element in an array and store it in a new array.


// Recursive function to calculate factorial of a number
function factorial(num) {
    if (num === 0 || num === 1) {   // factorial of 0 or 1 is 1
        return 1;
    } else {
        return num * factorial(num - 1);    // num * factorial(num - 1)
    }
}
// Function to calculate factorial of every element in an array using map
function factorialArray(arr) {
    // Use map() to iterate over each element (num) in the array (arr)
    return arr.map(num => factorial(num));
}
const numbers = [2, 4, 5, 3, 7];
console.log(factorialArray(numbers)); 


// ---------------------------------------------------------------------------------------------------------------------
//  Question 5--Create a function to find the intersection of two arrays.
// Arrow function to find intersection of two arrays
const finalArr = (arr1, arr2) => {
    const result = [];

    // Iterate through arr1
    for (let element of arr1) {
        // Check if current element exists in arr2 and is not already in result
        if (arr2.includes(element) && !result.includes(element)) {
            result.push(element);
        }
    }
     return result;
};
const arr1 = [12, 22, 23, 44,16];
const arr2 = [13, 44, 55, 16,22];
console.log(finalArr(arr1, arr2)); 



