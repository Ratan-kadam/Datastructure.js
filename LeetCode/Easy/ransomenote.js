/*
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var validLetters = {};
    // maintaining each letter count

    for(var i=0; i< magazine.length; i++) {
        if(validLetters[magazine[i]] > 0) {
            validLetters[magazine[i]]++;
        }else {
            validLetters[magazine[i]] = 1;
        }
    }

    // traversing thru the ransome note
    for(i=0; i< ransomNote.length; i++) {
        if(ransomNote[i] == ' ') {
            continue;  //  avoiding space
        }
        if(validLetters[ransomNote[i]] > 0) {
            validLetters[ransomNote[i]] = validLetters[ransomNote[i]] - 1; // reducing the count
        }else {
            // eighter the letter count is 0 OR letter is not available in map
            return false;
        }
    }

    return true;

};
