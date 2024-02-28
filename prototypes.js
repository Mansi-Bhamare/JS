let a = {
    language : "JavaScript"
}
console.log(a)
/* JS object have special property called prototype that is either or refrence other object.
****setting prototype****
We can sit a prototype by setting __proto__
*/

let p = {
    run: () => {
        alert("run")
    }
}
a.__proto__ = p
a.run ()
