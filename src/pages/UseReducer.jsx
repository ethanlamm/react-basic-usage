import React, { useReducer } from 'react'
// useReducer
// 将一些和同一个state"相关"的所有函数操作整合在一起，方便在组件中进行调用
// 适用于那些比较复杂的state，对于简单的state使用Reducer只能是徒增烦恼

// 公式：const [state, dispatch] = useReducer(reducer, initialArg, init);
/*
*   参数：
*       reducer : 整合函数
*           对于我们当前state的所有操作都应该在该函数中定义
*           该函数的返回值，会成为state的新值
*           reducer在执行时，会收到两个参数：
*               state 当前最新的state值
*               action 一个对象，在对象中会存储dispatch所发送的指令
*       initialArg : state的初始值，作用和useState()中的值是一样
* 
*   返回值：
*       数组：
*           第一个参数，state 用来获取state的值
*           第二个参数，state 修改的派发器函数
*                   通过派发器可以发送操作state的命令
*                   具体的修改行为将会由另外一个函数(reducer)执行
* */

// 为了避免reducer会重复创建，通常reducer会定义到组件的外部！！
function countReducer(count, action) {
    switch (action.type) {
        case 'increment':
            return count + 1;
        case 'decrement':
            return count - 1;
        default:
            throw new Error();
    }
}

// 初始化count
function countInit(initialCount) {
    // 通过一定逻辑运算给出count初始值
    return initialCount * 2
}

function UseReducer() {
    // 1.指定初始化：直接指定state初始值
    // const [count, countDispatch] = useReducer(countReducer, 0);

    // 2.惰性初始化：通过第三个参数(函数)计算(一定的逻辑运算)得出
    const [count, countDispatch] = useReducer(countReducer, 1, countInit);

    return (
        <div>
            <h4>UseReducer</h4>
            <div>count: {count}</div>
            <button onClick={() => countDispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => countDispatch({ type: 'increment' })}>+</button>
        </div>
    )
}

export default UseReducer