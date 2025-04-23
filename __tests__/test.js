import { exit } from '../index.js'

export const runTest = (test, expect) => test('exit', () => {
    expect(typeof exit === 'function').toEqual(true)
})