let uniqueNumbers = new Set([1,2,3,4,5,6]);
let numberSquareMap = new Map();
uniqueNumbers.forEach(number => { 
    numberSquareMap.set(number,number*number);
});
    console.log("unique Numbers:");
    console.log(Array.from(uniqueNumbers).join(', '));
    console.log("\nNumber-Square Map :");
    numberSquareMap.forEach((square,number) => {
        console.log(`${number} : ${square}`);
    });