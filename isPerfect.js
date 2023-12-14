"use strict";
export default function isPerfect(n) {
    let arr = [];
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if(n.length > 5) break;
    if (n % i === 0) {
        arr.push(i);
        sum += i
    }
    }
    let result = [];
    result.push(n, arr, sum)
    return result;
}