function thirdGreatestNumberInArray(arr) {
    let firstNumber = 0;
    let secondNumber = 0;
    let thirdNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstNumber) {
            thirdNumber = secondNumber
            secondNumber = firstNumber
            firstNumber = arr[i]
        } else if (arr[i] > secondNumber && arr[i] < firstNumber) {
            thirdNumber = secondNumber
            secondNumber = arr[i]
        } else if(arr[i] > thirdNumber && arr[i] < secondNumber){
            thirdNumber =arr[i]
        }
    }
    console.log(thirdNumber);
}
let array = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
thirdGreatestNumberInArray(array);

//Using sort

//craete an array 
//sort that array
//find the third number from the end of the sorted array

// const array = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];

// //make a copy with the spread syntax
// const sortedArray = [...array].sort((a,b)=>a-b); //a-b ascending

//     const thirdGreatestNumber = sortedArray[sortedArray.length-3];
    
//     console.log(sortedArray);
//     console.log(thirdGreatestNumber);
