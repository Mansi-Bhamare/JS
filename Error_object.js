try{
     throw new Error("India is a country")
} catch (error) {
     console.log(error.name)
     console.log(error.message)
}

try{
    throw new ReferenceError("India is a country")
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

/********THE ERROR OBJECT:********
for all the built in errors, the error obj. has 2 main propertiea:

try{
    HEY:  //error variable not defined
} catch (erorr){
    alert(error.name)
    alert(error.message)
    alert(error.stack)
}*/

try{
  let age = prompt("Enter your age")
  age = Number.parseInt(age)
  if(age>150){
    throw new ReferenceError("This is probably not true")
  }
} catch (error){
    console.log(error.name)
    console.log(error.messahe)
    console.log(error.stack)
}

console.log("The script is still running")

/* ********"THROWING CUSTOM ERROR"********
We can throw our own error by using the "throw syntax".

if(age>|80){
    throw new error ("Invalid Age")
    ...
} */