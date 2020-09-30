/*
    https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
    
    Determine whether a given string of parentheses (multiple types) is properly nested. 
*/

console.log('//  BRACKETS  //');

function solution( S ) {
    if ( S === '' ) { return 1; }
    if ( S.length % 2 !== 0 ) { return 0; }

    const brackets = [ ...S ]
    const bracketPair = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    }

    let finalArray = [];
    for( let bracket of brackets ) {
        if( !bracketPair[bracket] ) {
            finalArray.push( bracket );
        } else {
            if( finalArray[ finalArray.length - 1 ] !== bracketPair[bracket] ) { return 0; }
            finalArray.splice(-1,1);
        }
    }
    return finalArray.length === 0 ? 1 : 0;
}

test('{[()()]}');                   // 1
test('([)()]');                     // 0
test('');                           // 1
test(')(');                         // 0
test('({{({}[]{})}}[]{})');         // 1
test('()(()())((()())(()()))');     // 1

function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}