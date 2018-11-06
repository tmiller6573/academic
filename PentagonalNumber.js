//Please view on CoderByte.com for full description and instructions. This is only a solution, not functioning stand-alone code.
//https://www.coderbyte.com/results/tmiller6573:Kaprekars%20Constant:JavaScript
//Timothy Miller, 2018

function PentagonalNumber(num) { 

  // code goes here
    var x = num;
    var y = 1;
    var p = 0;
    
    
    //Make sure num is a positive number
    if (num <= 0) {
      return 0;
    }
    //Check for if input is one
    if (num === 1) {
        return 1;
    }
    
    for (var i = num - 1; i > 0; i--) { 
      //Calculate new perimeter w/ each itteration
      p = (x - 1) * 5;
      
      y = y + p;
      
      x--;
    }
  return y; 
         
}
   
// keep this function call here 
PentagonalNumber(readline());
