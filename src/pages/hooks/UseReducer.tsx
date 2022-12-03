import React, { useReducer } from 'react'

// 初始值
const initialCount: number = 1

// 类型缩窄
type ActionType =
    { type: 'increment', payload: { count: number } } |
    { type: 'decrement', payload: { count: number } } |
    { type: 'initial' }


function reducer(state: typeof initialCount, action: ActionType) {
    switch (action.type) {
        case 'increment':
            return state + action.payload.count
        case 'decrement':
            return state - action.payload.count
        case 'initial':
            return countInit(initialCount)
        default:
            throw new Error('type does not exist')
    }
}

// 初始化count(一定逻辑运算)
function countInit(init: typeof initialCount) {
    return init * 2
}

function UseReducer() {
    const [count, countDispatch] = useReducer(reducer, initialCount, countInit)

    return (
        <div>
            <div>useReducer</div>
            <div>count: {count}</div>
            <button onClick={() => countDispatch({ type: 'decrement', payload: { count: 1 } })}>-1</button>
            <button onClick={() => countDispatch({ type: 'increment', payload: { count: 1 } })}>+1</button>
            <button onClick={() => countDispatch({ type: 'initial' })}>reset</button>
        </div>
    )
}

export default UseReducer