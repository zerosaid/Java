const myNumbers = [4, 1, -20, -7, 5, 9, -6];

const posNumbers = removeNeg(myNumbers, x => x >= 0);

function removeNeg(vec, callback) {
    let vecRes = [];
    vec.forEach(num => {
        if (callback(num)) vecRes.push(num);
    });
    return vecRes;
}

console.log(posNumbers);
