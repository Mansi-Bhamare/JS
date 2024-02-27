document.getElementById("demo").innerHTML =
Number("3.14") + "<br>" +
Number(Math.PI) + "<br>" +
Number("    ") + "<br>" ;  /*convert string into number*/
/*3.14
3.141592653589793
0*/


let x = 123;
document.getElementById("demo").innerHTML =
  x.toString() + "<br>" +
   (123).toString() + "<br>" +
   (100 + 23).toString();         /*toString() method*/
