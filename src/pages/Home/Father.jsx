import React from 'react'


import Son from './Son'

// https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html#gatsby-focus-wrapper
const Left = () => {
    return <div>Left组件</div>
}

const Right = () => {
    return <div>Right组件</div>
}

function Father() {
    return (
        <div style={{ padding: '10px' }}>
            <div>Father</div>
            <Son msg='通过props传入的数据'
                left={<Left />}
                right={<Right />}
            >
                <div>Father组件插入Son组件的内容1</div>
                <div>Father组件插入Son组件的内容2</div>
            </Son>
        </div>
    )
}

export default Father