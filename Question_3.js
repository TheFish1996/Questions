/*

    Turn this sentence "hello make this capital"

    into "Hello Make This Capital"

    use O(n) efficiency

*/


const tester = value => {
    let words = value.split(" ")

    let str = ''

    for(let i = 0; i < words.length; i++){
        let letter = words[i].charAt(0).toUpperCase();//this is right, or should be at least
        let test = words[i].replace(words[i].charAt(0) , letter)
        str = str + test.toString()  + " ";
    }
    return str;

}


console.log(tester("hello make this capital"))
