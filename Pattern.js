//Creating pattern with the help of string and considering 

//Variable declerations
var traingleHeight=5;
var n=20;
var char2="";
var char="";



  for(var i=traingleHeight;i>0;i--)//Outer for loop for height of the triangle
  {       char="";
      for(var j=0;j<i;j++)//Nested inner traingle for the stars
      {
          char=char+"*";
      }
      char2=char;
    for(var k=(traingleHeight-i);k<(2*(traingleHeight-i));k++)//Nested with the first loop for spaces in between
    {
        char2=char2+"  ";
    }

      char2=char2+char;
      //For printing the characters on every iterations.
      console.log(char2);
  }
