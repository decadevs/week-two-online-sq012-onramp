function checkPrime(num) {
    let returnValue = true;

    if (num == 1) {
        return false;
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if(num % i == 0) {
                returnValue = false;
                break;
            } 
        }
    } else {
        return false;
    }

    return returnValue;
}

module.exports = checkPrime