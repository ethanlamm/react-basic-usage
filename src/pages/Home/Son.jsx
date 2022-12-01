import React from 'react'

import GrandSon from './GrandSon'

const pannelLeft = {
    backgroundColor: 'yellow'
}

const pannelRight = {
    backgroundColor: 'pink'
}

function Son(props) {
    // children 可以是
    // 1. 普通文本
    // 2. 普通标签元素
    // 3. 函数 / 对象
    // 4. JSX

    const { msg, children, left, right } = props

    return (
        <div style={{ padding: '10px' }}>
            <div>Son</div>
            <div>{msg}</div>
            {children.map(item => item)}
            {/* 可依据索引取出具体的children */}
            <GrandSon>{children[1]}</GrandSon>
            <div style={{ padding: '10px' }}>
                <div>pannel</div>
                <div className='pannelLeft' style={pannelLeft}>{left}</div>
                <div className='pannelRight' style={pannelRight}>{right}</div>
            </div>
        </div>
    )
}

export default Son