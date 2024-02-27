//FOR LOOP
//ex 1
for (let i = 0; i< 5; i++){  /*FOR(statement 1, statement2, statement3) {
                             code to be executed   }*/
    console.log(i)             //0 to (n-1)
}

//ex 2
let sum = 0
let n = prompt("Enter the value")
n = Number.parseInt(n)
for (let i = 0; i < n; i++){
    sum += (i + 1)
}
console.log("sum of first" + n + "natural numb is")

//ex3
let obj = {
    pooja:80,
    raj:82,
    shrya:70,
    sona:90,
    rupal:95
}

//FOR IN LOOP
for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a] ) 
}

 //FOR OF LOOP
for (let b of "sona"){
    console.log( b) 
}

let num = propt("Enter the value of n")
num = Number.parseInt(num)

let i = 10;
do{
    console.log(i)
    i++;
} while (i < n) 