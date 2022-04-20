
// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.

 
function uppercase(str)
{
  var arr = str.split(' ');
  var newarr = [];
    
  for(var x = 0; x < arr.length; x++){
      newarr.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1));
  }
  return newarr.join(' ');
}
console.log(uppercase("the quick brown fox"));