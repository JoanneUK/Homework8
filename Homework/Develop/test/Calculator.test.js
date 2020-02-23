const Calculator = require('../lib/joanne');

test('can add two numbers', ()=>{
    expect(Calculator(2, 3 , 'add')).toBe(5)
})

test('minus' , ()=>{
    expect(Calculator(7, 4, 'minus')).toBe(3)
})

test('mult' , ()=>{
    expect(Calculator(3, 3, 'mult')).toBe(9)
})

test('testing if jest is working properly', ()=>{
    expect(3*4).toBe(12)
})
