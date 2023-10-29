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

function vowelsAndConsonants(s) {
    let vowel='aeiou';
    let consonant='bcdfghjklmnpqrstvwxyz';
    let str='';
        for(let i=0;i<s.length;i++){
        if (vowel.includes(s[i])){
            str=str+s[i] +'\n'
        }
        }
         for(let i=0;i<s.length;i++){
        if (!vowel.includes(s[i])){
            str=str+s[i] +'\n'
        }
        }
        return console.log(str);
}



function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}