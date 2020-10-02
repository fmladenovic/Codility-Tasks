/*
    https://app.codility.com/programmers/lessons/6-sorting/distinct/
    Compute number of distinct values in an array.
*/
function solution(A) {
    var seen = {};
    for (let num of A) {
        if( !seen[num] ) { seen[num] = 1 };
    }
    return Object.values(seen).length;
}

test([2, 1, 1, 2, 3, 1]); // 3

function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}