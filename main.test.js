//👉 Write your tests below here:
import{expect, test}from '@jest/globals'
import { bmiCalculator } from './main.js'

test ('check example 1',() => {
    const actual = bmiCalculator(80, 1.8)
    const expected = 25
    expect(actual).toStrictEqual(expected);
})

test ('check example 1',() => {
    const actual = bmiCalculator(60, 1.6)
    const expected = 23
    expect(actual).toStrictEqual(expected);
})

test ('check example 1',() => {
    const actual = bmiCalculator(120, 2.2)
    const expected = 25
    expect(actual).toStrictEqual(expected);
})