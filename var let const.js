//var let const
let b = "abc"
const author = "abc"
author = 5  //throws an error because const. annot be change.
b = 4 

let c = null
let d = undefined
{
    let b = 'this'
    console.log(b)
}
 console.log(b)