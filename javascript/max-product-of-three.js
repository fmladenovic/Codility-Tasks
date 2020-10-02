/*
    https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/
    Find a maximum sum of a compact subsequence of array elements.
*/
console.log('// MAX SLICE SUM //');

function solution(A) {
    maxTotal = 1;
    let number = null;
    for( let i = 0; i < 3; i++ ) {
        number = Math.max(...A);
        A.splice( A.indexOf(number), 1 );
        maxTotal *= number;
    }
    return maxTotal;
}

test([3, 2, -6, 4, 0]);
test([-3, 1, 2, -2, 5, 6]);

function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}