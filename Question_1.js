//test question
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