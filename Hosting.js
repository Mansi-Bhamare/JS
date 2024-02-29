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

//whenever your js files load before executing that files it stored basic structure of that code in execution context box
//execution  context: it stores all variables and all functions even before values are assign to them.
//var a = 10; var b = 20; function add(a+b);
//it creat scope and in scope it creat executuion context then it stored var a=undefined and var b=undefined and stored functions all body
//this happen becuse of hosting
//So if i have (greet function) then i write that function top of the code
//and when i want i just call function
//i execute that function through out the code without call
//when file load that time greet function get call, we just need to execute
//(add function) var stroed as a undefined and all functions body stored
//in execution context have memory area and execution area
//in memory area have variable values.
//normaly when execution happen it goes to variables value  and then executed and when use hosting the variables are undefined (only varibles).
//hosting does not give error if variable is not defined.