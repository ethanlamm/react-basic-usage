import React from 'react'


import Son from './Son'

function Father() {
    return (
        <div>
            <div>Father</div>
            <Son msg='通过props传入的数据'>
                <div>Father组件插入Son组件的内容1</div>
                <div>Father组件插入Son组件的内容2</div>
            </Son>
        </div>
    )
}

export default Father