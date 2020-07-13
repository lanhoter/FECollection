let repeatedSubstringPattern = function (str) {
    for (let i = parseInt(str.length / 2); i >= 1; --i) {
        if (str.length % i === 0) {
            let j = i;
            let sub = str.substring(0, j);
            while (str.indexOf(sub, j) == j) j += i;
            if (j == str.length) return true;
        }
    }
    return false;
};


console.log(repeatedSubstringPattern('abab'))