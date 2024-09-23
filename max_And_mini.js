// To find highest value 
// write a function
// create a loop that will loop through the numbers and pick the Highest 
// then return the highest number 

//              For maximum number
function highest(numb) {
    let highNumb = numb[0];
    for(let i = 0; i < numb.length; i++) {
        if (numb[i] > highNumb) {
            highNumb = numb[i];
        }
    }

    return highNumb;
}

numbers = [10, 20, 30, 40, 3, 900, 50, 400, 60, 70, 80, 90, 100];
highest(numbers)



//            for Minimum Number
function lowest(aNum) {
    let lowNumb = aNum[0];
    for (let i = 0; i < aNum.length; i++) {
        if (aNum[i] < lowNumb) {
            lowNumb = aNum[i];
        }
    }

    return lowNumb;
}

numbArray = [0.5, 1, 5, 7, 9, 100]
lowest(numbArray)
