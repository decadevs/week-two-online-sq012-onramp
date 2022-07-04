function missingNumber(numArr) {
    let missedNum = [];

    for (let i = 1; i < 10; i++) {
        if (numArr.includes(i)) {
            continue;
        } else {
            missedNum.push(i);
        }
    }

    const sortedMissedMum = missedNum.sort((a, b) => (a - b))
    if(sortedMissedMum.length == 0) {
        return false;
    } else if (sortedMissedMum.length == 1) {
        return sortedMissedMum[0];
    } else {
        return sortedMissedMum;
    }
}

module.exports = missingNumber