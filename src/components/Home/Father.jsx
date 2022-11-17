import React from 'react'


import Son from './Son'

function Father(props) {
    console.log(props.children);

    // 这里的 children，并非当前 Father 组件中的 <div>Father</div> 和  <Son></Son>
    // 而是 App 组件使用 Father 组件时，在 Father 组件中插入的内容
    // props.children 可以解构出来 => {children}

    // children 可以是
    // 1. 普通文本
    // 2. 普通标签元素
    // 3. 函数 / 对象
    // 4. JSX

    // children 可以在 Father 组件中使用（类似插槽，但不是插槽）


    return (
        <div>
            <div>Father</div>
            {props.children}
            <Son>{props.children}</Son>
        </div>
    )
}

export default Father