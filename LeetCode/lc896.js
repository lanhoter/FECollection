// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array A is monotone increasing if for all i <= j, A[i] <= A[j].
// An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
// Return true if and only if the given array A is monotonic.


const isMonotonic = (arr) => {
    let inc = 1;
    let dec = 1;
    arrLen = arr.length;
    for (let i = 1; i < arrLen; ++i) {
        inc += (arr[i - 1] <= arr[i]);
        dec += (arr[i - 1] >= arr[i]);
    }
    return (inc == arrLen) || (dec == arrLen);
};


const isMonotonic2 = (arr) => {
    let flag = 0; //increasing - 1; decreasing -2
    if (arr.length <= 1) return true;
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > arr[i - 1]) {
            if (flag === 2) return false;
            flag = 1;
        } else if (arr[i] < arr[i - 1]) {
            if (flag === 1) return false;
            flag = 2;
        }
    }
    return true;
};


console.log(isMonotonic([1, 2, 2, 3]))
console.log(isMonotonic([6, 5, 4, 4]))
console.log(isMonotonic([1, 3, 2]))
console.log(isMonotonic([1, 2, 4, 5]))
console.log(isMonotonic([1, 1, 1]))



console.log(isMonotonic2([1, 2, 2, 3]))
console.log(isMonotonic2([6, 5, 4, 4]))
console.log(isMonotonic2([1, 3, 2]))
console.log(isMonotonic2([1, 2, 4, 5]))
console.log(isMonotonic2([1, 1, 1]))