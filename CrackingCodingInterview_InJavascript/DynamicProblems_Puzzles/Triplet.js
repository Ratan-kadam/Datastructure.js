/**
 * Created by ratan_000 on 6/29/2016.
 */

arr=[1,2,3,4,5];
k=12; // triplet sum should be 12


function triplet(arr,k) {


    for (var i = 0; i < arr.length; i++) {
        // outer loop for each element
        var last = arr.length - 1; // pointing to last elements
        var start = i+1; //
            while(start < last) {
                // looping thru all the elements after the current elements
                if ((arr[i] + arr[start]+ arr[last]) == k) {
                    console.log("triplets" + arr[i] + ':' + arr[start] + ':' + arr[last]);
                    break;  // as increasing / decresing elements don't give exact result for this loop
                } else if( (arr[i] + arr[start]+ arr[last]) < k){
                    // current triplet sum is less than total, so increasing start to next pointter
                    start= start+1;
                }else if((arr[i] + arr[start]+ arr[last]) > k){
                    // current triplet is greater so decreasing last
                    last = last-1;
                }
            }

    }
}

triplet(arr,12);