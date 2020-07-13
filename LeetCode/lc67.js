// Given two binary strings, return their sum (also a binary string).
//
//
//
// For example,
// a = "11"
// b = "1"
// Return "100".


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
    let carry = 0;
    let len1 = a.length;
    let len2 = b.length;
    let res = '';
    while (len1 > 0 || len2 > 0) {
        let sum = (+a[len1 - 1] || 0) + (+b[len2 - 1] || 0) + carry;
        carry = Math.floor(sum / 2);
        res = sum % 2 + res;
        len1--;
        len2--;
    }
    if (carry) res = '1' + res;
    return res;
};


// using the proposed BigInt object.
// The idea is to use inputs, a and b to build two binary literals.
// Calculating the sum is done by calling the BigInt function on our binary literals,
// adding them together and returning the sum with a call to the toString method with 2 as the argument,
// since we are working with binary numbers.

const addBinary2 = function (a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2)
};


console.log(addBinary("11", "1"))
console.log(addBinary("1010", "1011"))


console.log(addBinary2("11", "1"))
console.log(addBinary2("1010", "1011"))