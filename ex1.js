// ex1.)Write a JavaScript program to compute the exponent of a number
// PS:use Recursion
function power(base, exp) {
    if (exp === 0) {
      return 1;
    } else {
      return base * power(base, exp -1);
    }
  }
  
  console.log(power(4,2));