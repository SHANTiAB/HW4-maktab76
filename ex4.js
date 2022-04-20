// Write a JavaScript function to remove. 'null', '0', '""',
// 'false', 'undefined' and 'NaN' values from an array.


function remove(array1) {
    array1 = array1.filter(function (item) {
        return (item !== null && item !== false &&
            item !== 0 && item !== "" && item != NaN && item !== undefined );
    });
    return array1.filter(Boolean);
}

console.log(remove(["", false, 9, 0, 10, null, NaN, "popi", undefined]));