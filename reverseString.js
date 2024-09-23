// To reverse string using Javascript 
// 1. Take in string either through prompt or input in a function 
// 2. turn the string coming in into an array using split
// 3. use the reverse function to reverse the string  

function reversing() {
    let inputString = prompt("Input words here");

    let arrayString = inputString.split(" ")
    let reverseString = arrayString.reverse()
    console.log(reverseString)
}

reversing()
