/*
    A vending machine has the following denominations: 1c, 5c, 10c, 25c, 50c, and $1. 
    Your task is to write a program that will be used in a vending machine to return change. 
    Assume that the vending machine will always want to return the least number of coins or notes. 
    Devise a function getChange(M, P) where M is how much money was inserted into the machine 
    and P the price of the item selected, that returns an array of integers representing the number of 
    each denomination to return. 
    Example:
    getChange(5, 0.99) should return [1,0,0,0,0,4]
*/

console.log('// CHANGE CALCULATION //')

function solution(M, P) {
    let change = (M - P) * 100;
    const coins = [ 1, 5, 10, 25, 50, 100 ];
    const toReturn = [ 0, 0, 0, 0, 0, 0];
    for( let i = toReturn.length - 1; i >= 0; i-- ) {
        toReturn[i] = Math.floor( change / coins[i] );
        change = change - Math.round(toReturn[i] * coins[i] );
    }
    return toReturn;
}

test(5, 0.99);  // => [ 1, 0, 0, 0, 0, 4 ]
test(3, 1);     // => [ 0, 0, 0, 0, 0, 2 ]
test(10, 2.5);  // => [ 0, 0, 0, 0, 1, 7 ]

function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}