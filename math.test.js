const { add, subtract, multiply, divide } = require('./math');

test('add 2+3 to equal 5',() =>
    { expect (add(2,3)).toBe(5);
    });