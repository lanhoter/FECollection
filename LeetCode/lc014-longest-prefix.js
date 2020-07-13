let longestCommonPrefix = (strs) => {
    if (strs.length < 2) {
        return !strs.length ? '' : strs[0];
    }

    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) {
            i++;
        };
        return prev.slice(0, i);
    });
};


console.log(longestCommonPrefix(["flower","flow","flight"]))