import React, { useMemo, useState } from 'react'

/**
 * useMemo()
 *      公式：const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
 *      作用：缓存函数结果，用作性能优化
 *      参数：
 *          第一个参数：创建函数，当依赖项改变时，重新创建执行
 *                     该函数的返回值将作为useMemo函数的返回值
 *          第二个参数：依赖项(数组)
 *      返回：创建函数的结果
 */

function Sum({ a, b }) {
    console.log('Sum执行了')
    return <span>{a + b}</span>
}

function UseMemo() {
    const [count, setCount] = useState(1)

    const clickHandler = () => {
        setCount(prevState => prevState + 1)
    }
    // 当count改变时，整个组件会重新渲染，则sum函数也会重新执行
    // 当sum函数计算非常复杂时，多次渲染则会影响性能
    // 可用useMemo缓存函数的计算结果，达到性能优化

    let a = 123
    let b = 456

    // function sum(a, b) {
    //     console.log('sum执行了')
    //     const begin = +new Date()
    //     while (true) {
    //         if (Date.now() - begin > 3000) break
    //     }
    //     return a + b
    // }

    if (count % 5 === 0) a = a + 1
    const result = useMemo(() => <Sum a={a} b={b} />, [a])

    return (
        <div>
            <h4>UseMemo</h4>
            {/* <span>sum的结果: {useMemo(() => sum(a, b), [])}</span> */}
            <span>sum的结果: {result}</span>
            <div>count: {count}</div>
            <button onClick={clickHandler}>点我</button>
        </div>
    )
}

export default UseMemo