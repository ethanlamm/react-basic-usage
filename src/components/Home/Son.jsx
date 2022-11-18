import React from 'react'

import GrandSon from './GrandSon'

function Son(props) {
    // children 可以是
    // 1. 普通文本
    // 2. 普通标签元素
    // 3. 函数 / 对象
    // 4. JSX

    const { msg, children } = props

    return (
        <div>
            <div>Son</div>
            <div>{msg}</div>
            {children.map(item => item)}
            {/* 可依据索引取出具体的children */}
            <GrandSon>{children[1]}</GrandSon>
        </div>
    )
}

export default Son