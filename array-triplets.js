function triplets(arr, sum) {
    for(let i=0; i < arr.length-2; i++) {
        let set1 = new Set();
        let temp = sum - arr[i];
        for (j = i+1; j < arr.length-1; j++) {
            if (set1.has(temp-arr[j])) {
                console.log(arr[i]+","+arr[j]+","+ (temp-arr[j]));
                // return true;
            }
            set1.add(arr[j]);
        }        
    }
    return false;
}

let arr1 = [1,4,6,5,3,2,1]
triplets(arr1, 12);