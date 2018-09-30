/*


Write a function that takes in a string and a target word, return true if the last letter of the string
is the same as the last letter of the target. If they are not equal, return false. aka confirmEnding('this is my test case', 'ease') returns true


*/



const tester = (str, key) => {
    if(str.charAt(str.length) === key.charAt(key.length)){
        return true;
    }
    return false;
}







console.log(tester('this is my test case', 'ease'))