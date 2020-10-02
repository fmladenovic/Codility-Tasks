/*
    https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
    Find the earliest time when a frog can jump to the other side of a river.
*/
console.log('// FROG RIVER ONE //');

function solution(X, A) {
    const leaves = [];
    let i = 1;
    for( let l of A ) {
        if( !leaves[ l-1 ] ) { leaves[ l-1 ] = ++i; }
    }
    return leaves.filter(n => n).length < X ? -1 : Math.max( ...leaves );
}

test(5, [1, 3, 1, 4, 2, 3, 5, 4]); // 6

function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}