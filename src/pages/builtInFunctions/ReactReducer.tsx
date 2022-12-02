import React, { useReducer } from 'react'

// React.Reducer<S,A>，useState的整合方案
// 语法：const [state, dispatch] = useReducer(reducer, initialArg, init);

// state类型
type count = number

// action接口
interface action {
    type: string
    payload: {
        [propName: string]: any
    }
}

// 为了避免reducer会重复创建，通常reducer会定义到组件的外部！！
const countReducer: React.Reducer<count, action> = (count, action) => {
    switch (action.type) {
        case 'increment':
            return count + action.payload.count
        case 'decrement':
            return count - action.payload.count
        default:
            return count
    }
}

// 初始化count
function countInit(initialCount: number) {
    // 通过一定逻辑运算给出count初始值
    return initialCount * 2
}

function ReactReducer() {
    const [count, countDispatch] = useReducer(countReducer, 1, countInit)

    return (
        <div>
            <div>ReactReducer</div>
            <div>count: {count}</div>
            <button onClick={() => countDispatch({ type: 'decrement', payload: { count: 1 } })}>-1</button>
            <button onClick={() => countDispatch({ type: 'increment', payload: { count: 1 } })}>+1</button>
        </div>
    )
}

export default ReactReducer