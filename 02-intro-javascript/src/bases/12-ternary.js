// ternary conditional operator.

// in fact is a short way for taking decisions !.

// this is a tradicional way to take decisions with if-else block.
const active = true;
let msg = '';

if ( active ) {
    msg = 'Active';
} else {
    msg = 'Inactive';
}

console.log(msg);


// This is how to do it with a ternary conditional operator structure.
const msg2 = ( active ) ? 'Active!!!' : 'Inactive...';
console.log(msg2);

// also in the condition to be evaluated we can be explicit with the variable
// and the condition '=== true', but this variable using to be booleans so,
// i will try to avoid condition most of time.
const msg3 = ( active === true ) ? 'Active!!!' : 'Inactive...';
console.log(msg3);

// there is another interesting way to execute a decision:
//
// if true, the output will be 'is Active !', if false, the output will be 'false':
// i think it's cool to know this structure for decision taking ! :)
// it's basically and AND operator.
const msg4 = active && 'is Active !';
console.log(msg4);