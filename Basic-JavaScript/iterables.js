/*
    Iterables are iterable objects (like Arrays).

    Iterables can be accessed with simple and efficient code.

    Iterables can be iterated over with for..of loops
 */

//Iterating over stirng 

function iteratingOverString(value)
{
    let name = value; //I am bangladeshi 
    for(const x of name )
    {
        console.log(x);
    }

}

iteratingOverString("私はバングラデシュです"); // I am Bangladeshi.

//Iteraging over an array

function iteratingOverAnArray()
{
    let letters = ["a", "b", "c"];
    for(const x of letters)
    {
        console.log(x);
    }
}

iteratingOverAnArray();