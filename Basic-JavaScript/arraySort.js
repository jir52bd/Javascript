/*
    The sort() method sorts an array alphabetically 
    array sort() change main array.
*/

const names = ["Jahirul", "Abu", "Kamrul", "Shadia", "Khaka", "Tanha" , "Razu"];

const alphabeticallySort = names.sort();

console.log(`Sorting Alphabetically - \n ${alphabeticallySort}`);
console.log(`Array sort method change main array - \n ${names}`); // sort() method change main array

/*
    Numaric sort using compare function
*/

const numbers = [10, 9, 200, 7, 3, 60, 4, 8];

const alphabeticSort = numbers.sort(); // as ti give the result smae 

const numaricSort = numbers.sort(
    (a, b) => {
        return a - b; // the function calculate 1 - 9 = - 8, since the result is negative so
                    //the function will sort 1 as smaller then 9.
    }
);

console.log(`Alphsbetic Sort: ${alphabeticSort}`);
console.log(`Numaric Sort: ${numaricSort}`);

