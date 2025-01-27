function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            res.push(arr[i]);
        }
    }
    return res;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 !== 0) {
            res.push(arr[i]);
        }
    }
    return res;
}


function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        while (num > 1) {
            if (num % 2 !== 0) break;
            num /= 2;
        }
        if (num === 1) res.push(arr[i]);
    }
    return res;
}


function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        while (num > 1) {
            if (num % n !== 0) break;
            num /= n;
        }
        if (num === 1) res.push(arr[i]);
    }
    return res;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let res = [];
    for (let i = 0; i < arr.length / 2; i++) {
        res.push(arr[i]);
    }
    return res;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let res = [];
    for (let i = Math.ceil(arr.length / 2); i < arr.length; i++) {
        res.push(arr[i]);
    }
    return res;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
