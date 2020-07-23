let a = 'first';

function scopeTest () {
    console.log(a)
    a = 'changed';
    
    if (a != '') {
        console.log(a);

        let c = 'third';
        console.log(c);
    }
    //console.log(c);
    //let b = 'second';
    
}

scopeTest();
//console.log(b);