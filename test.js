let arr = [1, 3, 2, 5, 6, 4];

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // let a = Math.max(arr[i])

        // console.log(a)
        for (let j = 0; j < arr.length; j++) {


            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

            if (arr[i] > arr[j]) {
                let max = arr[j];

                console.log('max', max)
            }


        }
    }
    return arr;

}

console.log(sort(arr));