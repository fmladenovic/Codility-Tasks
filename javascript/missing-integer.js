console.log('// MISSING INTEGER //\n\n');
/*
    https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
    Find the smallest positive integer that does not occur in a given sequence.
*/

function solution(A) {
    const nCheck = [];
    const pCheck = [];
    for( const el of A ) {
        if( el < 0 ){
            nCheck[ -1 * el ] = el; 
        } else {
            pCheck[el] = el;
        }
    }
    for( let i = 1; i < nCheck.length; i++ ) {
        if( !nCheck[i] ) { return -1 * i; }
    }
    for( let i = 1; i < pCheck.length; i++ ) {
        if( !pCheck[i] ) { return i; }
    }
    return pCheck.length > 0 ? Math.max( ...pCheck.splice(1, pCheck.length) ) + 1 : 1;
}

test([1, 3, 6, 4, 1, 2]);
test([-1, -3]);
test([-1, -2]);
test([1, 2, 3]);
test([2]);

function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}