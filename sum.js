const numbers = [44, 45, 534, 32, 54, 5, 78, 90];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const elements = numbers[i];
    sum = sum + elements;
}
console.log(sum);

// with function

function arrayTotal(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
    const elements = numbers[i];
    sum = sum + elements;
    }
    return sum;
}

const total = arrayTotal([30, 20, 50]);
console.log(total);