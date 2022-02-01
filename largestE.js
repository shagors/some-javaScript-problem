function largestElements(numbers){
    let largest = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const ages = largestElements([50, 10, 30, 20, 40, 10, 60]);
const oldest = ages;
console.log(oldest);

// Lowest Number 

function lowestElements(numbers){
    let lowest = 1;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}

const agesL = lowestElements([50, 10, 30, 20, 40, 20, 60]);
// const lowest = agesL;
console.log(agesL);
