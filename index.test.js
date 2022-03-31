//const { TestWatcher } = require('jest');
const {bmiCalc} = require ('./bmi.js');

test('below 18.5', () =>{
expect(bmiCalc(12.4)).toBe('underweight');
});

// test('below 18.5', () =>{
//     expect(bmiCalc(12.4)).toBe('underweight');
//     });

test('below 18.5', () =>{
        expect(bmiCalc(25.4)).toBe('overweight');
        });
