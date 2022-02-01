// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// Using Loop

/*
const fibo = [0,1];
for(let i = 2; i <= 10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);
*/


// Using Function

/*
function fiboSeries(num){
    const fibo = [0,1];
    for(let i = 2; i <= num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

const fiboSer = fiboSeries(13);
console.log(fiboSer);
*/

function fiboSeries(num){
    if(typeof num != 'number'){
        return 'Give a Number'
    }
    if(num < 2){
        return 'please enter a positive number above 2 and more'
    }
    const fibo = [0,1];
    for(let i = 2; i <= num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

const fiboSer = fiboSeries(15);
console.log(fiboSer);