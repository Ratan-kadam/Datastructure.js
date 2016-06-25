/**
 * Created by ratan_000 on 6/24/2016.
 */

var myMatrix=[[1,2,3,5,6], [1,2,0,5,6], [0,4,3,2,1]];
var row={}
var column={};

for(var i=0;i< myMatrix.length ;i++){
    for(var j=0;j<myMatrix[i].length;j++){
        console.log(myMatrix[i][j]);
        if(myMatrix[i][j] == 0){

            if(!row[i]){
                console.log("row[i]" + row[i]);
                row[i]=true;
            }
            if(!column[j]){
                row[j]=true;
            }
        }
    }

    // at the end of the loop will have the list of rows and column

    console.log(row);
    console.log(column);
    for(var i in row){
        for(var i=0;i<myMatrix[i].length;i++){
            myMatrix[i]=0;
        }
    }

    for(var j in column){
        for(var i in row){
            myMatrix[i][j]=0;
        }
    }

    // display matrix

    for(var i=0;i< myMatrix.length ;i++) {
        console.log(myMatrix[i]);
    }



}
