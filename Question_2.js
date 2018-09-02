const test_2 = (array) => {
    let values = [];
    const result = []

    for(let i = 0; i < array.length; i++){
        let sum = 1;
        values =  array.filter(numbers => {
            return numbers != array[i];
        });
        values.forEach(number =>{
            sum = sum * number;
        });
        result.push(sum);
    }
    return result;
}


console.log(test_2([3,2,1]))