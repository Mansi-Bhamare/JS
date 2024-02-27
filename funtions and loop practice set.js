//write a program to print the marks of a studet in an object using for loop.
let marks = {
    pooja:80,
    raj:82,
    shrya:70,
    sona:90,
    rupal:95
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] +" are " + marks[Object.keys(marks)[i]])
}

//use for in looplet marks 
   
for(let key in marks){
    console.log("The marks of " + key +" are " +marks[ key])
}   //console.log("The marks of " + Object.keys(marks)[i] +" are " + marks[Object.keys(marks)[i]])


/*correct number problem 3
let cn = 43
let i
while(i != cn){
    console.log("Try again")
    i = prompt("Enter a number")
}
console.log("Enter Correct Number")*/

//problem 4 FIND MEAN
const mean =(a, b, c, d)=>{
    return(a + b + c + d) / 2
}
console.log(mean(4, 5, 6, 7))