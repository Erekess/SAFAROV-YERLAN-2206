'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
 let firstLargest = -1;
    let secondLargest = -1;
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        if (currentNum > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = currentNum;
        } else if (currentNum < firstLargest && currentNum > secondLargest) {
            secondLargest = currentNum;
        }
    }
    return secondLargest;
}

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
