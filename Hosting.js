//EX:1
//Following two lines will run successfuly due to javaScript hoisting.
console.log(a)
greet()
function greet(){
  console.log("Good Morning")
}

var a = 9;        //declaration hoisting to the top but initialization is not
console.log(a)

//EX:2
console.log(a)
greet()
function greet(){
  console.log("Good Morning")
}
let a = 9;        //(let) cannot access 'a' before initialization
console.log(a)    //when use (let n const) 