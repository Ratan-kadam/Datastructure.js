/*
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
 var myWord = s.split('');
 var lastIndex = myWord.length - 1;

 for(var i=0; i< Math.ceil(myWord.length/2) ; i++) {
     var temp = myWord[i];
     myWord[i] = myWord[lastIndex];
     myWord[lastIndex] = temp;
     lastIndex--;
 }

 myWord = myWord.join('');

 myWord = myWord.split(' ');

 lastIndex = myWord.length - 1;

  for(i=0; i< Math.ceil(myWord.length/2) ; i++) {
     temp = myWord[i];
     myWord[i] = myWord[lastIndex];
     myWord[lastIndex] = temp;
     lastIndex--;
 }

 return myWord.join(' ');
};


/*

input : "hi ratan milind"

output: "ih natar dnilim"

*/
