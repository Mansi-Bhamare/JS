//Q1: Reverse string in javascript
let string = "1, 2, 3, 4, 5";
let newstring = '';
for(let i = string.length-1; i>=0; i--){
    newstring += string [i];
}

console.log(newstring);