/**
 * Created by ratan_000 on 8/9/2016.
 */
/*matrix rotation
1. outer loop on layers
1.1 inner loop var swapping the variables
     always calculate the first (layer) , last =(n-1-layer) , offset = innerloop running var - first
     swap the variables in clock or Anticlock wise direction
 */

function RotateMe(mat,n){
   // outer loop
    for(var layer=0; layer < n/2 ; layer++ ){
        var first = layer;
        var last =  n-1-layer; // tells where to stop
        // inner loop

        for(var i=first;i<last;i++){
            var offset = i-layer;
            //
            var top = mat[first][i]; // remember

            mat[first][i] = mat [last-offset][first];

            mat [last-offset][first] =  mat [last][last-offset];

            mat [last][last-offset] = mat [i][last];

            mat[i][last] = top; //remember



        }


    }
}