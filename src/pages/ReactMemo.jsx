import React, { useState } from 'react'

/**
 * React.memo()
 *      作用：依据props的变化来缓存组件，用作性能优化
 *      参数：一个组件(被缓存的组件)
 *      返回：包装过的具有缓存功能的组件
 *      注意：React.memo只会根据props判断是否需要重新渲染，和state和context无关
 *           当state或context发生变化时，组件依然会正常的进行重新渲染
 */

// 使用方法：用React.memo包裹A组件
const A = React.memo(({ flag }) => {
    console.log('A组件渲染了');

    return (
        <div>
            <div>A组件</div>
            <span>{flag ? 'true' : 'false'}</span>
        </div>
    )
})


function ReactMemo() {
    console.log('ReactMemo组件渲染了');
    const [count, setCount] = useState(1)
    const clickHandler = () => {
        setCount(prevState => prevState + 1)
    }
    const flag = count % 5 === 0

    return (
        <div>
            <h4>ReactMemo</h4>
            <div>ReactMemo组件渲染了: {count}次</div>
            <button onClick={clickHandler}>增加</button>
            <A flag={flag} />
        </div>
    )
}

export default ReactMemo