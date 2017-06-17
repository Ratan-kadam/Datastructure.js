/*
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var result = words.filter((word) => { /* imp filter */
         return currWordBelonsTo(word) ;
    });

    return result;
};


    function currWordBelonsTo(currWord) {
        currWord = currWord.toLowerCase();
        var row1 = 'qwertyuiop',  /* keyboard rows */
        row2 = 'asdfghjkl',
        row3 = 'zxcvbnm';
        var arrCurrword = currWord.split('');
        var whichRow;

        if(row1.indexOf(arrCurrword[0]) > -1) {
            whichRow = row1;
        }else if(row2.indexOf(arrCurrword[0]) > -1) {
            whichRow = row2;
        }else if(row3.indexOf(arrCurrword[0]) > -1) {
            whichRow = row3;
        }

        // now check all rest of the characters belons to same row

        var isBelongToSameRow = true;

        for(var i=1; i < arrCurrword.length; i++) {
            if(!Boolean(whichRow.indexOf(arrCurrword[i]) > -1)){
                isBelongToSameRow = false;
            }
        }

        return isBelongToSameRow;
    }

/*
    Input: ["Hello", "Alaska", "Dad", "Peace"]
    Output: ["Alaska", "Dad"]
*/
