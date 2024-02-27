/*We make any function async and after that we make promise await*/

async function abc(){
let delhiweather = new Promise((resolve, reject)=>{
    setTimeout(()=>{
resolve("27 Deg")
    },2000)
})

let bengloreweather = new Promise((resolve, reject)=>{
    setTimeout(()=>{
resolve("21 Deg")
    }, 4000)
})

let delhiW = await delhiweather
let bengloreW = await bengloreweather
return [delhiW, bengloreW]
}

console.log("Welcome the weather control room")
let a = abc()
console.log(a)