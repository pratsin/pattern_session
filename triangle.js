//Creating the triangle

//Declaring the variables
var triangleHeight=5;
var char="";


//Loops for creating the triangle.
  for(var i=1; i<=triangleHeight; i++)//Outer loop for creating the Height of the triangle.
  {
      char="";
    for(var j=0;j<i;j++)//Inner loop for increasing the stars for each outer iteration.
     {
       char=char+"*";
     }
     //Printing the variable char accordingly.
     console.log(char);
  }
