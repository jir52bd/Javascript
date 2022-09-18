/*
    The sort() method sorts an array alphabetically
*/

const names = ["Jahirul", "Abu", "Kamrul", "Shadia", "Khaka", "Tanha" , "Razu"];

const alphabeticallySort = names.sort();

console.log(alphabeticallySort);

/*
    Numaric sort using compare function
*/

const numbers = [10, 9, 200, 7, 3, 60, 4, 8];

const alphabeticSort = numbers.sort();

const numaricSort = numbers.sort(
    (a, b) => {
        return a - b; // the function calculate 1 - 9 = - 8, since the result is negative so
                    //the function will sort 1 as smaller then 9.
    }
);

console.log(`Alphsbetic Sort: ${alphabeticSort}`);
console.log(`Numaric Sort: ${numaricSort}`);

