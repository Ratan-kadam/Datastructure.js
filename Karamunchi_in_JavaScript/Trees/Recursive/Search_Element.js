/**
 * Created by ratan_000 on 6/29/2016.
 */


function SearchMe(ele,root){

    // base condition
    if(root == ele){
        return true;
    }

    var left=SearchMe(root.left);
    if(left){
        return true;
    }
       var right = SearchMe(root.right);

     if(right){
         return true;
     }


}