/*
 Created by ratan_000 on 3/8/2016.
 */

function rotateMe(myMatrix) {
    console.log("we have received myMatrix:");
    console.log(myMatrix);
    var n = myMatrix.length;
    for (var ring = 0; ring < (n / 2); ring++) {
        var start = ring;
        var end = n - 1 - ring;

        for (var i = start; i < end; i++) {

            var offset = i - start;

            var Temp = myMatrix[start][i];   // moving  Top left Element of the Current Ring  to Temp Variable


            myMatrix[start][i] = myMatrix[end - offset][start]; // moving bottom - left corner


            myMatrix[end - offset] [start] = myMatrix[end][end - offset]; // moving  bottom - right corner


            myMatrix[end][end - offset] = myMatrix[i][end]; // moving  top - right corner


            myMatrix[i][end] = Temp; // moving  top - left  corner
        }

    }

    console.log(myMatrix);

}
// -------------- Main Run ----------------------------------//
var mymyMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotateMe(mymyMatrix);
