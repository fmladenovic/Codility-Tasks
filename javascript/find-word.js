/*
    Find the encrypted word that in the array
    for example;
    A = [ 'U>N', 'G>A', 'R>Y', 'H>U', 'N>G', 'A>R' ]
    Word = HUNGARY
*/

console.log('// FIND WORD //')

function solution(A) {
    const linkObj = {};
    const firstLetterObj = {};
    for( const tuple of A) {
        const splited = tuple.split('>');
        linkObj[ splited[0] ] = splited[1];
        firstLetterObj[ splited[0] ] === 0 ? delete firstLetterObj[ splited[0] ] : firstLetterObj[ splited[0] ] = 0;
        firstLetterObj[ splited[1] ] === 0 ? delete firstLetterObj[ splited[1] ] : firstLetterObj[ splited[1] ] = 0;
    }
    const firstLetterCand = Object.keys(firstLetterObj); // first and last letter left;
    let letter = linkObj[firstLetterCand[0]] ? firstLetterCand[0] : firstLetterCand[1];
    let word = letter;
    while( linkObj[letter] ) {
        letter = linkObj[letter];
        word += letter;
    }  
    return word;
}

test(['U>N', 'G>A', 'R>Y', 'H>U', 'N>G', 'A>R']); // HUNGARY
function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}