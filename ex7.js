 


// let date = new Date();
// let day = date.getDate();
// let month = date.getMonth();
// let year = date.getFullYear();

// let fullDate = day + "/" + month + "/" + year
// console.log(fullDate);


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);