function arrayTotal(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
    const elements = numbers[i];
    sum = sum + elements;
    average = sum / numbers.length;
    }
    return average;
}

const total = arrayTotal([30, 20, 50, 20]);
console.log(total);