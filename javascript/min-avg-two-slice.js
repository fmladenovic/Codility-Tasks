
/*
    https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
    
    Find the minimal average of any slice containing at least two elements.
*/

console.log('// MIN AVG TWO SLICE //');

function solution(A) {
    let minAvg = Infinity;
    let minInd = -1;

    for( let i = 0; i < A.length; i++ ) {

        const holdValues = [ A[i] ];
        let holdAvg = Infinity;

        for( j = i + 1; j < A.length; j++ ) {
            holdValues.push( A[j] );
            const newAvg =  [...holdValues ].reduce((a, b) => a + b, 0) / holdValues.length;

            if( holdAvg < newAvg ) { break; }

            holdAvg = newAvg;
            if( minAvg > holdAvg ) { 
                minAvg = holdAvg;
                minInd = i; 
            }
        }
    } 
    return minInd;
}

test([3, 2, -6, 4, 0, 2, 5, -6, 1]);
test([4, 2, 2, 5, 1, 5, 8]);

function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}