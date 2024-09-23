// Summing of numbers 
// create the function 
// create a variable that will start from the zero index 
// loop through it. Then start adding the numbers 

function sunmming(numbe) {
    let cal = numbe[0];
    for (let i = 0; i < numbe.length; i++) {
        // cal += cal 
        cal += numbe[i]
    }
    return cal;
}

numberss = [1, 2, 3, 4, 5, 6]
sunmming(numberss)