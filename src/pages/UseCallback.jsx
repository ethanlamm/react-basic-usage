import React, { useState, useCallback } from 'react'

/*
*   useCallback()
*		作用：依据依赖项的变化来缓存函数，用作性能优化
*       参数：
*           1. 回调函数
*           2. 依赖数组
*               - 空数组：首次渲染时创建，之后不会重新创建
*               - 特定依赖项：首次渲染时创建、依赖项改变时重新创建
*               - 不指定依赖数组：回调函数每次都会重新创建
*               - 一定要将回调函数中使用到的所有变量都设置到依赖数组中
*                   除了（setState）
* */



function UseCallback() {
    console.log('UseCallback组件渲染了');
    const [count, setCount] = useState(1)

    // const clickHandler = () => {
    //     setCount(prevState => prevState + 1)
    // }
    // 直接传给A组件clickHandler，当UseCallback组件重新渲染时，A组件也会重新渲染
    // 因为UseCallback组件重新渲染时，clickHandler函数会重新创建，
    // 则传给A组件的clickHandler与上一次的不一样，所以，Props改变了，A组件重新渲染

    // 方法：使用useCallback
    const clickHandler = useCallback(() => {
        setCount(prevState => prevState + 1)
    }, [])  // [] 只有第一次渲染时才会创建

    return (
        <div>
            <h4>UseCallback</h4>
            <div>count: {count}</div>
            <A clickHandler={clickHandler} />
        </div>
    )
}

const A = React.memo(({ clickHandler }) => {
    console.log('A组件渲染了');

    return (
        <div>
            <div>A组件</div>
            <button onClick={clickHandler}>click</button>
        </div>
    )
})

export default UseCallback