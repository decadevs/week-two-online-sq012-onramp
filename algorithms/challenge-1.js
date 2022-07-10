function isAnagram(str1, str2) {
 if (str1.length == str2.length) {

        let str1Arr = [];
        let str2Arr = [];

        for (let i = 0; i < str1.length; i++) {
            str1Arr.push(str1[i]);
        }

        for (let i = 0; i < str2.length; i++) {
            str2Arr.push(str2[i]);
        }

        // let str1ArrSorted = str1Arr.sort((a, b) => (a - b));
        // let str2ArrSorted = str2Arr.sort((a, b) => (a - b));

        let str1ArrSorted = str1Arr.sort();
        let str2ArrSorted = str2Arr.sort();

        console.log(str1ArrSorted);
        console.log(str2ArrSorted);

        let returnValue = false;

        for (let i = 0; i < str1ArrSorted.length; i++) {

            if (str1ArrSorted[i] != str2ArrSorted[i]) {
                returnValue = false;
                break;
            } else {
                returnValue = true;
            }
        }

        return returnValue;

    } else {
        return false;
    }
 
}
module.exports = isAnagram
