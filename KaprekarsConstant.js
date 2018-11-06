//Please view on CoderByte.com for full description and instructions. This is only a solution, not functioning stand-alone code.
//https://www.coderbyte.com/results/tmiller6573:Kaprekars%20Constant:JavaScript
//Timothy Miller, 2018

function KaprekarsConstant(num) { 

  // code goes here
  var x = [0,0,0,0];
  var y = [0,0,0,0];
  var n = num;
  var t = 0;
  
  if (num === 6174) {
      return 0;
  }
  
  while (n != 6174) {
      
      n = calcAlg(n);
      
      t++;
  }
  
  return t; 
         
}

function numToArr(num) {
    
    var a = [0,0,0,0];
    
    a[0] = Math.floor(num / 1000);
    a[1] = Math.floor(num / 100) - a[0] * 10;
    a[2] = Math.floor(num / 10) - a[1] *10 - a[0] * 100;
    a[3] = Math.floor(num / 1) - a[2] * 10 - a[1] * 100 - a[0] * 1000;
    
    return a;
}

function arrToNum(a) {
    
    var n = a[0] * 1000 + a[1] * 100 + a[2] * 10 + a[3];
    
    return n;
}

function calcAlg(num) {
    x = numToArr(num);
    y = numToArr(num);
    
    x.sort(function (a, b) {return a - b});
    y.sort(function (a ,b) {return b - a});
    
    x = arrToNum(x);
    y = arrToNum(y);
    
    n = y - x;
    
    return n;
    
}


   
// keep this function call here 
KaprekarsConstant(readline());
