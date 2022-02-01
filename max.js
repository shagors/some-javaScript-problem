const business = 450;
const minister = 750;
const army = 550;

// way

// if(business > minister){
//     console.log('Business Man is Richer');
// }else{
//     console.log('Minister is richer');
// }

/*if(business > minister && business > army){
    console.log('Business is bigger');
}
else if(minister > business && minister > army){
    console.log('Minister is bigger');
}
else{
    console.log('Army is bigger');
}*/

// Shortest Way

var max = Math.max(business, minister, army);
console.log(max);

// Function Way   two number
// function findLargest(first, second){
//     if(first > second){
//         return first;
//     }else{
//         return second;
//     }
// }

// const larger = findLargest(550, 650);
// console.log('larger Value', larger);


// Max Number find out from three numbers
// function findLargest(first, second, third){
//     if(first > second && first > third){
//         return first;
//     }
//     else if(second > first && second > third){
//         return second
//     }
//     else{
//         return third;
//     }
// }

// const larger = findLargest(200, 300, 400);
// console.log(larger);



// Min Number find out from three numbers
function findLargest(first, second, third){
    if(first < second && first < third){
        return first;
    }
    else if(second < first && second < third){
        return second
    }
    else{
        return third;
    }
}

const larger = findLargest(200, 300, 400);
console.log(larger);
