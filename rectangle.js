//Printing the rectangle of variable length and Breadth

//Declaring the variables
var length=5;
var breadth=5;
var char="";

//Creating the loop for printing the rectangle
for(var i=0;i<length;i++)//Outer loop for the length of the Rectangle
{
    char="";
   for(var j=0;j<breadth;j++)//Inner loop for the breadth of the Reactangle
     {
      char=char+"*";
     }
 console.log(char);
}
