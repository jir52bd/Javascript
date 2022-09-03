//Template Literals 

var a = 10;
var b = 20;

console.log(`Sum of ${a} and ${b} is ${a+b}`); // `` template literal 

//Template literals also work as a <pre></pre> tag

console.log(`I am learning Javascript
                It is awasome
                    It has lots of advantage.`);

/*-------------------------------------------
    Output:
    Sum of 10 and 20 is 30
    I am learning Javascript
                    It is awasome
                        It has lots of advantage.
 --------------------------------------------*/

var student1 = "Jahirul Islam Razu";

var student2 = "Kamrul Islam Rakib";

function modifier(string, ...values){
    const m = string.reduce((prev, current) => {
        return prev+ current + (values.length ? "Mr. " + values.shift()  : " ");
    }, " ");

    return m;
}


console.log(modifier`Our two students are ${student1} and ${student2}`);


/*----------------------------------------------
    Output:
     Our two students are Mr. Jahirul Islam Razu and Mr. Kamrul Islam Rakib 
 ----------------------------------------------*/


