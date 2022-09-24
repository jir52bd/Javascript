function frinedlyFunction() {
    return Promise.resolve(`Hello`);
}

console.log(frinedlyFunction());
/*
    Output:
    Promise { 'Hello' }
*/

async function frinedlyFunction() {
    return `hello`;
}

console.log(frinedlyFunction());
/*
    Output:
    Promise { 'Hello' }
*/
