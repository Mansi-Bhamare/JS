setTimeout(() => {
    console.log("Hacking wifi.... please wait")
}, 1000)

try {
    console.log(Rahul)
}
catch (error) {
    console.log("error")
}

setTimeout(() => {
    console.log("Fetching userName and password... Please wait...")
}, 2000)

setTimeout(() => {
    console.log("Hacking facebook id... Please wait...")
}, 3000)

setTimeout(() => {
    console.log("Fetching username and password... Please wait...")
}, 4000)

//We al make a mistakes also sometimes our script can have errors. useually a program stop when on error occurs.
// The TRY...CATCH syntax allows us o catch errors so that script instead of dying ca do soe thing more reasonable.

/********TRY...CATCH SYNTAX:********
te try catch syntax has two main blocks:
try and then catch.
try {
    //try the code
}
catch(error) {                    => THE "(error)" VARIABLE CONTAINS 
    //error handling                     AN ERROR OBJECT.
}
*/

/* ******** WORKING:********
1. First the code in try is executed.
2. If there is no error, catch is ignored else catch is excuted.
*/ 

setTimeout(() => {
    console.log("Hacking wifi.... please wait")
}, 1000)

try {
   setTimeout(()=>{                   // "try...catch" works only synchronusly.
    console.log(Rahul)                //If an exception happens in scheduled code,
},100)                                //like in setTimeout, then "try...catch" want catch it:
}
catch (error) {
    console.log("error")
}

setTimeout(() => {
    console.log("Fetching userName and password... Please wait...")
}, 2000)

/*try{
    setTieout(function()) {             =>SCRIPT DIED AND
        //error code                      CATCH WONT WORK.
    }
}
catch...

Thats because the function it self is executed later, when the engine has already left the try... catch construct.*/
