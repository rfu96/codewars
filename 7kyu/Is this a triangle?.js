/*



*/


//my solution

function isTriangle(a,b,c)
{  if(a<=0 || b<=0 || c<=0){
  return false;
  }
   if(a+b>c && b+c>a && a+c>b){
     return true;
   }else {
     return false;
   }
}

//best practice solution

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

//alternative solution

var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2