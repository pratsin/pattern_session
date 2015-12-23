//Creating the Inverted triangle.

//Variable declartion.
var triangleHeight=5;
var char="";


//Loops for creating the Inverted Triangle;
 for(i=triangleHeight;i>0;i--)//Outer loops for creating the height.
 {
   char="";
   for(j=0;j<i;j++)//Inner loop to creating the string with decreasing order.
   {
     char=char+"*";
   }
   //Printing the value.
   console.log(char);
 }
