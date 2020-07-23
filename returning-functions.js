/*
 DON'T DO THIS!!!!
var MyVariable = 'I am at the global scope';

THIS EITHER!!!
var myFunction = function() {
    console.log('me too');
}

*/
// Never do this! //
/*
function one() {
    return 'one';
}

//let value = one();
//console.log(one());

let value = one;
console.log(value());

//string
//number
//boolean
//undefined
//function
*/
/*
function two() {
    return function () {
    console.log('two');
    }
}

let myFunction = two();
myFunction();
*/

function three() {
    return function () {
    return 'three';
        
    }
    
}
console.log(three()());