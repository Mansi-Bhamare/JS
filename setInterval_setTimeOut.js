document.write("hello")
let a = setTimeout(function(){
    alert("This is setTimeOut")
}, 3000)
clearTimeout(a)
console.log(a)