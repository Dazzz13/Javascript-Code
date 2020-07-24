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

let myObject = {value: 'My Object' };

global.value = 'Global object';

function third() {
    return this.value;
    
}

//console.log(third());

console.log(third.call(myObject, 'bob'));
console.log(third.apply(myObject, ['bob']));