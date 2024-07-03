// Assignment 4: Object and String Methods


// Question 1-- Write a function that takes an object and returns an array of the object's keys and values.

// Function to extract keys and values of an object
const S = (obj) => {
    // Use Object.keys() to get array of keys, and map to key-value pairs
    return Object.keys(obj).map(key => [key, obj[key]]);
};
let person = { 
    person1: { name: "Shweta", age: 19 },
    person2: { name: "Asmi", age: 20 },
    person3: { name: "Krutika", age: 21 }
};
// Displaying keys and values for each person
console.log(S(person.person1));
console.log(S(person.person2));
console.log(S(person.person3));



// ------------------------------------------------------------------------------------------------------------
// Question 2-- Create a function to convert a string to title case.

// Function to convert a string to title case
function toTitleCase(str) {
    // Split the string into words based on spaces
    let words = str.toLowerCase().split(" ");
    
    // Capitalize the first letter of each word
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    
    // Join the words back into a single string with spaces
    return words.join(" ");
}
console.log(toTitleCase("hello shweta")); 
console.log(toTitleCase("hII iM ShWeTa")); 
console.log(toTitleCase("DIPAK POWAR")); 



// ------------------------------------------------------------------------------------------------------------
// Question 3--Implement a function that checks if an object is empty.

// Function to check if an object is empty
function ObjectEmpty(obj) {
    // Check if Object.keys(obj) returns an empty array
    return Object.keys(obj).length === 0;
}
const obj1 = {}; // Empty object
const obj2 = { name: "shweta", age: 20 }; // Non-empty object
const obj3 = {age:19};  // Non-empty object

console.log(ObjectEmpty(obj1)); 
console.log(ObjectEmpty(obj2)); 
console.log(ObjectEmpty(obj3)); 


// ------------------------------------------------------------------------------------------------------------

// Question 4-- Write a function to count the number of occurrences of each character in a string.

// IIFE to create charCount function
const charCount = (() => {
    // Inner function to count  each character in a string
    const countChars = str => {
        // Initialize an empty object to store character counts
        let result = {};

        // Loop through each character in the string using for...of loop
        for (let char of str) {
            // Check if character exists in result; if not, initialize its count to 0
            result[char] = result[char] || 0;
            // Increment the count of the current character
            result[char]++;
        }

        return result;
    };

    return countChars;
})();
console.log(charCount("Shwetaa")); 
console.log(charCount("atyalakar")); 

