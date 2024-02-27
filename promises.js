/* let promise = new promise (function (resolve,reject){
    //execute
}); */


let promise = new promise (function(resolve, reject){
    alert("PROMISE")
    resolve(56)
})

console.log("Hello one")
setTimeout(function(){
    console.log("Hello two in 2 sec")
}, 2000)

console.log("My name is " + "Hello three")
console.log(promise)