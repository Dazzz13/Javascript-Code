let OriginalCar = {
    make: 'BMW',
    model: '745li',
    year: 2010
};

let newCar = Object.create(OriginalCar);
console.log(newCar.make);
newCar.make = 'Audi';
console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);

OriginalCar.doors = 4;
console.log(newCar.doors);

console.log(OriginalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));