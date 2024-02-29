//Syncronous Programming
let a = prompt("What is your name?");
let b = prompt("What is your age?");
let c = prompt("What is your fav color?");
console.log(a + "is" + b + "years old" + c +"fav. color.");    //this executed line by line


//Asyncronous Programming
document.write("hello")
let d = setTimeout(function(){
    alert("This is setTimeOut")
}, 3000)
clearTimeout(a)
console.log(a)                      //this executed one time all