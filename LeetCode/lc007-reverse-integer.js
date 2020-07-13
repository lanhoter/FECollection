let reverse = (x) => {
    // covert to array
    let numberToArray = String(Math.abs(x)).split('');

    // covert string
    let result = '';
    for (const i = 0; i < numberToArray.length;) {
        result += numberToArray.pop();
    }
    result = x > 0 ? Number(result) : - Number(result);

    // 超 [-Math.pow(2, 31), Math.pow(2, 31) - 1] 判断
    if (result > Math.pow(2, 31) - 1 || result < - Math.pow(2, 31))
        result = 0;

    return result;
};


console.log(reverse(-1234))