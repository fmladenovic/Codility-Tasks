/*
    https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/    
    Compute number of integers divisible by k in range [a..b].
*/
console.log('// COUNT DIV //');

function solution(A, B, K) {
    const first = Math.round( A / K );
    const last =  Math.floor( B / K );   
    return ( last - first ) + ( A % K == 0 ? 1 : 0 );
}

test(6, 11, 2); // 3
test(4, 22, 3); // 6

function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}