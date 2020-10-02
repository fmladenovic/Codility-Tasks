/*
    https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
    Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.
*/

console.log('// MAX COUNTERS //');

function solution(N, A) {
    const counters = new Array(N).fill(0);
    for( let i = 0; i < A.length; i++ ) {
        for( let j = 0; j < N; j++ ) {
            if( A[i] === N + 1 ) { 
                counters.fill( Math.max( ...counters ) );
                break;
            }
            if( j === A[i] - 1 ) { 
                ++counters[j];
                break;
            }
        }
    }
    return counters;
}


test(5, [3, 4, 4, 6, 1, 4, 4]);
test(1, [2, 1, 1, 2, 1]);
test(1, [1]);

function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}