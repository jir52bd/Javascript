//Rest Operator

/*befour rset operator when we did not know 
how may elements are paass functon as artument
in this case we use atguments
*/
function myFunc() {
    console.log(arguments);
}

myFunc(2, 3, 4, 5, 6, 7);

/*
    Output: we have an array object 
    [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6, '5': 7 }
 */


function myRestOpe(a,...parameters){ //params must be last operator in patameter and use only one time
    console.log(a);
    console.log(parameters);
}

myRestOpe(400, 5, 6, 7, 8, 9);

/*
  Output: 
    400
[ 5, 6, 7, 8, 9 ]
*/









