function replaceDivisible(x, y) {
    let returnValue = [];

    for (let i = 0; i < x.length; i++) {
        if(x[i] % y == 0) {
            returnValue.push("isDivisible");
        } else {
            returnValue.push(x[i]);
        }
    }

    return returnValue;
}

module.exports = replaceDivisible