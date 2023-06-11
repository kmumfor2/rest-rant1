const add = require('./add');

test('adds 1 + 2 to equal 3', () => {
    const sum = add(1,2)
    expect(sum).toBe(3);
});