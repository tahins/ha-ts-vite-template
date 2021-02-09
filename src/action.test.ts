import { test } from '@jest/globals'
import { increaseLove } from './action'
import appState from '../types/appState'

describe("increaseLove method", () => {
    const mockState: appState = { libraries: [], loveCount: 0 }

    test("should increase love", () => {
        const newState = increaseLove(mockState)
        expect(newState.loveCount).toBe(1)
    })
})