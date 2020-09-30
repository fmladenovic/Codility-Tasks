  
/*
    https://app.codility.com/programmers/lessons/1-iterations/
    Find longest sequence of zeros in binary representation of an integer.
*/

console.log('//  BINARY GAP //');

function solution(N) {

    const b = N.toString(2);
    let zerosForTest = '0'.repeat(b.length - 1);

    while( zerosForTest ) {
        if( b.includes( zerosForTest ) ) {
            return zerosForTest.length;
        }
        zerosForTest = zerosForTest.slice(0, -1);
    }

    return -1;
}

test( 1023 );
test( 1024 );


function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}