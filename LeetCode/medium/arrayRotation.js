var search = function(arr, target) {
    var pivot = null;

    if(!arr.length || target === undefined){
        return false;
    }

    // find the pivotal where the rotation happens

    for(var i=0 ;i < arr.length ; i++) {
        if(arr[i] > arr[i+1] ) {
            pivot = i+1;
        }
    }

    function binarysrc(arr, start, end) {


        if(start > end) {
          return false;
        }

        var mid = Math.ceil((start + end) / 2);
        if(arr[mid] === target) {
            console.log("found !!!!!!! index : " , mid);
            return true;
        }

          binarysrc(arr, start, mid-1);
          binarysrc(arr, mid+1, end);


    }

    // if pivotal present then apply the binary search on two set separately.

    if(pivot) {
        // apply binary on 2 different set.
         var result = binarysrc(arr, 0 , pivot);
         if(!result) {
           binarysrc(arr, pivot+1, arr.length-1);
         }
    }else {
        // apply binary on the entire array
    }

};

search([4,5,6,7,0,1,2], 6);
