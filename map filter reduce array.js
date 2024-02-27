//map array method
let arr = [12, 52, 49]
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
})
console.log(a)                         //return array     

//filter array method
let arr2 = [52, 42, 39, 6, 8, 0]
let a2 = arr2.filter((b) => {
    return b < 10
})
console.log(a2)                       //return array

//reduce array method
let arr3 = [1, 2, 3, 5, 4]
const reduce_func = ((h1, h2) => {     //creat function reduce_func
    return h1 + h2
})
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)                   // return value
