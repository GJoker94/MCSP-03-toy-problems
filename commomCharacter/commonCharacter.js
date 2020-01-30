//Write a function `f(a, b)` which takes two strings as arguments and returns a
//string containing the characters found in both strings (without duplication), in the
//order that they appeared in `a`. Remember to skip spaces and characters you
//have already encountered!

// Example: commonCharacters('acexivou', 'aegihobu')
// Returns: 'aeiou'

//Extra credit: Extend your function to handle more than two input strings.

var commonCharacters = function (string1, string2) {
    //O: string of characters tat was sence within both input
    //I: two strings with characters
    //C:N/A
    //E:N/A
    // create new variable and it is equal to an empty string 
    let common = '';
    // run the sting1 through a for-loop 
    for (let i = 0,i < string1.length, i++) {
        // create a nested for-loop within string1 to loop through string2
        for(let k = 0,k < string2.length, k++){
            if (string1[i] === string2[k]){
                common = common + string[i]

            }
        }
    }
    return common
    // sting2 will run through the loop assessing it with string1[i]
    // once character are alike or the same we will then push string[i] into our empty string

};