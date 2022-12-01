import React, { useEffect, useRef, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(1)
    const spanRef = useRef(null)
    console.log(count);

    useEffect(() => {
        spanRef.current.innerText = `count: ${count}`
        // console.log(spanRef);
    })

    // 1.函数体中的代码会在组件渲染前执行
    // 2.useEffect()中的回调函数会在组件每次渲染完毕之后执行，确保effect每次运行时，DOM都已经更新完毕，拿到最新的DOM
    // 3.依赖项：
    //  1）不添加：组件初次渲染后、组件每次更新后(不管是哪个状态引起的更新)
    //  2）空数组：组件初次渲染后执行一次
    //  3）特定依赖项：组件初次渲染后、在依赖项发生变化时

    // useEffect(() => {
    //     let timer = setInterval(() => {
    //         setCount(count + 1)
    //     }, 1000)

    //     return () => {
    //         clearInterval(timer)
    //     }
    // })

    // 4.清除的effect：
    // 在effect函数最后返回一个函数，该函数会在组件卸载时执行，清除掉前一次effect执行的所带来的影响，即React会在执行当前effect之前对上一个effect进行清除
    return (
        <div>
            <h4>UseEffect</h4>
            <span ref={spanRef}></span>&nbsp;&nbsp;
            <button onClick={() => setCount(count + 1)}>click</button>
        </div>
    )
}

export default UseEffect