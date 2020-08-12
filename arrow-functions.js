/* let hi = () => { console.log('howdy');}
hi(); */

/* let hi = (name) => { console.log(`Howdy ${name}`) };
hi('bob'); */

/* let add = (a, b) => { return a+b };
console.log(add(7, 3)); */

/* let names = ['David', 'Eddie', 'Alex', 'Michael' ];
names.map( (name) => { console.log(`Howdy ${name}!`) } );
*/


/* let names = ['David', 'Eddie', 'Alex', 'Michael' ];
let i = 0;
names.map( (name) => { i++; console.log(`Howdy ${name}${i}!`) } );
 */

let names = ['David', 'Eddie', 'Alex', 'Michael' ];
var transformed = names.map((name) => { return `Howdy ${name}!` });
console.log(transformed);