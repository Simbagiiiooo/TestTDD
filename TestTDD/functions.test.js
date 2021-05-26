// const functions = require('./functions');

// test('Adds 2 + 2 to equal 4', () => {
//     expect(functions.add(2, 2)).toBe(4);
// });

// test('Adds 2 + 2 to NOT equal 5', () => {
//     expect(functions.add(2, 2)).not.toBe(5);
// });

const functions = require('./functions.js');

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('checkValue Should be falsy when argument is undefined', () => {
    expect(functions.undefined()).toBe(undefined);
});

// Less than or greater than
test('Should be under or equal to 1600', () => {
        const load1 = 800;
        const load2 = 800;
        expect(load1 + load2).toBe(1600)
});

// Regex
test('There is no I in team', () => {
        expect('team').not.toBe('I');
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toBe(usernames)
});