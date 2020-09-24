// FUNCIONES RECURSIVAS

var factorial = function(n)
{
  if ((n == 0 ) || (n == 11))
    return 1;
  else
{   
    console.log("factorial " + n); 
    return(n * factorial(n - 1));}
}

console.log(factorial(5));
