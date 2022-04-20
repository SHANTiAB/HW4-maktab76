var myArray1 = [5, 7, 9];
var myArray2 = [9, 8, 5, 10];
var myFinalArray = myArray1.concat(myArray2.filter((item) => myArray1.indexOf(item) < 0));
console.log(myFinalArray);
 