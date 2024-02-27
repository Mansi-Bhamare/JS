
let p1 = new Promise((resolve, reject)=>{                     
    console.log("pending")
    setTimeout(()=>{
        //console.log("promise is resolved")
        resolve(true)
    }, 5000)
})

let p2 = new Promise((resolve, reject)=>{
    console.log("pending")
    setTimeout(() => {
        //console.log("promise is resolved")
        reject(new Error("I am an error"))
    }, 5000)
})

p1.then((value) => {
    console.log(value)
})
p2.catch((error) => {
    console.log("ERROR OCCURRED IN P2")
})




/*A JavaScript Promise object can be:

myPromise.state	   myPromise.result
 "pending"	         undefined
 "fulfilled"	     a result value
 "rejected"	         an error object */

// .then  act like IF function*

//EX 1
function demo() {
	console.log("Function called!!!")    
	return Promise.resolve("Success");

}
demo().then()
//It gives u only console.log statement

//EX 2
function demo() {
	console.log("Function called!!")
	return Promise.resolve("Success");
}
demo().then(
	(message) => {
		console.log("Then success:" + message);
	}
)
//It gives a console.log function and then gives <.then()> statement.
//It gives .then() after pass statement in .then()

//EX 3
function demo() {
	console.log("Function called!!")
	return Promise.resolve("Success");
}
demo().then(
	(message) => {
		console.log("Then success:" + message);
	},
	(message) => {
		console.log("Then failure:" + message);
	},
)
//1st gives consle.log after that gives message
//It give 1st message 

//EX 4
function demo() {
	console.log("Function called!!")
	return Promise.resolve(1);
}
demo().then(
	(value) => {
		console.log(value);
	return ++value;
	},
	
	).then(
	(value) => {
		console.log(value);
	}
)
//1st gives consle.log after that gives message
//It give 1st value then gives 2nd value

let demo = new Promise((resolve, reject) => {
	resolve(1);
})
let call = demo.then(
	(value) => {
		console.log(value);
		return ++value;
	},
	(message) => {
		console.log(message);
	});
	console.log(call);
	setTimeout(() => {
	console.log(call);
});






