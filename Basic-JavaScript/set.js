/*
    A JavaScript Set is a collection of unique values.

    Each value can only occur once in a Set.
 */

const createSet = new Set(['か', 'き','く','け' ,'こ']);

const length = createSet.size;

console.log(length);
//The values() method returns a new iterator counting all the values in the set

for(const a of createSet.values())
{
    console.log(a);
}

//create a set and add value
const letters = new Set();

letters.add('ざ ');
letters.add('じ');
letters.add(' ず');
letters.add('ぜ');
letters.add(' ぞ');
//add variable 
const da = 'だ';
letters.add(da);
console.log(letters.size);

//The forEach() method invokes(calls) a function for each element

const eachElement = letters.forEach((element) => {
    console.log(element);
});



