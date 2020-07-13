let restoreIpAddresses = function (s) {
    const backtrace = (str, start, array, res) => {
        const remainLength = str.length - start;
        if (array.length === 4) {
            if (remainLength === 0) {
                res.push(array.join('.'));
            }
            return;
        }
        if (remainLength > (4 - array.length) * 3) {
            return;
        }
        for (let i = 1; i < str.length && i <= 3; ++i) {
            const substr = str.substr(start, i);
            if (i == 3 && + substr > 255) {
                continue;
            } else if (i > 1 && substr.indexOf('0') === 0) {
                continue;
            } else {
                array.push(substr);
                backtrace(str, start + i, array, res);
                array.pop();
            }
        }
    }
    const res = [];
    backtrace(s, 0, [], res);
    return res;
};



console.log(restoreIpAddresses('25525511135'));
// ["255.255.11.135", "255.255.111.35"]

// ["255.25.51.135","255.255.1.135","255.255.11.35","255.255.113.5"]
console.log(restoreIpAddresses('2552551135'));
// []
console.log(restoreIpAddresses('25525511305'));
// [ '0.0.0.0' ]
console.log(restoreIpAddresses('0000'));