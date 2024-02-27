//array
let marks_class = [56, 52, 44,2.2, "Not Present"]
console.log(marks_class)
console.log(marks_class[0])
console.log(marks_class[1])
console.log(marks_class[2])
console.log(marks_class[3])
console.log(marks_class[4])
console.log(marks_class[5])

//array methods
let num = [1, 3, 4, 45,2]
b = num.toString()
console.log(b, typeof b)     //b is now string.

c = num.join("_")
console.log(c, typeof c)     //"JOIN" method of array

d = num.pop()
console.log(d, typeof d)      ///POP method

e = num.shift()
console.log(e, typeof e)     //shift method 


//find lenght of array
let marks_class_A = [56, 52, 44,56,77]
console.log(marks_class_A)
console.log(marks_class_A[0])
console.log(marks_class_A[1])
console.log(marks_class_A[2])
console.log(marks_class_A[3])
console.log(marks_class_A[4])
console.log("lenght of array",marks_class.length) 


//find age by BDAY

function underAgeValidate(birthday){
	// it will accept two types of format yyyy-mm-dd and yyyy/mm/dd
	var optimizedBirthday = birthday.replace(/-/g, "/");

	//set date based on birthday at 01:00:00 hours GMT+0100 (CET)
	var myBirthday = new Date(optimizedBirthday);

	// set current day on 01:00:00 hours GMT+0100 (CET)
	var currentDate = new Date().toJSON().slice(0,10)+' 01:00:00';

	// calculate age comparing current date and borthday
	var myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));

	if(myAge < 18) {
     	    return false;
        }else{
	    return true;
	}

} 

console.log(underAgeValidate('2011-02-21')); 
 


