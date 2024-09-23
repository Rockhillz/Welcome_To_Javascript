// To capitalize first letters
// 1. Take in string either through prompt or input in a function
// 2. use the charAt to get the specific index you want to capitalize. 
// 3. Use the toUpperCase to take it up.Use
// 4. Then use the slice to slice it. also use index to slice from where you want 

function capitalizing() {
    let insetText = prompt("Input a text");
    let capitals = insetText.charAt(0).toUpperCase() + insetText.slice(1);
    console.log(capitals)
}

capitalizing()