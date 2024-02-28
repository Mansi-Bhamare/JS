//EX1:
const hello = abc => console.log("Hello" + abc)
hello ("harry")

//EX2:
hello = function() {
    return "Hello World!";   //BEFORE ARROW
  }

  //EX3:
  hello = () => {
    return "Hello World!";     //AFTER ARROW
  }