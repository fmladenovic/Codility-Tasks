/*
    https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/
    Find a maximum sum of a compact subsequence of array elements.
*/

console.log('// MAX SLICE SUM //');

function solution(A) {
    let maxTotal = 0;
    for( let i = 0; i < A.length; i++ ) {
        let currentSum = A[i];
        for( j = i + 1; j < A.length; j++ ) {
            if( currentSum > currentSum + A[j] ) {
                i = j;
                break;
            }
            currentSum += A[j];
            if( currentSum > maxTotal ) { maxTotal = currentSum; }
        }
    } 
    return maxTotal;
}

test([3, 2, -6, 4, 0, 2, 5, -6, 1]);

function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}