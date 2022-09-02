//important object
var x = 5;
var y = 10;

var myObject = {
    name: 'Javascript',
    est: '1995',
    founder: 'Brendan Eich',
    rating: 1,
    x, // if outer var and object element are in name name we use short from 
    y,
    z : x+y,
}
// must use Object -- O is always Capital letter
var keys = Object.keys(myObject);
console.log(keys);

var values = Object.values(myObject);
console.log(values);

var entries = Object.entries(myObject);
console.log(entries);


