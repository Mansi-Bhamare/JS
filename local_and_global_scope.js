/*JS has 3 types of scopes
1.Block Scope
2.Function Scope    (BLOCK AND FUNCTION IN LOCAL SCOPE)
3.Goble Scope */




//ex:1
{
    let a = 8;     //BLOCK SCOPE(give error)
}
console.log(a)

/*let and const provide block level sope whih means that 
the variable decleard inside a { } cannot be accused from 
outside the block*/

//ex:2
function ax() {
    let a = 8;     //FUNCTION SCOPE(giveS 8 N "a IS NOT DIFINED")
console.log(a)
}
 ax()
console.log(a)


//ex:2A
let p = 9
function ax() {
    let a = 8; 
console.log(p)
console.log(a)
}
 
ax()
console.log(p)
console.log(a)

/* Variable declared within a JS funtion become LOCAL to the function
  Variable declared outside a funtion, becomes GLOBLE. */
