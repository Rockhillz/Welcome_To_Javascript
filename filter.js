// This is consuing me oo. This is from GPT oooo

function numbed() {
    let arra = [1, 100, 40, 67, 98, 88, 2, 5, 9];
    
    // Use filter with a callback function to check if each element is less than 50
    let newArra = arra.filter(function(value) {
        return value < 50;
    });

    console.log(newArra);  // This will output the filtered array
}

numbed();