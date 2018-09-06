//test question
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
//For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.



const test = (array, k) => {
    const values = [];
    let returner = false;
    for(let i = 0; i < array.length;  i++){
        for(let j = 1 + i; j < array.length; j++){
            values.push(array[i] + array[j])
        }
    }   
    values.forEach(element => {
        if (element === k) {
          returner = true;
        }
    });

    console.log(values)

    return returner;
}

console.log(test([10,15,3,7,16], 19));