import counterReducer, {decrement, increment} from "./counterReducer";

describe('counterReducer TEST', () => {
    test('incr', () => {
        expect(counterReducer({value: 0}, increment())).toEqual({value: 1})
    })

    test('decr', () => {
        expect(counterReducer({value: 0}, decrement())).toEqual({value: -1})
    })

    test('with empty state', () => {
        expect(counterReducer(undefined, decrement())).toEqual({value: -1})
        expect(counterReducer(undefined, increment())).toEqual({value: 1})
    })
})