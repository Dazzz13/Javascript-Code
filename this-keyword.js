/* var car = {
    make: 'BMW',
    model: '745li',
    year: 2010,
    getPrice: function () {
        //perform some calc
        return 5000;
        
    },
    printDescription: function () {
        console.log(this.make + ' ' + this.model);
        
    }
}

car.printDescription(); */

/* function first() {
    return this;
}

console.log(first() === global); */
/* 
function second() {
    'use strict'
    return this;
}

console.log(second() === global);
console.log(second() === undefined); */

/* let myObject = {value: 'My Object' };

//This property is set on the global object//
global.value = 'Global object';

function third() {
    //Returns something different depending on how we call this method//
    return this.value;
    
}

//console.log(third());

//Both call and apply allow you to explicitly set what you want to represent 'this'. //
//The difference is in how additional arguments by the function are sent//

console.log(third.call(myObject, 'bob'));
console.log(third.apply(myObject, ['bob'])); */

function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
    
}

let customer1 = {
    firstName: 'bob',
    lastName: 'tabor',
    print: fifth
}
let customer2 = {
    firstName: 'richard',
    lastName: 'boughton',
    print: fifth
}

customer1.print();
customer2.print();